import{d as c}from"./displayLoggedInUser-ByEQsBWe.js";import{a as d}from"./authGuard-DfzkPADv.js";import{p as n}from"./instance-B_Arlp1z.js";function m(){const a=`
    <form id="edit-post-form">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>

      <label for="caption">Caption:</label>
      <textarea id="caption" name="caption" required></textarea>

      <label for="tags">Tags:</label>
      <input type="text" id="tags" name="tags" required>

      <label for="image">Image:</label>
      <input type="text" id="image-url" name="image-url" placeholder="Image URL" required>
      <img id="image-preview" src="" alt="Image preview" />
      
      <button type="submit">Update Post</button>
    </form>
  `,t=document.querySelector(".form-container");t?t.innerHTML=a:console.error("Form container not found.")}async function s(){const t=new URLSearchParams(window.location.search).get("id");try{const e=await n.post.readSinglePost(t);document.querySelector("#title").value=e.data.title,document.querySelector("#caption").value=e.data.body,document.querySelector("#tags").value=e.data.tags?.length>0?e.data.tags.join(", "):null;const r=document.querySelector("#image-preview"),o=document.querySelector("#image-url");e.data.media?.url?(r.src=e.data.media.url,o.value=e.data.media.url):(r.src="",r.style.display="none",o.value="")}catch(e){console.error("Error fetching post data:",e)}}async function p(a){const t=document.querySelector("#title").value,e=document.querySelector("#caption").value,r=document.querySelector("#tags").value.split(",").map(l=>l.trim()),o=document.querySelector("#image-url").value,u={title:t,body:e,tags:r,media:{url:o||null}};try{await n.post.update(a,u),alert("Post updated successfully!"),window.location.href="/profile/"}catch(l){console.error("Error updating post:",l),alert("Failed to update post.")}}m();s();function g(a){return new URLSearchParams(window.location.search).get(a)}const i=g("id");i?(s(),document.querySelector("#edit-post-form").addEventListener("submit",async t=>{t.preventDefault(),await p(i)})):alert("No post ID provided.");d();c();
