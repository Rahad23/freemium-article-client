import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API_URL}/users/admin/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch((err) => {
          // navigate("/");
        });
      // .finally({
      //   setIsAdminLoading()
      // })
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
