import { styled } from '../../styles/theme.ts'
import { Wrapper } from '../../styles'

export const FooterWrapper = styled(Wrapper, {
  width: '100%',
  padding: '6rem',
  background: 'white',

  '@mobile': {
    padding: '2rem',
  },

  '& > div': {
    maxWidth: '68.75rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',

    '@mobile': {
      flexDirection: 'column',
    },
  },

  picture: {
    width: '4.4rem',
  },
})

export const AddressWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > div': {
    marginBlock: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

export const ContactWrapper = styled('div', {
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  alignItems: 'flex-end',
  color: 'black',

  '@mobile': {
    alignItems: 'flex-start',
  },
})
