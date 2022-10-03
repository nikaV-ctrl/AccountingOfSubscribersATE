import React, { Component } from "react";
import {
    CardText,
    Card,
    CardTitle,
    Button
} from "reactstrap";



class Requests extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <Card body>
                    <CardTitle tag="h5" className="text-center">
                        1. Финансовый отчет о поступлении сумм оплаты за «I-е» число.
                    </CardTitle>
                    <br></br>
                    <br></br>
                </Card>
                <Card
                    body
                >
                    <CardTitle tag="h5" className="text-center">
                        2. Список сотрудников, устанавливающих телефоны  «I-го» числа.
                    </CardTitle>

                    <br></br>

                </Card>
                <Card
                    body
                >
                    <CardTitle tag="h5" className="text-center">
                        3. Список владельцев, имеющих льготы «I-го» типа.
                    </CardTitle>


                </Card>
            </div>
        );
    }
}

export default Requests;