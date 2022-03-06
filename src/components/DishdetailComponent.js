import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, FormGroup, Label, Button, Col } from "reactstrap";
import dateFormat from "dateformat"
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class Dishdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModelOpen: false
        }
        this.toggleModel = this.toggleModel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }
    renderDish = () => {
        const { dish, comments } = this.props;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-5 m-1">
                            <div className="row">
                                <div className="col-4 col-4 m-1">
                                    <Card>
                                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                                        <CardBody>
                                            <CardTitle>{dish.name}</CardTitle>
                                            <CardText>{dish.description}</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-6 col-6 m-1">
                                    <h4>Comments</h4>
                                    {comments.map((cmt) => {
                                        return (
                                            <CardBody>
                                                <CardText>{cmt.comment}</CardText>
                                                <CardText>--{cmt.author}, {dateFormat(new Date(cmt.date), "mmm d, yyyy")}</CardText>
                                            </CardBody>
                                        )
                                    })}
                                    <Button outline onClick={this.toggleModel}>
                                        <span className="fa fa-pencil fa-lg"> Submit Contents</span>
                                    </Button>
                                    <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                                        <ModalHeader toggle={this.toggleModel}>Submit Contents</ModalHeader>
                                        <ModalBody>
                                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                                <FormGroup>
                                                    <Label htmlFor="rating">Rating:</Label>
                                                    <Col>
                                                        <Control.select model=".rating" name="rating"
                                                            className="form-control" >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Control.select>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label HtmlFor="author" >Yours Name:</Label>
                                                    <Col>
                                                        <Control.text model=".author" id="author" name="author" placeholder="Yours Name" 
                                                            className="form-control"
                                                            validators={{
                                                                required, minLength: minLength(3), maxLength: maxLength(15)

                                                            }}
                                                        />
                                                        <Errors className="text-danger" model=".author" show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                                minLength: 'Must be greater than 2 characters',
                                                                maxLength: 'Must be 15 characters or less',
                                                            }} />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label htmlFor="cm" >Comment</Label>
                                                    <Col >
                                                        <Control.textarea model=".cm" id="cm" name="cm" rows="10"
                                                            className="form-control" />
                                                    </Col>
                                                </FormGroup>
                                                <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                                            </LocalForm>
                                        </ModalBody>
                                    </Modal>
                                </div>
                            </div>
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
        console.log(this.props)
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    {this.renderDish()}
                </div>
            </>
        );
    }
}

export default Dishdetail