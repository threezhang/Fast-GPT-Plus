#!/bin/bash

# Fast-GPT-Plus Build Script
# This script builds the Tailwind CSS and Jekyll site

echo "🚀 Starting Fast-GPT-Plus build process..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

# Check if bundle is installed
if ! command -v bundle &> /dev/null; then
    echo "❌ bundle is not installed. Please install Ruby and Bundler first."
    exit 1
fi

# Install npm dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm dependencies..."
    npm install
fi

# Create output directory if it doesn't exist
mkdir -p assets/css

# Build Tailwind CSS
echo "🎨 Building Tailwind CSS..."
npm run build:css

# Check if Tailwind build was successful
if [ ! -f "assets/css/main.css" ]; then
    echo "❌ Tailwind CSS build failed!"
    exit 1
fi

# Install Ruby dependencies if needed
if [ ! -f "Gemfile.lock" ]; then
    echo "💎 Installing Ruby dependencies..."
    bundle install
fi

# Build Jekyll site
echo "🔨 Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build

# Check if Jekyll build was successful
if [ -d "_site" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Site built in _site directory"
    
    # Optional: serve the site locally
    read -p "Would you like to serve the site locally? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🌐 Starting local server at http://localhost:4000/Fast-GPT-Plus/"
        bundle exec jekyll serve
    fi
else
    echo "❌ Jekyll build failed!"
    exit 1
fi