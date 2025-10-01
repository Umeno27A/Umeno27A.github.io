#!/bin/bash

# GitHub Pages 簡単デプロイスクリプト

set -e  # エラー時に停止

echo "🚀 GitHub Pages デプロイを開始します..."

# 依存関係の確認
if ! command -v npm &> /dev/null; then
    echo "❌ npm が見つかりません"
    exit 1
fi

# ビルド
echo "📦 ビルド中..."
npm run build

# distフォルダの確認
if [ ! -d "dist" ]; then
    echo "❌ distフォルダが見つかりません"
    exit 1
fi

# 現在のブランチを保存
CURRENT_BRANCH=$(git branch --show-current)

# gh-pagesブランチに切り替え
echo "🔄 gh-pagesブランチに切り替え中..."
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git checkout gh-pages
else
    git checkout -b gh-pages
fi

# 現在のファイルを削除（.gitと.githubを除く）
echo "🗑️ 古いファイルを削除中..."
git rm -rf . --ignore-unmatch 2>/dev/null || true
rm -rf dist node_modules IMG_0292.JPG 2>/dev/null || true

# ビルドファイルをコピー
echo "📋 ビルドファイルをコピー中..."
cp -r dist/* .

# 変更をコミット
echo "💾 変更をコミット中..."
git add .
git commit -m "Deploy: $(date '+%Y年 %m月 %d日 %H時%M分%S秒 JST')" || echo "変更なし"

# プッシュ
echo "⬆️ GitHubにプッシュ中..."
git push origin gh-pages

# 元のブランチに戻る
echo "🔄 $CURRENT_BRANCH ブランチに戻ります..."
git checkout "$CURRENT_BRANCH"

echo ""
echo "✅ デプロイ完了！"
echo "🌐 https://umeno27a.github.io/ でアクセスできます"
echo "⏰ 反映まで数分かかる場合があります"
