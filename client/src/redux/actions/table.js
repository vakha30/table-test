import axios from 'axios'

export const fetchTableData = (sortBy, filter, offsetPage) => (dispatch) => {
    fetch('http://localhost:3001/table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...sortBy, ...filter, offsetPage})
    })
    .then(response => {
      return response.json()
    })
    .then((data) => {
      dispatch(setTableData(data))
    })
}

export const fetchAllDAta = () => (dispatch) => {
  axios.get('http://localhost:3001/table')
  .then(({data}) => dispatch({type: "SET_COUNT_DATA", payload: data.length}))
}

const setTableData = (data) => {
    return {
        type: "SET_TABLE_DATA",
        payload: data
    }
}

export const setSortBy = (sort) => {
    return {
        type: "SET_SORT_BY",
        payload: sort
    }
}

export const setFilter =(obj) => {
    return {
        type: "SET_FILTER",
        payload: obj
    }
}

export const setOffsetPage = (index) => {
  return {
    type: "SET_OFFSET_PAGE",
    payload: index
  }
}