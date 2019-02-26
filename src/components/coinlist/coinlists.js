import React, { Component } from 'react';
import axios from 'axios';

import Coinlist from './coinlist';

class Coinlists extends Component {
    constructor(props){
        super(props);
        this.state={
            coinlists: [],
            err:''
        }
    }

    componentDidMount(){
        axios.get(process.env.REACT_APP_COIN_API_ENDPOINT+'/top/mktcapfull?limit=10&tsym=USD').then(res=>{
            this.setState({
                coinlists: res.data.Data
            })
        }).catch(err=>{
            this.setState({
                err: err
            })
        })
    }

    render(){
        const { coinlists } = this.state;
        const content = this.state.err === '' ? coinlists.map(coinlist=>{
            return  <Coinlist 
                key={ coinlist.CoinInfo.Id } 
                name={ coinlist.CoinInfo.Name } 
                price={ coinlist.DISPLAY.USD.PRICE } 
                fullname={ coinlist.CoinInfo.FullName}
                />
        }) : 'Sorry something wrong when we handle the data...'
        return(
            <div className='coinlists'>
                <div className='row'>
                    {content}
                </div>
            </div>
        )
    }
}

export default Coinlists;