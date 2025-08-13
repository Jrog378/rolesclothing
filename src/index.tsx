import { Button, Container, Stack, Typography } from "@mui/material";
import { Link, Outlet } from "react-router";

export default function Index() {
    return (
        <Container maxWidth={'xl'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
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
                        }} color='primary' size='large'>Shop</Button>
                    </Link>
                    <Button sx={{
                        textTransform: 'none', backgroundColor: 'transparent',
                        color: 'rgb(50,50,50)',
                        '&:hover': {
                            backgroundColor: 'whitesmoke',
                        },
                    }} size='large'>About</Button>
                    <Button sx={{
                        textTransform: 'none', backgroundColor: 'transparent',
                        color: 'rgb(50,50,50)',
                        '&:hover': {
                            backgroundColor: 'whitesmoke',
                        },
                    }} size='large'>Info</Button>
                </Stack> */}
                <Link to={'/products'}>
                <Button sx={{
                    textTransform: 'none', color: 'rgb(255, 252, 248)'
                }} size='large' variant='contained' className="primary"><Typography color="white">Shop Roles Now</Typography></Button>
                </Link>
            </Stack>
            <Outlet />
            <footer style={{width:'100%', textAlign:'center'}}>©2025 Roles Clothing - All Rights Reserved</footer>
        </Container>
    )
}