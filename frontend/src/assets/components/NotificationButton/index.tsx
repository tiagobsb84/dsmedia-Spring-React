import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils/request";
import Icon from "../../img/notification-icon.svg";

import "./style.css";

type Props = {
    saleId : number;
}

function handleClick(id: number){
    axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso");
    })
}

function notificationButton({saleId} : Props){
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={Icon} alt="bottton" />
            </div>
        </>
    )
}

export default notificationButton