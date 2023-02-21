import { memo } from 'react';
import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";

import './index.less';

export const SafeTop = memo(() => {
  const { safeArea } = Taro.getSystemInfoSync();
  const safeTop = safeArea?.top || 0;
  return <View style={{ height: safeTop }}></View>
})


export const SafeBottom = memo(() => {
  const { screenHeight, safeArea } = Taro.getSystemInfoSync();
  const safeBottom = screenHeight - (safeArea?.bottom || 0);
  return <View style={{ height: safeBottom }}></View>
})


const Page = ({ children }) => {
  return (
    <View className='page'>
      <View className='page-c'>
        {children}
      </View>
    </View>
  )
}

export default Page;
