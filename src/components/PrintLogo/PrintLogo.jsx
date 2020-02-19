import React, { Component } from 'react';
import './PrintLogo.css';
import printLogo from '../../utills/printingLogo/index';

class PrintLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logo: ''
        }
    }


    componentDidMount() {
        const { number } = this.props;
        debugger;
        if (+number > 2 && +number < 10000){
            printLogo(+this.props.number);
        }else{
            console.log('not correct')
        }        
    }

    render() {
        const { logo } = this.state;

        return (
            <div className='logo-container'>
                {logo}
            </div>
        )
    }
}

export default PrintLogo;