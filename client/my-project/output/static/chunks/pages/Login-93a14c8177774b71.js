(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{945:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return t(2214)}])},6286:function(e,r,t){"use strict";t.d(r,{l:function(){return o}});var n=t(3977);t(2370);let o=(0,n.ZF)({apiKey:"AIzaSyCo56UZzBNXUEWkq2Xazn2gbyNNnUhTgKw",authDomain:"vsf-2-8011b.firebaseapp.com",projectId:"vsf-2-8011b",storageBucket:"vsf-2-8011b.appspot.com",messagingSenderId:"1016605953597",appId:"1:1016605953597:web:1215b27669d7a3a3e3e454",measurementId:"G-345JWVE5PE"})},2214:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),o=t(7294),a=t(7066),i=t(2370),s=t(6286),l=t(9332),c=t(5675),d=t.n(c);function u(){let[e,r]=(0,o.useState)(""),[t,c]=(0,o.useState)(""),[u,p]=(0,o.useState)(!1),[b,h]=(0,o.useState)(null),[m,f]=(0,o.useState)(!0),g=(0,l.useRouter)(),w=(0,i.v0)(s.l);(0,o.useEffect)(()=>{window.appVerifier=new i.lI(w,"recaptcha-container",{size:"normal",callback:e=>{},"expired-callback":()=>{}})},[w]);let x=async()=>{try{let t="+".concat(e.replace(/\D/g,""));console.log("sending phone number",t);let{phoneNumberExists:n}=(await a.Z.post("https://victoriafloors2.onrender.com/api/phoneNumber",{phoneNumber:t})).data;if(console.log("phone number exists",n),n){if(w){let e=await (0,i.$g)(w,t,window.appVerifier);console.log("Confirmation result:",e),e?(f(!1),h(e),p(!0),r(""),alert("OTP has been sent!")):console.error("Confirmation result is undefined.")}else console.error("Auth object or appVerifier is undefined.")}else alert("Phone number not found in the database. Please enter a valid number.")}catch(e){console.error("Error signing in with phone number:",e)}},v=async()=>{try{b?(await b.confirm(t),c(""),g.push("/dashboard")):console.error("Confirmation result is undefined.")}catch(e){console.error("Error verifying OTP:",e)}};return(0,n.jsxs)("div",{className:"w-screen h-screen overflow-hidden bg-black",children:[(0,n.jsx)(d(),{width:500,height:300,alt:"",src:"/vid/5.png",className:"-z-[10000] object-fill w-[100%] blur-sm"}),u?null:(0,n.jsx)("div",{id:"recaptcha-container",className:"z-[1000000] absolute top-10 left-[50vw]"}),(0,n.jsxs)("div",{className:"w-[45%] h-[60%] bg-white bg-opacity-75 rounded-3xl border-2 border-gray-400 right-[15vw] top-[8vw] absolute px-20 py-12",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-bold text-5xl mx-[12vw]",children:"Login"}),m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"tel",value:e,onChange:e=>{r(e.target.value)},placeholder:"Enter phone number with +91 (same as given in physical form)",className:"text-xl w-[43vw] mb-3 mt-16 -ml-[4vw] border-2 border-gray-600 py-2 pl-3 rounded-2xl bg-white text-black"}),(0,n.jsx)("button",{onClick:x,className:"text-2xl px-5 text-white p-2 rounded-3xl border-2 border-red-900 font-semibold mx-[11vw] mt-2 w-fit bg-gradient-to-r from-orange-500 to-orange-700 ",children:"Send OTP"})]})]}),(0,n.jsx)("div",{children:!m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"text",value:t,onChange:e=>{c(e.target.value)},placeholder:"Enter OTP",className:"text-xl w-[43vw] my-3 mt-16 -ml-[4vw] border-2 border-gray-600 py-2 pl-3 rounded-2xl bg-white"}),(0,n.jsx)("button",{onClick:v,className:"text-2xl px-5 text-white p-2 rounded-3xl border-2 border-red-900 font-semibold mx-[11vw] mt-2 w-fit bg-gradient-to-r from-orange-500 to-orange-700 ",children:"Submit OTP"})]})})]})]})}}},function(e){e.O(0,[567,675,332,66,690,888,774,179],function(){return e(e.s=945)}),_N_E=e.O()}]);