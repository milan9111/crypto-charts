import React from "react";
import Header from "./components/Header/Header";
import { Row, Col } from 'antd';
import SideLeft from "./components/Side/SideLeft";
import Chart from "./components/Chart/Chart";
import SideRigth from "./components/Side/SideRigth";
import Footer from "./components/Footer/Footer";
 

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
          <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={6}><SideLeft /></Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}><Chart /></Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6}><SideRigth /></Col>
          </Row>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    
    
  );
}

export default App;
