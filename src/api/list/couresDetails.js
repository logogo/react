import axios from '../utils/axios';

const couresDetails = {
    // 项目列表
    queryTrainProjectDetail() {
        return axios({
            url: '/room/get-live-room?uid=38'
        });
    }
};

export { couresDetails };
