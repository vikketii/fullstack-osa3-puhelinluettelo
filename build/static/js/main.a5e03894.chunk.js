(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(11),u=t.n(o),i=t(2),c=function(e){var n=e.filterPersons,t=e.handleFilterChange;return r.a.createElement("div",null,"rajaa: ",r.a.createElement("input",{value:n,onChange:t}))},l=function(e){var n=e.persons,t=e.filterPersons,a=e.removePerson;return(t?n.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}):n).map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e)}},"poista"))})},s=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:o,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=t(3),d=t.n(m),f="/api/persons",g=function(){return d.a.get(f).then(function(e){return e.data})},h=function(e){return d.a.post(f,e).then(function(e){return e.data})},b=function(e){return d.a.delete("".concat(f,"/").concat(e.id)).then(function(e){return e.data})},v=function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},p=function(e){var n=e.statusMessage;if(null===n.message)return null;var t={};return"good"===n.status?t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:"bad"===n.status&&(t={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}),r.a.createElement("div",{style:t},n.message)},E=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),d=m[0],f=m[1],E=Object(a.useState)(""),w=Object(i.a)(E,2),j=w[0],C=w[1],O=Object(a.useState)(""),k=Object(i.a)(O,2),P=k[0],S=k[1],N=Object(a.useState)({message:null,status:null}),y=Object(i.a)(N,2),L=y[0],B=y[1];Object(a.useEffect)(function(){g().then(function(e){o(e)})},[]);var x=function(e,n){B({message:e,status:n}),setTimeout(function(){B({message:null,status:null})},5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Puhelinluettelo"),r.a.createElement(p,{statusMessage:L}),r.a.createElement(c,{filterPersons:P,handleFilterChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:d,number:j},a=t.find(function(e){return e.name===d});a?window.confirm("".concat(a.name," on jo luettelossa, korvataanko vanha numero uudella?"))&&v(a.id,n).then(function(e){o(t.map(function(n){return n.id!==a.id?n:e})),x("".concat(e.name," numero muutettiin"),"good")}):h(n).then(function(e){o(t.concat(e)),x("Lis\xe4ttiin ".concat(e.name),"good")}),f(""),C("")},newName:d,handleNameChange:function(e){f(e.target.value)},newNumber:j,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numerot"),r.a.createElement(l,{persons:t,filterPersons:P,removePerson:function(e){window.confirm("Haluatko varmasti poistaa henkil\xf6n ".concat(e.name," luettelosta?"))&&b(e).then(function(){o(t.filter(function(n){return n.id!==e.id})),x("Poistettiin ".concat(e.name),"good")}).catch(function(n){x("Henkil\xf6 ".concat(e.name," oli jo poistettu"),"bad"),g().then(function(e){return o(e)})})}}))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.a5e03894.chunk.js.map