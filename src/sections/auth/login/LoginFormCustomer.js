import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { setCookie } from '../../../utils/cookies';
import Iconify from '../../../components/iconify';
import { customerLogin } from "../../../services/loginServices";

// ----------------------------------------------------------------------

export default function LoginFormCustomer() {
    const navigate = useNavigate();

    const [mobileNumber, setMobileNumber] = useState('');

    const handleClick = async () => {
        if(!/^((\+\d{11})|\d{10})$/.test(mobileNumber)){
            alert("Invalid Mobile No");
        }else{
            customerLogin(mobileNumber).then(result => {
            
                setCookie('userId', result.data);
                setCookie('role', "CUSTOMER");
                navigate('/dashboard/customer-menu', { replace: true });
            }).catch(e => {
                alert(e.response.data)
            })
        }
        
    };

    return (
        <>
            <Stack spacing={3}>

                <Stack justify="center" alignItems="center">
                    <img src="/assets/illustrations/cart.png" alt="login" width={436} />
                </Stack>


                <TextField name="mobileNumber" label="Mobile Number" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />

                
            </Stack>

            <br />

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Login
            </LoadingButton>
        </>
    );
}
