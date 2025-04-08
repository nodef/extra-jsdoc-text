Utilities for processing JSDoc text.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-jsdoc-text),
🌐 [Web](https://www.npmjs.com/package/extra-jsdoc-text.web),
📜 [Files](https://unpkg.com/extra-jsdoc-text/),
📰 [Docs](https://nodef.github.io/extra-jsdoc-text/).

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_jsdoc_text` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-jsdoc-text.web/index.js

<br>

```javascript
const xjsdoc = require('extra-jsdoc-text');

function main() {
  var txt = `
/**
 * Parse jsdoc from jsdoc text.
 * @param txt jsdoc text
 * @returns parsed jsdoc
 */
  `, parse = null;

  parse = xjsdoc.parse(txt);
  // {
  //   full: '\n' +
  //     '/**\n' +
  //     ' * Parse jsdoc from jsdoc text.\n' +
  //     ' * @param txt jsdoc text\n' +
  //     ' * @returns parsed jsdoc\n' +
  //     ' */\n' +
  //     '  ',
  //   description: 'Parse jsdoc from jsdoc text.\n',
  //   params: [
  //     {
  //       full: '@param txt jsdoc text',
  //       name: 'txt',
  //       type: '',
  //       description: 'jsdoc text'
  //     }
  //   ],
  //   returns: {
  //     full: '@returns parsed jsdoc',
  //     type: '',
  //     description: 'parsed jsdoc'
  //   },
  //   examples: []
  // }

  parse.description += ' (only if simple)';
  xjsdoc.stringify(parse);
  // '/**\n' +
  //   ' * Parse jsdoc from jsdoc text.\n' +
  //   ' * (only if simple)\n' +
  //   ' * @param txt jsdoc text\n' +
  //   ' * @returns parsed jsdoc\n' +
  //   ' *  */\n'
}
main();
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [parse] | Parse jsdoc from jsdoc text. |
| [stringify] | Stringify jsdoc text from parsed jsdoc. |

<br>
<br>


[![](https://img.youtube.com/vi/dEGrVjb2dB4/maxresdefault.jpg)](https://www.youtube.com/watch?v=dEGrVjb2dB4)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/477219250.svg)](https://zenodo.org/badge/latestdoi/477219250)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-jsdoc-text)

[parse]: https://nodef.github.io/extra-jsdoc-text/modules.html#parse
[stringify]: https://nodef.github.io/extra-jsdoc-text/modules.html#stringify
