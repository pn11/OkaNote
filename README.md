# OkaNote is not available

[Boostnote](https://b00st.io), [Kobito](http://kobito.qiita.com), [PileMd](https://pilemd.com), [Quiver](http://happenapps.com/#quiver) などの markdown ノートアプリを使ってみたけれど、それぞれが独自の保存形式なので扱いづらかった。ノートはそれぞれ個別の markdown file にしたい。というわけでたくさんの markdown をいい感じに manage してくれるエディタをつくろうとしたけど、久しぶりに [Atom](https://atom.io) 使ったらこれでいいじゃんてなった。Atom に、数式レンダリングとノート間リンクの機能を加えるために、以下のプラグインを加えれば、欲しい機能を持ったノートアプリになった。

数式レンダリングのために、

- [mathjax-wrapper](https://atom.io/packages/mathjax-wrapper)
	- [markdown-preview-plus](https://atom.io/packages/markdown-preview-plus) が必要
	- ついでに [markdown-preview-plus-opener](https://atom.io/packages/markdown-preview-plus-opener)

ノート間リンクのために

- [navigate](https://atom.io/packages/navigate)
	- [browser-plus](https://atom.io/packages/browser-plus) が必要

あとは 目次をつくるために

- [markdown-toc](https://atom.io/packages/markdown-toc)

を入れた。toc は [MacDown](http://macdown.uranusjr.com) のほうが簡単につくれるけど。

# 以下、旧情報

Oka's Markdown Editor using [CodeMirror](http://codemirror.net), [Electron](http://electron.atom.io) and [jQuery](https://jquery.org).

## Requirement

### Get Node.js

```sh
brew install node
```

with [Homebrew](http://brew.sh). For other method, see [Node.js](https://nodejs.org/).


## Start Using

Run

```sh
npm install && npm start
```

in the `OkaNote` directory.
