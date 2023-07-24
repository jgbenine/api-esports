'use client'
// import { useState } from "react"
// import fetchDefault from "./axios/axiosConfig"
import FormApi from "./Components/FormApi"
import { AppProvider } from "./AppContext"
import Loading from "./Components/Loading"

export default function Home() {
  return (
    <AppProvider>
      <section className="flex flex-col flex-1 h-screen bg-zinc-800 gap-3">
        <form className="flex flex-col gap-2">
          <FormApi/>
        </form>
      </section >
    </AppProvider>

  )
}
