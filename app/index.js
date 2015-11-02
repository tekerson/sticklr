import angular from "angular";

import "./components";
import "./services/sticklr";

angular.module("sticklr", [
  "sticklr-components",
  "sticklr-lib",
]);
