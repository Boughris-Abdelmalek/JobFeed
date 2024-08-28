type DebounceFunctionType = <F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, timeout?: number) => (...args: Parameters<F>) => undefined;

export const debounce: DebounceFunctionType = <F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, timeout =  300)  => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<F>) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            return func.apply(null, args); }, timeout);

        return undefined
    };

}