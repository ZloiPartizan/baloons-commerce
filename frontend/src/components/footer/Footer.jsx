import styled from "styled-components";

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Wrapper = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px;
        
    `
const Left = styled.div `
    flex: 1;
    height: 25vh;
    padding-right: 20px;`


const Center = styled.div `
    flex: 1;
    height: 25vh;
    `

const Right = styled.div `
    flex: 1;
    `
const Logo = styled.h1 `
    
    font-weight: bold;`

const Desc = styled.div `
`

const SocialMedia = styled.div`
    padding-top: 15px;
    display: flex; 
    align-items: center;
    
`

const SocialIcon = styled.div `
    margin-right: 20px;
`

const Title = styled.h3`

    padding-bottom: 10px 0 10px 0;
    `

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Footer = () => {
    return (
        <Wrapper>
            <Left>
                <Logo>BALOON'S.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores assumenda consectetur dignissimos eius eligendi
                    eos est eum fugit ipsa iste officia quam quia reiciendis
                    repellendus, tempore? Asperiores beatae dolor ipsa.
                </Desc>
                <SocialMedia>
                    <SocialIcon>
                        <TelegramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <WhatsAppIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <EmailIcon/>
                    </SocialIcon>
                </SocialMedia>
            </Left>
            <Center>
                <Title>
                    Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Catalog</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wish List</ListItem>
                </List>
            </Center>
            <Right></Right>
        </Wrapper>
    );
};

export default Footer;
