RUN THE APP

git checkout develop

yarn
yarn run dev

IMPORTANT

- when updating dependencies you need to do this in `functions` and in the `src/app` the same

######

STORE

- important to understand that whenever nextjs renders on the server it will serialize the props and will pass them as JSON to the component
- but in case of the store you cannot pass it down as this is the object, so you can't have it is stuff like
  dispatch and getState on the client at that point
- so you need to get its reference again by importing it

TODO

- [ ] Login
  - [ ] login redirect to home page after success
- [ ] buttons
- [x] what UI libraries available?
  - orbit by Kiwi
- [x] hydrate previous state on refresh
- [ ] position login Iframe
- [x] font-awesome
- TECHNICAL
  - [ ] styling Orbit components

Current Task:

- frontpage input field width 200px;

Live Streaming:
-[] create youtube channel.
-[] click go to live.
-[] create title
-[] click next
-[] click share button.
-[] agin click Embed Then take code and place it in your website.
-[] then close the window
-[] again click live.
