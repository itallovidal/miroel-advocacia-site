import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const FormWrapper = styled(Wrapper, {
    '@mobile': {
        paddingTop: '7rem',

        h2: {
            fontSize: '1rem',
            lineHeight: '1.8rem',
            fontWeight: 'bold',
        },
    },

    '& > div': {
        // justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '3rem',

        p: {
            marginBottom: '1rem',
            maxWidth: '64ch',
        },
    },
})


export const AboutWrapper = styled('div', {
    '& span':{
        display: 'block',
    },

    '& div:nth-child(1), & div:nth-child(2n + 1) ':{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',

        '& h3':{
          marginBottom: '0rem',
        },

        '& svg':{
            width: '2rem',
        },
    },

    '& div:nth-child(2n)':{
        paddingLeft: '2rem',
        marginLeft: '1rem',
        borderLeft: '1px solid black',
        marginBottom: '1rem',
    }

})

export const FormContent = styled('form', {
    flexGrow: 1,
    '& button':{
        fontSize: '1rem',
    }
})
