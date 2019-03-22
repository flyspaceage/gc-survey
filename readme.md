## 1. Create a Server

`docker run --name poll-lamp -p 5050:80 -dti -v ${PWD}:/var/www/html jschnor/lamp`

If you want to ssh into the container, use `docker exec -ti poll-lamp bash`


## 2. Visit the site in your browser

Just go to [http://localhost:5050/](http://localhost:5050/).


## Deployment

The `/dist` folder contains all necessary assets and the index page. You should be able to deploy the contents of this folder and nothing else.
