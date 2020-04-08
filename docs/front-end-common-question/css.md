# CSS

#### What is CSS selector specificity and how does it work?

The resulting specificity is not a score, but a matrix of values that can be compared column by column. When comparing selectors to determine which has the highest specificity, look from left to right, and compare the highest value in each column. So a value in column `b` will override values in columns `c` and `d`, no matter what they might be. As such, specificity of `0,1,0,0` would be greater than one of `0,0,10,10`.

I would write CSS rules with low specificity so that they can be easily overridden if necessary.

#### Difference between "resetting" and "normalizing" CSS?

* **Resetting** - Resetting is meant to **strip** all default browser styling on elements. For e.g. `margin`s, `padding`s, `font-size`s of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
* **Normalizing** - Normalizing **preserves** useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.

I would choose resetting when I have a very customized or unconventional site design.

#### Describe `float`s and how they work.

Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements.  The CSS `clear` property can be used to be positioned below `left`/`right`/`both` floated elements. See ref: [https://css-tricks.com/all-about-floats/](https://css-tricks.com/all-about-floats/)

#### Describe `z-index` and how stacking context is formed.

 The `z-index` property in CSS controls the vertical stacking order of elements that overlap. `z-index` only affects elements that have a `position` value which is not `static`.  Without any `z-index` value, elements stack in the order that they appear in the DOM.  Within a local stacking context, the `z-index` values of its children are set relative to that element rather than to the document root. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher `z-index` than element B.

#### Describe Block Formatting Context \(BFC\) and how it works.

A block formatting context contains everything inside of the element creating it.  Block formatting contexts are important for the positioning \(see [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)\) and clearing \(see [`clear`](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)\) of floats. The rules for positioning and clearing of floats apply only to things within the same block formatting context. Floats, absolutely positioned elements, `inline-blocks`, `table-cells`, `table-caption`s, and elements with `overflow`

#### What are the various clearing techniques and which is appropriate for what context?

* Empty `div` method - `<div style="clear:both;"></div>`.
* Clearfix method -  In large projects, I would write a utility `.clearfix` class and use them in places where I need it.  Alternatively, give `overflow: auto` or `overflow: hidden` property to the parent element which will establish a new block formatting context inside the children and it will expand to contain its children.

```css
.clearfix:after {
  content: " ";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

#### Explain CSS sprites:

CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for icons. Reduce the number of HTTP requests for multiple images.

1. Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
2. Each image would have a corresponding CSS class with `background-image`, `background-position` and `background-size` properties defined.
3. To use that image, add the corresponding class to your element.

#### How would you approach fixing browser-specific styling issues?

* After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
* Use libraries like Bootstrap that already handles these styling issues for you.
* Use `autoprefixer` to automatically add vendor prefixes to your code.
* Use Reset CSS or Normalize.css.

#### How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?

* Graceful degradation - The practice of building an application for modern browsers while ensuring it remains functional in older browsers.
* Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
* Use [caniuse.com](https://caniuse.com/) to check for feature support.
* Autoprefixer for automatic vendor prefix insertion.
* Feature detection using [Modernizr](https://modernizr.com/).
* Use CSS Feature queries [@support](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

#### What are the different ways to visually hide content \(and make it available only for screen readers\)?

These techniques are related to accessibility \(a11y\).

* `width: 0; height: 0`. Make the element not take up any space on the screen at all, resulting in not showing it.
* `position: absolute; left: -99999px`. Position it outside of the screen.
* `text-indent: -9999px`. This only works on text within the `block` elements.
* Metadata. For example by using Schema.org, RDF, and JSON-LD.
* WAI-ARIA. A W3C technical specification that specifies how to increase the accessibility of web pages.

#### Are you familiar with styling SVG?

Yes, there are several ways to color shapes \(including specifying attributes on the object\) using inline CSS, an embedded CSS section, or an external CSS file. Most SVG you'll find around the web use inline CSS, but there are advantages and disadvantages associated with each type.

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. `fill` sets the color inside the object and `stroke` sets the color of the line drawn around the object.

#### Can you give an example of an @media property other than screen?

* `all` - for all media type devices
* `print` - for printers
* `speech` - for screenreaders that "reads" the page out loud
* `screen` - for computer screens, tablets, smart-phones etc.

#### What are some of the "gotchas" for writing efficient CSS?



* Firstly, understand that browsers match selectors from rightmost \(key selector\) to left. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.
* Everything has a single class

#### What are the advantages/disadvantages of using CSS preprocessors? Like Sass

**Advantages:**

* CSS is made more maintainable.
* Easy to write nested selectors.
* Variables for consistent theming. Can share theme files across different projects.
* Mixins to generate repeated CSS.
* Sass features like loops, lists, and maps can make configuration easier and less verbose.
* Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

**Disadvantages:**

* Requires tools for preprocessing. Re-compilation time can be slow.
* Not writing currently and potentially usable CSS. For example, by using something like [postcss-loader](https://github.com/postcss/postcss-loader) with [webpack](https://webpack.js.org/), you can write potentially future-compatible CSS, allowing you to use things like CSS variables instead of Sass variables. Thus, you're learning new skills that could pay off if/when they become standardized.

#### How would you implement a web design comp that uses non-standard fonts?

Use `@font-face` and define `font-family` for different `font-weight`s.

#### Explain how a browser determines what elements match a CSS selector.

Browsers match selectors from rightmost \(key selector\) to left. For example with this selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches and can stop its matching.

#### Describe pseudo-elements and discuss what they are used for.

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element\(s\).

#### Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

The dimensions of a block element are calculated by `width`, `height`, `padding`, `border`s, and `margin`s.

#### What is the CSS `display` property and can you give a few examples of its use?



| `display` | Description |
| :--- | :--- |
| `none` | Does not display an element \(the elementv no longer affects the layout of the document\). All child element are also no longer displayed. The document is rendered as if the element did not exist in the document tree |
| `block` | The element consumes the whole line in the block direction \(which is usually horizontal\) |
| `inline` | Elements can be laid out beside each other |
| `inline-block` | Similar to `inline`, but allows some `block` properties like setting `width` and `height` |

#### What's the difference between a `relative`, `fixed`, `absolute` and `static`ally positioned element?

* `static` - The default position; the element will flow into the page as it normally would. The `top`, `right`, `bottom`, `left` and `z-index` properties do not apply.
* `relative` - The element's position is adjusted relative to itself, without changing layout \(and thus leaving a gap for the element where it would have been had it not been positioned\).
* `absolute` - The element is **removed from the flow of the page** and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.
* `fixed` - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.
* `sticky` - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as `relative` positioned until it crosses a specified threshold, at which point it is treated as `fixed` positioned.

#### Have you played around with the new CSS Flexbox or Grid specs?

Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.

* Flexbox solves many common problems in CSS, such as vertical centering of elements within a container
* Grid is by far the most intuitive approach for creating grid-based layouts \(it better be!\) but browser support is not wide at the moment

#### Coding a website to be responsive v.s. Using a mobile-first strategy

Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.

A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later.

A mobile-first strategy has 2 main advantages:

* It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
* It forces to write cleaner code in respect to responsive CSS rules.

#### How is responsive design different from adaptive design?

Responsive design works on the principle of flexibility - a single fluid website that can look good on any device.

Adaptive design is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features and then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics.

#### Have you ever worked with retina graphics? If so, when and what techniques did you use?

In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using always the highest resolution images will have an impact on performance as more bytes will need to be sent over the wire.

To overcome this problem, we can use responsive images, as specified in HTML5. It requires making available different resolution files of the same image to the browser and let it decide which image is best, using the html attribute `srcset` and optionally `sizes.`

For icons, I would also opt to use SVGs and icon fonts where possible

#### Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?

`translate()` is a value of CSS `transform`. Changing `transform` or `opacity` does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence `translate()` is more efficient and will result in shorter paint times for smoother animations.

When using `translate()`, the element still occupies its original space \(sort of like `position: relative`\), unlike in changing the absolute positioning.

