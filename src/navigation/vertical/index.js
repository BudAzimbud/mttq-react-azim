// ** Navigation imports
import modules from './modules'
import dashboards from './dashboards'
import system from './system'

// ** Merge & Export
export default [...dashboards, ...modules, ...system]
