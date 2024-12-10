const formatAndValidatePhoneNumber = (phone: string) => {
   phone = phone.replace(/[\s()-]/g, '');

   if (!phone.startsWith('+374')) {
      phone = '+374' + phone.replace(/^0+/, '');
   }

   const isValidArmenianNumber =
      /^\+374(33|41|43|44|46|49|55|77|91|93|94|95|96|97|98|99)\d{6}$/.test(phone);

   if (!isValidArmenianNumber) return null;

   return phone;
};

export default formatAndValidatePhoneNumber;
