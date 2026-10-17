import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, ArrowRight, Menu, Play, Sparkles, Activity, Target, Layers3, ScanLine } from 'lucide-react';
import './styles.css';
import TechText from './components/TechText';
import ShapeGrid from './components/ShapeGrid';

const videoCreatives = [
  { no: '01', file: 'video-self-disclosure.mp4', title: '先讲缺点，再消除高价顾虑', hook: '自曝缺点 × 低价班对比', opening: '开头自曝缺点，并与低价班形成对比。', middle: '中段陈述课程卖点，降低用户对高价课程的心理障碍，同时筛选有支付能力的人群。', ending: '结尾提示贪便宜可能影响上岸，推动用户主动咨询。' },
  { no: '02', file: 'video-graduate-employment.mp4', title: '毕业后被迫就业', hook: '就业焦虑 × 痛点钩子', opening: '以“毕业后被迫就业”切入，直击专科学生的现实焦虑。', middle: '承接课程卖点，回应继续备考与升学需求。', ending: '明确行动引导，推动咨询。' },
  { no: '03', file: 'video-self-discipline.mp4', title: '躺平备考，缺少自制力', hook: '备考拖延 × 痛点钩子', opening: '从躺平备考、缺少自制力的状态切入。', middle: '突出课程管理与学习支持对自制力弱人群的帮助。', ending: '给出行动引导，推动用户进一步了解课程。' },
];

const imageCreatives = [
  { no: '01', file: 'image-trust-recommendation.png', label: '信任感钩子', title: '上岸人真心建议报班', desc: '借“上岸人”的亲历视角，客观呈现报班优势，先建立可信度，再承接课程咨询。' },
  { no: '02', file: 'image-price-trust.png', label: '价格筛选 · 信任钩子', title: '还是报了机构学习', desc: '以原生支付截图建立真实感；模糊处理的五位数价格传递投入门槛、筛选支付能力，文案继续说明报班优势。' },
];

const strengths = [
  { icon: Activity, id: '01', title: '数据诊断与投产', text: '熟悉线索、应用推广与游戏投放漏斗，围绕千次展示成本、点击率、点击成本、转化率、转化成本、留存和投入产出比定位问题。', tags: '点击率 / 转化率 / 成本 / 投产' },
  { icon: Target, id: '02', title: '智能工具与数据自动化', text: '用 WorkBuddy 发起请求、接入巨量本地推接口抓取指标；用扣子智能体分析异常，并通过飞书、钉钉自动输出时报、日报和周报。', tags: '智能助手 / 扣子 / 接口自动化' },
  { icon: Layers3, id: '03', title: '素材与脚本能力', text: '擅长视频素材拆解、痛点钩子脚本和爆款复刻；可用稿定设计与人工智能作图工具制作图文素材，并根据回收数据迭代。', tags: '创意 / 脚本 / 人工智能作图' },
  { icon: ScanLine, id: '04', title: '沟通协作与办公工具', text: '熟悉飞书、钉钉多维表格与自动化，常用 WPS、演示文稿、电子表格；具备良好的接待、沟通和客户关系维护能力，通过大学英语四、六级。', tags: '客户意识 / 大学英语四、六级' },
];

function Header() {
  return <header className="nav"><a className="brand" href="#top" aria-label="回到首页"><span className="brand-mark">冯</span><span>冯山峻<small>国内信息流投放经验</small></span></a><nav className="nav-links"><a href="#about">关于我</a><a href="#experience">工作经历</a><a href="#work">精选作品</a><a href="#methodology">投放方法论</a><a href="#strengths">个人优势</a></nav><a className="nav-cta" href="#contactInfo">联系我 <ArrowUpRight size={15}/></a><a className="mobile-menu" href="#work" aria-label="查看作品"><Menu size={21}/></a></header>
}

