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
  const res = await fetch(`../src/data/${slug}.json`);
  return await res.json();
}

async function renderPage() {
  const slug = getSlug();
  const data = await fetchData(slug);
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
}

renderPage();
