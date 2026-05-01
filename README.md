# BloomLetter

BloomLetter は、フラワーギフトの公開サイトと管理画面、Spring Boot バックエンド API を含むポートフォリオプロジェクトです。

別PCへ移行するときは、この README の手順どおりに GitHub から clone し、Java / Maven / DB を準備すれば再現できます。

## 必要な環境

- JDK 17
  - `backend/pom.xml` の `java.version` は `17` です。
  - 確認コマンド: `java -version`
- Maven 3.9 系
  - Gradle は使っていません。
  - Maven Wrapper は入っていないため、新PC側に Maven をインストールしてください。
  - 確認コマンド: `mvn -version`
- DB
  - 標準: H2 Database。インストール不要で、起動時に `schema.sql` と `data.sql` から初期化されます。
  - 永続化や移行が必要な場合: MySQL 8 系を推奨します。
- Git
  - GitHub から clone するために必要です。

## GitHub から新PCへ移行する手順

1. 新PCに JDK 17、Maven、Git をインストールします。
2. 任意の作業フォルダでリポジトリを clone します。

```powershell
git clone git@github.com:AsamiSato2511/portfolio01.git
cd portfolio01
```

HTTPS を使う場合:

```powershell
git clone https://github.com/AsamiSato2511/portfolio01.git
cd portfolio01
```

3. 最新状態を確認します。

```powershell
git status --short --branch
```

`M` や `??` などの変更行がなく、`## main...origin/main` のように表示されれば、GitHub とローカルのコミットは一致しています。

4. バックエンドを起動します。

```powershell
cd backend
mvn -s settings.xml spring-boot:run
```

5. ブラウザで表示を確認します。

- 公開サイト: `http://localhost:8080/index.html`
- 商品一覧: `http://localhost:8080/products.html`
- 管理画面ログイン: `http://localhost:8080/admin/login.html`
- 商品管理: `http://localhost:8080/admin/products.html`
- 問い合わせ管理: `http://localhost:8080/admin/inquiries.html`
- H2 Console: `http://localhost:8080/h2-console`
- Swagger UI: `http://localhost:8080/swagger-ui/index.html`

管理画面の初期ログイン情報は `backend/src/main/resources/data.sql` にあります。

- メールアドレス: `admin@bloom-letter.jp`
- パスワード: `password`

## 起動コマンド

H2 で起動する場合:

```powershell
cd backend
mvn -s settings.xml spring-boot:run
```

MySQL プロファイルで起動する場合:

```powershell
cd backend
mvn -s settings.xml "-Dspring-boot.run.profiles=mysql" spring-boot:run
```

テストを実行する場合:

```powershell
cd backend
mvn -s settings.xml test
```

## DB の種類と作成方法

### H2 を使う場合

H2 は標準設定です。追加インストールは不要です。

- JDBC URL: `jdbc:h2:mem:bloomletter;MODE=MySQL;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE`
- ユーザー名: `sa`
- パスワード: 空欄
- H2 Console: `http://localhost:8080/h2-console`

注意: 現在の H2 はインメモリ DB です。アプリを停止すると、管理画面で追加・編集した商品や問い合わせ状態は消えます。初期データだけでよい場合は、`schema.sql` と `data.sql` が Git 管理されているため DB 移行は不要です。

### MySQL を使う場合

MySQL を使うと、管理画面で追加・編集したデータを別PCへ移行できます。

1. MySQL にログインします。

```powershell
mysql -u root -p
```

2. DB を作成します。

```sql
CREATE DATABASE bloomletter CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. `backend/src/main/resources/application-mysql.yml` の接続情報を自分の環境に合わせます。

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/bloomletter?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Tokyo
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
```

4. MySQL プロファイルで起動します。

```powershell
cd backend
mvn -s settings.xml "-Dspring-boot.run.profiles=mysql" spring-boot:run
```

注意: `application-mysql.yml` は `spring.sql.init.mode: always` になっています。起動時に `schema.sql` と `data.sql` が実行されるため、既存データを残したい運用に切り替える場合は、初期化後に `mode: never` へ変更してください。

## application 設定項目

このプロジェクトは `application.properties` ではなく YAML 形式を使っています。

標準設定ファイル:

- `backend/src/main/resources/application.yml`

主な設定:

- `spring.application.name`: アプリケーション名
- `spring.datasource.url`: H2 の JDBC URL
- `spring.datasource.username`: H2 のユーザー名
- `spring.datasource.password`: H2 のパスワード
- `spring.datasource.driver-class-name`: H2 ドライバー
- `spring.h2.console.enabled`: H2 Console を有効にするか
- `spring.h2.console.path`: H2 Console の URL
- `spring.sql.init.mode`: `schema.sql` / `data.sql` を起動時に実行するか
- `spring.jackson.time-zone`: JSON 日時のタイムゾーン
- `mybatis.mapper-locations`: MyBatis XML mapper の場所
- `mybatis.configuration.map-underscore-to-camel-case`: DB カラム名と Java プロパティ名の変換
- `bloomletter.ai.enabled`: AI ギフト相談 API を有効にするか
- `bloomletter.ai.base-url`: AI API の URL。環境変数 `BLOOMLETTER_AI_BASE_URL` で上書きできます。
- `bloomletter.ai.model`: AI モデル名。環境変数 `BLOOMLETTER_AI_MODEL` で上書きできます。
- `bloomletter.ai.api-key`: API キー。環境変数 `OPENAI_API_KEY` で指定します。

