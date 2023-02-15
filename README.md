# Project Name: OrderBook recruitment task

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project documentation](#project-documentation)
* [Tests](#tests)

## General info
The project was created as a recruitment task. The goal was to create a order book. User is able to select 2 currencies (base and crypto). Cryptocurrencies are assigned to one or more markets (base currencies). Default currencies pair is "BTC-PLN". There is comunication with Zonda API to get all information: 10 highest bid orders and 10 the lowest ask orders. I collected and displayed also some general information about current currencies pair (minimun in 24h, maximun in 24h, current rate, vulume in 24h). Also spread beetwen bid and ask is calculated( in 2 variants).
	
## Technologies
Project is created with:
* Vue 3
* TypeScript
* Sass
* Chai
* Mocha
* Axios
* Vue-cli
	
## Setup
To run this project, clone the repo and install packages:
```
$ npm install
```
To run application locally run:
```
$ npm serve
```
To run unit tests:
```
$ npm test:unit
```
To build project:
```
$ npm build
```
## Project documentation
#### Currency pair user selection:
User is able to select 2 currencies (base and crypto). There are 7 base currencies and much more crypto currencies avaiable in the app. Cryptocurrencies are assigned to one or more markets (base currencies). Some markets like "PLN" or "EUR" has a lot cryptocurrencies, other has only few of them. Cryptocurrencies are filtered so user can choose only avaiable.

![choose](https://user-images.githubusercontent.com/38325349/219133535-d0c42017-7262-4750-9b2f-4da7f5983fdf.JPG)

#### Current currencies pair info
Few informations are displayed in this section:
- current currency pair
- current rate
- maximum rate in last 24h
- minimum rate in last 24h
- volume of last 24h
These informations are updated once per 5 seconds (or if user change currency pair)

![current-pair](https://user-images.githubusercontent.com/38325349/219133626-6a8c2900-9c16-4915-88d8-f194b9812cee.JPG)

#### Order book
Order book consist of 10 highest bid orders and 10 the lowest ask orders. Orders are updated once per second.
In addition spread is calculated (in two variants):
- as an absolute value: (ask - bid)
- in percentage value: ((ask - bid)/ask)* 100%

![order-book](https://user-images.githubusercontent.com/38325349/219133702-04987c60-7f0a-4d01-8d6f-6f919149a7d2.JPG)

#### Mobile view 
![mobile 1](https://user-images.githubusercontent.com/38325349/219136535-fc93ce69-ecd7-4f8b-9ff0-40c3dd4bf49b.JPG)

![mobile 2](https://user-images.githubusercontent.com/38325349/219136540-14639bde-2d5f-4973-9e07-71f88323dbf8.JPG)

![mobile 3](https://user-images.githubusercontent.com/38325349/219136557-a07f23d4-d093-47b2-af4d-fc784ce4fd9a.JPG)


## Tests
There are unit tests specified for each component. Things like: props, methods, computed properties, conditional rendered elements, additional classes are tested there.

Test executed example:

![testy](https://user-images.githubusercontent.com/38325349/219132527-e6de1e0a-cb19-4668-affa-c163034856ff.JPG)


