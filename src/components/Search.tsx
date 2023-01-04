import React, { ChangeEvent, useState } from 'react'

const Search = (): JSX.Element => {
  const [text, setText] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    if (value === '') return

    setText(e.target.value)
  }

  const onSubmit = () => {
    if (!text) return

    getNews(text)
  }

  const getNews = async (searchTerm: string) => {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=us`
    )

    const data = await res.json()
    console.log(data)
    // return something
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          News<span className="font-black">Egg</span>
        </h1>
        <p className="text-sm mt-2">
          Enter your location and select and option.
        </p>
        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={text}
            className="px-2 py-1 rounded-1-md border-2 border-white"
            onChange={onChange}
          />
          <button
            onClick={onSubmit}
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
