import { ProductsProvider } from "./context/products";
import Homepage from "./pages";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
      <Homepage />
      </ProductsProvider>
    </div>
  );
}

export default App;
