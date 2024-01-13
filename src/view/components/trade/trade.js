import React from "react";
import TradeSearch from "./trade_search";
import TradeAdd from "./trade_add";
import TradeShow from "./trade_show";
import './trade.scss'
import { toast } from 'react-toastify';


class Trade extends React.Component {

    componentDidMount() {
        let val = this.props.user_loggin;
        this.setUserLogged(val);
    }

    state = {
        book: [
            { book_name: 'Đắc nhân tâm', book_num: 45, book_image: require('../../../asset/images/dac_nhan_tam.png') },
            { book_name: 'Quẳng gánh lo đi và vui sống', book_num: 95, book_image: require('../../../asset/images/quang_ganh_lo_di_va_vui_song.png') },
            { book_name: 'Nghệ thuật nói trước công chúng', book_num: 40, book_image: require('../../../asset/images/nghe_thuat_noi_truoc_cong_chung.png') },
            { book_name: 'Nghĩ giàu làm giàu', book_num: 4, book_image: require('../../../asset/images/nghi_giau_lam_giau.png') },
            { book_name: 'Đừng sợ bỏ lỡ cuộc chơi Fomo', book_num: 84, book_image: require('../../../asset/images/dung_so_bo_lo_cuoc_choi_Fomo.png') },
            { book_name: 'Tại sao chúng ta nghèo', book_num: 91, book_image: require('../../../asset/images/tai_sao_chung_ta_ngheo.png') },
            { book_name: 'Chiến tranh tiền tệ (Phần 1)', book_num: 8, book_image: require('../../../asset/images/chien_tranh_tien_te_phan1.png') },
            { book_name: 'Chiến tranh tiền tệ (Phần 2)', book_num: 88, book_image: require('../../../asset/images/chien_tranh_tien_te_phan2.png') },
            { book_name: 'Cư xử như người thành công , suy nghĩ như người thành đạt', book_num: 15, book_image: require('../../../asset/images/cu_xu_nhu_nguoi_thanh_cong_suy_nghi_nhu_nguoi_thanh_dat.png') },
            { book_name: 'Cư xử như đàn bà , suy nghĩ như đàn ông', book_num: 23, book_image: require('../../../asset/images/cu_xu_nhu_dan_ba_suy_nghi_nhu_dan_ong.png') },
            { book_name: '7 Thói quen hiệu quả', book_num: 69, book_image: require('../../../asset/images/7_thoi_quen_hieu_qua.png') },
            { book_name: 'Nói luôn cho nó vuông', book_num: 56, book_image: require('../../../asset/images/noi_luon_cho_no_vuong.png') },
            { book_name: 'Đàn ông sao hỏa , đàn bà sao kim', book_num: 50, book_image: require('../../../asset/images/dan_ong_sao_hoa_dan_ba_sao_kim.png') }
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

    handleGoback = () => {
        this.setState({
            search_book: false,
            search_name_book: ''
        })
    }

    render() {
        return (
            <>
                {this.state.search_book &&
                    <div className="back">
                        <i className="fa-solid fa-angles-left" onClick={() => this.handleGoback()} ></i> <span onClick={() => this.handleGoback()} >Go back</span>
                    </div>
                }
                <div style={{ paddingTop: '50px' }}>
                    <TradeSearch
                        book={this.state.book}
                        user_logged={this.state.user_logged}
                        handleSearchBook={this.handleSearchBook}
                        handleSearchNameBook={this.handleSearchNameBook}
                    />
                    <TradeAdd
                        addBook={this.addBook}
                        user_logged={this.state.user_logged}
                    />
                    <TradeShow
                        user_logged={this.state.user_logged}
                        search_book={this.state.search_book}
                        book={this.state.book}
                        search_name_book={this.state.search_name_book}
                        tradeBook={this.tradeBook}
                    />
                </div>
            </>
        );
    }
}

export default Trade;