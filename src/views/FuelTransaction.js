import DataTable from "react-data-table-component";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Download } from "react-feather";
import { Button } from "reactstrap";
const columns = [
  {
    name: "ID",
    sortable: false,
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Time/Date",
    sortable: false,
    selector: (row) => row.time,
    sortable: true,
  },
  {
    name: "Station",
    sortable: false,
    selector: (row) => row.station,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Licensse",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Fuel",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Fuel Usage(L)",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Left Over(L)",
    selector: (row) => row.name,
    sortable: true,
  },
];

export default function FuelTranasction() {
  return (
    <>
      <div
        style={{ backgroundColor: "#161D31" }}
        className="d-flex justify-content-between p-2"
      >
        <h3>Fuel Transaction History</h3>
        <div className="d-flex gap-2">
          <Flatpickr
            placeholder="Date"
            data-enable-time
            options={{
              mode: "range",
            }}
          />
          <Button size="sm">
            <Download />
          </Button>
        </div>
      </div>
      <DataTable
        pagination
        fixedHeader
        columns={columns}
        data={[{}]}
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "white",
              color: "#161D31",
            },
          },
          rows: {
            style: {
              backgroundColor: "#161D31",
              color: "white",
            },
          },
          pagination: {
            style: {
              backgroundColor: "#161D31",
              color: "white",
            },
            pageButtonsStyle: {
              backgroundColor: "white",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}
