window.onload = function() {
  const filterContainer = document.getElementById('filter-list');
  const filters = filterContainer.getElementsByTagName('li');

  for (const filter of filters) {
    filter.onclick = function() {
      filterContainer.dataset.active = this.dataset.design;
      filterContainer.dataset.compatible = this.dataset.compatible;
    }
  }
}

