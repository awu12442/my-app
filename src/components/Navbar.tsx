// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center mb-8 p-4"> {/* Added padding */}
            <div className="flex items-center">
                <Link href="/" className="link">
                  <Image
                        src="https://cdn.discordapp.com/attachments/1163937321763221678/1260131270428594236/AWLogobyDesigner.png?ex=668e3432&is=668ce2b2&hm=3c0e2f0ee5701a343598bdb2ad7115c607a09969e0db45471fc85890fda1d980&"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 mr-4"
                    /> 
                </Link>

            </div>
            <nav className="space-x-4">
                <Link href="/portfolio" className="link">
                    Portfolio
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
