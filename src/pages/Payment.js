import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Card, Container, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
// eslint-disable-next-line import/no-unresolved
import PaymentForm from 'src/sections/auth/PaymentForm';
// eslint-disable-next-line import/no-unresolved
import BankCard from 'src/components/BankCard';
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/Logo';
import Page from '../components/Page';
import { useSelector } from 'react-redux';
// sections

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

export default function Payment({ ptId }) {
    const userInfo = useSelector((state) => state?.auth?.userInfo);
    const paymentInfo = useSelector((state) => state?.auth?.paymentInfo);
    const smUp = useResponsive('up', 'sm');
    console.log({ paymentInfo, userInfo });

    const mdUp = useResponsive('up', 'md');

    return (
        <Page title="Payment">
            <RootStyle>
                <HeaderStyle>
                    <Logo />

                    {smUp && (
                        <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                            Don’t have an account? {''}
                            <Link variant="subtitle2" component={RouterLink} to="/register">
                                Get started
                            </Link>
                        </Typography>
                    )}
                </HeaderStyle>

                <Container maxWidth="sm">
                    <ContentStyle>
                        <Typography variant="h4" gutterBottom>
                            Check out
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                            Enter your details below.
                        </Typography>

                        {/* <AuthSocial /> */}

                        <PaymentForm />

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
                <Container maxWidth="sm">
                    <ContentStyle>
                        <Typography variant="h4" gutterBottom>
                            Information
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                            Homexe's infomation
                        </Typography>

                        {/* <AuthSocial /> */}
                        <Stack spacing={2}>
                            <BankCard bankName={'Techcombank'}  />
                        </Stack>

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
