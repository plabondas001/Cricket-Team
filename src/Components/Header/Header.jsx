
const Header = ({children}) => {
    return (
        <div className="mt-5 w-11/12 mx-auto">
            <h2 className={`bg-[url(/bg-shadow.png)] flex rounded-2xl justify-center items-center text-4xl gap-1 font-bold text-center bg-no-repeat pb-20 pt-10 bg-center mt-5`} style={{backgroundSize: "100% 100%"}}>{children}</h2>
        </div>
    );
};

export default Header;