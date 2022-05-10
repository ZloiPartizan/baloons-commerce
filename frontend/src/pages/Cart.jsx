import React, {useState} from 'react';
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from "react-redux";

const Container = styled.div ``
const Wrapper = styled.div `
        padding: 0 20px`
const Title = styled.h1 `
    text-align: center;
    font-weight: 300`
const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;`
const TopTexts = styled.div ``

const TopText = styled.span `
    text-decoration: underline;
    cursor: pointer;
    margin 0 10px;
`

const  Bottom = styled.div`
    display: flex; 
    justify-content: space-between;
    padding-top: 20px;
    `

const  Info = styled.div`
    flex: 3;`

const  Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
   `

const  Product = styled.div`
    display: flex;
    justify-content: space-between;`

const  ProductDetails = styled.div`
    flex: 2;
    display: flex;`
const  Image = styled.img`
    width: 200px;`
const  Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `
const  ProductName = styled.span``
const  ProductId = styled.span``
const  ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${(props)=> props.color}
    `
const  ProductSize = styled.span``
const  PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

const  ProductAmaountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;`

const  ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;`

const  ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;`

const  SummaryTitle = styled.h1`
    font-weight: 200;`
const  SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "500"};
    font-size: ${(props)=>props.type === "total" && "24px"};`
const  SummaryItemText = styled.span``
const  SummaryItemPrice = styled.span``

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <Button variant="outlined">CONTINUE SHOPPING</Button>
                    <TopTexts>
                        <TopText>Shoping bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <Button variant="contained">Checkout now</Button>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (  <Product>
                            <ProductDetails>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> {product.title}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> {product._id}
                                    </ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize>
                                        <b>Size:</b>{product.size}
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmaountContainer>
                                    <AddIcon />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmaountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetails>
                        </Product>
                        )) }

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total} $</SummaryItemPrice>
                        </SummaryItem>
                        <Button variant="outlined">CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
            <Announcement/>
        </Container>
    );
};

export default Cart;
