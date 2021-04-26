import React from 'react'

const Filter = React.memo(function Filter({ onFilter }) {
    const [filterType, setFilterType] = React.useState(null)
    const [filterCondition, setFilterCondition] = React.useState(null)
    const [filterText, setFilterText] = React.useState('')

    const handleChange = (e) => {
        if (e.target.name === "filter-type") {
            setFilterType(e.target.value)
        }
        if (e.target.name === "filter-condition") {
            setFilterCondition(e.target.value)
        }
        if (e.target.name === "filter-text") {
            let value = filterType === "name" ? e.target.value : Number(e.target.value)
            setFilterText(value)
        }
    }

    const handleClick = () => {
        const filterData = {
            filterType,
            filterCondition,
            filterText: filterCondition === 'LIKE' ? `%${filterText}%` : filterText
        }
        onFilter(filterData)
    }

    return (
        <div className="filter">
            <div>
                <select onChange={handleChange} name="filter-type" id="">
                    <option value="">Выберите колонку</option>
                    <option value="name">Name</option>
                    <option value="count">Count</option>
                    <option value="distance">Distance</option>
                </select>
            </div>
            <div>
                <select onChange={handleChange} name="filter-condition" id="">
                    <option value="">Выберите операцию</option>
                    <option value="=">Равно</option>
                    <option value="LIKE"
                        disabled={filterType === 'count' || filterType === 'distance' ? true : false}
                    >
                        Содержит
                    </option>
                    <option value=">"
                        disabled={filterType === 'name' ? true : false}
                    >
                        Больше
                    </option>
                    <option value="<"
                        disabled={filterType === 'name' ? true : false}
                    >
                        Меньше
                    </option>
                </select>
            </div>
            <div>
                <input onChange={handleChange} name="filter-text" value={filterText} required />
            </div>
            <button onClick={handleClick} disabled={filterType && filterCondition ? false : true}>Применить</button>
        </div>
    )
})

export default Filter
