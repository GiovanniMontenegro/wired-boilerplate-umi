import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva';
import { RouterTypes } from 'umi';
import { SessionModelState } from './session';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    session?: boolean;
  };
}

export interface ConnectState {
  session: SessionModelState;
  loading: Loading;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: ConnectState) => T) => T },
) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface Route {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch;
}
