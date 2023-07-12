import {Button, Card, CardContent, Checkbox, FormControlLabel, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";

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

const validateLogin = Yup.object({
    password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .max(32, 'Must be 32 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
})

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isRememberMe: false
    });
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: formData,
        validationSchema: validateLogin,
        onSubmit: values => {
            console.log(values);
            // chuyen trang
            navigate('/users')
        },
    });


    const handleSubmit = () => {
        formik.handleSubmit();
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <Card sx={{maxWidth: 300}}>
                    <CardContent>
                        <h2 style={{textAlign: 'center'}}>Login Form</h2>
                        <div>
                            <TextField error={!!formik.errors.email}
                                       name="email"
                                       value={formik.values.email}
                                       onChange={formik.handleChange}
                                       id="email"
                                       label="Email"
                                       variant="outlined"
                                       helperText={formik.errors.email}
                            />

                        </div>
                        <div>
                            <TextField error={!!formik.errors.password}
                                       name="password"
                                       value={formik.values.password}
                                       onChange={formik.handleChange}
                                       id="password"
                                       label="Password"
                                       variant="outlined" type="password"
                                       helperText={formik.errors.password}/>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <FormControlLabel
                                control={<Checkbox checked={formik.values.isRememberMe} name="isRememberMe"
                                                   onChange={formik.handleChange}/>} label="Remember me"/>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained" type="submit">Login</Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
