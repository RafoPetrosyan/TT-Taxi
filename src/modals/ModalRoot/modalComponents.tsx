import OrderComplete from '../OrderComplete';
import OrderCancelError from '../OrderCancelError';
import OrderCancelComplete from '../OrderCancelComplete';

const MODAL_COMPONENTS = {
   ORDER_COMPLETE: OrderComplete,
   ORDER_CANCEL_ERROR: OrderCancelError,
   ORDER_CANCEL_COMPLETE: OrderCancelComplete,
};

export default MODAL_COMPONENTS;
