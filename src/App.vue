<template>
  <div class="home">
    <!-- Title -->
    <header class="home_header flex-between">
      <h1 style="width: 222px">
        <span style="font-size: 24px">Github：</span>
        <a-button type="link" href="https://github.com/alomy64" target="_blank"
          ><github-filled style="font-size: 30px" />alomy64</a-button
        >
      </h1>
      <p>You got a dream, you gotta protect it.</p>
    </header>
    <section class="home_songs flex-between">
      <!-- song -->
      <iframe
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        height="86"
        src="//music.163.com/outchain/player?type=2&id=27506733&auto=0&height=66"
        class="iframe_song"
      ></iframe>
      <span class="text-background-image my_love">J X Y</span>
      <iframe
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        height="86"
        src="//music.163.com/outchain/player?type=2&id=27646205&auto=0&height=66"
        class="iframe_song"
      ></iframe>
    </section>
    <!-- List -->
    <a-list item-layout="vertical" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #extra>
            <a :href="item.href" target="_blank"
              ><img
                :src="item.imgSrc"
                style="border-radius: 4px"
                class="github_img"
            /></a>
          </template>
          <a-list-item-meta>
            <template #title>
              <a :href="item.href" target="_blank" style="font-size: 20px">{{
                item.title
              }}</a>
            </template>
            <template #description>
              <p>{{ item.descriptionMain }}</p>
              <p>{{ item.descriptionOther }}</p>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { GithubFilled } from "@ant-design/icons-vue";

interface DataItem {
  title: string;
  descriptionMain: string;
  descriptionOther?: string;
  href: string;
  imgSrc: string;
}
const data: DataItem[] = [
  {
    title: "steadily-high",
    descriptionMain: "日日更，时时新，节节高",
    descriptionOther: "🐛 你要悄悄努力 然后惊艳所有人 🐉",
    href: "https://github.com/alomy64/steadily-high",
    imgSrc: "https://s2.loli.net/2022/05/03/kVZodG85e2hSjmX.png",
  },
  {
    title: "daily-sentence",
    descriptionMain: "每日一句，不止一句",
    descriptionOther: "👨‍💻👩‍💻 程序员怎么能只会敲代码呢 你说是吧 🤔",
    href: "https://github.com/alomy64/daily-sentence",
    imgSrc: "https://s2.loli.net/2022/05/03/KStDVld57NqZzBG.png",
  },
  {
    title: "mini-vue3",
    descriptionMain: "顾名思义",
    href: "https://github.com/alomy64/mini-vue3",
    imgSrc: "https://s2.loli.net/2022/05/03/VGEpw93N7ZadkYm.png",
  },
];
</script>

<style>
.home {
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  padding: 0 20px;
}
.home_header {
  padding: 0 10px;
}
.ant-list-split .ant-list-item {
  border-bottom: 2px solid #f0f0f0 !important;
}
.ant-list {
  padding: 0 10px !important;
}
.iframe_song {
  flex: 1;
}
.github_img {
  width: 100%;
  max-width: 300px;
}
.home_songs {
  margin-bottom: 20px;
}
.my_love {
  display: inline-block;
  width: 240px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 2px auto;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
/* 文字背景 */
.text-background-image {
  background-image: linear-gradient(
    90deg,
    rgb(255, 167, 69),
    rgb(254, 134, 159),
    rgb(239, 122, 200),
    rgb(160, 131, 237),
    rgb(67, 174, 255),
    rgb(160, 131, 237),
    rgb(239, 122, 200),
    rgb(254, 134, 159),
    rgb(255, 167, 69)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  cursor: pointer;
  animation: streamer 2s linear infinite;
}
/* 文字动画 */
@keyframes streamer {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
</style>
