/* eslint-disable react/jsx-key */
import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import contractApi from 'src/utils/contractApi';
// import PtApi from 'src/utils/PtApi';
import userApi from 'src/utils/userApi';
// import PtApi from 'src/utils/PtApi';

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
    const paymentInfo = useSelector((state) => state?.auth?.paymentInfo);

    const startDate = new Date();
    const [month, setMonth] = React.useState(1);
    const [endDate, setEndDate] = React.useState(startDate);
    const [schedule, setSchedule] = React.useState('7.00 - 9.30 Mon, Thu');
    const [PT, setPT] = useState();
    let oldMonth = 1;
    // const handleChangeMonth = (event) => {
    //     setMonth(event.target.value);
    //     if (event.target.value > oldMonth) {
    //         setEndDate(
    //             moment(startDate, 'DD-MM-yyyy')
    //                 .add(event.target.value, 'months')
    //                 .format('DD-MM-yyyy')
    //         );
    //     } else {
    //         setEndDate(
    //             moment(startDate, 'DD-MM-yyyy')
    //                 .subtract(event.target.value, 'months')
    //                 .format('DD-MM-yyyy')
    //         );
    //     }
    //     oldMonth = event.target.value;
    //     handleInput(event);
    // };
    // const handleChangeSchedule = (event) => {
    //     setSchedule(event.target.value);
    //     handleInput(event);
    // };

    // useEffect(() => {
    //     const initData = async () => {
    //         const tmp = await PtApi.getPtById(paymentInfo?.ptId);
    //         setPT(tmp.data.data);
    //     };
    //     initData();
    // }, []);
    const navigate = useNavigate()

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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(paymentInfo)
        const postData = async () => {
            var today = new Date();
            await contractApi.postContract({
                userId: userInfo.userId,
                ptId: paymentInfo.ptId,
                createdDate: today,
                endDate: moment(today).add(7, 'd'),
                schedule: paymentInfo.schedule,
            });
        };
        postData();
        navigate('/dashboard/app')
    };

    return (
        <form onSubmit={handleSubmit} style={{ minWidth: 120 }}>
            <TextField
                sx={{ my: 1 }}
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                value={userInfo?.fullName}
            />
            <TextField
                sx={{ my: 1 }}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={userInfo?.email}
                onSubmit={handleSubmit}
            />
            <TextField
                sx={{ my: 1 }}
                type="number"
                placeholder="Enter phone number"
                label="Phone"
                variant="outlined"
                fullWidth
                required
                value={userInfo?.phone}
                onSubmit={handleSubmit}
            />
            {/* <TextField
                sx={{ my: 1 }}
                label="PT Name"
                variant="outlined"
                fullWidth
                required
                value={PT?.fullName}
            /> */}
            {/* <FormControl fullwidth>
                    <InputLabel id="select-month">Number of months</InputLabel>
                    <Select
                        style={{ width: 'auto' }}
                        labelId="select-month"
                        id="demo-simple-select"
                        value={month}
                        label="Month"
                    >
                        {months.map((mon) => (
                            <MenuItem value={mon}>{mon}</MenuItem>
                        ))}
                    </Select>
                </FormControl> */}

            <TextField
                sx={{ my: 1, display: 'flex' }}
                label="start date"
                disabled
                defaultValue={startDate}
            />
            {/* <TextField label="end date" defaultValue={endDate} /> */}
            <TextField
                sx={{ display: 'flex' }}
                id="outlined-number"
                label="Total Money"
                type="number"
                value="50000"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            
            <Button type="submit" variant="contained" color="primary" fullWidth>
                I have completed the payment
            </Button>
        </form>
    );
}
