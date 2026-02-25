import './App.css'
// LAYOUTS
import MainLayout from "./layouts/MainLayout";
// PAGES
import Home from "./pages/Home"

function App() {
  return (
    <>
      <MainLayout>
        <Home></Home>
      </MainLayout>
    </>
  )
}

export default App
