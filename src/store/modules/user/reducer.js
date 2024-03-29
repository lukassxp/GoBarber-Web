import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { user: userInfo } = action.payload;

        draft.profile = userInfo;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        const { profile } = action.payload;

        draft.profile = profile;
        break;
      }
      default:
    }
  });
}
