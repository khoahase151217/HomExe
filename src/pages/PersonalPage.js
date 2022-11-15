import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
    Card,
    Link,
    Container,
    Typography,
    Grid,
    Box,
    Avatar,
    Divider,
    Stack,
} from '@mui/material';

import { useSelector } from 'react-redux';
import userApi from '../utils/userApi';
// hooks

import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
import AuthSocial from '../sections/auth/AuthSocial';
import { AppTasks } from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function PersonalPage() {

    const [user, setUser] = useState([]);
    const smUp = useResponsive('up', 'sm');

    const mdUp = useResponsive('up', 'md');
    const userInfo = useSelector((state)=> state.auth.userInfo)
    useEffect(() => {
        const initData = async () => {
            const tmp = await userApi.getUserId(userInfo.id).then((res) => res.data);
            setUser(tmp.data);
        };
        initData();
    }, []);

    return (
        <Page title="Dashboard: Personal Page">
            <RootStyle>
                <HeaderStyle>
                    <Logo />
                    {/* <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Don’t have an account? {''}
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Get started
            </Link>
          </Typography> */}
                </HeaderStyle>

                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        {userInfo.fullName}
                    </Typography>
                    <img src="/static/illustrations/illustration_login.png" alt="login" />
                </SectionStyle>
                {/* <SectionStyle>

     
           
           <Typography variant="h6" gutterBottom>
             Age
           </Typography>
           <Typography sx={{ color: 'text.secondary', mb: 1 }}>24</Typography>
           <Typography variant="h6" gutterBottom>
             Gender
           </Typography>
           <Typography sx={{ color: 'text.secondary', mb: 1 }}>Female</Typography>
           <Typography variant="h6" gutterBottom>
             Email Address
           </Typography>
           <Typography sx={{ color: 'text.secondary', mb: 1 }}>thuongle@gmail.com</Typography>
           <Typography variant="h6" gutterBottom>
             Phone
           </Typography>
           <Typography sx={{ color: 'text.secondary', mb: 1 }}>0339645857</Typography>
   
           </SectionStyle> */}

                <Container maxWidth="sm">
                    <ContentStyle sc={{ display: 'flex' }}>
                        <Card
                            variant="h3"
                            sx={{ px: 5, mt: 1, mb: 1, width: '25vw', display: 'inline-block' }}
                        >
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Age
                            </Typography>

                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                                {userInfo.age ? userInfo.age : 20}
                            </Typography>

                        </Card>
                        <Card sx={{ px: 5, mb: 1, width: '25vw', float: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Gender
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                                {userInfo.gender ? userInfo.gender : 'Female'}
                            </Typography>
                        </Card>
                        <Card sx={{ px: 5, mb: 1, width: '25vw', float: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Email
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                                {userInfo.email}
                            </Typography>
                        </Card>


                        <Card sx={{ px: 5, mb: 1, width: '25vw', float: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Phone
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>

                                {userInfo?.phone}

                            </Typography>
                        </Card>
                        <Card sx={{ px: 5, mb: 1, width: '25vw', float: 'left' }}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Height
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                                {userInfo.height}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                                Weight
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                                {userInfo.weight}
                            </Typography>
                        </Card>

                        

                        {/* <AuthSocial /> */}


                        {/* <LoginForm /> */}
                        {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}

                        {!smUp && (
                            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                                Don’t have an account?{' '}
                                <Link variant="subtitle2" component={RouterLink} to="/register">
                                    Get started
                                </Link>
                            </Typography>
                        )}
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
