import {Button, Card, CardBody, CardTitle, Table} from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
    {
        avatar: user1,
        name: "노동자1",
        email: "hgover@gmail.com",
        address: "서울시 송파구 ",
        gender: "female",
        phone: "010-1234-5678",
        team: "정왕1팀",
    },
    {
        avatar: user1,
        name: "노동자2",
        email: "asdsr@gmail.com",
        address: "서울시 마포구",
        gender: "male",
        phone: "010-2412-1424",
        team: "정왕 2팀",
    }
];

const ButtonAction = (event) => {

};

const ProjectTables = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">노동자 권한 설정</CardTitle>
                    <Table className="no-wrap mt-3 align-middle" responsive borderless>
                        <thead>
                        <tr>
                            <th>노동자명</th>

                            <th>주 소</th>
                            <th>성 별</th>
                            <th>연락처</th>
                            <th>소 속</th>

                            <th>승인 여부</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((tdata, index) => (
                            <tr key={index} className="border-top">
                                <td>
                                    <div className="d-flex align-items-center p-2">
                                        <img
                                            src={tdata.avatar}
                                            className="rounded-circle"
                                            alt="avatar"
                                            width="45"
                                            height="45"
                                        />
                                        <div className="ms-3">
                                            <h6 className="mb-0">{tdata.name}</h6>
                                            <span className="text-muted">{tdata.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{tdata.address}</td>
                                <td>{tdata.gender}</td>
                                <td>{tdata.phone}</td>
                                <td>{tdata.team}</td>

                                <td>{}
                                <Button outline color="success" variant="contained" size="large"
                                         onClick={ButtonAction}>
                                    승인
                                </Button>

                                <Button outline color="danger" variant="contained" size="large"
                                        onClick={ButtonAction}>
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
