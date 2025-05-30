# Message in a Bottle

## Overview

Welcome to “Message in a Bottle”! This is my final project for my CS 408 class at Boise State University. The intention of this
final project is to implement a full-stack website. This will involve using HTML, CSS, and JS on the front-end, and then using
AWS for the database on the backend. Several JSON files may be used as necessary (for word filters, for instance). The project
I have chosen is to display a message in a bottle for the user, who can then replace that message with their own for the next
person.

## General Theme

The general theme of this website is a fun, autonomous "chat room" with a twist - only one saved message at a time, and no real 
way to confirm who you're speaking with. This site is going to offer users a chance to read a message from a "bottle" and decide 
whether or not to replace that message with their own for others to see. 

## Target Audience

There is no real target audience for this site, as the reason for wanting to use a message in a bottle can vary. If anything, 
the target audience of this site is most likely going to be those seeking a novel experience - probably bored people at work, 
school, in bed, or on sick leave. Whichever it is, Message in a Bottle will be a fun place to hand out random ideas, wisdoms, 
jokes, or perhaps even strike up a conversation (or even butt into one!). It’s likely this target audience will want a fast 
site that doesn’t need more than 5 seconds to load; hopefully, this site will involve low processing and be easy to access in 
order to best help fix that craving for distraction or curiosity, fast.

## Anticipated Product

This site has a lot of potential for stretch goals - although it is a simple concept, the ceiling to this project can get pretty 
high pretty fast. Unfortunately, there is only so much time to finish this project. With that being said, the final form of
this will be to create a simple structure of the site demonstrating the concept while also offering a fun time waster for those
curious or bored. This involves a landing page showing a message in a bottle that, when clicked on, will redirect the user to a
new page with an open message and a form to write their own (replace button included).

## How Will It Function?

This site will mainly manage strings given by the users. These simple messages will have a max character count and will be 
filtered before being stored for the next user to retrieve. These filters will likely include a function which references a 
JSON file to be consulted to avoid bad or inappropriate language as well as a code-injection filter to prevent hackers.

The proper function should look something like this: I will create a simple start message, PUT that message in the database, 
let the site GET that message for the user, then, if the user decides to replace it, let the site DELETE that message and PUT 
the new message in the database for the nextuser (or current). The database will likely be stored on the AWS server. If I 
wanted to keep this project going longer post-graduation, I would have to consider an alternative service as I lose access to 
my student accounts.

## Extras and Stretch Goals

This initial simple design will involve no animations or wild formatting at first, just to make sure the site works as intended. Then, 
with extra time available, these fun things can be added! This includes animations for the bottle, color to the page (or lack-of in 
order to keep it clean), maybe even a custom font for the messages to look more like written ones you'd assume to find in bottles.

Beyond that, further stretch goals would be to add several bottles, then perhaps a voting system on what messages get stored in which 
bottles, perhaps a land-locked method that keeps users on their respective 'lands' yet allows them to send bottles to other 
lands - the sky gets wide with some creativity involved.

One fun stretch goal might be learning how to handle what the user sees after they "cast the bottle back
into the ocean" (write their message and replace). Maybe the database could store the session ID of the most recent user?
Then, while that session ID matches, it keeps the user on a screen where the bottle can be seen drifting away or something.
If another user then accesses the bottle and replaces the message, the current user is then greeted by the normal start-up
screen.

Either way, I hope this site can be enjoyed for what it's worth and provide a novel 10 seconds of entertainment for those stopping by.


## Project Wireframe

Users will be greeted by a bottle with a message inside. Once they click the bottle, the message will open up. The user then
has the option to write their message and replace the current message. Below is the rough framework of this idea:

![wireframe](/img/moqup.png)
