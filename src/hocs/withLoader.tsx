export const withLoader = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P & {isLoading: boolean}): React.ReactElement => {
        const { isLoading, ...restProps } = props as any;
        return isLoading ? <div>Loading...</div> : <Component {...(restProps as P)} />;
    };
}