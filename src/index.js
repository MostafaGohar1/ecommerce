window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import "@fortawesome/fontawesome-free/js/all";
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
