import React from 'react';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Container = styled.div `
    flex: 1;
    margin: 3px;
    position: relative;
   `

const Image = styled.img `
    width: 100%;`
const Info = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`



const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Typography variant="h4" gutterBottom component="div">{item.title}</Typography>
                <Button variant="outlined" size="small">SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
