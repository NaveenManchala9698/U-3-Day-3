
import { Component } from "react";
import { ListGroup } from "react-bootstrap"
import CommentList from "./CommentList";


class CommentArea extends Component {

    state = {
        comments: []
    }

    componentDidMount = () => {
        this.fetchComments()
    }

    fetchComments = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin

            const response = await fetch(url, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTU5ODQyODMsImV4cCI6MTY1NzE5Mzg4M30.e2q0AAEarxR5KoaV3O9_YmHT15EsrxirVMFiI3ILTxg"
                }
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({
                    comments: data
                })
            }
            else {
                alert("Error!!")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <h4>Comments</h4>
                <ListGroup>
                    {this.state.comments && <CommentList commentsArray={this.state.comments} />}
                </ListGroup>
            </>

        )
    }
}

export default CommentArea