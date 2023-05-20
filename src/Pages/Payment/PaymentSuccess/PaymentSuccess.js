import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { APIContext } from "../../../contexts/APIProvider";

const PaymentSuccess = () => {
  const [paymentUser, setPaymentUser] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const { isDarkMode } = useContext(APIContext);
  const transactionId = query.get("transactionId");
  //
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/payment-user/${transactionId}`)
      .then((res) => res.json())
      .then((data) => setPaymentUser(data));
  }, [transactionId]);

  return (
    <div>
      <h1 className="text-4xl text-center text-sky-700 my-2">
        Congratulation Successfully Paid..
      </h1>
      <h2 className="text-2xl text-center text-orange-600 my-3">
        Payment history
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-9 mx-20 my-10">
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl">User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Name</td>
                  <td className="text-center">{paymentUser.name}</td>
                </tr>

                <tr className="active">
                  <td className="text-center">Email</td>
                  <td className="text-center">{paymentUser.email}</td>
                </tr>

                <tr>
                  <td className="text-center">Phone Number</td>
                  <td className="text-center">{paymentUser.phone}</td>
                </tr>
                <tr className="active">
                  <td className="text-center font-bold">Transaction ID</td>
                  <td className="text-center font-bold">
                    {paymentUser.transactionId}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl">Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Taka</td>
                  <td className="text-center">{paymentUser.amount} Tk</td>
                </tr>

                <tr>
                  <td className="text-center">Tax</td>
                  <td className="text-center">00 Tk</td>
                </tr>

                <tr className="active">
                  <td className="text-lg text-center font-bold">Total</td>
                  <td className="text-lg text-center font-bold">
                    {paymentUser.amount} Tk
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-center font-bold my-3">
          Save your transaction ID for later use
        </h4>

        <h4 className="text-2xl text-center font-bold my-3 print:hidden">
          <Link className="text-blue-600 underline underline-offset-4" to="/">
            <PrimaryButton
              classes={
                isDarkMode
                  ? "bg-black-250 text-white px-8 py-3 font-semibold rounded"
                  : "bg-black-250 text-white px-8 py-3 font-semibold rounded"
              }
            >
              Back to Homepage
            </PrimaryButton>
          </Link>
        </h4>
        <button
          onClick={() => window.print()}
          className="btn btn-outline btn-primary btn-wide my-5 mx-4 ml-auto block print:hidden"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
