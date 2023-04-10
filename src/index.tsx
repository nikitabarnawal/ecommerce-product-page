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
  const target = e.target as Element

  //handle for SidenavDropDown
  if (
    target.className.includes('leftNav') ||
    target.parentElement?.className.includes('mobileNav')
  ) {
    return
  }

  const mobileEl = document.querySelector<HTMLElement>('.mobileNav')!
  if (mobileEl && getComputedStyle(mobileEl).display === 'block') {
    const DesktopEl = document.querySelector<HTMLElement>('.leftNav')!
    DesktopEl.style.display = 'none'
  }

  //handle for cartDropDown
  if (
    target.className.includes('linkCart') ||
    target.className.includes('cartCount') ||
    target.className.includes('imgCartContainer')
  ) {
    return
  }

  const cartEl = document.querySelector<HTMLElement>('.cartContainer')!
  if (cartEl && getComputedStyle(cartEl)?.display === 'block') {
    cartEl.style.display = 'none'
  }
}

document.getElementById('root')!.addEventListener('click', hideDropdown)

reportWebVitals()
