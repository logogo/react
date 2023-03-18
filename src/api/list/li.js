import axios from '@/utils/axios';

const li = {
    queryTrainProjectDetail : () => {
        return axios({
            url: '/room/get-live-room?uid=38'
        });
    }
}

export default { li }