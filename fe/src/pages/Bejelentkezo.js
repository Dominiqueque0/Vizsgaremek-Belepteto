import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Bejelentkezo.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------BEJELENTKEZES----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/

export default function Bejelentkezo() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError('Kérjük írja be a felhasználónevet és a jelszót is.');
                return;
            }

            const response = await axios.post('/user/login', { username, password, userType });
            if (response.data.userType === "PORTAS") {
                history('/portas');
            }
            if (response.data.userType === "ADMIN") {
                history('/admin');
            }
            localStorage.setItem('auth', response.data.userType);
            localStorage.setItem('token', 'Bearer ' + response.headers['jwt-token']);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Nem jó a felhasználónév vagy jelszó!');
        }
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.getItem('token');
    }, [items]);


    return (
        <>
            <div className="inputs">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    BEJELENTKEZÉS
                </Typography>
                <TextField
                    id="outlined-helperText"
                    label="Felhasználónév"
                    defaultValue=""
                    helperText=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        color: 'white',
                        bgcolor: 'white',
                        borderRadius: 2,
                        borderColor: 'white',
                        border: '3px'
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Jelszó"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        color: 'white',
                        bgcolor: 'white',
                        borderRadius: 2,
                        borderColor: 'white',
                        border: '3px'
                    }}
                />
                {error && <p className="text-danger"
                >{error}</p>}
                <Button
                    sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'blue' }}
                    onClick={handleLogin}
                >
                    Belépés
                </Button>
            </div>
        </>
    )
}