export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
  }
  return state;
};

// Reducer rules best practices
// Cannot return undefinied
// Should not mutate state
/*
- Manipulation without Mutation -
ARRAYS 
Add element to array - Spread Operator (returns new array) [..., x]
Remove element from array - Filter function (returns new array) state.filter(el => !== 'test')

OBJECTS
AddUpdate props inside object - Spread Operator in object {...state, prop} {prop, ...object}
Remove props from object - Spread Operator in object with undefined || _.omit(object, prop)
*/
