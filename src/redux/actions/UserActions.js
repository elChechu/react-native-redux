import axios from 'axios'

// actions
export const onFetchEmployes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees")
            dispatch({type: 'FETCH_EMPLOYES', payload: response.data})
        } catch (error) {   
            dispatch({type: 'FETCH_EMPLOYES', payload: error})
        }
    }
}


export const onFetchEmployesById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://dummy.restapiexample.com/api/v1/employee/"+id)
            console.log(response)
            dispatch({type: 'FETCH_EMPLOYESBYID', payload: response.data});

        } catch (error) {
            dispatch({type: 'FETCH_EMPLOYESBYID', payload: response.error});
        }
    }
}


export const onFetchProduct = () => {
    return async (dispatch) => {
        try {
            const response = {
                data: [
                    {name: "Mac Mini", price: 890},
                    {name: "Macbook Pro", price: 1500},
                    {name: "iPhone", price: 950},
                    {name: "Xiaomi", price: 450},
                    {name: "Notebook", price: 500},
                    {name: "Airpods", price: 150},
                    {name: "Macbook pro 16", price: 3500},
                ]
            }
            dispatch({type: 'FETCH_PRODUCTS', payload: response.data});

        } catch (error) {
            dispatch({type: 'FETCH_PRODUCTS', payload: response.error});
        }
    }
}
