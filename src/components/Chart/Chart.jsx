import React from "react";
import { Table } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


const Chart = ({columns, data}) => {

    return(
        <div style={{textAlign: 'center'}}>
           <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={{position: ['bottomCenter']}}
            title={() => <Title level={4}>Курсы криптовалют на {new Date().getDate()}.{new Date().getMonth() + 1}.{new Date().getFullYear()}</Title>}
            />
        </div>
    );
}

export default Chart;