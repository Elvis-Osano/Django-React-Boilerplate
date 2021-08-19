import axios from "axios";
import * as actionTypes from "./types";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await axios
      .get("http://localhost:8000/")

      .catch((err) => {
        dispatch({
          type: actionTypes.RETRIEVE_FAIL,
        });
      });

    dispatch({
      type: actionTypes.RETRIEVE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {}
};
export const create = (name) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name });
  try {
    await axios
      .post("http://localhost:8000/", body, config)

      .catch((err) => {
        dispatch({
          type: actionTypes.CREATED_FAIL,
        });
      });

    dispatch({
      type: actionTypes.CREATED_SUCCESS,
    });
  } catch (error) {}
};
export const update = (id, name) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ id, name });
  try {
    await axios
      .put(`http://localhost:8000/detail/${id}/`, body, config)

      .catch((err) => {
        dispatch({
          type: actionTypes.UPDATE_FAIL,
        });
      });

    dispatch({
      type: actionTypes.UPDATE_SUCCESS,
    });
  } catch (error) {}
};
export const delTask = (id) => async (dispatch) => {
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");

  // const config = {
  //   headers: { "X-CSRFTOKEN": csrftoken },
  // };
  try {
    await axios
      .delete(`http://localhost:8000/detail/${id}/`)

      .catch((err) => {
        dispatch({
          type: actionTypes.DELETE_FAIL,
        });
      });

    dispatch({
      type: actionTypes.DELETE_SUCCESS,
    });
  } catch (error) {}
};
