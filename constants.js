// Path of the file to be updated, it's the package.json file in this case, usually it locates in the root of the repository
export const path = 'package.json'
// Headers for the GitHub API request
export const apiHeader = { 'X-GitHub-Api-Version': '2022-11-28' }
export const jsonAcceptHeader = { 'Accept': 'application/vnd.github.raw+json' }
export const headers = { ...apiHeader }

// Replace below variables with your GitHub username and personal access token
// Owner is the username of the repository owner
export const owner = 'github_username'
export const committer = {
    name: 'Github user name',
    email: 'github_email',
}
// Personal access token for authentication and default repository
export const ACCESS_TOKEN = 'github_personal_access_token'
export const DEFAULT_REPO = 'default_repo_name'
// Default branch for the repository
export const DEFAULT_BRANCH = 'master'