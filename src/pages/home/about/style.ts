import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const AboutWrapper = styled(Wrapper, {
  color: 'black',
  '& > div':{
    position: 'relative',
    gap: '4rem',

  },

  '@mobile': {
    '& > div': {
      flexDirection: 'column',

    },
  },
})

export const AboutDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  p: {
    textAlign: 'justify',
  },
})

export const ProfileWrapper = styled('div', {
  minWidth: '40%',
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',

  '& > picture':{
    height: 'fit-content',
    position: 'sticky',
    top: 100,
  },

  span: {
    marginBlock: '1rem',
    fontSize: '2rem',
  },
})
