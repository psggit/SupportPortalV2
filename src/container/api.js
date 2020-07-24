import { POST, GET } from "../utils/fetch"

export function fetchCompleteOrderDetails(payload) {
  return GET({
    api: `/deliveryman/api/1/support/complete_order_details/${payload.order_id}`,
    apiBase: "api",
    handleError: true
  })
}
