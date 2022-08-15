// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Home, DollarSign, Users, Info, MessageCircle, Cpu, ShoppingBag } from 'react-feather'

export default [
  {
    header: 'Dashboard'
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: <DollarSign size={20} />,
    navLink: '/dev/dashboard/finance'
  },
  {
    id: 'sales',
    title: 'Sales',
    icon: <ShoppingBag size={20} />,
    navLink: '/dev/dashboard/sales'
  },
  {
    header: 'Modules'
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: <Cpu size={20} />,
    navLink: '/dev/crm/customer'
  },
  {
    id: 'project',
    title: 'Project',
    icon: <Cpu size={20} />,
    navLink: '/dev/project-dashboard'
  },
  {
    id: 'procurement',
    title: 'Procurement',
    icon: <FileText size={20} />,
    navLink: '/'
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    icon: <Home size={20} />,
    navLink: '/'
  },
  {
    id: 'finance-accounting',
    title: 'Finance Accounting',
    icon: <DollarSign size={20} />,
    navLink: '/'
  },
  {
    id: 'human-resource',
    title: 'Human Resource',
    icon: <Users size={20} />,
    navLink: '/'
  },
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
