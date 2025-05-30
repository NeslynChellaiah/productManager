import { Col, Container, Row } from "react-bootstrap";
import Empty from "../components/Empty";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";


const Products = () => {
    let sampleProducts = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "Noise cancelling over-ear headphones",
            banner: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg",
            price: 120,
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Smart wearable with health tracking",
            banner: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg",
            price: 80,
        },
        {
            id: 3,
            name: "Laptop",
            description: "14-inch Full HD display, 256GB SSD",
            banner: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg",
            price: 600,
        },
    ];


    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-end mb-4">
                <AddProduct />
            </div>
            {sampleProducts.length == 0 ? (
                <Empty message={"We are currently out of stock"} />
            ) : (
                <Row className="g-4">
                    {sampleProducts.map((prod) => (
                        <Col key={prod.id} xs={12} sm={6} md={3} lg={3}>
                            <ProductCard product={prod} />
                        </Col>
                    ))}
                </Row>

            )}
        </Container>
    )
}

export default Products;