
import { Component } from "react";
import { Alert } from "react-bootstrap";


class WarningSign extends Component {
    render() {
        return (
            <div>
                <Alert variant={this.props.variant}>
                    Something is Fishy!!
                </Alert>
            </div>
        )
    }
}

export default WarningSign