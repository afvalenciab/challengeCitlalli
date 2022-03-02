import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import LoginForm from './LoginForm';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));
describe('render', () => {
    const store = mockStore({
        login: {
            data: {},
            error: {},
        },
        data: {
            store: {},
            products: {},
        },
        error: {
            status: false,
        },
    });

    it('without crashing', () => {
        render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    });

    it('with form submit', async () => {
        render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );

        const email = screen.getByLabelText('Correo electrónico');
        const password = screen.getByLabelText('Contraseña');
        const showPassword = screen.getByLabelText(
            'toggle password visibility'
        );
        const submit = screen.getByRole('button', { name: /Iniciar sesión/i });
        fireEvent.change(email, 'test@test.com');
        fireEvent.change(password, 'constrasena');
        fireEvent.click(showPassword);
        fireEvent.click(submit);
    });
});
