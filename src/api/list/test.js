import axios from '../utils/axios';
export const queryTrainProjectDetail = () => {
    return axios({
        url: '/room/get-live-room?uid=38'
    });
};

