import{c as r,V as n,W as o,X as t,a1 as i,Y as l,a2 as c,a3 as d,a4 as _,_ as u}from"./framework-8fd515d9.js";const s=e=>(d("data-v-541aa9c6"),e=e(),_(),e),p={class:"hint-container info"},f=s(()=>t("p",{class:"hint-container-title"},"Declaration of works",-1)),h={key:0},g=s(()=>t("p",null,[t("strong",null,"AIGC")],-1)),y=s(()=>t("p",null,"Parts of this article (images/text/code) are generated by artificial intelligence (AI) technology. AI is only used to assist in the expression.",-1)),m=[g,y],v={key:1},S=s(()=>t("p",null,[t("strong",null,"Reprinted / Excerpted Content")],-1)),k={key:0},x=r({__name:"decl-en",props:{aigc:{type:Boolean,default:!1},reprint:{type:Boolean,default:!1},from:{type:String,default:"Unknown"},author:{type:String,default:"Unknown"},src:{type:String,required:!0},license:{type:String,default:null}},setup(e){const a=e;return(I,w)=>(n(),o("div",p,[f,t("ul",null,[a.aigc?(n(),o("li",h,m)):i("v-if",!0),a.reprint?(n(),o("li",v,[S,t("p",null,[l("Some or all of the content in this article is from "+c(e.from),1),a.license?(n(),o("span",k,", published under a "+c(e.license)+" license",1)):i("v-if",!0),l(". The original article was written by "+c(e.author)+" and is subject to deletions/changes.",1)])])):i("v-if",!0)])]))}});const b=u(x,[["__scopeId","data-v-541aa9c6"],["__file","decl-en.vue"]]);export{b as default};
