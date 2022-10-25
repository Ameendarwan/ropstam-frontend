import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomizedTable from "components/customizedTable";
import { getAllCars, addCar, updateCar, deleteCar } from "redux/actions/car";
import { getAllCategories } from "redux/actions/category";
import { carColumns } from "./constants";

function Categories(props) {
  const [rowsData, setRowsData] = useState([]);
  const [columnData, setColumnData] = useState([]);

  useEffect(() => {
    props.getAllCars();
    props.getAllCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setRowsData(props.car.cars);
  }, [props.car.cars]);

  useEffect(() => {
    let arr = [];
    props.category.categories?.forEach((ele) => {
      arr.push(ele.name);
    });
    let items = [...carColumns];
    items[1].valueOptions = arr;
    setColumnData(items);
  }, [props.category.categories]);

  const handleAddRow = () => {
    let data = {
      name: "CarName",
      company: "BMW",
      model: "2022",
      color: "Black",
      registrationNo: "34666",
      category: "Sedan",
    };
    props.addCar(data);
  };

  return (
    <>
      <CustomizedTable
        heading={"Cars"}
        columns={columnData}
        rows={rowsData}
        title={"car"}
        callUpdate={props.updateCar}
        callDelete={props.deleteCar}
        handleAddRow={handleAddRow}
        msg={props.loader.successMsg}
        loader={props.loader.loader}
      />
    </>
  );
}

const mapStateToProps = ({ car, category, loader }) => ({
  car,
  category,
  loader,
});
export default connect(mapStateToProps, {
  getAllCars,
  getAllCategories,
  addCar,
  updateCar,
  deleteCar,
})(Categories);
