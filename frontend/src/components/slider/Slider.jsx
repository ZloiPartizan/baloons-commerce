import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import {useState} from "react";
import {sliderItems} from "../../data";
import { Link } from "react-router-dom"

const Container = styled.div `       
        width: 100%;
        height: 55vh;
        display: flex;    
        position: relative;
        overflow: hidden;    
    `

const Arrow = styled.div `          
        width: 50px;
        height: 50px;
        background-color: #1976d20a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => props.direction === "left" && "10px"};
        right: ${props => props.direction === "right" && "10px"};
        margin: auto;
        z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1s;
`

const Slide = styled.div `
    width: 100vw;
    height: 55vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`

const ImgContainer = styled.div `
    z-index: -1;
    flex: 1;
`

const Image = styled.img `
    width: 100%;
    transform: scale(-1, 1);
    object-fit: cover;
    object-position: right;
`

const InfoContainer = styled.div `
    flex: 1;
    padding: 50px;   
`

const Tittle = styled.h1 `
    font-size: 60px;
    line-height: 55px
`

const Desc = styled.p`
    margin: 35px 0;
    font-size: 20px;
    
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? setSlideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src  = {item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Tittle>{item.title}</Tittle>
                        <Desc><p>{item.desc}</p></Desc>
                      <Link to={`/productList`}> <Button variant="outlined">Show all</Button></Link>
                    </InfoContainer>
                </Slide>
                ))}

            </Wrapper>

            <Arrow  direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>


        </Container>
    );
};

export default Slider;
