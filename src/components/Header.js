export function renderHeader(data) {
  return `
    <header class="site-header">
      <div class="logo"><img src="${data.logo}" alt="Logo" /></div>
      <nav>
        <ul>
          ${data.navItems.map(item => `<li><a href="${item.link}">${item.label}</a></li>`).join("")}
        </ul>
      </nav>
      <a href="${data.contactLink}" class="contact-btn">Contact</a>
    </header>`;
}
