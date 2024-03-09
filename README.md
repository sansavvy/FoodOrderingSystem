# Sample React Project

# Namastae Food

/\*\*

- Header
- - Logo
- -Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
- -Img
- -Name of Res, Star-Rating, Cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- -Contact
  \*/

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
