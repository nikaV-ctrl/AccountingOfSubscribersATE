import React, { useState, useMemo } from "react";
import { Table } from "reactstrap";
import NewOwnersModal from "./NewOwnersModal";
import ConfirmRemovalModalOwners from "./ConfirmRemovalModalOwners";
import Pagination from '../pagination/Pagination';
import '../pagination/style.scss';


let PageSize = 5;

export default function OwnersList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const owners = props.owners;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return owners.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
    return (
      <div>
      <Table bordered>
        <thead>
          <tr>
            <th>ИИН</th>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>Пол</th>
            <th>Признак наличия льготы</th>
            <th>Код льготы</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!owners || owners.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            currentTableData.map(owners => (
              <tr key={owners.IIN}>
                <td>{owners.IIN}</td>
                <td>{owners.FIO}</td>
                <td>{owners.birthdate}</td>
                <td>{owners.gender}</td>
                <td><input type="checkbox" checked={owners.availability_lgoty_signs} />{owners.availability_lgoty_signs}</td>
                <td>{owners.code_type_lgoty}</td>
                <td align="center">
                  <NewOwnersModal
                    create={false}
                    owners={owners}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalOwners
                    pk={owners.IIN}
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
        totalCount={owners.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
    );
  }