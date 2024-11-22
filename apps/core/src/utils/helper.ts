export const delay = (millisecond: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};
