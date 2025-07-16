#!/bin/bash
# Preview script for Jekyll site

echo "Starting Jekyll preview server..."
echo "================================"

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "Ruby is not installed. Please install Ruby first."
    exit 1
fi

# Install bundler if not installed
if ! command -v bundle &> /dev/null; then
    echo "Installing bundler..."
    gem install bundler --user-install
    export PATH="$HOME/.gem/ruby/$(ruby -e 'puts RUBY_VERSION')/bin:$PATH"
fi

# Install dependencies
echo "Installing dependencies..."
bundle install --path vendor/bundle

# Serve the site
echo "Starting server at http://localhost:4000"
echo "Press Ctrl+C to stop"
bundle exec jekyll serve --livereload --drafts --future

# Alternative without livereload if it causes issues:
# bundle exec jekyll serve --watch --drafts --future