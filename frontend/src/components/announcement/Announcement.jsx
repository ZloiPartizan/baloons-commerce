import styled from "styled-components";

const Container = styled.div `      
        height: 30px;
        background: #1976d2;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;     
     `

const Announcement = () => {
    return (
        <div>
            <Container>Lorem ipsum dolor sit amet</Container>
        </div>
    );
};

export default Announcement;
