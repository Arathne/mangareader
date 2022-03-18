import Parser from './parser.js';

async function recently_updated (page = 1) {
  const url = `https://mangakakalot.is/latest?sort=default&page=${page}`;
  return query_list(url);
}

async function new_releases (page = 1) {
  const url = `https://mangakakalot.is/new?sort=default&page=${page}`;
  return query_list(url);
}

async function completed (page = 1) {
  const url = `https://mangakakalot.is/completed?sort=default&page=${page}`;
  return query_list(url);
}

async function most_popular (page = 1) {
  const url = `https://mangakakalot.is/hot?sort=default&page=${page}`;
  return query_list(url);
}

async function query_list (url) {
  const html = await Parser.fetchHtml(url);
  const dom = Parser.htmlToDom(html);

  const manga_list = Parser.selectAll(dom, '.item');
  let manga_data = [];

  for (let i = 0; i < manga_list.length; i++) {
    const manga = manga_list[i];
    const data = {
      title: Parser.select(manga, '.manga-name a').attribs.title,
      image: Parser.select(manga, '.manga-poster-img').attribs.src,
      description: Parser.getInnerText( Parser.select(manga, '.description') ),
      latest_chapter: Parser.getInnerText( Parser.select(manga, '.chapter-name') ),
      views: Parser.getInnerText( Parser.select(manga, '.others span') )
    };
    manga_data.push(data);
  }

  return manga_data;
}

module.exports = {
  recentlyUpdated: recently_updated,
  newReleases: new_releases,
  completed: completed,
  mostPopular: most_popular,
}
