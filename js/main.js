"use strict";

const input = document.querySelector('.input');
const img = document.querySelector('img');
const button = document.querySelector('.submit');
const p = document.querySelector('p');

$(document).ready(function () {

  button.addEventListener('click', (e) => {

    let url = input.value;
    let tmp = '';

    if (url.includes('&list=')) { // full url
      url = url.substring(0, url.indexOf('&list='));
      tmp = url.split('watch?v=');

    } else if (url.includes('?list=')) { // shortened url
      url = url.substring(0, url.indexOf('?list='));
      tmp = url.split('youtu.be/');
    }

    let videoId = tmp[tmp.length - 1];

    let final = 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg'

    img.setAttribute('src', final);
  });
});
