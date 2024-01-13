import React from "react";

class TradeShow extends React.Component {

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
                                    <button>Trade</button>
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
                                        <button>Trade</button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                }
                {search_book === true && search_name_book.length === 0 &&
                    <div>
                        Không có dữ liệu
                    </div>
                }
            </>
        );
    }

}


export default TradeShow;