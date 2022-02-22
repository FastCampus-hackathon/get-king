const ADD_SCRAPITEM = "ADD_SCRAPITEM"
const DELETE_SCRAPITEM = "DELETE_SCRAPITEM"

export const addScrapItem = (data) => {
  return {
    type: ADD_SCRAPITEM,
    payload: data
  }
}

export const deleteScrapItem = (data) => {
  return {
    type: DELETE_SCRAPITEM,
    payload: data
  }
}

const initial = {
  scrapList: []
}

const scrapReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_SCRAPITEM:
      return {
        ...state,
        scrapList: state.scrapList.concat(action.payload)
      }
      case DELETE_SCRAPITEM:
      return {
        ...state,
        scrapList: state.scrapList.filter(
          (blog) => blog.jobs.job.id !== action.payload.jobs.job.id
        ),
      }
    default:
      return state
  }
}

export default scrapReducer
