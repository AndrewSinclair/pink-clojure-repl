# pink-clojure-repl

This will have you run two servers:
 1. Clojure Repl server
 2. Node slide deck server

## Node
### install npm dependencies
```
npm install
```

### run slides
```
npm start
```


## Clojure
### run server
```
cd repl-server
lein run
```


## Slides

Do your slides like this:

```
  <section>
    <h1>This is a Normal Text Slide!</h1>
    <p>That's why there is just normal text onscreen</p>
  </section>

  <section data-editor="text/x-clojure">
    (ns core.slides)

    (println "Hello, Clojure Enthusiasts!")
  </section>
```

