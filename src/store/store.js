export let initialState = {
  count: 0,
};

export let initial = {
  username: '',
  password: '',
  email: '',
};

export function createInstance() {
  let initialState = null;
  if (!initialState) {
    initialState = {
      count: 0,
    };
  }
  return initialState;
}

export function reducer(state = createInstance(), action) {
  switch (action.type) {
    case 'increment':
      state = { ...state, count: state.count + 1 };
      return state;
    case 'decrement':
      state = { ...state, count: state.count - 1 };
      return state;
    case 'custom':
      state = { ...state, count: state.count + action.payload };
      return state;
  }
}


export function AuthReducer(state=initial, action){
  switch(action.type){
    case 'username':
      return {...state, 'username': action.payload}
    case 'password':
      return {...state, 'password': action.payload}
    case 'email':
      return {...state, 'email': action.payload}
    case 'submit':
      alert("Sent Form")
      return {...state, ...initial}
  }

}