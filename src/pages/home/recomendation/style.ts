import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'
import recommendationBackground from '../../../assets/images/recomendation.jpg'

export const RecommendationWrapper = styled(Wrapper, {
  color: 'white',
  backgroundImage: `url(${recommendationBackground}) !important`,
  backgroundSize: 'cover !important',
  backgroundRepeat: 'no-repeat !important',
  backgroundPositionX: 'left',
    position: 'relative',

    '&:before':{
      position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: '',
        background: 'black',
        opacity: 0.6,
        zIndex: 2,
    },

  '@mobile': {
    // backgroundImage: `url(${coursebgmobile}) !important`,
    paddingTop: '7rem',
    h2: {
      fontSize: '1rem',
      lineHeight: '1.8rem',
      fontWeight: 'bold',
    },
  },

  '& > div': {
    flexDirection: 'column',
  alignItems: 'flex-end',

    p: {
      marginBottom: '1rem',
      maxWidth: '64ch',
    },
  },

})

export const RecommendationContent = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
position: 'relative',
zIndex: 2,

    '& > div:nth-child(1) h2':{
      marginBottom: '0rem',
    }
})

export const RecommendationPost = styled('div', {
    borderBottom: '1px solid white',
    paddingBlock: '2rem',
})

export const ProfileWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1rem',
    alignItems: 'center',

  '& picture': {
      width: '50px',
      height: '50px',
      overflow: 'hidden',
      borderRadius: '50%',
  },

  '& div span':{
      display: 'block',
  }
})