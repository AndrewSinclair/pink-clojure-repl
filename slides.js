var Pink = require("pink");

new Pink("#slides", {
  "background": require("pink/modules/background"),
  "image": require("pink/modules/image"),
  "editor": require("pink/modules/editor")([
    require("pink/modules/editor/language/clojure")
  ])
});
