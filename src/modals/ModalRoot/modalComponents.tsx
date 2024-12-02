import OrderComplete from '../OrderComplete';
import OrderCancel from '../OrderCancel';
import OrderCancelComplete from '../OrderCancelComplete';
import Review from '../Review';
import OrderDetails from '../OrderDetails';
import CreateRoute from '../CreateRoute';

const MODAL_COMPONENTS = {
   ORDER_COMPLETE: OrderComplete,
   ORDER_CANCEL: OrderCancel,
   ORDER_CANCEL_COMPLETE: OrderCancelComplete,
   REVIEW: Review,
   ORDER_DETAILS: OrderDetails,
   CREATE_ROUTE: CreateRoute,
};

export default MODAL_COMPONENTS;
