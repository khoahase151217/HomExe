import { useState, useEffect } from 'react';
import adminApi from '../utils/adminApi';

import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
// components
import { RHFTextField } from '../components/hook-form';
import Iconify from '../components/Iconify';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @mui

const defaultValues = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    linkMeet: '',
    userName: '',
    cover: '',
    dob: '',
    address: '',
};

const CreateSchema = Yup.object({
    userName: Yup.string().required('User name required'),
    phone: Yup.string().required('Phone required'),
    linkMeet: Yup.string().required('Link meet required'),
    cover: Yup.string().required('Cover required'),
    dob: Yup.string().required('Day of birth required'),
    address: Yup.string().required('Address required'),
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
}).required();

export default function CreatePT() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [category, setCategory] = useState(0);
    const [list, setList] = useState([]);
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(CreateSchema),
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = methods;

    const onSubmit = async ({ ...passProps }) => {
       const res =  await adminApi.createPt({
            email: passProps.email,
            userName: passProps.userName,
            password: passProps.password,
            phone: passProps.phone,
            linkMeet: passProps.linkMeet,
            firstName: passProps.firstName,
            lastName: passProps.lastName,
            dob: passProps.dob,
            cover: passProps.cover,
            address: passProps.address,
            categoryId: category
        });
        if(res.data.code != 200){
            toast("Create PT failed!");

        }else{
            toast("Create PT successfully!");

        }
        navigate('/admin', { replace: true });
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        const initData = async () => {
            const tmp = await adminApi.getCategory();
            setList(tmp.data.data);
        };
        initData();
    }, []);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField
                        errors={errors}
                        control={control}
                        name="firstName"
                        label="First name"
                    />
                    <RHFTextField
                        errors={errors}
                        control={control}
                        name="lastName"
                        label="Last name"
                    />
                </Stack>

                <RHFTextField errors={errors} control={control} name="userName" label="User name" />
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    onChange={handleChange}
                >
                    {list?.map((item) => {
                        return <MenuItem value={item.categoryId}>{item.category}</MenuItem>;
                    })}
                </Select>

                <RHFTextField
                    control={control}
                    errors={errors}
                    name="email"
                    label="Email address"
                />


                <RHFTextField
                    control={control}
                    errors={errors}
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <Iconify
                                        icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <RHFTextField control={control} errors={errors} name="phone" label="Phone number" />

                <RHFTextField control={control} errors={errors} name="linkMeet" label="LinkMeet" />

                <RHFTextField control={control} errors={errors} name="cover" label="Image" />

                <RHFTextField control={control} errors={errors} name="dob" label="Day of birth" />

                <RHFTextField control={control} errors={errors} name="address" label="Address" />

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Create
                </LoadingButton>
            </Stack>
        </form>
    );
}
