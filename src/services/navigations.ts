import {
   CommonActions,
   createNavigationContainerRef,
   StackActions,
   ParamListBase,
} from '@react-navigation/native';

class NavigationService {
   public navigationRef = createNavigationContainerRef<ParamListBase>();

   public navigate(name: string, params?: Record<string, any>) {
      if (this.navigationRef.isReady()) {
         this.navigationRef.dispatch(CommonActions.navigate(name, params));
      }
   }

   public goBack() {
      if (this.navigationRef.isReady()) {
         this.navigationRef.goBack();
      }
   }

   public replace(name: string, params?: Record<string, any>) {
      if (this.navigationRef.isReady()) {
         this.navigationRef.dispatch(StackActions.replace(name, params));
      }
   }

   public getCurrentScreen(): string | undefined {
      return this.navigationRef.isReady() ? this.navigationRef.getCurrentRoute()?.name : undefined;
   }

   public getNavigationRef() {
      return this.navigationRef;
   }
}

export const navigationService = new NavigationService();
