export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // Need to return new array in order to tell Redux to realize to render, pull new state
      return [...state, action.payload];
    default:
      return state;
  }
};
