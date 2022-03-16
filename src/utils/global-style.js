import { scale, verticalScale } from 'react-native-size-matters';

module.exports = {
  dynamic_size: (size) => {return verticalScale(size)},
  colors: {
    background: '#000000',
    selected: '#FFA500',
    color1: '#bfbfbf',
    color2: '#242424',
  },
  text1: {
    size: verticalScale(10),
  },
}
