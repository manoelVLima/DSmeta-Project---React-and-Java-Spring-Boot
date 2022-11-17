import icon from '../assets/notification-icon.svg';
import '../styles/style.css';

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="icon" />
    </div>
  )
}

export default NotificationButton
