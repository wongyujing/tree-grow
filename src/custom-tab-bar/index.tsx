import { useState } from 'react';
import { CoverView, CoverImage, MovableArea, MovableView } from '@tarojs/components';
import { SafeBottom } from '@/components/page';
import iconHome from '../assets/30.png';
import iconMission from '../assets/35.png';
import iconMe from '../assets/41.png';

import './index.less';

const navList = [
  { key: 'home', title: '首页', icon: iconHome },
  { key: 'market', title: '任务', icon: iconMission },
  { key: 'user', title: '我的', icon: iconMe },
]

export default function TabBar() {
  const [y, setY] = useState(0);
  return (
    <MovableArea className='move-box'>
      <MovableView
        className='move-box-view'
        direction='vertical'
        inertia
        onChange={(e) => {
          console.log(111, e);
        }}
        // y={y}
        // onVTouchMove={(e) => {
        //   console.log(111, e);
        //   setY(e.detail.y);
        // }}
      >
        <CoverView className='tab-bar-wrap'>
          <CoverView className='tab-bar'>
            {navList.map((tab) => (
              <CoverView className='tab-bar-item'>
                <CoverImage className='tab-bar-item-img' src={tab.icon} />
                <CoverView className='tab-bar-item-txt'>{tab.title}</CoverView>
              </CoverView>
            ))}
          </CoverView>
          <CoverView className='egg'>
            Egg
          </CoverView>
        </CoverView>
      </MovableView>
    </MovableArea>
  )
}
