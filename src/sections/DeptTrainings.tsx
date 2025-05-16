import { twMerge} from "tailwind-merge";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export const DeptTrainings = () => {
    return (
        <div className="grid-page-column-content-middle-banner overflow-x-clip">
            <div className="">
                <div className="flex items-center">
                    <h2 className="title-type-2 text-[#0384d2] my-6 w-full">Available Training Programs</h2>
                </div>

                <p className={twMerge(merriweather.className, "grid-page-column-content-text font-normal my-6")}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi quia quas impedit dolorum recusandae repellendus minus nostrum, autem atque, id aliquam fuga eum! Sit, odio sunt. Quasi, dolorem eaque.</p>

                    
                <ul className="space-y-4 text-left text-black dark:text-black">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Auto Mechanic</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Auto Mechanic</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Auto Mechanic</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Auto Mechanic</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Auto Mechanic</span>
                    </li>
                </ul>

            </div>
        </div>        
    )
}