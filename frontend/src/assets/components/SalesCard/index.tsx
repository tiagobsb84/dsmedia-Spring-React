import notification from "../../img/notification-icon.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/request";
import { Sale } from "../../../models/sale";

function salesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sale, setSale] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
        .then(response => setSale(response.data.content));
    }, [])

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    </div>
                    <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sale.map(sales => {
                                return(
                                    <tr key={sales.id}>
                                        <td className="show992">{sales.id}</td>
                                        <td className="show576">{sales.date}</td>
                                        <td>{sales.sellerName}</td>
                                        <td className="show992">{sales.visited}</td>
                                        <td className="show992">{sales.deals}</td>
                                        <td>R$ {sales.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <div className="dsmeta-red-btn">
                                                    <img src={notification} alt="Notificar" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}  
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default salesCard;