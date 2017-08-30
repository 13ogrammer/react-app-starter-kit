// ------------------------------------
// Constants
// ------------------------------------
export const GET_PAGE = 'GET_PAGE'

// ------------------------------------
// Action Creators
// ------------------------------------
export function getPage(pageId = 1) {
  return {
    type: GET_PAGE,
    payload: pageId
  }
}

export const actions = {
  getPage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PAGE]: (state, action) => ({
    ...state,
    page: {
      id: action.payload,
      name: `page ${action.payload}`
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  page: {}
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
