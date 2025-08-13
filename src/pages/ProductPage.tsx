import { Link, useParams } from "react-router"
import { useEffect, useState } from "react";
import { Box, CardContent, CardMedia, Grid, Stack, Rating, Card, Button, Typography } from "@mui/material";
import { type RootState } from '../store';
import { useSelector } from "react-redux";


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
                            {imgs.map((image, index) => (<CardMedia component={'img'} onClick={() => setImage(index)} key={index} style={{ objectFit: "contain" }} src={image} />))}
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <CardMedia
                            component="img"
                            image={imgs[image]}
                            alt=""
                            sx={{ objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid size={5}>
                        <Stack>
                            <h1>{entry.title}</h1>
                            <CardContent sx={{ px: '0' }}><p style={{ margin: '0' }}>{entry.description}</p></CardContent>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <h2>${entry.price}</h2>
                            <Grid container height={'100%'}>
                                <Stack direction={'row'} width={'100%'}>
                                    {colors.map((c, index) => (
                                        <Grid size={3} key={index} sx={{ p: '.2rem' }}>
                                            <a onClick={() => { setColor(index) }}>
                                                <Card>
                                                    <CardMedia
                                                        component="img"
                                                        image={c.header}
                                                        alt={c.name}
                                                        sx={{ objectFit: "contain" }}
                                                    />
                                                    <CardContent style={{ padding: "0px 1rem" }}><p>{c.name}</p></CardContent>
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
                </Grid>
                :
                <p>Loading</p>
            }
        </>
    )

}