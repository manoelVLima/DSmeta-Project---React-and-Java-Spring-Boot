import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../assets/notification-icon.svg';
import { BASE_URL } from '../utils/request';

type Props = {
  saleId: Number;
}
const handleClick = (saleId: Number) => {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(() => {
      toast.info("SMS enviado com sucesso!")
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
