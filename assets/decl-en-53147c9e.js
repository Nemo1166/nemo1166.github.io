import{c,V as n,W as s,Y as e,a1 as i,Z as l,a5 as r,a3 as d,a4 as u,_ as p}from"./framework-87221942.js";const o=t=>(d("data-v-6af748af"),t=t(),u(),t),_={class:"hint-container info"},f=o(()=>e("p",{class:"hint-container-title"},"Declaration of works",-1)),h={key:0},g=o(()=>e("p",null,[e("strong",null,"AIGC")],-1)),y=o(()=>e("p",null,"Parts of this article (images/text/code) are generated by artificial intelligence (AI) technology. AI is only used to assist in the expression.",-1)),m=[g,y],v={key:1},S=o(()=>e("p",null,[e("strong",null,"Reprinted / Excerpted Content")],-1)),k={key:0},w={key:2},x=o(()=>e("p",null,[e("strong",null,"Incomplete works")],-1)),I={key:0},b=c({__name:"decl-en",props:{aigc:{type:String,default:null},incomp:{type:String,default:null},trans:{type:String,default:null},reprint:{type:String,default:null},from:{type:String,default:"Unknown"},author:{type:String,default:"Unknown"},src:{type:String,required:!0},license:{type:String,default:null}},setup(t){const a=t;return(C,E)=>(n(),s("div",_,[f,e("ul",null,[a.aigc?(n(),s("li",h,m)):i("v-if",!0),a.reprint?(n(),s("li",v,[S,e("p",null,[l("Some or all of the content in this article is from "+r(t.from),1),a.license?(n(),s("span",k,", published under a "+r(t.license)+" license",1)):i("v-if",!0),l(". The original article was written by "+r(t.author)+" and is subject to deletions/changes.",1)])])):i("v-if",!0),a.incomp?(n(),s("li",w,[x,e("p",null,[l("This page is under construction. Please sit and relax. "),a.trans?(n(),s("span",I,"However, an article written in another language is already available. You can switch languages if necessary.")):i("v-if",!0)])])):i("v-if",!0)])]))}});const A=p(b,[["__scopeId","data-v-6af748af"],["__file","decl-en.vue"]]);export{A as default};