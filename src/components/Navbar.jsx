/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


const Navbar = ({ navOpen }) => {
  
  const lastActiveLink = useRef();
  const activeBox = useRef();
  
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event) => {
    event.preventDefault(); // evita interferencias
    const _target = event.target;
    const _href = _target.getAttribute('href');

    lastActiveLink.current?.classList.remove('active');
    _target.classList.add('active');
    lastActiveLink.current = _target;

    activeBox.current.style.top = _target.offsetTop + 'px';
    activeBox.current.style.left = _target.offsetLeft + 'px';
    activeBox.current.style.width = _target.offsetWidth + 'px';
    activeBox.current.style.height = _target.offsetHeight + 'px';

    // dejar que se actualice y luego navegar
    setTimeout(() => {
      document.querySelector(_href)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };


  const navItems = [
    {
      label: 'Inicio',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'Sobre mi',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Mis proyectos',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Contacto',
      link: '#contact',
      className: 'nav-link'
    }
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {
        navItems.map(({ label, link, className, ref }, key) => (
          <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))
      }
      <div
        className="active-box"
        ref={activeBox}
      ></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar