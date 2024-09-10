'use client'
import React, { useState } from "react";
import Link from 'next/link'
import Image from "next/image";

export default function Home(): JSX.Element {

  // State to control the visibility of the dropdown
  const [buyDropdownVisible, setBuyDropdownVisible] = useState(false);
  const [buy1DropdownVisible, setBuy1DropdownVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle the visibility of the dropdown
  const toggleBuyDropdown = () => {
    setBuyDropdownVisible(!buyDropdownVisible);
  };

  const toggleBuy1Dropdown = () => {
    setBuy1DropdownVisible(!buy1DropdownVisible);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <main className="flex h-screen w-auto items-center bg-black bg_img">
      <div className="mx-auto w-full h-screen  max-w-lg rounded-lg bg-gray-900 p-2 pt-4 shadow-card  xs:p-6 xs:pt-5 ">
        <header className="mb-3 min-h-[40px]  border-gray-200 pb-2 uppercase tracking-wider dark:border-gray-700 xs:mb-6 xs:pb-5 xs:tracking-wide">
          <h1 className="text-slate-200 px-2"></h1>
        </header>
        <div className="buYSell py-1 px-2">
          <div className="intro_ctnt p-4 text-center text-xl d_none">
            Welcome to KryptoBay <br />
            Your all in one crypto exchange platform
          </div>
          <div className="flex flex-col gap-5 relative mb-6 text-sm uppercase sm:gap-8 sm:rounded-none" role="tablist" aria-orientation="horizontal">
            <div className="rounded-lg border text-gray-900 dark:text-slate-200 border-gray-200 dark:border-gray-700 dark:hover:border-gray-500">
              <button className="flex w-full items-center justify-center text-2xl p-3 uppercase text-gray-400 dark:text-gray-300 dark:bg-gray-600 rounded-md sm:px-2 sm:py-4">
                <span className="font-medium">
                  KRYPTOBAY
                </span>
              </button>
            </div>
          </div>

          <div className="relative mb-6 text-sm uppercase sm:gap-8 sm:rounded-none" role="tablist" aria-orientation="horizontal">
            <div className="rounded-lg border text-gray-900 dark:text-slate-200 border-gray-200 dark:border-gray-700 dark:hover:border-gray-500">
              <button className="flex w-full items-center justify-center gap-2 p-5 uppercase text-gray-400 dark:text-gray-300 sm:px-5 sm:py-3.5"
                onClick={ toggleBuyDropdown }>
                <span className="font-medium">
                  Choose a Payment Method
                </span>
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-3.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z" fill="currentColor"></path>
                </svg>
              </button>
              { buyDropdownVisible && ( // Conditionally render the dropdown
                <div className="absolute left-0 top-full z-10 mt-1 grid w-full gap-0.5 rounded-lg border border-gray-200 bg-white p-2 text-left shadow-large dark:border-gray-700 dark:bg-gray-800 xs:gap-1">
                  <div>
                    <button className="flex flex-row gap-1 items-center relative z-0 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:border border-gray-500 dark:hover:text-white w-full p-2.5">
                      <input type="checkbox"
                        checked={ isChecked }
                        onChange={ handleCheckboxChange }
                      />
                      <span className="flex w-full justify-between px-3 md:px-0">
                        M-Pesa
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-row gap-1 items-center relative z-0 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:border border-gray-500 dark:hover:text-white w-full p-2.5">
                      <input type="checkbox"
                        checked={ isChecked }
                        onChange={ handleCheckboxChange }
                      />
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Bank Transfer
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-row gap-1 items-center relative z-0 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:border border-gray-500 dark:hover:text-white w-full p-2.5">
                      <input type="checkbox"
                        checked={ isChecked }
                        onChange={ handleCheckboxChange }
                      />
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Airtel Money
                      </span>
                    </button>
                  </div>
                </div>
              ) }
            </div>
          </div>

          <div className="relative mb-6 text-sm uppercase sm:gap-8 sm:rounded-none" role="tablist" aria-orientation="horizontal">
            <div className="rounded-lg border text-gray-900 dark:text-slate-200 border-gray-200 dark:border-gray-700 dark:hover:border-gray-500 ">
              <button className="flex w-full items-center justify-center gap-2 p-5 uppercase text-gray-400 dark:text-gray-300 sm:px-5 sm:py-3.5"
                onClick={ toggleBuy1Dropdown }>
                <span className="font-medium">
                  Verification
                </span>
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-3.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z" fill="currentColor"></path>
                </svg>
              </button>
              { buy1DropdownVisible && ( // Conditionally render the dropdown
                <div className="absolute left-0 top-full z-10 mt-1 grid w-full gap-0.5 rounded-lg border border-gray-200 bg-white p-2 text-left shadow-large dark:border-gray-700 dark:bg-gray-800 xs:gap-1">
                  <div>
                    <button className="relative z-0 uppercase tracking-wider focus:outline-none dark:hover:border border-gray-500 rounded-sm dark:hover:text-white w-full p-2.5">
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Buy
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="relative z-0 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:text-white w-full p-2.5">
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Sell
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="relative z-0 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:text-white w-full p-2.5">
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Send
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="relative z-0 uppercase tracking-wider focus:outline-none dark:hover:text-white font-medium text-white hover:text-white focus:text-white w-full p-2.5">
                      <span className="flex w-full justify-between px-3 md:px-0">
                        Exchange
                      </span>
                    </button>
                  </div>
                </div>
              ) }
            </div>
          </div>

          <span className="my-6 block h-[1px] border-b border-dashed border-b-gray-600">
          </span>

          <div style={ { opacity: 1, transform: "none" } }>
            <div className="group relative flex rounded-lg border border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 transition-colors duration-200 hover:border-gray-900 p-2 mb-5">
              <div className="cryptos">
                <button className="flex h-11 w-full items-center justify-between whitespace-nowrap border-gray-100 px-4 py-4 pl-3 text-sm text-gray-900 dark:text-slate-200 ltr:rounded-tl-lg ltr:rounded-bl-lg ltr:border-r rtl:border-l sm:h-13 sm:pl-4">
                  <div className="flex items-center gap-3 font-medium ltr:mr-2 rtl:ml-2">
                    <span className="sm:[&amp;>*]:h-[30px] sm:[&amp;>*]:w-[30px]">
                      <svg className="my-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F3BA2F">
                        </path>
                        <path d="M9.28254 10.8826L12.0016 8.16468L14.7218 10.8848L16.303 9.3025L12.0016 5L7.7002 9.3014L9.28254 10.8826Z" fill="white">
                        </path>
                        <path d="M5 12.0008L6.58123 10.4185L8.16357 12.0008L6.58123 13.582L5 12.0008Z" fill="white">
                        </path>
                        <path d="M9.28254 13.1173L12.0016 15.8364L14.7218 13.1162L16.3041 14.6963L12.0027 18.9988L7.7002 14.6997L9.28254 13.1173Z" fill="white">
                        </path>
                        <path d="M15.8364 12.0008L17.4177 10.4185L19 11.9997L17.4177 13.5831L15.8364 12.0008Z" fill="white">
                        </path>
                        <path d="M13.6059 11.9996L12.0014 10.394L10.8149 11.5805L10.6778 11.7165L10.397 11.9974L12.0014 13.6007L13.6059 12.0007V11.9996Z" fill="white">
                        </path>
                      </svg>
                    </span>
                    BNB
                  </div>
                  <svg className="ml-1" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z" fill="currentColor">
                  </path>
                  </svg>
                </button>
              </div>
              <span className="ml-3 absolute top-0 h-full w-[1px] bg-gray-300 dark:bg-gray-700 left-24 right-24"></span>
              <input inputMode="decimal" className="md w-full rounded-lg border-0 px-2 text-base text-right outline-none focus:ring-0 ltr:text-right rtl:text-left text-gray-900 dark:text-slate-200 dark:bg-inherit" type="text" placeholder="0.0" value="0" />
            </div>

            <div className="group relative flex rounded-lg border border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 transition-colors duration-200 hover:border-gray-900 p-2 mb-5">
              <div className="cryptos">
                <button className="flex h-11 w-full items-center justify-between whitespace-nowrap border-gray-100 px-4 py-4 pl-3 text-sm text-gray-900 dark:text-slate-200 ltr:rounded-tl-lg ltr:rounded-bl-lg ltr:border-r rtl:border-l sm:h-13 sm:pl-4">
                  <div className="flex items-center gap-3 font-medium ltr:mr-2 rtl:ml-2">
                    <span className="sm:[&amp;>*]:h-[30px] sm:[&amp;>*]:w-[30px]">
                      <svg className="my-svg " xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#4D4D4D" d="M256 0c70.683 0 134.689 28.663 181.012 74.987C483.336 121.311 512 185.316 512 256c0 70.683-28.664 134.689-74.988 181.012C390.689 483.336 326.683 512 256 512c-70.677 0-134.689-28.664-181.013-74.988C28.663 390.689 0 326.676 0 256c0-70.684 28.663-134.689 74.987-181.013C121.311 28.663 185.316 0 256 0z" /><path fill="#fff" d="M256.001 19.596c65.278 0 124.383 26.467 167.162 69.243 42.777 42.78 69.243 101.884 69.243 167.162S465.94 380.384 423.16 423.16c-42.776 42.78-101.881 69.246-167.159 69.246-65.278 0-124.382-26.466-167.162-69.243-42.776-42.779-69.243-101.884-69.243-167.162S46.063 131.619 88.839 88.839c42.78-42.776 101.884-69.243 167.162-69.243z" /><path fill="#fff" d="M256.001 39.594c119.518 0 216.407 96.887 216.407 216.407 0 119.518-96.889 216.407-216.407 216.407-119.52 0-216.407-96.889-216.407-216.407 0-119.52 96.887-216.407 216.407-216.407z" /><path d="M454.438 169.562H57.564C90.932 93.07 167.213 39.594 256.001 39.594c88.786 0 165.069 53.476 198.437 129.968z" /><path fill="#060" d="M58.078 343.615h395.844c-33.634 75.864-109.59 128.793-197.921 128.793-88.334 0-164.289-52.929-197.923-128.793z" /><path stroke="#000" stroke-width=".348" stroke-miterlimit="22.926" d="M176.582 385.769l4.709 2.721 127.04-220.041c7.43-1.989 11.507-9.057 15.587-16.121 2.722-4.712 13.598-23.552 18.315-48.034-18.846 16.322-29.725 35.165-32.444 39.874-4.08 7.068-8.16 14.132-6.17 21.562L176.582 385.769z" /><path fill="#fff" d="M176.582 385.769l4.709 2.721 127.04-220.041c7.43-1.989 11.507-9.057 15.587-16.121 2.722-4.712 13.598-23.552 18.315-48.034-18.846 16.322-29.725 35.165-32.444 39.874-4.08 7.068-8.16 14.132-6.17 21.562L176.582 385.769z" /><path stroke="#000" stroke-width=".348" stroke-miterlimit="22.926" d="M332.025 385.769l-4.709 2.721-127.039-220.041c-7.431-1.989-11.508-9.057-15.588-16.121-2.722-4.712-13.597-23.552-18.315-48.034 18.847 16.322 29.725 35.165 32.444 39.874 4.08 7.068 8.16 14.132 6.17 21.562l127.037 220.039z" /><path fill="#fff" d="M332.025 385.769l-4.709 2.721-127.039-220.041c-7.431-1.989-11.508-9.057-15.588-16.121-2.722-4.712-13.597-23.552-18.315-48.034 18.847 16.322 29.725 35.165 32.444 39.874 4.08 7.068 8.16 14.132 6.17 21.562l127.037 220.039z" /><path fill="#B00" d="M49.812 321.857h152.82c8.16 21.758 35.355 65.272 51.672 65.272 16.316 0 43.511-43.514 51.671-65.272H462.19c6.628-20.768 10.218-42.891 10.218-65.856 0-22.531-3.448-44.255-9.837-64.681H305.975c-8.16-21.758-35.355-65.272-51.671-65.272-16.317 0-43.512 43.514-51.672 65.272H49.431c-6.389 20.426-9.837 42.15-9.837 64.681 0 22.965 3.59 45.088 10.218 65.856z" /><path d="M305.975 321.857c8.16-21.757 13.598-43.511 13.598-65.269 0-21.757-5.438-43.511-13.598-65.268-8.16 21.757-13.598 43.511-13.598 65.268 0 21.758 5.441 43.512 13.598 65.269zM202.632 321.857c-8.16-21.757-13.597-43.511-13.597-65.269 0-21.757 5.437-43.511 13.597-65.268 8.16 21.757 13.598 43.511 13.598 65.268 0 21.758-5.441 43.512-13.598 65.269z" /><path fill="#fff" d="M265.182 256.588c0-9.012-4.871-16.316-10.878-16.316-6.008 0-10.879 7.304-10.879 16.316 0 9.013 4.871 16.317 10.879 16.317 6.007 0 10.878-7.304 10.878-16.317z" /><path fill="#fff" d="M257.023 272.498s10.878 21.757 10.878 57.112c0 35.355-10.878 57.112-10.878 57.112V272.498zM251.585 240.679s-10.879-21.757-10.879-57.112c0-35.354 10.879-57.112 10.879-57.112v114.224zM251.585 272.498s-10.879 21.757-10.879 57.112c0 35.355 10.879 57.112 10.879 57.112V272.498zM257.023 240.679s10.878-21.757 10.878-57.112c0-35.354-10.878-57.112-10.878-57.112v114.224z" /></g></svg>
                    </span>
                    KSH
                  </div>
                  <svg className="ml-1" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z" fill="currentColor">
                  </path>
                  </svg>
                </button>
              </div>
              <span className="ml-3 absolute top-0 h-full w-[1px] bg-gray-300 dark:bg-gray-700  left-24 right-24"></span>
              <input inputMode="decimal" className="md w-full rounded-lg border-0 px-2 text-base text-right outline-none focus:ring-0 ltr:text-right rtl:text-left text-gray-900 dark:text-slate-200 dark:bg-inherit" type="text" placeholder="00.000 KES" />
            </div>

            <Link href="/verify">
              <button className="relative bg-gray-600 inline-flex shrink-0 items-center justify-center overflow-hidden text-center text-xs font-medium tracking-wider outline-none transition-all sm:text-sm bg-brand border-brand hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none w-full text-white rounded-md sm:rounded-lg px-7 sm:px-9 h-11 sm:h-13 mt-6 uppercase xs:mt-8 xs:tracking-widest xl:px-2 2xl:px-9"
                type="submit">
                <span className=""> Buy</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
