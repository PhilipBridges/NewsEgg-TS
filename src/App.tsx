import Nav from './components/Nav'
import NewsList from './components/NewsList'

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400  w-full">
        <NewsList />
      </main>
    </>
  )
}

export default App
