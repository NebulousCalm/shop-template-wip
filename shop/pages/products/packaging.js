import * as React from 'react';
import Slider from '@mui/material/Slider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

import Image from 'next/image';
import shoppingIMG from '../../public/shoppingONe.svg';
import delivtruck from '../../public/delivtruck.svg'

function valuetext(value) {
  return `${value}°C`;
}

export default function dev() {
  return (
    <main>
      <div className="img-container">
        <Image src={shoppingIMG} className="item-image"></Image>
        <Box sx={{ width: "20vw" }}>
        <h1 className="quantity">Quantity of items</h1>
      <Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        className="quantity-slider"
      />
    </Box>
      </div>
      <div className="right-content">
        <Image src={delivtruck} alt="delivery truck" className="truck"></Image>

        <div className="datepickerContain">
          <h1 className="datehead">Arrival Date</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker fullWidth label="select date" className="datepicker"/>
          </LocalizationProvider>
        </div>
      </div>
      <div className="float-right">
        <Box className="img-container"
      component="form"
      sx={{
        '& > :not(style)': { m: 1 , width: "20vw"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="outlined" />
          <br /><br />
      <TextField label="Shipping Address" variant="outlined" />
          <br /><br />
      <TextField label="Credit Card Number" variant="outlined" />
          <br /><br />
      <TextField label="CID" variant="outlined" type="password" />
    </Box>
      </div>
    </main>
  );
}
