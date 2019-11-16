import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Issues with async-await with actions
// Issues with promises as redux life-cycle executes before promise is returned
// We need to delay executing dispatch function
// Solution is to use Middleware Redux-Thunk

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

export const fetchUser = id => {
  return async dispatch => {
    _fetchUser(id, dispatch);
  };
};

// Memoize prevents duplicste API calls
const _fetchUser = _.memoize(async (id, dispatch) => {
  const respose = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: respose.data });
});
