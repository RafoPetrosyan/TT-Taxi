import React from 'react';
import MODAL_COMPONENTS from './modalComponents';
import { closeModal } from '../../store/modals';
import { useAppDispatch } from '../../store/hooks';

interface ModalRootProps {
   modalType?: string;
   content?: Record<string, any>;
}

const ModalRoot: React.FC<ModalRootProps> = (data) => {
   const dispatch = useAppDispatch();

   if (!data.modalType) return <></>;

   // @ts-ignore
   const SpecificModal = MODAL_COMPONENTS[data.modalType];

   if (!SpecificModal) return <></>;

   const hideModalHandler = () => {
      dispatch(closeModal());
   };

   return <SpecificModal onClose={hideModalHandler} {...data} />;
};

export default ModalRoot;
