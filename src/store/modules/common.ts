import { Identity } from '@dfinity/agent';
import { AstroXWebViewHandler } from '@astrox/sdk-webview';

export interface State {
  showCheckAuth: boolean;
  identity: Identity | null;
  expireSessionTimeout: number;
  principalId: string;
  isOpen: boolean;
  icx: AstroXWebViewHandler;
}
const common = {
  namespaced: true,
  state: {
    identity: null,
    expireSessionTimeout: null,
    showCheckAuth: false,
    principalId: '',
    isOpen: false,
    icx: null
  },
  getters: {
    getIdentity(state: State): Identity {
      return state.identity;
    },
    getCheckAuth(state: State): boolean {
      return state.showCheckAuth;
    },
    getExpireSessionTimeout(state: State): number {
      return state.expireSessionTimeout;
    },
    getPrincipalId(state: State): string {
      return state.principalId || localStorage.getItem('principal');
    },
    getIsOpen(state: State): boolean {
      return state.isOpen;
    },
    getIcx(state: State): AstroXWebViewHandler {
      return state.icx;
    }
  },
  mutations: {
    SET_EXPIRE_SESSION_TIMEOUT: (state: State): void => {
      const ONE_MINUTE_MILLIS = 60 * 1000;
      const nowTimestamp = new Date().getTime();
      // console.log(nowTimestamp, 30 * ONE_MINUTE_MILLIS);
      state.expireSessionTimeout = nowTimestamp + 30 * ONE_MINUTE_MILLIS;
    },
    SET_PRINCIPAL_ID: (state: State, principalId: string): void => {
      state.principalId = principalId;
    },
    SET_IDENTITY: (state: State, identity: Identity): void => {
      state.identity = identity;
      const ONE_MINUTE_MILLIS = 60 * 1000;
      const nowTimestamp = new Date().getTime();
      state.expireSessionTimeout = nowTimestamp + 30 * ONE_MINUTE_MILLIS;
    },
    SET_SHOW_CHECK_AUTH: (state: State, showCheckAuth: boolean): void => {
      state.showCheckAuth = showCheckAuth;
    },
    SET_IS_OPEN: (state: State, isOpen: boolean): void => {
      state.isOpen = isOpen;
    },
    SET_ICX: (state: State, icx: AstroXWebViewHandler): void => {
      state.icx = icx;
    }
  }
};
export default common;
