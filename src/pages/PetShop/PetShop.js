/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard/ProductCard';
import {
    container,
    head_bg,
    sortFilter,
    shopText,
} from './PetShop.styles'
import head_bg_img from '../../assets/bg-shop.jpg'  

const PetShop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');
    const [currentProduct, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        let url = "http://localhost:8000/product";
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get(url);
            localStorage.setItem(
                "products",
                JSON.stringify(response.data.result)
            );
            setProducts(response.data.result);
            setLoading(false);
        };

        getProducts();
    }, []);

    //get current products
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //handle sorting product
    const handleChangeSort = (event) => {
        setSort(event.target.value)
    }

    const getSort = async () => {
        const variableSort = sort.split('-')
        let url = `http://localhost:8000/product/sort/?variable=${variableSort[0]}&by=${variableSort[1]}`
        const response = await axios.get(url)
        setProducts(response.data.result)
    }

    //handle filter product
    const handleChangeFilter = (event) => {
        setFilter(event.target.value)
    }

    const getFilter = async () => {
        let url = `http://localhost:8000/product/filter/?variable=${filter}`
        const response = await axios.get(url)
        setProducts(response.data.result)
    }

    return (
        <div>
            {/* Head Background */}
            <Container fluid css={container}>
                <Row>
                    <img style={{position:"relative", textAlign:"center"}} css={head_bg} src={head_bg_img} alt="banner" />
                    <div css={shopText}>
                        Buy Necessities For <br/> Your New Best Friend
                        <p style={{fontSize:"30px", fontWeight:"500"}}>at Mini Menagerie One Stop Shop!</p>
                    </div>
                </Row>
            </Container>
            {/* End of Head Background */}

            {/* Product List */}
            <Container css={container}>
                <Row>
                        <p>{products.length} results</p>
                </Row>
                <div>
                <Row style={{alignItems:"center"}}>
                        <p>Sort by</p>
                        <Form.Group as={Col} controlId="formGridSort">
                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeSort} onClick={getSort} style={{width:"120px"}}>
                                <option value="createdAt-desc">Newest</option>
                                <option value="price-desc">Price (High to Low)</option>
                                <option value="price-asc">Price (Low to High)</option>
                            </Form.Control>
                        </Form.Group>
                        <p>Filter by</p>
                        <Form.Group as={Col} controlId="formGridFilter">
                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeFilter} onClick={getFilter} style={{width:"150px"}}>
                                <option value="catfood">Cat Food</option>
                                <option value="dogfood">Dog Food</option>
                                <option value="acc">Accessories</option>
                                <option value="vitdrugs">Vitamin</option>
                            </Form.Control>
                        </Form.Group>
                </Row>
                </div>
            </Container>

            <Container css={container}>
                <Row>
                    <ProductCard products={currentProducts} loading={loading} />
                </Row>
            </Container>

            <div>
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
            {/* End of Product List */}
        </div>
    );
};

export default PetShop;
