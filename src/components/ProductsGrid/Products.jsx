import Header from "../Header/Header";

const Products = () => {
  return (
    <header>
      <Header
        addProductLinks={true}
        rightNav="Your Orders"
        hideRightNav={true}
        rightNavLink="/orders"
      />
    </header>
  );
};

export default Products;
