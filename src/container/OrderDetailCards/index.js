import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DetailsCard from './components/DetailsCard';
import Button from '@material-ui/core/Button';
import { fetchCompleteOrderDetails } from '../api';
import './CartDetails.scss';
import './DetailsCardContent.scss';

const OrderDetail = (props) => {

  const classes = useStyles();
  const [orderDetails, setOrderDetails] = useState([]);
  const [loadingOrderDetails, setLoadingOrderDetails] = useState(false);
  const [modifyCart,setModifyCart] = useState(false);
  const [cartItems,setCartItems] = useState([])

  useEffect(() => {
    fetchOrderDetailsData();
    setOrderDetails(orderDetailsData)
    console.log("From UseEffect",orderDetailsData.order_details.cart_items)
    setCartItems(orderDetailsData.order_details.cart_items)
  }, []);

  const handleModifyCart = () => {
    setModifyCart(true);
  }

  const fetchOrderDetailsData = () => {
    setLoadingOrderDetails(true);
    const payload = {
      order_id: 1234
    }
    fetchCompleteOrderDetails(payload)
      .then((response) => {
        setOrderDetails(response.order_details);
        setLoadingOrderDetails(false);
        console.log("Success", response.order_details);
      })
      .catch((err) => {
        setLoadingOrderDetails(false);
        console.log("Error in fetching order details", err);
      })
  }

  const cartItemsData = [ {
    brand_id: 993,
    brand_name: "Kingfisher Blue",
    deliverable_count: 1,
    ordered_count: 1,
    revised_total_price: 80,
    sku_id: 1278,
    sku_price: 80,
    total_price: 80,
    volume: 325,
},
  {
    brand_id: 123,
    brand_name: "Black Label",
    deliverable_count: 2,
    ordered_count: 3,
    revised_total_price: 804,
    sku_id: 121,
    sku_price: 820,
    total_price: 820,
    volume: 568,
  }
]

const orderDetailsData = {
   "message":"invalid-delivery-agent-id",
   "order_details":{
      "order_id":"50011905805304",
      "order_date_and_time":"2020-07-24T19:58:32.432206+05:30",
      "partial_delivery":"true",
      "slot_time":"",
      "customer_name":"Guna",
      "customer_id":"515866",
      "customer_contact_number":"9566258767",
      "CustomerAddressID":"106903",
      "customer_address":"1,45/22, 4th Ln, Shastri Nagar, Adyar, Chennai, Tamil Nadu 600020, India  LANDMARK:Onea",
      "customer_landmark":"Onea",
      "retailer_id":"436",
      "retailer_code":"3340",
      "retailer_name":"Gokul Arcade",
      "retailer_contact_number":"7806828582",
      "retailer_address":"Gokul Arcade, Sardar Patel Rd, Baktavatsalm Nagar, Adyar, Chennai, Tamil Nadu 600020",
      "original_cart_total":"80",
      "revised_cart_total":"80",
      "original_order_total":"80",
      "revised_order_total":"80",
      "fee_details":"[]",
      "cart_id":"5908",
      "cart_items":[
         {
            "brand_name":"Kingfisher Blue",
            "volume":325,
            "sku_price":80,
            "ordered_count":1,
            "deliverable_count":1,
            "total_price":80,
            "revised_total_price":80,
            "sku_id":1278,
            "brand_id":993
         }
      ],
      "revised_cart_items":"",
      "warehouse_id":null,
      "delivery_agent_id":null,
      "delivery_agent_pick_up_date_and_time":"",
      "delivery_agent_name":"",
      "delivery_agent_vehicle_number":null,
      "delivery_agent_contact_number":"",
      "delivery_agent_status":"",
      "delivery_cancellation_reason":null,
      "payment_total":"",
      "hipbar_wallet":"80",
      "gift_wallet":"0",
      "revised_gift_wallet":"0",
      "revised_hipbar_wallet":"80",
      "wallet_total":"80",
      "revised_wallet_total":"80",
      "nodal_amount":"0",
      "delivery_status":"Order Placed",
      "delivered_date_and_time":null,
      "verification_type":"",
      "fee_details_struct":[

      ],
      "delivery_fee":0,
      "total_fee":0,
      "total_additional_fee":0,
      "cgst_percentage":2,
      "sgst_percentage":2,
      "igst_percentage":0,
      "taxes":{
         "cgst_total":0,
         "sgst_total":0,
         "igst_total":0
      },
      "order_status_button":true,
      "cancelled_by":null,
      "show_notes":true,
      "lot_id":null,
      "order_cancelled_time":null,
      "reserved_for_da_id":null,
      "state_id":4,
      "city_id":5,
      "gps":"12.999904840903882,80.25807335972785",
      "to_show_resolve_button":false
   }
}



  const customerDetails = () => {
    return (
      <div id="cardBody" className="content">

        <div className="flex-item">
          <div className="label">
            <p> Customer ID</p>
          </div>
          <div className="value">
            <p>{"347"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Customer Name</p>
          </div>
          <div className="value">
            <p>{"Arjun Hari"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Mobile Number</p>
          </div>
          <div className="value">
            <p>{"+91987653221"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> City</p>
          </div>
          <div className="value">
            <p>{"Chennai"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Date of Birth</p>
          </div>
          <div className="value">
            <p>{"16/01/1990"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Signup Date</p>
          </div>
          <div className="value">
            <p>{"16/01/2020"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> KYC Level</p>
          </div>
          <div className="value">
            <p>{"Prime"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Landmark</p>
          </div>
          <div className="value">
            <p>{"Lewis Store"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Delivery Adress</p>
          </div>
          <div className="value">
            <p>{"1/5, 3rd Cross Street ,4th Main Road, Gandhi Nagar, Adyar, 600020, hello world"}</p>
          </div>
        </div>
      </div>
    )
  }

  const retailerDetails = () => {
    return (
      <div id="cardBody" className="content">

        <div className="flex-item">
          <div className="label">
            <p> Retailer ID</p>
          </div>
          <div className="value">
            <p>{"347"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Retailer Name</p>
          </div>
          <div className="value">
            <p>{"Arjun Hari"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Mobile Number</p>
          </div>
          <div className="value">
            <p>{"+91987653221"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> City</p>
          </div>
          <div className="value">
            <p>{"Chennai"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Locality </p>
          </div>
          <div className="value">
            <p>{"Adyar Depot"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Retailer Limit</p>
          </div>
          <div className="value">
            <p>{"16/01/2020"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Store Adress</p>
          </div>
          <div className="value">
            <p>{"1/5, 3rd Cross Street ,4th Main Road, Gandhi Nagar, Adyar, 600020, hello world"}</p>
          </div>
        </div>
      </div>
    )
  }

  const deliveryAgentDetails = () => {
    return (
      <div id="cardBody" className="content">

        <div className="flex-item">
          <div className="label">
            <p> Agent ID</p>
          </div>
          <div className="value">
            <p>{"347"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Agent Name</p>
          </div>
          <div className="value">
            <p>{"Arjun Hari"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Mobile Number</p>
          </div>
          <div className="value">
            <p>{"+91987653221"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> City</p>
          </div>
          <div className="value">
            <p>{"Chennai"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Locality </p>
          </div>
          <div className="value">
            <p>{"Adyar Depot"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Agent Limit</p>
          </div>
          <div className="value">
            <p>{"16/01/2020"}</p>
          </div>
        </div>

        <div className="flex-item">
          <div className="label">
            <p> Adress</p>
          </div>
          <div className="value">
            <p>{"1/5, 3rd Cross Street ,4th Main Road, Gandhi Nagar, Adyar, 600020, hello world"}</p>
          </div>
        </div>
      </div>
    )
  }

  const cartDetails = () => {
    return (
      <div id="cartDetails" className="content">

        <div className="flex-cart-item">
          <div className="sub-header">
            <p> Order Items</p>
          </div>
          {
            modifyCart &&
              <div className="value">
                <a> Add Item ></a>
              </div>
          }
        </div>

        {/* <div className="flex-cart-item" style={{marginBottom:"16px"}}>
          <div className="label">
            <p>{"Johnnie Walker Black Label (IMFL)"}</p>
          </div>
          <div className="control">
            {
              modifyCart &&
              <button className="bttn bttn-left" id="minus">
                <span>-</span>
              </button>
            }
            <p className="input"> {"1"}</p>
            {
              modifyCart &&
              <button className="bttn bttn-right" id="plus">
                <span>+</span>
              </button>
            } 
          </div>
        </div> */}

        {/* <div className="flex-cart-item">
          <div className="volume-price">
            <p> {`750 ml | ₹1200`}</p>
          </div>
        </div> */}

        {
          cartItems ?
            cartItems.map((item, index) => {
              return (
                <div className="flex-cart-item" style={{ alignItems: "center" }}>
                  <div>
                    <div className="label" style={{ marginBottom: "16px" }}>
                      <p> {`${item.brand_name}`} </p>
                    </div>
                    <div className="volume-price">
                      <p> {`${item.volume} ml | ₹${item.total_price}`}</p>
                    </div>
                  </div>

                  <div className="control">
                    {
                      modifyCart &&
                      <button className="bttn bttn-left" id="minus">
                        <span>-</span>
                      </button>
                    }
                    <p className="input"> {cartItems[index].deliverable_count}</p>
                    {
                      modifyCart &&
                      <button className="bttn bttn-right" id="plus">
                        <span>+</span>
                      </button>
                    }
                  </div>
                </div>
              )
            }) : ""
        }

        <div className="flex-cart-item">
          <div className="sub-header">
            <p> Order Summary</p>
          </div>
          {/* <div className="value">
            <p>{"Arjun Hari"}</p>
          </div> */}
        </div>

        <div className="flex-cart-item" style={{ marginTop: "2px"}}>
          <div className="label">
            <p style={{ color:"#010B13"}}> Order Total:</p>
          </div>
          <div className="value">
            <p style={{ color:"#010B13",fontWeight:"500"}}>{"₹ 5,214"}</p>
          </div>
        </div>

        <div className="flex-cart-item">
          <div className="label">
            <p> Cart Total</p>
          </div>
          <div className="value">
            <p>{"₹ 5,214"}</p>
          </div>
        </div>

        <div className="flex-cart-item" style={{ borderBottom: "1px solid #E5E5E5",paddingBottom:"25px"}}>
          <div className="label">
            <p> Additional Charges:</p>
          </div>
          <div className="value">
            <p>{"₹ 214"}</p>
          </div>
        </div>

        <div className="flex-cart-item">
          <div className="sub-header">
            <p> Payment Details</p>
          </div>
          <div className="value">
            {/* <p>{"₹ 5,214"}</p> */}
          </div>
        </div>

        <div className="flex-cart-item">
          <div className="label">
            <p> Mode of Payment:</p>
          </div>
          <div className="value">
            <p>{"UPI and Wallet"}</p>
          </div>
        </div>

        <div className="flex-cart-item" style={{ marginTop: "2px" }}>
          <div className="label">
            <p style={{ color: "#010B13" }}> Wallet:</p>
          </div>
          <div className="value">
            <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 5,000"}</p>
          </div>
        </div>

        <div className="flex-cart-item">
          <div className="label">
            <p> Hipbar Wallet</p>
          </div>
          <div className="value">
            <p>{"₹ 2,214"}</p>
          </div>
        </div>

        <div className="flex-cart-item">
          <div className="label">
            <p> Gift Wallet</p>
          </div>
          <div className="value">
            <p>{"₹ 3,214"}</p>
          </div>
        </div>

        <div className="flex-cart-item" style={{ marginTop: "2px",marginBottom:"26px" }}>
          <div className="label">
            <p style={{ color: "#010B13" }}> UPI:</p>
          </div>
          <div className="value">
            <p style={{ color: "#010B13", fontWeight: "500" }}>{"₹ 214"}</p>
          </div>
        </div>

        </div>
    )
  }

  return (
    <div id="order-detail">

      <div>
        <DetailsCard
          title={"CART DETAILS"}
          actions={[
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleModifyCart}
            >
              Modify
            </Button>
          ]}
        >
          {cartDetails()}
        </DetailsCard>
      </div>

      <div>
        <DetailsCard
          title={"CUSTOMER DETAILS"}
          subtitle={"More >"}
          actions={[
            <Button
              className={classes.secondaryButton}
              variant="contained"
            >
              Message
            </Button>,
            <Button
              className={classes.button}
              variant="contained"
            >
              Call
            </Button>
          ]}
        >
          {customerDetails()}
        </DetailsCard>
      </div>

      <div>
        <DetailsCard
          title={"RETAILER DETAILS"}
          actions={[
            <Button
              className={classes.secondaryButton}
              variant="contained"
            >
              Change Retailer
            </Button>,
            <Button
              className={classes.button}
              variant="contained"
            >
              Call
            </Button>
          ]}
        >
          {retailerDetails()}
        </DetailsCard>
      </div>

      <div>
        <DetailsCard
          title={"DELIVERY AGENT DETAILS"}
          subtitle={"Reserve"}
          actions={[
            <Button
              className={classes.secondaryButton}
              variant="contained"
            >
              Unassign
            </Button>,
            <Button
              className={classes.button}
              variant="contained"
            >
              Call
            </Button>
          ]}
        >
          {deliveryAgentDetails()}
        </DetailsCard>
      </div>
    </div>
  );
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
  }
}))

export default OrderDetail;
