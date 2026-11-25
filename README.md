# Jennings Li 个人作品集

这个发布包包含 Astro 源码、网站使用的网页媒体和 GitHub Pages 部署配置。使用 Node.js 24。

## 发布到 GitHub Pages

1. 在 GitHub 创建公开仓库，例如 `jennings-portfolio`。
2. 解压后，用 GitHub Desktop 或 Git 将解压目录中的文件提交到仓库根目录并推送至 `main`。保留隐藏目录 `.github/` 和文件 `.gitignore`。
3. 打开仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 首次在 **Actions → Deploy portfolio to GitHub Pages → Run workflow** 运行 `main`。部署成功后，**Settings → Pages** 显示公开网址。
5. 用手机和无痕窗口打开公开网址，检查首页轮播、作品详情视频、GOOD LOOKS 图集和外部链接。

之后每次推送到 `main`，GitHub Actions 自动构建和部署。工作流从 Pages 配置读取站点域名和仓库子路径。招聘方可以直接打开公开网址。当前页面保留搜索引擎索引限制。

## 本地预览

```sh
npm ci
npm run dev
```

构建静态网站使用 `npm run build`，用 `npm run preview` 预览构建成果。

## 更新内容

| 内容 | 文件或目录 |
| --- | --- |
| 作品、分集及原片链接 | `src/data/projects.ts` |
| 视频、图片与封面元数据 | `src/data/media.json` |
| 站内视频、图片与封面 | `public/media/` |
| 首页与 AI Lab 首屏轮播 | `src/components/HeroReel.astro` |
| GOOD LOOKS 图集与笔记链接 | `src/data/good-looks-media.json` 和 `src/data/good-looks.ts` |
| 在线实验站 | `src/components/Experiments.astro` |
| 个人介绍 | `src/pages/about/index.astro` |

Inter 字体许可随网站保存在 `public/fonts/Inter-OFL.txt`。
