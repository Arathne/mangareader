import MyAnimeList from './api/myanimelist.js';

async function get_all (all, offset) {
  return MyAnimeList.getMangaByRanking('all', limit, offset);
}

async function get_top_manga (limit, offset) {
  return MyAnimeList.getMangaByRanking('manga', limit, offset);
}

async function get_top_novels (limit, offset) {
  return MyAnimeList.getMangaByRanking('novels', limit, offset);
}

async function get_one_shots (limit, offset) {
  return MyAnimeList.getMangaByRanking('oneshots', limit, offset);
}

async function get_doujin (limit, offset) {
  return MyAnimeList.getMangaByRanking('doujin', limit, offset);
}

async function get_manhwa (limit, offset) {
  return MyAnimeList.getMangaByRanking('manhwa', limit, offset);
}

async function get_manhua (limit, offset) {
  return MyAnimeList.getMangaByRanking('manhua', limit, offset);
}

async function get_popular (limit, offset) {
  return MyAnimeList.getMangaByRanking('bypopularity', limit, offset);
}

async function get_favorite (limit, offset) {
  return MyAnimeList.getMangaByRanking('favorite', limit, offset);
}

async function search (str, limit, offset) {
  return MyAnimeList.search(str, limit, offset);
}

async function get_manga_details (id) {
  return MyAnimeList.getMangaDetails(id);
}

module.exports = {
  getAll: get_all,
  getTopManga: get_top_manga,
  getTopNovels: get_top_novels,
  getOneShots: get_one_shots,
  getDoujin: get_doujin,
  getManhwa: get_manhwa,
  getManhua: get_manhua,
  getPopular: get_popular,
  getFavorite: get_favorite,
  search: search,
  getMangaDetails: get_manga_details,
}
