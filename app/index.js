import angular from "angular";

import "./components";
import "./services/sticklr";

angular.module("sticklr-state", [])
  .value('state', {});

angular.module("sticklr", [
  "sticklr-components",
  "sticklr-lib",
  "sticklr-state",
]);
