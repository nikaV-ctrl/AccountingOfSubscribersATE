import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPaymentModal from "./NewPaymentModal";
import ConfirmRemovalModalPayment from "./ConfirmRemovalModalPayment";


class PaymentList extends Component {
  render() {
    const payment = this.props.payment;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>ИИН владельца</th>
            <th>Сумма оплаты</th>
            <th>Дата</th>
            <th>Номер телефона</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!payment || payment.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            payment.map(payment => (
              <tr key={payment.pk}>
                <td>{payment.owner_IIN}</td>
                <td>{payment.payment_amount}</td>
                <td>{payment.date}</td>
                <td>{payment.phone_number}</td>
                <td align="center">
                  <NewPaymentModal
                    create={false}
                    payment={payment}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalPayment
                    pk={payment.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PaymentList;