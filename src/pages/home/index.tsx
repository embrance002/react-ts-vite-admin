import React, { useContext } from 'react'
import { ThemeContext } from '@/styles/theme/cssinJs'
import { theme } from 'antd'
import './index.less'

const Home = (_props: any) => {
  const themeStyle: any = useContext(ThemeContext)

  return (
    <div
      className="home card"
      style={{
        borderColor: themeStyle.borderColor,
        background: themeStyle.bgColor,
      }}
    >
      <img
        className="yun"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DR_FR7Q721sAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
      <img
        className="antV"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZJscTJdtQqgAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
      <img
        className="worm"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Qua4RZ6djCcAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
    </div>
  )
}

export default Home
