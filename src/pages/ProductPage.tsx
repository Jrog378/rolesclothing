import { Link, useParams } from "react-router"
import { useEffect, useState } from "react";
import { Box, CardContent, CardMedia, Grid, Stack, Rating, Card, Button, Typography, Divider } from "@mui/material";
import { type RootState } from '../store';
import { useSelector } from "react-redux";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HoodieSizingGuide from "./SizeGuide";
import CareGuide from "./CareGuide";
import SpecialRequestsPage from "./SpecialRequest";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function ProductTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Stack direction={"row"} justifyContent={"center"}>
                    <Tabs value={value} style={{color:'#58644cff'}} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
                        <Tab label="Sizing Guide" {...a11yProps(0)} />
                        <Tab label="Care Instructions" {...a11yProps(1)} />
                        <Tab label="Special Requests" {...a11yProps(2)} />
                    </Tabs>
                </Stack>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <HoodieSizingGuide/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <CareGuide/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SpecialRequestsPage/>
            </CustomTabPanel>
        </Box>
    );
}



export default function ProductPage() {
    let { id } = useParams<{ id: string }>()
    const obj = useSelector((state: RootState) => state.mySlice.data);
    const entry = obj.find(item => item.id === id)

    if (!entry) return <Box p={2}>Not found.</Box>;

    const [color, setColor] = useState(0);
    const [image, setImage] = useState(0);
    // const [size, setSize] = useState('Unselected')

    const colors = entry.colors ?? []
    const imgs = colors[color].images ?? [];

    useEffect(() => {
        console.log(colors)
    }, [])

    return (
        <>
            {colors[color] ?
                <Grid container>
                    <Grid size={1}>
                        <Stack>
                            {imgs.map((image, index) => (<Card className="product-card" style={{ margin: "0.2rem 0" }}><CardMedia component={'img'} onClick={() => setImage(index)} key={index} style={{ objectFit: "contain" }} src={image} /></Card>))}
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <CardMedia
                            component="img"
                            image={imgs[image]}
                            alt=""
                            sx={{ objectFit: "contain", maxHeight: '75vh' }}
                        />
                    </Grid>
                    <Grid size={5}>
                        <Stack spacing={2}>
                            <Typography variant="h1" fontSize={"xx-large"} fontWeight={'400'}>{entry.title}</Typography>
                            <Stack direction={'row'} spacing={2}>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Typography color="rgb(100,100,100)">(4 reviews)</Typography>
                            </Stack>
                            <Typography variant="h5">${entry.price}</Typography>
                            <CardContent sx={{ p: '0' }}><Typography color="rgb(100,100,100)">{entry.description}</Typography></CardContent>
                            <Divider style={{ margin: '1rem 0' }} />
                            <Grid container height={'100%'} style={{ margin: '0' }}>
                                <Typography>Color: {colors[color].name}</Typography>
                                <Stack direction={'row'} width={'100%'}>
                                    {colors.map((c, index) => (
                                        <Grid size={2} key={index} sx={{ p: '.2rem' }}>
                                            <a onClick={() => { setColor(index) }}>
                                                <Card className="product-card">
                                                    <CardContent style={{ padding: '0.8rem' }}>
                                                        <CardMedia
                                                            component="img"
                                                            image={c.images[0]}
                                                            alt={c.name}
                                                            sx={{ objectFit: "contain" }}
                                                        />
                                                        <Typography textAlign={'center'}>{c.name}</Typography>
                                                    </CardContent>
                                                </Card>
                                            </a>
                                        </Grid>
                                    ))}
                                </Stack>
                            </Grid>
                            {/* <CardContent sx={{ px: '0' }}><p>Size: {size}</p></CardContent> */}
                            {/* <Stack direction={"row"} justifyContent={''}>
                            {['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'].map((size) => (
                                <Button key={size} onClick={() => setSize(size)} style={{ width: '100%' }}>
                                    {size}
                                </Button>
                            ))}
                        </Stack> */}
                            <br />
                            <Link to={colors[color].link}>
                                <Button sx={{
                                    textTransform: 'none', color: 'rgb(255, 252, 248)', width: '100%',
                                }} size='large' variant='contained' className="primary"><Typography color="white">Buy Now</Typography></Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <ProductTabs />
                </Grid>
                :
                <p>Loading</p>
            }
        </>
    )

}