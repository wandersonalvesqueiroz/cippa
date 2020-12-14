const BASE_API = 'http://10.0.2.2:3333';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/session/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/sessions`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await req.json();

        return json;
    },
    recoveryPassword: async (email) => {

        const redirect_url = 'http://meusistema.com/resetar_senha';
        const req = await fetch(`${BASE_API}/passwords`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, redirect_url})
        });
        const json = await req.json();
        return json;
    },
    users: async () => {
        const req = await fetch(`${BASE_API}/users`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        const json = await req.json();
        return json;
    }
};