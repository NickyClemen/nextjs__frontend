export default class Config {
    constructor() {
        this.nodeEnv = process.env.NODE_ENV !== 'production';
        this.urlSignIn = String(process.env.URL_SIGN_IN);
        this.loginUrl = String(process.env.AUTH_LOGIN);
    }
}
