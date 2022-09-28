import React from "react";
import CardL from "./CardL";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function App() {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://www.clipartmax.com/png/middle/27-274923_coffee-cup-cappuccino-cafe-hot-coffee-vector-png.png"
                      alt="Some logo"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Homepage
            </h1>
          </div>
        </header>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="container m-auto px-6 text-gray-600">
              <div className="space-y-6 lg:gap-12">
                <div className="lg:w-5/12">
                  <img
                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                    alt="Something fancy"
                    loading="lazy"
                    width=""
                    height=""
                  />
                </div>
                <div className="lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    NWHT out by passionate developers howO
                  </h2>
                  <p className="mt-6 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum omnis voluptatem accusantium nemo perspiciatis delectus
                    atque autem! Voluptatum tenetur beatae unde aperiam,
                    repellat expedita consequatur! Officiis id consequatur atque
                    doloremque!
                  </p>
                  <br />
                  <p className="mt-4 text-gray-600">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat
                    iure expedita at? Asperiores nemo possimus nesciunt dicta
                    veniam aspernatur quam mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </>
  );
}
