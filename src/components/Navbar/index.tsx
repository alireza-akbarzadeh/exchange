import * as React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="dark:bg-bgNavbar bg-NavbarLight  border-b flex items-center border-gray-200  dark:border-borderColor py-4">
      <div className=" container px-8  max-w-screen-2xl mx-auto ">
        <div className="text-textGray text-xs  ">
          <ul className="flex items-center justify-around col-span-3">
            <li className="hover:text-primary-light">
              <a href="">Lorem ipsum dolor sit amet consectetur</a>
            </li>
            <li className="hover:text-primary-light">
              <a href="">Lorem ipsum dolor sit amet consectetur </a>
            </li>
            <li className="hover:text-primary-light">
              <a href="">Lorem ipsum dolor sit amet consectetur </a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiChevronUp className="text-white text-xl " />
              ) : (
                <FiChevronDown className="text-white text-xl " />
              )}
            </li>
          </ul>
        </div>
        {isOpen && (
          <>
            <ul className="flex items-center justify-around  text-textGray text-xs mt-2 rtl:ml-3 ltr:mr-4">
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur</a>
              </li>
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur </a>
              </li>
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur </a>
              </li>
              <li></li>
            </ul>
            <ul className="flex items-center justify-around  text-textGray text-xs mt-2 rtl:ml-3 ltr:mr-4">
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur</a>
              </li>
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur </a>
              </li>
              <li className="hover:text-primary-light">
                <a href="">Lorem ipsum dolor sit amet consectetur </a>
              </li>
              <li></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
