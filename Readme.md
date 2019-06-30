
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align="center">t.browser.js</h3>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align="center">
  JavaScript System Library for the Browser
</p>

<br/>
<br/>

<p align="center">
  <a href="#usage">Installation</a> •
  <a href="#license">Illustration</a> •
  <a href="#introduction">Introduction</a>
</p>

<br/>
<br/>
<br/>

### Installation

```html
<script src="https://raw.githubusercontent.com/4210/t.browser.js/master/build/t.js"></script>
```

<br/>

### Illustration

```js
t(5, 7)
```

### Introduction

This is licensed under the [GNU General Public License](docs/License.md).

This aggregates all the API calls for the browser in one place. It doesn't do anything fancy around them. It gets values, sets values, and calls functions.

Then something builds on top of this to provide a way to call these methods with only passing around integers.

A final layer builds an engine on top of that for processing input and output.

Then it's up to layers on top of that to build simplification abstractions for common cases.

```
x(5, 11) (debug math.round)
```
