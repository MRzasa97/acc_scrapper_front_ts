import { ApiClient } from "./ApiClient";

class AuthService extends ApiClient {
    async Register(username: string, password: string): Promise<Response> {
        const response = await this.post(
            'http://localhost:8000/authorize/register',
            { username, password},
        );
        return response;
    }

    async Login(username: string, password: string) {
        const response = await this.post('http://localhost:8000/authorize/login', {username, password});
        if(response.ok) {
            const json = await response.json()
            localStorage.setItem("AuthToken", json["token"])
            return {success: true}
        } else {
            return {success: false}
        }

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
        console.log("logged in: ", !!this.getUserToken())
        return !!this.getUserToken()
    }

    logout() {
        localStorage.removeItem("AuthToken")
    }
}

export default new AuthService();