# Biblio-mini-app
Created using Polymer App Toolbox - Starter Kit


# Demo

Hosted on netlify

https://trusting-booth-8fabc5.netlify.com

## Review  

I spent a good hour or so going through the getting started documentation and trying to understanding the data-bindinding used throughout iron-ajax.

Initially, I played around with the iron-image tags and got the CSS somewhat similar to cards on bibliotech books page.

Once I was happy with the results, I hosted the web-app on Netlify so I had a fully functional link with CI & CD.

I then started working on implementing the iron-ajax and showing the meta-information appropriately. There's not a lot of documentation that uses Polymer 3 so I had to play around with older version which worked.

I couldn't get toc to display correctly and this would be on my to-do list for improvments.

I was using a local version of index.json on a local server which meant the json would load up correctly. However when I pushed this on Netilfy or the es5 build I was left scratching my head for a while as the json weren't loading. This was solved by simply swapping the local url for https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json 


