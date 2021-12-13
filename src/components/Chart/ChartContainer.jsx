import React, {useState, useEffect} from "react";
import { dataCrypto } from "../../api/api";
import Chart from './Chart';
import { Image } from "antd";
import logo from './../../sources/images/logo.jpg';



  const ChartContainer = () => {

    const [dataCryptoCurrency, setDataCryptoCurrency] = useState([]);
    const [iconCryptoCurrency, setIconCryptoCurrency] = useState([]);
    const [latestData, setLatestData] = useState([]);

    useEffect(() => {
        dataCrypto.getDataAllCrypto()
        .then(data => {
        setDataCryptoCurrency(data);
        }) 
    }, []);

    useEffect(() => {
        dataCrypto.getIconAllCrypto()
        .then(data => {
        setIconCryptoCurrency(data);
        }) 
    }, []);

     
    const changeDay = (id) => {
        dataCrypto.getLatestData(id)
        .then(data => {
        setLatestData(data);
        })
        console.log(latestData);
        let priceOpen = latestData[0]?.price_open;
        let priceClose = latestData[0]?.price_close;
        return (((priceOpen - priceClose) / priceOpen) * 100) * -1; 
    }
   
     
    const selectCryptoCurrency = [];
    dataCryptoCurrency.forEach(item => {
        let cryptocurrency = {};
        cryptocurrency.id = item.asset_id;
        cryptocurrency.name = item.name;
        cryptocurrency.price = item.price_usd;
        cryptocurrency.volume = item.volume_1day_usd;
        selectCryptoCurrency.push(cryptocurrency);
    })

    let sortPriceCryptoCurrency = selectCryptoCurrency.sort((a, b) => {
        if(a.price < b.price) {
            return 1;
        }
        if(a.price > b.price) {
            return -1;
        }
        return 0;
    });
     
  
    const dataFotTable = [];
    sortPriceCryptoCurrency.forEach(item => {
        let objDataCryptoCurrency = {};
        objDataCryptoCurrency.key = item.id;
        objDataCryptoCurrency.name = item.name;
        let filterImage = iconCryptoCurrency.filter(el => el.asset_id === item.id);
        objDataCryptoCurrency.image = filterImage[0]?.url;
        objDataCryptoCurrency.price = `${item.price.toFixed(3)} $`;
        objDataCryptoCurrency.capitalization = '0000000 $';
        objDataCryptoCurrency.volume = `${item.volume} $`;
        objDataCryptoCurrency.change = `${changeDay(item.id)} $`;
        dataFotTable.push(objDataCryptoCurrency);
    });


    const columns = [
        {
            title: '',
            dataIndex: 'image',
            align: 'center',
            render: image => <Image src={image ? image : logo} alt='logo' width={25}/>
        },
        {
          title: 'Валюта',
          dataIndex: 'name',
          align: 'center',
          render: text => <a href="/#">{text}</a>,
        },
        {
          title: 'Стоимость',
          dataIndex: 'price',
          align: 'center',
        },
        {
          title: 'Количество трейдов(24ч.)',
          dataIndex: 'capitalization',
          align: 'center',
        },
        {   
          title: 'Объём (24ч.)',
          dataIndex: 'volume',
          align: 'center',
        },
        {   
          title: 'Изменение (24 ч.)',
          dataIndex: 'change',
          align: 'center',
        }
      ];

    return(
        <Chart columns={columns} data={dataFotTable}/>
    );
}

export default ChartContainer;