import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <footer>
        
<footer className="bg-white  shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://flowbite.com/" className="hover:underline">PopMovies</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://instagram.com/hmmmmadd?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="https://studio.youtube.com/channel/UCrecWA21HBJL3Ql4CWhSUwA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/md-hammad-58194a243" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkdIn</a>
        </li>
        <li>
            <a href="https://github.com/shaikh-coder" target="_blank" rel="noreferrer"                       className="hover:underline">Github</a>
        </li>
    </ul>
    </div>
</footer>

      </footer>
    )
  }
  