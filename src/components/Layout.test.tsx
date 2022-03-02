import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import Layout from './Layout';

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
            products: {
                status: 'ok',
                results: [
                    {
                        uuid: '2618ec65-f996-4b12-898b-b6cf1cc32384',
                        name: 'Combo Amigos',
                        description:
                            '2 Subs de 15 cm (elige entre Jamón de Pavo, Sub de Pollo o Atún) + 2 bebidas embotelladas de 600 ml + 2 Bolsas de papas Sabritas o 2 galletas.',
                        imageUrl:
                            'https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg',
                        legacyId: '1',
                        price: '189.00',
                        alcoholCount: 0,
                        soldAlone: true,
                        availability: 'UNAVAILABLE',
                        providerAvailability: null,
                        category: {
                            uuid: 'bbc22898-7bd3-4512-8b09-64c4e19d7a9b',
                            name: 'Combos Especiales',
                            sortPosition: 99,
                        },
                    },
                ],
            },
        },
        error: {
            status: false,
        },
    });
    it('without crashing', () => {
        render(
            <Provider store={store}>
                <Layout>
                    <p>This is a test</p>
                </Layout>
            </Provider>
        );
    });

    it('without crashing click on close session', () => {
        render(
            <Provider store={store}>
                <Layout>
                    <p>This is a test</p>
                </Layout>
            </Provider>
        );

        const iconButton = screen.getByLabelText('account of current user');
        fireEvent.click(iconButton);
        const closeSessionButton = screen.getByText('Cerrar sesión');
        fireEvent.click(closeSessionButton);
    });

    it('without crashing click on profile menu', () => {
        render(
            <Provider store={store}>
                <Layout>
                    <p>This is a test</p>
                </Layout>
            </Provider>
        );

        const iconButton = screen.getByLabelText('account of current user');
        fireEvent.click(iconButton);
        const closeSessionButton = screen.getByText('Mi perfil');
        fireEvent.click(closeSessionButton);
    });
});
