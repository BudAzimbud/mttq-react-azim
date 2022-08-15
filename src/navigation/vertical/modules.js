import {  FileText, Home, DollarSign, Users, Cpu } from 'react-feather'


export default [
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
  }
]
