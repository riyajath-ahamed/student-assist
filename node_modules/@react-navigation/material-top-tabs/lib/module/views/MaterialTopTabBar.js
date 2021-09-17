function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useTheme } from '@react-navigation/native';
import Color from 'color';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabBar, TabBarIndicator } from 'react-native-tab-view';
export default function TabBarTop({
  state,
  navigation,
  descriptors,
  ...rest
}) {
  var _focusedOptions$tabBa, _focusedOptions$tabBa2;

  const {
    colors
  } = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const activeColor = (_focusedOptions$tabBa = focusedOptions.tabBarActiveTintColor) !== null && _focusedOptions$tabBa !== void 0 ? _focusedOptions$tabBa : colors.text;
  const inactiveColor = (_focusedOptions$tabBa2 = focusedOptions.tabBarInactiveTintColor) !== null && _focusedOptions$tabBa2 !== void 0 ? _focusedOptions$tabBa2 : Color(activeColor).alpha(0.5).rgb().string();
  return /*#__PURE__*/React.createElement(TabBar, _extends({}, rest, {
    navigationState: state,
    scrollEnabled: focusedOptions.tabBarScrollEnabled,
    bounces: focusedOptions.tabBarBounces,
    activeColor: activeColor,
    inactiveColor: inactiveColor,
    pressColor: focusedOptions.tabBarPressColor,
    pressOpacity: focusedOptions.tabBarPressOpacity,
    tabStyle: focusedOptions.tabBarItemStyle,
    indicatorStyle: [{
      backgroundColor: colors.primary
    }, focusedOptions.tabBarIndicatorStyle],
    indicatorContainerStyle: focusedOptions.tabBarIndicatorContainerStyle,
    contentContainerStyle: focusedOptions.tabBarContentContainerStyle,
    style: [{
      backgroundColor: colors.card
    }, focusedOptions.tabBarStyle],
    getAccessibilityLabel: ({
      route
    }) => descriptors[route.key].options.tabBarAccessibilityLabel,
    getTestID: ({
      route
    }) => descriptors[route.key].options.tabBarTestID,
    onTabPress: ({
      route,
      preventDefault
    }) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
      });

      if (event.defaultPrevented) {
        preventDefault();
      }
    },
    onTabLongPress: ({
      route
    }) => navigation.emit({
      type: 'tabLongPress',
      target: route.key
    }),
    renderIcon: ({
      route,
      focused,
      color
    }) => {
      const {
        options
      } = descriptors[route.key];

      if (options.tabBarShowIcon === false) {
        return null;
      }

      if (options.tabBarIcon !== undefined) {
        const icon = options.tabBarIcon({
          focused,
          color
        });
        return /*#__PURE__*/React.createElement(View, {
          style: [styles.icon, options.tabBarIconStyle]
        }, icon);
      }

      return null;
    },
    renderLabel: ({
      route,
      focused,
      color
    }) => {
      const {
        options
      } = descriptors[route.key];

      if (options.tabBarShowLabel === false) {
        return null;
      }

      const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

      if (typeof label === 'string') {
        return /*#__PURE__*/React.createElement(Text, {
          style: [styles.label, {
            color
          }, options.tabBarLabelStyle],
          allowFontScaling: options.tabBarAllowFontScaling
        }, label);
      }

      return label({
        focused,
        color
      });
    },
    renderBadge: ({
      route
    }) => {
      var _tabBarBadge;

      const {
        tabBarBadge
      } = descriptors[route.key].options;
      return (_tabBarBadge = tabBarBadge === null || tabBarBadge === void 0 ? void 0 : tabBarBadge()) !== null && _tabBarBadge !== void 0 ? _tabBarBadge : null;
    },
    renderIndicator: ({
      navigationState: state,
      ...rest
    }) => {
      return focusedOptions.tabBarIndicator ? focusedOptions.tabBarIndicator({
        state: state,
        ...rest
      }) : /*#__PURE__*/React.createElement(TabBarIndicator, _extends({
        navigationState: state
      }, rest));
    }
  }));
}
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=MaterialTopTabBar.js.map