const ADD_COMPITEM = "ADD_COMPITEM";
const DELETE_COMPITEM = "DELETE_COMPITEM";
const UPDATE_MEMO = "UPDATE_MEMO";

export const addCompItem = data => {
  return {
    type: ADD_COMPITEM,
    payload: data,
  };
};

export const deleteCompItem = data => {
  return {
    type: DELETE_COMPITEM,
    payload: data,
  };
};

export const updateMemo = text => {
  return {
    type: UPDATE_MEMO,
    payload: text,
  };
};

const initial = {
  compList: [],
  text: "",
};

const compReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_COMPITEM:
      return {
        ...state,
        compList: state.compList.concat(action.payload),
      };
    case DELETE_COMPITEM:
      return {
        ...state,
        compList: state.compList.filter(blog => blog.id !== action.payload.id),
      };
    case UPDATE_MEMO:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default compReducer;
