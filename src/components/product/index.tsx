import './product.scss'
import { useState } from 'react'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import iconPlus from '../../images/icon-plus.svg'
import iconMinus from '../../images/icon-minus.svg'
import iconCart from '../../images/icon-cart.svg'

type IncrementDecrementProps = {
  onIncrement: () => void
  onDecrement: () => void
  onItemAddToCart: () => void
  count: number
}

const Product = (props: IncrementDecrementProps) => {
  const [imageIndex, setImageIndex] = useState(1)

  const handleProduct = (productId: number) => {
    if (productId === 1) {
      setImageIndex(1)
    }
    if (productId === 2) {
      setImageIndex(2)
    }
    if (productId === 3) {
      setImageIndex(3)
    }
    if (productId === 4) {
      setImageIndex(4)
    }
  }

  const productImage =
    imageIndex === 1
      ? product1
      : imageIndex === 2
      ? product2
      : imageIndex === 3
      ? product3
      : product4

  return (
    <div className="product">
      <div className="productImg">
        <img src={productImage} className="productMain" alt="productImg" />
        <div className="productThumbnails">
          <img
            src={thumbnail1}
            className={`thumbnail 1 ${imageIndex === 1 ? 'clicked' : ''}`}
            alt="thumbnail1"
            onClick={() => handleProduct(1)}
          />
          <img
            src={thumbnail2}
            className={`thumbnail 2 ${imageIndex === 2 ? 'clicked' : ''}`}
            alt="thumbnail2"
            onClick={() => handleProduct(2)}
          />
          <img
            src={thumbnail3}
            className={`thumbnail 3 ${imageIndex === 3 ? 'clicked' : ''}`}
            alt="thumbnail3"
            onClick={() => handleProduct(3)}
          />
          <img
            src={thumbnail4}
            className={`thumbnail 4 ${imageIndex === 4 ? 'clicked' : ''}`}
            alt="thumbnail4"
            onClick={() => handleProduct(4)}
          />
        </div>
      </div>
      <div className="productDesc">
        <p className="companyTitle">sneaker company</p>
        <p className="companySubtitle">Fall Limited Edition Sneakers</p>
        <p className="productDescription">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <div className="mainPrice">
            <p className="discountedPrice">$125.00</p>
            <p className="originalPrice">$250.00</p>
          </div>
          <div className="discountPercent">
            <span className="percentDis">50%</span>
          </div>
        </div>
        <div className="productBtns">
          <button type="button" className="firstBtn">
            <img src={iconPlus} alt="addProduct" onClick={props.onIncrement} />
            <span className="count">{props.count}</span>
            <img
              src={iconMinus}
              alt="deleteProduct"
              onClick={props.onDecrement}
            />
          </button>
          <button
            type="button"
            className="secondBtn"
            onClick={() => props.onItemAddToCart()}
          >
            <img src={iconCart} alt="iconCart" />
            <span className="btnText">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
