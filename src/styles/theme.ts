import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
    theme: {},
    media: {
        mobile: '(max-width: 640px)',
        desktop: '(min-width: 640px)',
        // bp2: '(min-width: 768px)',
        // bp3: '(min-width: 1024px)',
    },
})