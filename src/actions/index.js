import { apiClient } from "../apiClient";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL, IMAGE_URL } from "../constants/Config";
import * as actionTypes from "../constants/ActionTypes";
import { endpoints } from "../configs";
import { getCookie } from "../lib/helper";

export const getHomePageData = () => dispatch => {
  dispatch({
    type: actionTypes.IS_LOADING,
    isLoading: true
  });
};
export const search = movieName => dispatch => {
  dispatch({
    type: actionTypes.SEARCH_INPUT_SUCCESS,
    payload: movieName
  });
};
