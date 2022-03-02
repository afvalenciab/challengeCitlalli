import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import Layout from '../components/Layout';

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <Layout>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                spacing={5}
                sx={{ width: '100%', margin: '0' }}
            >
                <Grid item style={{ padding: '0', width: '460px' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            mb: '2rem',
                            textAlign: 'left',
                        }}
                    >
                        Error 404
                    </Typography>
                </Grid>
                <Grid item style={{ padding: '0', width: '460px' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: '2rem',
                            textAlign: 'left',
                            fontSize: '1.4rem',
                        }}
                    >
                        Lo sentimos no hemos podido encontrar la página que
                        buscas.
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: '3rem',
                            textAlign: 'left',
                            fontSize: '1.4rem',
                        }}
                    >
                        Por favor verifique la dirección e inténtelo de nuevo.
                    </Typography>
                    <Button
                        variant="contained"
                        type="button"
                        color="primary"
                        onClick={handleClick}
                        sx={{ p: '1rem' }}
                    >
                        Regresar a inicio
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    );
}
