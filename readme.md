# Introduce
This project is demo page of Protto Homework.

# Install
    1. install npm 8.11.1
    2. npm i
    3. npm start
    4. open http://localhost:3000

# Code Structure
    1. Router
    2. List page
        1. View
            1. Render list data
            3. Loading icon at bottom
            4. RWD for mobile (Card width)
        2. Model
            1. List data
                1. Context
                2. Hook for Listen offset and get new list
            2. Offset
                1. Hook (scroll detect, mount, unmount)
                2. Context
                3. Load new data if scroll to bottom (offset +1 )
    3. Detail page
        1. Get api
        2. Model
            1. detail
                1. Context

# package usage
    #html-loader - load html into webpack
    #svg-url-loader - load svg file
    #@babel/plugin-proposal-class-properties - enable class #property (state in class)
    #webpack-dev-server - dev web project
    #eslint - check eslint
