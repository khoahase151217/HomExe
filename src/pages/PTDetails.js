import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import {
  Card,
  Link,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Fab,
  Box,
  Chip,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  ListItemIcon,
  Avatar,
} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// hooks
// eslint-disable-next-line import/no-unresolved
import PTRating from 'src/components/PTRating';
// eslint-disable-next-line import/no-unresolved
import PTImageList from 'src/components/PTImageList';
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
import AuthSocial from '../sections/auth/AuthSocial';
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

export default function PTDetails() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="PT Detail">
      <RootStyle>
        <HeaderStyle>
          <Logo />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Go back
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          //   <SectionStyle>
          <Box
            sx={{
              width: 900,
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
              <Stack
                sx={{
                  mt: 10,
                  mb: 0,
                }}
                spacing={2}
              >
                <Avatar
                  src="/static/mock-images/big_avatars/big_avatar1.jpeg"
                  alt="avatar"
                  variant="rounded"
                  sx={{
                    width: 500,
                    height: 500,
                  }}
                />
                <Typography variant="h3" sx={{ mt: 10, mb: 5 }}>
                  Van Phu Hoa
                  <Typography sx={{ color: 'text.secondary', mb: 5 }}>Age 20, TP. HCM</Typography>
                </Typography>
                <PTImageList />
              </Stack>
            </Box>
          </Box>

          //   </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h3" gutterBottom>
              Profile
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                my: 2,
              }}
            >
              <PTRating />
              <Fab variant="extended" color="primary" aria-label="add">
                {/* <AddIcon sx={{ mr: 1 }} /> */}
                Connect
              </Fab>
            </Box>

            <Typography variant="h4" gutterBottom>
              Contact Info
            </Typography>
            <AuthSocial />
            <Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Categories:
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="yoga" color="primary" />
                  <Chip label="gym" color="success" />
                </Stack>
              </Box>

              <Typography variant="h6" gutterBottom>
                Schedule
              </Typography>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Certificate
                </Typography>
                <Box sx={{ width: '100%', maxWidth: 360 }}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {/* <WorkspacePremiumIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Gymer of the year 2022" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {/* <WorkspacePremiumIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Yoga Coacher Professional" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Grid>

            {/* <PTImageList /> */}

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Go back
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
