import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { RootState } from '../store/reducers';
import { IToken } from '../interfaces/IToken';

type RequireAuthProps = {
    children: JSX.Element;
    redirectTo: string;
};

export default function RequireAuth({
    children,
    redirectTo,
}: RequireAuthProps) {
    let loginState = useSelector((state: RootState) => state.login);
    let validToken = (token: string) => {
        const decodedToken: IToken = jwt_decode(token);
        const expirationDate = new Date(decodedToken.exp * 1000);
        const actualDate = new Date();
        return expirationDate > actualDate;
    };
    let isAuthenticated =
        loginState.data.access && validToken(loginState.data.access);

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
