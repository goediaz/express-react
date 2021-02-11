# React and express assigment

## Steps to run:

- Install dependencies of the server project:

`cd server`

`npm install`

- Install dependencies of the client project:

`cd client`

`npm install`


- Once both project's dependencies are installed just run this command at the `server directory`:

`npm run dev`

>This will run the server and the client at the same time and with a single console. The server should be running on port `5000` and the client on `3000`.

- Your default browser should open directly with `http://localhost:3000` as URL.

## TODO:

- Try to use a masonry design for a main component in order to be more faithful to the original example.
- Make each features card able to render 2 tables of features inside.
- Create a Parts Generator on the server side to test and display more diverse quantity of data.
- Since the target of the assignement was a low-end machine I think it's a good idea to implement code spliting to reduce the bundle.
- I'm not satified with how the UI looks and how the cards are displayed. It could use a rework of the css.



## Comments on implementation

- I decided to don't use Redux with Thunk to call the api in the reducers because of the quatity of files and structure this generates. It would have been a lot of extra files and logic that would only have complicated the exercise.
- The service file on the client and the both endpoints on the api are mostly the same. It could be merged only in one endpoint or function (in the client) for this assigment but I though is a good idea to have 2 separate endpoints/functions just to have a more realistic example (Even if it means to duplicate code).
- I really enjoyed thinking and designing the whole process and not only the API. I really wanted to play more with node. For example I wanted to try Sails.js just to learn something new but I couldn't make it in time.
- I also really wanted to use docker in this assignament to give it a try with this application (This will probably be implemented in the future).
