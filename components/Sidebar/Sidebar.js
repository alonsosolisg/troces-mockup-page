import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 pt-2 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              <Image 
                src="/troceslogowide.png"
                height={81.9}
                width={170.1}
              />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-green-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Main
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Personal Information
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/health">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/health") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-medkit mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/health") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Health
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/assets">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/assets") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-hand-holding-usd mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/assets") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Assets
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/didentity">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/didentity") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-fingerprint mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/didentity") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Digital Identity
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-green-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Secondary
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/employment">
                <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/employment") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-suitcase mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/employment") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Employment
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/contacts">
                <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/contacts") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-address-book mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/contacts") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Contacts
                  </a>
                </Link>
              </li>

              <li className="items-center">
                  <Link href="/admin/other">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/other") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-ellipsis-h mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/other") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Other
                  </a>
                  </Link>
                </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-green-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Contingency
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/mental">
                <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/mental") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-brain mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/mental") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Mental Health
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/lastwish">
                <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/lastwish") !== -1
                        ? "text-green-600 hover:text-green-700"
                        : "text-green-700 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-book-dead mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/lastwish") !== -1
                          ? "opacity-75"
                          : "text-green-700")
                      }
                    ></i>{" "}
                    Last Wish
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
