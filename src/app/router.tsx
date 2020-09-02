import * as React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Csgo, Home, NotFound, Playground, Privacy, TermsOfUse } from '../app/pages';
import { Dashboard, Profile, Tracker, Compare, Tournaments, TacticalTimeout, Match } from './pages/csgo';
import { Appearance, Connections, Language, Notifications, Settings } from './pages/csgo/settings';
import { favicon } from 'lib/images';
import { AuthenticatedRoute } from './components/nav';
import { CookieConsent } from './components/cookieConsent';

export const Router: React.FC = () => (
  <React.Fragment>
    <Helmet>
      <link href={favicon} rel="icon" type="image/png" />
    </Helmet>
    <BrowserRouter>
      {/* Should probably move to another level */}
      <CookieConsent />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Privacy />} path="/privacy-policy" />
        <Route element={<TermsOfUse />} path="/terms-of-use" />
        { /* protected routes */}
        <AuthenticatedRoute element={<Csgo />} path="/csgo">
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Tracker />} path="/tracker" />
          <Route element={<Compare />} path="/compare" />
          <Route element={<TacticalTimeout />} path="/tactical-timeout" />
          <Route element={<Tournaments />} path="/tournaments" />
          <Route element={<Match />} path="/match/:matchId" />
          <Route element={<Profile />} path="/profile/:steamId" />
          <Route element={<Profile />} path="/profile" />
          { /* Settings */}
          <Route element={<Settings />} path="/settings">
            <Route element={<Connections />} path="/connections" />
            <Route element={<Notifications />} path="/notifications" />
            <Route element={<Appearance />} path="/appearance" />
            <Route element={<Language />} path="/language" />
          </Route>

          { /* Graphql playground */}
          <Route element={<Playground />} path="/playground" />
        </AuthenticatedRoute>
        <Route element={<NotFound />} path="*" />
      </Routes>
      { /* temporary workaround */}
    </BrowserRouter>
  </React.Fragment >
);
