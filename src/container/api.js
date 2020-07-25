import { POST, GET } from "../utils/fetch"

export function fetchCompleteOrderDetails(payload) {
  return GET({
    api: `/deliveryman/api/1/support/complete_order_details/${payload.order_id}`,
    apiBase: "api",
    handleError: true
  })
}

export function fetchGenreList(payload) {
  return POST({
    api: `/Api/stockandprice/listing/genres`,
    apiBase: "retailer",
    handleError: true,
    data: payload
  })
}
