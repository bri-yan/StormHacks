# **fairify** | StormHacks 2021 1st Place 
![slide1](https://i.imgur.com/v5f8DMo.jpg)

### YouTube Presentaion
https://www.youtube.com/watch?v=fKlYTX6X1uY
### HackHub Submission
https://event.hackhub.com/event/stormhacks_2021/submissions/4828


## Table Of Contents

* [Rationale](#rationale)
* [Project Description](#project-description)
* [Setup](#setup)
* [Web App Walkthrough](#web-app-walkthrough)
* [Technologies](#technologies)

## Rationale
**fairify** is our team’s submission for StormHacks 2021.In an increasingly complex world, unethical and unfair practices are becoming harder to identify, while honest businesses are struggling to stand out against all the insincere marketing of big corporations (also known as fairwashing). It feels like every day there’s another uncovered secret about a brand or product whose unethical practices have long gone under my radar.So naturally, we found ourselves looking into fair-trade, an arrangement designed to help producers in growing countries achieve sustainable and equitable trade relationships. By connecting a diverse group of producers, companies, and consumers, the powerful fair trade movement is able to help everyone do what is right for families, fellow global citizens, and the planet.And this led us to the question, how do we shop ethically and sustainably? 
The answer is by voting with our money for responsible companies and products that have fair trade certifications from major organisations, and a great community reputation. However, as there are many companies that actively take part in “fairwashing”, is there a way we could easily, conveniently and accurately determine whether a product is ethically produced?

## Project Descrpiton

Presenting fairify, your go-to platform for everything fair-trade. Our project provides users with critical fair trade information about the comapnies that ther are purchasing products from. By providing you with compiled fair-trade certifications, related news articles, and easily understandable metrics, you can support and share ethical and sustainable practices with ease. Our machine learning powered, fair trade composite rating is compiled using four metrics. Number one, a reputation score computed based on a company’s the online communities review. Number two, a fair trade news score gleaned articles scraped from reliable sources and analysed with our natural language processing toolkit. Number three, a sentiment index calculated based on a evidence of a companies efforts to support fair trade. And four, a lookup of a company’s fair trade certificates from related databases.

## Setup

### Prerequisites 

1) [`Python`](https://www.python.org/) must be installed on your device.
2) [`Node`](https://nodejs.org/en/download/) must also be install on your device to install other packages.

### Windows Setup

Install these packages using the terminal:
```
pip install Flask
pip install Flask-Cors
pip install nltk
pip install requests
pip install bs4
pip install purl
pip3 install newspaper3k (newspaper for Python3)
pip install googlesearch-python
pip install unidecode
```

Install yarn using npm (node package manager):
```
npm install --global yarn 
yarn install
```

Run `npm install` to install the required node dependencies.

Use `python3 backend/hello.py` to start the flask App and then `npm start` to start the React app.

## Web App Walkthrough

When you open the fairify app you are greated by our landing page.
<img src="https://cdn.discordapp.com/attachments/749751927604117527/928834109881589780/unknown.png">

After clicking on the "Try it out" button, you will be directed to our search.

<img src="https://cdn.discordapp.com/attachments/749751927604117527/928834290559635557/unknown.png">

Here you can search for any company or product of your choosing. For example, here is an example of searching for "Nike". After waiting for a few seconds while the backend 
code is processing your search, you are greeted by a wonderful dashboard with compiled metrics.

<img src="https://cdn.discordapp.com/attachments/749751927604117527/928834418913726474/unknown.png">

As you continue to scroll down, you will see a compilation of news articals from the web related to Nike's ethical and fair trade practices.

<img src="https://cdn.discordapp.com/attachments/749751927604117527/928855471580905552/unknown.png">

As you continue to scroll you will see suggestions of products from more ethically sourced, related brands. In this case, we see clothing suggestions because we searched for Nike.

<img src="https://cdn.discordapp.com/attachments/749751927604117527/928834627110592583/unknown.png">

## Technologies

* [Python 3.9.1](https://www.python.org/)
* [PyTorch 1.9.0](https://pytorch.org/)
* [React](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [Node.js](https://nodejs.org/)
