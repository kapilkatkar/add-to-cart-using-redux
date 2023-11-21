import { put, takeLatest } from "redux-saga/effects";
import { getUserSuccess, getUserFailed } from "./user.slice";

const getUsersFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log("jsonResponse", jsonResponse);
    return jsonResponse;
  } catch (err) {
    return null;
  }
};

function* getUsers() {
  try {
    const apiResponse = yield getUsersFromAPI(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("api response inside getUsers");

    if (apiResponse) {
      console.log("api response inside getusers saga is pass");
      yield put(getUserSuccess({ result: apiResponse }));
    } else {
      console.log("api response inside getusers saga is failed");
      yield put(getUserFailed());
    }
  } catch (err) {
    console.log("catch");
    yield put(getUserFailed());
  }
}

export function* watchGetUsers() {
  yield takeLatest("user/getUsers", getUsers);
}
