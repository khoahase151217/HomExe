import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import { login } from 'src/app/rootReducer';
import userApi from '../../../utils/userApi';
// components
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';

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

    console.log({ userInfo });

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
        if (res.data.data == null) {
            toast.error('Login failed!');
            return navigate('/login', { replace: true });
        }
        await dispatch(login(res.data.data));
        toast.success('Login successfully!');

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
