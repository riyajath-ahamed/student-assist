import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
export default function ModalStatusBarManager({
  dark,
  layout,
  insets,
  style
}) {
  var _flattenedStyle$trans, _flattenedStyle$trans2;

  const {
    dark: darkTheme
  } = useTheme();
  const [overlapping, setOverlapping] = React.useState(true);
  const scale = 1 - 20 / layout.width;
  const offset = (insets.top - 34) * scale;
  const flattenedStyle = StyleSheet.flatten(style);
  const translateY = flattenedStyle === null || flattenedStyle === void 0 ? void 0 : (_flattenedStyle$trans = flattenedStyle.transform) === null || _flattenedStyle$trans === void 0 ? void 0 : (_flattenedStyle$trans2 = _flattenedStyle$trans.find(s => s.translateY !== undefined)) === null || _flattenedStyle$trans2 === void 0 ? void 0 : _flattenedStyle$trans2.translateY;
  React.useEffect(() => {
    const listener = ({
      value
    }) => {
      setOverlapping(value < offset);
    };

    const sub = translateY === null || translateY === void 0 ? void 0 : translateY.addListener(listener);
    return () => translateY === null || translateY === void 0 ? void 0 : translateY.removeListener(sub);
  }, [offset, translateY]);
  const darkContent = dark !== null && dark !== void 0 ? dark : !darkTheme;
  return /*#__PURE__*/React.createElement(StatusBar, {
    animated: true,
    barStyle: overlapping && darkContent ? 'dark-content' : 'light-content'
  });
}
//# sourceMappingURL=ModalStatusBarManager.js.map