import { useState } from "react"

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }
  return (
    <form onSubmit={onSubmit} class="max-w-3xl mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <svg
            class="w-4 h-4 text-purple-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-purple-500 focus:border-purple-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  )
}
