import React, { useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import { AuthContext } from "../../contexts/AuthProvider";
import WhoToFollow from "./WhoToFollow";
import SideCategoryButton from "./SideCategoryButton/SideCategoryButton";
import StaffPicks from "./StaffPicks";

const SideCategory = () => {
  const { categoryButton, isCategoryLoading } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);

  if (isCategoryLoading) {
    return <Spinner />;
  }
  return (
    <div className="lg:sticky lg:top-0 hidden lg:block">
      {user && <StaffPicks />}
      <div className="ml-5">
        <p
          className={
            isDarkMode
              ? "text-base font-semibold text-gray-300 my-3 lg:ml-0"
              : "text-base font-semibold text-gray-800 my-3 lg:ml-0"
          }
        >
          {user ? (
            <span>Recommended topics</span>
          ) : (
            <span>DISCOVER MORE OF WHAT MATTERS TO YOU</span>
          )}
        </p>
        <div className="lg:flex flex-wrap lg:gap-3 gap-2 grid grid-cols-2 mt-4 lg:mt-0">
          {categoryButton.map((category) => (
            <SideCategoryButton
              key={category?._id}
              category={category}
            ></SideCategoryButton>
          ))}
        </div>
      </div>
      {user && <WhoToFollow></WhoToFollow>}
    </div>
  );
};

export default SideCategory;
