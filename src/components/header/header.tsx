import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import CartBox from '../cartBox'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'
import hamburgerIcon from '../../images/hamburgerIcon.png'
import './header.scss'

type HeaderProps = {
  count: number
  onItemDelete: () => void
  showCart: boolean
  setAddItemToCart: (params: boolean) => void
}

const Header = (props: HeaderProps) => {
  const handleShowCart = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const el = document.querySelector<HTMLElement>('.cartContainer')!
    el.style.display = el.style.display === 'block' ? 'none' : 'block'
  }

  const handleMobileNav = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const ele = document.querySelector<HTMLElement>('.leftNav')!
    ele.style.display = 'flex'
  }

  return (
    <>
      <header>
        <nav className="headerNav">
          <div className="mobileNav" onClick={handleMobileNav}>
            <img src={hamburgerIcon} alt="mobileHamburger" />
          </div>
          <div className="leftNav">
            <Link to="/sneakers" className="firstLink">
              sneakers
            </Link>

            <Link to="/collections">Collections</Link>

            <Link to="/Men">Men</Link>

            <Link to="/Women">Women</Link>

            <Link to="/About">About</Link>

            <Link to="/Contact">Contact</Link>
          </div>
          <div className="rightNav">
            <Link to="/cart" className="imgCart" onClick={handleShowCart}>
              <img className="linkCart" src={cart} alt="cart" />
              {props.count && props.showCart ? (
                <span className="cartCount">{props.count}</span>
              ) : (
                ''
              )}
            </Link>
            <Link to="#" className="avatarLink">
              <img className="avatar" src={avatar} alt="avatar" />
            </Link>
          </div>
        </nav>
      </header>
      <CartBox
        count={props.count}
        onItemDelete={props.onItemDelete}
        showCart={props.showCart}
      />
    </>
  )
}

export default Header
