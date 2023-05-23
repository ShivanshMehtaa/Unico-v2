import "./Banner.scss";
import PNGEGG from "../../../assets/pngegg.png"


const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>UNICO</h1>
                <p>
                Welcome to the world of wholesome and nutritious breakfasts! At UNICO FOODS, we believe that the key to a great day starts with a nutritious and delicious breakfast. That's why we're proud to offer a wide variety of millet-based breakfast options that are sure to please even the most discerning palate.
                </p>
                <div className="ctas">
                    <div className="banner-cta">About</div>
                    <div className="banner-cta v2">Categories</div>
                </div>
            </div>
            <img className="banner-img" src={PNGEGG} alt="" />
        </div>
    </div>
    );
};

export default Banner;
