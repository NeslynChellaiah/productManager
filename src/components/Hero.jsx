import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
    return (<>
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                    <h1 className="display-4 fw-bold">Welcome to Product Manager</h1>
                    <p className="lead">
                        Effortlessly manage your products with our all-in-one tool.
                        Create, View, Edit, and Delete products - fast, simple, and reliable.
                    </p>
                    <Link to="/products">
                        <Button variant="light" size="lg" className="mt-3">Explore Products</Button>
                    </Link>
                </Col>
                <Col md={6}>
                    <img src="/checklist.png" alt="product check list image" className="img-fluid mt-4 mt-md-0"/>
                    <a href="https://www.flaticon.com/free-icons/checklist" className="d-none" title="checklist icons">Checklist icons created by Freepik - Flaticon</a>
                </Col>
            </Row>
        </Container>
    </>)
}

export default Hero;