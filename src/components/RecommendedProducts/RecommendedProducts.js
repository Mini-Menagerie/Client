/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import axios from "axios";
import {Container} from 'react-bootstrap'

import ProductCard from "../ProductCard/ProductCard";
import { margin } from "./RecommendedProduct.styles";

const RecommendedProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/product`);
            setProducts(response.data.result);
            // setLoading(false);
        };
        getProducts();
    }, []);

    // Shuffle array
    const shuffled = products.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    const currentProducts = shuffled.slice(0, 4);

    return (
        <Container css={margin}>
            <ProductCard products={currentProducts} />
        </Container>
    );
};

// const mapStateToProps = (state) => {
//     console.log(state.addToCart);
//     return {
//         data: state.addToCart,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RecommendedProducts);

export default RecommendedProducts
