import * as actionType from './actionTypes';
import { axiosRequest } from '../helpers';

export const getProjects = dispatch => {
  dispatch({ type: actionType.GET_PROJECTS_PENDING });
  axiosRequest
    .get(`/projects`)
    .then(res => {
      dispatch({ type: actionType.GET_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: actionType.GET_PROJECTS_ERROR, error: err });
      console.log(err);
    });
};

export const getProject = (dispatch, projectId) => {
  dispatch({ type: actionType.GET_PROJECT_PENDING });
  axiosRequest
    .get(`/projects/${projectId}`)
    .then(res => {
      dispatch({ type: actionType.GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: actionType.GET_PROJECT_ERROR, error: err });
      console.log(err);
    });
};

export const getProjectActions = (dispatch, projectId) => {
  dispatch({ type: actionType.GET_PROJECT_ACTIONS_PENDING });
  axiosRequest
    .get(`/projects/${projectId}/actions`)
    .then(res => {
      dispatch({
        type: actionType.GET_PROJECT_ACTIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: actionType.GET_PROJECT_ACTIONS_ERROR, error: err });
      console.log(err);
    });
};

export const toggleProjectCompletion = (dispatch, projectId) => {
  dispatch({ type: actionType.TOGGLE_PROJECT_COMPLETION_PENDING });
  axiosRequest
    .put(`/projects/${projectId}/completed/toggle`)
    .then(res => {
      console.log(res);
      dispatch({
        type: actionType.TOGGLE_ACTION_COMPLETION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: actionType.TOGGLE_ACTION_COMPLETION_ERROR, error: err });
      console.log(err);
    });
};

export const toggleActionCompletion = (dispatch, actionId) => {
  dispatch({ type: actionType.TOGGLE_ACTION_COMPLETION_PENDING });
  axiosRequest
    .put(`/actions/${actionId}/completed/toggle`)
    .then(res => {
      console.log(res);
      dispatch({
        type: actionType.TOGGLE_ACTION_COMPLETION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: actionType.TOGGLE_ACTION_COMPLETION_ERROR, error: err });
      console.log(err);
    });
};
