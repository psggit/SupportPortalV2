import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '../../components/icon';
import './orderDetailPage.scss';
import OrderDetails from '../OrderDetailCards';
import Button from '@material-ui/core/Button';
import Dialog from "../../components/dialog"
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { fetchKycDocumentList, fetchCancellationReasons} from './../api'

function OrderDetailPage () {

  const classes = useStyles();

  const [activeSection, setActiveSection] = useState("");
  const [showCancelOrderDialog, setShowCancelOrderDialog] = useState(false);
  const [showDeliverOrderDialog, setShowDeliverOrderDialog] = useState(false);
  

  const [kycDocumentIdx, setKycDocumentIdx] = useState(0);
  const [kycDocumentList, setKycDocumentList] = useState([]);

  const [cancellationReasonIdx, setCancellationReasonIdx] = useState(0);
  const [cancellationReasonList, setCancellationReasonList] = useState([]);

  const handleKycChange = (e) => {
    console.log(e.target.value)
    setKycDocumentIdx(e.target.value)
    // setKycDocumentIdx(kycDocumentList[e.target.value].id)
  }

  const handleCancellationReasonChange = (e) => {
    console.log(e.target.value)
    setCancellationReasonIdx(e.target.value)
  }

  const fetchKycDetails = () => {
    fetchKycDocumentList()
    .then((response) => {
      setKycDocumentList(response)
    })
    .catch((error) => {
      error.json().then((json) => {
        setError(true)
        setErrorMessage(json.message)
      })
    })
  }

  const fetchCancellationReasonList = () => {
    const payload = {
      order_id: 1234,
    }
    fetchCancellationReasons(payload)
      .then((response) => {
        console.log("response", response)
        setCancellationReasonList(response)
      })
      .catch((err) => {
        console.log("Error in fetching cancellation reasons", err)
      })
  }

  const handleScroll = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  const mountCancelOrderDialog = () => {
    fetchCancellationReasonList()
    setShowCancelOrderDialog(true)
  }

  const UnmountCancelOrderDialog = () => {
    setShowCancelOrderDialog(false)
  }

  const mountDeliverOrderDialog = () => {
    fetchKycDetails()
    setShowDeliverOrderDialog(true)
  }

  const UnmountDeliverOrderDialog = () => {
    setShowDeliverOrderDialog(false)
  }

  const renderDeliveryOrder = () => {
    return (
      <Dialog
        title="DELIVER ORDER"
        actions={[
          <Button
            className={clsx(classes.button, classes.secondaryButton)}
            variant="contained"
            color="secondary"
            onClick={UnmountDeliverOrderDialog}
          >
            Cancel
          </Button>,
          <Button
            className={clsx(classes.button, classes.primaryButton)}
            variant="contained"
            color="secondary"
          >
            Complete
          </Button>
        ]}
      >
        <form>
          <div className={classes.formField}>
            <label>Customer ID</label>
            <Select
              value={kycDocumentIdx}
              className={classes.formControlSelect}
              onChange={handleKycChange}
            >
              {
                kycDocumentList.map((item, index) => {
                  return <option key={index} value={index}>{item.description}</option>
                })
              }
            </Select>
          </div>
          <div className={classes.formField}>
            <label>Last 4 Digits of Customer ID</label>
            <input className="partitioned" type="text" autoComplete="off" />
          </div>
          <div className={classes.formField}>
            <label>Year of Birth</label>
            <input className="partitioned" type="text" autoComplete="off" />
          </div>
          <div className={classes.formField}>
            <label>Reason for Completion</label>
            <Select
              native
              value={kycDocumentIdx}
              className={classes.formControlSelect}
              onChange={handleKycChange}
            >
              {
                kycDocumentList.map((item, index) => {
                  return <option key={index} value={index}>{item.description}</option>
                })
              }
            </Select>
          </div>
          <div className={classes.formField}>
            <TextareaAutosize
              className={classes.formControlTextarea}
              rowsMin={3}
              placeholder="Add note here"
            />
          </div>
        </form>
      </Dialog>
    )
  }

  const renderCancelOrderDialog = () => {
    return (
      <Dialog
        title="CANCEL ORDER"
        actions={[
          <Button
            className={clsx(classes.button, classes.secondaryButton)}
            variant="contained"
            color="secondary"
            onClick={UnmountCancelOrderDialog}
          >
            Cancel
          </Button>,
          <Button
            className={clsx(classes.button, classes.primaryButton)}
            variant="contained"
            color="secondary"
          //onClick={commentUnmountModel}
          >
            Cancel Order
          </Button>
        ]}
      >
        <form>
          <div className={classes.formField}>
            <label>Reason</label>
            <Select
              native
              value={cancellationReasonIdx}
              className={classes.formControlSelect}
              onChange={handleCancellationReasonChange}
              label="Select a reason from the list"
            >
              {
                cancellationReasonList.map((item, index) => {
                  return <option key={index} value={index}>{item.reason}</option>
                })
              }
            </Select>
          </div>

          <div className={classes.formField} style={{ borderBottom: "1px solid #E5E5E5", paddingBottom: "25px" }}>
            <div className="label">
              <p> Total Cancellation Charges:</p>
            </div>
            <div className="value">
              <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 214"}</p>
            </div>
          </div>

          <div className={classes.formField}>
            <div className="label">
              <p>Wallet:</p>
            </div>
            <div className="value">
              <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 5,000"}</p>
            </div>
          </div>

          <div className={classes.formField}>
            <div className="label">
              <p> Hipbar Wallet</p>
            </div>
            <div className="value">
              <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 2,214"}</p>
            </div>
          </div>

          <div className={classes.formField}>
            <div className="label">
              <p> Gift Wallet</p>
            </div>
            <div className="value">
              <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 3,214"}</p>
            </div>
          </div>
        </form>
      </Dialog>
    )
  }

  return (
    <div id="orderDetailPage">
      <div className="section-1">
        <div className="bar-options">
          <div>
            <p>ORDER ID: 1234</p>
          </div>
          <div className="top-bar-options">
            <div>
              <Button
                className={classes.flatBtn}
                //onClick={mountAddNote}
              >
                Activity Log
              </Button>
            </div>
            <div>
              <Button
                className={classes.flatBtn}
                onClick={mountDeliverOrderDialog}
              >
                Deliver Order
              </Button>
              {
                showDeliverOrderDialog &&
                renderDeliveryOrder()
              }
            </div>
            <div>
              <Button
                className={classes.flatBtn}
                onClick={mountCancelOrderDialog}
              >
                Cancel Order
              </Button>
              {
                showCancelOrderDialog &&
                renderCancelOrderDialog()
              }
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="status-bar">
          <div className="title">ORDER STATUS</div>
        </div>
        <div className="card-container">
          <OrderDetails />         
        </div>
        <div className="right-navbar">
          <button className={activeSection === "section1" ? "active": null} onClick={() => handleScroll("section1")}><Icon name="CLogo" /></button>
          <button className={activeSection === "section2" ? "active" : null} onClick={() => handleScroll("section2")}><Icon name="RLogo" /></button>
          <button className={activeSection === "section3" ? "active" : null} onClick={() => handleScroll("section3")}><Icon name="DLogo" /></button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  flatBtn: {
    color: "#696969",
    backgroundColor: "none",
    fontWeight: "bold",
    lineHeight: "21px",
  },
  button: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "21px",
    borderRadius: "4px",
    border: "1.6px solid #0086AD"
  },
  primaryButton: {
    color: "#FFFFFF",
    backgroundColor: "#0086AD",
  },
  secondaryButton: {
    color: "#0086AD",
    backgroundColor: "#FFFFFF"
  },
  formField: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    minWidth: 170,
    color: '#606060'
  },
  formControlSelect: {
    marginLeft: "16px",
    minWidth: 180,
  },
  formControlTextarea: {
    width: "100%",
    padding: 10
  },
}))

export default OrderDetailPage;
