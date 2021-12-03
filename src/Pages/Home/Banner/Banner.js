import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg ={
    background: `url(${bg})`
}

const varticalCenter ={
    display: 'flex',
    height: '450px',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{textAlign: 'left', ...varticalCenter}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smaile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my:3, fontSize: 16, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga accusantium necessitatibus ex velit porro odit est dolorum blanditiis dolore.
                        </Typography>
                        <Button style={{ backgroundColor: 'rgb(25 165 255)' }} sx={{ mt: 3 }} variant="contained">GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varticalCenter}>
                    <img style={{width: '400px'}} src={chair} alt="" />
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default Banner;