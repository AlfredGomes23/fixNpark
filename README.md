#   Installation and Setup
***(Make sure that - nodejs, git scm, nodemon(globally) is installed in the device).
At any directory, open the VSCode terminal or the Windows’s cmd/terminal and run the following commands sequentially-
for server:

    1. git clone https://github.com/AlfredGomes23/fixNpark.git
    2. cd .\fixNpark\fixNpark_server
    3. npm i
    4. nodemon index.js
Now, visit http://localhost:5000/status

Then, open a __new__ terminal tab/window and run the following commands sequentially again-
    1. cd .\fixNpark\fixNpark_client
    2. npm i
    3. npm run dev
Then visit http://localhost:5173

