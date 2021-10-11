"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  height: screenHeight
} = _reactNative.Dimensions.get('window');

const P = (android, ios) => _reactNative.Platform.OS === 'ios' ? ios : android;

const magic = {
  damping: 50,
  mass: 0.3,
  stiffness: 121.6,
  overshootClamping: true,
  restSpeedThreshold: 0.3,
  restDisplacementThreshold: 0.3,
  deceleration: 0.999,
  bouncyFactor: 1,
  velocityFactor: P(1, 0.8),
  toss: 0.4,
  coefForTranslatingVelocities: 5
};
const {
  damping,
  mass,
  stiffness,
  overshootClamping,
  restSpeedThreshold,
  restDisplacementThreshold,
  deceleration,
  velocityFactor,
  toss
} = magic;
const {
  set,
  cond,
  onChange,
  block,
  eq,
  greaterOrEq,
  sqrt,
  not,
  defined,
  max,
  add,
  and,
  Value,
  spring,
  or,
  divide,
  greaterThan,
  sub,
  event,
  diff,
  multiply,
  clockRunning,
  startClock,
  stopClock,
  decay,
  Clock,
  lessThan,
  call,
  lessOrEq,
  neq
} = _reactNativeReanimated.default;

function runDecay(clock, value, velocity, wasStartedFromBegin) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0)
  };
  const config = {
    deceleration
  };
  return [cond(clockRunning(clock), 0, [cond(wasStartedFromBegin, 0, [set(wasStartedFromBegin, 1), set(state.finished, 0), set(state.velocity, multiply(velocity, velocityFactor)), set(state.position, value), set(state.time, 0), startClock(clock)])]), cond(clockRunning(clock), decay(clock, state, config)), cond(state.finished, stopClock(clock)), state.position];
}

function withPreservingAdditiveOffset(drag, state) {
  const prev = new Value(0);
  const valWithPreservedOffset = new Value(0);
  return block([cond(eq(state, _reactNativeGestureHandler.State.BEGAN), [set(prev, 0)], [set(valWithPreservedOffset, add(valWithPreservedOffset, sub(drag, prev))), set(prev, drag)]), valWithPreservedOffset]);
}

function withDecaying(drag, state, decayClock, velocity, prevent) {
  const valDecayed = new Value(0);
  const offset = new Value(0); // since there might be moar than one clock

  const wasStartedFromBegin = new Value(0);
  return block([cond(eq(state, _reactNativeGestureHandler.State.END), [cond(prevent, stopClock(decayClock), set(valDecayed, runDecay(decayClock, add(drag, offset), velocity, wasStartedFromBegin)))], [stopClock(decayClock), cond(eq(state, _reactNativeGestureHandler.State.BEGAN), set(prevent, 0)), cond(or(eq(state, _reactNativeGestureHandler.State.BEGAN), eq(state, _reactNativeGestureHandler.State.ACTIVE)), set(wasStartedFromBegin, 0)), cond(eq(state, _reactNativeGestureHandler.State.BEGAN), [set(offset, sub(valDecayed, drag))]), set(valDecayed, add(drag, offset))]), valDecayed]);
}

