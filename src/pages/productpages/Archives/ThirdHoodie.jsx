import {useState} from "react";
import {Button, Col, Container, Image, Nav, Row, Tab} from "react-bootstrap";
import {Rating} from "@mui/material";

export default function ThirdHoodie() {
    const [hoodie, setHoodie] = useState(0);
    const [click, setClick] = useState(true);
    const colors = ["Gray", "Blue"];
    const urls = ['https://buy.stripe.com/00gg1LgMI8iO0Qo6oz', 'https://buy.stripe.com/dR66rb540fLg56EcMW']
    return (
        <Container style={{padding: '10px'}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} xs={3} style={{maxWidth: '150px', overflow: 'scroll', maxHeight: '90vh'}}>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="first"><Image src={`/${colors[hoodie]}HoodieFront3.jpg`}
                                                              style={{width: '100%'}}/></Nav.Link>
                        </Row>
                        <Row style={{overflow: 'visible'}}>
                            <Nav.Link eventKey="second"><Image src={`/${colors[hoodie]}HoodieBack3.jpg`}
                                                               style={{width: '100%'}}/></Nav.Link>
                        </Row>
                    </Col>
                    <Col lg={6} xs={9} style={{maxHeight: '600px'}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><Container><Image style={{width: '100%'}}
                                                                         src={`/${colors[hoodie]}HoodieFront3.jpg`}/></Container></Tab.Pane>
                            <Tab.Pane eventKey="second"><Container><Image style={{width: '100%'}}
                                                                          src={`/${colors[hoodie]}HoodieBack3.jpg`}/></Container></Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col lg={3} xs={12}>
                        <h1>Egypt Roles Hoodie</h1>
                        <Col>
                            <Row>
                                <h3>Ratings</h3>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
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
                                                        src={`/${colors[0]}HoodieFront3.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Anthracite</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container onMouseOver={() => setHoodie(1)}
                                                       onMouseOut={() => setHoodie(0)}>
                                                <a className={'color-change'} onClick={() => setClick(false)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[1]}HoodieFront3.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Navy Blue</p>
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
                                                        src={`/${colors[0]}HoodieFront3.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Anthracite</p>
                                                </a>
                                            </Container>
                                        </Col>
                                        <Col style={{padding: '10px'}}>
                                            <Container style={{border: '1px solid grey', borderRadius: '5px'}}>
                                                <a className={'color-change'} onClick={() => setHoodie(1)}>
                                                    <Image
                                                        style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}
                                                        src={`/${colors[1]}HoodieFront3.jpg`}/>
                                                    <p style={{color: 'black', margin: 0}}>Navy Blue</p>
                                                </a>
                                            </Container>
                                        </Col>
                                    </>
                                }
                            </Row>
                            <Row>
                                <p>
                                    Egypt themed print hoodie
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