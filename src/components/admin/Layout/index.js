
import Aside from "./Aside";
import Content from "./Content";
import Footer from './Footer';
import Header from "./Header";



const Layout = ({ children }) => {
    return (
        <>
            <div className="d-flex flex-column flex-root aside-minimize">
                <div className="page d-flex flex-row flex-column-fluid">
                    <Aside></Aside>

                    <div className="wrapper d-flex flex-column flex-row-fluid">
                        <Header />

                        <Content>
                            {children}
                        </Content>
                        <Footer />
                    </div>

                </div>

            </div>

        </>
    );
};

export default Layout;