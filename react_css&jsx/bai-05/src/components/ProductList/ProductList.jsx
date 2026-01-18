import "./ProductList.css";
import productImg from "../../assets/product_img.webp"; 

function ProductList() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container">
      <h1>Danh Sách Sản Phẩm</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item} className="product-item">
            <div className="product-image-wrapper">
               <img src={productImg} alt="product" />
            </div>
            <div className="product-info">
              <h3>Sản phẩm {item}</h3>
              <p>500.000 VNĐ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;