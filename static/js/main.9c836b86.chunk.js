(window.webpackJsonpform=window.webpackJsonpform||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),i=n.n(l),s=(n(14),n(3)),m=n(4),r=n(5),c=n(7),h=n(6),u=n(8),f=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(s.a)({},a,o))},e.handleClick=function(){var t=Math.floor(Math.random()*e.state.allMemeImgs.length);e.setState({randomImg:e.state.allMemeImgs[t].url})},e.increaseFont=function(){},e.state={font_size:"22",topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"render",value:function(){return console.log(this.state.font_size),o.a.createElement("div",null,o.a.createElement("div",{className:"meme-form"},o.a.createElement("input",{type:"text",name:"topText",placeholder:"top text",onChange:this.handleChange,value:this.state.topText}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bottomText",placeholder:"bottom text",onChange:this.handleChange,value:this.state.bottomText}),o.a.createElement("br",null),o.a.createElement("input",{type:"number",name:"font_size",placeholder:"font size",onChange:this.handleChange,value:this.state.font_size}),o.a.createElement("button",{onClick:this.handleClick},"Generate!")),o.a.createElement("div",{className:"meme"},o.a.createElement("h2",{style:{fontSize:Number(this.state.font_size)},className:"top"},this.state.topText),o.a.createElement("img",{src:this.state.randomImg,alt:""}),o.a.createElement("h2",{style:{fontSize:Number(this.state.font_size)},className:"bottom"},this.state.bottomText)))}}]),t}(a.Component);n(15);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9c836b86.chunk.js.map