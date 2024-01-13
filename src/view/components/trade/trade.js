import React from "react";
import TradeInput from "./trade_input";
import TradeAdd from "./trade_add";
import TradeShow from "./trade_show";
import './trade.scss'
import { toast } from 'react-toastify';
import book1 from '../../../asset/images/dac_nhan_tam.png';
import book2 from '../../../asset/images/quang_ganh_lo_di_va_vui_song.png'
import book3 from '../../../asset/images/nghe_thuat_noi_truoc_cong_chung.png'
import book4 from '../../../asset/images/nghi_giau_lam_giau.png'

class Trade extends React.Component {

    componentDidMount() {
        let val = this.props.user_loggin;
        this.setUserLogged(val);
    }

    state = {
        book: [
            { book_name: 'Đắc nhân tâm', book_num: 10, book_image: book1 },
            { book_name: 'Quẳng gánh lo đi và vui sống', book_num: 20, book_image: book2 },
            { book_name: 'Nghệ thuật nói trước công chúng', book_num: 30, book_image: book3 },
            { book_name: 'Nghĩ giàu làm giàu', book_num: 40, book_image: book4 }
        ],
        user_logged: false,
        search_book: false,
        search_name_book: ''
    }

    handleSearchBook = () => {
        this.setState({
            search_book: true
        })
    }

    handleSearchNameBook = (val) => {
        this.setState({
            search_name_book: val
        })
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
            let newBook = { book_name: val.book_name, book_num: parseInt(val.book_num, 10) };
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
                <div style={{ paddingTop: '50px' }}>
                    <TradeInput
                        book={this.state.book}
                        tradeBook={this.tradeBook}
                        user_logged={this.state.user_logged}
                        handleSearchBook={this.handleSearchBook}
                        handleSearchNameBook={this.handleSearchNameBook}
                    />
                    <TradeAdd
                        addBook={this.addBook}
                        user_logged={this.state.user_logged}
                    />
                    <TradeShow
                        search_book={this.state.search_book}
                        book={this.state.book}
                        search_name_book={this.state.search_name_book}
                    />
                </div>
            </>
        );
    }
}

export default Trade;