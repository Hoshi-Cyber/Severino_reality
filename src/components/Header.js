export function renderHeader() {
  return `
    <header class="site-header">
      <div class="navbar-container">

        <!-- Logo -->
        <a href="/index.html" class="logo" aria-label="Severino Realty Home">
          <img src="/assets/severino_logo.png" alt="Severino Realty Logo" style="height: 40px;" />
        </a>

        <!-- Navigation -->
        <nav role="navigation" aria-label="Main navigation">
          <ul class="nav-menu" id="main-menu">
            <li><a href="/index.html">Home</a></li>

            <!-- Listings Dropdown -->
            <li class="has-dropdown" aria-haspopup="true">
              <a href="#" aria-expanded="false" aria-label="Our Listings dropdown">Our Listings ▾</a>
              <div class="dropdown" role="menu">
                <a href="/rent/">For Rent</a>
                <a href="/buy/">For Sale</a>
                <a href="/shortstay/">Short Stays</a>
              </div>
            </li>

            <!-- Resources Dropdown -->
            <li class="has-dropdown" aria-haspopup="true">
              <a href="#" aria-expanded="false" aria-label="Resources dropdown">Resources ▾</a>
              <div class="dropdown" role="menu">
                <a href="#">Buyer Guides</a>
                <a href="#">Landlord Tools</a>
                <a href="#">Blog</a>
              </div>
            </li>

            <li><a href="/contact.html">Contact</a></li>

            <!-- CTA Button -->
            <li>
              <a href="/contact.html" class="cta-button" style="margin-left: 12px;">
                List Property
              </a>
            </li>
          </ul>

          <!-- Mobile Toggle -->
          <div class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation" aria-haspopup="true" aria-expanded="false">
            <span></span><span></span><span></span>
          </div>
        </nav>
      </div>
    </header>
  `;
}
