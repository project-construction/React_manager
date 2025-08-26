import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import React from "react";

const RadialBar = ({ data }) => (
    <Card>
        <CardBody>
            <CardSubtitle className="text-muted" tag="h6">
                현장 이행률 그래프
            </CardSubtitle>
            <div style={{ height: 400 }}>
                <ResponsiveRadialBar
                    data={data}
                    valueFormat=">-.2f"
                    padding={0.4}
                    cornerRadius={2}
                    margin={{ top: 0, right: 30, bottom: 0, left: 30 }}
                    colors={{ scheme: 'category10' }}
                    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}

                />
            </div>
        </CardBody>
    </Card>
);

export default RadialBar;
