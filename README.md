# Sakura v1.1

SCSS mixins to work with cards — and card collections — using flexbox

## Intro

Sakura is a single SCSS file include two mixins: one for standalone cards, and one for card collections using flexbox, originally created to be used with Sierra SCSS Library.

Both collections and standalone cards require calling the mixin for the container, and including all classes needed in HTML. Classes use BEM naming convention to make them easily readable.

### Why mixins?

It's the perfect solution if you want to use it for different cards and collections, so each collection has its own set of vars.

## Mixins

### card-collection

    @include card-collection($cards-min-size,$cards-max-size,$cards-separation,$cards-inner-space);

* cards-min-size
    Minimum size of the cards (width when cards are displayed in rows, height when they're displayed in columns). For fixed size cards, this will be the size used.
    This var has no default value.
* cards-max-size
    Maximum size of the cards (width when cards are displayed in rows, height when they're displayed in columns).
    Default value is same as cards-min-size.
* cards-separation
    Space between cards (both vertical and horizontal).
    Default value is 0.
* cards-inner-space
    Space between content and border, and between cards' contents.
    Default value is 0.

### standalone-card

    @include standalone-card($cards-inner-space);

* cards-inner-space
    Space between content and border, and between cards' contents.
    Default value is 0.

## HTML

Every collection needs a container element. Inside that element — as a direct children, because if not, flexbox won't work — there's an element acting as a wrapper for the card, with a card element inside. This is for managing spaces between cards. Inside a card there's as many rows as you need, and if you need several contents in the same row, an element containing them and those elements.

The collection and card wrapper elements use flexbox for displaying the card collection, but flexbox is used also inside the card to display rows, and also the elements on subdivided rows.
 
## Collection

### Required

* card-collection
    Has to be used on the element containing the cards. The card-collection mixin should be called on this same element.
    Important! The way flexbox works cards should be direct children of this element.
* card-collection--row | card-collection--column
    Direction in which cards would be displayed, horizontally by rows or vertically by columns.
* card-collection--wrap | card-collection--no-wrap
    If cards are wrapped, they will go on several rows or columns; if not, the will be displayed on a single row or column.
* card-collection--justify-flex-start | card-collection--justify-flex-end | card-collection--justify-center | card-collection--justify-space-between | card-collection--justify-space-around
    How cards are displayed: starting at the start of the line, at the end of the line, centered along the line, distributed at start and end with equal space between the elements, or distributed with equal space between the elements and around them to the start and end of the line.
* card-collection--align-items-flex-start | card-collection--align-items-flex-end | card-collection--align-items-center | card-collection--align-items-stretch | card-collection--align-items-baseline
    How cards are aligned with each other: at the start of the element, at the end of it, centered, at baseline or stretched to fill the parent full height (on rows) or width (on columns).

## Wrapper

### Required

* card-wrap
    Has to be used on the top element of each card. The standalone-card mixin should be called on this same element when used without a collection.
    Important! On collections, the way flexbox works this has to be a direct children of the card collection container.

### Optional

* card-wrap--growable
    If card size can grow to fit on screen.
    Can be used together with card-wrap--shrinkable.
* card-wrap--shrinkable
    If card size can shrink to fit on screen.
    Can be used together with card-wrap--growable.

### How card size works?

Using flexbox, cards can grow or shrink in size to fit the container. With these clases, you can add the ability to grow or shrink to a card, or both. If you use none, card will have a fixed size.

When part of a collection, each card would have a base size, and could have a maximum and minimum size. Those are calculated based on the vars used on the mixin, and the use of these clases.

* For fixed size cards, cards-min-size will be used.
* For growable cards, cards-min-size will the base card size, and cards-max-size will be the maximum size.
* For shrinkable cards, cards-max-size will the base card size, and cards-min-size will be the minimum size.
* For cards both growable and shrinkable, cards-min-size will the minimum card size, cards-max-size will be the maximum size and the base size will be calculated halfway between cards-min-size and cards-max-size.

## Card

### Required

* card
    An element children of the wrapper.

## Row

### Required

* card__row
    An element containing one row of content of the card.

### Optional

* card__row--no-padding
    A row without any inner space.
* card__row--growable
    Row height can grow to fit card available space.
* card__row--shrinkable
    Row height can shrink to fit card available space.
 
## Divisions

### Required

* card__row__divisions
    An element containing horizontal subdivisions of one row of content of the card.

## Division

### Required

* card__row__divisions__division
    One piece of content on a card's subdivided row.

### Optional

* card__row__divisions__division--growable
    Division width can grow to fit row available space.
* card__row__divisions__division--shrinkable
    Division width can shrink to fit row available space.
    
Sakura
Version: 1.1

https://github.com/franrosa/sakura

Built by Fran Rosa at Littio, licensed under the GNU General Public License v3.0.