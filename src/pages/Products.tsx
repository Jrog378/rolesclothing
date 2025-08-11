import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ProductDetails from "./ProductDetails.json"
import type { ProductDetailsProps } from "./ProductPage";

export default function Products() {
    const entries = (ProductDetails as ProductDetailsProps[])
    return (
        <Box style={{ padding: '10px' }}>
            <Grid container>
                {entries.map((entry) => (
                    <Grid key={entry.id} size={{ md: 6, lg: 4 }} style={{ padding: '10px' }}>
                        <Card className={'product-card'}>
                            <a className={'color-change'} href={`/products/${entry.id}`} style={{ color: 'black' }}>
                                <CardContent>
                                    <img src={entry.colors[0].images[0]} onMouseOver={e => (e.currentTarget.src = entry.colors[0].images[1])}
                                        onMouseOut={e => (e.currentTarget.src = entry.colors[0].images[0])} style={{ width: '100%' }} />
                                </CardContent>
                                <Typography>
                                    <h3 style={{ width: '100%', textAlign: 'center', margin: '0' }}>{entry.title}</h3>
                                    <p style={{ width: '100%', textAlign: 'center', paddingBottom: '10px' }}>${entry.price}</p>
                                </Typography>
                            </a>
                        </Card>
                    </Grid>
                ))}
                <Grid size={{ md: 6, lg: 4 }} style={{ padding: '10px' }}>
                    <Card className={'product-card'}>
                        <a className={'color-change'} href={'/products/first-hoodie'} style={{ color: 'black' }}>
                            <CardContent>
                                <img src={'/GrayFront.jpg'} onMouseOver={e => (e.currentTarget.src = '/GrayBack.jpg')}
                                    onMouseOut={e => (e.currentTarget.src = '/GrayFront.jpg')} style={{ width: '100%' }} />
                            </CardContent>
                            <Typography>
                                <h3 style={{ width: '100%', textAlign: 'center', margin: '0' }}>Fearless Sweater</h3>
                                <p style={{ width: '100%', textAlign: 'center', paddingBottom: '10px' }}>$59.99</p>
                            </Typography>
                        </a>
                    </Card>
                </Grid>
                <Grid size={{ md: 6, lg: 4 }} style={{ padding: '10px' }}>
                    <Card className={'product-card'}>
                        <a className={'color-change'} href={'/products/id-4'} style={{ color: 'black' }}>
                            <CardContent>
                                <img src={'/BlackHoodieFront1.jpg'} onMouseOver={e => (e.currentTarget.src = '/BlackHoodieBack1.jpg')}
                                    onMouseOut={e => (e.currentTarget.src = '/BlackHoodieFront1.jpg')} style={{ width: '100%' }} />
                            </CardContent>
                            <Typography>
                                <h3 style={{ width: '100%', textAlign: 'center', margin: '0' }}>Keep Going Hoodie</h3>
                                <p style={{ width: '100%', textAlign: 'center', paddingBottom: '10px' }}>$59.99</p>
                            </Typography>
                        </a>
                    </Card>
                </Grid>
                <Grid size={{ md: 6, lg: 4 }} style={{ padding: '10px' }}>
                    <Card className={'product-card'}>
                        <a className={'color-change'} href={'/products/id-7'} style={{ color: 'black' }}>
                            <CardContent>
                                <img src={'/SandHoodieFront4.jpg'} onMouseOver={e => (e.currentTarget.src = '/SandHoodieBack4.jpg')}
                                    onMouseOut={e => (e.currentTarget.src = '/SandHoodieFront4.jpg')} style={{ width: '100%' }} />
                            </CardContent>
                            <Typography>
                                <h3 style={{ width: '100%', textAlign: 'center', margin: '0' }}>Fresh Beginnings Hoodie</h3>
                                <p style={{ width: '100%', textAlign: 'center', paddingBottom: '10px' }}>$59.99</p>
                            </Typography>
                        </a>
                    </Card>
                </Grid>
                <Grid size={{ md: 6, lg: 4 }} style={{ padding: '10px' }}>
                    <Card className={'product-card'}>
                        <a className={'color-change'} href={'/products/id-8'} style={{ color: 'black' }}>
                            <CardContent>
                                <img src={'/BlackZipFront2.jpg'} onMouseOver={e => (e.currentTarget.src = '/BlackZipBack2.jpg')}
                                    onMouseOut={e => (e.currentTarget.src = '/BlackZipFront2.jpg')} style={{ width: '100%' }} />
                            </CardContent>
                            <Typography>
                                <h3 style={{ width: '100%', textAlign: 'center', margin: '0' }}>Respect Zip Hoodie</h3>
                                <p style={{ width: '100%', textAlign: 'center', paddingBottom: '10px' }}>$59.99</p>
                            </Typography>
                        </a>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
