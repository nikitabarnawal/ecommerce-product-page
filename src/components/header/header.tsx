import { Link } from 'react-router-dom'
import CartBox from '../cartBox'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'
import './header.scss'

type HeaderProps = {
  count: number
  onItemDelete: () => void
  onAvatarClicked: () => void
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <header>
        <nav className="headerNav">
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
            <Link to="/cart">
              <img className="linkCart" src={cart} alt="cart" />
            </Link>
            {props.count ? (
              <span className="cartCount">{props.count}</span>
            ) : (
              ''
            )}

            <Link
              to="#"
              className="avatarLink"
              onClick={() => props.onAvatarClicked()}
            >
              <img className="avatar" src={avatar} alt="avatar" />
            </Link>
          </div>
        </nav>
      </header>
      <CartBox count={props.count} onItemDelete={props.onItemDelete} />
    </>
  )
}

export default Header
