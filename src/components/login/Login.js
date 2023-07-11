import {Alert, Button, Card, CardContent, Checkbox, FormControlLabel, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";

const users = [
    {
        id: 1,
        email: 'admin@gmail.com',
        password: 'password'
    },
    {
        id: 2,
        email: 'luan@gmail.com',
        password: '1234'
    }
]

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isRememberMe: false
    });

    const [invalid, setInvalid] = useState(false)

    const [errorMess, setErrorMess] = useState("");

    useEffect(() => {
        console.log('xin chao')
    }, [])

    useEffect(() => {
        console.log('Toi thich ban')
    }, [errorMess])


    const handleChange = (e) => {
        if (e.target.name == 'email') {
            let email = e.target.value;
            let pattern = /^[a-zA-Z]+\@+[a-z]+\.+(com|vn)$/;
            if (!pattern.test(email)) {
                setInvalid(true)
            } else {
                setInvalid(false)
            }
        }
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCheckedRemember = () => {
        setFormData({...formData, isRememberMe: !formData.isRememberMe})
    }

    const handleSubmit = () => {
        const {email, password} = formData
        const userLogin = users.find(user => user.email === email && user.password === password);
        if (!userLogin) {
            setErrorMess("Account not exist")
        } else {
            localStorage.setItem('user', userLogin.email)
            setErrorMess("")
        }
    }


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Card sx={{ maxWidth: 300 }}>
                    <CardContent>
                        <h2 style={{ textAlign: 'center'}}>Login Form</h2>
                        { errorMess && <Alert severity="error">{errorMess}!</Alert>}
                        <div>
                            <TextField  error={invalid}  name="email" value={formData.email} onChange={handleChange} id="email" label="Email" variant="outlined" />
                            {invalid && <p style={{color: 'red'}}>Email invalid</p>}
                        </div>
                        <div>
                            <TextField name="password" value={formData.password} onChange={handleChange} id="password" label="Password" variant="outlined" />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <FormControlLabel control={<Checkbox checked={formData.isRememberMe} name="isRememberMe" onChange={handleCheckedRemember} />} label="Remember me" />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" onClick={handleSubmit}>Login</Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
