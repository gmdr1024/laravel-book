import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laravel Book",
  description: "LaravelによるWebアプリケーション開発の手引き",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '入門',
        items: [
          { text: 'はじめに', link: '/introduction' }
        ]
      },
      {
        text: '環境構築',
        items: [
          { text: 'ツールインストール', link: '/tool-install' },
          { text: 'Laravelインストール', link: '/laravel-install' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gmdr1024/laravel-book' }
    ]
  }
})
