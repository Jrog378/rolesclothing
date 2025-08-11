import { useEffect, useState } from 'react'
import './App.css'
import { Button, CardContent, Grid, Stack, Box, Typography, Fade } from '@mui/material'
import { Link } from "react-router";

const lines = [
  'Look Better, Feel Better',
  'Recreate your style with Roles',
  'Freshen up with our American Cotton Blend',
  'Soft, Breathable Materials',
  '100% Satisfaction Guarantee',
];

export function MuiTextCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % lines.length);
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + lines.length) % lines.length);
  };

  return (
    <Box sx={{ minHeight: 120 }}>
      <Stack direction="row" width={"100%"} justifyContent={'space-between'} spacing={2} mt={2}>
        <Button onClick={handleBack}>Back</Button>
        <Typography variant="h5" sx={{ minHeight: 80 }}>
          {lines[index]}
        </Typography>
        <Button onClick={handleNext}>Next</Button>
      </Stack>
    </Box>
  );
}




function Animation() {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const textLines = document.querySelectorAll('.scroll-text');

      textLines.forEach((line) => {
        if (line instanceof HTMLElement) {
          const rect = line.getBoundingClientRect();
          const offset = window.innerHeight - rect.top;

          if (rect.top > offset) {
            line.style.opacity = '0';
            line.style.transform = 'translateX(40px)';

          } else {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
          }
        }
      });
    };


    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    const firstLine = document.querySelector('.scroll-text-fade-in');
    if (firstLine instanceof HTMLElement) {
      const transitionEndHandler = () => {
        firstLine.classList.remove('scroll-text-fade-in');
        firstLine.removeEventListener('animationend', transitionEndHandler);
      };
      firstLine.addEventListener('animationend', transitionEndHandler);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);


  return (
    <Grid container>
      <Grid size={3} style={{ zIndex: 1 }}>
        <div className="text-lines">
          <div className="scroll-text scroll-text-fade-in"><h3 style={{ margin: '0' }}>Look Better, Feel Better</h3></div>
          <div className="scroll-text"><h3 style={{ margin: '0' }}>Recreate your style with Roles</h3></div>
          <div className="scroll-text"><h3 style={{ margin: '0' }}>Freshen up with our American Cotton Blend</h3></div>
          <div className="scroll-text"><h3 style={{ margin: '0' }}>Soft, Breathable Materials</h3></div>
          <div className="scroll-text"><h3 style={{ margin: '0' }}>100% Satisfaction Guarentee</h3></div>
        </div>
      </Grid>
      <Grid size={9}>
        <div className="img-animation" style={{ padding: '2rem' }}>
          <video autoPlay loop muted playsInline id="video-animation" className={'scroll-image'}>
            <source src="/RolesHomepageComp540.mp4" type="video/mp4"></source>
          </video>
        </div>
      </Grid>
    </Grid>
  );
}

function App() {
  return (
    <Box>
      <Grid container padding={'1rem'}>
        <Grid size={6}>
          <h1 style={{ fontSize: '5rem', marginBottom: '0' }} className='bricolage-grotesque'>
            Wear What You Stand For.<br />
            Dress the Role.
          </h1>
        </Grid>
        <Grid size={5} margin={'0 auto'}>
          <Stack justifyContent={'flex-end'} height={'100%'}>
            <CardContent style={{ fontSize: 'larger' }}>
              New drops, bold colors, and attitude to match. Find your next favorite fit and turn every sidewalk into your runway.
            </CardContent>
            <Stack direction={'row'} justifyContent={'flex-start'} spacing={2}>
              <Link to={'/products'}>
                <Button size='large' sx={{
                  textTransform: 'none',
                  backgroundColor: 'rgba(100, 200, 255, 1)',
                  color: 'rgb(50,50,50)',
                  '&:hover': {
                    backgroundColor: 'rgba(75, 175, 225, 1)'
                  }
                }} >
                  Shop
                </Button>
              </Link>
              <Button href='/products' size='large' sx={{ color: 'rgb(25,25,25)', textTransform: 'none' }}>
                Explore
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Stack spacing={5} direction="row">
          {['Roles3.jpeg', 'Roles1.jpeg', 'Roles2.jpeg'].map((src, i) => (
            <Box
              key={i}
              component="img"
              src={`/${src}`}
              alt={`Role ${i + 1}`}
              sx={{
                maxWidth: '33%',
                height: 'auto',
                display: 'block',
                flexShrink: 1,
                borderRadius: "1rem"
              }}
            />
          ))}
        </Stack>
      </Box>
      <Animation />
      <MuiTextCarousel />
    </Box>
  )
}

export default App
