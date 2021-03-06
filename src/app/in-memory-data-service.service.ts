
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

 const heroes = [
  {
    id: 1,
    image: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male'
  }, {
    id: 2,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png',
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
  },{
    id: 3,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png',
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },{
    id: 4,
    image:'https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg',
    name: 'Darth Vader',
    height:202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    id: 5,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png',
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  }, {
    id: 6,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png',
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male'
  }, {
    id: 7,
    image:'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png',
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female'
  }, {
    id: 8,
    image:'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png',
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a'
  }, {
    id: 9,
    image:'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png',
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male'
  },{
    id: 10,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg',
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male'
  },{
    id: 11,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male'
  }, {
    id: 12,
    image:'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg',
    name: 'Wilhuff Tarkin',
    height: 180,
    mass: 200,
    hair_color: 'auburn, grey',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '64BBY',
    gender: 'male'
  }, {
    id: 13,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png',
    name: 'Chewbacca',
    height: 228,
    mass: 112,
    hair_color: 'brown',
    skin_color: 'unknown',
    eye_color: 'blue',
    birth_year: '200BBY',
    gender: 'male'
  }, {
    id: 14,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png',
    name: 'Han Solo',
    height: 180,
    mass: 80,
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '29BBY',
    gender: 'male'
  }, {
    id: 15,
    image:'https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg',
    name: 'Greedo',
    height: 173,
    mass: 74,
    hair_color: 'n/a',
    skin_color: 'green',
    eye_color: 'black',
    birth_year: '44BBY',
    gender: 'male'
  }, {
    id: 16,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png',
    name: 'Jabba Desilijic Tiure',
    height: 175,
    mass: 1358,
    hair_color: 'n/a',
    skin_color: 'green-tan, brown',
    eye_color: 'orange',
    birth_year: '600BBY',
    gender: 'hermaphrodite'
  }, {
    id: 17,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg',
    name: 'Wedge Antilles',
    height: 170,
    mass: 77,
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'hazel',
    birth_year: '21BBY',
    gender: 'male'
  }, {
    id: 18,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png',
    name: 'Jek Tono Porkins',
    height: 180,
    mass: 110,
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 19,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png',
    name: 'Yoda',
    height: 66,
    mass: 17,
    hair_color: 'white',
    skin_color: 'green',
    eye_color: 'brown',
    birth_year: '896BBY',
    gender: 'male'
  }, {
    id: 20,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png',
    name: 'Palpatine',
    height: 170,
    mass: 75,
    hair_color: 'grey',
    skin_color: 'pale',
    eye_color: 'yellow',
    birth_year: '82BBY',
    gender: 'male'
  }, {
    id: 21,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png',
    name: 'Boba Fett',
    height: 183,
    mass: 78.2,
    hair_color: 'black',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '31.5BBY',
    gender: 'male'
  }, {
    id: 22,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png',
    name: 'IG-88',
    height: 200,
    mass: 140,
    hair_color: 'none',
    skin_color: 'metal',
    eye_color: 'red',
    birth_year: '15BBY',
    gender: 'none'
  },{
    id: 23,
    image:'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png',
    name: 'Bossk',
    height: 190,
    mass: 113,
    hair_color: 'none',
    skin_color: 'green',
    eye_color: 'red',
    birth_year: '53BBY',
    gender: 'male'
  }, {
    id: 24,
    image:'https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png',
    name: 'Lando Calrissian',
    height: 177,
    mass: 79,
    hair_color: 'black',
    skin_color: 'dark',
    eye_color: 'brown',
    birth_year: '31BBY',
    gender: 'male'
  }, {
    id: 25,
    image:'https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg',
    name: 'Lobot',
    height: 175,
    mass: 79,
    hair_color: 'none',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '37BBY',
    gender: 'male'
  }, {
    id: 26,
    image:'https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png',
    name: 'Ackbar',
    height: '180',
    mass: '83',
    hair_color: 'none',
    skin_color: 'brown mottle',
    eye_color: 'orange',
    birth_year: '41BBY',
    gender: 'male'
  }, {
    id: 27,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/b7/MP-MonMothma.png',
    name: 'Mon Mothma',
    height: '150',
    mass: 'unknown',
    hair_color: 'auburn',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '48BBY',
    gender: 'female'
  },{
    id: 28,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg',
    name: 'Arvel Crynyd',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 29,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png',
    name: 'Wicket Systri Warrick',
    height: '88',
    mass: '20',
    hair_color: 'brown',
    skin_color: 'brown',
    eye_color: 'brown',
    birth_year: '8BBY',
    gender: 'male'
  }, {
    id: 30,
    image:'https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png',
    name: 'Nien Nunb',
    height: '160',
    mass: '68',
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 31,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg',
    name: 'Qui-Gon Jinn',
    height: 193,
    mass: '89',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '92BBY',
    gender: 'male'
  }, {
    id: 32,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png',
    name: 'Nute Gunray',
    height: 191,
    mass: 90,
    hair_color: 'none',
    skin_color: 'mottled green',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 33,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png',
    name: 'Finis Valorum',
    height: 170,
    mass: 'unknown',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '91BBY',
    gender: 'male'
  }, {
    id: 34,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg',
    name: 'Jar Jar Binks',
    height: 196,
    mass: 66,
    hair_color: 'none',
    skin_color: 'orange',
    eye_color: 'orange',
    birth_year: '52BBY',
    gender: 'male'
  }, {
    id: 35,
    image:'https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg',
    name: 'Roos Tarpals',
    height: 224,
    mass: 82,
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'orange',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 36,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bossnass.jpg',
    name: 'Rugor Nass',
    height: '206',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'green',
    eye_color: 'orange',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 37,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png',
    name: 'Ric Olié',
    height: '183',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 38,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg',
    name: 'Watto',
    height: '137',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'blue, grey',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 39,
    image:'https://vignette.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png',
    name: 'Sebulba',
    height: '112',
    mass: '40',
    hair_color: 'none',
    skin_color: 'grey, red',
    eye_color: 'orange',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 40,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png',
    name: 'Quarsh Panaka',
    height: '183',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'dark',
    eye_color: 'brown',
    birth_year: '62BBY',
    gender: 'male'
  }, {
    id: 41,
    image:'https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg',
    name: 'Shmi Skywalker',
    height: '163',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '72BBY',
    gender: 'female'
  }, {
    id: 42,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png',
    name: 'Darth Maul',
    height: '175',
    mass: '80',
    hair_color: 'none',
    skin_color: 'red',
    eye_color: 'yellow',
    birth_year: '54BBY',
    gender: 'male'
  }, {
    id: 43,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png',
    name: 'Bib Fortuna',
    height: '180',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'pale',
    eye_color: 'pink',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 44,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg',
    name: 'Ayla Secura',
    height: '178',
    mass: '55',
    hair_color: 'none',
    skin_color: 'blue',
    eye_color: 'hazel',
    birth_year: '48BBY',
    gender: 'female'
  }, {
    id: 45,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png',
    name: 'Dud Bolt',
    height: '94',
    mass: '45',
    hair_color: 'none',
    skin_color: 'blue, grey',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'male'
  },{
    id: 46,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg',
    name: 'Gasgano',
    height: '122',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'white, blue',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 47,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/7f/Cropped_Quadinaros.png',
    name: 'Ben Quadinaros',
    height: '163',
    mass: '65',
    hair_color: 'none',
    skin_color: 'grey, green, yellow',
    eye_color: 'orange',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 48,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/58/Mace_ROTS.png',
    name: 'Mace Windu',
    height: '188',
    mass: '84',
    hair_color: 'none',
    skin_color: 'dark',
    eye_color: 'brown',
    birth_year: '72BBY',
    gender: 'male'
  }, {
    id: 49,
    image:'https://vignette.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg',
    name: 'Ki-Adi-Mundi',
    height: '198',
    mass: '82',
    hair_color: 'white',
    skin_color: 'pale',
    eye_color: 'yellow',
    birth_year: '92BBY',
    gender: 'male'
  }, {
    id: 50,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png',
    name: 'Kit Fisto',
    height: '196',
    mass: '87',
    hair_color: 'none',
    skin_color: 'green',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 51,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png',
    name: 'Eeth Koth',
    height: '171',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'brown',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'male'
  },{
    id: 52,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg',
    name: 'Adi Gallia',
    height: '184',
    mass: '50',
    hair_color: 'none',
    skin_color: 'dark',
    eye_color: 'blue',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 53,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/68/Saesee_Tiin_Card_Trader.jpg',
    name: 'Saesee Tiin',
    height: '188',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'pale',
    eye_color: 'orange',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 54,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/66/Yarael_Poof_Canon.jpeg',
    name: 'Yarael Poof',
    height: '264',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 55,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png',
    name: 'Plo Koon',
    height: '188',
    mass: '80',
    hair_color: 'none',
    skin_color: 'orange',
    eye_color: 'black',
    birth_year: '22BBY',
    gender: 'male'
  },{
    id: 56,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png',
    name: 'Mas Amedda',
    height: '196',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'blue',
    eye_color: 'blue',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 57,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg',
    name: 'Gregar Typho',
    height: '185',
    mass: '85',
    hair_color: 'black',
    skin_color: 'dark',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 58,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png',
    name: 'Cordé',
    height: '157',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'female'
  },{
    id: 59,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg',
    name: 'Cliegg Lars',
    height: '183',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '82BBY',
    gender: 'male'
  }, {
    id: 60,
    image:'https://vignette.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png',
    name: 'Poggle the Lesser',
    height: '183',
    mass: '80',
    hair_color: 'none',
    skin_color: 'green',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 61,
    image:'https://vignette.wikia.nocookie.net/starwars/images/2/21/LuminaraHS-SWE_%28new%29.png',
    name: 'Luminara Unduli',
    height: '170',
    mass: '56.2',
    hair_color: 'black',
    skin_color: 'yellow',
    eye_color: 'blue',
    birth_year: '58BBY',
    gender: 'female'
  }, {
    id: 62,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg',
    name: 'Barriss Offee',
    height: '166',
    mass: '50',
    hair_color: 'black',
    skin_color: 'yellow',
    eye_color: 'blue',
    birth_year: '40BBY',
    gender: 'female'
  }, {
    id: 63,
    image:'https://vignette.wikia.nocookie.net/starwars/images/1/18/Dormesenate.jpg',
    name: 'Dormé',
    height: '165',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 64,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg',
    name: 'Dooku',
    height: '193',
    mass: '80',
    hair_color: 'white',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '102BBY',
    gender: 'male'
  }, {
    id: 65,
    image:'https://vignette.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg',
    name: 'Bail Prestor Organa',
    height: '191',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'tan',
    eye_color: 'brown',
    birth_year: '67BBY',
    gender: 'male'
  }, 
   {
    id: 67,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg',
    name: 'Zam Wesell',
    height: '168',
    mass: '55',
    hair_color: 'blonde',
    skin_color: 'fair, green, yellow',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 68,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg',
    name: 'Dexter Jettster',
    height: '198',
    mass: '102',
    hair_color: 'none',
    skin_color: 'brown',
    eye_color: 'yellow',
    birth_year: 'unknown',
    gender: 'male'
  },{
    id: 69,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg',
    name: 'Lama Su',
    height: '229',
    mass: '88',
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 70,
    image:'https://vignette.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg',
    name: 'Taun We',
    height: '213',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'female'
  },  {
    id: 72,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg',
    name: 'Ratts Tyerell',
    height: '79',
    mass: '15',
    hair_color: 'none',
    skin_color: 'grey, blue',
    eye_color: 'unknown',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 73,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/6b/R4-P17.jpg',
    name: 'R4-P17',
    height: '96',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'silver, red',
    eye_color: 'red, blue',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 74,
    image:'https://vignette.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png',
    name: 'Wat Tambor',
    height: '193',
    mass: '48',
    hair_color: 'none',
    skin_color: 'green, grey',
    eye_color: 'unknown',
    birth_year: 'unknown',
    gender: 'male'
  },{
    id: 75,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg',
    name: 'San Hill',
    height: '191',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'gold',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 76,
    image:'https://vignette.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png',
    name: 'Shaak Ti',
    height: '178',
    mass: '57',
    hair_color: 'none',
    skin_color: 'red, blue, white',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 77,
    image:'https://vignette.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg',
    name: 'Grievous',
    height: '216',
    mass: '159',
    hair_color: 'none',
    skin_color: 'brown, white',
    eye_color: 'green, yellow',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 78,
    image:'https://vignette.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png',
    name: 'Tarfful',
    height: '234',
    mass: '136',
    hair_color: 'brown',
    skin_color: 'brown',
    eye_color: 'blue',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 79,
    image:'https://vignette.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png',
    name: 'Raymus Antilles',
    height: '188',
    mass: '79',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 80,
    image:'https://vignette.wikia.nocookie.net/starwars/images/e/ec/SlyMooreIsWatchingYouPoop-OfficialPix.jpg',
    name: 'Sly Moore',
    height: '178',
    mass: '48',
    hair_color: 'none',
    skin_color: 'pale',
    eye_color: 'white',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 81,
    image:'https://vignette.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg',
    name: 'Tion Medon',
    height: '206',
    mass: '80',
    hair_color: 'none',
    skin_color: 'grey',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 82,
    image:'https://vignette.wikia.nocookie.net/starwars/images/a/af/Finn_TLJ_Collector%27s_Edition.png',
    name: 'Finn',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'black',
    skin_color: 'dark',
    eye_color: 'dark',
    birth_year: 'unknown',
    gender: 'male'
  }, {
    id: 83,
    image:'https://vignette.wikia.nocookie.net/starwars/images/f/f8/ReyTLJEntertainmentWeeklyNovember.png',
    name: 'Rey',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'hazel',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 84,
    image:'https://vignette.wikia.nocookie.net/starwars/images/7/79/Poe_Dameron_TLJ.png',
    name: 'Poe Dameron',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: 'unknown',
    gender: 'male'
  },{
    id: 85,
    image:'https://vignette.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png',
    name: 'BB8',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'none',
    eye_color: 'black',
    birth_year: 'unknown',
    gender: 'none'
  }, {
    id: 86,
    image:'https://vignette.wikia.nocookie.net/starwars/images/0/02/Phasma.png',
    name: 'Captain Phasma',
    height: 'unknown',
    mass: 'unknown',
    hair_color: 'unknown',
    skin_color: 'unknown',
    eye_color: 'unknown',
    birth_year: 'unknown',
    gender: 'female'
  }, {
    id: 87,
    image:'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg',
    name: 'Padmé Amidala',
    height: '165',
    mass: '45',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '46BBY',
    gender: 'female'
  }
  ];
  return {heroes};
}

genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}

}

