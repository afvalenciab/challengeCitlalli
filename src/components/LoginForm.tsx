import { useState, MouseEvent } from 'react';
import {
    Button,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actionsLogin from '../store/actions/ALogin';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('El correo electrónico no tiene un formato valido')
        .required('Por favor, ingresa tu correo electrónico'),
    password: yup.string().required('Por favor, ingresa tu contraseña'),
});

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight={{ xs: '350px', md: '100vh' }}
            spacing={5}
            sx={{ width: '100%', margin: '0' }}
        >
            <Formik
                validateOnMount={true}
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data) => {
                    const payload = {
                        ...data,
                        navigate,
                    };
                    dispatch(actionsLogin.getLoginRequest(payload));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                }) => (
                    <Form>
                        <Grid item display={{ xs: 'none', md: 'block' }}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold', mb: '3rem' }}
                            >
                                Conéctate aquí
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    value={values.email}
                                    helperText={
                                        touched.email ? errors.email : ''
                                    }
                                    error={
                                        touched.email && Boolean(errors.email)
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{
                                        mb: '2rem',
                                        minWidth: { xs: '300px', md: '400px' },
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    fullWidth
                                    value={values.password}
                                    helperText={
                                        touched.password ? errors.password : ''
                                    }
                                    error={
                                        touched.password &&
                                        Boolean(errors.password)
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ mb: '2rem' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    );
}
