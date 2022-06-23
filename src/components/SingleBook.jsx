import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

/* const SingleBook = (props) => (

    
    < Container >
        <Row>
            <div className="col-12 text-center "><h1>{props.category} Books</h1></div>
            < Col className="mb-3" >
                <Card className="card" >
                    <Card.Img variant="top" src={props.book.img} style={{ height: "400px", width: "auto", }} />
                    <Card.Body>
                        <Card.Title>
                            {props.book.title}
                        </Card.Title>

                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container >
) */

class SingleBook extends Component {
    state = {
        selected: false,
    };

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <div className="col-12 text-center ">
                            <h1>{this.props.category} Books</h1>
                        </div>

                        <Col className="mb-3">
                            <Card
                                className="card"

                                key={this.props.book.asin}

                                onClick={() =>
                                    this.setState({ selected: !this.state.selected })
                                }
                                style={{
                                    border: this.state.selected ? "4px solid Coral" : "none",
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={this.props.book.img}
                                    style={{ height: "auto", width: "300px" }}
                                />
                                <Card.Body>
                                    <Card.Title>{this.props.book.title}</Card.Title>
                                    {this.state.selected && <CommentArea asin={this.props.book.asin}/>}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default SingleBook;
