"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3751],{5973:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(2784),r=a(6277),l=a(4103),c=a(328),s=a(211),u=a(3982),i=a(2861),m=a(4390);function o(e){var t=e.tags,a=(0,l.M)();return n.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},n.createElement(c.d,{title:a}),n.createElement(m.Z,{tag:"doc_tags_list"}),n.createElement(u.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,a),n.createElement(i.Z,{tags:t}))))))}},2321:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(2784),r=a(6277),l=a(9817);const c="tag_qE9H",s="tagRegular_aHXt",u="tagWithCount_UC8q";function i(e){var t=e.permalink,a=e.label,i=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,i?u:s)},a,i&&n.createElement("span",null,i))}},2861:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(2784),r=a(4103),l=a(2321);const c="tag_YYDp";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function u(e){var t=e.tags,a=(0,r.P)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}},4103:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>l});var n=a(1077),r=function(){return(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);