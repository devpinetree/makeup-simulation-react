import React, { PureComponent } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const Field = styled.div`
  background-color: ${colors.brownishGrey};
  position: relative;
  top: -10px;

  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  height: 110px;
  padding-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export default class ConfirmToast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focussed: (props.locked && props.focussed) || false,
      value: props.value || '',
      label: props.label || '',
    };
  }

  handleChange = (e) => {
    this.props.callback(e);
    const {
      target: { value },
    } = e;

    this.setState({
      value: value,
    });
  };

  render() {
    // const { value, label } = this.state;
    // const { id, type } = this.props;

    return <Field>{this.props.children}</Field>;
  }
}
