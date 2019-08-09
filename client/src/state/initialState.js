import { actions } from '../actions';

export const initialState = {
  projects: [],
  actions: [],
  currentProject: {},
  currentAction: {},
  currentProjectActions: [],
  error: null,
  action: actions
};
