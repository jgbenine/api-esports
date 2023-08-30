'use client'
import SelectInfo from "./Components/SelectInfo"
import ActionsMenu from "./Components/ActionsMenu"
import { AppProvider } from "./AppContext"

export default function Home() {
  return (
    <AppProvider>
      <div className="flex flex-col flex-1 h-screen bg-zinc-800 gap-3">
          <ActionsMenu />
          <SelectInfo/>
      </div >
    </AppProvider>

  )
}
