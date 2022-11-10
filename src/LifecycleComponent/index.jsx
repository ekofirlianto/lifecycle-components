import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import CardNews from './Component/CardNews';
import NavbarNews from './Component/NavbarNewsApp';
import SearchNews from './Component/SearchInput';

export default class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      keyword: '',
      isLoading: false,
    };
    console.log('CONSTRUCTOR');
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    console.log('DID MOUNT');
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-11-10&sortBy=popularity&apiKey=f3c04669ca1b48e7811636d0985fa282`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          isLoading: false,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    fetch(`https://newsapi.org/v2/everything?q=${this.state.keyword}&apiKey=${this.apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          news: [...response.articles],
          isLoading: false,
        });
        console.log(this.state.news);
      });
  };

  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div>
        <NavbarNews />
        <SearchNews handleClick={this.handleClick} handleChange={this.handleChange} />
        {this.state.isLoading ? (
          <div style={style}>
            <RotatingLines />
          </div>
        ) : (
          <CardNews news={this.state.news} />
        )}
      </div>
    );
  }
}
