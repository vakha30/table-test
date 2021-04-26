import React from "react";
import Table from './components/Table'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAllDAta, fetchTableData, setFilter, setSortBy, setOffsetPage } from './redux/actions/table'
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch()
  const { items, sortBy, filter, offsetPage } = useSelector(({ tableData }) => tableData)

  React.useEffect(() => {
    dispatch(fetchAllDAta())
    dispatch(fetchTableData(sortBy, filter, offsetPage))
  }, [dispatch, sortBy, filter, offsetPage])


  const onSortBy = (sort) => {
    dispatch(setSortBy(sort))
  }

  const onFilter = React.useCallback((data) => {
    dispatch(setFilter(data))
  }, [dispatch])

  const onSelectPage = React.useCallback((index) => {
    dispatch(setOffsetPage(index))
  }, [dispatch])

  return (
    <div className="table-test">
      <Filter onFilter={onFilter}/>
      <Table
        tableData={items}
        onSortBy={onSortBy}
        onSelectPage={onSelectPage}
      />
    </div>
  );
}

export default App;


  // const createTableData = () => {
  //   let name = prompt("Enter name");
  //   let count = prompt("Enter count");
  //   let distance = prompt("Enter distance")

  //   fetch('http://localhost:3001/table', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({name, count, distance})
  //   })
  //   .then(response => {
  //     return response.text()
  //   })
  //   .then(data => {
  //     getTableData()
  //   })
  // }

  // const deleteTableData = () => {
  //   let id = prompt("Enter table id")
  //   fetch(`http://localhost:3001/table/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(response => {
  //     return response.text()
  //   })
  //   .then(data => {
  //     alert(data)
  //     getTableData()
  //   })
  // }
