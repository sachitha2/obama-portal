import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { setCookie } from '../../../utils/cookies';
import Iconify from '../../../components/iconify';
import { login } from "../../../services/loginServices";

// ----------------------------------------------------------------------

export default function LoginForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleClick = async () => {
        login(email, pwd).then(result => {
                setCookie('userId', result.data.userId);
                setCookie('role', result.data.role);
                navigate('/dashboard', { replace: true });
            }).catch(e => {
                alert(e.response.data)
            })
    };

    return (
        <>
            <Stack spacing={3}>

                <Stack justify="center" alignItems="center">
                    <img src="/assets/illustrations/cart.png" alt="login" width={436} />
                </Stack>


                <TextField name="email" label="Email address" value={email} onChange={e => setEmail(e.target.value)} />

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={pwd} onChange={e => setPwd(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <br />

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Login
            </LoadingButton>
        </>
    );
}
