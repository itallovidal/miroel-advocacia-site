import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'
import heroBackground from '../../../assets/images/hero-background.jpg'

export const HeroWrapper = styled(Wrapper, {
  color: 'white',
  minHeight: '60vh',
  zIndex: 10,
  padding: '2rem',
  backgroundColor: 'black',
  position: 'relative',

  '@mobile':{
    marginTop: '0rem !important',
  },

  '&:before':{
    content: ' ',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    backgroundImage: `url(${heroBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover !important',
    backgroundAttachment: 'fixed',
    backgroundPositionY: 'bottom',

    '@mobile':{
      backgroundPositionY: 'center',
      backgroundAttachment: 'initial',
    },
  },


  '& > div': {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50vh',
    zIndex: 10,
    marginTop: '5.6rem',
  },
})

export const HeroContent = styled('div', {
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,

  picture: {
    width: 'fit-content',
  },

  '@mobile':{
    h1:{
      fontSize: '2.8rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    }
  },

  p: {
    maxWidth: '25ch',
    color: '$gold500',
    textAlign: 'center',
  },
})

export const HeroFooter = styled('div', {
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  paddingTop: '1rem',

  '& > div > div':{
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
  },

  '@mobile':{
    flexDirection: 'column',

    '& > div ':{
      width: '100%',
    },
  }
})

// export const Watermark = styled('picture', {
//   position: 'fixed',
//   opacity: 0.7,
//   top: 0,
//   right: 0,
//   zIndex: 1,
//   width: '100%',
//   display: 'block',
//
//   img: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// })
