import {HTMLAttributes} from "react";
import {FieldWrapper, TextArea, ErrorMessage, CustomInput} from "./style.ts";

interface IProps extends HTMLAttributes<HTMLInputElement> {
    field: string
    isMultiline?: boolean
    wrapperStyle?: object
    errorMessage?: string
}

export function Input({
                          field,
                          isMultiline = false,
                          wrapperStyle,
                          errorMessage = undefined,
                          ...rest
                      }: IProps) {

    if (isMultiline) {
        return (
            <FieldWrapper style={{...wrapperStyle}}>
                <label>{field}</label>
                <TextArea {...rest as HTMLAttributes<HTMLTextAreaElement>}/>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </FieldWrapper>
        )
    }

    return (
        <FieldWrapper style={{...wrapperStyle}}>
            <label>{field}</label>
            <CustomInput
                type={'text'}
                {...rest}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FieldWrapper>
    )
}