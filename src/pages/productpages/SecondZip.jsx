import {useState} from "react";
import {Button, Col, Container, Image, Nav, Row, Tab} from "react-bootstrap";
import {Rating} from "@mui/material";

export default function SecondZip() {
    const [zip, setZip] = useState(0);
    const [click, setClick] = useState(true);
    const colors = ["Black", "Blue"];
    const urls = ['https://buy.stripe.com/dR6aHr5402Yu2Yw8wB', 'https://buy.stripe.com/3cseXH7c8cz46aI4gn']
    return (
        <Container style={{padding: '10px'}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} xs={3} style={{maxWidth: '150px', overflow: 'scroll', maxHeight: '90vh'}}>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={`/${colors[zip]}ZipFront2.jpg`}
                                                              style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="second"><Image src={`/${colors[zip]}ZipBack2.jpg`}
                                                               style={{width: '100%'}}/></Nav.Link>
                        </Row>
                    </Col>
                    <Col lg={6} xs={9} style={{maxHeight: '600px'}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><Container><Image style={{width: '100%'}}
                                                                         src={`/${colors[zip]}ZipFront2.jpg`}/></Container></Tab.Pane>
                            <Tab.Pane eventKey="second"><Container><Image style={{width: '100%'}}
                                                                          src={`/${colors[zip]}ZipBack2.jpg`}/></Container></Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col lg={3} xs={12}>
                        <h1>Respect Zip Hoodie</h1>
                        <Col>
                            <Row>
                                <h3>Ratings</h3>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                            </Row>
                            <Row>
                                <h3 style={{paddingTop:'5px'}}>$59.99</h3>
                            </Row>
                            <Row>
                                {click
                                    ?
                                    <>
                                        <Col style={{height: '75px', padding: '10px'}}>
                                            <Container style={{border: '1px solid grey', borderRadius: '5px'}}>
                                                <a className={'color-change'} onClick={() => setZip(0)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[0]}ZipFront2.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Black</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container onMouseOver={() => setZip(1)}
                                                       onMouseOut={() => setZip(0)}>
                                                <a className={'color-change'} onClick={() => setClick(false)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[1]}ZipFront2.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Blue</p>
                                                </a>
                                            </Container>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col style={{height: '75px', padding: '10px'}}>
                                            <Container onMouseOver={() => setZip(0)}
                                                       onMouseOut={() => setZip(1)}>
                                                <a className={'color-change'} onClick={() => setClick(true)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[0]}ZipFront2.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Black</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container style={{border: '1px solid grey', borderRadius: '5px'}}>
                                                <a className={'color-change'} onClick={() => setZip(1)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[1]}ZipFront2.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Blue</p>
                                                </a>
                                            </Container>
                                        </Col>
                                    </>
                                }
                            </Row>
                            <Row>
                                <p>
                                    Quality motivational print zip hoodie
                                </p>
                            </Row>
                            <Row>
                                <Button style={{fontWeight: 'bold'}} size={'lg'} variant={'success'}
                                        href={urls[zip]}>Purchase Now</Button>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}