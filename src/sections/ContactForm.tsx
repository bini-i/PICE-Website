import { Barlow_Semi_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const ContactForm = () => {
    return (
        <>
            <div className={twMerge(barlow.className, "bg-white md:absolute right-4 top-4 mx-6 mb-2")}>
                {/* <div className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md border-2 border-t-8 border-t-[#8f8f0c]"> */}
                <div className="p-8 mx-auto max-w-lg max-lg:max-w-lg bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md border-2 border-t-8 border-t-[#8f8f0c]">
                    {/* <div>
                        <h2 className="text-slate-900 text-3xl font-bold">Contact Us</h2>
                        <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">Do you have some big idea to develop or need help empowering your staff.</p>
                        <div className="mt-12">
                            <h2 className="text-slate-900 text-base font-semibold">Email</h2>
                            <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                                </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-sm ml-4">
                                <small className="block text-slate-900">Mail</small>
                                <span className="text-blue-600 font-medium"><a className="" href="mailto:pice@edu.et" title="Contact us by email" target="_blank" rel="noreferrer">pice@edu.et</a></span>
                                </a>
                            </li>
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-slate-900 text-base font-semibold">Socials</h2>
                            <ul className="flex mt-4 space-x-4">
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                    data-original="#000000" />
                                </svg>
                                </a>
                            </li>
    
                            </ul>
                        </div>
                    </div> */}

                    <form className="space-y-4">
                        <h2 className="text-slate-900 text-3xl font-bold">Contact Us</h2>

                        <input type='text' placeholder='Name'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='email' placeholder='Email'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='text' placeholder='Subject'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"></textarea>
                        <button type='button'
                            className="text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2">Send message</button>
                    </form>
                </div>
            </div>
        </>
    )
}