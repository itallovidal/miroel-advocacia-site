import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const AboutWrapper = styled(Wrapper, {
  '@mobile': {
    '& > div': {
      flexDirection: 'column',
    },
  },
})

export const AboutDetails = styled('div', {
  color: 'white',
  padding: '2rem',

  p: {
    textAlign: 'justify',
    wordBreak: 'break-all',
  },
})

export const ProfileWrapper = styled('div', {
  minWidth: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    marginBlock: '1rem',
    fontSize: '2rem',
    color: 'white',
  },
})
