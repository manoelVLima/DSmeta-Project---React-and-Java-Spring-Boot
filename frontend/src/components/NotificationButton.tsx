import axios from 'axios';
import icon from '../assets/notification-icon.svg';
import { BASE_URL } from '../utils/request';

type Props = {
  saleId: Number;
}
const handleClick = (saleId: Number) => {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
      console.log("Sucesso!");

    })
}
function NotificationButton({ saleId }: Props) {
  return (
    <div onClick={() => handleClick(saleId)} className="dsmeta-red-btn">
      <img src={icon} alt="icon" />
    </div>
  )
}

export default NotificationButton
