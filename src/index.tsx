import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import router from './route/router'
import { RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

const hideDropdown = (e: any) => {
  if (
    e.target.className.includes('avatarLink') ||
    e.target.parentElement.className.includes('avatarLink')
  )
    return
  const el = document.querySelector<HTMLElement>('.cartContainer')!
  el.style.display = 'none'
}

document.getElementById('root')!.addEventListener('click', hideDropdown)

reportWebVitals()
