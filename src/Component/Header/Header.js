import logo from '/IDC/cb/base-cb-fe/src/assest/image/logo.jpg';

const Header = () => {
    return (
        <header className="bg-gradient-to-r text-white ">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="w-60 h-26" />
                </div>
                <nav>
                    <ul className="flex space-x-8 text-lg text-gray-500">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-green-500 transition-all duration-200 "
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-green-500 transition-all duration-200"
                            >
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-green-500 transition-all duration-200"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
