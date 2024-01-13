import React from "react";
import { toast } from 'react-toastify';
import Modal from 'react-modal';


class TradeShow extends React.Component {
    state = {
        isModalOpen: false,
        book_name: '',
        book_num: 0,
        trade_num: 0,
    }

    handleTrade = (val) => {
        let user_logged = this.props.user_logged;
        if (!user_logged) {
            toast.error(`Vui lòng đăng nhập để sử dụng`)
            return null;
        }

        this.setState({
            book_name: val.book_name,
            book_num: val.book_num,
            isModalOpen: true
        })
    }


    handleSubmitNumTrade = () => {
        if (!this.state.trade_num) {
            toast.error(`Nhập lại số lượng trade`)
            return null;
        }
        let check = this.state.trade_num;
        if (check > -1) {
            let num = this.props.tradeBook({
                book_name: this.state.book_name,
                book_num: this.state.book_num
            }, this.state.trade_num);
            if (num !== null) {
                this.setState({
                    book_num: num,
                    trade_num: 0
                })
            }
            else {
                this.setState({
                    book_name: '',
                    book_num: 0,
                    trade_num: 0
                })
            }
            this.handleCloseModal();
        }
        else {
            toast.error(`Nhập lại số lượng trade`)
        }
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleEnterNumTrade = (event) => {
        this.setState({
            trade_num: event.target.value
        })
    };


    render() {
        let books = this.props.book;
        let search_book = this.props.search_book;
        let search_name_book = this.props.search_name_book;
        return (
            <>
                {search_book === false &&
                    <div className="gridContainerStyle ">
                        {books.map((book, index) => (
                            <div key={index} className="bookContainerStyle">
                                <div>  <img src={book.book_image} alt={`${book.book_name}`} className="imageStyle" /></div>
                                <div>{book.book_name}</div>
                                <div style={{ fontSize: '20px' }}>Số lượng :{book.book_num}</div>
                                <div className="buttonContainer">
                                    <button onClick={() => this.handleTrade(book)}>Trade</button>
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
                                        <button onClick={() => this.handleTrade(book)}> Trade</button>
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
                    contentLabel="Trade Book Modal"
                >
                    <h2>Nhập số lượng sách muốn trade</h2>
                    <label >
                        Số lượng :
                        &nbsp;
                        <input
                            type="number"
                            name="trade_num"
                            value={this.state.trade_num}
                            onChange={this.handleEnterNumTrade}

                        />
                    </label>
                    <br />
                    <button style={{ cursor: 'pointer' }} onClick={this.handleSubmitNumTrade} >Trade book</button>
                    &nbsp;<button style={{ cursor: 'pointer' }} onClick={this.handleCloseModal}>Cancel</button>
                </Modal >
            </>
        );
    }

}


export default TradeShow;