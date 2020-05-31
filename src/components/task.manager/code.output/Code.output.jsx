import React, { Component } from 'react';
import { codeOutputService as service } from './Code.output.service';
import { Wrapper } from './Code.output.styles';

export class CodeOutput extends Component {
  componentDidMount() {
    service.setup(this);
  }

  render() {
    return <Wrapper>CodeOutput</Wrapper>;
  }
}
