import {styled} from "@stitches/react";
import {Wrapper} from "../../../styles";

export const SliderWrapper = styled(Wrapper, {
    color: 'black',

    '& > div': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        p: {
            marginBottom: '1rem',
            maxWidth: '64ch',
        },
    },
})

export const Slider = styled('div', {
})

export const Brand = styled('picture', {

})