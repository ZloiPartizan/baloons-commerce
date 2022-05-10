import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App () {
    const user = true

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:category" element={<ProductList/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
                <Route path="/register" element= {user ? <Navigate to="/" /> : <Register />}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    )
}

export default App;
