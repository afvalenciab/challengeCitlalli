import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Grid,
    Box,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import * as actionsLogout from '../store/actions/ALogout';
import { ReactComponent as ParrotLogo } from '../parrot-logo.svg';

type Props = {
    children: JSX.Element;
};

export default function Layout({ children }: Props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(actionsLogout.getLogoutRequest({ navigate }));
    };

    return (
        <Grid
            container
            justifyContent="space-between"
            direction="column"
            style={{ minHeight: '100vh', width: '100%' }}
        >
            <Grid item>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Box
                            component="div"
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                                flexGrow: 1,
                            }}
                        >
                            <ParrotLogo
                                height={90}
                                width={100}
                                fill={'#ffffff'}
                            />
                        </Box>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Mi perfil
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Cerrar sesión
                                </MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item>{children}</Grid>
            <Grid item>
                <Grid
                    container
                    p={2}
                    justifyContent="center"
                    direction="column"
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            fontWeight: '500',
                            textAlign: 'center',
                            color: 'primary.light',
                        }}
                    >
                        Coding challenge - Citlalli Del Moral,{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
