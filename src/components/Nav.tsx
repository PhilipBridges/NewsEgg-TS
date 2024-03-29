import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Sources } from '../helpers/enums'
import { getNewsList } from '../helpers/calls'

const navigation = [
  { name: Sources.DEFAULT, href: '#', current: true, displayName: 'All' },
  {
    name: Sources.WAPO,
    href: '#',
    current: false,
    displayName: 'Washington Post',
  },
  { name: Sources.CNN, href: '#', current: false, displayName: 'CNN' },
  { name: Sources.NBC, href: '#', current: false, displayName: 'NBC' },
  { name: Sources.AP, href: '#', current: false, displayName: 'AP' },
  { name: Sources.FOX, href: '#', current: false, displayName: 'FoxNews' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// @ts-ignore
export default function Nav({ refreshNews }) {
  const [current, setCurrent] = useState<string>('')

  const changeCurrent = async (item: Sources) => {
    setCurrent(item)
    const newsFetch = await getNewsList(Sources.WAPO)
    if (!newsFetch) return
    refreshNews(item)
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />

                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <div className=" text-white pl-4">NewsEgg</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        onClick={() => changeCurrent(item.name)}
                        key={item.name}
                        className={classNames(
                          current === item.name
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.displayName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
