import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank"  href="#h">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank"  href="#h">
       Log out
      </a>
    </Menu.Item>
  </Menu>
);
export default function DropDown(){
    return(
        <Dropdown overlay={menu} className='DropDown'>
        <a href="#h" onClick={e => e.preventDefault()}>
          Jeanndo <DownOutlined />
        </a>
      </Dropdown>
    )
}