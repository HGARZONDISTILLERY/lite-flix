import './NavigationHeader.css'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FaceIcon from '@mui/icons-material/Face';
import TemporaryDrawer from '../TemporaryDrawer';

const NavigationHeader = () => {
  return(
    <nav>
      <ul>
        <li><TemporaryDrawer /></li>
        <li><NotificationsNoneIcon /></li>
        <li><FaceIcon /></li>
      </ul>
    </nav>
  )
}

export default NavigationHeader
