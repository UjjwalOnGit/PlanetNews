import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItems from "./Components/NewsItems"

const App = () => {
  const [catogery,setCatogery] = useState("country");
  return (
    <div>
      <Navbar setCatogery={setCatogery}/>
      <NewsBoard catogery={catogery}/>
    </div>
  )
}

export default App