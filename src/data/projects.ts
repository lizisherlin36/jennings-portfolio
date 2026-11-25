import media from './media.json';

export const categories = {
  commercial: '商业作品',
  goodlooks: 'GOOD LOOKS',
  motion: 'AI 影像',
  technology: '创意技术',
} as const;

export const goodLooksUrl = 'https://www.xiaohongshu.com/user/profile/6a0c977c0000000002002000';

type Category = keyof typeof categories;
type MediaKey = keyof typeof media;

export const route = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const artwork = (key: MediaKey) => {
  const image = media[key];
  return { ...image, src: route(`media/${image.file}`) };
};

export interface Episode {
  title: string;
  key?: MediaKey;
  original?: string;
  originalLabel?: string;
  videoId?: string;
  label?: string;
  synopsis?: string;
}

interface Project {
  slug: string;
  title: string;
  category: Category;
  format: string;
  context: string;
  year?: string;
  cover: MediaKey;
  coverAlt: string;
  summary: string;
  description: string;
  contribution?: string;
  episodes?: Episode[];
  series?: { id: string; title: string; summary: string; episodes: Episode[] }[];
  gallery?: { key: MediaKey; caption: string }[];
}

function douyin(title: string, videoId: string, key?: MediaKey): Episode {
  return { title, videoId, key, original: `https://www.douyin.com/video/${videoId}` };
}

function publishedEpisode(title: string, videoId: string, key: MediaKey, label: string): Episode {
  return { ...douyin(title, videoId, key), label, originalLabel: '抖音完整版' };
}

