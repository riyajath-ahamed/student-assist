function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { CommonActions, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { TabView } from 'react-native-tab-view';
import MaterialTopTabBar from './MaterialTopTabBar';
export default function MaterialTopTabView({
  tabBar = props => /*#__PURE__*/React.createElement(MaterialTopTabBar, props),
  state,
  navigation,
  descriptors,
  sceneContainerStyle,
  ...rest
}) {
  const {
    colors
  } = useTheme();

  const renderTabBar = props => {
    return tabBar({ ...props,
      state: state,
      navigation: navigation,
      descriptors: descriptors
    });
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  return /*#__PURE__*/React.createElement(TabView, _extends({}, rest, {
    onIndexChange: index => navigation.dispatch({ ...CommonActions.navigate({
        name: state.routes[index].name,
        merge: true
      }),
      target: state.key
    }),
    renderScene: ({
      route
    }) => descriptors[route.key].render(),
    navigationState: state,
    renderTabBar: renderTabBar,
    renderLazyPlaceholder: ({
      route
    }) => {
      var _descriptors$route$ke, _descriptors$route$ke2, _descriptors$route$ke3;

      return (_descriptors$route$ke = (_descriptors$route$ke2 = (_descriptors$route$ke3 = descriptors[route.key].options).lazyPlaceholder) === null || _descriptors$route$ke2 === void 0 ? void 0 : _descriptors$route$ke2.call(_descriptors$route$ke3)) !== null && _descriptors$route$ke !== void 0 ? _descriptors$route$ke : null;
    },
    lazy: ({
      route
    }) => descriptors[route.key].options.lazy === true,
    lazyPreloadDistance: focusedOptions.lazyPreloadDistance,
    swipeEnabled: focusedOptions.swipeEnabled,
    onSwipeStart: () => navigation.emit({
      type: 'swipeStart'
    }),
    onSwipeEnd: () => navigation.emit({
      type: 'swipeEnd'
    }),
    sceneContainerStyle: [{
      backgroundColor: colors.background
    }, sceneContainerStyle]
  }));
}
//# sourceMappingURL=MaterialTopTabView.js.map