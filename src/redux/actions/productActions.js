import { toast } from "react-toastify";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const CREATE_PRODUCTS_REQUEST = "CREATE_PRODUCTS_REQUEST";
export const CREATE_PRODUCTS_SUCCESS = "CREATE_PRODUCTS_SUCCESS";
export const CREATE_PRODUCTS_FAILURE = "CREATE_PRODUCTS_FAILURE";

export const UPDATE_PRODUCTS_REQUEST = "UPDATE_PRODUCTS_REQUEST";
export const UPDATE_PRODUCTS_SUCCESS = "UPDATE_PRODUCTS_SUCCESS";
export const UPDATE_PRODUCTS_FAILURE = "UPDATE_PRODUCTS_FAILURE";

export const DELETE_PRODUCTS_REQUEST = "DELETE_PRODUCTS_REQUEST";
export const DELETE_PRODUCTS_SUCCESS = "DELETE_PRODUCTS_SUCCESS";
export const DELETE_PRODUCTS_FAILURE = "DELETE_PRODUCTS_FAILURE";

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: err.message });
        toast.err("Failed to fetch products")

    }
}

export const addProducts = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCTS_REQUEST });
    try {
        const res = await fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        const data = await res.json();

        dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data });
        toast.success("Successfully created product")

    } catch (err) {
        dispatch({ type: CREATE_PRODUCTS_FAILURE, payload: err.message });
        toast.err("Failed to create product")

    }
}

export const updateProducts = (product) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCTS_REQUEST });
    try {
        const res = await fetch("https://fakestoreapi.com/products/"+product?.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        const data = await res.json();
        console.log(data)
        dispatch({ type: UPDATE_PRODUCTS_SUCCESS, payload: data });
        toast.success("Successfully updated product")

    } catch (err) {
        dispatch({ type: UPDATE_PRODUCTS_FAILURE, payload: err.message });
        toast.err("Failed to update product")

    }
}


export const deleteProducts = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCTS_REQUEST });
    try {
        await fetch("https://fakestoreapi.com/products/" + id, {
            method: "DELETE"
        });

        dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: id });
        toast.success("Successfully deleted products")

    } catch (err) {
        dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: err.message });
        toast.err("Failed to delete product")


    }
}