
import { profileAPI } from "../../api/instance";
import { displayLoggedInUser } from "../../ui/auth/displayLoggedInUser";
import { createPostHTML } from '../../ui/post/displayPost';


displayLoggedInUser();

const profileUserName = profileAPI.getUserName();

export async function displayUserDetails() {
  try {
    // Fetch the profile details of the logged-in user
    const profileDetails = await profileAPI.getProfileDetails(profileUserName, {
      followers: true,
      following: true,
      posts: true,
    });
    console.log('profileDetails', profileDetails);

    const { bio, followers, following, posts } = profileDetails.data;

    // Create the HTML structure for user details
    const profileDetailsContainer = document.querySelector(".profile-details-container");
    profileDetailsContainer.innerHTML = `
    <div class="profile-header">
    <h2 class="capitalize-first-only">${profileUserName}</h2>
    <p>${bio || "Write your Bio"}</p>
    <div class="profile-stats">
      <div class="stat">
        <p>Followers</p>
        <span class="stat-number">${followers.length}</span>
      </div>
      <div class="stat">
        <p>Following</p>
        <span class="stat-number">${following.length}</span>
      </div>
      <div class="stat">
        <p>Posts</p>
        <span class="stat-number">${posts.length}</span>
      </div>
    </div>
  </div>
`;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
}

export async function readPostsByUser(username) {
    try {
      const response = await profileAPI.profile.readPosts(username);
      const posts = response || [];
   
      const postContainer = document.querySelector(".dashboard-container");
      postContainer.innerHTML = "";
     
        for (const post of posts) {
        const postElement = await createPostHTML(post,profileUserName);
        postContainer.appendChild(postElement);


      };
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  displayUserDetails();
  readPostsByUser();

  
