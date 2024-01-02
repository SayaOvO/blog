import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../globalTokens.stylex";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.h1)}>关于我</h1>
      <p>大家好，我是 Saya, 欢迎来到我的个人博客!</p>
      <p>
        目前我主要在学习前端相关知识，还比较初级，我会在这里分享我的感想，学到的技术以及发现的一些好玩的东西
      </p>
      <p>你可以通过其他网页侧边上的社交账号找我玩~</p>
      <section>
        <h2 {...stylex.props(styles.h2)}>项目</h2>
        <ul>
          <li>
            <span>
              <Link href="https://www.github.com/sayaovo/chat-with-you">
                Chat with you
              </Link>{" "}
              仿写了社交软件 discord，实现了其大部分功能，也就是说你可以通过创建
              Server 和 Channel 来和你的朋友们闲聊甚至视频聊天
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = stylex.create({
  h1: {
    fontSize: text.h4,
    fontWeight: 500,
    color: colors.title,
  },
  container: {
    padding: spacing.md,
  },
  h2: {
    fontSize: text.h5,
    color: colors.title,
  },
});
