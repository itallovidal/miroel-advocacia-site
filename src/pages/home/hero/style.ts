import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const HeroWrapper = styled(Wrapper, {
  color: 'white',
  minHeight: '60vh',
  overflow: 'hidden',
  zIndex: 10,
  padding: '2rem',

  '& > div': {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    height: '50vh',
    zIndex: 10,
  },
})

export const HeroContent = styled('div', {
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',

  picture: {
    width: 'fit-content',
  },

  p: {
    maxWidth: '54ch',
  },
})

export const Watermark = styled('picture', {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  width: 'fit-content',
  height: '50vh',
  display: 'block',

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
})
