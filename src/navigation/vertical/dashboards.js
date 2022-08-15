// ** Icons Import
import {  DollarSign, ShoppingBag } from 'react-feather'

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
  }
]