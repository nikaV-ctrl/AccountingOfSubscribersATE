import React, { useState, useMemo } from "react";
import { Table } from "reactstrap";
import NewStreetsModal from "./NewStreetsModal";
import ConfirmRemovalModalStreets from "./ConfirmRemovalModalStreets";
import Pagination from '../pagination/Pagination';
import '../pagination/style.scss';


let PageSize = 5;

export default function StreetsList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const streets = props.streets;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return streets.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
    return (
      <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Код улицы</th>
            <th>Название</th>
            <th>Код района</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!streets || streets.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            currentTableData.map(streets => (
              <tr key={streets.street_code}>
                <td>{streets.street_code}</td>
                <td>{streets.name}</td>
                <td>{streets.area_code}</td>
                <td align="center">
                  <NewStreetsModal
                    create={false}
                    streets={streets}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalStreets
                    pk={streets.street_code}
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
        totalCount={streets.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
    );
  }
