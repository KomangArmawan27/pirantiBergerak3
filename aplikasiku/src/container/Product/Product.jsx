import React, {Component, Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';
import "./Product.css"

class Product extends Component{
    state = {
        order:0
    }

    handleCounterChange = (newValue) => {
        this.setState ({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://image.flaticon.com/icons/png/128/1179/1179970.png?ga=GA1.2.258185396.1634708439" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>

                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;