"use client";
import { useBkash } from "react-bkash";
export const Checkout = () => {
  const { error, loading, triggerBkash } = useBkash({
    onSuccess: (data) => {
      console.log(data); // this contains data from api response from onExecutePayment
    },
    onClose: () => {
      console.log("Bkash iFrame closed");
    },
    bkashScriptURL: "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js", // https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js
    amount: 1000,
    onCreatePayment: async (paymentRequest) => {
      console.log("payment request", paymentRequest);

      // call your API with the payment request here
      return await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/checkouts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
        },
        body: JSON.stringify(paymentRequest),
      }).then((res) => res.json());

      // must return the following object:
      // {
      // 	paymentID: string;
      // 	createTime: string;
      // 	orgLogo: string;
      // 	orgName: string;
      // 	transactionStatus: string;
      // 	amount: string;
      // 	currency: string;
      // 	intent: string;
      // 	merchantInvoiceNumber: string;
      // }
    },
    onExecutePayment: async (paymentID) => {
      // call your executePayment API here
      return await fetch("<your backend api>/execute/${paymentID}", {
        method: "POST",
      }).then((res) => res.json());

      // it doesn't matter what you return here, any errors thrown here will be available on error return value of the useBkash hook
    },
  });

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <button style={{ backgroundColor: "red" }} onClick={triggerBkash}>
        Pay with bKash
      </button>
    </div>
  );
};
