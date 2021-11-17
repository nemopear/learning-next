import Link from "next/link";
import Image from "next/image";
import Style from "../styles/Header.module.scss";
import React, { Fragment, useEffect, useState } from "react";
import { graphCms } from "../lib/graphCms";
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => {
  const [categoryLinks, setCategoryLinks] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      const { categories } = await graphCms.request(`
            query MyQuery {
                categories {
                color {
                    css
                }
                name
                }
            }          
            `)
      setCategoryLinks(categories)
    }
    getCategory();
  }, [])
  return (
    <header className="relative z-20">
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a href="#" className="h-10 w-10 relative rounded-full overflow-hidden">
                    <span className="sr-only">Nemo's blog</span>

                    <Image

                      layout="fill"
                      src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/FWUnmkz9Ruqwt34qsNZ7"
                    />

                  </a>

                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <ul className="flex items-center justify-between lg:justify-start">
                {categoryLinks.map((link) => (
                  <li key={link.name} className="mr-10">
                    <Link href={`/${link.name}`}>
                      <a className="font-medium text-gray-500 hover:text-gray-900">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="/">
                  <a href="#" className="h-10 w-10 relative rounded-full overflow-hidden">
                    <span className="sr-only">Nemo's blog</span>

                    <Image

                      layout="fill"
                      src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/FWUnmkz9Ruqwt34qsNZ7"
                    />

                  </a>

                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <ul>
                  {categoryLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={`/${link.name}`}>
                        <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))} */}
              </div>

            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </header>
  );
}

export default Header;