import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersError,
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderError,
} from './actions'

import axios from 'axios'
axios.defaults.baseURL = `http://localhost:4040`

const getOrders = () => (dispatch) => {
  dispatch(getOrdersRequest())
  axios
    .get('/orders')
    .then(({ data }) => {
      return dispatch(getOrdersSuccess(data))
    })
    .catch((error) => {
      return dispatch(getOrdersError(error))
    })
}

const addOrder = (order) => (dispatch) => {
  dispatch(addOrderRequest())
  axios
    .post('/orders', order)
    .then(({ data }) => {
      return dispatch(addOrderSuccess(data))
    })
    .catch((error) => {
      return dispatch(addOrderError(error))
    })
}

// const updateOrder = (id) => dispatch =>{
//     dispatch()
//     axios.update('/')
// }

const deleteOrder = (id) => (dispatch) => {
  dispatch(deleteOrderRequest())
  axios
    .delete(`/orders/${id}`)
    .then(({ data }) => {
      console.log('DELETE', data)
      return dispatch(deleteOrderSuccess(id))
    })
    .catch((error) => {
      return dispatch(deleteOrderError(error))
    })
}

export default { getOrders, addOrder, deleteOrder }
