import Slider from "react-slick";
// For example, in pages/index.js or components/YourProductSection.js
// import DynamicAliceCarousel from './DynamicAliceCarousel'; // Adjust the path as needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "@/assets/hero-slide1.jpg";
import Img2 from "@/assets/hero-slide2.jpg";
import Img3 from "@/assets/hero-slide3.jpg";
import Img4 from "@/assets/hero-slide4.jpg";

const Carousel = () => {
    const slideImages = [
        {
            id: 4,
            url: Img4,
        },
        {
            id: 1,
            url: Img1,
        },
        {
            id: 2,
            url: Img2,
        },
        {
            id: 3,
            url: Img3,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
    };
    return (
        <div className='relative'>
            <Slider {...settings}>
                {slideImages.map((slideImage) => (
                    <div key={slideImage.id}>
                        <div
                            className='w-full h-screen bg-cover bg-center'
                            style={{
                                backgroundImage: `url(${slideImage.url.src})`,
                            }}
                        ></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
