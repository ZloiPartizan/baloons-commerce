import styled from "styled-components";
import {popularProducts} from "../../data";
import Product from "./Product";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;   
`

const Products = () => {
    return (
       <Wrapper>
           {popularProducts.map(item=>(
               <Product item={item} key={item.id}/>
           ))}
       </Wrapper>
    );
}

export default Products;
