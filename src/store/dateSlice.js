import {
    createSlice
} from '@reduxjs/toolkit'


const initialState = [{
        id: "day",
        value: 1
    },
    {
        id: "month",
        value: 1
    },
    {
        id: "year",
        value: 1900
    }
]
export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        getDay: (state, action) => {
            let newDay = state.find((day) => day.id === "day")
            newDay.value = action.payload
        },
        getMonth: (state, action) => {
            let newMonth = state.find((day) => day.id === "month")
            newMonth.value = action.payload
        },
        getYear: (state, action) => {
            let newYear = state.find((day) => day.id === "year")
            newYear.value = action.payload
        }
    },
}, )

export const {
    getDay,
    getMonth,
    getYear
} = dateSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

export default dateSlice.reducer