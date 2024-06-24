import "./styles.css";

import profile from "../../../../../assets/profile.png";
import TemporaryDrawer from "../TemporaryDrawer";
import Notification from "../../../../../assets/icons/Notification";

const NavigationHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          <TemporaryDrawer />
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <img src={profile} alt="Profile" />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
