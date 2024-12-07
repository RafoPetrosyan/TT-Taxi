import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useState } from 'react';

function useContainer() {
   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
   const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data: any) => {
      Alert.alert('Form Submitted', JSON.stringify(data, null, 2));
   };

   return {
      onSubmit,
      control,
      handleSubmit,
      errors,
      setIsTimePickerOpen,
      setIsDatePickerOpen,
      isTimePickerOpen,
      isDatePickerOpen,
   };
}

export default useContainer;
