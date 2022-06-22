
import { Component } from "react";
import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"


class BookList extends Component {

    state = {
        searchQuery: ''
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Search Books" value={this.state.searchQuery} onChange={(e) => {
                                    this.setState({ searchQuery: e.target.value })
                                }
                                } />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    {
                        this.props.books.filter(SelectedBook => SelectedBook.title.includes(this.state.searchQuery)).map(SelectedBook => (
                            < Col key={SelectedBook.asin} md={4}>
                                <SingleBook book={SelectedBook} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

/* const BookList = ({ SelectedCategory }) => (
    <Container>
        <Row>
            {
                SelectedCategory.map(SelectedBook => (
                    <Col md={3}>
                        <SingleBook book={SelectedBook} />
                    </Col>
                ))
            }
        </Row>
    </Container>
)
 */
export default BookList