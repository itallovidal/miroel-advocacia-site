import { createStitches } from '@stitches/react'

export const { styled, globalCss, theme } = createStitches({
    theme: {
        colors: {
            gold500: '#B1976B',
            gray100: 'hsl(206,22%,99%)',
            gray200: 'hsl(206,12%,97%)',
            gray300: 'hsl(206,11%,92%)',
            gray400: 'hsl(206,10%,84%)',
            gray500: 'hsl(206,10%,76%)',
            gray600: 'hsl(206,10%,44%)',
        }
    },
    media: {
        mobile: '(max-width: 640px)',
        desktop: '(min-width: 640px)',
        // bp2: '(min-width: 768px)',
        // bp3: '(min-width: 1024px)',
    },
})