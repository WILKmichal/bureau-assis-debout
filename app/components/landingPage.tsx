"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Testt from "@/app/components/slider/slider";

const navigation = [
    { name: 'Tableau de bord', href: '#', current: true },
    { name: 'Réglages horaires', href: '#', current: false },
]

const userNavigation = [
    { name: 'Paramètres', href: '#' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="flex h-full w-full flex-col">
            <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="flex">
                                    <div className="flex flex-shrink-0 items-center">
                                        { /* eslint-disable-next-line */}
                                        <img
                                            className="block h-8 w-auto lg:hidden"
                                            src="./desk-table-svgrepo-com.svg"
                                            alt="Your Company"
                                        />
                                        { /* eslint-disable-next-line  */}
                                        <img
                                            className="hidden h-8 w-auto lg:block"
                                            src="./desk-table-svgrepo-com.svg"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'border-indigo-500 text-gray-900'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Voir les Paramètres</span>
                                        <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Ouvrir menu principal</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pb-3 pt-4">
                                <div className="mt-3 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col h-full">
                    {/*                     <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Tableau de bord</h1>
 */}                    <div className="flex-grow">
                        <div className='mx-auto flex-grow h-full py-8'>
                            <Testt></Testt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
