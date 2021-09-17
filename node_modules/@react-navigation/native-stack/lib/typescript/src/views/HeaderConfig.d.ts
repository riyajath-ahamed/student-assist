/// <reference types="react" />
import { Route } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '../types';
declare type Props = NativeStackNavigationOptions & {
    route: Route<string>;
};
export default function HeaderConfig({ headerBackImageSource, headerBackTitle, headerBackTitleStyle, headerBackTitleVisible, headerBackVisible, headerShadowVisible, headerLargeStyle, headerLargeTitle, headerLargeTitleShadowVisible, headerLargeTitleStyle, headerLeft, headerRight, headerShown, headerStyle, headerBlurEffect, headerTintColor, headerTitle, headerTitleAlign, headerTitleStyle, headerTransparent, route, headerSearchBarOptions, title, }: Props): JSX.Element;
export {};
