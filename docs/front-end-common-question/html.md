# HTML

**DOCTYPE**: **DOCument TYPE**. 

**DTD** - for **Document Type Definition**. A DTD defines how documents of a certain type should be structured \(i.e. a `button` can contain a `span` but not a `div`\)

#### How do you serve a page with content in multiple languages?

When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the `Accept-Language` header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the `lang` attribute in the `<html>` tag, such as `<html lang="en">...</html>`.

In the back end, the HTML markup will contain `i18n` placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.

**What to think about in multilingual sites?**

* Use `lang` attribute in your HTML.
* Allow a user to change his country/language easily
* Placing text in an image with non-system fonts.
* Character counts come into play with things like headlines, labels, and buttons, because sentences could be in different lengths
* Colors are perceived differently across languages and cultures
* Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.
* Do not concatenate translated strings like `"The date today is " + {$date}.`. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively:  `will travel on {$date}` and `{$date} 我会出发`
* Language reading direction

#### What are `data-` attributes good for?

It was popular before to store custom private data on the page. But  using `data-` attributes is generally not encouraged because it can be inspected in the browser. It's better be stored in the JS itself and updated with the DOM. But for some TDD framework such as Selenium, it can be used to hook the elements.

#### What are the building blocks of HTML5?

 HTML5 is the latest evolution of the standard that defines [HTML](https://developer.mozilla.org/en-US/docs/HTML). It is a new version of the language HTML, with new elements, attributes, and behaviors.

*  Semantics
  * A look at the new outlining and sectioning elements in HTML5: [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section), [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article), [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside).
  *  The [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) elements embed and allow the manipulation of new multimedia content.
  * A look at the [constraint validation API](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation), several new attributes, new values for the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attribute [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) and the new [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) element.
* Connectivity
  * Allows creating a permanent connection between the page and the server
* 2D/3D graphics and effects
  *  new [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element 

#### Difference between a `cookie`, `sessionStorage` and `localStorage?`

All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only able to store values as strings.

|  | Cookie | localStorage | sessionStorage |
| :--- | :--- | :--- | :--- |
| Initiator |  Client or server. Server can use `Set-Cookie` header | Client | Client |
| Expiry | Manually set | Forever | On tab close |
| Persistent across browser sessions | Depends on whether expiration is set | Yes | No |
| Sent to server with every HTTP request |  Cookies are automatically being sent via `Cookie` header | No | No |
| Capacity | 4kb | 5MB | 5MB |
| Accessibility | Any window | Any window | Same tab |

 _If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any `cookie`, `localStorage`, or `sessionStorage` stored._ 

#### Difference between `<script>`, `<script async>` and `<script defer>`

*  `<script>` - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.
*  `<script async>` - The script will be fetched in parallel to HTML parsing and executed as soon as it is available \(potentially before HTML parsing completes\). Use `async` when the script is independent of any other scripts on the page, for example, analytics.
*  `<script defer>` - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing.
*  The `async` and `defer` attributes are ignored for scripts that have no `src` attribute.

#### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

 **Placing `<link>`s in the `<head>`**

* When a page first loads, HTML and CSS are being **parsed** simultaneously; HTML creates the DOM \(Document Object Model\) and CSS creates the CSSOM \(CSS Object Model\). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing
* This progressive rendering is a category optimization sites are measured in their performance scores. Putting stylesheets near the bottom of the document is what prohibits progressive rendering in many browsers.

 **Placing `<script>`s just before `</body>`**

 `<script>`s block HTML parsing while they are being **downloaded and executed**. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first. Also, placing `<script>`s at the bottom means that the browser cannot start downloading the scripts until the entire document is parsed. This ensures your code that needs to manipulate DOM elements will not throw and error and halt the entire script. If you need to put `<script>` in the `<head>`, use the `defer` attribute, which will achieve the same effect of downloading and running the script only after the HTML is parsed.

#### What is progressive rendering?

Progressive rendering is  to improve the performance of a web pages \(in particular, improve perceived load time\) to render content for display as quickly as possible.

Examples of such techniques:

* Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
* Prioritizing visible content \(or above-the-fold rendering\) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the `DOMContentLoaded`/`load` event to load in other resources and content.
* Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found [here](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/).

#### Why you would use a `srcset` attribute in an image tag?

To serve different images to users depending on their device display width. Retina display v.s. Low-end devices.  For example: `<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt="">`

#### Have you used different HTML templating languages before?

Yes, Pug, AEM HTL, and Handlebars.

