class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// code smells

// funciones más pequeñas:
// .. por funcionalidad relacionada
// .. por cada item
// Muchos ifs

// god class
const AGED_BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

class GildedRose {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let item of this.items) {
      this.update(item);
    }

    return this.items;
  }

  update(item) {
    if (this.isAgedBrie(item)) {
      this.updateAgedBrie(item);
    } else if (item.name === BACKSTAGE) {
      this.increaseItemQuality(item);

      if (item.sellIn < 11) {
        this.increaseItemQuality(item);
      }
      if (item.sellIn < 6) {
        this.increaseItemQuality(item);
      }
      item.sellIn -= 1;
      if (this.hasPass(item)) {
        item.quality = 0;
      }
    } else if (item.name === SULFURAS) {
    } else {
      this.decreaseItemQuality(item);
      item.sellIn -= 1;
      if (this.hasPass(item)) {
        this.decreaseItemQuality(item);
      }
    }
  }

  updateAgedBrie(item) {
    this.increaseItemQuality(item);
    item.sellIn -= 1;
    if (this.hasPass(item)) {
      this.increaseItemQuality(item);
    }
  }

  hasPass(item) {
    return item.sellIn < 0;
  }
  isAgedBrie(item) {
    return item.name === AGED_BRIE;
  }

  increaseItemQuality(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  decreaseItemQuality(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }
}

module.exports = {
  Item,
  GildedRose,
};
