import List from "./List";

const lists = ["WordPress", "React"];
const projects = [
  `Woocommerce 電商網站，自定義 Kadence 子主題
    網址: https://www.boyingli.com。
    github: https://github.com/Lijackie/kadence-child-theme。
    部屬在 DigitalOcean $5 Droplets，安裝 ufw 防火牆、fail2ban。
    使用 Cloudflare 代理，Ngnix 設定 WordPresss，let's encrypt SSL，crontab 自動備份資料庫、
    自動續約 SSL 證書、w3tc快取、redis快取。`,
  `Next.js 推特克隆
    網址: https://twitter-clone-lijackie.vercel.app
    github: https://github.com/Lijackie/Twitter-clone
    登入使用 Next-Auth、狀態管理使用 Recoil、CSS使用 TailwindCSS、後端使用 Firebase。`,
];
const school = ["高雄科技大學資訊工程系碩士"]

const Resume = () => {
  return (
    <div className="flex max-w-5xl p-8">
        <div>
            <List title="技能" lists={lists} />
            <List title="作品集" lists={projects} />
        </div>
        <div>
            <List title="學歷" lists={school} />
        </div>
    </div>
  );
};

export default Resume;
