import Hello from "./Hello/Hello";
import Image from "next/image";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Image src="/images/sloth.jpeg" width={300} height={300} />
            <Image src="https://images.unsplash.com/photo-1635785988204-1bd3efb3bff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" width={300} height={300}/>
            {children}
        </div>
    );
}

export default Layout;
