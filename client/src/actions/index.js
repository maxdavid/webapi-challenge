import * as action from './actions';

export const actions = {
  getProjects: action.getProjects,
  getProjectActions: action.getProjectActions,
  toggleProjectCompletion: action.toggleProjectCompletion
};

export * from './actionTypes';
