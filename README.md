To run this project, you can follow these instructions:
1. Make sure you have Node.js installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the root directory where the `index.js` file is located.
4. Install the required dependencies by running the `npm install` command.
5. Run the script by executing the following command: `node index.js repo={your_repo} module={module_name} version={module_version}`. You can skip the repo variable and my default repo <a href="https://github.com/YanaKopyshchyk1/nodejs-20220114_yana-kopyshchyk">nodejs-20220114_yana-kopyshchyk</a> will be used. For example, you can update `react` module version in it. 
6. The script will then execute the logic defined in the code. It will check if the specified module version differs from the current repository version. If they are different, it will update the file, create a new branch, push the updated file to the branch, and create a pull request. If they are the same, it will print a message indicating that the module version is already up-to-date.
For simplicity and test purposes, some variables in the code are hardcoded.
7. Created PR by this script <a href="https://github.com/YanaKopyshchyk1/nodejs-20220114_yana-kopyshchyk/pull/8">here</a>.
