import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render() {
        return <li>
        
    {this.props.commentsArray && this.props.commentsArray.map(comment => <SingleComment bookComment={comment}/>)}
        
        </li>;
    }
}

export default CommentList;
