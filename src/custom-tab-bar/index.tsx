import { View, Image, MovableArea, MovableView } from '@tarojs/components';
// import { SafeBottom } from '@/components/page';
import iconHome from '../assets/30.png';
import iconMission from '../assets/35.png';
import iconMe from '../assets/41.png';

import './index.less';

const navList = [
  { key: 'home', title: '首页', icon: iconHome },
  { key: 'market', title: '任务', icon: iconMission },
  { key: 'user', title: '我的', icon: iconMe },
];

const eggH = 350;
const tabH = 80;

export default function TabBar() {
  return (
    <MovableArea
      className='move-box'
      style={{
        height: eggH * 2 + tabH,
        position: 'fixed',
        bottom: -eggH,
        pointerEvents: 'none',
      }}
    >
      <MovableView
        className='move-box-view'
        direction='vertical'
        inertia
        style={{ height: eggH + tabH, pointerEvents: 'auto' }}
      >
        <View className='tab-bar-wrap'>
          <View className='tab-bar'>
            {navList.map((tab) => (
              <View className='tab-bar-item'>
                <Image className='tab-bar-item-img' src={tab.icon} />
                <View className='tab-bar-item-txt'>{tab.title}</View>
              </View>
            ))}
          </View>
          <View className='egg'>
            Egg
          </View>
        </View>
      </MovableView>
    </MovableArea>
  )
}
