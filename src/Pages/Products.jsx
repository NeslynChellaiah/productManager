import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import Empty from "../components/Empty";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductModal from "../components/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, deleteProducts, fetchProducts, updateProducts } from "../redux/actions/productActions";


const Products = () => {
    const dispatch  = useDispatch()
const { items = [], loading } = useSelector(state => state.products);
    // let sampleProducts = [
    //     {
    //         id: 1,
    //         title: "Wireless Headphones",
    //         description: "Noise cancelling over-ear headphones",
    //         image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg",
    //         price: 120,
    //     },
    //     {
    //         id: 2,
    //         title: "Smart Watch",
    //         description: "Smart wearable with health tracking",
    //         image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg",
    //         price: 80,
    //     },
    //     {
    //         id: 3,
    //         title: "Laptop",
    //         description: "14-inch Full HD display, 256GB SSD",
    //         image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg",
    //         price: 600,
    //     },
    // ];

    const [showModal, setShowModal] = useState(false);
    const [editItem, setEditItem] = useState();

    const handleSubmit = (values) => {
        console.log(values)
        if (!editItem) {
            // setEditItem()
            dispatch(addProducts(values))
        } else {
            // return
            dispatch(updateProducts(values))
        }
        setShowModal(!showModal)
        // alert()
    }

    const handleAdd = () => {
        setEditItem(null);
        setShowModal(!showModal)
    }

    const handleEdit = (product) => {
        setEditItem(product)
        setShowModal(!showModal)
    }

    const handleDelete = (id) => {
        dispatch(deleteProducts(id))
    }

    useEffect(()=> {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-end mb-4">
                <Button variant="primary" onClick={handleAdd}><i className="bi bi-plus-circle me-2"></i>Add Product</Button>
                <AddProduct show={showModal} onClose={() => setShowModal(!showModal)} initialValues={editItem || {
                    title: "",
                    image: "",
                    description: "",
                    price: 0
                }} onSubmit={handleSubmit} isEdit={editItem}/>
                {/* <AddProduct show={showModal} onClose={() => setShowModal(!showModal)} initialValues={editItem || {
                    title: "",
                    image: "",
                    MdDescription: "",
                    price: ""
                }} onSubmit={handleSubmit}/>
                </ProductModal> */}
            </div>
            {loading ? 
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
                <Spinner animation="border" role="status"/>
            </div> :
            items.length == 0 ? (
                <Empty message={"We are currently out of stock"} />
            ) : (
                <Row className="g-4">
                    {items.map((prod) => (
                        <Col key={prod.id} xs={12} sm={6} md={3} lg={3}>
                            <ProductCard product={prod} onEdit={()=> handleEdit(prod)} onDelete={() => {handleDelete(prod.id)}}/>
                        </Col>
                    ))}
                </Row>

            )}
        </Container>
    )
}

export default Products;