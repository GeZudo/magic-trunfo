(this.webpackJsonptryunfo=this.webpackJsonptryunfo||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(9),i=a.n(c),s=(a(16),a(7)),o=a(10),l=a(6),d=a(11),u=a(2),j=a(3),b=a(5),h=a(4),m=a(0),p=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,n=e.cardAttr2,c=e.cardAttr3,i=e.cardImage,s=e.cardRare,o=e.cardTrunfo;return Object(m.jsxs)("div",{className:s.replace(/\s/g,""),children:[Object(m.jsx)("p",{className:"nameCard",children:t}),""===i?Object(m.jsx)("div",{className:"branco"}):Object(m.jsx)("img",{src:i,alt:t,className:"image-card"}),Object(m.jsx)("p",{className:"cardRare",children:s}),o&&Object(m.jsx)("p",{className:"trunfo-card",children:"Super Trunfo"}),Object(m.jsx)("p",{className:"description-card",children:a}),Object(m.jsxs)("div",{className:"attrContainer",children:[Object(m.jsxs)("p",{className:"attrCard",children:["Atributo 1:"," ",r," "]}),Object(m.jsxs)("p",{className:"attrCard",children:["Atributo 2:"," ",n," "]}),Object(m.jsxs)("p",{className:"attrCard",children:["Atributo 3:"," ",c," "]})]})]})}}]),a}(n.a.Component),f=p,O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,r=e.formType,n=e.labelText,c=e.testid,i=e.onChange;return Object(m.jsx)("div",{className:c,children:"checkbox"===r?Object(m.jsx)("div",{className:"checked",children:Object(m.jsxs)("label",{htmlFor:n,children:[Object(m.jsx)("span",{children:n}),Object(m.jsx)("input",{id:n,type:r,name:t,className:c,onChange:i,checked:a})]})}):Object(m.jsxs)("label",{htmlFor:n,children:[Object(m.jsx)("span",{children:n}),Object(m.jsx)("input",{id:n,type:r,name:t,placeholder:n,className:c,onChange:i,value:a})]})})}}]),a}(n.a.Component),x=O,v=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.formType,r=e.labelText,n=e.testid,c=e.value,i=e.onChange;return Object(m.jsxs)("label",{htmlFor:r,children:[r,Object(m.jsxs)("select",{id:r,type:a,"data-testid":n,name:t,onChange:i,value:c,children:[Object(m.jsx)("option",{value:"normal",children:"Normal"}),Object(m.jsx)("option",{value:"raro",children:"Raro"}),Object(m.jsx)("option",{value:"muito raro",children:"Muito Raro"})]})]})}}]),a}(n.a.Component),T=v,N=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,n=e.cardAttr2,c=e.cardAttr3,i=e.cardImage,s=e.cardRare,o=e.cardTrunfo,l=e.hasTrunfo,d=e.isSaveButtonDisabled,u=e.onInputChange,j=e.onSaveButtonClick;return Object(m.jsxs)("div",{className:"inputs",children:[Object(m.jsx)(x,{formType:"text",labelText:"Nome",testid:"name-input",name:"cardName",value:t,onChange:u}),Object(m.jsx)(x,{formType:"textarea",labelText:"Descri\xe7\xe3o",testid:"description-input",name:"cardDescription",value:a,onChange:u}),Object(m.jsx)(x,{formType:"number",labelText:"Atributo 1:",testid:"attr1-input",name:"cardAttr1",value:r,onChange:u}),Object(m.jsx)(x,{formType:"number",labelText:"Atributo 2:",testid:"attr2-input",name:"cardAttr2",value:n,onChange:u}),Object(m.jsx)(x,{formType:"number",labelText:"Atributo 3:",testid:"attr3-input",name:"cardAttr3",value:c,onChange:u}),Object(m.jsx)(x,{formType:"text",labelText:"Imagem",testid:"image-input",name:"cardImage",value:i,onChange:u}),Object(m.jsx)(T,{labelText:"Raridade",testid:"rare-input",formType:"select",name:"cardRare",value:s,onChange:u}),l?Object(m.jsx)("p",{children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho"}):Object(m.jsx)(x,{formType:"checkbox",labelText:"Super Trunfo",testid:"trunfo-input",name:"cardTrunfo",value:o,onChange:u}),Object(m.jsx)("button",{"data-testid":"save-button",type:"submit",disabled:d,onClick:j,children:"Salvar"})]})}}]),a}(n.a.Component),C=N,y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.formType,r=e.labelText,n=e.testid,c=e.value,i=e.onChange;return Object(m.jsx)("div",{className:n,children:Object(m.jsxs)("label",{htmlFor:r,children:[r,Object(m.jsxs)("select",{id:r,type:a,"data-testid":n,name:t,onChange:i,value:c,children:[Object(m.jsx)("option",{value:"todas",children:"Todas"}),Object(m.jsx)("option",{value:"normal",children:"Normal"}),Object(m.jsx)("option",{value:"raro",children:"Raro"}),Object(m.jsx)("option",{value:"muito raro",children:"Muito Raro"})]})]})})}}]),a}(n.a.Component),g=y,k=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onInputChange,a=e.filterName,r=e.filterRare,n=e.filterTrunfo;return Object(m.jsxs)("div",{className:"inputFilter",children:[Object(m.jsx)(x,{formType:"text",labelText:"Filtro de Busca",testid:"name-filter",name:"filterName",value:a,onChange:t}),Object(m.jsx)(g,{labelText:"Raridade",testid:"rare-filter",formType:"select",name:"filterRare",value:r,onChange:t}),Object(m.jsx)(x,{formType:"checkbox",labelText:"Super Trunfo",testid:"trunfo-filter",name:"filterTrunfo",value:n,onChange:t})]})}}]),a}(n.a.Component),A=k,S=(a(18),["hasTrunfo","deck"]),R={cardName:"",cardDescription:"",cardAttr1:0,cardAttr2:0,cardAttr3:0,cardImage:"",cardRare:"normal",cardTrunfo:!1,isSaveButtonDisabled:!0,filterName:"",filterRare:"todas",filterTrunfo:!1},D=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleDelete=function(t,a){var r=e.state.deck;e.setState((function(e){return{deck:r.filter((function(e){return e.cardName!==t})),hasTrunfo:!a&&e.hasTrunfo}}))},e.handleSave=function(){var t=e.state,a=t.hasTrunfo,r=(t.deck,Object(d.a)(t,S));e.setState((function(e){return Object(l.a)({deck:[].concat(Object(o.a)(e.deck),[r]),hasTrunfo:!!r.cardTrunfo||a},R)}))},e.handleChange=function(t){var a=t.target,r=a.name,n="checkbox"===a.type?a.checked:a.value;e.setState(Object(s.a)({},r,n),e.handleButon)},e.handleButon=function(){var t=e.state,a=t.cardName,r=t.cardDescription,n=t.cardImage,c=t.cardRare,i=!1;a&&r&&n&&c&&(i=!0),e.verificaNumber()&&i?e.setState({isSaveButtonDisabled:!1}):e.setState({isSaveButtonDisabled:!0})},e.verificaNumber=function(){var t=e.state,a=t.cardAttr1,r=t.cardAttr2,n=t.cardAttr3,c=Number(a),i=Number(r),s=Number(n),o=!0;return c+i+s>210&&(o=!1),c>90&&(o=!1),i>90&&(o=!1),s>90&&(o=!1),c<0&&(o=!1),i<0&&(o=!1),s<0&&(o=!1),o},e.filterCards=function(){var t=e.state,a=t.filterName,r=t.filterRare,n=t.filterTrunfo,c=t.deck;return!1!==n?c.filter((function(e){return!0===e.cardTrunfo})):""!==a?c.filter((function(e){return e.cardName.includes(a)})):"todas"!==r?c.filter((function(e){return e.cardRare===r})):c},e.state=Object(l.a)(Object(l.a)({},R),{},{hasTrunfo:!1,deck:[],onInputChange:e.handleChange,onSaveButtonClick:e.handleSave}),e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{children:Object(m.jsx)("h1",{children:" MagicTrunfo "})}),Object(m.jsxs)("div",{className:"inputPreviewContainer",children:[Object(m.jsxs)("div",{className:"inputContainer",children:[Object(m.jsx)("h2",{children:"Adicionar nova  carta"}),Object(m.jsx)(C,Object(l.a)({},this.state))]}),Object(m.jsx)("div",{className:"previewContainer",children:Object(m.jsx)(f,Object(l.a)({},this.state))})]}),Object(m.jsx)("h2",{className:"header2",children:"Seu Deck"}),Object(m.jsxs)("div",{className:"filtro",children:[Object(m.jsx)(A,Object(l.a)({},this.state)),Object(m.jsx)("div",{className:"deckSalvo",children:this.filterCards().map((function(t){return Object(m.jsxs)("div",{className:"cartinha1",children:[Object(m.jsx)("div",{className:"cartinha2",children:Object(m.jsx)(f,Object(l.a)({},t),t.cardName)}),Object(m.jsx)("button",{"data-testid":"delete-button",type:"button",onClick:function(){return e.handleDelete(t.cardName,t.cardTrunfo)},children:"Excluir"})]},t.cardName)}))})]})]})}}]),a}(n.a.Component);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4e77efdd.chunk.js.map