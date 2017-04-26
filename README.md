Mongoose schema is found in models/.

Everything in `client` is a react application.  We can start the react code base
by cd into `client` and running `npm start`.

Everything outside of client is our node-specific app - it only manages DB and
API endpoints.  We can startup this project with `nodemon` or `node server`

Each app has its own node-modules and package.json.

Creating an application to blend the start of both apps through one commands...
to start both at once, run `npm run dev` which is created in our node
package.json.
