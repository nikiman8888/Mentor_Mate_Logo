import React, { Component } from 'react';
import './PrintLogo.css';
import printLogo from '../../utills/printingLogo/index';
import LogoRow from '../Logo/LogoRow';

class PrintLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logo: ''
        }
    }
    componentWillMount() {
        const { inputChanged } = this.props;
        console.log(this.props);
        console.log(this.state)
    }

    componentDidMount() {
        const { number, inputChanged } = this.props;
        debugger;

        let result = [];  // this array is to fill it with every single row from the logo
        debugger;
        if (+number > 2 && +number < 10000) {
            let logoParts = printLogo(+number); // get the logo parts
            debugger;
            for (const currentPart in logoParts) {       //looping 2 times to get every single row
                let arrayOfParts = logoParts[currentPart];

                for (const logoRow in arrayOfParts) {

                    result.push(arrayOfParts[logoRow]);
                    debugger;
                }
            }

            this.setState({ logo: result }); // and set state with final result
        }
    }

    render() {
        const { logo } = this.state;

        return (
            <div className='logo-container'>
                {   // start to rendering every single row
                    logo && logo.map(row => {
                        return <LogoRow row={row} />
                    })
                }
            </div>
        )
    }
}

export default PrintLogo;