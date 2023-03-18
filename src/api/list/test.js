import axios from '@/utils/axios';

const test = {
    login: () =>{
        return axios({
            url: '/login/login',
            method: 'get'
        });
    },
    addBuryingPoint: (data) => {
        return axios({
            url: '/buryingPoint/add',
            method: 'post',
            data
        });
    }
}

export default { test }