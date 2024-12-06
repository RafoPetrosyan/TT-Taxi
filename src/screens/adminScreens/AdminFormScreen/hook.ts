import { useMemo, useState } from 'react';
import CarForm from './CarForm';
import DriverForm from './DriverForm';
import RouteForm from './RouteForm';

type FormType = 'route' | 'car' | 'driver';

const components = {
   car: CarForm,
   driver: DriverForm,
   route: RouteForm,
};

function useContainer() {
   const [formType, setFormType] = useState<FormType>('route');
   const Component = useMemo(() => components[formType], [formType]);

   const handleChangeFormType = ({ value }: { value: FormType }) => {
      setFormType(value);
   };

   return {
      handleChangeFormType,
      Component,
   };
}

export default useContainer;