function Hero() {
  return <section className="hero" id="top">
    <img className="hero-image" src="/assets/facebook-ads-dashboard.png" alt="" aria-hidden="true"/>
    <div className="hero-shade"/>
    <ShapeGrid className="hero-shapes" shape="hexagon" direction="diagonal" lineColor="rgba(212,237,114,.28)" hoverColor="#d4ed72" hoverFillColor="#d4ed72" fillOpacity={0.1} cellSize={74} speed={0.22} radius={2.2} trail={0.9} glow={0.24} fade={0.82} opacity={0.56} intro/>
    <Header />
    <div className="hero-content shell">
      <div className="eyebrow"><i/> 信息流广告投放 · 效果增长</div>
      <h1 className="hero-tech-title" aria-label="让每一次投放，更接近增长。">
        <span className="hero-tech-line"><TechText text="让每一次投放" fontWeight={600} fontSize={138} letterSpacing={-0.075} align="left" color="#e9e7df" accentColor="#d4ed72" reveal="letter" specks={12} selection={false} labels={false} draggable={false} clickKick={false} intro="type" introDuration={1.3} guides={false}/></span>
        <span className="hero-tech-line hero-tech-line-accent"><TechText text="更接近增长。" fontWeight={600} fontSize={138} letterSpacing={-0.075} align="left" color="#d4ed72" accentColor="#d4ed72" reveal="letter" specks={12} selection={false} labels={false} draggable={false} clickKick={false} intro="type" introDuration={1.3} guides={false}/></span>
      </h1>
      <p className="hero-intro">用数据找到方向，用创意打开转化。<br/>专注信息流投放、用户增长与投产效率。</p>
      <div className="hero-actions"><a href="#work" className="button button-light">浏览作品 <ArrowDown size={16}/></a><a href="#contactInfo" className="text-link">查看联系方式 <ArrowUpRight size={16}/></a></div>
      <div className="hero-foot"><span><span className="play-dot"><Play size={10} fill="currentColor"/></span> 广告投放实录</span><span>向下浏览 <ArrowDown size={13}/></span></div>
    </div>
    <div className="hero-index"><span>01</span><i/>07</div>
  </section>
}

function About() {
  return <section className="about section-pad" id="about"><div className="shell">
    <div className="section-head"><div><p className="kicker">01 / 关于我</p><h2>让数字背后，<br/><span>有清晰的增长逻辑。</span></h2></div><p className="section-note">不只盯着消耗和点击，<br/>更在意每一笔预算如何走向真实结果。</p></div>
    <div className="profile-grid">
      <div className="portrait-wrap"><img src="/assets/profile-photo.jpg" alt="冯山峻在户外的照片"/><div className="portrait-stamp"><span>投放方向</span><b>信息流广告<span className="stamp-dot">。</span></b></div><div className="portrait-caption"><span>求职简历 / 2026</span><span>冯山峻</span></div></div>
      <div className="profile-content"><div className="profile-name"><div><span className="kicker">你好，我是</span><h3>冯山峻</h3></div><span className="availability"><i/> 求职方向 · 海外广告投放</span></div>
        <p className="bio">信息流优化师，求职方向为海外广告投放。拥有教育、电商与游戏等场景的效果广告实践，擅长从人群洞察、账户搭建、创意测试到转化回传，搭建能持续优化的增长闭环。</p>
        <p className="bio bio-muted">毕业于南京农业大学电子商务专业。做事习惯从业务目标出发，让数据说清问题，再用快速测试验证解法。</p>
        <div className="profile-contact"><a href="tel:18061205137"><span>电话</span>180 6120 5137 <ArrowUpRight size={14}/></a><a href="mailto:1970139675@qq.com"><span>邮箱</span>1970139675@qq.com <ArrowUpRight size={14}/></a></div>
        <div className="stat-row"><div><strong>30<span>W+</span></strong><small>巨量投放累计消耗</small></div><div><strong>5.5<span>×</span></strong><small>腾讯广告渠道投入产出比</small></div><div><strong>−40<span>%</span></strong><small>接口回传后线索成本</small></div></div>
        <div className="education"><span>教育经历</span><b>南京农业大学</b><span className="edu-badge">211 · 双一流</span><span>电子商务 · 本科</span><span>2022 — 2026</span></div>
      </div>
    </div>
  </div></section>
}

