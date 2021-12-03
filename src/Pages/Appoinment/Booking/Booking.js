import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess, setInsertId}) => {
    const { name, space, id, time, price} = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
       <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{p: 4, }} >
                <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 500, }} gutterBottom component="div">
                        {name}
                </Typography>
                <Typography sx={{  fontWeight: 500, }} variant="h5" gutterBottom component="div">
                    {time}
                </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                       Price ${price}
                    </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>

            <BookingModal
                setBookingSuccess={setBookingSuccess}
                booking={booking}
                date={date}
                openBooking={openBooking}
                setInsertId={setInsertId}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
          
      
    );
};

export default Booking;  