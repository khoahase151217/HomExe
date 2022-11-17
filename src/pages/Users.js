import { useEffect, useState } from 'react';
import contractApi from '../utils/contractApi';
// @mui

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';



import { DataGrid } from '@mui/x-data-grid';
const SLOT_CATEGORIES = [
    '7:00, 9:30, Monday, Thursday',
    '09:30, 11:00, Monday, Thursday',
    '14:00, 15:30, Monday, Thursday',
    '15:30, 17:00, Monday, Thursday',
    '15:30, 17:00, Tuesday, Friday',
    '15:30, 17:00, Tuesday, Friday',
    '15:30, 17:00, Tuesday, Friday',
    '15:30, 17:00, Tuesday, Friday',
    '15:30, 17:00, Wednesday, Saturday',
    '15:30, 17:00, Wednesday, Saturday',
    '15:30, 17:00, Wednesday, Saturday',
    '15:30, 17:00, Wednesday, Saturday',
];
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'startDate',
        headerName: 'Start Date',
        width: 200,
    },
    {
        field: 'endDate',
        headerName: 'End Date',
        width: 200,
    },
    {
        field: 'schedule',
        headerName: 'Schedule',
        width: 300,
    },
];



export default function Admin() {
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state?.auth?.userInfo);
    const [list, setList] = useState();

    let rows = [];
    list?.map((row) => {
        const data = {};
        data.id = row.contractId;
        data.email = row.user.email;
        data.startDate = row.createdDate;
        data.endDate = row.endDate;
        data.schedule = SLOT_CATEGORIES[row.schedule];

        rows = Object.assign([], rows);
        rows.push(data);
    });

    useEffect(() => {
        const initData = async () => {
            const tmp = await contractApi.getContractByPtId(userInfo.ptId);
            setList(tmp.data.data);
        };
        initData();
    }, []);

    const handleBack = () => {
        navigate('/dashboard/app', { replace: true });
    };



    return (
        <Stack spacing={2} sx={{ width: '100%' }}>

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Box>
            <Button onClick={() => handleBack()}>Back to home</Button>
        </Stack>
    );
}
