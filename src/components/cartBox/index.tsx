import './cartbox.scss'
import iconProduct1 from '../../images/image-product-1-thumbnail.jpg'
import iconDelete from '../../images/icon-delete.svg'

type CartBoxProps = {
  count: number
  onItemDelete: () => void
}

const CartBox = (props: CartBoxProps) => {
  const getTotalCost = () => 125 * props.count
  return (
    <div className="cartContainer">
      <div className="title">Cart</div>
      {props.count ? (
        <>
          <div className="cartItems">
            <img src={iconProduct1} alt="iconProduct" />
            <p className="checkout-desc">
              Fall Limited Edition Sneakers $125.00 x {props.count}
              <span className="total">{` $ ${getTotalCost()}`}</span>
            </p>
            <img
              src={iconDelete}
              onClick={props.onItemDelete}
              className="iconDelete"
              alt="icon-delete"
            />
          </div>
          <div className="checkOut">CheckOut</div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default CartBox
