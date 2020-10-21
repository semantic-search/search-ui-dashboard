import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import AudioSearch from "./Pages/AudioSearch";
import Dashboard from "./Pages/Dashboard";
import ElasticSearch from "./Pages/ElasticSearch";
import FaceSearch from "./Pages/FaceSearch";
import ImageSearch from "./Pages/ImageSearch";
import Typesense from "./Pages/Typesense";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout path={RouteName.faceSearch} component={FaceSearch} />
        <MainLayout path={RouteName.imageSearch} component={ImageSearch} />
        <MainLayout path={RouteName.audioSearch} component={AudioSearch} />
        <MainLayout path={RouteName.typesense} component={Typesense} />
        <MainLayout path={RouteName.elasticsearch} component={ElasticSearch} />
        <MainLayout path={RouteName.dashboard} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

export const RouteName = {
  faceSearch: "/face-search",
  imageSearch: "/image-search",
  audioSearch: "/audio-search",
  elasticsearch: "/elasticsearch",
  typesense: "/typesense",
  dashboard: "/",
};
