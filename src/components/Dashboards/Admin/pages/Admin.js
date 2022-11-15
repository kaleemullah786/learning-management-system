import React, {useState} from 'react'
import { Button, Container, Row, Col } from 'reactstrap';

const Admin = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container className="mt-4 mb-4">
        <h1 className="table-title">Admins</h1>
        <Row>
            <Row md='12'>
                <Col>
                    <Button color='primary' className="mt-auto ml-3 w-auto" onClick={toggle}>Add Admin</Button>
                </Col>
            </Row>
        </Row>

        </Container>
    )
}

export default Admin
