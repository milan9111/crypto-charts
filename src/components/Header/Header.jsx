import React from "react";
import { PageHeader, Typography, Divider, Row, Col } from "antd";

const { Text } = Typography;



const Header = () => {
    return(
        <Row>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div>
              <PageHeader style={{backgroundColor: '#03022c'}} title={<Text strong={true} style={{color: '#ffe500'}}>Сryptocurrency Сharts</Text>} 
                        subTitle={<Text italic={true} style={{color: '#fff', textAlign: 'end'}}>See all the cryptocurrencies of the world</Text>}/>
              <Divider style={{backgroundColor: '#03022c'}}/>
            </div>
          </Col>
        </Row>
    );
}

export default Header;