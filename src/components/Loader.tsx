import { Backdrop, CircularProgress, Typography, Grid } from '@mui/material';
import { ILoader } from '../interfaces/ILoader';

export default function Loader({ title }: ILoader) {
    return (
        <div>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <CircularProgress color="inherit" />
                    </Grid>
                    <Grid item mt="2rem">
                        <Typography variant="h5">
                            {title || 'Por favor espere'}
                        </Typography>
                    </Grid>
                </Grid>
            </Backdrop>
        </div>
    );
}
