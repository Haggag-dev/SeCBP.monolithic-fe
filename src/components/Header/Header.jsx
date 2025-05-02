import { Link } from "react-router";
import BurgerMenu from "./BurgerMenu";
import DesktopMenuLinks from "./DesktopMenuLinks";
import MobileMenuLinks from "./MobileMenuList";

const Header = ({ addProductLinks, rightNav, hideRightNav, rightNavLink }) => {
  const allLinks = ["All Products", "Clothes", "Books", "Your Orders"];
  const productLinks = ["All", "Clothes", "Books"];

  return (
    <div className="fixed top-0 mb-10 flex flex-col w-full bg-neutral-300 text-neutral-500">
      <div className="flex items-center justify-center px-8 w-full h-16">
        <div className="flex max-h-8 h-full items-center justify-between w-full max-w-300">
          <div className="flex items-end gap-x-8 max-w-75 w-75">
            <Link to="/products" className="text-sm font-bold text-black">
              S-STORE
            </Link>
            {addProductLinks ? <DesktopMenuLinks links={productLinks} /> : null}
          </div>
          <div className="flex items-end">
            <Link
              to={rightNavLink}
              className={`${
                hideRightNav ? "hidden" : null
              } sm:block text-sm font-semibold cursor-pointer hover:text-black`}
            >
              {rightNav}
            </Link>
            <div className="sm:hidden">
              {addProductLinks ? <BurgerMenu /> : null}
            </div>
          </div>
        </div>
      </div>
      {addProductLinks ? (
        <MobileMenuLinks links={allLinks} rightNavLink={rightNavLink} />
      ) : null}
    </div>
  );
};

export default Header;
