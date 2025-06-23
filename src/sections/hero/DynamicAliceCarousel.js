// components/DynamicAliceCarousel.js
import dynamic from 'next/dynamic';

const AliceCarousel = dynamic(
  () => import('react-alice-carousel'), // Dynamically import the AliceCarousel library
  {
    ssr: false, // This is the crucial part: Prevent server-side rendering
  }
);

// Optional: Create a wrapper to manage props and CSS loading
const DynamicAliceCarousel = (props) => {
  // Ensure the CSS is loaded client-side.
  // You might already have this in your _app.js or a global CSS file,
  // but explicitly ensuring it loads with the component when it's client-side
  // can prevent FOUC (Flash Of Unstyled Content).
  // The 'typeof window !== 'undefined'' check is important for SSR safety.
  if (typeof window !== 'undefined') {
    require('react-alice-carousel/lib/alice-carousel.css');
  }

  return <AliceCarousel {...props} />;
};

export default DynamicAliceCarousel;