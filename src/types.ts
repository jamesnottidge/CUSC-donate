import { string } from "prop-types";

export type Transaction = {
  id: number;
  tx_ref: string;
  flw_ref: string;
  device_fingerprint: string;
  amount: number;
  currency: string;
  charged_amount: number;
  app_fee: number;
  merchant_fee: number;
  processor_response: string;
  auth_model: string;
  ip: string;
  narration: string;
  status: string;
  payment_type: string;
  created_at: string;
  amount_settled: number;
  card: {
    type: string;
    country: string;
    issuer: string;
    first_6digits: string;
    last_4digits: string;
    expiry: string;
  };
  customer: {
    id: number;
    email: string;
    phone_number: string;
    name: string;
    created_at: string;
  };
  account_id: number;
  meta: {
    __CheckoutInitAddress: string;
    productpages: string;
    paypal_stc: string;
    itemsdata: string;
  };
};
