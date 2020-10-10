const BASE_API = 'https://api.cippa.com.br/cippa/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            header: {
                Accept: 'application/josn',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async () => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            header: {
                Accept: 'application/josn',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            header: {
                Accept: 'application/josn',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;
    }
};