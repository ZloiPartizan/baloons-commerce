import React from 'react';
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const Container = styled.div ``

const Wrapper = styled.div `
        padding: 50px 20px;
        display: flex;
       `

const ImgContainer = styled.div `
           
        flex:1
       
  `

const Image = styled.img `
        width: 100%;
        height: 80vh;
        object-fit: cover;
        
        `

const InfoContainer = styled.div `
        padding: 0 50px; 
        flex:1`

const Title = styled.h1 `
        font-weight: 200px;`

const Desc = styled.p `
        margin: 20px 0;`

const Price = styled.div `
        font-size: 30px`

const FilterContainer = styled.div `
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;`
const Filter = styled.div `
        display: flex;
        align-items: center;`
const FilterTitle = styled.span `
        font-size: 20px;
        margin-right: 10px;`
const FilterColor = styled.div `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${(props)=>props.color};
        margin 0 5px;
        cursor: pointer;`
const FilterSize = styled.select `
        margin-left: 10px;`
const Option = styled.option ``

const AddContainer = styled.div `
         padding-top: 50px;
       
        display: flex;
        align-items: center;
        justify-content: space-between;
        `
const AmountContainer = styled.div `
       
        display: flex;
        align-items: center;
        justify-content: space-between`
const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin 0 5px;`
// const Button = styled.option ``

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src = "https://nymart.ru/wa-data/public/shop/products/51/94/239451/images/701907/tmp_image.750x0.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Lorem ipsum.
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa exercitationem incidunt quas quidem sequi?
                    </Desc>
                    <Price>
                        $ 5
                    </Price>
                    <FilterContainer>
                        <Filter>
                        <FilterTitle>
                            Color:
                        </FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="red"/>
                        <FilterColor color="blue"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize>
                                <Option>Big</Option>
                                <Option>Small</Option>
                                <Option>Large</Option>
                                <Option>Midle</Option>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button size="small">add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
            <Announcement/>
        </Container>
    );
};

export default Product;
