import {Row, Tab, Col, Nav, Image, Container, Button} from "react-bootstrap";
import {Rating} from "@mui/material";

export default function Testing() {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} xs={3} style={{maxWidth: '150px', overflow: 'scroll', maxHeight: '90vh'}}>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={'/vite.svg'} style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={'/vite.svg'} style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={'/vite.svg'} style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={'/vite.svg'} style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={'/vite.svg'} style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Row>
                    </Col>
                    <Col lg={6} xs={9} style={{maxHeight: '75vh'}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><Image style={{width: '100%'}} src={'/vite.svg'}/></Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col lg={3} xs={12}>
                        <h1>Test</h1>
                        <Col>
                            <Row>
                                <h3>Ratings</h3>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                            </Row>
                            <Row>
                                <p>
                                    Testing Description of Materials, Quality and Brand?
                                </p>
                            </Row>
                            <Row>
                                <Col style={{height: '75px', padding: '10px'}}>
                                    <Container>
                                        <a className={'color-change'}>
                                            <Image src={'/vite.svg'}/>
                                            <p style={{color: 'black', margin:0}}>Black</p>
                                        </a>
                                    </Container>
                                </Col>
                                <Col style={{height: '75px', padding: '10px'}}>
                                    <Container>
                                        <a className={'color-change'}>
                                            <Image src={'/vite.svg'}/>
                                            <p style={{color: 'black', margin:0}}>Black</p>
                                        </a>
                                    </Container>
                                </Col>
                                <Col style={{height: '75px', padding: '10px'}}>
                                    <Container>
                                        <a className={'color-change'}>
                                            <Image src={'/vite.svg'}/>
                                            <p style={{color: 'black', margin:0}}>Black</p>
                                        </a>
                                    </Container>
                                </Col>
                                <Col style={{padding: '10px'}}>
                                    <Container>
                                        <a className={'color-change'}>
                                            <Image src={'/vite.svg'}/>
                                            <p style={{color: 'black', margin:0}}>Black</p>
                                        </a>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Button style={{fontWeight: 'bold'}} size={'lg'} variant={'success'}
                                        href={'https://buy.stripe.com/test_3csaGgaZg31dcFy288'}>Purchase Now</Button>
                            </Row>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <p>
                        Brief Description of Materials, Quality, and Brand
                    </p>
                </Row>
            </Tab.Container>
        </Container>
    )
}