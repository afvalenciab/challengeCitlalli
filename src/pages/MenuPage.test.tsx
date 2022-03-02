import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import MenuPage from './MenuPage';

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
                data: {
                    access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2MTA5MjU1LCJqdGkiOiIwYjEwODJiOGQwMmU0YTVmOTZjYTNiODM5NTUxZjI4MiIsInVzZXJfaWQiOjEzfQ.Nk1hlGcL8Em30_TtDybKKcknQpGX2eHGfx3sYaoz5R8',
                    refresh:
                        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0ODYxNDg1NSwianRpIjoiOTI5NzNiMWE3MWQ3NDE2NTlmZmZmNTU2MDg1YWIzMTEiLCJ1c2VyX2lkIjoxM30.QDcUlpOj5IxdzbLJTrkeLYUq0GOxFayZ_Lphx-nODt0',
                },
                error: {},
            },
            data: {
                store: {
                    status: 'ok',
                    result: {
                        uuid: 'c85c8719-8c14-478d-bab0-ffd55a0632e0',
                        email: 'android-challenge@parrotsoftware.io',
                        stores: [
                            {
                                uuid: 'e7f46731-1654-4ba3-be83-408ac5255838',
                                name: 'Store Android Challenge',
                                availabilityState: 'OPEN',
                                providers: [],
                                config: {
                                    brandColor: '#FF0000',
                                },
                            },
                        ],
                        username: 'android-challenge@parrotsoftware.io',
                    },
                },
                products: {},
            },
            error: {
                status: false,
            },
        });
        render(
            <Provider store={store}>
                <MenuPage />
            </Provider>
        );
    });
});
