const {getChildren} = require("./vuepress-sidebar-auto/vuepress-sidebar-auto");
let sidebar={};
sidebar={
    '/guide/': [
        {
            title: 'guide',
            collapsable: false,
            sidebarDepth: 2,
            children: getChildren('./docs','guide')
        }
    ],
    '/': ['']
};
module.exports = sidebar;