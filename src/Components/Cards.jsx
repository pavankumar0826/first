import { Col, Row, Container } from "react-bootstrap";


const Cards = ({ data }) => {

    return (
        <>
            <Container>
                <Row>
                    {data.map((item) => {

                        return (
                            <>
                                <Col key={item.id} className="col-4" >
                                    <a href={item.links.html} target="_blank">
                                        <img src={item.urls.small} style={{ height: "250px" }} className="w-75 my-4 object-fit-cover" alt="" />
                                    </a>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
};

export default Cards;