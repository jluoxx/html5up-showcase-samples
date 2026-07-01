import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = decodeURIComponent(new URL('..', import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1');

const html5upComment = (name) => `<!--
	${name} by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
	Customized sample content for client showcase.
-->`;

const page = (title, bodyClass, cssPath, body, noscript = true) => `<!DOCTYPE HTML>
${html5upComment(title.split(' | ')[0])}
<html lang="zh-CN">
	<head>
		<title>${title}</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="${cssPath}" />
		${noscript ? `<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>` : ''}
	</head>
	<body class="${bodyClass}">
${body}
	</body>
</html>
`;

const massively = page('影像札记 | Massively 摄影博客样板', 'is-preload', 'assets/css/main.css', `
		<div id="wrapper" class="fade-in">
			<div id="intro">
				<h1>影像札记<br />城市摄影档案</h1>
				<p>适合摄影师、旅行博主、文案作者的图文作品主页。首屏大图、故事列表和联系入口已经按客户展示场景整理。</p>
				<ul class="actions">
					<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">继续</a></li>
				</ul>
			</div>
			<header id="header">
				<a href="../index.html" class="logo">样板合集</a>
			</header>
			<nav id="nav">
				<ul class="links">
					<li class="active"><a href="index.html">首页</a></li>
					<li><a href="#stories">精选故事</a></li>
					<li><a href="#footer">联系</a></li>
				</ul>
				<ul class="icons">
					<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon brands fa-weixin"><span class="label">WeChat</span></a></li>
					<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
				</ul>
			</nav>
			<div id="main">
				<article class="post featured">
					<header class="major">
						<span class="date">Portfolio Sample 01</span>
						<h2><a href="#">用镜头讲述<br />一座城市的节奏</a></h2>
						<p>为个人创作者准备的展示型主页：适合发布最新作品、拍摄计划、合作案例和媒体资料。</p>
					</header>
					<a href="#" class="image main"><img src="images/pic01.jpg" alt="城市摄影作品" /></a>
					<ul class="actions special">
						<li><a href="#stories" class="button large">查看作品</a></li>
					</ul>
				</article>
				<section class="posts" id="stories">
					<article>
						<header><span class="date">Travel</span><h2><a href="#">海边日落<br />拍摄手记</a></h2></header>
						<a href="#" class="image fit"><img src="images/pic02.jpg" alt="旅行影像" /></a>
						<p>适合展示一组摄影专题，可替换为客户自己的图集、文章链接或视频项目。</p>
					</article>
					<article>
						<header><span class="date">Brand</span><h2><a href="#">咖啡品牌<br />视觉企划</a></h2></header>
						<a href="#" class="image fit"><img src="images/pic03.jpg" alt="商业拍摄" /></a>
						<p>可包装成品牌拍摄案例页，展示客户、目标、成果与合作方式。</p>
					</article>
					<article>
						<header><span class="date">Vlog</span><h2><a href="#">一周生活<br />影像日记</a></h2></header>
						<a href="#" class="image fit"><img src="images/pic04.jpg" alt="生活记录" /></a>
						<p>适合短视频博主、生活方式创作者，把内容栏目化、系列化。</p>
					</article>
					<article>
						<header><span class="date">About</span><h2><a href="#">合作范围<br />与报价入口</a></h2></header>
						<a href="#" class="image fit"><img src="images/pic05.jpg" alt="合作介绍" /></a>
						<p>可替换成合作流程、档期说明、邮箱、微信二维码和社交媒体链接。</p>
					</article>
				</section>
			</div>
			<footer id="footer">
				<section>
					<h2>适用客户</h2>
					<p>摄影师、旅行博主、设计师、文案作者、个人品牌主理人。</p>
				</section>
				<section class="split contact">
					<section><h3>邮箱</h3><p><a href="#">hello@example.com</a></p></section>
					<section><h3>版权</h3><p>Design: <a href="https://html5up.net">HTML5 UP</a></p></section>
				</section>
			</footer>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
`);

const dimension = page('林知微 | Dimension 高级名片样板', 'is-preload', 'assets/css/main.css', `
		<div id="wrapper">
			<header id="header">
				<div class="logo"><span class="icon fa-gem"></span></div>
				<div class="content">
					<div class="inner">
						<h1>林知微</h1>
						<p>品牌顾问 / 自由策划人 / 个人咨询主页样板<br />适合做高级感强的一页式名片。</p>
					</div>
				</div>
				<nav>
					<ul>
						<li><a href="#intro">简介</a></li>
						<li><a href="#work">服务</a></li>
						<li><a href="#about">案例</a></li>
						<li><a href="#contact">联系</a></li>
					</ul>
				</nav>
			</header>
			<div id="main">
				<article id="intro">
					<h2 class="major">简介</h2>
					<span class="image main"><img src="images/pic01.jpg" alt="个人简介" /></span>
					<p>这个样板适合自由职业者、咨询师、讲师、律师、心理咨询师等需要“简洁但显贵”的个人主页。</p>
					<p>客户资料可替换为：头像、职业定位、服务说明、过往经历、媒体露出和预约入口。</p>
				</article>
				<article id="work">
					<h2 class="major">服务</h2>
					<span class="image main"><img src="images/pic02.jpg" alt="服务介绍" /></span>
					<p>品牌定位诊断、内容策略、个人 IP 主页搭建、商业提案优化。</p>
					<p>页面结构短而集中，适合客户只需要一个体面入口，而不是完整企业官网。</p>
				</article>
				<article id="about">
					<h2 class="major">案例</h2>
					<span class="image main"><img src="images/pic03.jpg" alt="案例展示" /></span>
					<p>示例：帮助独立摄影师梳理作品集结构；帮助咨询师重写服务介绍；帮助小型团队整理官网首屏文案。</p>
				</article>
				<article id="contact">
					<h2 class="major">联系</h2>
					<form method="post" action="#">
						<div class="fields">
							<div class="field half"><label for="name">姓名</label><input type="text" name="name" id="name" /></div>
							<div class="field half"><label for="email">邮箱</label><input type="text" name="email" id="email" /></div>
							<div class="field"><label for="message">需求</label><textarea name="message" id="message" rows="4"></textarea></div>
						</div>
						<ul class="actions"><li><input type="submit" value="发送需求" class="primary" /></li><li><input type="reset" value="重置" /></li></ul>
					</form>
					<ul class="icons">
						<li><a href="#" class="icon brands fa-weixin"><span class="label">WeChat</span></a></li>
						<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
					</ul>
				</article>
			</div>
			<footer id="footer"><p class="copyright"><a href="../index.html">返回样板合集</a> | Design: <a href="https://html5up.net">HTML5 UP</a>.</p></footer>
		</div>
		<div id="bg"></div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
`);

const forty = page('远山设计事务所 | Forty 案例网格样板', 'is-preload', 'assets/css/main.css', `
		<div id="wrapper">
			<header id="header" class="alt">
				<a href="../index.html" class="logo"><strong>远山设计</strong> <span>案例展示样板</span></a>
				<nav><a href="#menu">菜单</a></nav>
			</header>
			<nav id="menu">
				<ul class="links">
					<li><a href="index.html">首页</a></li>
					<li><a href="#one">案例</a></li>
					<li><a href="#two">流程</a></li>
					<li><a href="#contact">联系</a></li>
				</ul>
			</nav>
			<section id="banner" class="major">
				<div class="inner">
					<header class="major"><h1>把品牌项目做成可浏览的作品墙</h1></header>
					<div class="content">
						<p>适合设计工作室、摄影团队、品牌案例页。<br />用网格首屏快速展示多个项目方向。</p>
						<ul class="actions"><li><a href="#one" class="button next scrolly">查看案例</a></li></ul>
					</div>
				</div>
			</section>
			<div id="main">
				<section id="one" class="tiles">
					<article><span class="image"><img src="images/pic01.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">品牌视觉</a></h3><p>Logo / VI / 物料延展</p></header></article>
					<article><span class="image"><img src="images/pic02.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">空间摄影</a></h3><p>酒店 / 民宿 / 商业空间</p></header></article>
					<article><span class="image"><img src="images/pic03.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">产品包装</a></h3><p>食品 / 美妆 / 文创</p></header></article>
					<article><span class="image"><img src="images/pic04.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">网页设计</a></h3><p>品牌官网 / 活动页</p></header></article>
					<article><span class="image"><img src="images/pic05.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">内容企划</a></h3><p>小红书 / 视频脚本 / 图文</p></header></article>
					<article><span class="image"><img src="images/pic06.jpg" alt="" /></span><header class="major"><h3><a href="#" class="link">长期服务</a></h3><p>月度设计支持</p></header></article>
				</section>
				<section id="two">
					<div class="inner">
						<header class="major"><h2>适合展示“案例很多”的客户</h2></header>
						<p>这个样板视觉冲击强，适合把客户的 6-12 个代表案例直接铺开。后续可以把每个格子链接到详细案例页。</p>
						<ul class="actions"><li><a href="#contact" class="button next">咨询定制</a></li></ul>
					</div>
				</section>
			</div>
			<section id="contact">
				<div class="inner">
					<section><form method="post" action="#"><div class="fields"><div class="field half"><label for="name">姓名</label><input type="text" name="name" id="name" /></div><div class="field half"><label for="email">邮箱</label><input type="text" name="email" id="email" /></div><div class="field"><label for="message">项目需求</label><textarea name="message" id="message" rows="5"></textarea></div></div><ul class="actions"><li><input type="submit" value="发送" class="primary" /></li></ul></form></section>
					<section class="split"><section><div class="contact-method"><span class="icon solid alt fa-home"></span><h3>用途</h3><span>设计师 / 工作室 / 摄影团队</span></div></section><section><div class="contact-method"><span class="icon solid alt fa-envelope"></span><h3>邮箱</h3><a href="#">studio@example.com</a></div></section></section>
				</div>
			</section>
			<footer id="footer"><div class="inner"><ul class="copyright"><li><a href="../index.html">返回样板合集</a></li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul></div></footer>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
`);

const phantom = page('创作案例库 | Phantom 多项目作品集样板', 'is-preload', 'assets/css/main.css', `
		<div id="wrapper">
			<header id="header"><div class="inner"><a href="../index.html" class="logo"><span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">创作案例库</span></a><nav><ul><li><a href="#menu">菜单</a></li></ul></nav></div></header>
			<nav id="menu"><h2>菜单</h2><ul><li><a href="../index.html">样板合集</a></li><li><a href="#projects">案例</a></li><li><a href="#footer">联系</a></li></ul></nav>
			<div id="main">
				<div class="inner">
					<header>
						<h1>适合把多个项目做成<br />可点击作品集的主页。</h1>
						<p>这个样板适合 UI/UX 设计师、网页设计师、插画师、产品摄影师，把案例按行业、客户或服务类型整理成网格。</p>
					</header>
					<section class="tiles" id="projects">
						<article class="style1"><span class="image"><img src="images/pic01.jpg" alt="" /></span><a href="#"><h2>品牌官网</h2><div class="content"><p>企业介绍页、服务页、招聘页整套视觉。</p></div></a></article>
						<article class="style2"><span class="image"><img src="images/pic02.jpg" alt="" /></span><a href="#"><h2>个人名片</h2><div class="content"><p>顾问、讲师、自由职业者的一页式主页。</p></div></a></article>
						<article class="style3"><span class="image"><img src="images/pic03.jpg" alt="" /></span><a href="#"><h2>摄影作品</h2><div class="content"><p>图集、专题、拍摄服务介绍。</p></div></a></article>
						<article class="style4"><span class="image"><img src="images/pic04.jpg" alt="" /></span><a href="#"><h2>活动落地页</h2><div class="content"><p>课程、展览、线下活动报名介绍。</p></div></a></article>
						<article class="style5"><span class="image"><img src="images/pic05.jpg" alt="" /></span><a href="#"><h2>产品展示</h2><div class="content"><p>实物产品、软件产品、服务套餐。</p></div></a></article>
						<article class="style6"><span class="image"><img src="images/pic06.jpg" alt="" /></span><a href="#"><h2>内容矩阵</h2><div class="content"><p>博客、视频、社交账号入口聚合。</p></div></a></article>
					</section>
				</div>
			</div>
			<footer id="footer"><div class="inner"><section><h2>适用客户</h2><p>设计师、插画师、摄影师、网页设计服务商、内容创作者。</p></section><section><h2>联系</h2><ul class="icons"><li><a href="#" class="icon brands style2 fa-weixin"><span class="label">WeChat</span></a></li><li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li></ul></section><ul class="copyright"><li><a href="../index.html">返回样板合集</a></li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul></div></footer>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
`);

const hyperspace = page('青禾数字工作室 | Hyperspace 服务型主页样板', 'is-preload', 'assets/css/main.css', `
		<section id="sidebar"><div class="inner"><nav><ul><li><a href="#intro">首页</a></li><li><a href="#one">服务</a></li><li><a href="#two">优势</a></li><li><a href="#three">联系</a></li></ul></nav></div></section>
		<div id="wrapper">
			<section id="intro" class="wrapper style1 fullscreen fade-up">
				<div class="inner">
					<h1>青禾数字工作室</h1>
					<p>为个人品牌和小型团队搭建静态官网、作品集和活动页。<br />适合程序员、自由职业者、小工作室、轻量 SaaS 服务介绍。</p>
					<ul class="actions"><li><a href="#one" class="button scrolly">查看服务</a></li></ul>
				</div>
			</section>
			<section id="one" class="wrapper style2 spotlights">
				<section><a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a><div class="content"><div class="inner"><h2>个人主页搭建</h2><p>从模板选择、内容整理、GitHub 上传到 Cloudflare Pages 发布，一次交付可访问网址。</p></div></div></section>
				<section><a href="#" class="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a><div class="content"><div class="inner"><h2>作品集包装</h2><p>把客户的项目、照片、文章或服务整理成清晰的栏目，让访问者快速理解价值。</p></div></div></section>
				<section><a href="#" class="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a><div class="content"><div class="inner"><h2>域名与部署</h2><p>支持 pages.dev 免费网址，也可绑定客户自己的域名，适合长期展示。</p></div></div></section>
			</section>
			<section id="two" class="wrapper style3 fade-up">
				<div class="inner">
					<h2>为什么适合作为服务型官网</h2>
					<p>Hyperspace 的分区清晰，适合介绍服务、流程、报价范围、交付内容和联系方式。</p>
					<div class="features">
						<section><span class="icon solid major fa-code"></span><h3>静态部署</h3><p>无需服务器，适合低成本展示页。</p></section>
						<section><span class="icon solid major fa-lock"></span><h3>HTTPS</h3><p>Cloudflare Pages 自动提供安全访问。</p></section>
						<section><span class="icon solid major fa-cog"></span><h3>易维护</h3><p>后续修改文字和图片后自动部署。</p></section>
						<section><span class="icon solid major fa-desktop"></span><h3>响应式</h3><p>手机和电脑都可浏览。</p></section>
					</div>
				</div>
			</section>
			<section id="three" class="wrapper style1 fade-up">
				<div class="inner">
					<h2>联系咨询</h2>
					<p>这里可以换成客户的邮箱、微信二维码、电话或预约链接。</p>
					<div class="split style1"><section><form method="post" action="#"><div class="fields"><div class="field half"><label for="name">姓名</label><input type="text" name="name" id="name" /></div><div class="field half"><label for="email">邮箱</label><input type="text" name="email" id="email" /></div><div class="field"><label for="message">需求</label><textarea name="message" id="message" rows="5"></textarea></div></div><ul class="actions"><li><a href="#" class="button submit">发送</a></li></ul></form></section><section><ul class="contact"><li><h3>邮箱</h3><a href="#">hello@example.com</a></li><li><h3>返回</h3><a href="../index.html">样板合集首页</a></li><li><h3>版权</h3><span>Design: HTML5 UP</span></li></ul></section></div>
				</div>
			</section>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
`);

const rootIndex = `<!DOCTYPE HTML>
<html lang="zh-CN">
	<head>
		<title>HTML5 UP 个人主页样板合集</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style>
			:root { color-scheme: light; --ink: #172026; --muted: #65727f; --line: #d8dee4; --paper: #f7f4ee; --accent: #0f766e; --accent2: #b45309; }
			* { box-sizing: border-box; }
			body { margin: 0; font-family: Arial, "Microsoft YaHei", sans-serif; color: var(--ink); background: var(--paper); }
			header { padding: 56px 6vw 28px; max-width: 1180px; margin: 0 auto; }
			h1 { margin: 0 0 14px; font-size: clamp(32px, 6vw, 64px); line-height: 1.05; letter-spacing: 0; }
			p { color: var(--muted); line-height: 1.7; }
			.grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; max-width: 1180px; margin: 0 auto; padding: 18px 6vw 64px; }
			.card { min-height: 360px; display: flex; flex-direction: column; justify-content: flex-end; padding: 22px; border: 1px solid var(--line); background: #fff; color: inherit; text-decoration: none; position: relative; overflow: hidden; }
			.card:before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(0,0,0,.48)), var(--bg); background-size: cover; background-position: center; transition: transform .28s ease; }
			.card:hover:before { transform: scale(1.04); }
			.card > * { position: relative; z-index: 1; color: #fff; text-shadow: 0 1px 16px rgba(0,0,0,.35); }
			.card small { font-weight: 700; text-transform: uppercase; opacity: .86; }
			.card h2 { margin: 10px 0 8px; font-size: 24px; letter-spacing: 0; }
			.card p { margin: 0; color: rgba(255,255,255,.88); }
			.note { max-width: 1180px; margin: 0 auto 46px; padding: 0 6vw; color: var(--muted); }
			.note strong { color: var(--ink); }
			footer { border-top: 1px solid var(--line); padding: 22px 6vw; color: var(--muted); max-width: 1180px; margin: 0 auto; }
			@media (max-width: 1080px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
			@media (max-width: 640px) { header { padding-top: 34px; } .grid { grid-template-columns: 1fr; } .card { min-height: 280px; } }
		</style>
	</head>
	<body>
		<header>
			<h1>HTML5 UP 个人主页样板合集</h1>
			<p>5 个可直接展示给客户看的静态网站样板，已按不同客户类型改成中文内容。每个样板都可独立复制、换文字图片后交付，并可通过 GitHub + Cloudflare Pages 发布。</p>
		</header>
		<main class="grid">
			<a class="card" href="massively/" style="--bg: url('massively/images/pic01.jpg')"><small>Massively</small><h2>摄影博客 / 图文作品集</h2><p>适合摄影师、旅行博主、文案作者。</p></a>
			<a class="card" href="dimension/" style="--bg: url('dimension/images/bg.jpg')"><small>Dimension</small><h2>高级个人名片页</h2><p>适合自由职业者、咨询师、讲师。</p></a>
			<a class="card" href="forty/" style="--bg: url('forty/images/pic01.jpg')"><small>Forty</small><h2>设计工作室案例墙</h2><p>适合品牌设计、摄影团队、案例展示。</p></a>
			<a class="card" href="phantom/" style="--bg: url('phantom/images/pic03.jpg')"><small>Phantom</small><h2>多项目作品集网格</h2><p>适合 UI/UX、插画、网页设计案例。</p></a>
			<a class="card" href="hyperspace/" style="--bg: url('hyperspace/images/pic02.jpg')"><small>Hyperspace</small><h2>服务型小型官网</h2><p>适合程序员、工作室、轻量服务介绍。</p></a>
		</main>
		<section class="note">
			<p><strong>商用注意：</strong>这些样板基于 HTML5 UP 模板定制，HTML5 UP 允许个人和商业使用，但需要保留设计署名。交付客户时建议保留页面底部 Design: HTML5 UP 或在说明文件里保留来源。</p>
		</section>
		<footer>Design base: <a href="https://html5up.net">HTML5 UP</a>. Customized showcase samples.</footer>
	</body>
</html>
`;

const readme = `# HTML5 UP 个人主页样板合集

包含 5 个可展示给客户的静态网页样板：

- Massively: 摄影博客 / 图文作品集
- Dimension: 高级个人名片页
- Forty: 设计工作室案例墙
- Phantom: 多项目作品集网格
- Hyperspace: 服务型小型官网

部署方式：GitHub 仓库 + Cloudflare Pages，Framework preset 选择 None，Build command 留空，Build output directory 填 /。

模板来源：HTML5 UP，许可为 CCA 3.0。交付或二次修改时请保留 HTML5 UP 署名。
`;

writeFileSync(join(root, 'massively', 'index.html'), massively, 'utf8');
writeFileSync(join(root, 'dimension', 'index.html'), dimension, 'utf8');
writeFileSync(join(root, 'forty', 'index.html'), forty, 'utf8');
writeFileSync(join(root, 'phantom', 'index.html'), phantom, 'utf8');
writeFileSync(join(root, 'hyperspace', 'index.html'), hyperspace, 'utf8');
writeFileSync(join(root, 'index.html'), rootIndex, 'utf8');
writeFileSync(join(root, 'README.md'), readme, 'utf8');
