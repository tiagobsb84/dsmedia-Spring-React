import notification from "../../img/notification-icon.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/request";
import { Sale } from "../../../models/sale";
import NotificationButton from "../NotificationButton";

function salesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sale, setSale] = useState<Sale[]>([]);

    useEffect(() => {

        const dataMinima = minDate.toISOString().slice(0, 10);
        const dataMaxima = maxDate.toISOString().slice(0, 10);
        
        axios.get(`${BASE_URL}/sales?minDate=${dataMinima}&maxDate=${dataMaxima}`)
            .then(response => {
                setSale(response.data.content);
            });

    }, [minDate, maxDate])

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
                                                <NotificationButton saleId={sales.id} />
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