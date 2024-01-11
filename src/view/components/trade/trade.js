import React from "react";
import TradeInput from "./trade_input";
import TradeAdd from "./trade_add";
import './trade.scss'
import { toast } from 'react-toastify';
import axios from "../customize-axios";

class Trade extends React.Component {

    componentDidMount() {
        let val = this.props.user_loggin;
        this.setUserLogged(val);
    }

    state = {
        book: [
            { book_name: 'test', book_num: 1 },
            { book_name: 'example', book_num: 2 },
            { book_name: 'sample', book_num: 3 }
        ],
        user_logged: false

    }
    tradeBook = (val, trade_num) => {
        let { book } = this.state;
        let bookCopy = [...book];
        let objIndex = bookCopy.findIndex((item) => item.book_name === val.book_name);
        if (objIndex === -1) {
            toast.error(`Trade thất bại (Không tìm thấy sách)`);
            return null;
        }
        let num1 = parseInt(bookCopy[objIndex].book_num, 10);
        let num2 = trade_num;
        if (num1 - num2 >= 0) {
            if (num1 - num2 === 0) {
                let currentBook = this.state.book;
                currentBook = currentBook.filter((item) => item.book_name !== val.book_name)
                this.setState({
                    book: currentBook
                })
                toast.success(`Trade thành công`)
                return 0;
            }
            else {
                bookCopy[objIndex].book_num = num1 - num2;
                let num = num1 - num2;
                this.setState({
                    book: bookCopy
                });
                toast.success(`Trade thành công`)
                return num;
            }
        }
        else {
            toast.error(`Trade thất bại (Số lượng khả dụng không đủ)`)
        }
    }

    addBook = (val) => {
        let { book } = this.state;
        let bookCopy = [...book];
        let objIndex = bookCopy.findIndex((item) => item.book_name === val.book_name);
        if (objIndex >= 0) {
            let num1 = parseInt(bookCopy[objIndex].book_num, 10);
            let num2 = parseInt(val.book_num, 10);
            console.log('num', num2)
            bookCopy[objIndex].book_num = num1 + num2;
            this.setState({
                book: bookCopy
            });
        } else {
            let newBook = { book_name: val.book_name, book_num: parseInt(val.book_num, 10) }; // Parse as an integer
            this.setState((prevState) => ({
                book: [...prevState.book, newBook]
            }));
        }
        toast.success(`Thêm sách thành công`);
    }

    setUserLogged = (val) => {
        this.setState({
            user_logged: val
        })
    }

    render() {
        return (
            <>
                <TradeInput
                    book={this.state.book}
                    tradeBook={this.tradeBook}
                    user_logged={this.state.user_logged}
                />
                <TradeAdd
                    addBook={this.addBook}
                    user_logged={this.state.user_logged}
                />
            </>
        );
    }
}

const loginApi = (email, password) => {
    return axios.post("/api/login", { email, password })
}


export { Trade, loginApi }