import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        const { user: userInfo } = action.payload;

        draft.profile = userInfo;
      });

    default:
      return state;
  }
}
