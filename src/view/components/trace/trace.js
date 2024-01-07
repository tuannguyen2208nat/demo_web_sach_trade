import React from "react";
import TraceInput from "./trace_input";
import TraceBuy from "./trace_trace";
import Traceadd from "./trace_add";
class Trace extends React.Component {
    state = {
        book: [
            { book_name: 'test', book_num: '1' },
            { book_name: 'example', book_num: '2' },
            { book_name: 'sample', book_num: '3' }
        ]
    }

    buyBook = () => {

    }


    render() {
        return (
            <>
                <TraceInput
                    book={this.state.book}
                />
                <TraceBuy
                    book={this.state.book}
                    buyBook={this.buyBook}
                />
                <Traceadd />
            </>
        );
    }
}

export default Trace;