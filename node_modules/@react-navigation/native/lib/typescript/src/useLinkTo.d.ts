export declare type To<ParamList extends ReactNavigation.RootParamList = ReactNavigation.RootParamList, RouteName extends keyof ParamList = keyof ParamList> = string | (undefined extends ParamList[RouteName] ? {
    screen: RouteName;
    params?: ParamList[RouteName];
} : {
    screen: RouteName;
    params: ParamList[RouteName];
});
export default function useLinkTo<ParamList extends ReactNavigation.RootParamList>(): (to: To<ParamList>) => void;
