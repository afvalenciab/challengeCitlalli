import { Box, Grid, Typography, Paper } from '@mui/material';
import { ReactComponent as ParrotLogo } from '../parrot-logo.svg';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    return (
        <Grid container height={'100vh'} alignContent="space-between">
            <Grid item xs={12} sm={12} md={5}>
                <Paper
                    elevation={0}
                    sx={{ bgcolor: 'secondary.main', border: 'none' }}
                    square
                >
                    <Grid
                        container
                        p={2}
                        height={{ md: '100vh' }}
                        justifyContent="center"
                        direction="column"
                    >
                        <Box
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                            }}
                        >
                            <ParrotLogo
                                height={110}
                                width={120}
                                fill={'#ffffff'}
                            />
                        </Box>
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: '500',
                                fontSize: {
                                    xs: '2rem',
                                    md: '3.5rem',
                                },
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                            }}
                        >
                            El software para los restaurantes de hoy.
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: '500',
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                            }}
                        >
                            Tu restaurante está listo para llegar más alto.
                        </Typography>
                        <Box style={{ position: 'fixed', bottom: '0px' }}>
                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    fontWeight: '500',
                                    textAlign: {
                                        xs: 'center',
                                        md: 'left',
                                    },
                                    display: {
                                        xs: 'none',
                                        md: 'block',
                                    },
                                }}
                            >
                                Coding challenge - Citlalli Del Moral,{' '}
                                {new Date().getFullYear()}
                            </Typography>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Paper elevation={0} square>
                    {/* <p>Login</p> */}
                    <LoginForm />
                </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={5}
                minWidth={{ xs: '300px', md: '400px' }}
                display={{ xs: 'block', md: 'none' }}
            >
                <Paper elevation={0} square>
                    <Grid
                        container
                        p={2}
                        height={{ md: '100vh' }}
                        justifyContent="center"
                        direction="column"
                    >
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                fontWeight: '500',
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                                color: 'primary.light',
                            }}
                        >
                            Coding challenge - Citlalli Del Moral,{' '}
                            {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
