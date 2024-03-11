# Food Ordering App

Self learning notes

Two types of Export/Import

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
