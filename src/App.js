import React from "react";
import Header from "./components/Header/Header";
import { Row, Col } from 'antd';
import SideLeft from "./components/Side/SideLeft";
import ChartContainer from "./components/Chart/ChartContainer";
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
              <Col xl={5} lg={5} md={5} sm={5} xs={5}><SideLeft /></Col>
              <Col xl={14} lg={14} md={14} sm={14} xs={14}><ChartContainer /></Col>
              <Col xl={5} lg={5} md={5} sm={5} xs={5}><SideRigth /></Col>
          </Row>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    
    
  );
}

export default App;
