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
    selector: (row) => row.license,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row) => row.code,
    sortable: true,
  },
  {
    name: "Fuel",
    selector: (row) => row.fuel,
    sortable: true,
  },
  {
    name: "Fuel Usage(L)",
    selector: (row) => row.fuel_usage,
    sortable: true,
  },
  {
    name: "Left Over(L)",
    selector: (row) => row.left_over,
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
        data={Array.from({ length: 40 }, (_, index) => ({
          id: index+1,
          time: "3 Sep 2023",
          station: "Statation 1",
          name: "andrew",
          license: "B 1235 K",
          code: "20130",
          fuel: "Pertalite",
          fuel_usage: 4,
          left_over: 140,
        }))}
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
