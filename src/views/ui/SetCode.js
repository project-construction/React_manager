import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { useNavigate } from 'react-router-dom';

const SetCode = ({ title, subtitle }) => {
  const [code, setCode] = useState(''); // 코드 상태 변수
  const navigate = useNavigate();

  const handleSetCode = async () => {
    try {
      const jwtToken = localStorage.getItem('token'); // 토큰을 로컬 스토리지에서 가져옴
      // 코드를 서버로 전송하고 작업 수행
      const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/attend/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`, // 토큰을 헤더에 추가
        },
        body: JSON.stringify({ code }), // 코드를 요청 본문에 포함
        mode: 'cors',
      });

      if (response.ok) {
        // 작업이 성공한 경우
        console.log('코드가 성공적으로 전송되었습니다.');
        // 원하는 동작 수행, 예: 페이지 이동
        navigate('/starter');
      } else {
        // 작업이 실패한 경우
        console.error('작업을 수행하지 못했습니다.');
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

        {subtitle}

        <Stack direction="row" alignItems="flex-end" spacing={2}>
          <CustomTextField
              id="code"
              variant="outlined"
              fullWidth
              value={code}
              onChange={(e) => setCode(e.target.value)} // 코드 상태 업데이트
              sx={{ flex: 1 }}
          />
          <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={handleSetCode}
              sx={{ flex: 1 }}
          >
            출석코드 설정
          </Button>
        </Stack>
      </>
  );
};

export default SetCode;
