import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'
import coursebg from '../../../assets/background_couse.png'
import coursebgmobile from '../../../assets/background_couse_mobile.jpg'

export const ContactWrapper = styled(Wrapper, {

  '@mobile': {
    paddingTop: '7rem',

    h2: {
      fontSize: '1rem',
      lineHeight: '1.8rem',
      fontWeight: 'bold',
    },
  },

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

export const Separator = styled('span', {
  marginBottom: '1rem',
  textTransform: 'uppercase',
  position: 'relative',
  width: '100%',
  maxWidth: '200px',
  textAlign: 'center',
  background: 'transparent',

  '&:before': {
    position: 'absolute',
    content: '',
    height: '1px',
    background: 'black',
    width: '100%',
    top: '50%',
    left: '-50%',
    transform: 'translateX(50%)',
    zIndex: 1,
  },

  '& span':{
    background: 'white',
    zIndex: 2,
    padding: '.5rem',
    position: 'relative',
  }
})
