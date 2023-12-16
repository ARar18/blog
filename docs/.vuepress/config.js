const navConfig =  require("./navConfig");
const sidebarConfig =  require("./sidebarConfig");
module.exports = {
    title: 'Nitrophorus\' blogs',
    description: 'VuePress_Insect',
    themeConfig: {
        theme:"@vuepress/theme-default",
        logo: "/logo.png",
        nav: navConfig,
        sidebar: sidebarConfig,
        sidebarDepth: 2,
        displayAllHeaders: true,
        activeHeaderLinks: false,
    },
    base: "/",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    host: "0.0.0.0",
    port: 80,
    temp: "/path/to/@vuepress/core/.temp",
    dest: ".vuepress/dist",
    markdown:{
        lineNumbers: true,
        anchor:{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
        toc: { includeLevel: [2,3] },

    }
};