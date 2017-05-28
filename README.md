# FreeCodeCamp challenge "Show the Local Weather"

[CodePen](https://codepen.io/clobrano/pen/wGrbgo)

Update: 2017-05-28: For some reason, CodePen does not show anymore the weather, while the data is received from OpenWeatherMap and then parsed. Locally, this still works, but "works for me" is not the best answer. I'm going to fix this behavior in the next days.

Moreover, I can't really show the result on services like RawGit, because OpenWheatherMap API are http only and your browser will complain about "mixed contents" (which is expected).

Fixing "mixed content" issue is not required at this point.


# Rules, User story and hints:

Objective: Build a CodePen.io app that is functionally similar to this: http://codepen.io/FreeCodeCamp/full/bELRjV.

    Rule #1: Don't look at the example project's code. Figure it out for yourself.

    Rule #2: Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

    User Story: I can see the weather in my current location.

    User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

    User Story: I can push a button to toggle between Fahrenheit and Celsius.

Note: Many internet browsers now require an HTTP Secure (https://) connection to obtain a user's locale via HTML5 Geolocation. For this reason, you will need to choose one of two paths to complete this project:

    Use HTML5 Geolocation to get user location and then use the Dark Sky API which uses an HTTP Secure connection for the weather. Also, be sure to connect to CodePen.io via https://.

Or:

    Use an Internet Protocol API to get user location (ex. IP-API) and then use the OpenWeatherMap API for the weather. Be sure to connect to CodePen.io via http://.

Either weather API service will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.


I completed this challenge in 2016, but in 2017 I found out that the code was not working anymore on CodePen.io and decided to move everything here on Github for having more control.

