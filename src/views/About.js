import { Row, Col, Card, CardBody, CardTitle, Button,Badge,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,} from "reactstrap";

//마이페이지 부분

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            MY PAGE
          </CardTitle>
          <CardBody className="p-4">
            <Row >
              <Col lg="8">
                <h5 className=" mb-4">
                  <h1>
                    User1 <Badge color="secondary">한글명</Badge>
                  </h1>
                </h5>
                <h2 className="mt-4">여기서 마이페이지를 이용가능합니다.</h2>

                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input
                        id="exampleSelectMulti"
                        multiple
                        name="selectMulti"
                        type="select"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input id="exampleText" name="text" type="textarea" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input id="exampleFile" name="file" type="file" />
                    <FormText>
                      This is some placeholder block-level help text for the above
                      input. It's a bit lighter and easily wraps to a new line.
                    </FormText>
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>개인정보수집 동의</legend>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        개인정보 수집에 동의하십니까?
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        광고 수신 동의
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>전부 동의</Label>
                  </FormGroup>
                  <Button
                      className="mt-3"
                      color="info"
                  >
                    Edit
                  </Button>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