class BottomSheetBehavior extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "decayClock", new Clock());

    _defineProperty(this, "panState", new Value(0));

    _defineProperty(this, "tapState", new Value(0));

    _defineProperty(this, "velocity", new Value(0));

    _defineProperty(this, "panMasterState", new Value(_reactNativeGestureHandler.State.END));

    _defineProperty(this, "masterVelocity", new Value(0));

    _defineProperty(this, "isManuallySetValue", new Value(0));

    _defineProperty(this, "manuallySetValue", new Value(0));

    _defineProperty(this, "masterClockForOverscroll", new Clock());

    _defineProperty(this, "preventDecaying", new Value(0));

    _defineProperty(this, "dragMasterY", new Value(0));

    _defineProperty(this, "dragY", new Value(0));

    _defineProperty(this, "translateMaster", void 0);

    _defineProperty(this, "panRef", void 0);

    _defineProperty(this, "master", void 0);

    _defineProperty(this, "tapRef", void 0);

    _defineProperty(this, "snapPoint", void 0);

    _defineProperty(this, "Y", void 0);

    _defineProperty(this, "clampingValue", new Value(0));

    _defineProperty(this, "onOpenStartValue", new Value(0));

    _defineProperty(this, "onOpenEndValue", new Value(0));

    _defineProperty(this, "onCloseStartValue", new Value(1));

    _defineProperty(this, "onCloseEndValue", new Value(0));

    _defineProperty(this, "handleMasterPan", event([{
      nativeEvent: {
        translationY: this.dragMasterY,
        state: this.panMasterState,
        velocityY: this.masterVelocity
      }
    }]));

    _defineProperty(this, "handlePan", event([{
      nativeEvent: {
        translationY: this.props.enabledInnerScrolling ? this.dragY : this.dragMasterY,
        state: this.props.enabledInnerScrolling ? this.panState : this.panMasterState,
        velocityY: this.props.enabledInnerScrolling ? this.velocity : this.masterVelocity
      }
    }]));

    _defineProperty(this, "handleTap", event([{
      nativeEvent: {
        state: this.tapState
      }
    }]));

    _defineProperty(this, "snapTo", index => {
      if (!this.props.enabledImperativeSnapping) {
        return;
      }

      this.isManuallySetValue.setValue(1);
      this.manuallySetValue.setValue( // @ts-ignore
      this.state.snapPoints[this.state.propsToNewIndices[index]]);
    });

    _defineProperty(this, "height", new Value(0));

    _defineProperty(this, "handleLayoutHeader", ({
      nativeEvent: {
        layout: {
          height: heightOfHeader
        }
      }
    }) => {
      this.state.heightOfHeaderAnimated.setValue(heightOfHeader);
      this.setState({
        heightOfHeader
      });
    });

    _defineProperty(this, "handleFullHeader", ({
      nativeEvent: {
        layout: {
          height
        }
      }
    }) => requestAnimationFrame(() => this.height.setValue(height)));

    _defineProperty(this, "handleLayoutContent", ({
      nativeEvent: {
        layout: {
          height
        }
      }
    }) => this.state.heightOfContent.setValue(height - this.state.initSnap));

    this.panRef = props.innerGestureHandlerRefs[0];
    this.master = props.innerGestureHandlerRefs[1];
    this.tapRef = props.innerGestureHandlerRefs[2];
    this.state = BottomSheetBehavior.getDerivedStateFromProps(props, undefined);
    const {
      snapPoints,
      init
    } = this.state;
    const middlesOfSnapPoints = [];

    for (let i = 1; i < snapPoints.length; i++) {
      const tuple = [add(snapPoints[i - 1], 10), sub(snapPoints[i], 25)];
      middlesOfSnapPoints.push(tuple);
    }

    const masterOffseted = new Value(init); // destination point is a approximation of movement if finger released

    const tossForMaster = props.springConfig.hasOwnProperty('toss') && props.springConfig.toss != undefined ? props.springConfig.toss : toss;
    const destinationPoint = add(masterOffseted, multiply(tossForMaster, this.masterVelocity));
    const positive = greaterOrEq(multiply(tossForMaster, this.masterVelocity), 0); // method for generating condition for finding the nearest snap point

    const currentSnapPoint = (i = 0) => i + 1 === snapPoints.length ? snapPoints[i] : cond(positive, cond(greaterThan(destinationPoint, middlesOfSnapPoints[i][0]), cond(lessThan(destinationPoint, middlesOfSnapPoints[i][1]), snapPoints[i + 1], currentSnapPoint(i + 1)), snapPoints[i]), cond(greaterThan(destinationPoint, middlesOfSnapPoints[i][1]), cond(lessThan(destinationPoint, middlesOfSnapPoints[i][0]), snapPoints[i + 1], currentSnapPoint(i + 1)), snapPoints[i])); // current snap point desired


    this.snapPoint = currentSnapPoint();

    if (props.enabledBottomClamp) {
      this.clampingValue.setValue(snapPoints[snapPoints.length - 1]);
    }

    const masterClock = new Clock();
    const prevMasterDrag = new Value(0);
    const wasRun = new Value(0);
    this.translateMaster = block([cond(or(eq(this.panMasterState, _reactNativeGestureHandler.State.END), eq(this.panMasterState, _reactNativeGestureHandler.State.CANCELLED), eq(this.panMasterState, _reactNativeGestureHandler.State.FAILED)), [set(prevMasterDrag, 0), cond(or(clockRunning(masterClock), not(wasRun), this.isManuallySetValue), [cond(this.isManuallySetValue, stopClock(masterClock)), set(masterOffseted, this.runSpring(masterClock, masterOffseted, this.masterVelocity, cond(this.isManuallySetValue, this.manuallySetValue, this.snapPoint), wasRun, this.isManuallySetValue, this.masterVelocity)), set(this.isManuallySetValue, 0)])], [stopClock(masterClock), set(this.preventDecaying, 1), set(masterOffseted, add(masterOffseted, sub(this.dragMasterY, prevMasterDrag))), set(prevMasterDrag, this.dragMasterY), set(wasRun, 0), // not sure about this move for cond-began
    cond(eq(this.panMasterState, _reactNativeGestureHandler.State.BEGAN), stopClock(this.masterClockForOverscroll))]), cond(greaterThan(masterOffseted, snapPoints[0]), cond(and(props.enabledBottomClamp ? 1 : 0, greaterThan(masterOffseted, this.clampingValue)), this.clampingValue, masterOffseted), max(multiply(sub(snapPoints[0], sqrt(add(1, sub(snapPoints[0], masterOffseted)))), !props.enabledInnerScrolling ? props.overdragResistanceFactor : 0), masterOffseted))]);
    this.Y = this.withEnhancedLimits(withDecaying(withPreservingAdditiveOffset(this.dragY, this.panState), this.panState, this.decayClock, this.velocity, this.preventDecaying), masterOffseted);
  }

  componentDidUpdate(_prevProps, prevState) {
    const {
      snapPoints
    } = this.state;

    if (this.props.enabledBottomClamp && snapPoints !== prevState.snapPoints) {
      this.clampingValue.setValue(snapPoints[snapPoints.length - 1]);
    }
  }

  runSpring(clock, value, velocity, dest, wasRun, isManuallySet, valueToBeZeroed) {
    const state = {
      finished: new Value(0),
      velocity: new Value(0),
      position: new Value(0),
      time: new Value(0)
    };

    const config = _objectSpread({
      damping,
      mass,
      stiffness,
      overshootClamping,
      restSpeedThreshold,
      restDisplacementThreshold,
      toValue: new Value(0)
    }, this.props.springConfig);

    return [cond(clockRunning(clock), 0, [set(state.finished, 0), set(state.velocity, velocity), set(state.position, value), set(config.toValue, dest), cond(and(wasRun, not(isManuallySet)), 0, startClock(clock)), cond(defined(wasRun), set(wasRun, 1))]), spring(clock, state, config), cond(state.finished, [stopClock(clock), set(valueToBeZeroed, 0)]), state.position];
  }

  withEnhancedLimits(val, masterOffseted) {
    const wasRunMaster = new Value(0);
    const min = multiply(-1, add(this.state.heightOfContent, this.state.heightOfHeaderAnimated));
    const prev = new Value(0);
    const limitedVal = new Value(0);
    const diffPres = new Value(0);
    const flagWasRunSpring = new Value(0);
    const justEndedIfEnded = new Value(1);
    const wasEndedMasterAfterInner = new Value(1);
    const prevMaster = new Value(1);
    const prevState = new Value(0);
    const rev = new Value(0);
    return block([set(rev, limitedVal), cond(or(eq(this.panState, _reactNativeGestureHandler.State.BEGAN), and(eq(this.panState, _reactNativeGestureHandler.State.ACTIVE), eq(prevState, _reactNativeGestureHandler.State.END))), [set(prev, val), set(flagWasRunSpring, 0), stopClock(this.masterClockForOverscroll), set(wasRunMaster, 0)], [set(limitedVal, add(limitedVal, sub(val, prev))), cond(lessThan(limitedVal, min), set(limitedVal, min))]), set(prevState, this.panState), // on iOS sometimes BEGAN event does not trigger
    set(diffPres, sub(prev, val)), set(prev, val), cond(or(greaterOrEq(limitedVal, 0), greaterThan(masterOffseted, 0)), [cond(eq(this.panState, _reactNativeGestureHandler.State.ACTIVE), set(masterOffseted, sub(masterOffseted, diffPres))), cond(greaterThan(masterOffseted, 0), [set(limitedVal, 0)]), cond(not(eq(this.panState, _reactNativeGestureHandler.State.END)), set(justEndedIfEnded, 1)), cond(or(eq(this.panState, _reactNativeGestureHandler.State.ACTIVE), eq(this.panMasterState, _reactNativeGestureHandler.State.ACTIVE)), set(wasEndedMasterAfterInner, 0)), cond(and(eq(prevMaster, _reactNativeGestureHandler.State.ACTIVE), eq(this.panMasterState, _reactNativeGestureHandler.State.END), eq(this.panState, _reactNativeGestureHandler.State.END)), set(wasEndedMasterAfterInner, 1)), set(prevMaster, this.panMasterState), cond(and(eq(this.panState, _reactNativeGestureHandler.State.END), not(wasEndedMasterAfterInner), not(eq(this.panMasterState, _reactNativeGestureHandler.State.ACTIVE)), not(eq(this.panMasterState, _reactNativeGestureHandler.State.BEGAN)), or(clockRunning(this.masterClockForOverscroll), not(wasRunMaster))), [// cond(justEndedIfEnded, set(this.masterVelocity, diff(val))),
    set(this.masterVelocity, cond(justEndedIfEnded, diff(val), this.velocity)), set(masterOffseted, this.runSpring(this.masterClockForOverscroll, masterOffseted, diff(val), this.snapPoint, wasRunMaster, 0, this.masterVelocity)), set(this.masterVelocity, 0)]), //   cond(eq(this.panState, State.END), set(wasEndedMasterAfterInner, 0)),
    cond(eq(this.panState, _reactNativeGestureHandler.State.END), set(justEndedIfEnded, 0)), set(this.preventDecaying, 1), 0], [set(this.preventDecaying, 0), limitedVal])]);
  }

  static getDerivedStateFromProps(props, state) {
    let snapPoints;
    const sortedPropsSnapPoints = props.snapPoints.map((s, i) => {
      if (typeof s === 'number') {
        return {
          val: s,
          ind: i
        };
      } else if (typeof s === 'string') {
        return {
          val: BottomSheetBehavior.renumber(s),
          ind: i
        };
      }

      throw new Error("Invalid type for value ".concat(s, ": ").concat(typeof s));
    }).sort(({
      val: a
    }, {
      val: b
    }) => b - a);

    if (state && state.snapPoints) {
      state.snapPoints.forEach((s, i) => // @ts-ignore
      s.__initialized && s.setValue(sortedPropsSnapPoints[0].val - sortedPropsSnapPoints[i].val));
      snapPoints = state.snapPoints;
    } else {
      snapPoints = sortedPropsSnapPoints.map(p => new Value(sortedPropsSnapPoints[0].val - p.val));
    }

    const propsToNewIndices = {};
    sortedPropsSnapPoints.forEach(({
      ind
    }, i) => propsToNewIndices[ind] = i);
    const {
      initialSnap
    } = props;
    let init = sortedPropsSnapPoints[0].val - sortedPropsSnapPoints[propsToNewIndices[initialSnap]].val;

    if (props.enabledBottomInitialAnimation) {
      init = sortedPropsSnapPoints[sortedPropsSnapPoints.length - 1 - propsToNewIndices[initialSnap]].val;
    }

    return {
      init,
      propsToNewIndices,
      heightOfHeaderAnimated: state && state.heightOfHeaderAnimated || new Value(0),
      heightOfContent: state && state.heightOfContent || new Value(0),
      initSnap: sortedPropsSnapPoints[0].val,
      snapPoints,
      heightOfHeader: state && state.heightOfHeader || 0
    };
  }

  render() {
    const {
      borderRadius
    } = this.props;
    return React.createElement(React.Fragment, null, React.createElement(_reactNativeReanimated.default.View, {
      style: {
        height: '100%',
        width: 0,
        position: 'absolute'
      },
      onLayout: this.handleFullHeader
    }), React.createElement(_reactNativeReanimated.default.View, {
      style: {
        width: '100%',
        position: 'absolute',
        zIndex: 100,
        opacity: cond(this.height, 1, 0),
        transform: [{
          translateY: this.translateMaster
        }, {
          translateY: sub(this.height, this.state.initSnap)
        }]
      }
    }, React.createElement(_reactNativeGestureHandler.PanGestureHandler, {
      enabled: this.props.enabledGestureInteraction && this.props.enabledHeaderGestureInteraction,
      ref: this.master,
      waitFor: this.panRef,
      onGestureEvent: this.handleMasterPan,
      onHandlerStateChange: this.handleMasterPan,
      simultaneousHandlers: this.props.simultaneousHandlers
    }, React.createElement(_reactNativeReanimated.default.View, {
      style: {
        zIndex: 101
      },
      onLayout: this.handleLayoutHeader
    }, this.props.renderHeader && this.props.renderHeader())), React.createElement(_reactNative.View, {
      style: this.props.enabledInnerScrolling && {
        height: this.state.initSnap - this.state.heightOfHeader,
        overflow: this.props.overflow || 'hidden',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
      }
    }, React.createElement(_reactNativeGestureHandler.PanGestureHandler, {
      enabled: this.props.enabledGestureInteraction && this.props.enabledContentGestureInteraction,
      waitFor: this.master,
      ref: this.panRef,
      onGestureEvent: this.handlePan,
      onHandlerStateChange: this.handlePan,
      simultaneousHandlers: this.props.simultaneousHandlers
    }, React.createElement(_reactNativeReanimated.default.View, null, React.createElement(_reactNativeGestureHandler.TapGestureHandler, {
      ref: this.tapRef,
      enabled: this.props.enabledGestureInteraction && this.props.enabledContentGestureInteraction && this.props.enabledContentTapInteraction,
      onHandlerStateChange: this.handleTap,
      simultaneousHandlers: this.props.simultaneousHandlers
    }, React.createElement(_reactNativeReanimated.default.View, {
      style: {
        width: '100%',
        transform: [{
          translateY: this.Y
        }]
      },
      onLayout: this.handleLayoutContent
    }, this.props.renderContent && this.props.renderContent())))), React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.tapState, cond(eq(this.tapState, _reactNativeGestureHandler.State.BEGAN), stopClock(this.decayClock)))
    }), this.props.callbackNode && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, set(this.props.callbackNode, divide(this.translateMaster, this.state.snapPoints[this.state.snapPoints.length - 1])))
    }), (this.props.onOpenStart || this.props.onCloseEnd) && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, [cond(and(lessOrEq(divide(this.translateMaster, this.state.snapPoints[this.state.snapPoints.length - 1]), 1 - (this.props.callbackThreshold ? this.props.callbackThreshold : 0.01)), neq(this.onOpenStartValue, 1)), [call([], () => {
        if (this.props.onOpenStart) this.props.onOpenStart();
      }), set(this.onOpenStartValue, 1), cond(defined(this.onCloseEndValue), set(this.onCloseEndValue, 0))])])
    }), (this.props.onOpenEnd || this.props.onCloseStart) && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, [cond(and(lessOrEq(divide(this.translateMaster, this.state.snapPoints[this.state.snapPoints.length - 1]), this.props.callbackThreshold ? this.props.callbackThreshold : 0.01), neq(this.onOpenEndValue, 1)), [call([], () => {
        if (this.props.onOpenEnd) this.props.onOpenEnd();
      }), set(this.onOpenEndValue, 1), cond(defined(this.onCloseStartValue), set(this.onCloseStartValue, 0))])])
    }), (this.props.onCloseStart || this.props.onOpenEnd) && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, [cond(and(greaterOrEq(divide(this.translateMaster, this.state.snapPoints[this.state.snapPoints.length - 1]), this.props.callbackThreshold ? this.props.callbackThreshold : 0.01), neq(this.onCloseStartValue, 1)), [call([], () => {
        if (this.props.onCloseStart) this.props.onCloseStart();
      }), set(this.onCloseStartValue, 1), cond(defined(this.onCloseStartValue), set(this.onOpenEndValue, 0))])])
    }), (this.props.onCloseEnd || this.props.onOpenStart) && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, [cond(and(greaterOrEq(divide(this.translateMaster, this.state.snapPoints[this.state.snapPoints.length - 1]), 1 - (this.props.callbackThreshold ? this.props.callbackThreshold : 0.01)), neq(this.onCloseEndValue, 1)), [call([], () => {
        if (this.props.onCloseEnd) this.props.onCloseEnd();
      }), set(this.onCloseEndValue, 1), cond(defined(this.onOpenStartValue), set(this.onOpenStartValue, 0)), cond(defined(this.onOpenEndValue), set(this.onOpenEndValue, 0))])])
    }), this.props.contentPosition && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.Y, set(this.props.contentPosition, sub(0, this.Y)))
    }), this.props.headerPosition && React.createElement(_reactNativeReanimated.default.Code, {
      exec: onChange(this.translateMaster, set(this.props.headerPosition, this.translateMaster))
    }))));
  }

}

exports.default = BottomSheetBehavior;

_defineProperty(BottomSheetBehavior, "defaultProps", {
  overdragResistanceFactor: 0,
  initialSnap: 0,
  enabledImperativeSnapping: true,
  enabledGestureInteraction: true,
  enabledBottomClamp: false,
  enabledBottomInitialAnimation: false,
  enabledHeaderGestureInteraction: true,
  enabledContentGestureInteraction: true,
  enabledContentTapInteraction: true,
  enabledInnerScrolling: true,
  springConfig: {},
  innerGestureHandlerRefs: [React.createRef(), React.createRef(), React.createRef()],
  callbackThreshold: 0.01
});

_defineProperty(BottomSheetBehavior, "renumber", str => Number(str.split('%')[0]) * screenHeight / 100);
//# sourceMappingURL=index.js.map