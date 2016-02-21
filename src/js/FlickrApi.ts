/// <reference path="../jquery.d.ts" />
import * as $ from 'jquery';
import * as Constant from './constant';

//型定義
interface FlickrApiSettings {
    $body: JQuery,
    method: string[],
    api_key: string,
    per_page: number,
    page: number,
    user_id: string
}

export default class FlickrApi {
    
    //初期処理
    constructor(private settings: FlickrApiSettings) {
    }

    public ApiRequest = function (complate) {
        var url = Constant.API_URL + '?';
        var urlAry = [url];

        for (var key in this.settings) {
            if(key != '$body') {
                if(key === 'method'){
                    urlAry.push(key + '=flickr.' + this.settings[key][0] + '.' + this.settings[key][1]);
                }
                else {
                    urlAry.push(key + '=' + this.settings[key]);
                }
            }
        }
        url = urlAry.join('&');
        url += '&format=json&nojsoncallback=1';

        $.ajax({
           type: 'GET',
           url: url,
           dataType: 'json',
           success : function(e){
               complate(e);
           }
       });


    }

}
