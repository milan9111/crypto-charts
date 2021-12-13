 
import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://rest.coinapi.io/v1/', 
    headers: {
        'X-CoinAPI-Key': '4EF5A427-A8FE-4561-B50A-CA95B9E5CE83'
    }
});


export const dataCrypto = {
    getDataAllCrypto(){
        return instance.get('assets?filter_asset_id=BTC,ETH,BCH,XMR,ZEC,LTC,DASH,DCR,BTG,ETC,NEO,REP,MCO,VEN,OMG,DOGE')
        .then(response => {
            return response.data;
        }); 
    },
    getIconAllCrypto(){
        return instance.get('assets/icons/50')
        .then(response => {
            return response.data;
        }); 
    },
    getLatestData(id) {
        return instance.get(`ohlcv/BITSTAMP_SPOT_${id}_USD/latest?period_id=1DAYlimit=1`)
        .then(response => {
            return response.data;
        });
    }
     
};



 