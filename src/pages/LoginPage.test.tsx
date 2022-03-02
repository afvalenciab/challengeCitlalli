import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import LoginPage from './LoginPage';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));
describe('render', () => {
    it('without crashing', () => {
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
        render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        );
    });
});
