"use client"
import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { inputLogicObject } from './popUp';
import { ChangeEvent, useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



interface InputProps {
    value: inputLogicObject; // Type is string as we're assuming a text input
    onChange: React.Dispatch<React.SetStateAction<inputLogicObject>>; // Function receiving an event object specific to HTMLInputElement
}


export default function InputWithIcon({ value, onChange }: InputProps) {

    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm"
            >
                <input
                    type="text"
                    name="mac-address"
                    id="mac-address"
                    className={value.error
                        ? 'block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6'
                        : 'block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'}
                    placeholder="XX:XX:XX:XX:XX:XX"
                    aria-invalid="false"
                    aria-describedby="mac-address-error"

                    onChange={event => { onChange({ value: event.target.value, error: undefined }) }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    {value.error
                        ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                        : <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="false" />

                    }
                </div>
            </div>
            <p className="mt-2 text-sm text-red-600 text-left" id="mac-address-error">
                {value.error}
            </p>
        </div>
    )
}
