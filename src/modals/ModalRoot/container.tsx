import React from 'react';
import { connect } from 'react-redux';
import ModalRootComponent from './component';
import { ModalState } from '../../store/modals';
import { RootState } from '../../store/store.ts';

const ModalRoot = (props: ModalState) => <ModalRootComponent {...props} />;

const mapStateToProps = (state: RootState) => ({
   modalType: state.modals.modalType,
   modalProps: state.modals.content,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
