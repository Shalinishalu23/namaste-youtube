# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



day 1
Emmet?
Library and Framework
CDN?
React and ReactDOM
async and defer?
day  
chit chat
day 2
pros = attri
bundles=> package of js files(vite, parcel,webpack) babels
npm init -y (-y for skip):to create package file
npm i -D parcel:to install parcel -D(only for development )
package and package lock
^ and ~ for major and minor version of the package
npm install react
npm parcel index.html
HMR hot module reload
npx parcel build index.html
browser list
day 3
rename command line for start & build in package
start => npm start
buil => npm run build
babel plugin transform remove console:to remove consoles, error and warn
JSX
babel convert jsx in to react code
react component
1)function -new(name starts with caps
2)class based - old
sanitizers n cors
{const name},

<title/> companent composition :nested components
,{abs()}
day 4
react.fragment or <> :to remove extra div
jSX will be having only on parent
jsx<div style={style const name}>
css from inline and from class
config driven UI
optional chaning ?
prop
destructing of obj
spread operate
use map for for loop
reconcilation or virtual dom or key( diff algo to div from div)
day 5
named import{}, default import
usestate
const [search ,setSearch]=usestate("KFC")
day 6
useeffect(()=>{}[])==> [] is dependent array
cross chrome to call api from local host CORS
shimmer effect
condintion redering
early return
day 7
useeffect(()=>{}, empty) call every time
useeffect(()=>{}, [])only once after render
useeffect(()=>{}, [text]) depend on text
dont create component inside component
never use usestate inside if else for
dont call usestate outside function
form(formik package)
routing = react routing npm
creatBrowserRouter, RouterProvider
userouteerror(hook) for error
routing(client routing , server routing)
link from react-dom for router
outlet for the body loading in page apart from header and footer
dynamic routing useParam to read url
day 8 class component
nested route
use child com from nested route
1.funtional component
2.Class based component(class profile)
render()
constructor(prop)
super(prop)
this.state and this.setstate
life cycle
construct,render,componentdidmount(api call)
render phase
commit phase
componentDidMount
componentDidUpdate
componentWillUnmount
clear setTimeout
return() in useEffect to unmount
day 9 custome hook,lazy loading
create custome hook
is online window online event
lazzy loading=>lazy(), <suspense fallback={shimmer}/>(to wait until to load)
day 10 @12'o start Tailwind CSS
works with classname
tailwindcss inteligence
[20] for dyamic values
media query
sm:bg-clo red
day 11
Accordion example(read this again)
react dev tool(compound , profile)
Props drilling ( passing props from parent=> child=>grand child=> great grand child)
lifting the state up(maintaining the state of children from the parent)
(2:08:00)
React context:(behavior subject) (to pass data from 1 com to another other comp)
creatContext file(to creat context), useContext(to use )
<userContext.comsumer>in class component we ll use context as component
<userContext.Provider>
user.Context.display=""
day 12 Redux toolkit(big {})
UI layer and data layer
store(only on instance for entire app but multiple slice)
cant change store directly call the function(reducer)
dispatch an action=>call reducer fn => it updates the slice redux store 
selector(subscribe) to read the store
npm @reduxjs/toolkit 
npm react-redux(bridge react and redux)
to create store= configureStore({})
App.js <provider store={storeName} >(to map our stope to app)
creatSlice
export default sliceName.reducer
connect store to component{useSelector}
dispact(additem(data))

day 13 React testing library

day 14 Machine coding(youtube)
	Requirment
		feature to ask
		tech stack(UI layer and data layer)
			redux
			tailwind
			form 
			router
			bundler
			jest testing
	layout
create -> npx create-react-app project_Name 
run -> npm start
install tailwind -> npm i -D tailwindcss
add tailwind css -> npx tailwindcss init -> creates tailwind config file
in app.css-> remove old code and add @tailwind base, component and utility
rafce -> to create default code
create component of head, body, side bar
redux store => npm i @reduxjs/toolkit, npm i react-redux
create store
Routing -> npm i react-router-dom 
create browser in app js and give router provider
higher order function=> takes component and return components
search - debouncing
cashe
comments n level nested data

Report web vitals- for data visualization

flex
react.fragment or <>
config driven UI
destruct of data
spread operate
reconcilation or virtual dom or key or diff algo and react fiber
react fiber is new reconcilation responsible for div
react context
Redux toolkit= tool
redux store