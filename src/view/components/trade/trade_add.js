import React from 'react';
import Modal from 'react-modal';
import './trade.scss';

class Trade_add extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            bookName: '',
            bookQuantity: 0,
        };
    }

    handleButton_addBook = () => {
        this.setState({ isModalOpen: true });
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleAddBookSubmit = () => {
        // Do something with the bookName and bookQuantity values
        console.log('Book Name:', this.state.bookName);
        console.log('Book Quantity:', this.state.bookQuantity);

        // Close the modal
        this.handleCloseModal();
    };

    render() {
        return (
            <>
                <button className="add" onClick={() => this.handleButton_addBook()}>
                    Add book
                </button>

                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Add Book Modal"
                >
                    <h2>Add Book</h2>
                    <label>
                        Book Name:
                        <input
                            type="text"
                            name="bookName"
                            value={this.state.bookName}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Book Quantity:
                        <input
                            type="number"
                            name="bookQuantity"
                            value={this.state.bookQuantity}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <button onClick={this.handleAddBookSubmit}>Add Book</button>
                    <button onClick={this.handleCloseModal}>Cancel</button>
                </Modal>
            </>
        );
    }
}

export default Trade_add;
