## Imagine People Managing A "A" Conversation [IPMAAC]

This is the server code for a personal project.
<br><br>
The site hosted allows non-techie users to easily use webhooks on server channels.
It will also have a permission system and logs system to allow for moderation.
<br><br>
You may use this for your own server at your own discretion.
I take no responsibility for it working for you but heres a guide to setting it up
<br><hr>

Environment variables required:<br>

DATABASE_URL: <br>
`<Your Database Access URL (MongoDB)>` <br>
_example: mongodb+srv://DB:\<password\>@mane.60frh.mongodb.net/Database?retryWrites=true&w=majority_

PORT: <br>
`<Port for server to listen on>`<br>

<b>Port is set to 4040 if not specified</b>

Upload it to whatever hosting service.
Install dependencies

Finally, write run `npm run admin` to create a root account with default passcode 'admin' to let you login.<br>
Start the server with `npm run start` if it isn't running already.<br>
Then login as this user on the website to setup everything, including another root account with a safe passcode which you will use as your admin account.<br>
Then run `npm run rem_admin` to remove the account created by `npm run admin`.<br>