export const projects: Project[] = [
  {
    slug: 'meituan-brand-films',
    title: '美团餐饮系统 · 品牌影像',
    category: 'commercial',
    format: '品牌影像',
    context: '美团餐饮系统',
    cover: 'annual',
    coverAlt: '《更好的答案》年度片横版封面，餐饮从业者身穿红色马甲',
    summary: '从年度回顾到烧烤季短片，用影像记录餐饮经营的日常。',
    description: '这组作品来自美团餐饮系统，涵盖年度回顾、烧烤季温情短片及如意 AI 亮相视频，呈现了三种不同的品牌叙事。',
    contribution: '在美团担任市场营销，后期承担业务营销视觉与对外视频内容制作。',
    episodes: [
      { ...douyin('2025 美团餐饮系统年度视频', '7594726462083599650', 'annual'), label: '年度回顾', synopsis: '《更好的答案》从市场和门店里的日常出发，回望一年的餐饮经营。' },
      { ...douyin('2025 烧烤季暖心视频', '7534991034820857151', 'bbq'), label: '季节短片', synopsis: '跟着炉火与烤串走进烧烤季，看看忙碌时段里，店主如何照应一桌桌客人。' },
      { title: '2025 美团如意 AI 亮相', key: 'ruyi', label: '产品短片', synopsis: '以手机界面与如意 AI 的形象，介绍这款面向餐饮经营者的产品。' },
    ],
  },
  {
    slug: 'meituan-zhangmenshuo',
    title: '《掌门说》商业访谈',
    category: 'commercial',
    format: '人物访谈',
    context: '美团餐饮系统',
    cover: 'zhu',
    coverAlt: '朱光玉火锅访谈画面',
    summary: '走近餐饮品牌经营者，记录他们如何理解产品、团队与门店经营。',
    description: '《掌门说》聚焦餐饮品牌经营者的真实经验。本页也收录了美团餐饮系统同期的独立访谈。',
    contribution: '这类商业访谈的制作涉及客户沟通、内容策划、脚本、现场拍摄和剪辑包装。',
    episodes: [
      douyin('朱光玉火锅 · 李扬', '7386954277014474018', 'zhu'),
      douyin('香天下火锅 · 朱全', '7439673060195568896', 'xiang'),
      { title: '柠季手打柠檬茶', key: 'ning' },
      { title: '袁记云饺', key: 'yuan' },
      { ...douyin('小二香火锅 · 唐温游', '7573995272188022056', 'xiao'), label: '独立访谈' },
      { ...douyin('麦记牛奶 · 谢永亮', '7623300699316620578', 'mai'), label: '独立访谈' },
    ],
  },
  {
    slug: 'meituan-conference',
    title: '美团餐饮行业大会视觉',
    category: 'commercial',
    format: '主视觉与动态设计',
    context: '美团餐饮系统',
    year: '2023–2025',
    cover: 'wuhan',
    coverAlt: '2025 美团餐饮系统武汉大会主视觉',
    summary: '从大会主视觉延伸到宽屏、开场动画与现场物料。',
    description: '以长沙、武汉两场大会为主要案例，展示同一场活动的视觉语言如何延伸至主屏、开场动画、议程、邀请函与胸卡。另收录郑州活动展板。',
    episodes: [{ title: '2025 武汉大会开场动画', key: 'wuhan-motion' }],
    gallery: [
      { key: 'wuhan', caption: '2025 武汉 · 大会主视觉' },
      { key: 'wuhan-agenda', caption: '2025 武汉 · 议程封面' },
      { key: 'wuhan-id', caption: '2025 武汉 · 胸卡' },
      { key: 'changsha', caption: '2023 长沙 · 大会主视觉' },
      { key: 'changsha-wide', caption: '2023 长沙 · 宽屏主视觉' },
      { key: 'changsha-person', caption: '2023 长沙 · 宽屏人物版' },
      { key: 'changsha-invite', caption: '2023 长沙 · 纸质邀请函' },
      { key: 'changsha-agenda', caption: '2023 长沙 · 议程' },
      { key: 'changsha-flyer', caption: '2023 长沙 · 宣传单页' },
      { key: 'zhengzhou', caption: '2025 郑州 · 良之隆活动展板' },
    ],
  },
  {
    slug: 'meituan-customer-cases',
    title: '餐饮客户案例',
    category: 'commercial',
    format: 'B2B 客户案例',
    context: '美团餐饮系统',
    cover: 'panda',
    coverAlt: '熊猫塔塔中国汉堡客户案例画面',
    summary: '以品牌故事和门店场景呈现餐饮经营实践。',
    description: '美团餐饮系统的餐饮客户案例。精选作品提供站内片段，其余案例可前往原发布页观看。',
    episodes: [
      douyin('熊猫塔塔中国汉堡', '7644484990926949667', 'panda'),
      douyin('粤饺皇', '7563614289924197667', 'yue'),
      douyin('鱼神脆皮烤鱼', '7452230433904856347'),
      douyin('点都德', '7477843999529635107'),
      douyin('小禾山炒鸡米饭', '7508675268286876943'),
      douyin('黑山烤房烤肉', '7519351834876677414'),
      douyin('呼啦面馆', '7602835276540448026'),
    ],
  },
  {
    slug: 'china-auto-global',
    title: '中国车企出海',
    category: 'motion',
    format: '系列报道与信息动效',
    context: '独立创作',
    cover: 'auto1',
    coverAlt: '《中国车企出海》第一集封面',
    summary: '用动态信息设计讲述中国车企在不同市场的增长路径。',
    description: '系列从国内市场切入，继续追踪奇瑞在英国、比亚迪在巴西、小鹏在德国的发展，以及蔚来、小鹏、理想三家车企的不同出海节奏。',
    contribution: '个人独立制作，使用 ChatGPT 与 Claude 辅助创作。',
    episodes: [
      publishedEpisode('国内降温，中国车企的增长去哪了？', '7708305908987645227', 'auto1', 'EP 01'),
      publishedEpisode('奇瑞怎么打开英国市场？', '7708385342985932058', 'auto2', 'EP 02'),
      publishedEpisode('比亚迪巴西工厂', '7708634073576525075', 'auto3', 'EP 03'),
      publishedEpisode('小鹏在德国', '7708955099741162786', 'auto4', 'EP 04'),
      publishedEpisode('蔚小理，三种节奏', '7710258634281848099', 'auto5', 'EP 05'),
    ],
  },
  {
    slug: 'geography-motion',
    title: '地理知识科普',
    category: 'motion',
    format: '地理叙事与动态图解',
    context: '独立创作',
    cover: 'mariana',
    coverAlt: '马里亚纳海沟科普短片封面',
    summary: '以动态图解呈现海沟深度和运河船闸原理。',
    description: '从马里亚纳海沟的深度，到巴拿马运河如何通过船闸改变水位，把抽象的尺度和机械过程转化成可以跟着画面理解的科普短片。',
    episodes: [
      publishedEpisode('马里亚纳海沟', '7707170618533236031', 'mariana', 'EP 01'),
      publishedEpisode('巴拿马运河 · 海洋电梯', '7707342704346189083', 'panama', 'EP 02'),
    ],
  },
  {
    slug: 'technology-motion',
    title: '科技热点动态图解',
    category: 'motion',
    format: '科技议题与信息动效',
    context: '独立创作',
    cover: 'fsd1',
    coverAlt: 'FSD V15 解析第一集封面',
    summary: '用动态时间线、路径图和技术示意拆解科技热点。',
    description: '从资金路径到辅助驾驶，再到芯片议题，每组专题用独立的图解方式梳理时间线、关键概念或技术背景。',
    series: [
      {
        id: 'binance',
        title: '币安被盗',
        summary: '三集围绕事件时间线、被盗资金路径和提现恢复后的变化展开。',
        episodes: [
          publishedEpisode('币安资金失窃', '7702433693268217151', 'binance-1', '第 1 集'),
          publishedEpisode('Follow the Money · 资金去了哪里？', '7703262668852940075', 'binance-2', '第 2 集'),
          publishedEpisode('提现恢复后的资金流向', '7703533332109430057', 'binance-3', '第 3 集'),
        ],
      },
      {
        id: 'fsd',
        title: 'FSD V15 解析',
        summary: '以车机界面和道路场景组织两集解析。',
        episodes: [
          publishedEpisode('FSD V15 解析 · 第一集', '7710920536011918633', 'fsd1', '第 1 集'),
          publishedEpisode('FSD V15 解析 · 第二集', '7711274435679997225', 'fsd2', '第 2 集'),
        ],
      },
      {
        id: 'nvidia',
        title: '英伟达芯片议题',
        summary: '以短片梳理芯片产品与市场背景。',
        episodes: [{ title: '英伟达还能向中国卖什么？', key: 'nvidia' }],
      },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find(project => project.slug === slug)!;
