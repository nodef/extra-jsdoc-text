Utilities for processing JSDoc text.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-jsdoc-text),
🌐 [Web](https://www.npmjs.com/package/extra-jsdoc-text.web),
📜 [Files](https://unpkg.com/extra-jsdoc-text/),
📰 [Docs](https://nodef.github.io/extra-jsdoc-text/).

This package is available in both *Node.js* and *Web* formats. The web format
is exposed as `extra_jsdoc_text` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-jsdoc-text.web/index.js

<br>

```javascript
const fs    = require('fs');
const jsdoc = require('extra-jsdoc-text');

function main() {
  var txt = fs.readFileSync('README.md', 'utf8').replace(/\r?\n/, '\n');

  jsdoc.links(txt);
  // [
  //   {
  //     full: '[Node.js](https://www.npmjs.com/package/extra-jsdoc-text)',
  //     name: 'Node.js',
  //     reference: '',
  //     url: 'https://www.npmjs.com/package/extra-jsdoc-text'
  //   },
  //   {
  //     full: '[Web](https://www.npmjs.com/package/extra-jsdoc-text.web)',
  //     name: 'Web',
  //     reference: '',
  //     url: 'https://www.npmjs.com/package/extra-jsdoc-text.web'
  //   },
  //   ...
  // ]

  jsdoc.linkReferences(txt);
  // [
  //   {
  //     full: '[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-jsdoc-text.web/index.js',
  //     name: 'jsDelivr CDN',
  //     url: 'https://cdn.jsdelivr.net/npm/extra-jsdoc-text.web/index.js',
  //     title: ''
  //   },
  //   {
  //     full: '[forEachCodeBlock]: https://nodef.github.io/extra-jsdoc-text/modules.html#forEachCodeBlock',
  //     name: 'forEachCodeBlock',
  //     url: 'https://nodef.github.io/extra-jsdoc-text/modules.html#forEachCodeBlock',
  //     title: ''
  //   },
  //   ...
  // ]
}
main();
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [forEachCodeBlock] | Match code blocks in markdown text. |

<br>
<br>

[![](https://img.youtube.com/vi/bJirgZjBqNg/maxresdefault.jpg)](https://www.youtube.com/watch?v=bJirgZjBqNg)

[forEachCodeBlock]: https://nodef.github.io/extra-jsdoc-text/modules.html#forEachCodeBlock
