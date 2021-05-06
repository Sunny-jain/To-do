import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Tasks extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal = () =>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit = (event) =>{
        this.toggleModal();
    
        if(this.tasks !== ''){
            this.props.setTodos([
                ...this.props.todos, { data: {
                    task : this.tasks.value,
                    time : this.time.value,
                    date : this.date.value
                }, complete : false, id : Math.random() * 1000 }
            ])
        }
        
        event.preventDefault();
    }

    render() {
        return (
            <>
                <button className = "btn add" onClick = {this.toggleModal}>+</button>
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Add Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor = "task">Task</Label>
                                <Input placeholder = "Enter the task" type = "text" id = "tasks" name = "tasks" innerRef = {(input) => this.tasks = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor = "time">Time</Label>
                                <Input placeholder = "Enter the time in 24 hour format" type = "text" id = "time" name = "time" innerRef = {(input) => this.time = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor = "date">Date</Label>
                                <Input placeholder = "Enter the date to complete the task" type = "text" id = "date" name = "date" innerRef = {(input) => this.date = input}></Input>
                            </FormGroup>
                            <Button type = "submit" value = "submit" color = "primary">Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}   