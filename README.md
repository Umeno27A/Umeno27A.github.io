# 梅野夢作繁のポートフォリオ

React + TypeScript + Tailwind CSSで構築されたポートフォリオサイトです。

## 🚀 デプロイ方法

### 手動デプロイ（推奨）

```bash
npm run deploy
```

または

```bash
./deploy.sh
```

### 手動デプロイの手順

1. コードを変更
2. `npm run build` でビルド
3. `git checkout gh-pages` でgh-pagesブランチに切り替え
4. `cp -r dist/* .` でビルドファイルをコピー
5. `git add . && git commit -m "Update" && git push origin gh-pages`
6. `git checkout main` でmainブランチに戻る

## 🌐 アクセス

- **本番サイト**: https://umeno27a.github.io/
- **開発環境**: `npm run dev`

## 📁 プロジェクト構成

- `src/components/` - Reactコンポーネント
- `src/data/` - データファイル（プロフィール、プロジェクト、スキル）
- `src/hooks/` - カスタムフック
- `src/types/` - TypeScript型定義
- `public/` - 静的ファイル（画像など）

## 🛠️ 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```