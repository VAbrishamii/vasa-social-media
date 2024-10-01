import{p as I,b as S}from"./instance-B_Arlp1z.js";function b(e,n){const a=document.createElement("div");a.classList.add("post-interactions");const t=document.createElement("div");t.classList.add("post-comments");const s=document.createElement("div");s.classList.add("comments-title");const p=document.createElement("i");p.classList.add("fas","fa-comments"),p.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),P(e.id)}),s.appendChild(p);const f=document.createElement("span");f.textContent=` ${n.length} `,s.appendChild(f),t.appendChild(s);const l=document.createElement("i");l.classList.add("fas","fa-heart"),(JSON.parse(localStorage.getItem("userReactions"))||{})[e.id]&&l.classList.add("reacted"),l.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),F(e.id,l)}),s.appendChild(l),n.forEach(c=>{const d=document.createElement("div");d.classList.add("comment");const C=document.createElement("strong");C.textContent=c.owner,d.appendChild(C);const u=document.createElement("p");u.classList.add("post-comment"),u.textContent=c.body,d.appendChild(u),t.appendChild(d)});const i=document.createElement("form");i.classList.add("comment-form"),i.style.display="none",i.setAttribute("data-post-id",e.id);const r=document.createElement("textarea");r.classList.add("comment-input"),r.placeholder="Write your comment...",i.appendChild(r);const o=document.createElement("div");o.classList.add("action-icons");const m=document.createElement("i");m.classList.add("fas","fa-paper-plane","send-comment");let h=[...n];return m.addEventListener("click",async c=>{c.preventDefault();const d=r.value.trim();if(d)try{const C=await I.post.comment(e.id,{body:d});r.value="";const u=C.data;h.push(u);const w=document.createElement("div");w.classList.add("comment");const y=document.createElement("strong");y.textContent=u.comments.owner,w.appendChild(y);const L=document.createElement("p");L.classList.add("post-comment"),L.textContent=u.comments.body,w.appendChild(L),t.appendChild(w);const v=t.querySelector(".comments-title span");v&&(v.textContent=` ${h.length} `)}catch(C){console.error("Error commenting on post:",C),alert("Could not comment on post. Please try again.")}}),o.appendChild(m),i.appendChild(o),a.appendChild(t),a.appendChild(i),a}function P(e){const n=document.querySelector(`.comment-form[data-post-id="${e}"]`);n&&(n.style.display=n.style.display==="none"?"block":"none")}function F(e,n){const a=JSON.parse(localStorage.getItem("userReactions"))||{};a[e]?(delete a[e],n.classList.remove("reacted")):(a[e]=!0,n.classList.add("reacted")),localStorage.setItem("userReactions",JSON.stringify(a))}let E={};function N(){E=JSON.parse(localStorage.getItem("followingUsers"))||{}}function x(e,n){document.querySelectorAll(`[data-author-name="${e}"]`).forEach(t=>{t.textContent=n?"Unfollow":"Follow"})}async function O(e){const n=document.createElement("div");n.classList.add("post-author-container");const a=document.createElement("img");a.classList.add("post-author-avatar"),a.src=e.author.avatar.url||"default-avatar.png",n.appendChild(a);const t=document.createElement("span");t.classList.add("post-author-name"),t.textContent=e.author.name,n.appendChild(t);const s=document.createElement("button");return s.classList.add("follow-button"),s.setAttribute("data-author-name",e.author.name),E[e.author.name]?s.textContent="Unfollow":s.textContent="Follow",s.addEventListener("click",async()=>{try{s.textContent==="Follow"?(await S.profile.follow(e.author.name),E[e.author.name]=!0,localStorage.setItem("followingUsers",JSON.stringify(E)),x(e.author.name,!0)):(await S.profile.unfollow(e.author.name),delete E[e.author.name],localStorage.setItem("followingUsers",JSON.stringify(E)),x(e.author.name,!1))}catch(p){console.error("Error following/unfollowing:",p),alert("Could not update follow status. Please try again.")}}),n.appendChild(s),n}N();async function k(e,n,a=[]){const t=document.createElement("div");t.classList.add("post");const s=JSON.parse(localStorage.getItem("user"));if(s&&s.name===n){const o=document.createElement("div");o.classList.add("post-actions");const m=document.createElement("i");m.classList.add("fas","fa-edit"),m.addEventListener("click",c=>{c.preventDefault(),window.location.href=`/post/edit/?id=${e.id}`}),o.appendChild(m);const h=document.createElement("i");h.classList.add("fas","fa-trash"),h.addEventListener("click",async c=>{if(c.preventDefault(),confirm("Are you sure you want to delete this post?"))try{await I.post.delete(e.id),location.reload()}catch(d){console.error("Error deleting post:",d),alert("Could not delete post. Please try again.")}}),o.appendChild(h),t.appendChild(o)}else try{const o=await O(e);o instanceof HTMLElement&&t.appendChild(o)}catch(o){console.error("Error fetching comments:",o)}const f=document.createElement("h1");f.classList.add("post-title");const l=document.createElement("a");if(l.href=`/post/?id=${e.id}`,l.textContent=e.title,f.appendChild(l),t.appendChild(f),e.media&&e.media.url){const o=document.createElement("img");o.classList.add("post-image"),o.src=e.media.url,o.alt=e.media.alt||"Post Image",t.appendChild(o)}const g=document.createElement("p");g.classList.add("post-caption"),g.textContent=e.body,t.appendChild(g);const i=b(e,a);t.appendChild(i);const r=document.createElement("p");return r.classList.add("post-date"),r.textContent=`Published on: ${new Date(e.created).toLocaleDateString()}`,t.appendChild(r),t}export{k as c};
