(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(12),a=n.n(c),l=(n(23),n(24),n(16)),i=n(13),o=n(14),d=n(18),j=n(17),u=n(15),h=n.n(u),m=function(){return h.a.get("https://randomuser.me/api/?results=70&nat=gb,us")},b=n(0);var f=function(e){var t=e.handleSearch;return Object(b.jsx)("div",{children:Object(b.jsx)("form",{class:"form-inline",children:Object(b.jsx)("input",{type:"search",class:"form-control",onChange:function(e){return t(e)}})})})},O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],filterEmployees:[],sortOrder:"desc"},e.handleSearch=function(t){var n=t.target.value,r=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filterEmployees:r})},e.handleSort=function(t){var n=Object(l.a)(e.state.employees);console.log(e.state.sortOrder),"desc"===e.state.sortOrder?e.setState({sortOrder:"asc"},(function(){n.sort(e.nestedSort("name","first")),console.log(n),e.setState({filterEmployees:n})})):e.setState({sortOrder:"desc"},(function(){n.sort(e.nestedSort("name","first","desc")),console.log(n),e.setState({filterEmployees:n})}))},e.nestedSort=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc";return function(r,s){var c=t?r[e][t]:r[e],a=t?s[e][t]:s[e],l="asc"===n?1:-1;return c<a?-l:c>a?l:0}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({employees:t.data.results,filterEmployees:t.data.results})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{handleSearch:this.handleSearch}),Object(b.jsx)("button",{type:"button",className:"align-middle btn btn-dark",onClick:this.handleSort,children:"A-Z Sort"}),Object(b.jsx)("th",{children:"Image"}),Object(b.jsx)("th",{className:"hover",children:"Name"}),Object(b.jsx)("th",{children:"Number"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Age"}),this.state.filterEmployees.map((function(e){return console.log(e),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsx)("img",{src:e.picture.thumbnail,alt:"profile image"})}),Object(b.jsxs)("td",{className:"align-middle",children:[e.name.first," ",e.name.last]}),Object(b.jsx)("td",{className:"align-middle",children:e.cell}),Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsx)("a",{href:"mailto: "+e.email,children:e.email})}),Object(b.jsx)("td",{className:"align-middle",children:e.dob.age})]},e.login.uuid)}))]})}}]),n}(r.Component);var p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})};n(44);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.80f132d1.chunk.js.map