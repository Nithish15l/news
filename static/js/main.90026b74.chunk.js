(this.webpackJsonpalan_react=this.webpackJsonpalan_react||[]).push([[0],{101:function(e,a,t){e.exports=t(165)},106:function(e,a,t){},165:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),c=(t(106),t(33)),o=t(197),s=t(86),m=t.n(s),d=t(45),u=t.n(d),p=t(207),f=t(199),h=t(200),g=t(210),b=t(208),E=t(87),y=t.n(E),v=t(194),x=Object(v.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(5),top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none",overflow:"scroll",height:"60%"},infoContainer:{display:"flex",alignItems:"center",padding:"25px 0"},chipContainer:{display:"flex",flexWrap:"wrap",paddingLeft:"25px"},trySaying:{marginBottom:"25px"},chip:{margin:"5px"},form:{display:"flex",flexDirection:"column"}}})),w=function(e){var a,t=e.isOpen,n=e.setIsOpen,l=e.showFeedback,i=x();return a=t&&l?r.a.createElement("div",{className:i.paper},r.a.createElement(o.a,{variant:"h3"},"Something went wrong? Send us some feedback"),r.a.createElement("br",null),r.a.createElement("form",{className:i.form,onSubmit:function(e){e.preventDefault(),y.a.sendForm("gmail","alan_ai",e.target,"user_dhVImkgxaL27bxQ8pLPQ5").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement(p.a,{name:"name",label:"Your name",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(p.a,{name:"email",type:"email",label:"Your email",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(p.a,{name:"feedback",multiline:!0,rows:5,helperText:"Describe the problems that you've encontered.",label:"Feedback",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(f.a,{type:"submit",variant:"outlined",color:"primary"},"Send"))):r.a.createElement("div",{className:i.paper},r.a.createElement(o.a,{variant:"h3"},"Instructions"),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Categories"),r.a.createElement("div",{className:i.chipContainer},["Business","Entertainment","General","Health","Science","Sports","Technology"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},'Try saying: "Give me the latest ',r.a.createElement("strong",null,r.a.createElement("em",null,"Business")),' news"'),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Terms"),r.a.createElement("div",{className:i.chipContainer},["Donald Trump","Bitcoin","PlayStation 5","Smartphones"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})),r.a.createElement(g.a,{label:"...and more",className:i.chip}))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},"Try saying: \"What's up with ",r.a.createElement("strong",null,r.a.createElement("em",null,"PlayStation 5")),'"'),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Sources"),r.a.createElement("div",{className:i.chipContainer},["CNN","Wired","BBC News","Time","IGN","Buzzfeed","ABC News"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})),r.a.createElement(g.a,{label:"...and more",className:i.chip}))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},'Try saying: "Give me the news from ',r.a.createElement("strong",null,r.a.createElement("em",null,"CNN")),'"')),r.a.createElement(b.a,{open:t,onClose:function(){return n(!1)}},a)},N=t(209),C=t(206),j=t(201),S=t(202),O=t(203),k=t(204),T=t(205),B=t(92),A=t.n(B),I=Object(v.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),D=function(e){var a=e.article,t=a.description,l=a.publishedAt,i=a.source,s=a.title,m=a.url,d=a.urlToImage,u=e.activeArticle,p=e.i,h=I(),g=Object(n.useState)([]),b=Object(c.a)(g,2),E=b[0],y=b[1];return Object(n.useEffect)((function(){window.scroll(0,0),y((function(e){return Array(20).fill().map((function(a,t){return e[t]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;p===u&&E[u]&&(e=E[u],window.scroll(0,e.current.offsetTop-50))}),[p,u,E]),r.a.createElement(j.a,{ref:E[p],className:A()(h.card,u===p?h.activeCard:null)},r.a.createElement(S.a,{href:m,target:"_blank"},r.a.createElement(O.a,{className:h.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:s}),r.a.createElement("div",{className:h.details},r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(l).toDateString()),r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"h2"},i.name)),r.a.createElement(o.a,{className:h.title,gutterBottom:!0,variant:"h5",component:"h2"},s),r.a.createElement(k.a,null,r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"p"},t))),r.a.createElement(T.a,{className:h.cardActions},r.a.createElement(f.a,{size:"small",color:"primary",href:m},"Learn More"),r.a.createElement(o.a,{variant:"h5",color:"textSecondary",component:"h2"},p+1)))},G=Object(v.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),L=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],z=function(e){var a=e.articles,t=e.activeArticle,n=G();return a.length?r.a.createElement(N.a,{in:!0},r.a.createElement(C.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e,a){return r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},r.a.createElement(D,{activeArticle:t,i:a,article:e}))})))):r.a.createElement(N.a,{in:!0},r.a.createElement(C.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},L.map((function(e){return r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},r.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},r.a.createElement(o.a,{variant:"h5",component:"h5"},e.title),e.info?r.a.createElement(o.a,{variant:"h6",component:"h6"},r.a.createElement("strong",null,e.title.split(" ")[2]),": ",r.a.createElement("br",null),e.info):null,r.a.createElement(o.a,{variant:"h6",component:"h6"},"Try saying: ",r.a.createElement("br",null)," ",r.a.createElement("i",null,e.text))))}))))},P=t(34),_=Object(v.a)((function(e){return{footer:Object(P.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(P.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(P.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(P.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(P.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),W=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)([]),s=Object(c.a)(i,2),d=s[0],p=s[1],f=Object(n.useState)(!1),h=Object(c.a)(f,2),g=h[0],b=h[1],E=_();return Object(n.useEffect)((function(){u()({key:"8017a7f20d4709d629e43ffe33d951b22e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var a=e.command,t=e.articles,n=e.number;if("newHeadlines"===a)p(t),l(-1);else if("instructions"===a)b(!0);else if("highlight"===a)l((function(e){return e+1}));else if("open"===a){var r=n.length>2?m()(n,{fuzzy:!0}):n,i=t[r-1];r>20?u()().playText("Please try that again..."):i?(window.open(i.url,"_blank"),u()().playText("Opening...")):u()().playText("Please try that again...")}}})}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:E.logoContainer},d.length?r.a.createElement("div",{className:E.infoContainer},r.a.createElement("div",{className:E.card},r.a.createElement(o.a,{variant:"h5",component:"h2"},"Try saying: ",r.a.createElement("br",null),r.a.createElement("br",null),"Open article number [4]")),r.a.createElement("div",{className:E.card},r.a.createElement(o.a,{variant:"h5",component:"h2"},"Try saying: ",r.a.createElement("br",null),r.a.createElement("br",null),"Go back"))):null,r.a.createElement("img",{src:"https://i.pinimg.com/originals/ab/ab/84/abab8479cb6f3bd53219f46eeeb315e4.jpg",className:E.alanLogo,alt:"logo"})),r.a.createElement(z,{articles:d,activeArticle:t}),r.a.createElement(w,{isOpen:g,setIsOpen:b}),d.length?null:r.a.createElement("div",{className:E.footer},r.a.createElement(o.a,{variant:"body1",component:"h2"},"Created by",r.a.createElement("a",{className:E.link,href:"https://www.linkedin.com/in/nithish-lemburu/"}," Lemburu Nithish")," -")))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.90026b74.chunk.js.map