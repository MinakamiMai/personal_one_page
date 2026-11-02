/**
 * data.ts —— 全站唯一内容源
 * ---------------------------------------------------------------
 * 改文案只需要动这一个文件，组件层不含任何硬编码文本。
 * 注意：数组顺序即渲染顺序（导航、项目、技能分组、社交链接）。
 */

/* ----------------------------- 类型定义 ----------------------------- */

export type NavItem = {
  /** 锚点 id，需要与页面区块 id 对应：about | work | skills | contact */
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** 鼠标悬停时右下角展示的说明，可留空 */
  hint?: string;
};

export type Project = {
  id: string;
  /** 卡片标题 */
  title: string;
  /** 一句话描述，建议 40–70 字 */
  summary: string;
  /** 技术标签，建议 3–5 个 */
  tags: string[];
  /** 预览图地址：public 下的相对路径，或任意 https 外链 */
  image: string;
  /** 预览图替代文本，无障碍必填 */
  imageAlt: string;
  /** 项目链接；外链会自动新窗口打开 */
  href: string;
  /** 年份角标 */
  year: string;
  /** 角色/职责，展示在标题下方的小字 */
  role?: string;
};

export type SkillGroup = {
  title: string;
  /** 分组说明，一行以内 */
  note?: string;
  items: string[];
};

export type Fact = {
  label: string;
  value: string;
};

/* ------------------------------ 站点信息 ------------------------------ */

export const site = {
  name: "陈屿",
  nameEn: "CHEN YU",
  role: "前端工程师 / 界面设计",
  /** 用于 <title> 与 SEO 描述 */
  description:
    "陈屿的个人作品集：专注 Web 应用与设计系统的落地，擅长把复杂业务拆成清晰、克制的界面体验。",
  email: "hi@chenyu.design",
  location: "中国 · 广州",
  /** 头像：public 相对路径或外链 */
  avatar: "/avatar.svg",
  avatarAlt: "陈屿的头像插画",
};

/* -------------------------------- 导航 -------------------------------- */

export const nav: NavItem[] = [
  { id: "about", label: "关于" },
  { id: "work", label: "作品" },
  { id: "skills", label: "技能" },
  { id: "contact", label: "联系" },
];

/* -------------------------------- Hero -------------------------------- */

export const hero = {
  /** 顶部小标签（等宽字体展示） */
  eyebrow: "Front-end Engineer & Interface Design",
  /** 主标题，按行拆开便于控制换行与行距 */
  titleLines: ["把复杂的系统，", "做成简单的界面。"],
  /** 需要高亮的那一小段文字（会在标题里被替换为亮色下划线样式） */
  highlight: "简单",
  intro:
    "七年 Web 产品经验，长期负责 B 端系统与设计系统建设。习惯先把结构想清楚，再一层层打磨到像素——好的界面不是装饰，是让事情变简单。",
  /** 主 CTA：跳转作品 / 次要 CTA：跳转联系 */
  primaryCta: { label: "看看作品", href: "#work" },
  secondaryCta: { label: "聊聊合作", href: "#contact" },
  /** 头像旁的状态标记 */
  status: "接受新的合作",
};

/* ------------------------------- 关于我 ------------------------------- */

export const about = {
  title: "关于我",
  lead: "我相信克制比堆叠更难，也更有价值。",
  paragraphs: [
    "过去七年，我一直待在「业务复杂」的那一侧：医疗、供应链、数据中台。这些系统的共同点是——用户没有耐心，容错空间极小。所以我慢慢形成了一套工作方式：先和业务把边界聊透，用最少的界面承载最多的确定性。",
    "我既是工程师也是设计者，能自己画原型、自己写交互、自己调性能。这让我在设计评审时不会说出「这个应该做不了」，也让实现阶段少了很多来回。",
    "工作之外，我维护一套自己的组件库和读书笔记；也喜欢在周末拍一些安静的城市照片。",
  ] as string[],
  facts: [
    { label: "现居", value: "广州 / 可远程" },
    { label: "经验", value: "7 年 · Web 与 B 端" },
    { label: "专注", value: "设计系统 · 交互细节" },
    { label: "日常", value: "TypeScript · Figma" },
  ] as Fact[],
};

