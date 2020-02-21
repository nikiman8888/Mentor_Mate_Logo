import React, { Component } from 'react';
import './Main.css';
import errorHandler from '../../utills/errorHandler';
import PrintLogo from '../PrintLogo/PrintLogo';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            error: '',
            success: false,
        }
    }

    changeHandler = (e) => {
        this.setState({ success: '' })
        this.setState({ error: '' });
        this.setState({ number: e.target.value });
    }

    clearInputHandler = () => {
        this.setState({ number: '' })
    }

    submitHandler = (e) => {
        e.preventDefault();

        if (errorHandler(this.state.number)) {
            const message = errorHandler(this.state.number);
            this.setState({ error: message });
            this.setState({ success: false });

        } else {
            this.setState({ success: true })
        }
    }

    render() {
        const { error, success, number } = this.state;
        
        return (
            <div className='main-container'>
                <h3>The App is still  under construction :)</h3>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor='number'>Input a number</label>
                    <input
                        type='number'
                        id='number'
                        value={number}
                        autoFocus
                        required
                        onChange={this.changeHandler}
                        onBlur={this.changeHandler}
                    />
                    <button type='submit'  >Push</button>
                </form>
                {error && <p>{error}</p>}
                {success && <PrintLogo number={number} />}
            </div>
        )
    }
}

export default Main;