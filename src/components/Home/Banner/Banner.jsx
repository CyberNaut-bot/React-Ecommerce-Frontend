import "./Banner.scss";
import main_pic from "../../../assets/main_pic.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
            <h1>SALES</h1>
            <p>Discover your
                <lb> Perfect Sound</lb>
            </p>
            
            
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">ShopNow</div>
            </div>
            </div>
            <img className="banner_03" src ={main_pic} alt=""/>
        </div>
    </div>;
};

export default Banner;
