import {Card, CardBody, CardTitle, Table,Button} from "reactstrap";
import React, {useState, useEffect} from 'react';
import SalesChart from './SalesChart'
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
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "노동자2",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "노동자3",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "노동자4",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "노동자5",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];


const ProjectTables = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState([]);
  const [Data, setData] = useState([]);
  const handleSearch = () => {
    fetchUserData(searchText);
  };

  const fetchUserData = async () => {
    try {
      const params = new URLSearchParams();
      params.append('teamName', searchText);
      console.log(searchText);
      const response = await fetch(`http://localhost:8080/worker/team?teamName=${searchText}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });


      if (!response.ok) {
        throw new Error('Request failed');
      } else {
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          data[i].avatar = user1;
        }
        setUserData(data);
        console.log(data);

      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchData = async (searchText) => {
    try {
      const params = new URLSearchParams();
      params.append('email', searchText);
      console.log(searchText);
      const response = await fetch(`http://localhost:8080/worker/score?email=${searchText}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });


      if (!response.ok) {
        throw new Error('Request failed');
      } else {
        const data = await response.json();
        setData(data);
        console.log(data);
        props.setSend(data);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    }

  };

  useEffect(() => {

  }, []); // Fetch user data when the component mounts


  return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">노동자 관리</CardTitle>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
              <tr>
                <th>노동자명</th>
                <th>검사결과</th>
              </tr>
              </thead>
              <tbody>
              {userData.map((tdata, index) => (
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
                          <h6 className="mb-0">
                            <Button className="btn" outline color="info"  onClick={() => fetchData(tdata.email)}>{tdata.name}</Button>
                          </h6>
                          <span className="text-muted">{tdata.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      {tdata.status === "pending" ? (
                          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                      ) : tdata.status === "holt" ? (
                          <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                      ) : (
                          <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                      )}
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