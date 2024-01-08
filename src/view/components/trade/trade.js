import React from "react";
import TradeInput from "./trade_input";
import TradeAdd from "./trade_add";
import './trade.scss'

class Trade extends React.Component {
    state = {
        book: [
            { book_name: 'test', book_num: '1' },
            { book_name: 'example', book_num: '2' },
            { book_name: 'sample', book_num: '3' }
        ]
    }

    tradeBook = () => {

    }


    render() {
        return (
            <>
                <TradeInput
                    book={this.state.book}
                />
                <TradeAdd />
            </>
        );
    }
}

export default Trade;