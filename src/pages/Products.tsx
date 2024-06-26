import Breadcrumbs from "@components/shared/Breadcrumbs";
// componenet
import CartBox from "@components/cart/CartBox";
import ProductFilter from "@components/products/ProductFilter"
// SVG
import MobileBanner from "../assets/images/productswiper3.png";
import DesktopBanner from "../assets/images/productswiper4.png";
import product1 from "../assets/images/productImg(1).png";
const Products: React.FC = () => {
  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "shopAll", href: "/products" },
  ];

  // product data
  const products = [
    {
      id: 1,
      image: product1,
      title: "chill wrap top",
      off: null,
      newproduct: false,
      color: ["#CA2929"],
      price: 160,
      oldPrice: null,
      desc: "Turn it up Top ",
    },
    {
      id: 2,
      image: product1,
      title: "Essential T-shirt",
      off: "20%",
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 95,
      oldPrice: 120,
      desc: "Turn it up T-shirt",
    },
    {
      id: 3,
      image: product1,
      title: "Shirt Dress",
      off: null,
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 245,
      oldPrice: null,
      desc: "Turn it up Dress",
    },
    {
      id: 4,
      image: product1,
      title: "Rule zip Jacket",
      off: null,
      newproduct: false,
      color: ["#909225", "#CA6D29"],
      price: 199,
      oldPrice: null,
      desc: "Turn it up Jacket",
    },
    {
      id: 5,
      image: product1,
      title: "New Age Linen",
      off: "30%",
      newproduct: false,
      color: ["#0C0C0C", "#19418E", "#748C70"],
      price: 180,
      oldPrice: 240,
      desc: "Turn it up Pants",
    },
    {
      id: 6,
      image: product1,
      title: "Boss Pullover",
      off: null,
      newproduct: false,
      color: ["#0C0C0C", "#748C70"],
      price: 280,
      oldPrice: 350,
      desc: "Turn it up Pullover",
    },
  ];

  return (
    <div className="w-full px-5">
      <div className="my-6">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      {/* banner */}
      <div className="flex justify-center items-center -mx-5">
        <img src={MobileBanner} className="block customResolution:hidden" />
        <img src={DesktopBanner} className="hidden customResolution:block" />
      </div>
      {/*mobile filter */}
      <div className="w-full flex flex-row-reverse justify-center items-center gap-x-1 mt-6 sm:hidden">
        <span className="text-[14px]">Filter</span>
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14V16H6V14H0ZM0 2V4H10V2H0ZM10 18V16H18V14H10V12H8V18H10ZM4 6V8H0V10H4V12H6V6H4ZM18 10V8H8V10H18ZM12 6H14V4H18V2H14V0H12V6Z"
              fill="#0C0C0C"
            />
          </svg>
        </span>
      </div>
      {/* product */}
      <div className="sm:flex sm:justify-center sm:items-start sm:gap-x-6 mt-6">
        {/* desktop filter */}
        <ProductFilter />
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4">
            {products.map((item, index) => (
              <div key={index}>
                <CartBox
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  colors={item.color}
                  productImg={item.image}
                  alt={item.title}
                  newProduct={item.newproduct}
                  oldPrice={item.oldPrice}
                />
              </div>
            ))}
          </div>
          {/* button */}
          <div className="w-full flex justify-center items-center">
            <button className="min-w-max flex justify-center items-center py-5 px-10 h-4 border-[1px] border-primary-600 text-[14px] text-primary-600">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
