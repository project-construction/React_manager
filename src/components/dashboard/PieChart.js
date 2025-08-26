import { ResponsivePie } from '@nivo/pie'
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import React from "react";

const PieChart = ({ data }) => (
    <Card>
        <CardBody>
            <CardSubtitle className="text-muted" tag="h6">
                현장 출석률 그래프
            </CardSubtitle>
            <div style={{ height: '400px' }}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'set1' }}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [['darker', 0.2]]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [['darker', 2]]
                    }}
                    theme={{
                        labels: {
                            text: {
                                fontSize: 14,
                            },
                        }
                    }}
                />
            </div>
        </CardBody>
    </Card>
)

export default PieChart;
