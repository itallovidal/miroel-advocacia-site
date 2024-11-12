import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const HeroWrapper = styled(Wrapper, {
  color: 'white',
  minHeight: '60vh',
  zIndex: 10,
  padding: '2rem',
  backgroundColor: 'red',
  position: 'relative',

  '& > div': {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50vh',
    zIndex: 10,
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

  p: {
    maxWidth: '54ch',
  },
})

export const HeroFooter = styled('div', {
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  paddingTop: '1rem',

})

export const Watermark = styled('picture', {
  position: 'absolute',
  opacity: 0.7,
  top: 0,
  right: 0,
  zIndex: 1,
  width: '100%',
  display: 'block',
  backgroundColor: 'blue',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})
