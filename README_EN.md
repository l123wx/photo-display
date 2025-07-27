# Starter template for automatic deployment to github pages

[简体中文](./README.md) | English

**Using Vue3 + Typescript + Vite**

GitHub Actions is pre-configured, and pushing code to the master branch will automatically deploy the project to GitHub Pages to generate a preview page.

## Why use it

 - Only requires one operation, no additional configuration needed.
 - No need to modify YAML files, it automatically selects the package manager based on the package.json packageManager configuration to ensure consistent behavior.
 - No unnecessary branches will be created.

## Usage

You only need to go to GitHub Repository `Setting > Pages > Source` and select GitHub Actions

![image](https://github.com/l123wx/vite-vue-github-pages/assets/48666585/77d1bcf1-a066-4a63-8423-e16491815048)

Subsequent code pushed to the master branch will be automatically packaged and deployed to GitHub Pages.

## Use in Other Projects

Copy the `.github/workflows/main.yml` file to the project you want to transform, and adjust the packaging steps according to the actual situation of the project:

```yaml
# Install dependencies
- name: Install dependencies
  run: ni
# Build the project
- name: Build
  run: nr build
```

We use the `@antfu/ni` library to automatically detect the package manager. `ni` is equivalent to `npm install`, `nr` is equivalent to `npm run`.More commands can be found in [the official documentation](https://github.com/antfu-collective/ni#ni).

The default `Jekyll` package path is `dist`. If the project build output path is not `dist`, you can modify the source of Build with Jekyll step:

```yaml
- name: Build with Jekyll
  uses: actions/jekyll-build-pages@v1
  with:
    source: ./dist
```
