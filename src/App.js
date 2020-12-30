import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const liff = window.liff;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: '',
      citizen_id: "",
    };
  }

  componentDidMount = async() => {
    await liff.init({ liffId: `1655534752-05NG4BxE` }).catch(err=>{throw err});
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
        citizen_id: 1
      });
    }else{
      liff.login();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="img img-circle" width="150" src={this.state.pictureUrl} />
          <Form>
            <Form.Group controlId="form-name">
              <Form.Label>ชื่อ-นามสกุล</Form.Label>
              <Form.Control type="text" placeholder="ชื่อจริง - นามสกุล" value={this.state.name}/>
            </Form.Group>

            <Form.Group controlId="form-citizen-id">
              <Form.Label>เลขบัตรประชาชน</Form.Label>
              <Form.Control type="text" autofocus placeholder="เลขบัตรประชนชน 13 หลัก" />
              <Form.Text className="text-muted">
                กรุณากรอกเลขบัตรประชาชนให้ตรงกับในระบบ
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="form-name">
              <Form.Label>UUID</Form.Label>
              <Form.Control type="text" value={this.state.userLineID}/>
            </Form.Group>

            <Button variant="success" type="submit">
              ลงทะเบียนรับข้อมูลนะจ้ะ
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default App;