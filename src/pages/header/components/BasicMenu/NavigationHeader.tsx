import './NavigationHeader.css'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FaceIcon from '@mui/icons-material/Face';
import BasicMenu from './components/BasicMenu/BasicMenu'

const NavigationHeader = () => {
  return(
    <nav>
      <ul>
      <li><BasicMenu /></li>
      <li><NotificationsNoneIcon /></li>
      <li><FaceIcon /></li>
    </ul>
    </nav>
  )
}

export default NavigationHeader
