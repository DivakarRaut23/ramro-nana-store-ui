import {
	requestPending,
	fetchAllProductSuccess,
	requestFail,
} from "./productSlice";

import { getProducts} from "../../apis/productAPI";



export const fetchProducts = () => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getProducts(); //{status, message, result:[]}
		dispatch(fetchAllProductSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

