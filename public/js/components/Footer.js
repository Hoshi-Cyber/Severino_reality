/**
 * Render the site footer.
 *
 * The footer can be tailored via the provided data object.  Supported
 * properties include:
 *  - logo: relative path to a logo in `public/assets/logos`
 *  - companyInfo: plain text about the company
 *  - footerLinks: an array of link groups (e.g. listings, resources)
 *    Each group should have a `title` and `items[]` with `label` and `url`.
 *  - contact: object containing phone, email and address strings
 *  - social: array of social links with `label` and `url`
 *  - copyright: footer copyright string
 *
 * If no data is provided certain sensible defaults are used.
 *
 * @param {Object} data
 * @returns {string}
 */
export function renderFooter(data = {}) {
  const logoSrc = data.logo || 'assets/logos/logo_1.png';
  const companyInfo = data.companyInfo || 'Severino Realty Group connects people to homes and investments across Kenya. Trusted, transparent, tailored service.';
  const defaultLinks = [
    {
      title: 'Explore Listings',
      items: [
        { label: 'For Rent', url: '#' },
        { label: 'For Sale', url: '#' },
        { label: 'Short Stays', url: '#' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Buyer Guides', url: '#' },
        { label: 'Landlord Tools', url: '#' },
        { label: 'Blog', url: '#' }
      ]
    }
  ];
  const linkGroups = Array.isArray(data.footerLinks) && data.footerLinks.length ? data.footerLinks : defaultLinks;
  const contact = data.contact || {
    phone: '+254 712 345 678',
    email: 'info@severinorealty.com',
    address: 'Nairobi, Kenya'
  };
  const social = Array.isArray(data.socialLinks) && data.socialLinks.length ? data.socialLinks : [
    { label: 'Facebook', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'LinkedIn', url: '#' }
  ];
  const copyright = data.copyright || '&copy; 2025 Severino Realty Group. All rights reserved.';

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <img src="${logoSrc}" alt="Severino Realty Logo" height="40" style="margin-bottom:12px;" />
            <p>${companyInfo}</p>
          </div>
          ${linkGroups.map(group => `
            <div class="footer-column">
              <h4>${group.title}</h4>
              <ul>
                ${group.items.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')}
              </ul>
            </div>
          `).join('')}
          <div class="footer-column">
            <h4>Get in Touch</h4>
            <p><strong>📞</strong> <a href="tel:${contact.phone.replace(/\s+/g,'')}">${contact.phone}</a></p>
            <p><strong>📧</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
            <p><strong>📍</strong> ${contact.address}</p>
            <div class="footer-social mt-sm">
              ${social.map((s,i) => `<a href="${s.url}" target="_blank" aria-label="${s.label}">${s.label}</a>${i < social.length - 1 ? ' | ' : ''}`).join('')}
            </div>
          </div>
        </div>
        <div class="text-center mt-md">
          <small>${copyright}</small>
        </div>
      </div>
    </footer>
  `;
}
