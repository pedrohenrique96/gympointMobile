export function signInRequest(studentId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {studentId},
  };
}

export function signInSuccess(id) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {id},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
