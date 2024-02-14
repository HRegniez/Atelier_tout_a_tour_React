import React from "react"
import { Header, Hero, OuMeTrouver, Tarifs, Gallerie, Partenaires, Footer } from "./components"

function App() {

  return (
    <div className="contain">
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <OuMeTrouver />
        <Tarifs />
        <Gallerie />
        <Partenaires />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
