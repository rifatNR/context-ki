const LoaderMain = () => {
    return <div id="spinner" className="spinner"></div>;
};

const MainSpinner = () => {
    return (
        <div id="spinner_div" className="z-loader">
            <LoaderMain />
        </div>
    );
};

export default MainSpinner;
