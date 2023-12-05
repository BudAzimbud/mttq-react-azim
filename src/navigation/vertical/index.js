import dashboards from './dashboards'
import history from './history'
import management from './management'
import profile from './profile'
import report from './report'
// ** Merge & Export
export default [...dashboards,...report,...history,...management,...profile]
