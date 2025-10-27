/**
 * Node modules
 */
import { useState } from "react";


/**
 * Components
 */
import Navbar from "./Navbar";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        <h1>
          <a
            href="/"
            className="logo"
          >
            <img
                src="/images/MarioImgCalvo.png"
                width={40}
                height={40}
                alt="Mario Ribe"
                className="rounded-full"
            />
          </a>
        </h1>

        <div className="relative md:col-start-2 md:justify-self-center">
          <button
              className="menu-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
          >
    <span className="material-symbols-rounded">
      {navOpen ? 'close' : 'menu'}
    </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>


      </div>
    </header>
  )
}

export default Header