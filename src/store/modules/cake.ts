import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type InitialState = {
    numOfCakes: number;
    nameOfCake: string;
    list: any;
};
const initialState: InitialState = {
    numOfCakes: 20,
    nameOfCake: 'great cake',
    list: []
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        updateCakeNum: (state, action: PayloadAction<number>) => {
            state.numOfCakes = action.payload;
        },
        updateCakeName: (state, action: PayloadAction<string>) => {
            state.nameOfCake = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getMovieData.fulfilled, (state, { payload }) => {
            state.list = payload.data.list;
        });
    }
});

// 请求电影列表
const getMovieListApi = () =>
    fetch(
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
    ).then(res => res.json());

export const getMovieData = createAsyncThunk('cake/getMovie', async() => {
    const res = await getMovieListApi();
    return res;
});

export default cakeSlice.reducer;
export const { updateCakeNum, updateCakeName } = cakeSlice.actions;
