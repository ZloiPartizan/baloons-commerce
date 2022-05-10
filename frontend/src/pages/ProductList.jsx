import React, {useState} from 'react';
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import {useLocation} from "react-router-dom";


const Container = styled.div `       
               
    `
const Wrapper = styled.div `
        padding: 0 20px;
`

const FilterContainer = styled.div `       
        display: flex;
        justify-content: space-between;
    `

const Filter = styled.p `       
        margin: 20px;       
    `

const Title = styled.h1 `       
               
    `

const Select = styled.select `       
        padding: 10px;
        margin: 20px;      
    `

const Option = styled.option `       
               
    `

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };


    return (
        <Container>
            <Announcement/>

            <Navbar/>
            <Wrapper>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    Filter Products:
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>red</Option>
                        <Option>grey</Option>
                        <Option>blue</Option>
                        <Option>green</Option>
                        <Option>Blue</Option>
                        <Option>yellow</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>

                    </Select>

                </Filter>
                <Filter>
                    Sort Products:
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option  value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
                <Products  cat={cat} filters={filters} sort={sort}/>
            </Wrapper>
            <Footer/>
            <Announcement/>
        </Container>
    );
};

export default ProductList;
