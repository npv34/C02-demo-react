import {useState} from "react";
import {useFormik} from "formik";

let data = [
    {
        id: 1,
        name: "nam",
        email: "nam1@gmail.com",
        phone: "123-456-0900",
        role: 1,
    },
    {
        id: 2,
        name: "nam",
        email: "nam2@gmail.com",
        phone: "123-456-4324",
        role : 2
    },
    {
        id: 3,
        name: "nam",
        email: "nam3@gmail.com",
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
        email: "nam12@gmail.com",
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

    const formAdd = useFormik({
        initialValues: form,
        onSubmit: (values, {resetForm}) => {
            const indexItem = users.findIndex(item => item.email == values.email);
            if (indexItem == -1) {
                setUsers([...users, values])
            } else {
                users[indexItem] = values;
                setUsers([...users])
            }
            resetForm();
        }
    })

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

    const handleEdit = (index) => {
        let currentUser = users[index];
        formAdd.setValues(currentUser)
    }

    return (
        <>
            <h2>
                {title}
            </h2>
            <form onSubmit={formAdd.handleSubmit}>
                name: <input type="text"
                             name="name"
                             value={formAdd.values.name}
                             onChange={formAdd.handleChange}/>
                <br/>
                email: <input type="email"
                              value={formAdd.values.email}
                              name="email" onChange={formAdd.handleChange}/>
                <br/>
                phone: <input type="text"
                              value={formAdd.values.phone}
                              name="phone"
                              onChange={formAdd.handleChange}/>
                <br/>
                <button type="submit">add</button>
            </form>
            Search: <input type="text" onChange={searchUser}/>

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
                                <button onClick={() => handleEdit(index)}>Edit</button>
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
