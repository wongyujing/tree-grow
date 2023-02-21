import { View } from '@tarojs/components';

import './index.less';

const TimeTip = () => {
  const getDays = (leftTime) => {
    return Math.floor(leftTime / (1000 * 60 * 60 * 24));
  };

  return (
    <View className='time-tip'>我们在一起已经{getDays(Date.now() - new Date('2022-01-09').getTime())}天了</View>
  )
}

export default TimeTip;
