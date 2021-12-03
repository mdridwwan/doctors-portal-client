import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import appointmentBG from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png'

const appointmentBg = {
    background: `url(${appointmentBG})`,
    marginTop: '100px',
    backgroundColor: 'rgba(30, 37, 69, 0.8 )',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Container >
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} >
                        <img 
                        style={{width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
                       <Box>
                            <Typography variant="h6" sx={{mb:3}} style={{ color: '#ADDFFF' }}>
                                Appoinment
                            </Typography>
                            <Typography variant="h4" sx={{mb:2}} style={{ color: 'white', fontSize: '25px' }}>
                                Make an Appoinment Today
                            </Typography>
                            <Typography variant="p" sx={{mb:4}} style={{ color: 'white', fontSize: '16', fontWeight: 400 }}>
                                It is a long established fact that a reader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <br/>
                            <Button style={{ backgroundColor: 'rgb(25 165 255)' }} sx={{mt:3}} variant="contained">Learn More</Button>
                       </Box>
                    </Grid>

                </Grid>
            </Box>
       </Container>
    );
};

export default AppointmentBanner;