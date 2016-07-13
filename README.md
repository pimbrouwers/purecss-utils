# YUI Pure CSS Extensions
Extension Library for YUI Pure CSS (www.purecss.io) designed to work purposefully with the default grid.

## Responsive Utilities
Allows for hiding/showing content based on media breakpoints

```css
@media screen and (max-width:35.5em) {
    .pure-hidden-xs {
        display: none !important
    }
}

@media screen and (min-width:35.5em) and (max-width:47.999em) {
    .pure-hidden-sm {
        display: none !important
    }
}

@media screen and (min-width:48em) and (max-width:63.999em) {
    .pure-hidden-md {
        display: none !important
    }
}

@media screen and (min-width:64em) and (max-width:79.999em) {
    .pure-hidden-lg {
        display: none !important
    }
}

@media screen and (min-width:80em) {
    .pure-hidden-xl {
        display: none !important
    }
}
```

## Push & Pull
Boostrap-esque pushing and pulling, to offset columns.

```css
.pure-push-{breakpoint}-{1-24}-{1-24} { }
```

```html
<div class="pure-u-sm-1-4 pure-push-sm-3-4"></div>
<div class="pure-u-sm-3-4 pure-pull-sm-1-4"></div>
```

## Flexbox Grid
Flexbox powered grid. NOTE: This grid is missing certain fractional sets still. 

```html
<div class="pure-g-flex">
	<div class="pure-u-flex-1-3 pure-u-flex-sm-2-3"></div>
	<div class="pure-u-flex-2-3 pure-u-flex-sm-1-3"></div>
</div>
```