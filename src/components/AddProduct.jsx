import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProductModal from "./ProductModal";

const AddProduct = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({name: "", description: ""});

    const handleSubmit = () => {
        setShowModal(false);
    }

    return (<>
        <h1>{showModal}</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}><i className="bi bi-plus-circle me-2"></i>Add Product</Button>

        <ProductModal
            show={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleSubmit}
            title="Add New Product"
            submitLabel="Add"
        >
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Banner</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Banner URL"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, banner: e.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as='textarea'
                        placeholder="Enter Descritpion"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type='number'
                        placeholder="0"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </Form.Group>
            </Form>
        </ProductModal>
    </>)
}

export default AddProduct;