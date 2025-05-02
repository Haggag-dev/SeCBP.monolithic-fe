import Header from "../components/Header/Header";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const Products = () => {
  return (
    <>
      <header>
        <Header
          addProductLinks={true}
          rightNav="Your Orders"
          hideRightNav={true}
          rightNavLink="/orders"
        />
      </header>
      <main className="mt-30 mb-30 max-w-300 mx-auto w-full">
        <ProductsGrid />
      </main>
    </>
  );
};

export default Products;
