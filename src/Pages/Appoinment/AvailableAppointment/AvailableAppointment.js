import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [insertId , setInsertId] = useState({})
 //   console.log(insertId)

    const bookings = [
        {
            id: 1,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: 24,
            space: 10,
        },
        {
            id: 2,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 08.00 PM',
            price: 47,
            space: 10,
        },
        {
            id: 3,
            name: 'Cosmetic Dentistry',
            time: '08.00 PM - 09.00 PM',
            price: 50,
            space: 10,
        },
        {
            id: 4,
            name: 'Teeth Cleaning',
            time: '09.00 PM - 08.00 PM',
            price: '22',
            space: 4,
        },
        {
            id: 5,
            name: 'Cavity Protection',
            time: '05.00 PM - 08.00 PM',
            price: 20,
            space: 10,
        },
        {
            id: 6,
            name: 'Pediatric Dental',
            time: '02.00 PM - 08.00 PM',
            price: 70,
            space: 10,
        },
        {
            id: 7,
            name: 'Caviden Less',
            time: '04.00 PM - 08.00 PM',
            price: 40,
            space: 10,
        },
        {
            id: 8,
            name: 'Joklo Dan',
            time: '07.00 PM - 08.00 PM',
            price: 50,
            space: 10,
        },
        {
            id: 9,
            name: 'Cisto Ridab',
            time: '07.00 PM - 08.00 PM',
            price: 55,
            space: 10,
        },
        {
            id: 10,
            name: 'Sunney Leon',
            time: '07.00 PM - 08.00 PM',
            price: 60,
            space: 20,
        },

    ]

    return (
        <Container>
            <Typography variant="h3" sx={{ color: 'info.main', fontWeight: 400, py: 3, }} gutterBottom component="div">
                Available Appointments on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
               {
                    bookings.map(booking => <Booking 
                     key={booking.id}
                     date={date}
                     booking={booking}
                    setInsertId={setInsertId}
                     setBookingSuccess={setBookingSuccess}
                    ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;