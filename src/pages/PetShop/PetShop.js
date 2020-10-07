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
    sortFilter
} from './PetShop.styles'
import head_bg_img from '../../assets/bg-shop.jpg'  

const PetShop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('newest');
    const [filter, setFilter] = useState('all');
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
        if(sort === "newest" && filter === "all") {
            let url = `http://localhost:8000/product`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        }else if(sort === "newest" && filter === "catfood") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        }else if(sort === "newest" && filter === "dogfood") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        }else if(sort === "newest" && filter === "acc") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        }else if(sort === "newest" && filter === "vitdrugs") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        }else if(sort === "price-desc" && filter === "all") {
            let url = `http://localhost:8000/sortProductHighToLow`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-desc" && filter === "catfood") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-desc" && filter === "dogfood") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-desc" && filter === "acc") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-desc" && filter === "vitdrugs") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-asc" && filter === "all") {
            let url = `http://localhost:8000/sortProductLowToHigh`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-asc" && filter === "catfood") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-asc" && filter === "dogfood") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-asc" && filter === "acc") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }else if(sort === "price-asc" && filter === "vitdrugs") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }
    }

    //handle filter product
    const handleChangeFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            {/* Head Background */}
            <Container fluid css={container}>
                <Row>
                    <img css={head_bg} src={head_bg_img} alt="banner" />
                </Row>
            </Container>
            {/* End of Head Background */}

            {/* Product List */}
            <Container css={container}>
                <Row style={{alignItems: 'center'}}>
                    <p>{products.length} results</p>
                    <Col css={sortFilter}>
                        <p>Sort by</p>
                        <Form.Group as={Col} controlId="formGridSort">
                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeSort} onClick={getSort}>
                                <option value="newest">Newest</option>
                                <option value="price-desc">Price (High to Low)</option>
                                <option value="price-asc">Price (Low to High)</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col css={sortFilter}>
                        <p>Filter by</p>
                        <Form.Group as={Col} controlId="formGridFilter">
                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeFilter} onClick={getSort}>
                                <option value="all">All</option>
                                <option value="catfood">Cat Food</option>
                                <option value="dogfood">Dog Food</option>
                                <option value="acc">Accessories</option>
                                <option value="vitdrugs">Vitamin</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
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
