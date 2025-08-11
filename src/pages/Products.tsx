import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ProductDetails from "./ProductDetails.json"
import type { ProductDetailsProps } from "./ProductPage";

export const entries = (ProductDetails as ProductDetailsProps[])

export default function Products() {
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
            </Grid>
        </Box>
    )
}
