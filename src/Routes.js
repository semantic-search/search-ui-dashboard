import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import AudioSearch from "./Pages/AudioSearch";
import Dashboard from "./Pages/Dashboard";
import ElasticSearch from "./Pages/ElasticSearch";
import FaceSearch from "./Pages/FaceSearch";
import FileIndexing from "./Pages/FileIndexing";
import ImageSearch from "./Pages/ImageSearch";
import PersonSearch from "./Pages/PersonSearch";
import RegisterFace from "./Pages/RegisterFace";
import Typesense from "./Pages/Typesense";
import WebIndexing from "./Pages/WebIndexing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout path={RouteName.faceSearch} component={FaceSearch} />
        <MainLayout path={RouteName.registerFace} component={RegisterFace} />
        <MainLayout path={RouteName.personSearch} component={PersonSearch} />
        <MainLayout path={RouteName.imageSearch} component={ImageSearch} />
        <MainLayout path={RouteName.audioSearch} component={AudioSearch} />
        <MainLayout path={RouteName.typesense} component={Typesense} />
        <MainLayout path={RouteName.elasticsearch} component={ElasticSearch} />
        <MainLayout path={RouteName.webIndex} component={WebIndexing} />
        <MainLayout path={RouteName.indexFile} component={FileIndexing} />
        <MainLayout path={RouteName.dashboard} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

export const RouteName = {
  faceSearch: "/face-search",
  registerFace: "/register-face",
  personSearch: "/person-search",
  imageSearch: "/image-search",
  audioSearch: "/audio-search",
  elasticsearch: "/elasticsearch",
  typesense: "/typesense",
  indexFile: "/indexFile",
  webIndex: "/webIndex",
  dashboard: "/",
};
