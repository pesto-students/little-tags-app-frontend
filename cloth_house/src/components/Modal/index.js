import React from 'react';
import { Modal, Button } from 'antd';
import propTypes from "prop-types";
export default class CustomModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    const defaultFooter=[
        <Button key="back" onClick={this.props.handleCancel||this.handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
          Submit
        </Button>,
      ]
    return (
      <>
        <Modal
          visible={this.props.visible||visible}
          title={this.props.title}
          onOk={this.props.handleOk||this.handleOk}
          footer={this.props.footer||defaultFooter}
          onCancel={this.props.handleCancel||this.handleCancel}
        >
         {this.props.formatMessage({id:this.props.body.toString()})}
        </Modal>
      </>
    );
  }
}

CustomModal.propTypes={
 loading:propTypes.bool,
 visible:propTypes.bool,
 handleOk:propTypes.func,
 footer:propTypes.array,
 title:propTypes.string   
}