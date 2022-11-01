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

export default function LoginFormVerify() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');

    const handleClick = async () => {
        login(otp).then(result => {
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


                <TextField name="otp" label="OTP Code" value={otp} onChange={e => setOtp(e.target.value)} />

                
            </Stack>

            <br />

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Verify
            </LoadingButton>
        </>
    );
}
