import axios from 'axios';
// import { AppDispatch } from '../store';
import { IUser } from '../../models/IUser';
// import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     const { data } = response;
//     dispatch(userSlice.actions.usersFetchingSuccess(data));
//     return data;
//   } catch (e) {
//     console.log(e);

//     dispatch(userSlice.actions.usersFetchingError((e as AxiosError).message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        'Не удалось загрузить список пользователей'
      );
    }
  }
);
