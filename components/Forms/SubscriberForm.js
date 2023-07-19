import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FooterForm } from "../../styles/FooterCss";
import { TextInput, TextInputWrapper, InputErrors } from "../../styles/FormCSS";
import { CustomButton, FormLoader } from "../../styles/GlobalCss";
import { SubscribeValidationSchema } from "../../utils/validations";
import { useEmailSubscriptionMutation } from "../../redux/services/siteApiSlice";

const SubscriberForm = () => {
  const [
    contactUs,
    { data: isSubscription, isLoading, isSuccess, isError, error },
  ] = useEmailSubscriptionMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SubscribeValidationSchema),
  });

  const mailingList = async (data) => {
    const payload = {
      subscriber_email_address: data.mailingAddress,
    };

    try {
      const subscriptionRes = await contactUs(payload);
      return subscriptionRes;
    } catch (err) {
      console.log("error response", err.response);
    }
    reset();
  };

  useEffect(
    () => {
      if (isError) {
        toast.warning(error?.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }

      if (isSuccess) {
        reset();
        toast.success(isSubscription?.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSubscription, isError, isSuccess, error]
  );
  return (
    <FooterForm onSubmit={handleSubmit(mailingList)}>
      <TextInputWrapper flexDirection="column">
        <TextInput
          className={`${errors.mailingAddress ? "invalid" : ""}`}
          name="subcriberMail"
          placeholder="Email Address"
          marginLeft="0"
          {...register("mailingAddress")}
        />
        {errors.mailingAddress && (
          <InputErrors>{errors.mailingAddress.message}</InputErrors>
        )}
      </TextInputWrapper>
      <TextInputWrapper>
        <CustomButton
          disabled={isLoading ? true : false}
          textTransform="uppercase"
          background="var(--theme-color)"
          border="1px solid var(--gradient-color-2)"
          fontSize="12px"
          lineHeight="24px"
          color="var(--white)"
        >
          {isLoading ? (
            <FormLoader
              width="15px"
              height="15px"
              border="2px solid var(--white)"
            />
          ) : (
            "Submit"
          )}
        </CustomButton>
      </TextInputWrapper>
    </FooterForm>
  );
};

export default SubscriberForm;
