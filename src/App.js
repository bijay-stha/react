import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dasboard";
import SignIn from "./components/auth/SinIn";

import "./App.css";
import Privacy from "./components/Privacy/Privacy";
import EventPage from "./components/Events/Event";
import Notifications from "./components/Notifications/Notifications";
import SignupPage from "./components/auth/SignupPage";
import AddPhotos from "./components/Photos/AddPhotos/AddPhotos";
import AlbumPage from "./components/Photos/AddPhotos/AlbumPage";
import Gallery from "./components/Photos/View Photo/Gallery";
import GalleryAlbumPage from "./components/Photos/View Photo/GalleryAlbumPage";
import ProfilePage from "./components/Profile/ProfilePage";
import EditProfile from "./components/Edit Profile/EditProfile";
import ExperianceDetailsPage from "./components/Account/ExperianceDetailsPage";
import EducationDetailsPage from "./components/Account/EducationDetailsPage";
import FamilyDetailsPage from "./components/Account/FamilyDetailsPage";
import EditProfileDetailsPage from "./components/Account/EditProfileDetailsPage";
import EditGenralDetails from "./components/Account/EditGenralDetails";
import EditProfilePage from "./components/Account/EditProfilePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route path="/login" component={SignIn} />

            <Route path="/privacy" component={Privacy}/>
              
            <Route path="/signup" component={SignupPage} />

            <Route path="/gallery" component={Gallery} />

            <Route path="/edit" component={EditProfile}/>
              
            <Route path="/notifications" component={Notifications}/>
             
            <Route path="/addphoto" component={AddPhotos} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/editpicture" component={EditProfilePage} />
            <Route path="/editgenral" component={EditGenralDetails} />
            <Route
              path="/editprofiledetail"
              component={EditProfileDetailsPage}
            />
            <Route path="/editfamily" component={FamilyDetailsPage} />
            <Route path="/addeducations" component={EducationDetailsPage} />
            <Route path="/addexperiance" component={ExperianceDetailsPage} />
            <Route path="/album/:id" component={AlbumPage} />
            <Route path="/view/:id" component={GalleryAlbumPage} />
            <Route path="/event" component={EventPage}/>
             
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
