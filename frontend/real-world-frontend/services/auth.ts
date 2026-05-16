import axios from 'axios';

const API = 'http://127.0.0.1:8000/api'

type RegisterData = {
    username: string;
    email: string;
    password: string;
};

export const register = (data: RegisterData) => axios.post(`${API}/users/register/`, data).then((res: any) => res.data);