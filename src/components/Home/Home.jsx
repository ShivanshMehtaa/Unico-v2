import "./Home.scss";
import "./Banner/Banner"
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
const Home = () => {
    return (
    <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <div className="cat-heading">Categories</div>

                <Category/>
                <Products headingText = "Popular Products"/>
            </div>
        </div>
        <Newsletter/>
    </div>
    );
};

export default Home;
