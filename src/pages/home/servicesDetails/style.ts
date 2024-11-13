import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const BoxWrapper = styled('div', {
  display: 'flex',
  gap: '.1rem',

  '@mobile': {
    flexDirection: 'column',
  },
})

export const ServicesWrapper = styled(Wrapper, {
  background: '$gray200',
  '& > div': {
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    color: 'black',
  },


})

export const ServiceBox = styled('div', {
  background: '$gray100',
  // width: 'calc(50% - .5rem)',
  transition: '200ms',
  cursor: 'pointer',
  flexGrow:1,
  '&:hover': {
    color: 'white',
    background: 'black',
  },

  '@mobile': {
    width: '100%',
  },

  '& > picture':{
    height: '200px',

    '& > img':{
      width: '100%',
      height: '200px',
    }
  },

  '& > div':{
    padding: '1.4rem',
  },
  p: {
    marginBlock: '1.4rem',
    textJustify: 'distribute',
    textAlignLast: 'left',
    textAlign: 'left',
    hyphens: 'auto',
  },
})
