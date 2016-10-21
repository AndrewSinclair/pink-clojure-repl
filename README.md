# pink-clojure-repl
## It's a JavaScript slide deck with builtin _Clojure_ worksheets!

In order to use this to full potential, you will have you run two servers:

 1. Clojure Repl server
 2. Node slide deck server

 
## 1. Clojure
### run server
```
cd repl-server
lein run
```


## 2. Node
### Install npm dependencies
```
npm install
```

### Run slides
```
npm start
```


## Appendix A: Example of Slides

Do your slides like this:

```
  <section>
    <h1>This is a Normal Text Slide!</h1>
    <p>That's why there is just normal text onscreen</p>
  </section>

  <section data-editor="text/x-clojure">
  (ns core.slides)

  (str "Hello, Clojure Enthusiasts! " (+ 1 2 3 4 5))
  </section>
```

