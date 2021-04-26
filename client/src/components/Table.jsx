import React from 'react'
import TableRow from './TableRow'

import { useSelector } from 'react-redux'

const titleNames = ["Name", "Count", "Distance"];

function Table({ tableData, onSortBy, onSelectPage }) {
    const [ activePageLink, setActivePageLink ] = React.useState(0)
    const allPageCount = useSelector(({ tableData }) => tableData.itemsCount)

    const numPages = Math.ceil(allPageCount / 5);

    const handlePageLink = (index) => {
        setActivePageLink(index)
        onSelectPage(index)
    }

    const paginationLinks = Array(numPages).fill(0).map((item, index) =>
        <li
            key={item + '_' + index}
            className={`pagination-link ${activePageLink === index ? `active` : ''}`}
            onClick={() => handlePageLink(index)}
        >
            {index + 1}
        </li>
    )

    const handleClick = (name) => {
        onSortBy(name)
    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        {
                            titleNames.map(item =>
                                <th
                                    key={item}
                                    onClick={() => handleClick(item.toLowerCase())}
                                >{item}
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                            fill="#2C2C2C"
                                        />
                                    </svg>
                                </th>
                            )
                        }
                    </tr>
                </thead>

                <tbody>
                    {tableData &&
                        tableData.map((item) =>
                            <TableRow
                                key={item.id}
                                {...item}
                            />
                        )
                    }
                </tbody>

            </table>
            <ul className="pagination">
                {paginationLinks}
            </ul>
        </div>
    )
}

export default Table
