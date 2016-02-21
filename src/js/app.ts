/// <reference path="../jquery.d.ts" />
import * as $ from 'jquery';
import * as Constant from './constant';
import FlickrApi from './FlickrApi';

//型定義
interface FlickrApiSettings {
    $body: JQuery,
    method: string[],
    api_key: string,
    per_page: number,
    page: number,
    user_id: string
}

class PullPhoto {

    //初期処理
    constructor(private settings: FlickrApiSettings) {
        var flickrApi = new FlickrApi(settings);
        flickrApi.ApiRequest(this.pullPhoto);
    }

    public pullPhoto = function (json){
        var imgPath = [];
        var titles = [];
        for ( i=0; i < json.photos.photo.length; i ++ ) {
            var farm = json.photos.photo[i].farm;
            var server = json.photos.photo[i].server;
            var secret = json.photos.photo[i].secret;
            var titleName = json.photos.photo[i].title;
            var id = json.photos.photo[i].id;
            imgPath[i] = 'http://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_s.jpg';
            titles[i] = titleName;
        }


        for(var i = 0;i < imgPath.length;i++) {
            $(settings.$body).append('<li><a title="'+ titles[i] +'" href="' + imgPath[i].replace("_s","") + '"><img src="' + imgPath[i] + '"></a></li>');
        }

    }

}

var pullPhoto = new PullPhoto({
    $body: $('#FlickrPhotos'),
    method: ['photos','search'],
    api_key: Constant.API_KEY,
    per_page: Constant.API_PULL_ITEM_MAX,
    page: Constant.API_INITIAL_PAGE,
    user_id: Constant.API_USER_KEY,
});
