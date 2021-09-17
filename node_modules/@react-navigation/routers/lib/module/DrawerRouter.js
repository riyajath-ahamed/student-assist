import { nanoid } from 'nanoid/non-secure';
import TabRouter, { TabActions } from './TabRouter';
export const DrawerActions = { ...TabActions,

  openDrawer() {
    return {
      type: 'OPEN_DRAWER'
    };
  },

  closeDrawer() {
    return {
      type: 'CLOSE_DRAWER'
    };
  },

  toggleDrawer() {
    return {
      type: 'TOGGLE_DRAWER'
    };
  }

};

const isDrawerOpen = state => {
  var _state$history;

  return Boolean((_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.some(it => it.type === 'drawer'));
};

const openDrawer = state => {
  if (isDrawerOpen(state)) {
    return state;
  }

  return { ...state,
    history: [...state.history, {
      type: 'drawer',
      status: 'open'
    }]
  };
};

const closeDrawer = state => {
  if (!isDrawerOpen(state)) {
    return state;
  }

  return { ...state,
    history: state.history.filter(it => it.type !== 'drawer')
  };
};

export default function DrawerRouter({
  defaultStatus,
  ...rest
}) {
  const router = TabRouter(rest);
  return { ...router,
    type: 'drawer',

    getInitialState({
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      let state = router.getInitialState({
        routeNames,
        routeParamList,
        routeGetIdList
      });

      if (defaultStatus === 'open') {
        state = openDrawer(state);
      }

      return { ...state,
        stale: false,
        type: 'drawer',
        key: `drawer-${nanoid()}`
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      if (partialState.stale === false) {
        return partialState;
      }

      let state = router.getRehydratedState(partialState, {
        routeNames,
        routeParamList,
        routeGetIdList
      });

      if (isDrawerOpen(partialState)) {
        state = openDrawer(state);
      }

      return { ...state,
        type: 'drawer',
        key: `drawer-${nanoid()}`
      };
    },

    getStateForRouteFocus(state, key) {
      const result = router.getStateForRouteFocus(state, key);

      if (defaultStatus === 'open') {
        return openDrawer(result);
      }

      return closeDrawer(result);
    },

    getStateForAction(state, action, options) {
      switch (action.type) {
        case 'OPEN_DRAWER':
          return openDrawer(state);

        case 'CLOSE_DRAWER':
          return closeDrawer(state);

        case 'TOGGLE_DRAWER':
          if (isDrawerOpen(state)) {
            return closeDrawer(state);
          }

          return openDrawer(state);

        case 'GO_BACK':
          if (defaultStatus === 'open') {
            if (!isDrawerOpen(state)) {
              return openDrawer(state);
            }
          } else {
            if (isDrawerOpen(state)) {
              return closeDrawer(state);
            }
          }

          return router.getStateForAction(state, action, options);

        default:
          return router.getStateForAction(state, action, options);
      }
    },

    actionCreators: DrawerActions
  };
}
//# sourceMappingURL=DrawerRouter.js.map