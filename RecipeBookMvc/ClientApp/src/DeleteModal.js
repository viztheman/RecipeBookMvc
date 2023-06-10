import React, {Component} from 'react';
import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap';
import {connect} from 'react-redux';
import * as Actions from './redux/actions';

class DeleteModal extends Component {
  async onYesClick() {
  	await this.props.deleteRecipeRequest(this.props.current);
	this.props.cancelDeleteModal();
  }

  onNoClick() {
    this.props.cancelDeleteModal();
  }

  render() {
	if (!this.props.current)
      return;

	const {showDeleteModal} = this.props;
	const {title} = this.props.current;

    return (
      <Modal isOpen={showDeleteModal}>
        <ModalBody>
          <h4>Delete {title}?</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => this.onYesClick()}>Yes</Button>
          <Button color="secondary" onClick={() => this.onNoClick()}>No</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  showDeleteModal: state.showDeleteModal,
  current: state.current
});

const mapDispatchToProps = {
  cancelDeleteModal: Actions.cancelDeleteModal,
  deleteRecipeRequest: Actions.deleteRecipeRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
