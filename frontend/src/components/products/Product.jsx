import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div `       
        margin: 20px;    
    `

const Product = ({item}) => {
    return (
        <Container>
            <Card sx={'width: 410px'}>
                <CardActionArea >
                    <CardMedia  src = {item.img}
                        component="img"
                        height=""
                        alt="balloons"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="big" color="primary">
                        share...
                    </Button>
                    <Button size="big" color="primary">
                        <SearchIcon/>
                    </Button>
                    <Button size="big" color="primary">
                        <ShoppingCartCheckoutIcon/>
                    </Button>

                </CardActions>
            </Card>
        </Container>
    );
};

export default Product;
