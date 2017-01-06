# LightIcon
A light icon package

##This is an icon package.
##How to use.

###First

```
npm install --save lighticon
```

###Second
Modify your webpack.config.js, add this config:

```
module:{
    loaders:[
        { 
            test: /\.svg$/, 
            loader: 'babel?presets[]=es2015,presets[]=react!svg-react' 
        }
    ]
}
```
Now, enjoy yourself.

Here is my [person blog](https://blog.yvanwang.com).
