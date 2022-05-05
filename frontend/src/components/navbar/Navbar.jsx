import React from 'react';
import styled from "styled-components";

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Badge from "@mui/material/Badge";

const Navbar = () => {

    const Container = styled.div `       
               
    `
    const Wrapper = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px;
    `
    const Left = styled.div `
    flex: 1;`

    const Center = styled.div `
    flex: 1;
    text-align: center;`

    const Right = styled.div `
    padding: 0;
    margin-left: 25px;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `
    const Logo = styled.div `
    font-size: 54px;
    font-weight: bold;`

    const MenuItem = styled.div `
    margin-left: 25px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    `

    return (
        <Container>
            <Wrapper>
                <Left><Logo>BALOON'S.</Logo></Left>
                <Center></Center>
                <Right>
                   <MenuItem>
                       sign in
                   </MenuItem>
                    <MenuItem>
                        register
                    </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingBasketOutlinedIcon/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

    );
};

export default Navbar;
