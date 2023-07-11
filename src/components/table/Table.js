import {useState} from "react";

let data = [
    {
        id: 1,
        name: "nam",
        email: "nam@gmail.com",
        phone: "123-456-0900",
        role: 1,
    },
    {
        id: 2,
        name: "nam",
        email: "nam@gmail.com",
        phone: "123-456-4324",
        role : 2
    },
    {
        id: 3,
        name: "nam",
        email: "nam@gmail.com",
        phone: "123-456-4324",
        role : 3
    },
    {
        id: 4,
        name: "phong",
        email: "phong@gmail.com",
        phone: "123-456-4324",
        role : 2
    },
    {
        id: 5,
        name: "nam1",
        email: "nam1@gmail.com",
        phone: "123-456-4324",
        role : 2
    }
];

function Table() {
    const [title, setTitle] = useState("Danh sach hoc vien")
    const [users, setUsers] = useState(data);
    const [checked, setChecked] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const deleteUser = (id) => {
         if (!window.confirm("Are you sure you want to delete this user")) {
             return;
         }
         let dataFilter = users.filter(item => item.id !== id);
         data = dataFilter
         setUsers(dataFilter)
    }

    const searchUser = (e) => {
        let keywords = e.target.value;
        if (keywords) {
            let dataFilter = data.filter(item => item.name.includes(keywords));
            setUsers(dataFilter)
        }else {
            setUsers(data)
        }
    }

    const checkedAll = () => {
        setChecked(!checked)
    }

    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, form])
    }

    const handleChange = (e) => {
        let property = e.target.name;
        setForm({...form, [property]: e.target.value})
    }



    return (
        <>
            <h2>
                {title}
            </h2>
            <input type="text" onChange={searchUser}/>
            <form onSubmit={addUser}>
                name: <input type="text" name="name" onChange={handleChange}/>
                <br/>
                email: <input type="email" name="email" onChange={handleChange}/>
                <br/>
                phone: <input type="text" name="phone" onChange={handleChange}/>
                <br/>
                <button type="submit">add</button>
            </form>
            <table>
                <tr>
                    <td><input type="checkbox" onChange={checkedAll}/></td>
                    <td>#
                    </td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Role</td>
                    <td></td>
                </tr>
                {users.map((user, index) => {
                    let role = "user"
                    if (user.role === 3) {
                        role = "teacher"
                    } else if (user.role === 2) {
                        role = "admin"
                    }

                    return (
                        <tr key={user.id}>
                            <td><input type="checkbox" /></td>
                            <td>{ index + 1}</td>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td>{ user.phone }</td>
                            <td>{ role }</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default Table;
