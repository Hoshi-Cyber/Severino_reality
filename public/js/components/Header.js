/**
 * Render the site header.
 *
 * The header can be customised via the data argument passed from the page JSON.  
 * When present, `data.logo` should contain the relative path to a logo image in the
 * `public/assets/logos` folder.  Similarly, `data.navItems` may specify an array of
 * navigation links with `label` and `link` properties.  A `data.contactLink` may
 * also be provided to direct users to a contact or list-your-property page.
 *
 * @param {Object} data
 * @returns {string}
 */
export function renderHeader(data = {}) {
  const logoSrc = data.logo || 'assets/logos/logo_1.png';
  const navItems = Array.isArray(data.navItems) ? data.navItems : [
    { label: 'Home', link: 'home.html' },
    { label: 'Rent', link: '#' },
    { label: 'Buy', link: '#' },
    { label: 'About', link: '#' }
  ];
  const contactLink = data.contactLink || '#';

  return `
    <header class="site-header">
      <div class="navbar-container">
        <a href="home.html" class="logo" aria-label="Severino Realty Home">
          <img src="${logoSrc}" alt="Severino Realty Logo" height="40" />
        </a>
        <nav role="navigation" aria-label="Main navigation">
          <ul class="nav-menu">
            ${navItems.map(item => `<li><a href="${item.link}">${item.label}</a></li>`).join('')}
            <li><a href="${contactLink}" class="cta-button">List Property</a></li>
          </ul>
          <div class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation" aria-haspopup="true" aria-expanded="false">
            <span></span><span></span><span></span>
          </div>
        </nav>
      </div>
    </header>
  `;
}