function Experience() {
  return <section className="experience section-pad" id="experience"><div className="shell">
    <div className="section-head"><div><p className="kicker">02 / 工作经历</p><h2>在不同投放场景里，<br/><span>把方法变成结果。</span></h2></div><p className="section-note">从游戏、应用到线索，<br/>每段经历都有清晰的目标、动作与复盘。</p></div>
    <article className="company-block company-new-oriental"><div className="company-heading"><div><span className="company-index">01 / 全职经历</span><h3>新东方科技教育集团</h3><p>信息流优化师 <i>·</i> 巨量本地推 / 巨量广告 / 腾讯广告 / 搜索推广</p></div><span className="company-date">2026.03 — 2026.10.18</span></div>
      <div className="company-highlight"><div><span>新东方 / 教育线索增长</span><p>从 0 到 1 搭建教育线索投放与回传链路，围绕「人群 × 素材 × 转化质量」迭代账户，持续关注消耗和最终现金产出。</p></div><div className="company-kpis"><div><b>30W+</b><small>巨量累计消耗</small></div><div><b>90W+</b><small>巨量现金产出</small></div><div><b>≈3.5</b><small>巨量投入产出比</small></div><div><b>15W+</b><small>腾讯累计消耗</small></div><div><b>80W</b><small>腾讯现金产出</small></div><div><b>≈5.5</b><small>腾讯投入产出比</small></div><div><b>全国第 1</b><small>腾讯渠道两月表现</small></div></div></div>
      <div className="responsibility-grid">
        <article><span>01 / 巨量本地推 · 巨量广告</span><h4>从账户搭建到投放优化</h4><p>覆盖通投、搜索和深度转化基建。按计划与素材观察消耗、千次展示成本、点击率、点击成本、转化率、转化数、转化成本；结合地域、年龄、性别和兴趣，定向江苏 18–22 岁学生与 40–55 岁家长。6 个月平均转化成本约 200，组内最低。</p></article>
        <article><span>02 / 腾讯广告</span><h4>视频号渠道破冰</h4><p>搭建转化归因、落地页和计划，使用广告助手提高基建效率；聚焦 36–55 岁家长，以大字报和数字人为主力素材，用痛点钩子及「一键取号 + 互动问答」落地页做对照测试。接手该中心后，两个月现金产出与投入产出比达条线全国第一。</p></article>
        <article><span>03 / 接口回传上报</span><h4>把深度转化信号回传给账户</h4><p>通过抖音来客接口拉取线索，跟进并标记深度转化或无效事件，再及时回传，推动账户按更接近业务结果的信号学习；线索成本从 200+ 降至 120，降幅约 40%。</p></article>
        <article><span>04 / 素材库构建</span><h4>建立可检索、可复用的素材标签</h4><p>视频按痛点、创意、开门见山等钩子分类，再标记真人口播、数字人、混剪、探店、大字报等内容类型；图文按信任、创意、开门见山分类。每日回传素材转化与回收数据，筛选高投入产出比类型并复刻储备。</p></article>
        <article><span>05 / 素材脚本产出</span><h4>让创意直接服务转化</h4><p>深挖目标人群痛点，以焦虑痛点型钩子写视频脚本并协同素材制作，多款素材转化率达 3.5%+、转化成本 120，优于优秀值约 30%。使用人工智能作图工具复刻爆款图文，单素材转化 100+，点击率、转化率约 3.5%，转化成本 140，优于优秀值约 20%。</p></article>
        <article><span>06 / 实时投入产出预测模型</span><h4>用资源质量估算签约回收</h4><p>参考游戏投放方法，建立四维加权资源质量指数；以当日指数相对历史基准计算质量系数，估算签约金额和实时投入产出比，帮助判断放量。<a href="#roi-model">查看模型构建流程 <ArrowRight size={13}/></a></p></article>
        <article><span>07 / 搜索词优化</span><h4>从搜索意图优化词包</h4><p>分析搜索词与关键词匹配，增加无效搜索否词并调整匹配方式；搜索计划点击率提升至 2.5%+、转化率达 2%+、转化成本降至 167，达到总部优秀值。</p></article>
      </div>
    </article>
    <article className="company-block company-bluefocus"><div className="company-heading"><div><span className="company-index">02 / 实习经历</span><h3>蓝色光标数据科技集团</h3><p>信息流优化实习生 <i>·</i> 电商投放 / 游戏买量 / 应用增长</p></div><span className="company-date">2026.02 — 2026.03.18</span></div>
      <div className="bluefocus-grid"><article><span>01 / 电商投放</span><h4>搭好投放前的数据链路</h4><p>配置广告转化跟踪，部署曝光与点击监测链接，搭建原生锚点并启动实时竞价策略，确保账户上线前数据完整、可追踪。</p><div className="skill-pills"><span>归因跟踪</span><span>曝光 / 点击监测</span><span>实时竞价</span></div></article><article><span>02 / 游戏买量</span><h4>参与游戏账户基建与素材赛马</h4><p>参与《超自然行动》（腾讯渠道）、《我的花园世界》（星广联投）账户基建；用一键起量辅助冷启动，按消耗和转化筛选素材，通过创量平台批量导入素材与落地页，组合「跑量素材 + 高潜素材」持续迭代。</p><div className="skill-pills"><span>冷启动</span><span>创量平台</span><span>素材赛马</span></div></article><article><span>03 / 应用增长与文案</span><h4>用时段与文案提升用户增长</h4><p>优化分时段抢量和素材配置，支付宝拉新转化率从 3.5% 提升到 7%。重构红果短剧文案，以钩子、网感和利益前置提升点击率（2.7% → 3%）；30 天平均次留率从 35% 提升到 40%。</p><div className="skill-pills"><span>支付宝 +3.5 个百分点</span><span>点击率 +0.3 个百分点</span><span>30 日次留 +5 个百分点</span></div></article></div>
    </article>
  </div></section>
}

