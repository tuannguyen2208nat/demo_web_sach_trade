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
        } else {
            this.setState({
                check1: false,
                check2: false
            });
        }
    }

    handleSubmitTrade = () => {
        if (this.state.button_on === true) {
            this.setState({ button_on: false })
        }
        else {
            this.setState({ button_on: true })
        }

    }
    handleCloseSubmitTrade = () => {
        this.setState({ button_on: false })
    }
    handleEnterNumTrade = (event) => {
        this.setState({
            trade_num: event.target.value
        })
    }

    handleSubmitNumTrade = () => {
        let check = this.state.trade_num;
        if (check > -1) {
            this.props.tradeBook({
                book_name: this.state.book,
                book_num: this.state.num
            }, this.state.trade_num);
            this.handleCloseSubmitTrade();
        }
        else {
            toast.error(`Nhập lại số lượng trade`)
        }

    }


    render() {
        return (
            <>
                <div className="first">
                    Sách muốn tìm
                </div>
                <div className="second">
                    <input
                        type="text"
                        value={this.state.book}
                        onChange={this.handleChangeBook}
                    />
                    &nbsp;
                    <button onClick={this.handleSubmitChangeBook}>Tìm</button>
                </div>
                <div className="third">
                    {this.state.check2 === true && this.state.check1 === true && (
                        <div className="third_child">
                            Tên sách : {this.state.book} , số lượng : {this.state.num} cuốn
                            <br />
                            <button className="third_button" onClick={() => this.handleSubmitTrade()}>TRADE</button>
                            {this.state.button_on === true &&
                                <>
                                    &nbsp;
                                    <input onChange={(event) => this.handleEnterNumTrade(event)} />
                                    &nbsp;
                                    <button onClick={(event) => this.handleSubmitNumTrade(event)}>Submit</button>
                                </>

                            }
                        </div>
                    )}
                    {this.state.check2 === false && (
                        <div>
                            Không có dữ liệu
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default TradeInput;
