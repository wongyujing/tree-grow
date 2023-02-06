import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";

import './index.less';

const Page = ({ children }) => {
  const [safeHeight, setSafeHeight] = useState<number>(0);

  useEffect(() => {
    const { screenHeight, safeArea } = Taro.getSystemInfoSync();
    console.log(132, screenHeight, safeArea);
    if (safeArea) setSafeHeight(screenHeight - safeArea?.bottom);
  }, []);

  return (
    <View className='page'>
      <View
        className='page-c'
        style={{ height: `calc(100% - ${safeHeight}px)` }}
      >
        {children}
      </View>
      <View className='page-b' style={{ height: safeHeight }} />
    </View>
  )
}

export default Page;
