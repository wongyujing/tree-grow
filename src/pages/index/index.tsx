import { View } from '@tarojs/components';
import Page, { SafeTop, SafeBottom } from '@/components/page';
import TimeTip from './components/time-tip';

import './index.less';

definePageConfig({
  navigationStyle: 'custom',
  disableScroll: true,
  usingComponents: {},
});

export default function Home() {
  return (
    <Page>
      <View className='home'>
        <View className='home-wrap'>
          <SafeTop />

          <View className='home-c'>
            <TimeTip />
            <View className='c-panel'>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
              <View>123123</View>
            </View>
          </View>
        </View>
        {/*<View className='nav-tab'>*/}
        {/*  <Nav />*/}
        {/*  <SafeBottom />*/}
        {/*</View>*/}
      </View>
    </Page>
  )
}

