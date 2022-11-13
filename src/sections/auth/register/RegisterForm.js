import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
// components
import { RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';
import userApi from '../../../utils/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------
const defaultValues = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: 0,
    height: '',
    weight: '',
};

const RegisterSchema = Yup.object({
    userName: Yup.string().required('User name required'),
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
}).required();

export default function RegisterForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(RegisterSchema),
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = methods;

    const onSubmit = async ({...passProps}) => {
        userApi.register(passProps);
        navigate('/login', { replace: true });
    };

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

                <RHFTextField
                        errors={errors}
                        control={control}
                        name="userName"
                        label="User name"
                    />

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

                <RHFTextField
                    control={control}
                    errors={errors}
                    name="phone"
                    label="Phone number"
                />

                <RHFTextField
                    control={control}
                    errors={errors}
                    name="height"
                    label="Height"
                />

                <RHFTextField
                    control={control}
                    errors={errors}
                    name="weight"
                    label="Weight"
                />

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Register
                </LoadingButton>
            </Stack>
        </form>
    );
}
