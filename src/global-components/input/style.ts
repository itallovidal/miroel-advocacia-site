import {styled} from "@stitches/react";

export const FieldWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBlock: '1rem'
})

export const TextArea = styled('textarea', {
    resize: 'none',
    height: '100%',
    lineHeight: '2rem',
    gap: 12,
    backgroundColor: '$gray200',
    padding: '.5rem',
    border: '1px solid $gray400',
})

export const ErrorMessage = styled('span', {
    color: 'red',
})

export const CustomInput = styled('input', {
    padding: '.5rem',
    backgroundColor: '$gray200',
    border: '1px solid $gray400',
})
