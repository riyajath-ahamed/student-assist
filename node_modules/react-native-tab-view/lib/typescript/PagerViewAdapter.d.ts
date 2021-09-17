import * as React from 'react';
import { Animated } from 'react-native';
import type { NavigationState, Route, EventEmitterProps, PagerProps } from './types';
declare type Props<T extends Route> = PagerProps & {
    onIndexChange: (index: number) => void;
    navigationState: NavigationState<T>;
    children: (props: EventEmitterProps & {
        position: Animated.AnimatedInterpolation;
        render: (children: React.ReactNode) => React.ReactNode;
        jumpTo: (key: string) => void;
    }) => React.ReactElement;
};
export default function PagerViewAdapter<T extends Route>({ keyboardDismissMode, swipeEnabled, navigationState, onIndexChange, onSwipeStart, onSwipeEnd, children, style, ...rest }: Props<T>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
