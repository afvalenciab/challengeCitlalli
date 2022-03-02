import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

test('renders App', () => {
    const store = mockStore({
        login: {
            data: {},
            error: {},
        },
        data: {
            store: {},
            products: {},
            error: {},
        },
        error: {
            status: false,
        },
        loader: {
            status: false,
            title: '',
            default: {
                title: 'Por favor, espera un momento',
            },
        },
    });
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});

test('renders App with loader', () => {
    const store = mockStore({
        login: {
            data: {},
            error: {},
        },
        data: {
            store: {},
            products: {},
            error: {},
        },
        error: {
            status: false,
        },
        loader: {
            status: true,
            title: 'Test loader',
            default: {
                title: 'Por favor, espera un momento',
            },
        },
    });
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const loader = screen.getByText('Test loader');
    expect(loader).toBeInTheDocument();
});

test('renders App with error', () => {
    const store = mockStore({
        login: {
            data: {},
            error: {},
        },
        data: {
            store: {},
            products: {},
            error: {},
        },
        error: {
            status: true,
        },
        loader: {
            status: false,
            title: '',
            default: {
                title: 'Por favor, espera un momento',
            },
        },
    });
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const modalButton = screen.getByText('Entendido');
    fireEvent.click(modalButton);
    expect(modalButton).toBeInTheDocument();
});
