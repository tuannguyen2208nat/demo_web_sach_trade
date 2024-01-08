import React from "react";
import { toast } from 'react-toastify';

class TradeInput extends React.Component {
    state = {
        book: '',
        num: 0,
        check1: null,
        check2: null,
        button_on: false,
        trace_num: 0
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
        this.setState({ button_on: true })
    }
    handleEnterNumTrace = (event) => {
        this.setState({
            trace_num: event.target.value
        })

    }
    handleSubmitNumTrace = () => {
        let check = this.state.trace_num;
        if (check > -1) {
            toast.success(`Nhập thành công`)
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
                            &nbsp;
                            <button className="third_button" onClick={() => this.handleSubmitTrade()}>TRADE</button>
                            {this.state.button_on === true &&
                                <>
                                    <input onChange={(event) => this.handleEnterNumTrace(event)} />
                                    &nbsp;
                                    <button onClick={(event) => this.handleSubmitNumTrace(event)}>Submit</button>
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
