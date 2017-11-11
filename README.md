# Hackernews-clone
This project is part of assessment test for WWSTAY 

## Installing prerequisite required to run the server (Linux)

```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
source ~/.bashrc
nvm install 8.9.0
```

## Testing how production machine would serve (Linux)

The Build folder is ready to deploy and can be added to root folder of the Server 

For testing purposes we shall use `serve` : 
```sh
npm install -g serve
```

Go to the folder where the above `build` folder is presentand run the following

```sh
serve -s build
```


The files created inside the build folder can be deployed onto the production server.
