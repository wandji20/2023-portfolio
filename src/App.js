import {
  Button, Container, Grid, Typography,
} from '@mui/material';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // const [activeNav, setActiveNav] = useState(true);
  // const toggleNav = () => {
  //   if (window.scrollY <= 80) {
  //     setActiveNav(true);
  //     return;
  //   }
  //   setActiveNav(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', toggleNav)
  //   return () => {
  //     window.removeEventListener('scroll', toggleNav)
  //   }
  // }, [])

  const downLoadResume = () => {
    fetch(
      'WandjiBertrandResume.pdf',
      {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/pdf',
        },
      },
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'WandjiBertrandResume.pdf';
        alink.click();
      });
    });
  };

  return (
    <Grid>
      <Profile activeNav />
      <Grid sx={{ padding: { xs: '50px 16px' } }}>
        <Container sx={{ padding: 0 }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: '40px',
              fontSize: '36px',
              lineHeight: '42px',
              fontFamily: 'Roboto Mono,monospace',
              textIndent: 0,
              fontWeight: '500',
            }}
          >
            Hi_
          </Typography>
          <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit' }}>
            Resilient full-stack developer with a great passion for writing tested reusable code.
            Excel at working with teams and building software solutions using Ruby on Rails,
            Stimulus JS, React, JavaScript, and GraphQL.
          </Typography>
          <Typography sx={{ marginBottom: '36px', lineHeight: 'inherit', fontSize: 'inherit' }}>Open to new roles.</Typography>
          <Button
            startIcon={<CloudDownloadIcon sx={{ color: 'white' }} />}
            variant="contained"
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              background: '#6d56c1',
              borderRadius: '25px',
              '&:hover': { background: '#6d56c1' },
              '&:focus': { background: '#6d56c1' },
            }}
            onClick={downLoadResume}
          >
            Download CV
          </Button>
        </Container>
      </Grid>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />

      <Resume />

      <Projects />

      <Contact />
    </Grid>
  );
}

export default App;
