import React, { useState, useMemo } from "react";
import { Table } from "reactstrap";
import NewDistrictsModal from "./NewDistrictsModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import Pagination from '../pagination/Pagination';
import '../pagination/style.scss';


let PageSize = 5;

export default function DistrictsList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const districts = props.districts;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return districts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Код района</th>
            <th>Название</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!districts || districts.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            currentTableData.map(districts => (
              <tr key={districts.area_code}>
                <td>{districts.area_code}</td>
                <td>{districts.name}</td>
                <td align="center">
                  <NewDistrictsModal
                    create={false}
                    districts={districts}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={districts.area_code}
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
        totalCount={districts.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}