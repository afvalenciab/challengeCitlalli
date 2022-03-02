import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d0d0d',
            light: '#a3a3af',
            dark: '#090909',
        },
        secondary: {
            main: '#f04e49',
            light: '#f46e70',
            dark: '#a93335',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
