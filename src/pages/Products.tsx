import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import type { RootState } from "../store";
import { useSelector } from "react-redux";

export default function Products() {
    const entries = useSelector((state: RootState) => state.mySlice.data);

    return (
        <Box style={{ padding: '10px' }}>
            <Typography variant="h3" fontSize={"xx-large"} textAlign={'center'}>All Products</Typography>
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
                                    <Typography variant="h3" style={{ width: '100%', textAlign: 'center', margin: '0', fontSize:'large' }}>{entry.title}</Typography>
                                    <Typography style={{ width: '100%', textAlign: 'center', paddingBottom: '10px', fontWeight:'bolder' }}>${entry.price}</Typography>
                                </Typography>
                            </a>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
