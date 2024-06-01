import { ApiClient } from "./ApiClient";

class AuthService extends ApiClient {
    async Register(username: string, password: string): Promise<Response> {
        const response = await this.post(
            'http://localhost:8000/authorize/register',
            { username, password},
        );
        return response;
    }
}

export default new AuthService();