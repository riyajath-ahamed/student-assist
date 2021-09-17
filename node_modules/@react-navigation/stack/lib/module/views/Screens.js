function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View } from 'react-native';
let Screens;

try {
  Screens = require('react-native-screens');
} catch (e) {// Ignore
}

export const MaybeScreenContainer = ({
  enabled,
  ...rest
}) => {
  if (Screens != null) {
    return /*#__PURE__*/React.createElement(Screens.ScreenContainer, _extends({
      enabled: enabled
    }, rest));
  }

  return /*#__PURE__*/React.createElement(View, rest);
};
export const MaybeScreen = ({
  enabled,
  active,
  ...rest
}) => {
  if (Screens != null) {
    return /*#__PURE__*/React.createElement(Screens.Screen, _extends({
      enabled: enabled,
      activityState: active
    }, rest));
  }

  return /*#__PURE__*/React.createElement(View, rest);
};
//# sourceMappingURL=Screens.js.map