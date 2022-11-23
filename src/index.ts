/**
 * Undecorate jsdoc text by removing stars.
 * @param txt jsdoc text
 * @returns undecorated jsdoc text
 */
function undecorate(txt: string): string {
  txt = txt.replace(/^\s*\/\*\*|\*\/\s*$/g, '');
  txt = txt.replace(/^[ \t]*\*[ \t]*|[ \t*]$/gm, '');
  return txt.trim();
}


/**
 * Decorate an undecorated jsdoc text by adding stars.
 * @param txt undecorated jsdoc text
 * @returns jsdoc text
 */
function decorate(txt: string): string {
  var txt = txt.trim();
  if (!txt.includes('\n')) return `/** ${txt} */`;
  var txt = txt.split('\n').map(l => ' * ' + l.trim()).join('\n');
  return `/**\n${txt}\n */`;
}


/** Regex for description: [full] */
const RDESCRIPTION = /^([\s\S]*?)(?=@|$)/g;
/** Regex for param tag: [name, type, description]. */
const RPARAM   = /^@param(?:[ \t]+(\w+))(?:[ \t]+\{(.*?)\})?(?:[ \t]+(.*?))?$/gm;
/** Regex for returns tag: [type, description]. */
const RRETURNS = /^@returns(?:[ \t]+\{(.*?)\})?(?:[ \t]+(.*?))?$/gm;
/** Regex for example tag: [full]. */
const REXAMPLE = /@example\n(```[\s\S]*?\n```\n|(?:(?: {4}|\t).*?\n)+)?/g;


/** Param tag. */
export interface ParamTag {
  /** Full param. */
  full: string,
  /** Param name. */
  name: string,
  /** Param type. */
  type: string,
  /** Param description. */
  description: string,
}

/** Returns tag. */
export interface ReturnsTag {
  /** Full returns. */
  full: string,
  /** Returns type. */
  type: string,
  /** Returns description. */
  description: string,
}

/** JSDoc details. */
export interface Jsdoc {
  /** Full JSDoc. */
  full: string,
  /** JSDoc description. */
  description: string,
  /** JSDoc params. */
  params: ParamTag[],
  /** JSDoc returns. */
  returns: ReturnsTag,
  /** JSDoc examples. */
  examples: string[],
}

/**
 * Parse jsdoc from jsdoc text.
 * @param txt jsdoc text
 * @returns parsed jsdoc
 */
export function parse(txt: string): Jsdoc {
  var full = txt;
  var txt  = undecorate(txt), m = null;
  var description = '', params = [];
  var returns = null, examples = [];
  while ((m = RDESCRIPTION.exec(txt)) != null)
    description = m[1] || '';
  while ((m = RPARAM.exec(txt)) != null)
    params.push({full: m[0], name: m[1], type: m[2] || '', description: m[3] || ''});
  while ((m = RRETURNS.exec(txt)) != null)
    returns = {full: m[0], type: m[1] || '', description: m[2] || ''};
  while ((m = REXAMPLE.exec(txt)) != null)
    if (m[1]) examples.push(m[1]);
  return {full, description, params, returns, examples};
}


/**
 * Stringify jsdoc text from parsed jsdoc.
 * @param x parsed jsdoc
 * @returns jsdoc text
 */
export function stringify(x: Jsdoc): string {
  var txt = x.description.trim() + '\n';
  for (var p of x.params)
    txt += ('@param' + ` ${p.name}` + (p.type? ` {${p.type}}` : '') + ` ${p.description}`).trim() + '\n';
  for (var r of x.returns? [x.returns] : [])
    txt += ('@returns' + (r.type? ` {${r.type}}` : '') + ` ${r.description}`).trim() + '\n';
  for (var e of x.examples)
    txt += `@example\n${e.trim()}\n`;
  return decorate(txt);
}
