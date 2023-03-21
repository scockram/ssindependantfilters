window.onload = function() {
  const filterContainer = document.getElementById('filter-list');
  const filters = filterContainer.getElementsByTagName('li');

  for (const filter of filters) {
    filter.onclick = function() {
      if (filterContainer.dataset.active == this.dataset.design) {
        delete filterContainer.dataset.active;
        delete filterContainer.dataset.compatible;
      } else {
        filterContainer.dataset.active = this.dataset.design;
        filterContainer.dataset.compatible = this.dataset.compatible;
      }
    }
  }
}

