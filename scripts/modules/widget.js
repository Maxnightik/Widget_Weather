import { cityServiceSearch } from "./cityServiceSearch.js";
import { startWidget } from "./widgetService.js";

const initWidget = async (app) => {
  const widget = await startWidget();
  app.append(widget);

  cityServiceSearch(widget);
};

initWidget(document.querySelector("#app"));
