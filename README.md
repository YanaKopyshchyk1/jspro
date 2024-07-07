To run this project, you can follow these instructions:
1. Make sure you have Node.js installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the root directory.
4. Install the required dependencies by running the `npm install` command.
5. Run the script by executing the following command: 

    `node index.js repo={your_repo} module={module_name} version={module_version}`,

where

    {your_repo} - repository where you want to update package.json
    {module_name} - npm module whose version you want to upgrade
    {module_version} - desired new version of npm module

9. Update in `constants.js` file GitHub related constants for authentication.
10. To run tests: `npm test`
11. <a href="https://github.com/YanaKopyshchyk1/nodejs-20220114_yana-kopyshchyk/pull/10">My example PR</a> created using script.
