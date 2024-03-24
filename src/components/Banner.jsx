import BannerImage from "../assets/banner.svg"
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse pt-16">
                <div className="basis-2/4">
                <img src={BannerImage} className="h-full w-full" />
                </div>
                <div className="basis-2/4">
                    <h1 className="text-7xl font-bold">Welcome to Mello's World</h1>
                    <p className="py-6">"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."</p>
                    <button className="btn btn-primary bg-[#6C63FF] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;