import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
  List,
  Toolbar,
  Typography,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ContactlessIcon from "@material-ui/icons/Contactless";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import UserDetail from "./UserDetail";
const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "650px",
  },
  paperbody: {
    textAlign: "start",
    color: theme.palette.text.secondary,
  },

  appBar: {
    backgroundColor: "#3EB489",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawer: {
    position: "relative",
    width: drawerWidth,

    height: "585px",
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    position: "relative",
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  title: {
    paddingLeft: "20px",
  },
  activeicon: {
    marginLeft: 50,
    marginRight: 50,
  },
}));
export default function CardContact(props) {
  const { users } = props;
  const classes = useStyles();
  let ulist;

  const [active, setActive] = React.useState(true);
  const [title, setTitle] = React.useState("Active Contacts");

  const handleUseractive = () => {
    setActive(true);
    setTitle("Active Contacts");
  };
  const handleUserinactive = () => {
    setActive(false);
    setTitle("Inactive Contacts");
  };

  const [select, setSelect] = React.useState("");
  const onclickSelect = (value) => {
    setSelect(value);
  };
  if (active === true) {
    ulist =
      users &&
      users.map((user) => {
        if (user.status === "active") {
          return (
            <ListItem
              button
              key={user.id}
              value={user.id}
              onClick={() => onclickSelect(user.id)}
            >
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={user.photoURL} />
              </ListItemIcon>
              <ListItemText primary={user.fullName} />
            </ListItem>
          );
        } else {
          return null;
        }
      });
  } else {
    ulist =
      users &&
      users.map((user) => {
        if (user.status === "inactive") {
          return (
            <ListItem
              button
              key={user.id}
              value={user.id}
              onClick={() => onclickSelect(user.id)}
            >
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={user.photoURL} />
              </ListItemIcon>
              <ListItemText primary={user.fullName} />
            </ListItem>
          );
        } else {
          return null;
        }
      });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={20} className={classes.paper}>
            <AppBar
              elevation="0"
              position="relative"
              className={classes.appBar}
            >
              <Toolbar>
                <IconButton edge="start" onClick={handleUseractive}>
                  <PeopleAltIcon className={classes.activeicon} />
                </IconButton>
                <IconButton edge="start" onClick={handleUserinactive}>
                  <ContactlessIcon className={classes.activeicon} />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                  {title}
                </Typography>
              </Toolbar>
            </AppBar>
            <div style={{ display: "flex" }}>
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerContainer}>
                  <List>
                    <InputBase
                      className={classes.input}
                      placeholder="Search contact"
                      inputProps={{ "aria-label": "search contact" }}
                    />
                    <IconButton
                      type="submit"
                      className={classes.iconButton}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </List>
                  <List>{ulist}</List>
                </div>
              </Drawer>
              <main className={classes.content}>
                <Paper className={classes.paperbody} elevation={0}>
                  {users &&
                    users.map((user) => {
                      if (user.id === select) {
                        return <UserDetail user={user} />;
                      } else {
                        return null;
                      }
                    })}
                </Paper>
              </main>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
