import { pkceChallenge } from 'react-native-pkce-challenge';
import Parser from './parser.js'

const CLIENT_ID = '3220fc5b4bfcb7031ad6f25f9b31e493';
const URL = 'https://api.myanimelist.net/v2/manga';
const FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,rank,genres,status,mean,popularity,authors';

function fetch_mal (url) {
  const obj = {
    method: 'GET',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_ID
    }
  };

  return fetch(url, obj).then( response => {
    return response.json();
  });
}

function format_array (array) {
  let obj = [];
  for (const element of array) {
    obj.push(element.node);
  }
  return obj;
}

async function get_manga_by_ranking (ranking = 'all', limit = 28, offset = 0) {
  const url = `${URL}/ranking?ranking_type=${ranking}&limit=${limit}&offset=${offset}&fields=${FIELDS}`;
  const response = await fetch_mal(url);
  return format_array(response.data);
}

async function search (str, limit = 50, offset = 0) {
  const url = `${URL}?q=${str}&limit=${limit}&offset=${offset}&fields=${FIELDS}`;
  const response = await fetch_mal(url);
  return format_array(response.data);
}

async function get_manga_details (id) {
  const url = `${URL}/${id}?fields=${FIELDS}`;
  const data = await fetch_mal(url);
  return data;
}

module.exports = {
  getMangaByRanking: get_manga_by_ranking,
  search: search,
  getMangaDetails: get_manga_details,
  clientId: CLIENT_ID
}
