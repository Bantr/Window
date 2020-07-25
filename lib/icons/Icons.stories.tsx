import * as React from 'react';
import styled from 'styled-components';
import { Icon } from './BaseIcon';

import {
  Action, AlertTriangle, Archive, Arrow, ArrowBig, Attachment,
  Bantr, Bell,
  CheckMark, Clock, Copy, CreditCard,
  Dashboard, Discord,
  Edit, Eye, EyeOff,
  Faceit, Filter, Fullscreen,
  Github, Globe, GlobeDetailed,
  Hamburger, Heart,
  LogOut,
  Maps, Minus,
  People, Person, PersonAdd, PersonRemove, Plus, Premium,
  QuestionMark,
  Search, Settings, Star, Steam,
  Text, Tournament, Tracker, Trash,
  Undo,
  Video
} from './Icons';

import {
  ItemDefuser,
  WeaponAk47, WeaponAug, WeaponAwp,
  WeaponBizon,
  WeaponC4, WeaponCZ75a,
  WeaponDeagle, WeaponDecoy,
  WeaponElite,
  WeaponFamas, WeaponFiveSeven, WeaponFlashbang,
  WeaponGS3SG1, WeaponGalilAr, WeaponGlock,
  WeaponHeGrenade, WeaponHkp2000,
  WeaponIncGrenade,
  WeaponKnife,
  WeaponM249, WeaponM4a1, WeaponM4a1Silencer, WeaponMac10, WeaponMag7, WeaponMolotov, WeaponMp7, WeaponMp9,
  WeaponNegev, WeaponNova,
  WeaponP250, WeaponP90, WeaponRevolver,
  WeaponSG556, WeaponSSG08, WeaponSawedoff, WeaponScar20, WeaponSmokeGrenade,
  WeaponTaser, WeaponTec9,
  WeaponUmp45, WeaponUspSilencer,
  WeaponXm1014
} from './CsgoIcons';

import { Spinner } from './Spinners';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 100px 50px;
  padding: 100px;
`;

export default {
  component: Icon,
  title: 'Icons'
};

export const Icons = (): React.ReactNode => (
  <GridContainer>
    <Action />
    <AlertTriangle />
    <Archive />
    <Arrow />
    <ArrowBig />
    <Attachment />
    <Bantr />
    <Bell />
    <CheckMark />
    <Clock />
    <Copy />
    <CreditCard />
    <Dashboard />
    <Discord />
    <Discord outline={false} />
    <Edit />
    <Eye />
    <EyeOff />
    <Faceit />
    <Filter />
    <Fullscreen />
    <Github />
    <Globe />
    <GlobeDetailed />
    <Hamburger />
    <Heart />
    <Heart outline={false} />
    <LogOut />
    <Maps />
    <Minus />
    <People />
    <Person />
    <PersonAdd />
    <PersonRemove />
    <Plus />
    <Premium />
    <QuestionMark />
    <Search />
    <Settings />
    <Star />
    <Star outline={false} />
    <Steam />
    <Text />
    <Tournament />
    <Tracker />
    <Trash />
    <Undo />
    <Video />
  </GridContainer>
);

export const CsgoIcons = (): React.ReactNode => (
  <GridContainer>
    <ItemDefuser />
    <WeaponAk47 />
    <WeaponAug />
    <WeaponAwp />
    <WeaponBizon />
    <WeaponC4 />
    <WeaponCZ75a />
    <WeaponDeagle />
    <WeaponDecoy />
    <WeaponElite />
    <WeaponFamas />
    <WeaponFiveSeven />
    <WeaponFlashbang />
    <WeaponGS3SG1 />
    <WeaponGalilAr />
    <WeaponGlock />
    <WeaponHeGrenade />
    <WeaponHkp2000 />
    <WeaponIncGrenade />
    <WeaponKnife />
    <WeaponM249 />
    <WeaponM4a1 />
    <WeaponM4a1Silencer />
    <WeaponMac10 />
    <WeaponMag7 />
    <WeaponMolotov />
    <WeaponMp7 />
    <WeaponMp9 />
    <WeaponNegev />
    <WeaponNova />
    <WeaponP250 />
    <WeaponP90 />
    <WeaponRevolver />
    <WeaponSG556 />
    <WeaponSSG08 />
    <WeaponSawedoff />
    <WeaponScar20 />
    <WeaponSmokeGrenade />
    <WeaponTaser />
    <WeaponTec9 />
    <WeaponUmp45 />
    <WeaponUspSilencer />
    <WeaponXm1014 />
  </GridContainer>
);

export const Spinners = (): React.ReactNode => <GridContainer><Spinner /></GridContainer>;
