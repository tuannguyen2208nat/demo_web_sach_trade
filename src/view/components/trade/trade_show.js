import React from "react";
import { toast } from 'react-toastify';
import Modal from 'react-modal';

class TradeShow extends React.Component {
    state = {
        isModalOpen: false,
        book_num: 0
    }

    handleTrade = () => {
        let user_logged = this.props.user_logged;
        if (!user_logged) {
            toast.error(`Vui lòng đăng nhập để sử dụng`)
            return null;
        }
        if (this.state.button_on === true) {
            this.setState({ button_on: false, isModalOpen: true })
        }
        else {
            this.setState({ button_on: true, isModalOpen: true })
        }
    }

    handleAddBookSubmit = () => {
        if (this.state.book_num > -1) {
            if (this.state.book_num === 0) {
                toast.error(`Vui lòng nhập lại số lượng sách`);
            }
            else {
                toast.success(`Trade thành công`);
                this.handleCloseModal();
            }

        }
        else {
            toast.error(`Vui lòng nhập lại số lượng sách`);
        }
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    render() {
        let books = this.props.book;
        let search_book = this.props.search_book;
        let search_name_book = this.props.search_name_book;
        return (
            <>
                {search_book === false &&
                    <div className="gridContainerStyle">
                        {books.map((book, index) => (
                            <div key={index} className="bookContainerStyle">
                                <div>  <img src={book.book_image} alt={`${book.book_name}`} className="imageStyle" /></div>
                                <div>{book.book_name}</div>
                                <div style={{ fontSize: '20px' }}>Số lượng :{book.book_num}</div>
                                <div className="buttonContainer">
                                    <button onClick={() => this.handleTrade()}>Trade</button>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                {search_book === true && search_name_book && search_name_book.length > 0 &&
                    <div className="gridContainerStyle">
                        {books.map((book, index) => (
                            book.book_name === search_name_book && (
                                <div key={index} className="bookContainerStyle">
                                    <div><img src={book.book_image} alt={`${book.book_name}`} className="imageStyle" /></div>
                                    <div>{book.book_name}</div>
                                    <div style={{ fontSize: '20px' }}>Số lượng :{book.book_num}</div>
                                    <div className="buttonContainer">
                                        <button onClick={() => this.handleTrade()}> Trade</button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div >
                }
                {
                    search_book === true && search_name_book.length === 0 &&
                    <div style={{ padding: '100px' }}>
                        Không có dữ liệu
                    </div>
                }

                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Add Book Modal"
                >
                    <h2>Nhập số lượng sách muốn trade</h2>
                    <label>
                        Số lượng :
                        &nbsp;<input
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


export default TradeShow;