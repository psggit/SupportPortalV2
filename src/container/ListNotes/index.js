//import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react"
import './ListNotesContent.scss'
import Button from '@material-ui/core/Button';
import Icon from '../../components/icon'
import Table from "Components/table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableLoadingShell from "Components/tableLoadingShell"
import Pagination from "Components/pagination"
import { getOffsetUsingPageNo, getQueryParamByName, getQueryUri } from "Utils/helpers"
import { fetchOrderDetails } from "../api"
import NotesList from './NotesMockData';
import Dialog from "../../components/dialog"
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const tableHeaders = [
  { label: "NOTE NO.", value: "order_id" },
  { label: "NOTE TYPE", value: "date_and_time" },
  { label: "DESCROPTION", value: "order_status" },
  { label: "CREATED BY", value: "consumer_id" },
  { label: "CREATED AT", value: "consumer_name" },
]

function ListNotes(props) {

  const classes = useStyles();
  const pageLimit = 25
  const activePage = getQueryParamByName("activePage") || 1
  const [orderDetailsList, setOrderDetailsList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [pageNo, setPageNo] = useState(activePage)
  const [count, setCount] = useState(0)

  const [showAddNoteDilog, setShowAddNoteDialog] = useState(false)
  const [age, setAge] = useState('');



  useEffect(() => {
    console.log("check-data", NotesList)
    fetchOrderDetailsList()
  }, [pageNo])

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const mountAddNote = () => {
    setShowAddNoteDialog(true)
  }

  const UnmountAddNote = () => {
    setShowAddNoteDialog(false)
  }


  const handleBack = () =>{
    props.history.push(`/home/order-details/1222`)
  }

  const fetchOrderDetailsList = () => {
    const payload = {
      pagination: {
        limit: pageLimit,
        offset: ((pageNo - 1) * parseInt(pageLimit)),
      },
      filter: 
        {consumer_contact_number: "9445175856"}
    }

    setLoading(true)
    fetchOrderDetails(payload)
      .then((response) => {
        console.log("response from then", response.message)
        setLoading(false)
        setOrderDetailsList(response.order_details)
        setCount(response.count)
      })
      .catch((error) => {
        error.json().then((json) => {
          setLoading(false)
        })
      })
  }

  const handlePageChange = (pageObj) => {
    setPageNo(pageObj.activePage)
    const queryParamsObj = {
      activePage: pageObj.activePage,
      //filter: JSON.stringify(appliedFilters)
    }
    history.pushState(queryParamsObj, "notes listing", `/home/list-notes${getQueryUri(queryParamsObj)}`)
  }

  return (
    <div id="notes-list">
      <div className="row1">
        <div>
          <Button onClick={handleBack}><Icon name="back" /></Button> 
        </div>
        <div className="notes">
          <p>Notes</p>
        </div>
      </div>
      <div className="row2">
        <div className="notesBar">
          <div className="customerID">
            <p>CUSTOMER ID: 1234</p>
          </div>
          <div>
            <Button
              className={classes.button}
              variant="contained"
              onClick={mountAddNote}
            >
              Add Note
            </Button>
            {
              showAddNoteDilog  &&
              <Dialog
                title="ADD NOTE"
                actions={[
                  <Button
                    className={classes.secondaryButton}
                    variant="contained"
                    color="secondary"
                    onClick={UnmountAddNote}
                  >
                    Cancel
                    </Button>,
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    //onClick={commentUnmountModel}
                  >
                    save
                    </Button>
                ]}
              >
                <form>
                  <div className={classes.selectIssue}>
                    <div>Select Issue</div>
                    <div>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.formRoot}>
                    <TextareaAutosize
                      className={classes.formControlTextarea}
                      aria-label="minimum height"
                      rowsMin={7}
                      //onChange={handleCommentChange}
                      placeholder="Add note here"
                    />
                  </div>
                </form>
              </Dialog>
            }
          </div>
        </div>
        <div className="notesList">
            <Table tableHeaders={tableHeaders}>
              {
                !isLoading
                  ? (
                    // orderDetailsList && orderDetailsList.map((data, index) => {
                   NotesList && NotesList.map((data, index) => {
                      return (
                        <TableRow className={classes.tableRow} key={index} onClick={() => handleRowClick(data)}>
                          <TableCell component="th" scope="row" align="left">
                            {/* <u>{data.order_id}</u> */}
                            {data.note_no}
                          </TableCell>
                          {/* <TableCell align="left">{Moment(data.date_and_time).format("DD/MM/YYYY h:mm A")}</TableCell>
                          <TableCell align="left">{data.order_status}</TableCell>
                          <TableCell align="left">{data.consumer_id}</TableCell>
                          <TableCell align="left">{data.consumer_name}</TableCell> */}
                          <TableCell align="left">{data.note_type}</TableCell>
                          <TableCell align="left">{data.desc}</TableCell>
                          <TableCell align="left">{data.created_by}</TableCell>
                          <TableCell align="left">{data.created_at}</TableCell>
                        </TableRow>
                      )
                    }))
                  : (
                    [1, 2, 3, 4, 5].map((item, i) => (
                      <TableLoadingShell key={i} />
                    ))
                  )
              }
              {/* {
                !isLoading && orderDetailsList.length === 0 &&
                <tr>
                  <td style={{ textAlign: "center", padding: "10px 0" }} colSpan='6'>
                    <p style={{ fontWeight: "16px" }}>No records found</p>
                  </td>
                </tr>
              } */}
            </Table>
            {/* {
              orderDetailsList.length > 0 && !isLoading &&
              <Pagination
                activePage={parseInt(pageNo)}
                itemsCountPerPage={parseInt(pageLimit)}
                totalItemsCount={count}
                pageRangeDisplayed={5}
                setPage={handlePageChange}
              />
            } */}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  button: {
    color: "#FFFFFF",
    backgroundColor: "#0086AD",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "21px",
    borderRadius: "4px",
    marginLeft: "16px",
    border: "1.6px solid #0086AD"
  },
  secondaryButton: {
    color: "#0086AD",
    backgroundColor: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "21px",
    borderRadius: "4px",
    border: "1.6px solid #0086AD"
  },
  formRoot: {
    padding: 24
  },
  formControlTextarea: {
    width: "100%",
    marginBottom: 24,
    padding: 10
  },
  selectIssue: {
    display: "flex",
    paddingLeft: "24px",
    color: "#606060"
  },
  formControl: {
    marginLeft: "16px",
    minWidth: 120,
  }
}))


export default ListNotes