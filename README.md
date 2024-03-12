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
