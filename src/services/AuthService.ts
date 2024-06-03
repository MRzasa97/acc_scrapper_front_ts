import { ApiClient } from "./ApiClient";

class AuthService extends ApiClient {
    async Register(username: string, password: string): Promise<Response> {
        const response = await this.post(
            'http://localhost:8000/authorize/register',
            { username, password},
        );
        return response;
    }

    async Login(username: string, password: string): Promise<string> {
        const response = await this.post('http://localhost:8000/authorize/login', {username, password});
        const json = await response.json()
        localStorage.setItem("AuthToken", json["token"])
        return json["token"]
    }

    setUserToken(token: string): void{
        if(token) {
            localStorage.setItem("AuthToken", token)
        }
    }

    getUserToken(): string | null {
        return localStorage.getItem("AuthToken")
    }

    isLoggedIn(): boolean {
        return !!this.getUserToken()
    }
}

export default new AuthService();