import Header from "../components/Header/Header";
import OrdersGrid from "../components/OrdersGrid/OrdersGrid";

const Orders = () => {
  return (
    <>
      <header>
        <Header rightNav="View Products" rightNavLink="/products" />
      </header>
      <div className="mt-30 mb-30 max-w-300 mx-auto px-8">
        <h1 className="text-6xl font-semibold mb-8">My Orders</h1>
        <OrdersGrid />
      </div>
    </>
  );
};

export default Orders;
