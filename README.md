# 个人作品集 · One Page

Next.js 14（App Router）+ TypeScript + Tailwind CSS + Framer Motion，静态输出，可直接部署到 Vercel。
**全站内容集中在 `data/data.ts`，改文案不需要碰组件。**

---

## 目录结构

```
personal_one_page/
├─ app/
│  ├─ layout.tsx          # <html>、元信息、主题前置脚本（防深色闪白）
│  ├─ page.tsx            # 单页装配：Header → Hero → About → Work → Skills → Contact → Footer
│  └─ globals.css         # 设计 token（CSS 变量）、玻璃吸顶、下划线、减弱动效降级
├─ components/
│  ├─ theme-provider.tsx  # 深浅色状态 + localStorage + 系统偏好
│  ├─ theme-toggle.tsx    # 主题按钮（aria-pressed）
│  ├─ site-header.tsx     # 吸顶导航
│  ├─ section.tsx         # 区块骨架：split（左标签 + 右内容）/ stack（大标题 + 整幅内容）
│  ├─ reveal.tsx          # 滚动揭示（Reveal / StaggerGroup / StaggerItem）
│  ├─ hero.tsx            # 首屏
│  ├─ about.tsx           # 关于我
│  ├─ projects.tsx        # 作品网格（7/5 → 5/7 交替列宽）
│  ├─ skills.tsx          # 技能分组行
│  ├─ contact.tsx         # 邮箱 + 社交
│  ├─ site-footer.tsx     # 页脚
│  └─ icons.tsx           # 三个内联箭头图标（不用图标库）
├─ data/
│  └─ data.ts             # ★ 唯一内容源
├─ lib/cx.ts              # className 合并
├─ public/                # avatar.svg + 4 张项目预览（占位，可替换为真实截图）
├─ tailwind.config.ts     # 颜色映射到 CSS 变量、字体栈、max-w-shell
└─ next.config.mjs
```

## 本地开发

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 生产构建（构建期会做 TS 类型检查）
npm start
```

## 只改 data.ts 就能换内容

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名 / 邮箱 / 城市 / 头像 | `site` |
| 顶部导航项 | `nav`（`id` 必须对应页面区块 id：about / work / skills / contact） |
| 首屏大标题、定位语、CTA | `hero`（`titleLines` 按行拆，`highlight` 指定高亮词） |
| 关于我段落、四条信息 | `about` |
| 项目卡片 | `projects`（顺序即渲染顺序；`href` 以 `http` 开头会自动新窗口打开） |
| 技能分组 | `skillGroups`（分组数量随意增减） |
| 联系方式与社交链接 | `contact` |
| 页脚 | `footer` |

图片：把截图放进 `public/`，把 `image` 写成 `/xxx.png` 即可；也可以直接填 https 外链。
预览图显示比例是 **16:10**（`aspect-[16/10]`），建议按 1200×750 出图。

## 设计说明

- **配色**：暖白 `#f7f5f1` / 近黑 `#0b0b0c` 作底，唯一亮色是朱红 `#d63f1f`（深色模式自动切到 `#ff6a44` 保证对比度）。所有颜色都是 `globals.css` 里的 CSS 变量，改一处全站生效。
- **字阶**：`clamp()` 控制三档标题（首屏 / 区块 / 卡片），首屏 `-0.04em` 紧字距，正文 `1.8` 行高；等宽字体只用于序号、标签、年份这类"技术信息"。
- **留白节奏**：区块上下 80 / 112 / 128px 递增，首屏 8:4 分栏且头像列下沉，作品区 7/5 交替，刻意不做等分。
- **动效**：只用 `transform` + `opacity`。滚动揭示 700ms `cubic-bezier(.16,1,.3,1)`，卡片 hover `-translate-y-1.5`，图片 `scale(1.03)`，箭头位移。
- **深色模式**：`<html class="dark">` 策略。`layout.tsx` 里的前置脚本在首帧前写入 class，避免闪白；用户手动切换后写 localStorage 持久化。

## 验收对照

- [x] 只用 `transform` / `opacity` 做动效；`prefers-reduced-motion: reduce` 时全部降级为静态（`reveal.tsx` 直接返回最终态）。
- [x] 移动端无横向溢出：`html/body { overflow-x: clip }`（不会破坏 sticky）+ 320px 下单列布局，长邮箱用 `break-all`。
- [x] 无布局抖动：图片带 `width/height` + `aspect-ratio` 占位。
- [x] 可访问性：跳转主内容链接、`aria-labelledby` 区块标题、主题按钮 `aria-pressed`、图标 `aria-hidden`、`:focus-visible` 焦点环、对比度达 WCAG AA（正文 ≥ 4.5:1）。
- [x] 无第三方字体 / 图标库请求，首屏只有 1 张 SVG 头像，其余图片 `loading="lazy"`。

> 注意：Lighthouse 分数受部署环境、网络与 Vercel 上是否启用图片优化影响，跑分请在 `npm run build && npm start` 的生产构建下测。

## 部署到 Vercel

```bash
npx vercel        # 首次会引导登录，框架自动识别为 Next.js
npx vercel --prod # 生产环境
```

或推到 GitHub 后在 Vercel 面板 Import Project，无需任何环境变量。
记得把 `app/layout.tsx` 里的 `metadataBase` 换成自己的域名。
