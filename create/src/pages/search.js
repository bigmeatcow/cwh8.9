import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import { root } from 'postcss';

class AutoComplete extends React.Component {
  state = {
    value: '',
    suggestions: []
  };

  componentWillMount() {
    this.onSuggestionsFetchRequested = debounce(500, this.onSuggestionsFetchRequested);
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion.fullName}</div>
        <div className="shortCode">{suggestion.shortCode}</div>
      </div>
    );
  };

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    axios
      .post('http://localhost:9200/crm_app/customers/_search', {
        query: {
          multi_match: {
            query: value,
            fields: ['fullName', 'shortCode']
          }
        },
        sort: ['_score', { createdDate: 'desc' }]
      })
      .then(res => {
        const results = res.data.hits.hits.map(h => h._source);
        this.setState({ suggestions: results });
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: '请输入产品信息 ',
      value,
      onChange: this.onChange
    };

    return (
      <div className="App">
        <h1>根据关键字进行模糊搜索</h1>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={suggestion => suggestion.fullName}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

 const rootElement = document.getElementById('root');
 ReactDOM.render(<AutoComplete />, rootElement);
export default AutoComplete;