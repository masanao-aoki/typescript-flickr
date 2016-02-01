//型定義
export interface FlickrApiSettings {
    $body: JQuery
}

export default class FlickrApi {

    //初期処理
    constructor(private settings: FlickrApiSettings) {
        //console.log(settings.$body);
        this.ApiRequest();
    }


    public ApiRequest = function () {
        //console.log('リクエスト');
        return 'リクエスト';
    }

}
