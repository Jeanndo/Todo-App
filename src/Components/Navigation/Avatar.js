import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function UserAvatar(){
    return(
        <Avatar size={50}
       style={{marginLeft:'-10%'}}
         icon={<UserOutlined />}
         />
    )
}