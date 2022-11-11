import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// eslint-disable-next-line import/no-unresolved
import { login } from 'src/app/rootReducer';
import userApi from '../../../utils/userApi';
// components
import Iconify from '../../../components/Iconify';
import { RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------
const defaultValues = {
    username: '',
    password: '',
    remember: true,
};

const LoginSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
}).required();

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);

    const [showPassword, setShowPassword] = useState(false);

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(LoginSchema),
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = methods;

    const onSubmit = async ({ remember, ...passProps }) => {
        const res = await userApi.login(passProps);

        await dispatch(login(res.data.data));
        return navigate('/dashboard/app', { replace: true });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <RHFTextField errors={errors} control={control} name="username" label="Username" />

                <RHFTextField
                    errors={errors}
                    control={control}
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
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
                Login
            </LoadingButton>
            </Stack>


        </form>
    );
}
