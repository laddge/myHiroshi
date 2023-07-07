# myHiroshi

[俳優の阿部寛さんのホームページ](http://abehiroshi.la.coocan.jp/)が異常なほど軽いというのは以前から度々話題になりますが、設計が古いため、今の技術を使えば、もっと軽量化できると考え、パロディサイトを作ってみました。

許可をとったわけではないので、もし問題になるようであれば削除します。その際は、メールアドレス(contact[@]laddge.net)までご連絡ください。

## 成果物

完成品は[こちら](https://hrs.laddge.net/)

## 改良点

- [AstroJS](https://astro.build)を使い、静的サイトとしてビルドするようにしました。
- 元のサイトでは<frame>要素を使ってレイアウトされていましたが、現在では非推奨になっているので、代わりに<iframe>要素を使用しています。
- 元のサイトの阿部寛さんの顔写真はjpeg形式ですが、より圧縮率の高いwebp形式の画像を使うようにしました。
- 背景に使われている文字は、「Lucida Calligraphy」というフォントで書いた文字を画像にしたものですが、このような使い方の場合、svg形式にしたほうが画質・ファイルサイズ共に優れているため、同じフォントでsvg画像を作って使用しています。
- 元のサイトでは、<table>要素を多用してレイアウトを作っている部分がありますが、本来の表の使い方ではない部分については、CSSのflexboxを使って再現しました。
- 元のサイトではCSSを使っていませんでしたが、CSSでスタイリングするのが現代的なので、[tailwindcss](https://tailwindcss.com/)を導入しました。
- CSSのファイルサイズを減らすため、PurgeCSSやcssnanoを使用しています。
- それ以外にも、圧縮系のプラグインを色々使ってファイルサイズを極限まで小さくしました。
- ホスティングにはCloudflare Pagesを使うことで、高速化しています。

以上の工夫で、[PageSpeed Insights](https://pagespeed.web.dev/)において、高得点を出せるようになっています。

![Screenshot_20230707-134857_Chrome](https://github.com/laddge/myHiroshi/assets/67098414/5173e596-4cb1-4c7a-8da9-c934e6cdf744)
