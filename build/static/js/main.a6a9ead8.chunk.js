(this.webpackJsonpSolstice=this.webpackJsonpSolstice||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var l=a(59),n=a(60),r=a(64),c=a(63),s=a(0),u=a.n(s),o=a(24),i=a.n(o),m=a(42),d=a(168),E=a(169),h=a(167),C=a(66),T=function(e){return u.a.createElement(m.a,{height:100,background:"tint2"},u.a.createElement(m.a,{paddingTop:80,display:"flex",justifyContent:"space-between",borderBottom:"default"},u.a.createElement(C.a,null,"Home"),u.a.createElement(C.a,null,"Lorem"),u.a.createElement(C.a,null,"Ipsum"),u.a.createElement(C.a,null,"Dolor"),u.a.createElement(C.a,null,"Sit"),u.a.createElement(C.a,null,"Amet")))},f=a(171),p=a(170),x=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{isShown:e.isShown,onCloseComplete:e.closeProfile},u.a.createElement(m.a,null,u.a.createElement(m.a,{justifyContent:"center"},u.a.createElement(C.a,null,e.customerName),u.a.createElement(C.a,null,e.customerEmail)),u.a.createElement(p.a,{height:700},u.a.createElement(p.a.Head,null,u.a.createElement(p.a.TextHeaderCell,null,"Customer"),u.a.createElement(p.a.TextHeaderCell,null,"Address"),u.a.createElement(p.a.TextHeaderCell,null,"Solar Farm"),u.a.createElement(p.a.TextHeaderCell,null,"Capacity"),u.a.createElement(p.a.TextHeaderCell,null,"Date Created")),u.a.createElement(p.a.Body,{height:500},e.accounts.map((function(t){return u.a.createElement(p.a.Row,{key:"".concat(e.customer_name,"_profile_account_{account.id}")},u.a.createElement(p.a.TextCell,null,t.id),u.a.createElement(p.a.TextCell,null,t.address),u.a.createElement(p.a.TextCell,null,t.solar_farm_id),u.a.createElement(p.a.TextCell,{isNumber:!0},t.capacity_share),u.a.createElement(p.a.TextCell,null,t.created_date))})))))))},b=function(e){return u.a.createElement(p.a,{height:700},u.a.createElement(p.a.Head,null,u.a.createElement(p.a.TextHeaderCell,null,"Customer"),u.a.createElement(p.a.TextHeaderCell,null,"Address"),u.a.createElement(p.a.TextHeaderCell,null,"Solar Farm"),u.a.createElement(p.a.TextHeaderCell,null,"Capacity"),u.a.createElement(p.a.TextHeaderCell,null,"Date Created")),u.a.createElement(p.a.Body,{height:500},e.accounts.map((function(e){return u.a.createElement(p.a.Row,{key:"account_{account.id}"},u.a.createElement(p.a.TextCell,null,e.id),u.a.createElement(p.a.TextCell,null,e.address),u.a.createElement(p.a.TextCell,null,e.solar_farm_id),u.a.createElement(p.a.TextCell,{isNumber:!0},e.capacity_share),u.a.createElement(p.a.TextCell,null,e.created_date))}))))},g=function(e){return u.a.createElement(m.a,null,u.a.createElement(p.a,{height:700},u.a.createElement(p.a.Head,null,u.a.createElement(p.a.TextHeaderCell,null,"First Name"),u.a.createElement(p.a.TextHeaderCell,null,"Last Name"),u.a.createElement(p.a.TextHeaderCell,null,"Active?"),u.a.createElement(p.a.TextHeaderCell,null,"Email"),u.a.createElement(p.a.TextHeaderCell,null,"Date Created")),u.a.createElement(p.a.Body,{height:500},e.customers.map((function(t){return u.a.createElement(p.a.Row,{key:t.id,isSelectable:!0,onSelect:e.onRowSelect(t.id)},u.a.createElement(p.a.TextCell,null,t.first_name),u.a.createElement(p.a.TextCell,null,t.last_name),u.a.createElement(p.a.TextCell,null,1===t.active?"yes":"no"),u.a.createElement(p.a.TextCell,null,t.email),u.a.createElement(p.a.TextCell,null,t.created_date))})))))},y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={error:"",loading:!0,accounts:null,customers:null,customerAccountMap:null,currentCustomerID:null,currentTab:"Customers",isDrawerOpen:!1},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/loadPage").then((function(t){t.json().then((function(t){var a=t.customers,l=void 0===a?[]:a,n=t.accounts,r=void 0===n?[]:n,c=t.customerAccountMap,s=void 0===c?[]:c;e.setState({customers:l,accounts:r,customerAccountMap:s,loading:!1})}))})).catch((function(t){e.setState({loading:!1,error:t})}))}},{key:"didLoadWithoutErrors",value:function(){return!this.state.loading&&this.state.error.length<1}},{key:"openDrawer",value:function(e){this.setState({isDrawerOpen:!0,currentCustomerID:e})}},{key:"closeDrawer",value:function(){this.setState({isDrawerOpen:!1,currentCustomerID:null})}},{key:"render",value:function(){var e=this;return u.a.createElement(m.a,null,u.a.createElement(T,null),this.state.loading&&u.a.createElement("p",null,"Please wait while we load data..."),this.didLoadWithoutErrors()&&u.a.createElement(d.a,{marginTop:50,marginRight:50,display:"flex",flexBasis:500},u.a.createElement(m.a,{background:"tint2",border:"default"},u.a.createElement(E.a,{key:"customer_tab",onSelect:function(){return e.setState({currentTab:"Customers"})},isSelected:"Customers"===this.state.currentTab,"aria-controls":"panel-customers",width:500,size:50},"Customer List")),u.a.createElement(m.a,{background:"tint2",border:"default"},u.a.createElement(E.a,{key:"accounts_tab",onSelect:function(){return e.setState({currentTab:"Accounts"})},isSelected:"Accounts"===this.state.currentTab,"aria-controls":"panel-accounts",width:500,size:50},u.a.createElement(h.a,null,"Account List")))),this.didLoadWithoutErrors()&&"Customers"===this.state.currentTab&&u.a.createElement(g,{customers:this.state.customers}),this.didLoadWithoutErrors()&&"Accounts"===this.state.currentTab&&u.a.createElement(b,{accounts:this.state.accounts}),u.a.createElement(x,{isShown:this.state.isDrawerOpen,closeProfile:this.closeDrawer,accounts:this.state.customers[this.state.currentCustomerID],customerName:void 0!==this.state.customers[this.state.currentCustomerID--]?"".concat(this.state.customers[this.state.currentCustomerID--].first_name," ").concat(this.state.customers[this.state.currentCustomerID--].last_name):"",customerEmail:void 0!==this.state.customers[this.state.currentCustomerID--]?this.state.customers[this.state.currentCustomerID--].email:""}))}}]),a}(u.a.Component);i.a.render(u.a.createElement(y,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a(153)}},[[72,1,2]]]);
//# sourceMappingURL=main.a6a9ead8.chunk.js.map