function Projects() {
  return <section className="projects section-pad" id="work"><div className="shell">
    <div className="section-head"><div><p className="kicker">03 / 精选作品</p><h2>先让用户觉得，<br/><span>“这说的就是我”。</span></h2></div><p className="section-note">真实投放素材与爆款复刻拆解。<br/>展示脚本如何抓住痛点、建立信任并推动行动。</p></div>
    <div className="creative-section-label"><div><span>视频脚本</span><b>视频脚本产出</b></div><small>精选 03 条 <i/> 针对不同用户顾虑</small></div>
    <div className="creative-video-grid">{videoCreatives.map(v=><article className="creative-video-card" key={v.no}><div className="creative-video-shell"><video controls playsInline preload="metadata" src={`/assets/creatives/${v.file}`} aria-label={v.title}/><span className="creative-video-no">视频 / {v.no}</span></div><div className="creative-copy"><div className="creative-hook">{v.hook}</div><h3>{v.title}</h3><div className="creative-beats"><p><b>开头</b>{v.opening}</p><p><b>中段</b>{v.middle}</p><p><b>结尾</b>{v.ending}</p></div></div></article>)}</div>
    <div className="creative-section-label image-section-label"><div><span>图文素材复刻</span><b>图文爆款复刻</b></div><small>精选 02 张 <i/> 信任感 × 支付意愿</small></div>
    <div className="creative-image-grid">{imageCreatives.map(img=><article className="creative-image-card" key={img.no}><div className="creative-image-art"><img src={`/assets/creatives/${img.file}`} alt={img.title} loading="lazy"/></div><div className="creative-image-copy"><span>{img.label}</span><h3>{img.title}</h3><p>{img.desc}</p></div></article>)}</div>
    <div className="creative-foot"><span>创意思路 / 钩子 → 卖点 → 行动引导</span><span>素材由本人策划、撰写或复刻</span></div>
  </div></section>
}

function Methodology() {
  return <section className="methodology section-pad" id="methodology"><div className="shell">
    <div className="section-head"><div><p className="kicker">04 / 投放方法论</p><h2>从目标、素材到节奏，<br/><span>建立可复用的投放判断。</span></h2></div><p className="section-note">基于线索、应用与游戏投放实践整理。<br/>方法要结合账户阶段和真实数据持续验证。</p></div>
    <div className="method-grid">
      <article className="method-card method-featured"><span className="method-index">01 / 优化目标</span><h3>先浅后深，<br/>让模型逐步学会转化。</h3><p>前期转化数据量不足时，先用浅层目标快速积累信号、度过冷启动；账户和模型积累足够数据后，再切换到深层目标，优化投入产出比与后端回收。</p><div className="method-flow"><b>浅层目标</b><i>→</i><b>积累信号</b><i>→</i><b>深层目标</b></div></article>
      <article className="method-card"><span className="method-index">02 / 定向策略</span><h3>宽定向为主，<br/>让素材筛选人群。</h3><p>海内外投放中，宽定向是常见打法。减少过细的人群限制，把识别需求、表达利益点的任务交给素材，让创意自然吸引并筛选目标人群。</p><div className="method-tags"><span>宽定向</span><span>素材即定向</span><span>创意筛选</span></div></article>
      <article className="method-card"><span className="method-index">03 / 冷启动策略</span><h3>给足测试条件，<br/>先跑出有效信号。</h3><p>准备充足预算，采用最大转化；或以高于历史出价约 10% 的稳定成本起步。配合宽定向与经过验证的跑量素材，为计划留出学习空间。</p><div className="method-tags"><span>充足预算</span><span>稳定成本</span><span>已验证素材</span></div></article>
      <article className="method-card method-timing"><span className="method-index">04 / 建计划时机</span><h3>关注流量大盘，<br/>把握测试窗口。</h3><p>我的实操观察是：流量供给充足时新建计划，起量机会通常好于大盘收缩时。午夜 12 点广告计划的千次展示收益重置后，可选择半小时或一小时短时投放，提前积累消耗数据；具体效果以账户数据验证。</p><div className="method-callout"><b>30–60 分钟</b><span>短时观察窗口</span></div></article>
      <article className="method-card"><span className="method-index">05 / 素材拆解</span><h3>钩子、卖点、<br/>行动引导，层层承接。</h3><p>无论赛道和版位，先明确开头如何抓住注意力，中段如何讲清产品价值，结尾如何推动下一步行动。再通过数据验证每一段对转化的贡献。</p><div className="method-flow"><b>钩子</b><i>+</i><b>卖点</b><i>+</i><b>行动引导</b></div></article>
      <article className="method-card"><span className="method-index">06 / 测试频率</span><h3>计划有概率，<br/>稳定测试才有机会。</h3><p>新建计划像抽卡一样存在概率波动，单条计划的结果难以保证。维持合理、持续的基线新建频率，再结合预算、素材与数据淘汰机制，提高捕捉起量机会的可能性。</p><div className="method-tags"><span>持续测试</span><span>基线频率</span><span>数据复盘</span></div></article>
    </div>
    <div className="method-note"><span>方法论提示</span><p>以上策略是个人投放经验总结。出价、预算、时段和目标选择需结合平台规则、转化质量与实际账户表现灵活调整。</p></div>
  </div></section>
}

