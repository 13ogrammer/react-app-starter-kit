// ------------------------------------
// Constants
// ------------------------------------
export const GET_CONFIG = 'GET_CONFIG'

// ------------------------------------
// Action Creators
// ------------------------------------
export function getConfig() {
  return {
    type: GET_CONFIG
  }
}

export const actions = {
  getConfig
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_CONFIG]: (state, action) => ({
    ...state,
    appName: 'New App'
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  appName: 'App'
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
