'use strict';
const changeCountry = document.querySelector("#jsChangeCountry");
const confirmerNumber = document.querySelector("#confirmer_number");
const deathsNumber = document.querySelector("#deaths_number");
const quarantineRelease = document.querySelector("#quarantine_release");
const duringTreatment = document.querySelector("#during_treatment");
const during_Treatment = document.querySelector("#during__treatment");
const rastDay = document.querySelector("#rast_day");
const rastDay2 = document.querySelector("#rast_day2");
const rastDay3 = document.querySelector("#rast_day3");
const rastDay4 = document.querySelector("#rast_day4");

let CONFIRMER_KOREA = "17,380";
let CONFIRMER_WORLD = "2,953,403";

let DEATHS_KOREA = "243";
let DEATHS_WORLD = "206,801";

let KO_QUARANTINE_RELEASE = "8,764";
let WO_QUARANTINE_RELEASE = "878,233";

let KO_DURING_TREATMENT = "1,769";

let KO_RAST_DAY = "전일 대비 (+10)";
let WO_RAST_DAY = "전일 대비 (+50,179)";

let KO_RAST_DAY2 = "(+1)";
let WO_RAST_DAY2 = "(+3,038)";

let KO_RAST_DAY3 = "(+47)";
let WO_RAST_DAY3 = "(+36,053)";

let KO_RAST_DAY4 = "(-38)";

let change = false;

confirmerNumber.innerText = CONFIRMER_KOREA;
deathsNumber.innerText = DEATHS_KOREA;
quarantineRelease.innerText = KO_QUARANTINE_RELEASE;
duringTreatment.innerText = KO_DURING_TREATMENT;

function onChangeCountry() {
  if (change === true) {
    change = false;
    changeCountry.innerText = "Korea";
    confirmerNumber.innerText = CONFIRMER_KOREA;
    deathsNumber.innerText = DEATHS_KOREA;
    quarantineRelease.innerText = KO_QUARANTINE_RELEASE;
    duringTreatment.innerText = KO_DURING_TREATMENT;
    rastDay.innerText = KO_RAST_DAY;
    during_Treatment.innerText = "치료 중";
    rastDay2.innerText = KO_RAST_DAY2;
    rastDay3.innerText = KO_RAST_DAY3;
    rastDay4.innerText = KO_RAST_DAY4;
  } else {
    change = true;
    changeCountry.innerText = "World";
    confirmerNumber.innerText = CONFIRMER_WORLD;
    deathsNumber.innerText = DEATHS_WORLD;
    quarantineRelease.innerText = WO_QUARANTINE_RELEASE;
    during_Treatment.innerText = "";
    duringTreatment.innerText = "";
    rastDay.innerText = WO_RAST_DAY;
    rastDay2.innerText = WO_RAST_DAY2;
    rastDay3.innerText = WO_RAST_DAY3;
    rastDay4.innerText = "";
  }
}



if (changeCountry) {
  changeCountry.addEventListener("click", onChangeCountry);
}

