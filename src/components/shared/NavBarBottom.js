import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppsIcon from "@material-ui/icons/Apps";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("List");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const pages = [
    { path: "/", text: "List", icon: <FormatAlignLeftIcon /> },
    { path: "/grid", text: "Grid", icon: <AppsIcon /> },
    { path: "/offices-map", text: "Map", icon: <LocationOnIcon /> }
  ];

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      {pages.map(page => {
        const { path, text, icon } = page;
        return (
          <BottomNavigationAction
            key={path}
            component={Link}
            to={path}
            label={text}
            value={text}
            icon={icon}
          />
        );
      })}
    </BottomNavigation>
  );
}
