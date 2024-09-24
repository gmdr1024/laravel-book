# Laravelインストール

## 概要 {#overview}
- Laravelをインストールする

::: warning Sailは以下の理由のため非推奨
- `Amazon Linux`などのRHEL系のOSを使用できない
  - `Sail`標準の`Dockerfile`のベースイメージが`Ubuntu`で、`apt`コマンドを使用している
- `Apache`、`nginx`などのWebサーバーを使用できない
  - `Sail`は標準でWebサーバーでなくPHPの組み込みサーバーを使用している  
:::

## Docker用のファイル を作成 {#create-docker}
![GitHub](https://img.shields.io/badge/-GitHub-black)

- [Laravel用Dockerファイル群](https://github.com/gmdr1024/laravel-docker)のソースをダウンロード

::: info 補足
- 以降の手順は上記例をベースに記載する
:::

## Laravelプロジェクト の作成 {#create-laravel}
![webコンテナ](https://img.shields.io/badge/-web%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A-orange)

- 以下のコマンドを実行

```Shell
rm -f /var/www/html/.gitkeep 
composer create-project laravel/laravel /var/www/html
```

## Laravelプロジェクト の初期設定 {#custom-laravel}

### ファイルの権限設定
![webコンテナ](https://img.shields.io/badge/-web%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A-orange)

- 以下のコマンドを実行

```Shell
chown -R apache:apache /var/www/html
chmod -R 755 /var/www/html
```

### envの初期設定

#### ローカル環境用envを作成
![VS Code](https://img.shields.io/badge/-VSCode-blue)

- `src/.env.example` を `src/.env.local` にリネーム

#### ローカル環境用envを編集
![VS Code](https://img.shields.io/badge/-VSCode-blue)

```Shell
# 共通
APP_NAME=(アプリケーション名)
APP_TIMEZONE=Asia/Tokyo
APP_URL=http://localhost:8080
APP_LOCALE=ja
APP_FALLBACK_LOCALE=ja
APP_FAKER_LOCALE=ja_JP

# DB
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=foo
DB_USERNAME=user
DB_PASSWORD=user

# メール
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
```

#### ローカル環境用envを適用
![VS Code](https://img.shields.io/badge/-VSCode-blue)

- `src/.env.local` と `src/.env` の内容を比較し、`.env` に差分を反映する

### 疎通確認
![ブラウザ](https://img.shields.io/badge/-%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6-gray)

- http://localhost:8080/ にアクセス
  - Laravelの初期画面が表示されることを確認



