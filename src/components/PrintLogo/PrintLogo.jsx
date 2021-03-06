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
    componentDidMount() {
        const { number } = this.props;
        let result = [];  // this array is to fill it with every single row from the logo

        if (+number > 2 && +number < 10000) {
            let logoParts = printLogo(+number); // get the logo parts

            for (const currentPart in logoParts) {       //looping 2 times to get every single row
                let arrayOfParts = logoParts[currentPart];

                for (const logoRow in arrayOfParts) {
                    result.push(arrayOfParts[logoRow]);
                }
            }

            this.setState({ logo: result }); // and set state with final result
        }
    }

    render() {
        const { logo } = this.state;

        return (
            <div className='logo-container' >
                {
                    logo && logo.map(row => {
                        return <LogoRow row={row} />
                    })
                }
            </div>
        )
    }
}

export default PrintLogo;