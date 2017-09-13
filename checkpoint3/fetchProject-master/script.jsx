'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apod: []
    };
  }

  componentWillMount() {
  // Perhaps fetch some data here
    fetch('https://api.nasa.gov/planetary/apod?api_key=odtesQqkEds5ctqCTy75uK0QV0QVII2uOB0ffeII').then((response) => {
      response.json().then((data) => {
        this.setState({
          apod: data
        });

        console.log(this.state.apod);
      });
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card text-white'>
              <img className='img-fluid' src={this.state.apod.hdurl} alt={this.state.apod.title} />
              <div className='card-img-overlay'>
                <h1 className='card-title'>{this.state.apod.title}</h1>
                <h4 className='card-text'>by {this.state.apod.copyright}</h4>
                <p className='card-text'>{this.state.apod.explanation}</p>
                <p className='card-text'>Date: {this.state.apod.date}</p>
                <button type='button' className='btn btn-sm btn-outline-secondary'>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
