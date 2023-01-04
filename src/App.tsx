import { useCallback, useEffect, useState } from 'react'
import { getNewsList } from './helpers/calls'
import Nav from './components/Nav'
import NewsList from './components/NewsList'
import { NewslistProps } from './types'
import { Sources } from './helpers/enums'

const App = (): JSX.Element => {
  const [news, setNews] = useState<NewslistProps>()

  const refreshNews = useCallback(async (source: Sources) => {
    const newFetch = await getNewsList(source)
    if (!newFetch) return
    setNews(newFetch)
  }, [])

  useEffect(() => {
    if (!news) {
      const checkDefaultNews = async () => {
        const defaultFetch = await getNewsList(Sources.DEFAULT)
        if (!defaultFetch) return
        setNews(defaultFetch)
      }
      checkDefaultNews()
    }
  }, [news, setNews, refreshNews])

  console.log('NOOZ', news)
  return (
    <>
      <Nav refreshNews={refreshNews} />
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400  w-full">
        {news ? (
          <NewsList articles={news.articles} totalResults={news.totalResults} />
        ) : null}
      </main>
    </>
  )
}

export default App
