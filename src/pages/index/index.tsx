import { useState } from "react";
import classNames from "classnames";
import { View } from '@tarojs/components';
import Page from '@/components/page';
import Nav from '@/components/nav';
import './index.less';

definePageConfig({
  navigationStyle: 'custom',
});

export default function Home() {
  const [isShow, setShow] = useState(false);
  return (
    <Page>
      <View className='home'>
        <View className='home-wrap'>
          <View className='home-h'>
            首页
          </View>
          <View className='home-c'>
            <View className='home-tip'>
              我们在一起已经x
            </View>
            <View className={classNames('c-panel', { 'c-panel-show': isShow })} onClick={() => setShow(!isShow)}>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
            </View>
          </View>
        </View>
        <View className='nav-tab'>
          <Nav />
        </View>
      </View>
    </Page>
  )
}

