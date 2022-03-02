export interface IToken {
    exp: number;
    jti: string;
    token_type: string;
    user_id: string;
}