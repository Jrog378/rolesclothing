import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link, Outlet } from "react-router";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Index() {
    return (
        <>
            <SpeedInsights />
            <Container maxWidth={'xl'}>
                <Stack direction={'row'} justifyContent={'space-between'} padding={'0.4rem'}>
                    <Link to={'/'}>
                        <img src='/RolesCutLogo.png' style={{ height: '8vh' }} />
                    </Link>
                    {/* <Stack direction={'row'} alignSelf={'center'}>
                    <Link to={'/products'}>
                        <Button sx={{
                            textTransform: 'none', backgroundColor: 'transparent',
                            color: 'rgb(50,50,50)',
                            '&:hover': {
                                backgroundColor: 'whitesmoke',
                            },
                        }} color='primary' size='large'>Hoodies</Button>
                    </Link>
                    <Button sx={{
                        textTransform: 'none', backgroundColor: 'transparent',
                        color: 'rgb(50,50,50)',
                        '&:hover': {
                            backgroundColor: 'whitesmoke',
                        },
                    }} size='large'>Sweatshirts</Button>
                    <Button sx={{
                        textTransform: 'none', backgroundColor: 'transparent',
                        color: 'rgb(50,50,50)',
                        '&:hover': {
                            backgroundColor: 'whitesmoke',
                        },
                    }} size='large'>Zips</Button>
                </Stack> */}
                    <Link to={'/products'}>
                        <Button sx={{
                            textTransform: 'none', color: 'rgb(255, 252, 248)'
                        }} size='large' variant='contained' className="primary"><Typography color="white">Shop Roles Now</Typography></Button>
                    </Link>
                </Stack>
                <Outlet />
                <Divider style={{ paddingTop: '1rem' }} />
            </Container>
            <Box style={{ background: '#400000' }}>
                <Container>
                    <Grid container spacing={8} paddingTop={'2rem'}>
                        <Grid size={3}>
                            <Stack>
                                <h2 style={{ margin: '0', color: 'rgb(255, 252, 248)', fontWeight: 'lighter' }}>
                                    ROLES CLOTHING
                                </h2>
                                <Typography style={{ color: 'rgb(100,100,100)', paddingTop: '0.8rem' }}>
                                    Premium clothing that truly represents what you stand for.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={3}>
                            <h4 style={{ margin: '0', color: 'rgb(255, 252, 248)', fontWeight: 'lighter' }}>
                                PRODUCTS
                            </h4>
                            <Link to={'/products'} className="footer-link">
                                <p>Shop</p>
                            </Link>
                            <Link to={''} className="footer-link">
                                <p>About</p>
                            </Link>
                            <Link to={'affiliates'} className="footer-link">
                                <p>Affiliate</p>
                            </Link>
                        </Grid>
                        <Grid size={3}>
                            <h4 style={{ margin: '0', color: 'rgb(255, 252, 248)', fontWeight: 'lighter' }}>
                                INFO
                            </h4>
                            <Link to={'/privacy-policy'} className="footer-link">
                                <p>Privacy Policy</p>
                            </Link>
                            <Link to={'/terms-of-service'} className="footer-link">
                                <p>Terms of Service</p>
                            </Link>
                            <Link to={'/shipping-and-returns'} className="footer-link">
                                <p>Shipping and Returns</p>
                            </Link>
                        </Grid>
                        <Grid size={3}>
                            <h4 style={{ margin: '0', color: 'rgb(255, 252, 248)', fontWeight: 'lighter' }}>
                                GUIDES
                            </h4>
                            <Link to={'/sizing-guide'} className="footer-link">
                                <p>Size Guide</p>
                            </Link>
                            <Link to={'/care-guide'} className="footer-link">
                                <p>Care Instructions</p>
                            </Link>
                            <Link to={'/special-request'} className="footer-link">
                                <p>Special Requests</p>
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <footer style={{ width: '100%', padding: '1rem', color: 'rgb(100,100,100)' }}>© 2025 Roles Clothing - All Rights Reserved</footer>
                </Container>
            </Box>
        </>
    )
}