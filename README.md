# BloomLetter Backend

BloomLetter の公開サイト・管理画面向けバックエンドです。Spring Boot + MyBatis で REST API を実装し、商品、シーン、お問い合わせ、管理者認証を扱います。

## 使用技術

- Java 17
- Spring Boot 3.3
- MyBatis
- Spring Security
- H2 Database
- MySQL
- JUnit 5 / MockMvc

## セットアップ手順

1. `backend` ディレクトリへ移動します。
2. ローカル開発では H2 をそのまま利用できます。
3. Maven がない場合は、このリポジトリ内の `.tools/apache-maven-3.9.9` を利用してください。

## DB 設定方法

- `default` プロファイル: H2 を利用します。
- `mysql` プロファイル: `backend/src/main/resources/application-mysql.yml` を利用します。
- MySQL 利用時は環境変数または `application-mysql.yml` の値を調整してください。

## 起動方法

```powershell
cd backend
..\tools\apache-maven-3.9.9\bin\mvn.cmd spring-boot:run
```

MySQL プロファイルで起動する場合:

```powershell
cd backend
..\tools\apache-maven-3.9.9\bin\mvn.cmd spring-boot:run -Dspring-boot.run.profiles=mysql
```

## テスト実行方法

```powershell
cd backend
..\tools\apache-maven-3.9.9\bin\mvn.cmd test
```

## API 一覧

### Public APIs

- `GET /api/public/home`
- `GET /api/public/scenes`
- `GET /api/public/products`
- `GET /api/public/products/{productId}`
- `GET /api/public/scenes/{sceneSlug}/products`
- `POST /api/public/contact-inquiries`

### Admin APIs

- `POST /api/admin/auth/login`
- `GET /api/admin/dashboard`
- `GET /api/admin/products`
- `GET /api/admin/products/{productId}`
- `POST /api/admin/products`
- `PUT /api/admin/products/{productId}`
- `DELETE /api/admin/products/{productId}`
- `GET /api/admin/scenes`

## 認証方式

- 管理者 API は Spring Security による HTTP Basic 認証を利用します。
- ログイン確認 API として `POST /api/admin/auth/login` を提供します。
- 認証情報は `admin_users` テーブルを参照します。
- API はステートレス運用を前提とし、CSRF は無効化しています。

## ディレクトリ構成

```text
backend
├─ src/main/java/com/bloomletter/backend
│  ├─ config
│  ├─ controller
│  ├─ dto
│  ├─ entity
│  ├─ exception
│  ├─ mapper
│  ├─ security
│  ├─ service
│  └─ validation
├─ src/main/resources
│  ├─ mapper
│  ├─ application.yml
│  ├─ application-mysql.yml
│  ├─ schema.sql
│  └─ data.sql
└─ src/test/java/com/bloomletter/backend
```

## 今後の改善案

- JWT ベースの認証方式への移行
- 問い合わせ管理 API の追加
- 商品画像アップロード機能の追加
- OpenAPI / Swagger による API ドキュメント整備
- Flyway によるマイグレーション管理