function ROIModel() {
  const dimensions = [
    { name: '留资信息完整度', weight: '25%', levels: '完整信息 1.0 / 缺年级或城市 0.6 / 仅电话 0.3' },
    { name: '素材诉求一致性', weight: '30%', levels: '咨询内容对应素材卖点 1.0 / 部分相关 0.5 / 不相关 0.1' },
    { name: '意向强度', weight: '25%', levels: '主动咨询课程或价格 1.0 / 泛泛了解 0.5 / 无意向 0.2' },
    { name: '可触达性', weight: '20%', levels: '接通且本人 1.0 / 接通非本人 0.5 / 未接通 0.1' },
  ];
  const steps = [
    ['01', '打通回传链路', '通过接口拉取线索，跟进后标记深度转化或无效事件，并及时回传账户。'],
    ['02', '计算资源质量分', '四项维度分数分别乘以权重后求和，形成单条资源质量分；当日资源均分作为批次质量指数。'],
    ['03', '计算批次质量系数', '当日批次质量指数除以历史基准指数得到质量系数，上限设为 1.3，降低小样本波动。'],
    ['04', '预测签约与回收', '用质量系数修正历史签约率，再结合资源数、近七日工单率和历史单均金额估算签约金额。'],
    ['05', '按周复盘校准', '将预测与真实签约结果对照，按质量分档统计签约率，复核评分标准和维度权重。'],
  ];
  return <section className="roi-model section-pad" id="roi-model"><div className="shell">
    <div className="section-head"><div><p className="kicker">05 / 实时投入产出预测模型</p><h2>让线索质量，<br/><span>更早进入投放决策。</span></h2></div><p className="section-note">从游戏买量的回收思路出发，<br/>用实时资源信号估算滞后的签约价值。</p></div>
    <div className="roi-compare"><article><span>游戏投放</span><h3>观察用户回收曲线</h3><p>结合获客成本、留存、展示千次收益和首日到七日投入产出比，持续判断用户价值。广告变现型产品更关注短周期回收，内购型产品也要看中长期留存与付费。</p></article><div className="roi-compare-arrow"><ArrowRight size={18}/></div><article className="roi-compare-lead"><span>线索投放</span><h3>估算资源到签约的链路</h3><p>线索数量较快可见，工单率约三天可观察，签约率通常滞后一至两周。只看线索成本不足以判断最终回收，因此增加资源质量评分，提前估算现金产出。</p></article></div>
    <div className="roi-model-body"><div className="roi-score-panel"><div className="roi-panel-head"><div><span>第一步 / 资源质量评分</span><h3>四项信号，加权形成单条质量分</h3></div><p>维度得分 × 对应权重后求和，再取当日计划资源均值。</p></div><div className="roi-score-table"><div className="roi-score-row roi-score-header"><b>评分维度</b><b>权重</b><b>高 / 中 / 低档参考</b></div>{dimensions.map(d=><div className="roi-score-row" key={d.name}><b>{d.name}</b><span>{d.weight}</span><p>{d.levels}</p></div>)}</div></div>
      <div className="roi-formulas"><div><span>批次质量系数</span><code>当日质量指数 ÷ 历史基准指数</code><small>系数上限 1.3，用于控制小样本高估。</small></div><div><span>预测签约率</span><code>历史基准签约率 × 质量系数</code><small>以批次资源质量修正历史签约表现。</small></div><div><span>预测签约金额</span><code>资源数 × 近七日工单率 × 预测签约率 × 历史单均金额</code><small>再以预测签约金额 ÷ 当日消耗，估算实时投入产出比。</small></div></div>
    </div>
    <div className="roi-steps"><div className="roi-steps-title"><span>模型构建流程</span><p>模型用于预算与放量判断，真实签约回收继续回传复盘。</p></div><div className="roi-steps-grid">{steps.map(([n,title,desc])=><article key={n}><span>{n}</span><h4>{title}</h4><p>{desc}</p></article>)}</div></div>
  </div></section>
}

