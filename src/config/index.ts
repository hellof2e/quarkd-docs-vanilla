import configJson from "../docs/config.json";
import baseConfig from "./baseConfig";

let config: any = {};

config = {
  ...configJson,
  ...baseConfig,
};

export const {
  nav,
  docs,
  version,
  demoUrl,
  homePage,
  versions,
  header,
  repository,
} = config;
