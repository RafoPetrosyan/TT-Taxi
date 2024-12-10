import OrderComplete from '../OrderComplete';
import OrderCancel from '../OrderCancel';
import OrderCancelComplete from '../OrderCancelComplete';
import Review from '../Review';
import OrderDetails from '../OrderDetails';
import CreateRoute from '../CreateRoute';
import Addresses from '../Addresses';
import ReviewsList from '../ReviewsList';

const MODAL_COMPONENTS = {
   ORDER_COMPLETE: OrderComplete,
   ORDER_CANCEL: OrderCancel,
   ORDER_CANCEL_COMPLETE: OrderCancelComplete,
   REVIEW: Review,
   ORDER_DETAILS: OrderDetails,
   CREATE_ROUTE: CreateRoute,
   ADDRESSES: Addresses,
   REVIEWS_LIST: ReviewsList,
};

export default MODAL_COMPONENTS;
