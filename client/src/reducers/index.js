import * as actionType from '../actions/actionTypes';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        error: null,
        projects: action.payload
      };
    case actionType.GET_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        currentProject: action.payload
      };
    case actionType.GET_ACTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        actions: action.payload
      };
    case actionType.GET_PROJECT_ACTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        currentProjectActions: action.payload
      };
    case actionType.TOGGLE_PROJECT_COMPLETION_SUCCESS:
      return {
        ...state,
        error: null,
        currentProject: action.payload.project
      };
    case actionType.TOGGLE_ACTION_COMPLETION_SUCCESS:
      return {
        ...state,
        error: null,
        currentAction: action.payload.action
      };
    default:
      return state;
  }
};
