import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

function useContainer() {
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
   };
}

export default useContainer;
