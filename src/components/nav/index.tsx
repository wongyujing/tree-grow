import { View, Image, Text } from "@tarojs/components";
import icon1 from './assets/41.png';
import icon2 from './assets/35.png';
import icon3 from './assets/30.png';

import './index.less';

const navList = [
  { key: 'home', title: '首页', icon: icon3 },
  { key: 'market', title: '任务', icon: icon2 },
  { key: 'user', title: '我的', icon: icon1 },
]

const Nav = () => {
  return (
    <View className='nav'>
      {navList.map((nav) => (
        <View className='nav-item' key={nav.key}>
          <Image src={nav.icon} />
          <Text>{nav.title}</Text>
        </View>
      ))}
    </View>
  )
}

export default Nav;
