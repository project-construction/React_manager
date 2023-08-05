import React, { useState } from "react";
import { Link } from "react-router-dom"

import {
  Button,
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
      <div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-11*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-2 mt-2">
            <h2>&nbsp;공지사항</h2>
          </CardTitle>
          <CardBody className="">
            <div className="">
              <Alert color="light">
                공지사항1
              </Alert>
              <Alert color="light">
                공지사항2
              </Alert>
              <Alert color="light">
                공지사항3
              </Alert>
            </div>
          </CardBody>
        </Card>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-2*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-2 mt-2">
            <h2>&nbsp;링크이동가능 공지사항</h2>
          </CardTitle>
          <CardBody className="">
            <div>
              <Alert color="light">
                제목 :
                <Link to="/Buttons" className="Buttons-link" className="p-3 mb-4">
                  <Button className="btn" color="secondary">
                    링크이동
                  </Button>
                </Link>
                <p>내용입력</p>
              </Alert>
              <Alert color="light">
                제목 :
                <Link to="/About" className="About-link" className="p-3 mb-4">
                  <Button className="btn" color="secondary">
                    링크이동
                  </Button>
                </Link>
                <p>내용입력</p>
              </Alert>
              <Alert color="light">
                제목 :
                <Link to="/table" className="table-link" className="p-3 mb-4">
                  <Button className="btn" color="secondary">
                    링크이동
                  </Button>
                </Link>
                <p>내용입력</p>
              </Alert>
            </div>
          </CardBody>
        </Card>

      </div>
  );
};

export default Alerts;