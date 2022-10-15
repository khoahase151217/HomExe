/* eslint-disable react/jsx-key */
import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import userApi from 'src/utils/userApi';

const moment = require('moment');

export default function PaymentForm() {
    // const [userInfo, setUserInfo] = useState([]);
    // useEffect(() => {
    //     const initData = async () => {
    //         const tmp = await userApi.getUserId(2).then((res) => res.data);
    //         console.log(tmp.data);
    //         setUserInfo(tmp.data);
    //     };
    //     initData();
    // }, []);
    const userInfo = useSelector((state) => state?.auth?.userInfo);

    const startDate = new Date();
    const [month, setMonth] = React.useState(1);
    const [endDate, setEndDate] = React.useState(startDate);
    const [schedule, setSchedule] = React.useState('');
    let oldMonth = 1;
    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
        if (event.target.value > oldMonth) {
            setEndDate(
                moment(startDate, 'DD-MM-yyyy')
                    .add(event.target.value, 'months')
                    .format('DD-MM-yyyy')
            );
        } else {
            setEndDate(
                moment(startDate, 'DD-MM-yyyy')
                    .subtract(event.target.value, 'months')
                    .format('DD-MM-yyyy')
            );
        }
        oldMonth = event.target.value;
        handleInput(event);
    };
    const handleChangeSchedule = (event) => {
        setSchedule(event.target.value);
        handleInput(event);
    };

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const schedules = [
        '7.00 - 9.30 Mon, Thu',
        '9.30 - 11.00 Mon, Thu',
        '14.00 - 15.30 Mon, Thu',
        '15.30 - 17.00 Mon, Thu',
        '7.00 - 9.30 Tue, Fri',
        '9.30 - 11.00 Tue, Fri',
        '14.00 - 15.30 Tue, Fri',
        '15.30 - 17.00 Tue, Fri',
        '7.00 - 9.30 Wed, Sat',
        '9.30 - 11.00 Wed, Sat',
        '14.00 - 15.30 Wed, Sat',
        '15.30 - 17.00 Wed, Sat',
    ];
    const [formInput, setFormInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        name: '',
        email: '',
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const data = { formInput };
    };

    const handleInput = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
    };

    return (
        <Box sx={{ minWidth: 120 }} component="form" onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={userInfo.fullName}
                onChange={handleInput}
            />
            <TextField
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={userInfo.email}
                onSubmit={handleSubmit}
            />
            <TextField
                type="number"
                placeholder="Enter phone number"
                label="Phone"
                variant="outlined"
                fullWidth
                required
                value={userInfo.phone}
                onSubmit={handleSubmit}
            />
            <TextField label="PT Name" variant="outlined" fullWidth required />
            <Stack direction="row">
                <Box>
                    <FormControl>
                        <InputLabel id="select-month">Type of schedule</InputLabel>
                        <Select
                            labelId="select-month"
                            id="demo-simple-select"
                            value={schedule}
                            label="Schedule"
                            onChange={handleChangeSchedule}
                            width={'400px'}
                        >
                            {schedules.map((schedule, index) => (
                                <MenuItem value={index}>{schedule}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <FormControl fullwidth>
                    <InputLabel id="select-month">Number of months</InputLabel>
                    <Select
                        labelId="select-month"
                        id="demo-simple-select"
                        value={month}
                        label="Month"
                        onChange={handleChangeMonth}
                    >
                        {months.map((mon) => (
                            <MenuItem value={mon}>{mon}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
            <TextField label="start date" disabled defaultValue={startDate} />
            <TextField label="end date" defaultValue={endDate} />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                I have completed the payment
            </Button>
        </Box>
    );
}
