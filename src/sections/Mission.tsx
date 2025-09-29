import { Barlow_Semi_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { FaBullseye, FaEye, FaStar, FaCertificate } from "react-icons/fa";

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const Mission = () => {
  return (
    <section className="mission bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-blue-500">
            <FaBullseye className="text-blue-500 text-4xl mb-4" />
            <h2 className={twMerge(barlow.className, "font-bold text-2xl mb-4 text-blue-700 text-center")}>
              Mission
            </h2>
            <p className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed text-justify")}>
              The Productivity Improvement and Center of Excellence aims to enhance the productivity and quality of technical and vocational education and training (TVET) institutions and industries by engaging the community and industry stakeholders. This is achieved by providing short-term skill gap training for leaders and trainers of technical and vocational institutions, as well as industry professionals, offering consultancy services to make industries more effective, conducting studies and research, developing and transferring problem-solving technologies, and providing incubation services. The center strives to ensure the sustainable utilization of our city's community and contribute to is development.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-green-500">
            <FaEye className="text-green-500 text-4xl mb-4" />
            <h2 className={twMerge(barlow.className, "font-bold text-2xl mb-4 text-green-700 text-center")}>
              Vision
            </h2>
            <p className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed text-left")}>
              To become Ethiopia's premier center of excellence in technical skills development by 2030.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-yellow-500">
            <FaStar className="text-yellow-500 text-4xl mb-4" />
            <h2 className={twMerge(barlow.className, "font-bold text-2xl mb-4 text-yellow-700 text-center")}>
              Core Values
            </h2>
            <ul className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed list-disc list-inside text-left w-full")}>
              <li>Quality First</li>
              <li>Customer Oriented</li>
              <li>Innovativeness</li>
              <li>Readiness for Change</li>
              <li>Vocational Excellence</li>
              <li>Accessibility</li>
              <li>Partnership</li>
            </ul>
          </div>
        </div>

        {/* EOMS POLICY at the bottom */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 mt-16 flex flex-col items-start border-t-8 border-indigo-500 max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <FaCertificate className="text-indigo-500 text-4xl mr-3" />
            <h2 className={twMerge(barlow.className, "font-bold text-2xl text-indigo-700")}>
              EOMS POLICY
            </h2>
          </div>
          <p className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed text-justify mb-4")}>
            The Productivity Improvement Center of Excellence is committed to achieving excellence in technical, vocational and training and envisions becoming the leading center of technical excellence in Ethiopia by 2030 in alignment with the principles of ISO 21001:2018.
          </p>
          <p className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed text-justify mb-2")}>
            The excellence center is dedicated on the following commitments:
          </p>
          <ul className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed list-disc list-inside text-justify mb-4 w-full")}>
            <li>
              Delivering impactful short-term training programs for technical, vocational and educational training leaders, trainers, and industry professionals.
            </li>
            <li>
              Accelerate industrial transformation by providing high-quality research and consultancy services.
            </li>
            <li>
              Conducting applied research and developing transformative technologies that address real-world industry challenges.
            </li>
            <li>
              The center supports the establishment of incubation services to nurture startups, foster creativity, acknowledge intellectual properties, and promote socio-economic development.
            </li>
            <li>
              Offering community-based services that drive sustainable growth and empower local communities.
            </li>
          </ul>
          <p className={twMerge(barlow.className, "text-gray-700 text-base leading-relaxed text-justify")}>
            Through these commitments, the center pledges to continually improve its processes, services, and stakeholder satisfaction, ensuring its initiatives remain relevant, impactful, and sustainable.
          </p>
        </div>
        {/* End EOMS POLICY */}
      </div>
    </section>
  );
}