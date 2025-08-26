import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import React, { useState } from "react";
import PieChart from "../components/dashboard/PieChart";
import RadialBar from "../components/dashboard/RadialBarChart";

const Starter = () => {
    const [send, setSend] = useState({
        doorlock: 0,
        hammering: 0,
        simon: 0,
        trafficLight: 0,
        catchMole: 0,
        numberPuzzle: 0,
        depression: 0,
        anxiety: 0,
        stress: 0,
        nback: 0
    });

    const data = [
        {
            "id": "현장 부적합",
            "label": "현장 부적합",
            "value": 3,
            "color": "hsl(78, 70%, 50%)"
        },
        {
            "id": "현장 투입",
            "label": "현장 투입",
            "value": 27,
            "color": "hsl(222, 70%, 50%)"
        }
    ];

    const data2 = [
        {
            "id": "본인",
            "data": [
                { "x": "이행률", "y": 0 },
                { "x": "이행률1", "y": 0 },
                { "x": "이행률2", "y": 0 },
                { "x": "이행률3", "y": 33 }
            ]
        },
        {
            "id": "현장",
            "data": [
                { "x": "이행률", "y": 0 },
                { "x": "이행률1", "y": 0 },
                { "x": "이행률2", "y": 0 },
                { "x": "이행률3", "y": 0 },
                { "x": "이행률4", "y": 0 },
                { "x": "이행률5", "y": 0 },
                { "x": "이행률6", "y": 0 },
                { "x": "이행률7", "y": 0 },
                { "x": "이행률8", "y": 0 },
                { "x": "이행률9", "y": 60 }
            ]
        },
        {
            "id": "전체",
            "data": [
                { "x": "이행률", "y": 100 }
            ]
        }
    ];

    return (
        <div>
            {/***Top Cards***/}

            {/***Sales & Feed***/}
            <Row>
                <Col lg="8" xl="8" xxl="8">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Reports</CardTitle>
                            <Row>
                                <Col sm="12" md="6">
                                    <PieChart data={data} />
                                </Col>
                                <Col sm="12" md="6">
                                    <RadialBar data={data2} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" xl="4" xxl="4">
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <ProjectTables setSend={setSend} />
                </Col>
            </Row>
        </div>
    );
};

export default Starter;
