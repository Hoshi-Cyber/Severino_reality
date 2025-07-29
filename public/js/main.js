import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHeroBanner } from './components/HeroBanner.js';
import { renderPropertyDetails } from './components/PropertyDetails.js';
import { renderImageGallery } from './components/ImageGallery.js';
import { renderAmenitiesList } from './components/AmenitiesList.js';
import { renderCallToAction } from './components/CallToAction.js';
import { renderFAQAccordion } from './components/FAQAccordion.js';
import { renderMapEmbed } from './components/MapEmbed.js';
import { renderBreadcrumb } from './components/Breadcrumb.js';
import { renderSimilarProperties } from './components/SimilarProperties.js';
import { renderPropertyMetaSchema } from './components/PropertyMetaSchema.js';
import { renderFloatingContactWidget } from './components/FloatingContactWidget.js';
import { renderModalViewer } from './components/ModalViewer.js';
import { renderBackToTopButton } from './components/BackToTopButton.js';
import { renderPageLoader } from './components/PageLoader.js';

function getSlug() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('slug') || 'property-001';
}

async function fetchData(slug) {
  // fetch JSON relative to this script.  The json files live in `public/data` so
  // we traverse up one directory from `public/js` to reach them.
  const res = await fetch(`../data/${slug}.json`);
  if (!res.ok) {
    throw new Error(`Failed to load data for ${slug}`);
  }
  return await res.json();
}

async function renderPage() {
  const slug = getSlug();
  const data = await fetchData(slug);
  // Update document title and meta description for SEO
  document.title = `${data.title} – Severino Realty`;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', `${data.title} located in ${data.location} priced at ${data.price}. Browse images, amenities and contact us to schedule a viewing.`);
  document.getElementById('meta').innerHTML = renderPropertyMetaSchema(data.meta);
  document.getElementById('header').innerHTML = renderHeader(data);
  document.getElementById('hero').innerHTML = renderHeroBanner(data);
  document.getElementById('breadcrumb').innerHTML = renderBreadcrumb(data.breadcrumb);
  document.getElementById('gallery').innerHTML = renderImageGallery(data.gallery);
  document.getElementById('details').innerHTML = renderPropertyDetails(data);
  document.getElementById('amenities').innerHTML = renderAmenitiesList(data.amenities);
  document.getElementById('cta').innerHTML = renderCallToAction(data.cta);
  document.getElementById('faq').innerHTML = renderFAQAccordion(data.faq);
  document.getElementById('map').innerHTML = renderMapEmbed(data.map);
  document.getElementById('similar').innerHTML = renderSimilarProperties(data.similar);
  document.getElementById('footer').innerHTML = renderFooter(data);
  document.getElementById('backToTop').innerHTML = renderBackToTopButton();
  document.getElementById('contactWidget').innerHTML = renderFloatingContactWidget({ url: 'https://wa.me/254712345678', icon: 'icon-chat' });
  document.getElementById('modal').innerHTML = renderModalViewer("imgModal", "<p>Sample Modal</p>");
  document.getElementById('loader').innerHTML = renderPageLoader();

  // attach interactive behaviours once the markup has been written
  addInteractivity();
}

renderPage();

/**
 * Add event handlers to interactive components once they are rendered.
 */
function addInteractivity() {
  // FAQ accordion toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;
      if (expanded) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    });
  });

  // Back to top functionality
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hide the page loader once everything is loaded
  const loader = document.querySelector('.page-loader');
  if (loader) {
    // Use a timeout to allow CSS animations to finish if any
    setTimeout(() => {
      loader.style.display = 'none';
    }, 300);
  }

  // Mobile nav toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
      navMenu.classList.toggle('active');
    });
  }
}
