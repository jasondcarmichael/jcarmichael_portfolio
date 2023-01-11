import { BsGithub, BsLinkedin, } from 'react-icons/bs'
// import { Footer } from 'flowbite-react'

export default function Footer () {

return (
<footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <span>
                <BsLinkedin />
                <a href="www.linkedin.com/in/jasondcarmichael" className="mr-4 hover:underline md:mr-6 ">jasondcarmichael</a>
            </span>
          </li>
          <li>
              <a href="https://github.com/jasondcarmichael" className="mr-4 hover:underline md:mr-6"><BsGithub/> jasondcarmichael </a>
          </li>
          {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li> */}
      </ul>
      <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023  |  Jason Carmichael  |  All Rights Reserved.  | Designed & Built by Jason Carmichael in React.js</span>
  </div>
</footer>
)}