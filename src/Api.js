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
    },
    user: async (userId) => {
        const req = await fetch(`${BASE_API}/users/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        const json = await req.json();
        return json;
    },
    editUser: async (user) => {
        const req = await fetch(`${BASE_API}/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({...user})
        });
        return req;
    },
    addUser: async (user) => {
        const req = await fetch(`${BASE_API}/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({...user})
        });

        return req;
    },
    deleteUser: async (id) => {
        const req = await fetch(`${BASE_API}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        return req;
    },
    standards: async () => {
        const req = await fetch(`${BASE_API}/standards`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        const json = await req.json();
        return json;
    },
    standard: async (standardId) => {
        const req = await fetch(`${BASE_API}/standards/${standardId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        const json = await req.json();
        return json;
    },
    editStandard: async (standard) => {
        const req = await fetch(`${BASE_API}/standards/${standard.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({...standard})
        });
        return req;
    },
    addStandard: async (standard) => {
        const req = await fetch(`${BASE_API}/standards`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({...standard})
        });

        return req;
    },
    deleteStandard: async (id) => {
        const req = await fetch(`${BASE_API}/standards/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        return req;
    },
};