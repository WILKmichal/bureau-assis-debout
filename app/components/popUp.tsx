"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { WifiIcon } from '@heroicons/react/24/outline'
import InputWithIcon from './inputWithIcon'

export enum MacAddressError {
    INVALID_FORMAT = 'MAC adresse invalide',
    UNREACHABLE = 'MAC adresse injoinable',
    EMPTY = 'MAC adresse non renseigner',
}

export type inputLogicObject = {
    value: undefined | string,
    error: undefined | MacAddressError
}


export default function PopUp() {
    const [open, setOpen] = useState(false);
    const [addressMAC, setAddressMAC] = useState<inputLogicObject>({
        value: undefined,
        error: undefined
    });

    const handleMACAddressVerification = (): inputLogicObject => {
        let handledError: inputLogicObject | undefined = undefined;
        if (checkEmptyString(addressMAC.value)) {
            handledError = { ...addressMAC, error: MacAddressError.EMPTY }
        }
        else if (!checkValidMACAddress((addressMAC.value ?? ""))) {
            handledError = { ...addressMAC, error: MacAddressError.INVALID_FORMAT }
        }
        else {
            handledError = addressMAC
        }
        setAddressMAC(handledError)
        return handledError;
    }

    //methode that check a string is not empty or loop empty for a user
    const checkEmptyString = (value: any): boolean => {
        if (value === undefined || value === "") {
            return true
        }
        return false
    }

    const checkValidMACAddress = (value: string): boolean => {
        if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)) {
            return true
        }
        return false

    }

    const connectionMAC = () => {
        const errorHandeling: inputLogicObject = handleMACAddressVerification()
        console.log(errorHandeling)
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                        <WifiIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Connection bureau assis-debout IDASEN
                                        </Dialog.Title>
                                        <div className="mt-2 pb-5">
                                            <p className="text-sm text-gray-500">
                                                Connecter le bureau via bluetooth.
                                            </p>
                                            <p className="text-sm text-gray-600 py-2">Ou</p>
                                            <p className="text-sm text-gray-500">
                                                Renseigner l&apos;adresse MAC de votre bureau.
                                            </p>
                                        </div>
                                        <InputWithIcon value={addressMAC} onChange={setAddressMAC}></InputWithIcon>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                                        //onClick={() => setOpen(false)}
                                        onClick={() => connectionMAC()}
                                    >
                                        connection addresse MAC
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                    //onClick={() => setOpen(false)}
                                    //ref={cancelButtonRef}
                                    >
                                        verifier connection bluethooth
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
