## ngbs-pagination

**current-page** (*number*, optional) - The currently selected page. Defaults to `1`.

**disabled** (*boolean*, optional) - Disables all interactions. Defaults to `false`.

**items-per-page** (*number*, required) - The number of items you'll be displaying per page. This is used to calculate how many page links are available.

**on-page-change** (*function*, required) - The function to call when a user changes the page (clicks a number, or previous/next). Signature: `(pageNumber) => { ... }`.

**size** (*string*, optional) - The display size of the component, can either be `'sm'`, `'lg'`, or `''` (the default size).

**total-items** (*number*, required) - The total number of items in your dataset. This is used to calculate how many page links are available.

**visible-page-buffer** (*number*, optional) - This property is taken as more of a suggestion and is used to determine how many clickable page numbers surround the selected page on each side. This ultimately allows for greater usability by creating a consistent number of page links no matter which page the user is on.  The minimum number of pages that will be displayed is 5 -- the first and last page will always be displayed (+2), slots will be reserved to illustrate that there is a gap in paging (+2), and the selected page will always be displayed (+1).
