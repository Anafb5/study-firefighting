(function () {
  "use strict";
  const capacitor = window.Capacitor;
  if (!capacitor || !capacitor.isNativePlatform || !capacitor.isNativePlatform()) return;

  document.documentElement.classList.add("native-app");
  const app = capacitor.Plugins && capacitor.Plugins.App;
  if (!app || !app.addListener) return;

  app.addListener("backButton", ({ canGoBack }) => {
    if (document.querySelector(".modal.open, [aria-modal='true']:not([hidden])")) {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    } else if (canGoBack) {
      history.back();
    } else if (/\/temas\/\d+\//.test(location.pathname)) {
      location.href = "../../";
    } else {
      app.exitApp();
    }
  });
}());
