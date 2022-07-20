import { apiClient } from "../apiClient";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL, IMAGE_URL } from "../constants/Config";
import * as actionTypes from "../constants/ActionTypes";
import { endpoints } from "../configs";

//TODO: move actions to seprated module

// get movies
export const getMovies = () => dispatch => {
  dispatch({
    type: actionTypes.GET_MOVIES_LOADING
  });
};
