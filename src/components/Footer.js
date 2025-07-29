export function renderFooter(data) {
  return `
    <footer class="site-footer">
      <div class="company-info">${data.companyInfo}</div>
      <div class="links">
        ${data.links.map(link => `<a href="${link.url}">${link.label}</a>`).join(" | ")}
      </div>
      <div class="copyright">${data.copyright}</div>
    </footer>`;
}
