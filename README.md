# Food Ordering App

Self learning notes

# Parcel(Bundler)

- Dev Build
- Local server
- HMR - Hot module Replacement
- File Watching Algorithm - written in c++
- Caching the ntwk data for faster builds
- Image Optimization
- Minification
- Bundling -
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - suport older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - removing unused code as way for performance optimization of web Apps
- Different dev and prod bundles.

# Two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

-(Normal JS utility functions)

- written by facebook/meta developers
- where did they write this? Inside React Lib.
- useState() -superpowerful state variable
- useEffect() - to connect our app to external s/m.
  -no dependency array -> called on every render of the component
  -empty dependency array - > called on initial render (juz once)
  -dependency added -> called everytime any state variable within component updated.

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# React's lifecycle methods diagram

![lifecyclemethodsdiagram](image.png)

# Lifecycle methods workflow

Constructor called ->State variable(dummy data) -> Render the component (dummy data ->Component did mount(API call) ->this.setState()[Updates state variable with API data]) |Mounting phase finishes|Update phase begins | ->render the component(API data) ->HTML loaded(DOM updated with API data) -> ComponentDidUpdate(called) | Update phase end| Unmount phase begins| -> ComponentWillUnMount

# Custom Hook

- custom utility fnc - spcl useCase - export as lib/npm package
- Single responsibility principle
- modularity -reusable, maintainable, testable,readable
- Abstract the fetching data(API call), and heavy loaded tasks inside the custom hook, so that it makes our code testable.
- maintain seperate file for each and every custom hook

# Bundling - in detail

- to break down the App into smaller chunks of code
- chunking
- code splittting
- dynamic bundling
- Ondemand loading
- Lazy loading
- Dynamic Import

# style the App using libraries and frameworks

all these below lib does the same work. Make informed decision as per your requirements.

- Material UI
- Chakra UI
- Tailwind css
- bootstrap
- Ant Design - 2nd most popular React UI Lib
- Styled Components in React

# Higher Order Components

- functions that takes component as i/p and modifies/enhances the component and returns a new component
- Higher order components are pure functions(it'wont modify or change the behaviour of i/p component directly)

# Controlled and UnControlled Components

- If the child component's state is controlled by parent and not on it's own is called controlled components.
- The child component state has been controlled and managed on it's own and parent has no effect over it is called uncontrolled components.

# How can a child component modifies the state variables of the parent?

- not directly but indirectly by a concept called Lifting state up.

# Props Drilling

- process of passing down data or state through multiple layers of component hierarchy
- necessary to maintain Application state but is an issue for complex App(to pass props 10 lvl deep)
- This can be avoided by React Context (good way to centralize data)

# React Context

- when using redux, no need of context in React's App.
- no need of external data management libraries/ state management libraries
- useContext(),
- <UserContext.Consumer> - used inside class based components.
- <UserContext.Provider> - override the default values of the context

# Redux ToolKit

- Install @reduxjs/toolkit and react-redux
- Build our own store
- connect our store to our App
- Slice (cartSlice)
- dispatch(action)
- Selector

# Redux - Architecture & how it works

![alt text](image-1.png)

- Redux store - A big obj to keep App data in central global place.
- Redux Slices - a small portion of redux store
- To modify/update slice data, we've to dispatch an action which calls the reducer fucntion which updates the slice of redux store.
- How to read data from Slice? Using 'Selectors' - the phenomenon is called as 'Subscribing to the store'
- ConfigureStore - to configure a store(@reduxjs/toolkit) | Provider - providing the store to react App(react-redux)
- Actions - Kind of API to communicate with Redux store
- Reducer Function - mutating the state in Slice's func
- useSelector hook - responsible for selecting a part of redux store's state/computing derived data.
- useDispatch hook - to dispatch actions
- redux dev tools, Immer Lib, RTK Query
