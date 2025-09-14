'use client'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { categories } from '../../data'
import type { ICategory } from '../../interfaces'

interface IProps {
  selectedCategory : ICategory,
  setSelectedCategory : (category : ICategory) => void
}

const Select = ({selectedCategory ,setSelectedCategory} : IProps) => {

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Label className="block text-lg text-gray-600 mb-0.5 dark:text-white">Category</Label>
      <div className="relative">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white dark:bg-black dark:text-white py-3 pr-2 pl-3 shadow text-left text-gray-800/50 outline-1 -outline-offset-1 outline-white/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt=""
              src={selectedCategory.image}
              className="size-6 shrink-0 rounded-full bg-white  outline -outline-offset-1 outline-white/10"
            />
            <span className="block truncate dark:text-sky-600">{selectedCategory.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black dark:text-white py-1 text-base outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-700 select-none dark:bg-black dark:text-sky-600 data-focus:bg-black/10 dark:data-focus:bg-white/20 data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={category.image}
                  className="size-5 shrink-0 rounded-full outline -outline-offset-1 outline-white/10"
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{category.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}


export default Select

