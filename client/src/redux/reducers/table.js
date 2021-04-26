const initialState = {
    items: [],
    itemsCount: 0,
    sortBy: {
        type: "id",
        order: "DESC"
    },
    filter: {},
    offsetPage: 0
}

const tableData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TABLE_DATA":
            return {
                ...state,
                items: action.payload
            }
        case "SET_SORT_BY":
            const newOrder = state.sortBy.order === "DESC" ? "ASC" : "DESC"
            return {
                ...state,
                sortBy: {
                    type: action.payload,
                    order: newOrder
                }
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            }
        case "SET_COUNT_DATA":
            return {
                ...state,
                itemsCount: action.payload
            }
        case "SET_OFFSET_PAGE":
            const offset = action.payload * 5
            return {
                ...state,
                offsetPage: offset
            }
        default:
            return state
    }
}

export default tableData;
