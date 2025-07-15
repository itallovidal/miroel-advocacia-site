import { HTMLAttributes, forwardRef } from "react";
import { FieldWrapper, TextArea, ErrorMessage, CustomInput } from "./style.ts";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  field: string;
  isMultiline?: boolean;
  wrapperStyle?: object;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, IProps>(
  (
    {
      field,
      isMultiline = false,
      wrapperStyle,
      errorMessage = undefined,
      ...rest
    },
    ref
  ) => {
    if (isMultiline) {
      return (
        <FieldWrapper style={{ ...wrapperStyle }}>
          <label>{field}</label>
          <TextArea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(rest as HTMLAttributes<HTMLTextAreaElement>)}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FieldWrapper>
      );
    }

    return (
      <FieldWrapper style={{ ...wrapperStyle }}>
        <label>{field}</label>
        <CustomInput
          type={"text"}
          ref={ref as React.Ref<HTMLInputElement>}
          {...rest}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FieldWrapper>
    );
  }
);