MySQL 用設定ファイル:

- `backend/src/main/resources/application-mysql.yml`

主な設定:

- `spring.datasource.url`: MySQL の JDBC URL
- `spring.datasource.username`: MySQL ユーザー名
- `spring.datasource.password`: MySQL パスワード
- `spring.datasource.driver-class-name`: MySQL ドライバー
- `spring.sql.init.mode`: 起動時 SQL 初期化
- `spring.h2.console.enabled`: MySQL 利用時は `false`

## DB データのエクスポート・インポート

### 初期データだけでよい場合

DB データの移行は不要です。次のファイルが Git 管理されているため、新PCで起動すると同じ初期データが作られます。

- `backend/src/main/resources/schema.sql`
- `backend/src/main/resources/data.sql`

### MySQL のデータを移行する場合

旧PCでエクスポートします。

```powershell
mysqldump -u root -p --default-character-set=utf8mb4 bloomletter > bloomletter_dump.sql
```

新PCで DB を作成します。

```powershell
mysql -u root -p
```

```sql
CREATE DATABASE bloomletter CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit
```

新PCでインポートします。

```powershell
mysql -u root -p --default-character-set=utf8mb4 bloomletter < bloomletter_dump.sql
```

インポート済みデータを消さないため、`backend/src/main/resources/application-mysql.yml` の `spring.sql.init.mode` は `never` に変更してから起動してください。

```yaml
spring:
  sql:
    init:
      mode: never
```

## 静的ファイルと画像

公開サイトの HTML / CSS / JS / 画像は、リポジトリ直下の次の場所にあります。

- `*.html`
- `css/`
- `js/`
- `images/`

Spring Boot は `backend` ディレクトリから起動する前提で、リポジトリ直下の静的ファイルを配信します。起動時は必ず `cd backend` してから `mvn ... spring-boot:run` を実行してください。

商品画像やバナー画像を追加した場合は、Git 管理に入っているか確認します。

```powershell
git status --short
```

必要な画像が `?? images/...` と表示された場合は、GitHub へ反映する前に追加・コミット・プッシュします。

```powershell
git add images
git commit -m "add site images"
git push origin main
```

## Git 管理外ファイル

次のファイルやディレクトリは Git 管理外で問題ありません。新PCでは再生成または再インストールします。

- `.m2/`: Maven の依存キャッシュ。`mvn -s settings.xml ...` 実行時に再作成されます。
- `.tools/`: ローカルに置いた Maven などのツール。GitHub には含めません。
- `backend/target/`: Maven のビルド成果物。`mvn test` や `mvn spring-boot:run` で再生成されます。
- `*.log`, `backend/boot.out.log`, `backend/boot.err.log`: 実行ログ。
- `backend/GenBcrypt.java`, `backend/GenBcrypt.class`, `backendGenBcrypt.java`: パスワードハッシュ生成用の一時ファイル。

画像・HTML・CSS・JS・`application.yml`・`application-mysql.yml`・`schema.sql`・`data.sql` は移行に必要なファイルなので、Git 管理から外さないでください。

## 移行前チェックリスト

旧PCで次を確認してから移行します。

```powershell
git fetch origin
git status --short --branch
git rev-list --left-right --count main...origin/main
```

確認ポイント:

- `git status --short --branch` に `M` や `??` が出ている場合、未コミットの変更があります。
- `git rev-list --left-right --count main...origin/main` が `0 0` なら、ローカルのコミットと GitHub の `origin/main` は一致しています。
- 必要な画像が `?? images/...` で表示されている場合、その画像はまだ GitHub に反映されません。

未反映の変更を GitHub に送る場合:

```powershell
git add .
git commit -m "prepare BloomLetter migration"
git push origin main
```

新PCで clone 後、同じ確認をしてから起動します。

## API 一覧

Public APIs:

- `GET /api/public/home`
- `GET /api/public/scenes`
- `GET /api/public/products`
- `GET /api/public/products/{productId}`
- `GET /api/public/scenes/{sceneSlug}/products`
- `POST /api/public/contact-inquiries`

Admin APIs:

- `POST /api/admin/auth/login`
- `GET /api/admin/dashboard`
- `GET /api/admin/products`
- `GET /api/admin/products/{productId}`
- `POST /api/admin/products`
- `PUT /api/admin/products/{productId}`
- `DELETE /api/admin/products/{productId}`
- `GET /api/admin/scenes`
- `GET /api/admin/inquiries`
- `GET /api/admin/inquiries/{inquiryId}`
- `PATCH /api/admin/inquiries/{inquiryId}/status`

## ディレクトリ構成

```text
portfolio01
├─ *.html
├─ css/
├─ js/
├─ images/
├─ docs/
├─ design/
├─ scripts/
└─ backend/
   ├─ pom.xml
   ├─ settings.xml
   └─ src/
      ├─ main/java/com/bloomletter/backend/
      ├─ main/resources/
      │  ├─ application.yml
      │  ├─ application-mysql.yml
      │  ├─ schema.sql
      │  ├─ data.sql
      │  ├─ mapper/
      │  └─ static/admin/
      └─ test/java/com/bloomletter/backend/
```
