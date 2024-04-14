class UI {
    constructor() {
        this.profile = document.querySelector(".profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="profile border p-4 flex flex-col md:flex-row">
                <div class="mb-4 md:mr-4">
                <p class="bg-purple-200 p-3 rounded-full hover:bg-purple-400 text-center hover:text-white mb-2"> Profile Picture </p>
                <img src="${user.avatar_url}"
                    class="object-cover w-full mt-9 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    alt=" avatar" srcset="">
            </div>
            <div class="document flex-1">
                <div class="btn-top mb-4">
                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white"><a href= "${user.html_url}" target="_blank">Visit Profile</a>
                        <span>&#8599;</span></button>
                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white mb-2">Follower <span class="bg-purple-300 rounded-full p-2">${user.followers}</span></button></button>
                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white mb-2">Following <span class="bg-purple-300 rounded-full p-2">${user.following}</span></button>
                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white mb-2"><a href="${user.blog}">Blog</a><span>&#8599;</span></button>
                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white mb-2"><a href="https://github.com/${user.login}?tab=repositories" target="_blank">Public
                        Repository </a><span class="bg-purple-300 rounded-full p-2">${user.public_repos}</span><span>&#8599;</span></button>

                    <button type="button"
                        class="bg-purple-200 p-3 rounded-full text-sm hover:bg-purple-400 hover:text-white">Public
                        Gists <span class="bg-purple-300 rounded-full p-2">${user.public_gists}</span></button>

                </div>
                <div class="description pr-3">
                    <ul class="divide-y divide-gray-200 text-sm">
                        <li class="h-auto py-2">Name : ${user.name}</li>
                        <li class="h-auto py-2">Company : ${user.company}</li>
                        <li class="h-auto py-2">Location : ${user.location}</li>
                        <li class="h-auto py-2">Bio : ${user.bio}</li>
                        <li class="h-auto py-2">Created Date : ${user.created_at}</li>
                        <li class="h-auto py-2">Last Update : ${user.updated_at}</li>
                    </ul>

                </div>
            </div>
        `;
    }
}
