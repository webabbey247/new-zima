import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

const contactValidationSchema = yup.object().shape({
  fullName: yup.string().trim().required("Kindly provide your full name!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .test("name", "Kindly provide a valid mobile number!", (value) =>
      isValidPhoneNumber(value || "")
    )
    .required("Field required")
    .nullable(),
  enquiry: yup
    .string()
    .trim()
    .required("Kindly explain more about your enquiries!"),
});

const SubscribeValidationSchema = yup.object().shape({
  mailingAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
});

export { contactValidationSchema, SubscribeValidationSchema };
