Introduce
    This project is demo page of Protto Homework.

Install
    1. install npm 8.11.1
    2. npm i
    3. npm start
    4. open http://localhost:3000

Code Structure
    1. Router
    2. List page
        1. View
            1. Render list data
            2. Render current offset range, and up down space
            3. Loading icon at bottom
        2. Model
            1. Loading icon
                1. Disappear when fail
            2. Offset height
                1. By condition (agent info)
            3. List data
                1. Context
                2. Listen offset
            4. Offset
                1. Hook (scroll detect, mount, unmount)
                2. Context
                3. Load new data if scroll to 95% (offset +1 )
                4. Get, Add
            5. Current offset
                1. Do Pagination (3 parts, 25% 75%)
                2. Hook (scroll detect, mount, unmount)
                3. Context
                4. Get , Add, Delete
    3. Detail page
        1. Get api
        2. Model
            1. Info
                1. Context
                2. Get, set


package usage
    html-loader - load html into webpack
    svg-url-loader - load svg file
    @babel/plugin-proposal-class-properties - enable class property (state in class)
    webpack-dev-server - dev web project
    eslint - check eslint
