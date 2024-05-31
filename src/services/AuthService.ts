import { ApiClient } from "./ApiClient";

class AuthService extends ApiClient {
    async Register(username: string, password: string): Promise<void> {
        const response = await this.post(
            'http://localhost:8000/register',
            { username, password},
        );
        console.log(response)
    }
}

export default new AuthService();