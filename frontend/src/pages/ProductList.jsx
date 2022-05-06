import React from 'react';
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";

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
    return (
        <Container>
            <Announcement/>

            <Navbar/>
            <Wrapper>
            <Title>Baloon's</Title>
            <FilterContainer>
                <Filter>
                    Filter Products:
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>Big</Option>
                        <Option>Small</Option>
                        <Option>Large</Option>
                        <Option>Midle</Option>
                    </Select>

                </Filter>
                <Filter>
                    Sort Products:
                    <Select>
                        <Option selected>
                            Price (asc)
                        </Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
                <Products/>
            </Wrapper>
            <Footer/>
            <Announcement/>
        </Container>
    );
};

export default ProductList;
