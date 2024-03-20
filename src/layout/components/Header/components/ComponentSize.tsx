import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import { Dropdown, Menu } from 'antd'

const ComponentSize = observer((_props: any) => {
  const { header } = useStore()

  // 切换组件大小
  const onClick = ({ key }: { key: string }) => {
    header.setComponentSize(key)
  }

  const items = [
    {
      key: 'middle',
      disabled: header.componentSize == 'middle',
      label: <span>默认</span>,
    },
    {
      disabled: header.componentSize == 'large',
      key: 'large',
      label: <span>大型</span>,
    },
    {
      disabled: header.componentSize == 'small',
      key: 'small',
      label: <span>小型</span>,
    },
  ]

  const menuProps = {
    items,
    onClick,
  }

  return (
    <Dropdown
      menu={menuProps}
      placement="bottom"
      trigger={['click']}
      arrow={true}
    >
      <i className="icon-style iconfont icon-contentright"></i>
    </Dropdown>
  )
})

export default ComponentSize
