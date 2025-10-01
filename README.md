# 梅野夢作繁のポートフォリオ

React + TypeScript + Tailwind CSSで構築されたポートフォリオサイトです。

## 🚀 デプロイ方法

### 自動デプロイ（推奨）
- `main`ブランチにプッシュすると自動でデプロイされます
- GitHub Actionsが自動的にビルド・デプロイを実行

### 手動デプロイ
```bash
# 簡単デプロイ（ビルド + デプロイ）
npm run deploy:quick

# または段階的に
npm run build
npm run deploy
```

## 🌐 アクセス

- **本番サイト**: https://umeno27a.github.io/
- **開発環境**: `npm run dev`

## 📁 プロジェクト構成

- `src/components/` - Reactコンポーネント
- `src/data/` - データファイル（プロフィール、プロジェクト、スキル）
- `src/hooks/` - カスタムフック
- `src/types/` - TypeScript型定義
- `public/` - 静的ファイル（画像など）

## 🛠️ 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# プロジェクトの状態確認
npm run status

# クリーンインストール（問題がある場合）
npm run clean
```