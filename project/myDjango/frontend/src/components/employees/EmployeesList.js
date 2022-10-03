import React, { Component, useState, useMemo } from "react";
import { Table } from "reactstrap";
import NewEmployeesModal from "./NewEmployeesModal";
import ConfirmRemovalModalEmployees from "./ConfirmRemovalModalEmployees";
import Pagination from '../pagination/Pagination';
import '../pagination/style.scss';


let PageSize = 5;

export default function EmployeesList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const employees = props.employees;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return employees.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Код сотрудника</th>
            <th>ФИО</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!employees || employees.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            currentTableData.map(employees => (
              <tr key={employees.employee_code}>
                <td>{employees.employee_code}</td>
                <td>{employees.name}</td>
                <td align="center">
                  <NewEmployeesModal
                    create={false}
                    employees={employees}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalEmployees
                    pk={employees.employee_code}
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
        totalCount={employees.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
