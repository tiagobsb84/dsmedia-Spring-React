import Icon from "../../img/notification-icon.svg";

import "./style.css";

function notificationButton(){
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={Icon} alt="bottton" />
            </div>
        </>
    )
}

export default notificationButton