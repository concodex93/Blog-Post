import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // Issues with async-await with actions
  // Issues with promises as redux life-cycle executes before promise is returned
  // We need to delay executing dispatch function
  // Solution is to use Middleware Redux-Thunk
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};
