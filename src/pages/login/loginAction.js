import {
	requestPending,
	loginSuccess,
	updateLogin,
	logoutSuccess,
	requestFail
} from "./loginSlice";

// import { getProfileSuccess } from "../profile/profileSlice";
// import { adminLogoutAPI } from "../../apis/profileAPI";
import { loginAPI } from "../../apis/loginApi";
// import { tokenAPI } from "../../apis/tokenAPI";

export const sendLogin = formData => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await loginAPI(formData); //return {status, message, user, tokens..}
		console.log(result);

		const { accessJWT, refreshJWT } = result;
		accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
		refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);
		//if we get tokens for server, we need to store in our browser storeage

		dispatch(loginSuccess(result));
		// result.status === "success" && dispatch(getProfileSuccess(result.user));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};



