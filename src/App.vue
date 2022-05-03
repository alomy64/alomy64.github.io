<template>
  <div class="home">
    <!-- Title -->
    <h1 class="home_title">
      Github：
      <a-button type="link" href="https://github.com/alomy64" target="_blank"
        ><github-filled style="font-size: 30px" />alomy64</a-button
      >
    </h1>
    <!-- List -->
    <a-list item-layout="vertical" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #extra>
            <a :href="item.href" target="_blank"
              ><img width="300" :src="item.imgSrc" style="border-radius: 4px"
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
  padding: 20px 20% 0;
}
.home_title {
  display: flex;
  align-items: center;
}
.ant-list-split .ant-list-item {
  border-bottom: 2px solid #f0f0f0 !important;
}
</style>
