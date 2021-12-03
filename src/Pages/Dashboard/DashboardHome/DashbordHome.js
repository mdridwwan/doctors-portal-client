import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Calender from '../../Shared/Calender/Calender';
import AppointmentsD from '../AppointmentsD/AppointmentsD';

const DashbordHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <AppointmentsD date={date}></AppointmentsD>
                </Grid>

            </Grid>
        </Box>

    );
};

export default DashbordHome;