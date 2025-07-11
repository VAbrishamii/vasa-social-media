import { profileAPI } from "../../api/instance";
import { createPostHTML } from "../../ui/post/displayPost";

export async function loadUserProfile() {
    try {
        //  Extract the username from the URL
        const params = new URLSearchParams(window.location.search);
        const username = params.get('user'); 
        console.log('username', username);
    
        if (!username) {
          throw new Error('Username not provided in the URL');
        }
    
        //  Use the `getAllPostsByProfile` method to fetch posts
        const response = await profileAPI.profile.allpostsbyprofile(username);
        const posts = Array.isArray(response.data) ? response.data : [];
        console.log('posts', posts)
    
        // Render the posts
        const postContainer = document.querySelector('.profile-posts');
        if (!posts || posts.length === 0) {
          postContainer.innerHTML = `<p>No posts found for ${username}.</p>`;
          return;
        }
        
        for (const post of posts) {
            // Await the result of createPostHTML to resolve the promise before appending
            const postElement = await createPostHTML(post, username);
            postContainer.appendChild(postElement); // Append resolved post element
        }
          
      
      } catch (error) {
        console.error('Error loading profile posts:', error.message);
        const postContainer = document.querySelector('.profile-posts');
        postContainer.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
      }
    }
loadUserProfile();