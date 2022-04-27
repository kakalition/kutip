export const AuthBuilder = (leftContent, rightContent) => {
    return (
        <div
            id="root"
            className="flex h-screen w-screen flex-col
            lg:flex-row"
        >
            <div
                id="form-wrapper"
                className="flex h-screen w-full flex-col items-center justify-center bg-primary 
                lg:px-[10vw]"
            >
                {leftContent}
            </div>
            <div
                id="quote-wrapper"
                className="lg:single-centering 
                hidden lg:visible lg:h-screen lg:w-3/5 lg:bg-secondary lg:px-12"
            >
                {rightContent}
            </div>
        </div>
    );
};
