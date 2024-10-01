import{a as u}from"./instance-B_Arlp1z.js";async function i(m){m.preventDefault();const e=document.getElementById("name"),t=document.getElementById("email"),a=document.getElementById("password");let n=e.value,s=t.value,r=a.value;const l={name:n,email:s,password:r};e.value="",t.value="",a.value="";try{await u.auth.register({name:n,email:s,password:r}),alert(`Registration successful!
Username: ${l.name}
Email: ${l.email}`),window.location.href="/auth/login/"}catch(o){alert(`${o.message}.
Please try again.`)}}const c=document.forms.register;c.addEventListener("submit",i);
