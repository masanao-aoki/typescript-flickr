/// <reference path="jquery.d.ts" />
import * as $ from 'jquery';

//型定義
interface FlickrApiSettings {
    apiUri: string,
    apiKey: string,
    apiUsrKey: string,
    apipullItemMax: number,
    apiInitialPage: number,
    defaultUri: string,
    $photoListBody: JQuery,
    index: number
}

// クラス内の関数は行動（アクション）で分ける

class FlickrApi {

    //初期処理
    constructor(private settings: FlickrApiSettings) {
        var aaa = 'aaaa';
        console.log(this.settings.apipullItemMax);
        this.pullPhoto();
        console.log(aaa);
    }

    //写真を引き出す
    private pullPhoto = function () {
        console.log("ok");
        this.ApiRequest();
    }

    private ApiRequest = function () {
        console.log('リクエスト');
    }

}



var flickrApiRequest = new FlickrApi({
apiUri: 'https://api.flickr.com/services/rest/',
apiKey: 'e2d99c3ff7885e30c624973bb84fdb09',
apiUsrKey: '126218952@N06',
apipullItemMax: 12,
apiInitialPage: 0,
defaultUri: window.location.href.replace(window.location.search,""),
$photoListBody: $('#FlickrPhotos'),
index: 0
});
