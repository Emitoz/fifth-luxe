import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { ProductsContext } from "../context/products";
import Product from './../components/Product';

const Homepage = () => {
  const { products } = useContext(ProductsContext);

  return ( 
    <div>
      <NavBar />
      
      <section className="products">
        <div className="container">
          <div className="products-grid">
            { products && products.map(product => (
              <Product key={ product.id } product={ product }/>
            )) }
          </div>
        </div>
      </section>

      <Footer />
    </div>
   );
}
 
export default Homepage;