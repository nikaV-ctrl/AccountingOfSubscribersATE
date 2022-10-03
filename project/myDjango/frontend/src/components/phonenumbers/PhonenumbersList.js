import React, { useState, useMemo } from "react";
import { Table } from "reactstrap";
import NewPhonenumbersModal from "./NewPhonenumbersModal";
import ConfirmRemovalModalPhonenumbers from "./ConfirmRemovalModalPhonenumbers";
import Pagination from '../pagination/Pagination';
import '../pagination/style.scss';


let PageSize = 3;

export default function PhonenumbersList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const phonenumbers = props.phonenumbers;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return phonenumbers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
    return (
      <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Номер телефона</th>
            <th>ИИН владельца</th>
            <th>Код улицы</th>
            <th>Номер дома</th>
            <th>Номер квартиры</th>
            <th>Признак закрытости номера</th>
            <th>Признак спаренности номера</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!phonenumbers || phonenumbers.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            currentTableData.map(phonenumbers => (
              <tr key={phonenumbers.phone_number}>
                <td>{phonenumbers.phone_number}</td>
                <td>{phonenumbers.owner_IIN}</td>
                <td>{phonenumbers.street_code}</td>
                <td>{phonenumbers.house_number}</td>
                <td>{phonenumbers.apartment_number}</td>
                <td><input type="checkbox" checked={phonenumbers.close_number_sign} />{phonenumbers.close_number_sign}</td>
                <td><input type="checkbox" checked={phonenumbers.pairing_number_sign}/>{phonenumbers.pairing_number_sign}</td>
                <td align="center">
                  <NewPhonenumbersModal
                    create={false}
                    phonenumbers={phonenumbers}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalPhonenumbers
                    pk={phonenumbers.phone_number}
                    resetState={props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={phonenumbers.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
    );
  }