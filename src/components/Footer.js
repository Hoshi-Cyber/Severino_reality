export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">

          <!-- Company Info -->
          <div class="footer-column">
            <img src="/assets/severino_logo.png" alt="Severino Realty Logo" style="height: 40px; margin-bottom: 12px;" />
            <p>Severino Realty Group connects people to homes and investments across Kenya. Trusted, transparent, tailored service.</p>
          </div>

          <!-- Listings Links -->
          <div class="footer-column">
            <h4>Explore Listings</h4>
            <ul>
              <li><a href="/rent/">For Rent</a></li>
              <li><a href="/buy/">For Sale</a></li>
              <li><a href="/shortstay/">Short Stays</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Buyer Guides</a></li>
              <li><a href="#">Landlord Tools</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-column">
            <h4>Get in Touch</h4>
            <p><strong>📞</strong> <a href="tel:+254712345678">+254 712 345 678</a></p>
            <p><strong>📧</strong> <a href="mailto:info@severinorealty.com">info@severinorealty.com</a></p>
            <p><strong>📍</strong> Nairobi, Kenya</p>

            <div class="footer-social mt-sm">
              <a href="#" target="_blank" aria-label="Facebook">Facebook</a> |
              <a href="#" target="_blank" aria-label="Instagram">Instagram</a> |
              <a href="#" target="_blank" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

        </div>

        <div class="text-center mt-md">
          <small>&copy; 2025 Severino Realty Group. All rights reserved.</small>
        </div>
      </div>
    </footer>
  `;
}
