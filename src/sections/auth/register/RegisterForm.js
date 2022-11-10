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

// ----------------------------------------------------------------------
const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const RegisterSchema = Yup.object({
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

    const onSubmit = async () => {
        navigate('/dashboard', { replace: true });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField
                        control={control}
                        errors={errors}
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
