# WebMarking.js

## What's this
ビデオ会議などでWebページを提示して説明している際に，「ここのボタンを・・・」とか「ここの部分が・・・」と説明したいことがあります．そのようなときに使用するBookmarkletです．
このBookmarkletを使用すると，Webページ上にマウスなどで手書きすること（マーキング）ができます．

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

まず任意のWebページをWebブラウザで表示してください．その後，Google Chromeのブックマークに登録しているWebMarking.jsを選択してください．以下のキーにより，マーキングできるようになります．

キー | 機能
-|-
p | マーキングモードおよび表示On/Off
o | 一時的にマーキングモードOff/On
0 | マーキング内容を全消去

oキーは，マーキングを表示したまま元からあるボタンをクリックしたい場合などに使用します．

## Cautions

1. セキュリティポリシーによって，外部JavaScriptをロードできないように設定されているページも存在します．そのようなページでは本Bookmarkletは利用できません．
2. Webページのフォームに入力しようとすると，本Bookmarkletも反応してしまいます．

## Future

とりあえず利用できる段階なので，今後は使用しながら困った点を改良していこうと思います．
早急にというわけではないですが，改良候補ポイントとして以下を挙げておきます．

1. 画面上にインジケータを付ける
2. 外部JavaScriptを読み込まずに，全ての機能をBookmarkletに入れる
