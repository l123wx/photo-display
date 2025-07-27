# 自动部署项目到 GitHub Pages 的项目模板

简体中文 | [English](./README_EN.md)

**使用 Vue3 + Typescript + Vite**

已经配置好 GitHub Actions，推送代码到 master 分支就会自动部署项目到 GitHub Pages 生成预览页面

## 使用这个模版的好处

 - 只需要一个操作，不需要额外的配置
 - 无需修改 YAML 文件，自动根据 package.json packageManager 配置选择包管理器，确保行为一致性
 - 不会生成多余的分支

## 操作步骤

只需在 GitHub 仓库 Setting > Pages > Source 选择 GitHub Actions

![image](https://github.com/l123wx/vite-vue-github-pages/assets/48666585/77d1bcf1-a066-4a63-8423-e16491815048)

后续推送代码到 master 分支都会自动打包并部署到 GitHub Pages

## 在其他项目中使用

将 `.github/workflows/main.yml` 文件复制到你想改造的项目，根据项目实际情况调整打包步骤：

```yaml
# 安装依赖
- name: Install dependencies
  run: ni
# 打包项目
- name: Build
  run: nr build
```

使用了 @antfu/ni 库来实现包管理器的自动识别，`ni` 等效于 `npm install`，`nr` 等效于 `npm run`，更多命令可以查看[官方文档](https://github.com/antfu-collective/ni#ni)

默认的 `Jekyll` 打包路径为 `dist`，如果项目 build 输出路径不是 `dist`，可以修改 Build with Jekyll 步骤的 `source`：

```yaml
- name: Build with Jekyll
  uses: actions/jekyll-build-pages@v1
  with:
    source: ./dist
```
