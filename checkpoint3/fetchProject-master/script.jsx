'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apod: [],
      search: []
    };
  }

  componentWillMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=odtesQqkEds5ctqCTy75uK0QV0QVII2uOB0ffeII').then((response) => {
      response.json().then((data) => {
        this.setState({
          apod: data
        });
      });
    });
  }

  render() {
    return (
      <div className='main' style={{backgroundImage: 'url(' + this.state.apod.hdurl + ')'}}>
        <nav className='navbar navbar-dark text-center'>
          <span className='navbar-brand mb-0'>
            <p className='text-uppercase'>NASA Astronomy Photo of the Day</p>
          </span>
        </nav>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <h1 className='card-title'>{this.state.apod.title}</h1>
              <h4 className='card-text text-uppercase'>by {this.state.apod.copyright}</h4>
              <p className='card-text'>{this.state.apod.explanation}</p>
              <p className='card-text'>Date: {this.state.apod.date}</p>
              {/* <a className='btn btn-outline-secondary' href='#' role="button">
                <p>Learn More</p>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
