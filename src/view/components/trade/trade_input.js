import React from "react";
import { toast } from 'react-toastify';

class TradeInput extends React.Component {
    state = {
        book: '',
        num: '',
        check1: null,
        check2: null
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
        const sach = this.state.book;
        this.props.tradeBook({
            sach
        });
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
                            &nbsp;
                            <button className="third_button" onClick={() => this.handleSubmitTrade()}>TRADE</button>
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
