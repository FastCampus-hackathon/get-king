const SET_ANNOUNCEMENT = "SET_ANNOUNCEMENT";

export const setAnnouncement = data => {
  return {
    type: SET_ANNOUNCEMENT,
    payload: data,
  };
};

const initial = {
  announcement: [],
};

const announcementReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_ANNOUNCEMENT:
      return {
        ...state,
        announcement: action.payload,
      };
    default:
      return state;
  }
};

export default announcementReducer;
