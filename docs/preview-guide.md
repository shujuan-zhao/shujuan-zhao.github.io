# Website Preview Guide

## Quick Start

### Option 1: Local Preview (Requires Ruby)
```bash
# Run the preview script
./preview.sh

# Or manually:
bundle install
bundle exec jekyll serve --livereload
```
Then open http://localhost:4000 in your browser.

### Option 2: Docker Preview (No Ruby needed)
```bash
# If you have Docker installed
docker-compose up

# Or with docker directly:
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish 4000:4000 \
  jekyll/jekyll \
  jekyll serve
```

### Option 3: Online Preview
1. **Gitpod**: Add `gitpod.io/#` before your GitHub URL
   - Example: `gitpod.io/#https://github.com/shujuan-zhao/shujuan-zhao.github.io`

2. **GitHub Codespaces**: Create a codespace from your repository

### Option 4: Preview Branch Strategy
```bash
# Create a preview branch
git checkout -b preview

# Push to GitHub
git push origin preview

# Access at: https://shujuan-zhao.github.io/preview/
# (Note: You need to configure GitHub Pages to build from branches)
```

## Common Issues

### Ruby/Bundler Issues
```bash
# If bundle command not found
gem install bundler

# If permission denied
gem install bundler --user-install
export PATH="$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH"

# Use rbenv or rvm for Ruby version management
```

### Port Already in Use
```bash
# Kill process using port 4000
lsof -i :4000
kill -9 <PID>

# Or use different port
bundle exec jekyll serve --port 4001
```

### Live Reload Not Working
```bash
# Serve without livereload
bundle exec jekyll serve --watch
```

## Best Practices

1. **Always preview before pushing to master**
2. **Test on multiple browsers**
3. **Check mobile responsiveness**
4. **Verify all links work**
5. **Test with production environment**:
   ```bash
   JEKYLL_ENV=production bundle exec jekyll serve
   ```

## Workflow Example

```bash
# 1. Make changes
git checkout -b feature/new-post

# 2. Preview locally
./preview.sh

# 3. Test production build
JEKYLL_ENV=production bundle exec jekyll build

# 4. If happy, push to master
git checkout master
git merge feature/new-post
git push origin master
```