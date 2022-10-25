import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BasicCard({ title, value }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <span>{title}</span>
        <span className="text-bold display-block">{value}</span>
      </CardContent>
    </Card>
  );
}
