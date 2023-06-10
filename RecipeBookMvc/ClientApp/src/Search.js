import React, {Component} from 'react';
import {InputGroup, InputGroupText, Input} from 'reactstrap';

export default class Search extends Component {
  render() {
    return (
      <div className="mb-2">
        <InputGroup>
          <InputGroupText>&#x1F50D;</InputGroupText>
          <Input />
        </InputGroup>
      </div>
    );
  }
}
