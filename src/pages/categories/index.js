import React from "react";
import CustomizedTable from "components/customizedTable";
import { categoriesColumns, categoriesRows } from "./constants";
export default function Categories() {
  return (
    <>
      <CustomizedTable
        heading={"Caregories"}
        columns={categoriesColumns}
        rows={categoriesRows}
        title={"category"}
      />
    </>
  );
}
