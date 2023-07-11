import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import Image from 'react-bootstrap/Image';
import {findUserByUserName, getUserAPI} from "../../service/api.service"

function UserList() {
    const [users, setUser] = useState([]);
    const [progress, setProgress] = useState(0);
    const [keyword, setKeyword] = useState("");


    useEffect(() => {
        setTimeout(() => {
            getUserAPI().then(res => {
                setUser(res.data)
            })
        }, 2000)

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const searchUser = () => {
        if (keyword) {
            findUserByUserName(keyword).then(res => {

                    setUser([res.data]);


            }).catch(err => {
                console.log(err.message);
            })
        }

    }

    return (
        <>
            {users.length == 0 ? <LinearProgress variant="determinate" value={progress} /> : (
                <>
                <input type="text" onChange={(e) => setKeyword(e.target.value)}/>
                    <button onClick={searchUser}>Search</button>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Link github</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    { users.length == 0 ? <p>loading</p> : users.map(user => (
                        <tr>
                            <td>1</td>
                            <td>{user.login}
                                <Image width="50" src={user.avatar_url} roundedCircle />
                            </td>
                            <td><a target="_blank" href={user.html_url}>{user.html_url}</a></td>
                            <td>@mdo</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </>
            )}
        </>
    )
}

export default UserList;
