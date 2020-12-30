import React, { Component } from 'react';

const liff = window.liff;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: ''
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
      });
    }else{
      liff.login();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
          <img className="img img-circle" width="150" alt='pic' src={this.state.pictureUrl} />
          <p>
            <label>
              ชื่อ-นามสกุล:
              <input className="form-control" type="text" name="name" value={this.state.name}/>
            </label>
            </p>
            <p>
            <label>
              เลขบัตรประชาชน:
              <input className="form-control" type="text" name="citizen_id"/>
            </label>
            </p>
            <p>
            <label>
              LineID:
              <input className="form-control" type="text" name="line_id" value={this.state.userLineID}/>
            </label>
            </p>
            <input type="submit" className="btn btn-success" value="ลงทะเบียน" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;