import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className="main-area">
      <article className="flow">
        <h1 className={styles.heading}>关于我</h1>
        <p>
          大家好，欢迎来到我的博客网站，我是
          Saya，本人主要以「来到你身边」这个暱称在网络上活动，很高兴在这里和你相遇!
        </p>
        <p>
          这个网站呢，是用 Next.js 写的。目前静态部署在 Cloudflare
          Page，虽然还在不断完善中，但我很享受这个折腾的过程。
        </p>
        <p>
          本人一直对前端很有兴趣，当然主要就是 React 了，还有就是我觉得 CSS
          很有趣，也超级难，只能说目前只懂皮毛 : )
          哦，对了，我还一直喜欢探索编辑器、操作系统，还有各种笔记软件。它们让我觉得很有趣。
        </p>
        <p>感谢你来到这里，也期待能和你产生更多的交集！</p>
      </article>
    </main>
  );
}

export const metadata = {
  title: "关于我",
};
