import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "@/components/LandingPage"
import Page from "@/dashboard/Page"
import "@/App.css"


import LoginPage from "./components/login-page"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Landing" element={<LandingPage/>}/>
          {/* <Route path="/product/code-sensei" element={<Sensei />} /> */}
           <Route path="/:tool" element={<Page />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App