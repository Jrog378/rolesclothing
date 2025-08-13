import { useEffect } from 'react'
import './App.css'
import { Button, CardContent, Grid, Stack, Box, Typography, Card } from '@mui/material'
import { Link } from "react-router";
import type { ProductDetailsProps, RootState } from './store';
import { useSelector } from 'react-redux';

// const lines = [
//   'Look Better, Feel Better',
//   'Recreate your style with Roles',
//   'Freshen up with our American Cotton Blend',
//   'Soft, Breathable Materials',
//   '100% Satisfaction Guarantee',
// ];

function CarouselCard({entry}: {entry: ProductDetailsProps}) {
  return (
    <Grid key={entry.id} size={{ md: 6, lg: 4 }} style={{ padding: '10px', margin:'auto' }}>
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
  )
}

// export function MuiTextCarousel() {
//   const [index, setIndex] = useState(0);

//   

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % three.length);
//   };

//   const handleBack = () => {
//     setIndex((prev) => (prev - 1 + three.length) % three.length);
//   };

//   return (
//     <Box sx={{ minHeight: 120 }}>
//       <Stack direction="row" width={"100%"} justifyContent={'space-between'} spacing={2} mt={2}>
//         <Button onClick={handleBack}>Back</Button>
//         <Grid container>
//           {<CarouselCard entry={three[index]}/>}
//         </Grid>
//         <Button onClick={handleNext}>Next</Button>
//       </Stack>
//     </Box>
//   );
// }




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
  const entries = useSelector((state: RootState) => state.mySlice.data);
  let three: ProductDetailsProps[] = entries.slice(0, 3);
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
                <Button sx={{
                    textTransform: 'none', color: 'rgb(255, 252, 248)'
                }} size='large' variant='contained' className="primary"><Typography color="white">Shop</Typography></Button>
                </Link>
              <Button href='/products' size='large' color='inherit' variant='outlined' sx={{ color: 'rgb(25,25,25)', border: '2px solid #9CAF88', textTransform: 'none' }}>
              <Typography>Explore</Typography>
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
      <Grid container>
        {three.map((one) => (
          <CarouselCard entry={one}/>
        ))}
      </Grid>
      {/* <MuiTextCarousel /> */}
    </Box>
  )
}

export default App
