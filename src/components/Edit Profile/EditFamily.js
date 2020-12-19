import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { Link } from "react-router-dom";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  title: {
    marginTop: "10px",
    marginLeft: "10px",
    fontSize: 25,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    marginLeft: 150,
  },
}));

export default function EditFamily({ profile }) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        action={
          <Link to="/editfamily" key={profile.uid}>
            <IconButton aria-label="settings" className={classes.button}>
              <EditIcon />
            </IconButton>
          </Link>
        }
        title="Family Details"
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Relation</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">DOB</StyledTableCell>
                <StyledTableCell align="right">Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Dad
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.dadname}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.daddob}
                </StyledTableCell>
                <StyledTableCell align="right">{profile.dadno}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Mom
                </StyledTableCell>

                <StyledTableCell align="right">
                  {profile.momname}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.momdob}
                </StyledTableCell>
                <StyledTableCell align="right">{profile.momno}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Spouse
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.spousename}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.spousedob}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.spouseno}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Child
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.childname}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.childdob}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {profile.childno}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
