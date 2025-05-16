import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import productImage from "@/assets/product-image.png";
import Image from "next/image";

const items = [
    <div className="item m-5" key="1">
        <Image src={productImage} alt="Product Image" />
    </div>,
    <div className="item m-5" key="2">
        <Image src={productImage} alt="Product Image" />
    </div>,
    <div className="item m-5" key="3">
        <Image src={productImage} alt="Product Image" />
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
            autoPlayInterval={2500}
            infinite
        />
    );
}

export default ShowRoomCarousel;