import { scale, verticalScale } from 'react-native-size-matters';

module.exports = {
  dynamicSize: (size) => {return verticalScale(size)},
  colors: {
    background: '#000000',
    selected: '#FFA500',
    color1: '#bfbfbf',
    color2: '#000000',
    color3: '#404040',
    color4: 'white',
  },
  text1: {
    size: verticalScale(10),
  },
  text2: {
    size: verticalScale(13),
  }
}
