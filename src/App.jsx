import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';


function App() {
 const [thememode, SetThemeMode] = useState("light");

 const light = () => {
  SetThemeMode("light")
 } 
 const dark = () => {
  SetThemeMode("dark")
 }

 // actual change in theme

 useEffect(() =>{
  document.querySelector('html').classList.remove('light', 'dark')
  document.querySelector('html').classList.add(thememode)
 }, [thememode])

  return (
    <ThemeProvider value={{thememode, light, dark}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className='w-full'>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
