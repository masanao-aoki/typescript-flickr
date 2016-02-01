/// <reference path="jquery.d.ts" />
import * as $ from 'jquery';

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

// クラス内の関数は行動（アクション）で分ける

class FlickrApi {

    //初期処理
    constructor(private settings: FlickrApiSettings) {
    }


    public ApiRequest = function () {
        console.log('リクエスト');
    }

}

class PullPhoto extends FlickrApi {
    
    //初期処理
    constructor() {
    }

}

var pullPhoto = new PullPhoto({
    $body: $('#FlickrPhotos')
});

var flickrApi = new FlickrApi({
    $body: $('#FlickrPhotos')
});
