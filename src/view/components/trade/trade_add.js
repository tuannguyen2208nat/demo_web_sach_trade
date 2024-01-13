import React from 'react';
import Modal from 'react-modal';
import './trade.scss';
import { toast } from 'react-toastify';

class Trade_add extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            book_name: '',
            book_num: 0
        };
    }
    handleButton_addBook = () => {
        let user_logged = this.props.user_logged;
        if (!user_logged) {
            toast.error(`Vui lòng đăng nhập để sử dụng`)
            return null;
        }
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
        if (!this.state.book_name) {
            toast.error(`Vui lòng nhập tên sách`);
            return null;
        }
        if (this.state.book_num > -1) {
            if (this.state.book_num === 0) {
                toast.error(`Vui lòng nhập lại số lượng sách`);
            }
            else {
                this.props.addBook({
                    book_name: this.state.book_name,
                    book_num: this.state.book_num,
                })
                this.handleCloseModal();
            }

        }
        else {
            toast.error(`Vui lòng nhập lại số lượng sách`);
        }
    };

    render() {
        return (
            <>
                <button style={{ cursor: 'pointer', height: '50px', width: '100px' }} className="add" onClick={() => this.handleButton_addBook()}>
                    Add book
                </button>

                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Add Book Modal"
                >
                    <h2>Add Book</h2>
                    <label>
                        Tên sách :
                        {" "}<input
                            type="text"
                            name="book_name"
                            value={this.state.book_name}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Số lượng :
                        {" "}<input
                            type="number"
                            name="book_num"
                            value={this.state.book_num}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <button style={{ cursor: 'pointer' }} onClick={this.handleAddBookSubmit}>Add Book</button>
                    &nbsp;<button style={{ cursor: 'pointer' }} onClick={this.handleCloseModal}>Cancel</button>
                </Modal>
            </>
        );
    }
}

export default Trade_add;
