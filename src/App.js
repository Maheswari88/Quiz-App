import logo from './logo.svg';
import './App.css';
import { Row,Col,Card } from 'antd';
import 'antd/dist/antd.css';
import QuizAppCard from './Components/QuizAppCard'
import Quiz from './Components/Quiz'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={12}>
         <QuizAppCard/>
        </Col>
        <Col span={12} style={{backgroundColor:'lightblue'}}>
          <Quiz/>
        </Col>
      </Row>

    </div>
  );
}

export default App;
