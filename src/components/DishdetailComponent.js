import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import dateFormat from "dateformat"

class Dishdetail extends Component {
    constructor(props) {
        super(props)
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-5 m-1">
                    <div className="row">
                        <div className="col-6 col-md-4 p-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-6 col-md-4 p-1">
                            <Card>
                                <h4>Comments</h4>
                                {dish.comments.map((cmt) => {
                                    return (
                                        <CardBody>
                                            <CardText>{cmt.comment}</CardText>
                                            <CardText>--{cmt.author}, {dateFormat(new Date(cmt.date), "mmm d, yyyy")}</CardText>
                                        </CardBody>
                                    )
                                })}

                            </Card>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        return this.renderDish(this.props.dish);
    }
}

export default Dishdetail