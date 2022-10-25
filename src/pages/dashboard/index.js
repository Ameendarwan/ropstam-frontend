import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import BasicCard from "components/card";
import { getAllCategories } from "redux/actions/category";
import { getAllCars } from "redux/actions/car";
import { dashboardBoxes } from "./constants";

function Dashboard(props) {
  const { categories } = props.category;
  const { cars } = props.car;
  const [data, setData] = useState([]);

  useEffect(() => {
    props.getAllCategories();
    props.getAllCars();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (categories) {
      let items = [...dashboardBoxes];
      items.forEach((t) => {
        if (t.key === "category") t.value = categories.length;
      });
      setData(items);
    }
  }, [categories]);

  useEffect(() => {
    if (cars) {
      let items = [...dashboardBoxes];
      items.forEach((t) => {
        if (t.key === "car") t.value = cars.length;
      });
      setData(items);
    }
  }, [cars]);

  return (
    <>
      <h2>Dashboard</h2>

      <Grid container>
        {data?.map((o, i) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={o.id}>
            <div className="p-10">
              <BasicCard title={o.title} value={o.value} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const mapStateToProps = ({ category, car }) => ({ category, car });
export default connect(mapStateToProps, {
  getAllCategories,
  getAllCars,
})(Dashboard);
