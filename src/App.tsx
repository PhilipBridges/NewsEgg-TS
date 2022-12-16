import Nav from './components/Nav'
import NewsList from './components/NewsList'
import Search from './components/Search'

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full fixed">
        {/* {<Search />} */}
        <NewsList />
      </main>
    </>
  )
}

export default App
