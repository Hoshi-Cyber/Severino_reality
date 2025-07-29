export function renderPropertyMetaSchema(data) {
  return `<script type="application/ld+json">
  ${JSON.stringify(data, null, 2)}
  </script>`;
}
