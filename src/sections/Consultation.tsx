import { twMerge} from "tailwind-merge";
import { Roboto } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
})

export const Consultation = () => {
    return (
        <>
            <section className={twMerge(barlow.className, "text-black py-20")} id="services">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Streamline Your Operations with Our Consultation Services</h1>
                    <p className="text-lg md:text-xl mb-8">Specification & Estimation, Hiring Evaluations, and More!</p>
                </div>
            </section>

            <section className="py-20 flex items-center w-full" style={{backgroundImage: "url(" + "/static/images/construction-consultation-banner.png" + ")" , backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container">
                    <div className="w-1/2 text-white">
                        <h2 className="text-3xl font-bold mb-4">Your Construction Project</h2>
                        <p className="text-lg mb-6">
                        We specialize in delivering high-quality construction services tailored to your needs. 

                        Our team of experts is here to ensure your project is completed on time and to your specifications.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <img src="/path/to/your/illustration.png" alt="Construction Illustration" className="w-full h-auto"/>
                    </div>
                </div>
            </section>
        </>
    )
}