function Strengths() {
  return <section className="strengths section-pad" id="strengths"><div className="shell"><div className="section-head"><div><p className="kicker">06 / 个人优势</p><h2>增长不靠猜，<br/><span>靠一套好方法。</span></h2></div><p className="section-note">策略、创意、数据与工具协同。<br/>把每次优化变成下一次增长的起点。</p></div>
    <div className="strength-grid">{strengths.map(({icon:Icon,id,title,text,tags})=><article className="strength-card" key={id}><div className="strength-top"><span>{id} / 04</span><Icon size={22} strokeWidth={1.4}/></div><h3>{title}</h3><p>{text}</p><div className="strength-tag">{tags}</div></article>)}</div>
    <div className="capability-band"><div className="capability-label"><Sparkles size={17}/><span>投放渠道经验</span></div><div className="channel-list"><span>巨量引擎</span><span>腾讯广告</span><span>巨量本地推</span><span>搜索推广</span><span>应用增长</span><span>游戏买量</span></div><span className="band-index">国内 / 海外</span></div>
  </div></section>
}

function Contact() {
  return <footer className="contact" id="contact"><div className="contact-orbit orbit-one"/><div className="contact-orbit orbit-two"/><div className="shell contact-shell"><div className="contact-top"><a className="brand" href="#top"><span className="brand-mark">冯</span><span>冯山峻<small>国内信息流投放经验</small></span></a><span className="kicker">07 / 联系方式</span></div><div className="contact-main"><p className="kicker">求职意向 · 海外广告投放</p><h2>期待加入团队，<br/><span>一起创造增长。</span></h2><a className="contact-button" href="#contactInfo">查看手机号与邮箱 <ArrowUpRight size={19}/></a></div><div className="contact-channel-bar" id="contactInfo"><div><span>手机号</span><a href="tel:18061205137">180 6120 5137</a></div><div><span>电子邮箱</span><a href="mailto:1970139675@qq.com">1970139675@qq.com</a></div><p>招聘联系，欢迎电话或邮件沟通。</p></div><div className="contact-bottom"><div><span>联系我</span><a href="mailto:1970139675@qq.com">1970139675@qq.com</a><a href="tel:18061205137">180 6120 5137</a></div><div className="contact-copy">© 2026 冯山峻<br/>求职简历 <ArrowUpRight size={13}/></div></div></div></footer>
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll([
      '.about h2, .about h3, .about p, .about .profile-contact, .about .stat-row, .about .education',
      '.experience h2, .experience h3, .experience h4, .experience p, .experience .company-index, .experience .company-date, .experience .company-highlight, .experience .skill-pills',
      '.projects h2, .projects h3, .projects p, .projects .creative-hook, .projects .creative-section-label, .projects .creative-foot',
      '.methodology h2, .methodology h3, .methodology p, .methodology .method-index, .methodology .method-flow, .methodology .method-tags, .methodology .method-callout, .methodology .method-note',
      '.roi-model h2, .roi-model h3, .roi-model h4, .roi-model p, .roi-model .roi-score-row, .roi-model .roi-formulas > div',
      '.strengths h2, .strengths h3, .strengths p, .strengths .strength-top, .strengths .strength-tag, .strengths .channel-list',
      '.contact .contact-main > *, .contact-channel-bar > *, .contact-bottom > *'
    ].join(', '));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(node => node.classList.add('scroll-text-visible'));
      return undefined;
    }
    targets.forEach((node, index) => {
      node.classList.add('scroll-text-reveal');
      node.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('scroll-text-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <><Hero/><About/><Experience/><Projects/><Methodology/><ROIModel/><Strengths/><Contact/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
