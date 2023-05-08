import { combineReducers } from 'redux';
import { ListReducer } from './listReducer';
import { SystemReducer } from './systemReducer';
import { AuthReducer } from './authReducer';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) {
      state = [];
    }
    return state;
  },
  list: ListReducer,
  system: SystemReducer,
  auth: AuthReducer,
  // onboarding: OnboardingReducer,
  // user: UserReducer,
  // dailyVitalCenter: DailyVitalCenterReducer,
  // labTest: LabTestReducer,
});
