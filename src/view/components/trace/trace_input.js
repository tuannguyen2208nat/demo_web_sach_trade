import React from "react";

class Trace_input extends React.Component {
    state = {
        book: ''
    }

    handleChangeBook = (event) => {
        this.setState({
            book: event.target.value
        })
    }

    handleSubmitChangeBook = () => {
        if (!this.state.book) {
            alert('Vui lòng nhập thông tin sách');
            return null;
        } else {
            this.props.addBook({
                book: this.state.book
            });
            this.setState({
                book: ''
            });
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
                        onChange={(event) => this.handleChangeBook(event)}
                    />
                    &nbsp;
                    <button onClick={() => this.handleSubmitChangeBook()}>Tìm</button>
                </div>
            </>
        );
    }
}

export default Trace_input;
