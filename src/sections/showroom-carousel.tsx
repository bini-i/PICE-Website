import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import showroom1 from "@/assets/showroom1.png";
import showroom2 from "@/assets/showroom2.png";
import showroom3 from "@/assets/showroom3.png";
import showroom4 from "@/assets/showroom4.png";
import showroom5 from "@/assets/showroom5.png";
import Image from "next/image";

const items = [
    <div className="item m-5" key="1">
        <Image src={showroom1} className="h-80 object-cover" alt="Product Image" />
    </div>,
    <div className="item m-5" key="2">
        <Image src={showroom2} className="h-80 object-cover" alt="Product Image" />
    </div>,
    <div className="item m-5" key="3">
        <Image src={showroom3} className="h-80 object-cover" alt="Product Image" />
    </div>,
    <div className="item m-5" key="3">
        <Image src={showroom4} className="h-80 object-cover" alt="Product Image" />
    </div>,
    <div className="item m-5" key="3">
        <Image src={showroom5} className="h-80 object-cover" alt="Product Image" />
    </div>,
];

function ShowRoomCarousel() {
    return (
        <AliceCarousel
            items={items}
            responsive={{
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 },
            }}
            autoPlay
            autoPlayInterval={1500}
            infinite
        />
    );
}

export default ShowRoomCarousel;