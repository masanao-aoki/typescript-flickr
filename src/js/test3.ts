/// <reference path="jquery.d.ts" />
import * as $ from 'jquery';

//型定義
interface TabsSettings {
    $tab: JQuery,
    $body: JQuery,
    index: number
}

// クラス内の関数は行動（アクション）で分ける

class Tabs {

    //初期処理
    constructor(private settings: TabsSettings) {
        this.startClickEvent();
        this.tabMoving(this.settings.index);
    }

    //クリックイベントスタート
    public startClickEvent = function () {
        var _this = this;
        this.settings.$tab.find('> *').on('click', function (){
            _this.tabMoving($(this).index());
        });
    }

    //タブの移動アクション
    public tabMoving = function(num) {
        this.settings.$tab.add(this.settings.$body).find('> *').removeClass('active');
        $(this.settings.$tab).find('> *').eq(num).addClass('active');
        $(this.settings.$body).find('> *').eq(num).addClass('active');
    }


}



var tabs = new Tabs({
$tab: $('.tabNav'),
$body: $('.tabContents'),
index: 0
});
