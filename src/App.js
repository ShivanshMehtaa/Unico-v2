import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/Context";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/category/:id" element={<Category/>} />
                    <Route path="/product/:id" element={<SingleProduct/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/contact" element={<ContactUs/>} />
                </Routes>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
