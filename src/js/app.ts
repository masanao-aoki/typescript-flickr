/// <reference path="../jquery.d.ts" />
import * as $ from 'jquery';
import FlickrApi from './FlickrApi.ts';

//定数
const API_URL = 'https://api.flickr.com/services/rest/';
const API_KEY = 'e2d99c3ff7885e30c624973bb84fdb09';
const API_USER_KEY = '126218952@N06';
const API_PULL_ITEM_MAX = 12;
const API_INITIAL_PAGE = 0;
const DEDAULT_URL = window.location.href.replace(window.location.search,"");

//型定義
interface FlickrApiSettings {
    $body: JQuery
}

class PullPhoto {

    //初期処理
    constructor(private settings: FlickrApiSettings) {
        var flickrApi = new FlickrApi(settings);
        console.log(flickrApi.ApiRequest());
    }


}

var pullPhoto = new PullPhoto({
    $body: $('#FlickrPhotos')
});
