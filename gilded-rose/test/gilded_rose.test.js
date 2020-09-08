const { GildedRose, Item } = require('../src/gilded_rose');

describe('Gilded Rose', function () {
  it("the item's name does not change after one day", function () {
    const gildedRose = new GildedRose([new Item('meat', 10, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('meat');
  });

  it('the item´s sellIn decreases 1 each day', function () {
    const gildedRose = new GildedRose([new Item('meat', 10, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
  });

  it('the item´s quality decreases 1 each day', function () {
    const gildedRose = new GildedRose([new Item('meat', 10, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(9);
  });

  it('the item´s quality decreases by two when the item has passed', function () {
    const gildedRose = new GildedRose([new Item('meat', 0, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it('The Quality of an item is never negative', function () {
    const gildedRose = new GildedRose([new Item('meat', 10, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie´s  quality increases 1 each day', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(11);
  });

  it('Aged Brie´s  quality increases 2 when is expired', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(12);
  });

  it('The Quality of an item is never more than 50', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  describe('Sulfuras', () => {
    it('never decreases in Quality', function () {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 10, 10),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(10);
    });

    it('never has to be sold', function () {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 10, 50),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(10);
    });
  });

  describe('Backstage passes', () => {
    it('increases 1 in quality when sellIn is greater than 10', function () {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(11);
    });

    it('Quality increases by 2 when there are between 10 and 6 days', function () {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(12);
      expect(items[1].quality).toBe(12);
    });

    it('Quality increases By 3 when there are between 5 and 1 days ', function () {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(13);
      expect(items[1].quality).toBe(13);
    });

    it('Quality drops to 0 after the concert', function () {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });
});
