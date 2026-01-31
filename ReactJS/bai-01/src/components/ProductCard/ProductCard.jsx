import "./ProductCard.css";
import productImg from "../../assets/product_img.webp";

function ProductCard() {
  return (
    <div className="ProductCard">
      <div className="image">
        <img src={productImg} alt="Sản phẩm" />
      </div>

      <div className="information">
        <p className="ProductName">Bình giữ nhiệt</p>
        <p className="ProductPrice">200.000đ</p>
        <button>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
