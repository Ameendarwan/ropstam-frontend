import React from "react";
import CustomizedTable from "components/customizedTable";
import { carColumns, carRows } from "./constants";
export default function Cars() {
  return (
    <>
      <CustomizedTable
        heading={"Cars"}
        columns={carColumns}
        rows={carRows}
        title={"car"}
      />
    </>
  );
}
