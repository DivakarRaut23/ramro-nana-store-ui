import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress,Table,Button, CardMedia, Grid } from '@material-ui/core'
import {
	fetchProducts,
	
} from "../../pages/product/productAction";
import ProductCard from "./ProductCard";

const ProductList= () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, status, productList } = useSelector(
		state => state.product
	);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	

	return (
			<div>
			{isLoading && <CircularProgress color="secondary"/>}

			
			
			<Grid container spacing={2} direction="row">
				
					{productList.length &&
						productList.map((row, i) => (
							<>

						
							<Grid item  xs={12} md={6} lg={3}>
						<ProductCard children={row} />
							</Grid>


						
						
						</>
						))}
			</Grid>
				
			
		</div>
	);
};

export default ProductList;
