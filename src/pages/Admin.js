import { useEffect, useState } from 'react';
import adminApi from '../utils/adminApi';
// @mui

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom/dist';

import { DataGrid } from '@mui/x-data-grid';
import Page from '../components/Page';
import AdminPopover from '../layouts/dashboard/AdminPopover';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'ptName',
        headerName: 'PT name',
        width: 200,
    },
    {
        field: 'userName',
        headerName: 'User name',
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
        field: 'accept',
        headerName: 'Action',
        width: 200,
    },
];

export default function Admin() {
    const navigate = useNavigate();

    const [list, setList] = useState();
    const [click, setClick] = useState();
    const [message, setMessage] = useState('');

    let rows = [];
    list?.map((row) => {
        const data = {};
        data.id = row.contractId;
        data.ptName = row.pt.userName;
        data.userName = row.user.userName;
        data.startDate = row.createdDate;
        data.endDate = row.endDate;
        data.accept = 'Accept';

        rows = Object.assign([], rows);
        rows.push(data);
    });

    useEffect(() => {
        const initData = async () => {
            const tmp = await adminApi.getContractForAdmin();
            setList(tmp.data.data);
            setClick(false);
        };
        initData();
    }, [click]);

    const handleRowClick = (params) => {
        adminApi.confirmContract(params.row.id);
        setMessage(`Order of "${params.row.userName}" is accepted`);
        setClick(true);
    };

    const handleCreate = () => {
        navigate('/createPT', { replace: true });
    };

    return (
        <Page title="Admin">
            <Container maxWidth="xl">
                <AdminPopover />
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button onClick={() => handleCreate()}>Create PT</Button>

                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            onRowClick={handleRowClick}
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </Box>
                    {message && <Alert severity="info">{message}</Alert>}
                </Stack>
            </Container>
        </Page>
    );
}
