import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const loginApi = rootUrl + "login";

export const loginAPI = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(loginApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
