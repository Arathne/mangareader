const htmlparser2 = require('htmlparser2');
const render = require('dom-serializer').default;
const CSSselect = require("css-select");
const domUtils = require('domutils');

function fetch_html (url) {
  return fetch(url).then( (resp) => {return resp.text()} ).then( (html) => {
    return html;
  })
}

function print (node) {
  console.log(render(node))
}

function html_to_dom (html) {
  return htmlparser2.parseDocument(html);
}

function select (node, css) {
  return CSSselect.selectOne(css, node);
}

function select_all (node, css) {
  return CSSselect.selectAll(css, node);
}

function get_inner_text (node) {
  return domUtils.textContent(node).trim();
}

module.exports = {
  fetchHtml: fetch_html,
  htmlToDom: html_to_dom,
  select: select,
  selectAll: select_all,
  getInnerText: get_inner_text,
  print: print
}
