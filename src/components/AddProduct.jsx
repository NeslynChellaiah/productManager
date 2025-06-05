import { Button, Form } from "react-bootstrap";
import ProductModal from "./ProductModal";
import { Formik } from "formik";
import * as yup from 'yup';

const AddProduct = ({ show, onClose, initialValues, onSubmit, isEdit }) => {

    // const handleSubmit = () => {
    //     setShowModal(false);
    // }

    const validationSchema = yup.object().shape({
        title: yup.string().required("Product name is required"),
        image: yup.string().required("Banner is required"),
        description: yup.string().required("Description is required"),
        price: yup.number().required("Price is required").positive(),
    })

    return (<>

        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
                onClose();
            }}>
            {
                (
                    { handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        errors,
                        touched }
                ) => {
                    return <ProductModal
                        show={show}
                        onClose={onClose}
                        onSubmit={handleSubmit}
                        title={isEdit ? "Edit Product" : "Add New Product"}
                        submitLabel={isEdit ? "Update" : "Add"}
                    >
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Enter Product Name"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Banner</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    placeholder="Enter Banner URL"
                                    value={values.image}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                    isInvalid={!!errors.image}

                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.image}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    name="description"
                                    placeholder="Enter Descritpion"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.description}

                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type='number'
                                    name="price"
                                    placeholder="0"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.price}

                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.price}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </ProductModal>
                }
            }

        </Formik>

    </>)
}

export default AddProduct;