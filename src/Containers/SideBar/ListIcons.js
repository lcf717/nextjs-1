import React from "react";
import "./../../App.css";
import {
  ListItemText,
  ListItem,
  ListItemIcon,
  List,
  Collapse,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import {
  People,
  Folder,
  Dashboard,
  DevicesOther,
  Settings,
  Home,
  SettingsEthernetRounded,
  Business,
  Smartphone,
  TrackChanges,
  Assessment,
  Widgets,
  Router,
  ViewCompact,
  Memory,
  ExpandMore,
  ExpandLess,
  SettingsApplications,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export const ListItems = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <ListItem button className={classes.root}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <SettingsEthernetRounded />
        </ListItemIcon>
        <ListItemText primary="Rule Chains" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Business />
        </ListItemIcon>
        <ListItemText primary="Assets" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DevicesOther />
        </ListItemIcon>
        <ListItemText primary="Devices" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Smartphone />
        </ListItemIcon>
        <ListItemText primary="Device Profiles" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Memory />
        </ListItemIcon>
        <ListItemText primary="FirmWare" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ViewCompact />
        </ListItemIcon>
        <ListItemText primary="Entity Views" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Router />
        </ListItemIcon>
        <ListItemText primary="Edge Management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <Router />
            </ListItemIcon>
            <ListItemText primary="Edge Instances" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SettingsEthernetRounded />
            </ListItemIcon>
            <ListItemText primary="Rule Chain Templates" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <Widgets />
        </ListItemIcon>
        <ListItemText primary="Widgets Library" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboards" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TrackChanges />
        </ListItemIcon>
        <ListItemText primary="Audit Logs" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assessment />
        </ListItemIcon>
        <ListItemText primary="Api Usage" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="System Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SettingsApplications />
            </ListItemIcon>
            <ListItemText primary="Home Settings" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary="Resources Library" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};
