import React, {useState, useEffect} from 'react';
import {Button, Card, CardBody, CardTitle, Table} from 'reactstrap';

const ProjectTables = () => {
    const [tableData, setTableData] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // 요청의 Content-Type 설정
        },
        mode: 'cors', // CORS 활성화
    };

    useEffect(() => {
        // API에서 노동자 정보 가져오기 (GET 방식)
        fetch(`https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/worker/wait`, requestOptions)
            .then(response => response.json())
            .then(data => {
                // 가져온 데이터로 tableData 상태 업데이트
                setTableData(data);
            })
            .catch(error => {
                console.error('노동자 정보를 가져오는 중 오류 발생:', error);
            });

    }, []);

    const handleApproval = (email) => {
        // 승인 버튼 동작 처리
        // 이메일에 해당하는 노동자를 승인하는 API 호출
    };

    const handleRejection = (email) => {
        // 거부 버튼 동작 처리
        // 이메일에 해당하는 노동자를 거부하는 API 호출
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">노동자 권한 설정</CardTitle>
                    <Table className="no-wrap mt-3 align-middle" responsive borderless>
                        <thead>
                        <tr>
                            <th>노동자명</th>
                            <th>소속</th>
                            <th>생년월일</th>
                            <th>성별</th>
                            <th>연락처</th>
                            <th>주소</th>
                            <th>승인 여부</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((tdata, index) => (
                            <tr key={index} className="border-top">
                                <td>{tdata.name}</td>
                                <td>{tdata.team}</td>
                                <td>{tdata.birth}</td>
                                <td>{tdata.gender}</td>
                                <td>{tdata.phone}</td>
                                <td>{tdata.address}</td>
                                <td>
                                    <Button
                                        style={{marginRight: '10px'}}
                                        color="btn btn btn-outline-primary"
                                        variant="contained"
                                        size="large"
                                        onClick={() => handleApproval(tdata.email)}
                                    >
                                        승인
                                    </Button>
                                    <Button
                                        padding="10px"
                                        color="btn btn btn-outline-danger"
                                        variant="contained"
                                        size="large"
                                        onClick={() => handleRejection(tdata.email)}
                                    >
                                        거부
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProjectTables;
