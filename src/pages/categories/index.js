import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomizedTable from "components/customizedTable";
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "redux/actions/category";
import { categoriesColumns } from "./constants";

function Categories(props) {
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    props.getAllCategories();
  }, []);

  useEffect(() => {
    setRowsData(props.category.categories);
  }, [props.category.categories]);

  const handleAddRow = () => {
    let data = {
      name: "Category Name",
    };
    props.addCategory(data);
  };

  return (
    <>
      <CustomizedTable
        heading={"Caregories"}
        columns={categoriesColumns}
        rows={rowsData}
        title={"category"}
        callUpdate={props.updateCategory}
        callDelete={props.deleteCategory}
        handleAddRow={handleAddRow}
        msg={props.loader.successMsg}
        loader={props.loader.loader}
      />
    </>
  );
}

const mapStateToProps = ({ category, loader }) => ({ category, loader });
export default connect(mapStateToProps, {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
})(Categories);
