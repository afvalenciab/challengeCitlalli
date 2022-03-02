import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
    useMediaQuery,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { persistor } from './store';
import { RootState } from './store/reducers';
import * as actionsError from './store/actions/AError';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import RequireAuth from './components/RequireAuth';
import Loader from './components/Loader';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.loader);
    const error = useSelector((state: RootState) => state.error);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
        dispatch(actionsError.hideError());
    };

    useEffect(() => {
        setOpen(error.status || false);
    }, [error]);

    return (
        <PersistGate persistor={persistor}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/menu"
                        element={
                            <RequireAuth redirectTo="/">
                                <MenuPage />
                            </RequireAuth>
                        }
                    />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        Ocurrio un error
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Por favor vuelve a intentarlo más tarde.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Entendido
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            {loading.status && <Loader title={loading.title} />}
        </PersistGate>
    );
}

export default App;
