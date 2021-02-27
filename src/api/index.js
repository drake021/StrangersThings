// Api Goes Here
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';
const GAMES_ARRAY = [
    {
        id: '12af23d',
        title: 'Title',
        description: 'Description',
        image: 'image/url',
    }
];
export { GAMES_ARRAY };

async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }

}

async function fetchRegister(username, password) {
    return await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);
}

async function fetchLogin(username, password) {
    return await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error)
}

async function fetchMe() {
    await fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error)
}

export  {fetchLogin, fetchRegister};