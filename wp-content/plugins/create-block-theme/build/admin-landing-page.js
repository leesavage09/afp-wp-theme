(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.i18n,n=window.wp.coreData,r=window.wp.data,o=window.wp.components,c=window.wp.apiFetch;var l=e.n(c);async function s(e){return l()({path:"/create-block-theme/v1/create-blank",method:"POST",data:e,headers:{"Content-Type":"application/json"}}).then((e=>{if("SUCCESS"!==e?.status)throw new Error(`Failed to create blank theme: ${e?.message||e?.status}`);return e}))}async function i(e){return l()({path:"/create-block-theme/v1/clone",method:"POST",data:e,headers:{"Content-Type":"application/json"}}).then((e=>{if("SUCCESS"!==e?.status)throw new Error(`Failed to clone theme: ${e?.message||e?.status}`);return e}))}async function h(e){return l()({path:"/create-block-theme/v1/create-child",method:"POST",data:e,headers:{"Content-Type":"application/json"}}).then((e=>{if("SUCCESS"!==e?.status)throw new Error(`Failed to create child theme: ${e?.message||e?.status}`);return e}))}const d=window.wp.blob,m=window.ReactJSXRuntime,_=({onRequestClose:e,creationType:n})=>{const[r,c]=(0,t.useState)(null),[l,d]=(0,t.useState)({name:"",description:"",author:""});return r?(0,m.jsx)(o.Modal,{title:(0,a.__)("Create Block Theme","create-block-theme"),onRequestClose:e,children:(0,m.jsx)("p",{children:r})}):(0,m.jsx)(o.Modal,{title:(0,a.__)("Create Block Theme","create-block-theme"),onRequestClose:e,children:(0,m.jsxs)(o.__experimentalVStack,{spacing:"5",children:[(0,m.jsx)(o.__experimentalText,{children:(0,a.__)("Let's get started creating a new Block Theme.","create-block-theme")}),(0,m.jsx)(o.TextControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Theme name (required)","create-block-theme"),value:l.name,required:!0,onChange:e=>d({...l,name:e}),help:(0,a.__)("(Tip: You can edit all of this and more in the Editor later.)","create-block-theme")}),(0,m.jsx)(o.TextareaControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Theme description","create-block-theme"),value:l.description,onChange:e=>d({...l,description:e}),placeholder:(0,a.__)("A short description of the theme","create-block-theme")}),(0,m.jsx)(o.TextControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Author","create-block-theme"),value:l.author,onChange:e=>d({...l,author:e}),placeholder:(0,a.__)("the WordPress team","create-block-theme")}),(0,m.jsx)(o.__experimentalHStack,{children:(0,m.jsx)(o.Button,{variant:"primary",disabled:!l.name,onClick:()=>(async()=>{let e=null;switch(n){case"blank":e=s;break;case"clone":e=i;break;case"child":e=h}e&&e(l).then((()=>{window.alert((0,a.__)("Theme created successfully. The editor will now load.","create-block-theme")),window.location=window.cbt_landingpage_variables.editor_url})).catch((e=>{c(e.message||(0,a.__)("An error occurred while attempting to create the theme.","create-block-theme"))}))})(),children:(e=>{switch(e){case"blank":return(0,a.__)("Create and Activate Blank Theme","create-block-theme");case"clone":return(0,a.__)("Clone Block Theme","create-block-theme");case"child":return(0,a.__)("Create Child Theme","create-block-theme")}})(n)})})]})})};function b(){const[e,c]=(0,t.useState)(!1),s=(0,r.useSelect)((e=>e(n.store).getCurrentTheme()))?.name?.raw;return(0,m.jsxs)("div",{className:"create-block-theme__landing-page",children:[e&&(0,m.jsx)(_,{creationType:e,onRequestClose:()=>c(!1)}),(0,m.jsx)("h1",{className:"create-block-theme__landing-page__header",children:(0,m.jsx)("img",{src:window.cbt_landingpage_variables.assets_url+"header_logo.webp",alt:(0,a.__)("Create Block Theme","create-block-theme")})}),(0,m.jsxs)(o.__experimentalHStack,{alignment:"topLeft",className:"create-block-theme__landing-page__body",children:[(0,m.jsxs)(o.__experimentalVStack,{alignment:"left",className:"create-block-theme__landing-page__body__left-column",children:[(0,m.jsx)("h2",{children:(0,a.__)("What would you like to do?","create-block-theme")}),(0,m.jsx)("p",{children:(0,t.createInterpolateElement)((0,a.__)("You can do everything from within the <a>Editor</a> but here are a few things you can do to get started.","create-block-theme"),{a:(0,m.jsx)("a",{href:window.cbt_landingpage_variables.editor_url})})}),(0,m.jsx)(o.Button,{variant:"link",onClick:()=>(async()=>{!async function(e){const t=await e.blob(),a=e.headers.get("Content-Disposition").split("filename=")[1];(0,d.downloadBlob)(a,t,"application/zip")}(await async function(){return l()({path:"/create-block-theme/v1/export",method:"POST",headers:{"Content-Type":"application/json"},parse:!1})}())})(),children:(0,a.sprintf)(
// translators: %s: theme name.
// translators: %s: theme name.
(0,a.__)('Export "%s" as a Zip File',"create-block-theme"),s)}),(0,m.jsx)("p",{children:(0,a.__)("Export a zip file ready to be imported into another WordPress environment.","create-block-theme")}),(0,m.jsx)(o.Button,{variant:"link",onClick:()=>c("blank"),children:(0,a.__)("Create a new Blank Theme","create-block-theme")}),(0,m.jsx)("p",{children:(0,a.__)("Start from scratch! Create a blank theme to get started with your own design ideas.","create-block-theme")}),(0,m.jsx)(o.Button,{variant:"link",onClick:()=>c("clone"),children:(0,a.sprintf)(
// translators: %s: theme name.
// translators: %s: theme name.
(0,a.__)('Create a Clone of "%s"',"create-block-theme"),s)}),(0,m.jsx)("p",{children:(0,a.__)("Use the currently activated theme as a starting point.","create-block-theme")}),(0,m.jsx)(o.Button,{variant:"link",onClick:()=>c("child"),children:(0,a.sprintf)(
// translators: %s: theme name.
// translators: %s: theme name.
(0,a.__)('Create a Child of "%s"',"create-block-theme"),s)}),(0,m.jsx)("p",{children:(0,a.__)("Make a theme that uses the currently activated theme as a parent.","create-block-theme")})]}),(0,m.jsxs)(o.__experimentalVStack,{className:"create-block-theme__landing-page__body__right-column",children:[(0,m.jsx)("h3",{children:(0,a.__)("About the Plugin","create-block-theme")}),(0,m.jsx)("p",{children:(0,a.__)("Create Block Theme is a tool to help you make Block Themes using the WordPress Editor. It does this by adding tools to the Editor to help you create and manage your theme. Themes created with Create Block Theme don't require Create Block Theme to be installed on the site where the theme is used.","create-block-theme")}),(0,m.jsx)("h3",{children:(0,a.__)("Do you need some help?","create-block-theme")}),(0,m.jsx)("p",{children:(0,t.createInterpolateElement)((0,a.__)("Have a question? Ask for some help in the <ExternalLink>forums</ExternalLink>.","create-block-theme"),{ExternalLink:(0,m.jsx)(o.ExternalLink,{href:(0,a.__)("https://wordpress.org/support/plugin/create-block-theme/","create-block-theme")})})}),(0,m.jsx)("p",{children:(0,t.createInterpolateElement)((0,a.__)("Found a bug? Report it on <ExternalLink>GitHub</ExternalLink>.","create-block-theme"),{ExternalLink:(0,m.jsx)(o.ExternalLink,{href:"https://github.com/WordPress/create-block-theme/issues/new"})})}),(0,m.jsx)("p",{children:(0,t.createInterpolateElement)((0,a.__)("Want to contribute? Check out the <ExternalLink>project on GitHub</ExternalLink>.","create-block-theme"),{ExternalLink:(0,m.jsx)(o.ExternalLink,{href:"https://github.com/WordPress/create-block-theme"})})}),(0,m.jsxs)("div",{className:"create-block-theme__landing-page__body__faq",children:[(0,m.jsx)("h3",{children:(0,a.__)("FAQ","create-block-theme")}),(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:(0,a.__)("How do I access the features of Create Block Theme from within the editor?","create-block-theme")}),(0,m.jsx)("p",{children:(0,a.__)("There is a new panel accessible from the WordPress Editor which you can open by clicking on a new icon to the right of the “Save” button, at the top of the Editor.","create-block-theme")}),(0,m.jsx)("img",{src:window.cbt_landingpage_variables.assets_url+"faq_icon.webp",alt:(0,a.__)("A screenshot of the Create Block Theme icon in the editor","create-block-theme")})]}),(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:(0,a.__)("How do I save the customizations I made with the Editor to the Theme?","create-block-theme")}),(0,m.jsx)("p",{children:(0,a.__)('In the Create Block Theme Panel click "Save Changes to Theme". You will be presented with a number of options of which things you want to be saved to your theme. Make your choices and then click "Save Changes".',"create-block-theme")}),(0,m.jsx)("img",{src:window.cbt_landingpage_variables.assets_url+"faq_save.webp",alt:(0,a.__)("A screenshot of the Create Block Theme save changes panel","create-block-theme")})]}),(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:(0,a.__)("How do I install and remove fonts?","create-block-theme")}),(0,m.jsx)("p",{children:(0,a.__)("First Install and activate a font from any source using the WordPress Font Library. Then, using the Create Block Theme Panel select “Save Changes To Theme” and select “Save Fonts” before saving the theme. All of the active fonts will be activated in the theme and deactivated in the system (and may be safely deleted from the system). Any fonts that are installed in the theme that have been deactivated with the WordPress Font Library will be removed from the theme.","create-block-theme")}),(0,m.jsx)("img",{src:window.cbt_landingpage_variables.assets_url+"faq_fonts.webp",alt:(0,a.__)("A screenshot of the WordPress Font Library modal window","create-block-theme")})]})]})]})]})]})}function p(){return(0,m.jsx)(b,{})}window.addEventListener("load",(function(){const e=document.getElementById("create-block-theme-app");(0,t.createRoot)(e).render((0,m.jsx)(p,{}))}),!1)})();