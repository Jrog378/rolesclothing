import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, CardMedia, Grid, Button, Stack } from "@mui/material";
import { Link } from "react-router";

export default function HoodieSizingGuide() {
    const sizes = [
        { size: "S", width: "20.0 / 51.0", length: "27.1 / 69.0", sleeve: "33.5 / 85.0" },
        { size: "M", width: "22.0 / 56.0", length: "28.0 / 71.1", sleeve: "34.5 / 87.6" },
        { size: "L", width: "24.0 / 61.0", length: "29.1 / 74.0", sleeve: "35.5 / 90.2" },
        { size: "XL", width: "26.0 / 66.0", length: "30.0 / 76.0", sleeve: "36.5 / 92.7" },
        { size: "2XL", width: "28.0 / 71.1", length: "31.0 / 79.0", sleeve: "37.5 / 95.3" },
        { size: "3XL", width: "30.0 / 76.2", length: "32.0 / 81.0", sleeve: "38.5 / 98.0" },
        { size: "4XL", width: "32.0 / 81.3", length: "33.0 / 84.0", sleeve: "39.5 / 100.3" },
        { size: "5XL", width: "34.0 / 86.0", length: "34.0 / 86.0", sleeve: "40.5 / 102.9" },
    ];

    return (
        <Stack p={2}>
            <Typography variant="h3" gutterBottom>
                Hoodie Sizing Guide
            </Typography>
            <Grid container spacing={4}>
                <Grid size={6}>
                    <CardMedia
                        component="img"
                        image={"/SizingChart.jpeg"}
                        alt={"Gildan 18500 Sizing Chart"}
                        sx={{ objectFit: "contain" }}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "8px",
                            border: "1px solid #ddd"
                        }}
                    />
                </Grid>
                <Grid size={6}>
                    <Typography variant="body1" mb={3}>
                        This guide will help you choose the right size for our Gildan 18500 hoodies.
                        Measurements are taken when the hoodie is laid flat. Sizes are listed in inches
                        followed by centimeters. Please note that measurements may vary by ±1.5 in
                        (3.8 cm) due to manufacturing tolerances.
                    </Typography>
                    <Paper sx={{ overflowX: "auto" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Size</b></TableCell>
                                    <TableCell><b>Width (in/cm)</b></TableCell>
                                    <TableCell><b>Length (in/cm)</b></TableCell>
                                    <TableCell><b>Sleeve (in/cm)</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sizes.map((row) => (
                                    <TableRow key={row.size}>
                                        <TableCell>{row.size}</TableCell>
                                        <TableCell>{row.width}</TableCell>
                                        <TableCell>{row.length}</TableCell>
                                        <TableCell>{row.sleeve}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="body1" mt={3}>
                <b>How to measure:</b> Width is measured across the chest from one armpit to the other.
                Length is measured from the highest point of the shoulder to the bottom hem.
                Sleeve length is measured from the center back of the neck to the wrist.
            </Typography>
            <Link style={{alignSelf:'center'}} to={"/products"}>
            <Button sx={{
                            textTransform: 'none', color: 'rgb(255, 252, 248)', padding:'1rem 2rem'
                        }} size='large' variant='contained' className="primary"><Typography color="white">Shop Products</Typography></Button></Link>
        </Stack>
    );
}
