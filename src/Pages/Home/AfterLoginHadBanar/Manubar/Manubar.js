import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner/Spinner";
import { APIContext } from "../../../../contexts/APIProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Menubar.css";
// import required modules
import { Navigation } from "swiper";
const Manubar = () => {
  const { categoryButton, isDarkMode, isCategoryLoading } =
    useContext(APIContext);
  // const [swiperRef, setSwiperRef] = useState(null);
  if (isCategoryLoading) {
    return <Spinner />;
  }
  return (
    <div className="hidden md:block" style={{ width: "100%" }}>
      <ul
        className={
          isDarkMode
            ? "bg-black-350 menu menu-vertical lg:menu-horizontal border my-8 w-full items-center rounded-md"
            : "menu menu-vertical lg:menu-horizontal bg-base-100 border my-8 w-full items-center rounded-md"
        }
        style={{ width: "100%", alignItems: "center" }}
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // onSwiper={setSwiperRef}
          // slidesPerView={5}
          centeredSlides={true}
          // spaceBetween={40}
          // pagination={{
          //   type: "function",
          // }}
          // navigation={true}
          className="flex mySwiper"
        >
          {categoryButton.map((category) => (
            <SwiperSlide
              className="py-3 mr-0 font-bold"
              style={{
                width: "16px",
                marginRight: 0,
              }}
              key={category?._id}
            >
              <Link
                to={`/category/${category?.CategoryName.split("-")}`}
                className={
                  isDarkMode ? "text-gray-100 p-2" : "p-2 text-gray-900"
                }
              >
                {category?.CategoryName}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default Manubar;
