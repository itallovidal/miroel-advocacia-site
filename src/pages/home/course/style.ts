import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'
import coursebg from '../../../assets/background_couse.png'
import coursebgmobile from '../../../assets/background_couse_mobile.jpg'

export const CourseWrapper = styled(Wrapper, {
  color: 'white',
  backgroundImage: `url(${coursebg}) !important`,
  backgroundSize: 'contain !important',
  backgroundRepeat: 'no-repeat !important',
  backgroundPositionX: 'right !important',

  '@mobile': {
    backgroundImage: `url(${coursebgmobile}) !important`,
    paddingTop: '7rem',

    h2: {
      fontSize: '1rem',
      lineHeight: '1.8rem',
      fontWeight: 'bold',
    },
  },

  '& > div': {
    flexDirection: 'column',

    p: {
      marginBottom: '1rem',
      maxWidth: '64ch',
    },
  },
})
