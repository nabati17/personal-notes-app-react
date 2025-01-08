// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { MdGTranslate, MdOutlineWbSunny } from 'react-icons/md';
// import { RiLogoutCircleRLine, RiMoonLine } from 'react-icons/ri';
// import { getAccessToken } from '../utils/network-data';
// import LocaleContext from '../contexts/LocaleContexts';
// import ThemeContext from '../contexts/ThemeContext';
// import PropTypes from 'prop-types';
// import { FaArchive } from "react-icons/fa";

// function Navigation({ logout, name }) {
//   const { locale, toggleLocale } = useContext(LocaleContext);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const accessToken = getAccessToken();
//   return (
//     <>
//      <h1>
//   <Link to="/" className="link-no-decoration">
//     {locale === 'id' ? `Catatan ${name}` : `Notes ${name}`}
//   </Link>
// </h1>

      
//        <button
//         className="toggle-locale"
//         type="button"
//       ><FaArchive /><Link to="/archive">
      
//     </Link>
//       </button>
//       <button
//         className="toggle-locale"
//         type="button"
//         onClick={toggleLocale}
//       >
//         <MdGTranslate />
//       </button>
//       <button
//         className="toggle-theme"
//         type="button"
//         onClick={toggleTheme}
//       >
//         {theme === 'dark' ? <MdOutlineWbSunny /> : <RiMoonLine />}
//       </button>
//       {accessToken ? (
//         <button
//           className="button-logout"
//           type="button"
//           onClick={logout}
//         >
//           <RiLogoutCircleRLine />
          
//         </button>
//       ) : null}
//     </>
//   );
// }

// Navigation.propTypes = {
//   logout: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
// };

// export default Navigation;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdGTranslate, MdOutlineWbSunny } from 'react-icons/md';
import { RiLogoutCircleRLine, RiMoonLine } from 'react-icons/ri';
import { getAccessToken } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContexts';
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from 'prop-types';
import { FaArchive } from "react-icons/fa";

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const accessToken = getAccessToken();

  return (
    <>
      <h1>
        <Link to="/" className="link-no-decoration">
          {locale === 'id' ? `Catatan ${name}` : `Notes ${name}`}
        </Link>
      </h1>

      <Link to="/archive" className="toggle-locale">
        <FaArchive />
      </Link>

      <button
        className="toggle-locale"
        type="button"
        onClick={toggleLocale}
      >
        <MdGTranslate />
      </button>

      <button
        className="toggle-theme"
        type="button"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <MdOutlineWbSunny /> : <RiMoonLine />}
      </button>

      {accessToken ? (
        <button
          className="button-logout"
          type="button"
          onClick={logout}
        >
          <RiLogoutCircleRLine />
        </button>
      ) : null}
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
