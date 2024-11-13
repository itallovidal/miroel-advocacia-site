import { styled } from '../../styles/theme.ts'

export const WrapperDesktop = styled('div', {
  width: '100%',
  padding: '1rem',
  background: 'black',
  position: 'fixed',
  top: 0,
  zIndex: 100,

  '@mobile': {
    display: 'none',
  },

  '&  button': {
    fontSize: '1rem',
  },

  '& > div': {
    maxWidth: '68.75rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '2rem',

  },

  picture: {
    width: '4.4rem',
  },

  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',

    a: {
      color: 'white',
    },
  },
})

export const WrapperMobile = styled('div', {
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
  left: '0',
  top: '0',
  zIndex: 100,

  '@desktop': {
    display: 'none',
  },

  '@mobile':{
    svg: {
      color: 'white',
    },
  },

  variants: {
    display: {
      open: {
        '&:before': {
          display: 'initial',
        },
      },
      closed: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },

  '&:before': {
    position: 'fixed',
    zIndex: -1,
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    content: '',
    background: 'black',
    opacity: 0.6,
  },

  picture: {
    display: 'block',
    width: 'fit-content',
    padding: '1rem',

    img: {
      width: '2.5rem',
    },
  },
})

export const NavbarModal = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  gap: '1rem',
  height: '100vh',
  width: '80%',
  left: '0',
  top: '0',
  transition: '300ms',
  background: 'white',
  zIndex: 100,
  position: 'absolute',

  variants: {
    transform: {
      open: {
        transform: 'translateX(0%)',
      },
      closed: {
        transform: 'translateX(-100%)',
      },
    },
  },
})
