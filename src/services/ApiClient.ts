
export class ApiClient {
    async post(url: string, data: any={}, headers: any={}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(data),
        })
        
        return await response;
    }
}