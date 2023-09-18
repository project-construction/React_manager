import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ title, subtitle, subtext }) => {
    const [email, setEmail] = useState(''); // 변경된 부분
    const [password, setPassword] = useState('');
    const [rememberDevice, setRememberDevice] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const jwtToken = localStorage.getItem('accessToken'); // 토큰을 로컬 스토리지에서 가져옴
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                mode: 'cors'
            });

            if (response.ok) {
                response.json().then(data => {
                    const token = data.accessToken;
                    console.log(token);

                    localStorage.setItem('token', token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    setIsLoggedIn(true);
                    navigate('/starter');
                }).catch(error => {
                    console.error('JSON 파싱 오류:', error);
                });

                // 추가한 API 호출
                const attendResponse = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/attend/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}` // 토큰을 헤더에 추가
                    },
                    body: JSON.stringify({ email, password }),
                    mode: 'cors'
                });

                if (attendResponse.ok) {
                    // Attend API 호출이 성공하면 원하는 작업을 수행하세요.
                } else {
                    console.error('Attend API 호출 실패');
                }
            } else {
                console.error('로그인 실패');
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack>
                <Box>
                    <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='email' mb="5px">
                        Email
                    </Typography>
                    <CustomTextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // 변경된 부분
                    />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='password' mb="5px">
                        Password
                    </Typography>
                    <CustomTextField
                        id="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={rememberDevice} onChange={() => setRememberDevice(!rememberDevice)} />}
                            label="Remember this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthLogin;
