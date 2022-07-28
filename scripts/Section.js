export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderItem() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._container.prepend(item);
  }
}
