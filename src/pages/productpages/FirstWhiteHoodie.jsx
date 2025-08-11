import {Row, Tab, Col, Nav, Image, Container, Button} from "react-bootstrap";
import {Rating} from "@mui/material";
import {useState} from "react";

export default function FirstWhiteHoodie() {
    const [hoodie, setHoodie] = useState(0);
    const [click, setClick] = useState(true);
    const colors = ['Gray', 'Green']
    const urls = ['https://buy.stripe.com/5kAdTDeEA42yaqY7sL', 'https://buy.stripe.com/3cs3eZbso1UqeHe4gy']
    return (
        <Container style={{padding: '10px'}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} xs={3} style={{maxWidth: '150px', overflow: 'scroll', maxHeight: '90vh'}}>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={`/${colors[hoodie]}Front.jpg`}
                                                              style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="second"><Image src={`/${colors[hoodie]}Back.jpg`}
                                                               style={{width: '100%'}}/></Nav.Link>
                        </Row>
                    </Col>
                    <Col lg={6} xs={9} style={{maxHeight: '600px'}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><Container><Image style={{width: '100%'}}
                                                                         src={`/${colors[hoodie]}Front.jpg`}/></Container></Tab.Pane>
                            <Tab.Pane eventKey="second"><Container><Image style={{width: '100%'}}
                                                                          src={`/${colors[hoodie]}Back.jpg`}/></Container></Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col lg={3} xs={12}>
                        <h1>Fearless Sweater</h1>
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
                                                <a className={'color-change'} onClick={() => setHoodie(0)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={'/GrayFront.jpg'}/>
                                                    <p style={{color: 'black', margin: 0}}>Gray</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container onMouseOver={() => setHoodie(1)}
                                                       onMouseOut={() => setHoodie(0)}>
                                                <a className={'color-change'} onClick={() => setClick(false)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={'/GreenFront.jpg'}/>
                                                    <p style={{color: 'black', margin: 0}}>Green</p>
                                                </a>
                                            </Container>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col style={{height: '75px', padding: '10px'}}>
                                            <Container onMouseOver={() => setHoodie(0)}
                                                       onMouseOut={() => setHoodie(1)}>
                                                <a className={'color-change'} onClick={() => setClick(true)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={'/GrayFront.jpg'}/>
                                                    <p style={{color: 'black', margin: 0}}>Gray</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container style={{border: '1px solid grey', borderRadius: '5px'}}>
                                                <a className={'color-change'} onClick={() => setHoodie(1)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={'/GreenFront.jpg'}/>
                                                    <p style={{color: 'black', margin: 0}}>Green</p>
                                                </a>
                                            </Container>
                                        </Col>
                                    </>
                                }
                            </Row>
                            <Row>
                                <p>
                                    Sweater with faith oriented text
                                </p>
                            </Row>
                            <Row>
                                <Button style={{fontWeight: 'bold'}} size={'lg'} variant={'success'}
                                        href={urls[hoodie]}>Purchase Now</Button>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}