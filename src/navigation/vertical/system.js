import {  Shield, Users, Info, MessageCircle } from 'react-feather'

export default [
  {
    header: 'System'
  },
  {
    id: 'user-management',
    title: 'User',
    icon: <Users size={20} />,
    navLink: '/'
  },
  {
    id: 'role',
    title: 'Role',
    icon: <Shield size={20} />,
    navLink: '/'
  },
  {
    id: 'alert',
    title: 'Alert',
    icon: <Info size={20} />,
    navLink: '/'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageCircle size={20} />,
    navLink: '/'
  }
]
