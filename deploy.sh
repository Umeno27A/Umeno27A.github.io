#!/bin/bash

# GitHub Pages手動デプロイスクリプト

echo "🚀 GitHub Pages デプロイを開始します..."

# ビルド
echo "📦 ビルド中..."
npm run build

# gh-pagesブランチに切り替え
echo "🔄 gh-pagesブランチに切り替え中..."
git checkout gh-pages

# 現在のファイルを削除（.gitを除く）
echo "🗑️ 古いファイルを削除中..."
git rm -rf . --ignore-unmatch
rm -rf dist node_modules IMG_0292.JPG

# ビルドファイルをコピー
echo "📋 ビルドファイルをコピー中..."
cp -r dist/* .

# 変更をコミット
echo "💾 変更をコミット中..."
git add .
git commit -m "Deploy: $(date)"

# プッシュ
echo "⬆️ GitHubにプッシュ中..."
git push origin gh-pages

# mainブランチに戻る
echo "🔄 mainブランチに戻ります..."
git checkout main

echo "✅ デプロイ完了！"
echo "🌐 https://umeno27a.github.io/ でアクセスできます"
