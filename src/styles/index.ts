import { globalCss, styled } from './theme.ts'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    a: {
        textDecoration: 'none',
        color: 'black',
    },

    p: {
        fontSize: '1rem',
        lineHeight: '2rem',
    },

    h1: {
        fontSize: '4rem',
        fontWeight: 'normal',
        marginBottom: '2rem',
    },

    h2: {
        fontSize: '2rem',
        fontWeight: 'normal',
        marginBottom: '2rem',
    },

    h3: {
        fontSize: '1.4rem',
        fontWeight: 'normal',
        marginBottom: '1rem',
        lineHeight: '2rem',
    },

    h4: {
        fontSize: '1rem',
        fontWeight: 'normal',
    },

    '*:link, *:active': {
        textDecoration: 'none',
    },

    main: {
        opacity: 0,
        transform: 'translateY(100px)',
        // animation: `${show} 500ms forwards`
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto Serif',
        fontWeight: 400,
    },

    'svg':{
        color: '$gold500',
    },
    'a, button, p, span':{
        fontFamily: 'Roboto, sans-serif',
    },

    picture: {
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',

        img: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
    },

    '@mobile': {
        p: {
            fontSize: '1rem',
        },

        h1: {
            fontSize: '2rem',
            marginBottom: '1.2rem',
        },

        h2: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },

        h3: {
            fontSize: '1.15rem',
            marginBottom: '1rem',
        },
    },
})

export const Button = styled('button', {
    width: 'fit-content',
    padding: '1rem',
    fontSize: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '1px solid transparent',

    variants: {
        variantType: {
            dark: {
                background: '$gold500',
                color: 'white',
                fontFamily: 'Roboto, sans-serif',

                '&:hover': {
                    background: 'white',
                    color: 'black',
                },
            },
            light: {
                background: 'white',
                color: 'black',

                '&:hover': {
                    background: 'black',
                    color: 'white',
                    border: '1px solid white',
                },
            },
        },
    },

    defaultVariants: {
        variantType: 'dark',
    },
})

export const Wrapper = styled('section', {
    width: '100%',
    padding: '1rem',
    paddingBlock: '5rem',

    '@mobile': {
        padding: '1rem',
    },

    // variants: {
    //     background: {
    //         white: {
    //             background: 'white',
    //         },
    //         black: {
    //             background: 'black',
    //         },
    //         gray: {
    //             background: '#161616',
    //         },
    //     },
    // },
    //
    // defaultVariants: {
    //     background: 'white',
    // },

    '& > div': {
        maxWidth: '68.75rem',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
})