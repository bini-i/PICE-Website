import { twMerge} from "tailwind-merge";
import { Roboto } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
 
const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const Technology = () => {
    return (
        <div className="container">

            
            <section id="services" className={twMerge(barlow.className, "services")}>
                <div className="service">
                    <div className="service-header">
                        <div className="service-logo">
                            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 15 L30 35" stroke="#3498db" stroke-width="3"/>
                                <circle cx="30" cy="40" r="8" stroke="#3498db" stroke-width="3" fill="none"/>
                                <path d="M15 25 L45 25" stroke="#3498db" stroke-width="2"/>
                                <path d="M20 15 L40 15 L45 25 L40 35 L20 35 L15 25 Z" stroke="#3498db" stroke-width="2" fill="none"/>
                            </svg>
                        </div>
                        <h3>Technology Research Design</h3>
                    </div>
                    <div className="status">
                        <div className="status-item">Innovating</div>
                        <div className="status-item">Researching / </div>
                        <div className="status-item">Partners / collaboration ...</div>
                        <div className="status-item">Designed / prototyping </div>
                    </div>
                    <div className="description">
                        Our Technology Research Design department focuses on adopting and localizing productivity-enhancing technologies through in-depth research and innovative solutions tailored to industry needs.
                    </div>
                </div>
                
                <div className="service">
                    <div className="service-header">
                        <div className="service-logo">
                            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 40 L30 15 L45 40" stroke="#3498db" stroke-width="3" fill="none"/>
                                <path d="M25 35 L35 35" stroke="#3498db" stroke-width="3"/>
                                <path d="M20 45 L40 45 L45 40 L40 35 L20 35 L15 40 Z" stroke="#3498db" stroke-width="2" fill="none"/>
                                <path d="M30 35 L30 25" stroke="#3498db" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3>Incubation Service</h3>
                    </div>
                    <div className="status">
                        <div className="status-item">Nurturing</div>
                        <div className="status-item">Incubating </div>
                        <div className="status-item">Startups / acceleration ...</div>
                        <div className="status-item">Launched / scaling </div>
                    </div>
                    <div className="description">
                        The Incubation Service supports technology and business ideas through resources, mentorship, and collaborative environments to transform concepts into sustainable, competitive industries.
                    </div>
                </div>
                
                <div className="goal">
                    The goal of TDIS is to establish competitive industries and incubators in terms of quality and productivity by adopting and localizing productivity-enhancing technologies, and by incubating technology and business ideas.
                </div>
            </section>
        </div>
    )
}