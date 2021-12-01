import Header from "./Header";

const Wrapper = ({children}) => {
    return (
        <div>
            <Header />
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
}

export default Wrapper;