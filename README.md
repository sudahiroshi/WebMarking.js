# WebMarking.js

## What's this
ビデオ会議などでWebページを提示して説明している際に，「ここのボタンを・・・」とか「ここの部分が・・・」と説明したいことがあります．そのようなときに使用するBookmarkletです．
このBookmarkletを使用すると，Webページ上にマウスなどで手書きすることができます．

## Environment

現在，macOS版のGoogle Chromeで動作を確認しています．
他のOSとWebブラウザでも使用できると思います．

## How to bookmark

Bookmarkletですので，Webブラウザのブックマークに登録してお使いください．

登録方法がわからない人は，こちらのリンク<a href="javascript:(()=>{
    let script=document.createElement('script');
    script.src = 'https://sudahiroshi.github.io/WebMarking.js/mark.js';
    document.querySelector('head').appendChild(script);
})();">WebMarking.js</a>をGoogle Chromeのブックマークバーにドラッグしてください．

## How to use

まず任意のWebページをWebブラウザで表示してください．その後，Google Chromeのブックマークに登録しているWebMarking.jsを選択してください．初回のみダウンロードして良いか尋ねられるので「許可」を選択してください．以下のキーにより，マウスなどで手書きすることができるようになります．

※セキュリティポリシーによって，本Bookmarkletが動作しないように設定されているページも存在します．

キー | 機能
-|-
p | 手書きモードおよび表示On/Off
o | 一時的に手書きモードOff/On
0 | 書いたものを全消去