/* ------------------------------- 项目 -------------------------------- */

export const projects: Project[] = [
  {
    id: "atlas",
    title: "Atlas 设计系统",
    summary:
      "为 6 条产品线搭建的统一组件库：90+ 组件、完整 Design Token 与深浅色方案，把新页面从设计到上线的时间压缩了约 40%。",
    tags: ["React", "TypeScript", "Radix UI", "Figma"],
    image: "/preview-atlas.svg",
    imageAlt: "Atlas 设计系统的组件与色板界面预览",
    href: "https://example.com/atlas",
    year: "2025",
    role: "设计 + 前端实现",
  },
  {
    id: "board",
    title: "云端协作看板",
    summary:
      "多人实时协作的项目看板，支持拖拽排序、离线编辑与秒级冲突合并。首屏加载 0.9s，弱网下依然可用。",
    tags: ["Next.js", "WebSocket", "Zustand", "PostgreSQL"],
    image: "/preview-board.svg",
    imageAlt: "云端协作看板的泳道与卡片界面预览",
    href: "https://example.com/board",
    year: "2025",
    role: "前端负责人",
  },
  {
    id: "insight",
    title: "数据洞察控制台",
    summary:
      "面向运营的自助分析平台。用可组合的图表 DSL 替代硬编码报表，单条业务线的报表需求从两周缩短到半天。",
    tags: ["D3", "Canvas", "ECharts", "Vite"],
    image: "/preview-insight.svg",
    imageAlt: "数据洞察控制台的折线图与指标卡预览",
    href: "https://example.com/insight",
    year: "2024",
    role: "前端架构",
  },
  {
    id: "record",
    title: "随身健康档案",
    summary:
      "面向患者的 PWA 应用，把住院清单、检查报告和缴费流程收进一个壳里。离线可读、无安装成本，门诊场景使用率 78%。",
    tags: ["PWA", "Tailwind CSS", "IndexedDB", "Vitest"],
    image: "/preview-record.svg",
    imageAlt: "随身健康档案移动端的列表与详情界面预览",
    href: "https://example.com/record",
    year: "2024",
    role: "全栈开发",
  },
];

/* ------------------------------- 技能 -------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    title: "界面与设计",
    note: "从信息结构到视觉细节",
    items: ["UI 设计", "交互设计", "设计系统", "Design Token", "排版与栅格", "Figma"],
  },
  {
    title: "前端",
    note: "日常主力技术栈",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue 3"],
  },
  {
    title: "工程",
    note: "保证交付质量的那部分",
    items: ["Node.js", "PostgreSQL", "Redis", "Docker", "CI/CD", "Git"],
  },
  {
    title: "其他",
    note: "让产品更好用的事",
    items: ["性能优化", "可访问性", "数据可视化", "技术写作"],
  },
];

/* ------------------------------- 联系 -------------------------------- */

export const contact = {
  title: "有想法？我们聊聊。",
  description:
    "目前开放远程合作与长期项目。产品设计、前端实现、设计系统搭建都可以聊——发一封邮件，通常 24 小时内回复。",
  /** 邮箱按钮文案，留空则用 site.email */
  emailLabel: "hi@chenyu.design",
  socials: [
    { label: "GitHub", href: "https://github.com/", hint: "代码与开源" },
    { label: "掘金", href: "https://juejin.cn/", hint: "技术文章" },
    { label: "X", href: "https://x.com/", hint: "日常碎念" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", hint: "工作履历" },
  ] as SocialLink[],
};

/* -------------------------------- 页脚 -------------------------------- */

export const footer = {
  note: "用 Next.js 与 Tailwind CSS 手工搭建",
  copyright: `© ${new Date().getFullYear()} ${site.name}`,
};
