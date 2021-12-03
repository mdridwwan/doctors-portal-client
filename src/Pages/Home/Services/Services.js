import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa.Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa adipisci?',
    img: fluoride    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa, Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa adipisci?',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. , Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa, Doloremque ea similique ex quod maiores officia! Nemo eius totam ipsa adipisci?',
        img: whitening
    }
]


const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', mt: 5, pb: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, mb: '50px', color: 'text.primary' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                            service={service}

                            >
                            </Service>
                        </Grid>
                    ))}
                </Grid>
          </Container>
        </Box>
    );
};

export default Services;