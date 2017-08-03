## ngbs-pagination

**current-page** (*number*, optional) - The page that should be selected initially. Defaults to `1`.

**disabled** (*boolean*, optional) - Disables all interactions. Defaults to `false`.

**items-per-page** (*number*, required) - The number of items from your dataset that you will be showing per page. This is used in conjuction with `total-items` to calculate how many page numbers will be shown on the pagination component.

**on-page-change** (*function*, required) - The function to call when a user changes the page (clicks a number, or previous/next). Signature: `(pageNumber) => { ... }`.

**size** (*string*, optional) - The display size of the component, can either be `'sm'`, `'lg'`, or `''` (the default size).

**total-items** (*number*, required) - The total number of items your dataset will have it. This is used in conjuction with `items-per-page` to calculate how many page numbers will be shown on the pagination component.

**visible-page-buffer** (*number*, optional) - This property is taken as more of a suggestion and is used to determine how many page numbers surround the selected page on each side. This ultimately allows for greater usability by creating a consistent amount of page numbers no matter which page the user is on. The minimum number of pages that will be shown by the component is 5.  This is because the first and last page will always be shown (+2), slots will be reserved to illustrate that there is a gap in paging (+2), and the selected page will always be shown (+1). To take full advantage of this, you may need to add extra styling to make page links the same width. Defaults to `3`.
