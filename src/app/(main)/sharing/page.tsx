import styles from "../shared-css.module.css";
export default function SharingPage() {
  return (
    <main className="main-area">
      <article className="flow">
        <h1 className={styles.heading}>分享</h1>
        <p>这里记录着我喜欢的事物，作为生活的一个剪影~</p>
        <dl>
          <dt className="fw-bold">歌</dt>
          <dd className="push-down">
            近几年我听的最多的是香港乐队 my little
            airport，同时也经常听其他粤语歌和 K-pop
          </dd>
          <dt className="fw-bold">阅读</dt>
          <dd className="push-down">
            很久没看书了，最近重新拾起阅读的习惯，开始看
            「苏菲的世界」。读完后最受震撼的书是「百年孤单」
          </dd>
          <dt className="fw-bold">电影</dt>
          <dd className="push-down">
            最近也没啥闲心看电影，不过前一阵有去看「蓦然回首」，还不错。喜欢的类型是剧情片
          </dd>
          <dt className="fw-bold">动漫</dt>
          <dd className="push-down">
            好久没开新坑了，最喜欢的是「EVA」，喜欢明日香。最近看完的动漫是「MyGO!!!!!」
          </dd>
          <dt className="fw-bold">剧</dt>
          <dd className="push-down">
            看的剧算少，不过会看韩剧，同样也好久没看新的电视剧了
          </dd>
          <dt className="fw-bold">运动</dt>
          <dd className="push-down">
            年轻的时候喜欢打乒乓球，不过很多很多年没玩了，现在喜欢散步，不知道算不算运动
          </dd>
        </dl>
        <hr />
        <p>
          <i>最后更新：2024年11月</i>
        </p>
        <p>这个页面会不定期更新，记录我的新发现和改变~</p>
      </article>
    </main>
  );
}

export const metadata = {
  title: "我喜欢的",
};
