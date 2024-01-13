import React from "react";
import { toast } from 'react-toastify';

class TradeInput extends React.Component {
    state = {
        book: '',
        num: 0,
        check1: null,
        check2: null,
        button_on: false,
        trade_num: 0
    }

    handleChangeBook = (event) => {
        this.setState({
            book: event.target.value,
            check1: false
        });
    }

    handleSubmitChangeBook = () => {
        const { book } = this.props;
        const currBookName = this.state.book;
        const existingBook = book.find(item => item.book_name === currBookName);

        if (!currBookName) {
            toast.error(`Vui lòng nhập thông tin sách`);
            return;
        }

        if (existingBook) {
            this.setState({
                num: existingBook.book_num,
                check1: true,
                check2: true
            });
            this.props.handleSearchNameBook(currBookName);
        } else {
            this.setState({
                check1: false,
                check2: false
            });
            this.props.handleSearchNameBook('');
        }
        this.props.handleSearchBook();
    }

    handleSubmitTrade = () => {
        let user_logged = this.props.user_logged;
        if (!user_logged) {
            toast.error(`Vui lòng đăng nhập để sử dụng`)
            return null;
        }
        if (this.state.button_on === true) {
            this.setState({ button_on: false })
        }
        else {
            this.setState({ button_on: true })
        }

    }

    handleEnterNumTrade = (event) => {
        this.setState({
            trade_num: event.target.value
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
                book_name: this.state.book,
                book_num: this.state.num
            }, this.state.trade_num);
            if (num !== null) {
                this.setState({
                    num: num
                })
            }
        }
        else {
            toast.error(`Nhập lại số lượng trade`)
        }
    }

    handleCancelNumTrade = () => {
        this.setState({ button_on: false })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input
                        placeholder="Bạn muốn tìm sách gì ? "
                        type="text"
                        value={this.state.book}
                        onChange={this.handleChangeBook}
                        style={{ width: '670px', height: '27px', borderRadius: '5px', fontSize: '20px' }}
                    />
                    &nbsp;
                    <button style={{ cursor: 'pointer', width: '60px', height: '30px', borderRadius: '5px' }} onClick={this.handleSubmitChangeBook}>Tìm</button>
                </div>
                {/* <div className="second">
                    {this.state.check2 === true && this.state.check1 === true && (
                        <div className="second_child">
                            Tên sách : {this.state.book} , số lượng : {this.state.num} cuốn
                            <br />
                            {this.state.button_on === false && <button style={{ cursor: 'pointer' }} className="second_button" onClick={() => this.handleSubmitTrade()}>TRADE</button>}
                            {this.state.button_on === true &&
                                <>
                                    &nbsp;
                                    <input placeholder="Nhập số lượng sách" onChange={(event) => this.handleEnterNumTrade(event)} />
                                    &nbsp;
                                    <button style={{ cursor: 'pointer' }} onClick={(event) => this.handleSubmitNumTrade(event)}>Submit</button>
                                    &nbsp;
                                    <button style={{ cursor: 'pointer' }} onClick={() => this.handleCancelNumTrade()}>Cancel</button>
                                </>

                            }
                        </div>
                    )}
                </div> */}
            </>
        );
    }
}

export default TradeInput;
