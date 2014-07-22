// ▼ ------------------------- ▼ eorzeatime - エオルゼア時間（月/日/時/分）
// ▼ ------------------------- ▼ eorzeatime2 - エオルゼア時間（月/日/時/分/秒）
// ▼ ------------------------- ▼ eorzeatime3 - エオルゼア時間（月属性/日属性/時属性）

function EorzeaTime(){

 var ratioRealToGame = (1440 / 70);
 var curTime = new Date();
 var arr = DstDetect();
 var isDST = 1;
 if(curTime >= arr[0] && curTime <= arr[1]){isDST = 0;}

 var localTime = curTime.getTime();
 var d = (curTime.getTimezoneOffset() + (isDST * 60));
 var localOffest = (curTime.getTimezoneOffset() + (isDST * 60)) * 60000;
 var utc = localTime + localOffest;
 var offset = 9;
 var japan = utc + (3600000 * offset);
 var jpTime = new Date(japan);
 var Epoch = new Date(2010,6,12,1,0,0,0);
 var curMillis = jpTime.getTime();
 var epochMillis = Epoch.getTime();
 var diffInMillis = (curMillis - epochMillis);
 var diffInSeconds = ((diffInMillis / 1000) - 90000);
 var delta = (diffInSeconds * ratioRealToGame);
 var gameSecond = (delta % 60) | 0; delta -= gameSecond; delta /= 60.0;
 var gameMinute = (delta % 60) | 0; delta -= gameMinute; delta /= 60.0;
 var gameHour = (delta % 24) | 0; delta -= gameHour; delta /= 24.0;
 var gameDay = (delta % 32) | 0; delta -= gameDay; delta /= 32.0;
 var gameMonth = (delta % 12) | 0; delta -= gameMonth; delta /= 12.0;
 var gameYear = delta | 0;

	var hourArtma = 0;
	var dayArtma = 0;
	var monthArtma = 0;

 gameDay++;
 gameMonth++;
  if(gameMinute < 10){gameMinute = '0' + gameMinute;}
  if(gameSecond < 10){gameSecond = '0' + gameSecond;}

	hourArtma = gameHour/2;
	hourArtma = parseInt(hourArtma);

	if( 0 <= gameHour && gameHour <=  3){
		gameHour = '<span class="eorzeatime3_ice">' + gameHour + '<span class="eorzeatime3_txt"      > Hour（Time of Ice）</span></span>';
	}
	if( 4 <= gameHour && gameHour <=  7){
		gameHour = '<span class="eorzeatime3_water">' + gameHour + '<span class="eorzeatime3_txt"    > Hour（Time of Water)</span></span>';
	}
	if( 8 <= gameHour && gameHour <= 11){
		gameHour = '<span class="eorzeatime3_wind">' + gameHour + '<span class="eorzeatime3_txt"     > Hour（Time of Wind）</span></span>';
	}
	if(12 <= gameHour && gameHour <= 15){
		gameHour = '<span class="eorzeatime3_lightning">' + gameHour + '<span class="eorzeatime3_txt"> Hour（Time of Thunder）</span></span>';
	}
	if(16 <= gameHour && gameHour <= 19){
		gameHour = '<span class="eorzeatime3_fire">' + gameHour + '<span class="eorzeatime3_txt"     > Hour（Time of Fire）</span></span>';
	}
	if(20 <= gameHour && gameHour <= 23){
		gameHour = '<span class="eorzeatime3_earth">' + gameHour + '<span class="eorzeatime3_txt"    > Hour（Time of Earth）</span></span>';
	}

	dayArtma = (gameDay-1)%8+1;

	if(gameDay == 1 || gameDay ==  9 || gameDay == 17 || gameDay == 25){
		gameDay = '<span class="eorzeatime3_wind">' + gameDay + ' Day<span class="eorzeatime3_txt"     >（Wind Genus Day）</span></span>';
	}
	if(gameDay == 2 || gameDay == 10 || gameDay == 18 || gameDay == 26){
		gameDay = '<span class="eorzeatime3_lightning">' + gameDay + ' Day<span class="eorzeatime3_txt">（Thunder Genus Day）</span></span>';
	}
	if(gameDay == 3 || gameDay == 11 || gameDay == 19 || gameDay == 27){
		gameDay = '<span class="eorzeatime3_fire">' + gameDay + ' Day<span class="eorzeatime3_txt"     >（Fire Genus Day）</span></span>';
	}
	if(gameDay == 4 || gameDay == 12 || gameDay == 20 || gameDay == 28){
		gameDay = '<span class="eorzeatime3_earth">' + gameDay + ' Day<span class="eorzeatime3_txt"    >（Earth Genus Day）</span></span>';
	}
	if(gameDay == 5 || gameDay == 13 || gameDay == 21 || gameDay == 29){
		gameDay = '<span class="eorzeatime3_ice">' + gameDay + ' Day<span class="eorzeatime3_txt"      >（Ice Genus Day）</span></span>';
	}
	if(gameDay == 6 || gameDay == 14 || gameDay == 22 || gameDay == 30){
		gameDay = '<span class="eorzeatime3_water">' + gameDay + ' Day<span class="eorzeatime3_txt"    >（Water Genus Day）</span></span>';
	}
	if(gameDay == 7 || gameDay == 15 || gameDay == 23 || gameDay == 31){
		gameDay = '<span class="eorzeatime3_astral">' + gameDay + ' Day<span class="eorzeatime3_txt"   >（Astral Day）</span></span>';
	}
	if(gameDay == 8 || gameDay == 16 || gameDay == 24 || gameDay == 32){
		gameDay = '<span class="eorzeatime3_unbral">' + gameDay + ' Day<span class="eorzeatime3_txt"   >（Umbral Day）</span></span>';
	}

	monthArtma = gameMonth;

	if(gameMonth ==  1){gameMonth = '<span class="eorzeatime3_ice"		>First Astral Moon <span class="eorzeatime3_txt">（Ice 1／January）</span></span>';}
	if(gameMonth ==  2){gameMonth = '<span class="eorzeatime3_ice"		>First Umbral Moon <span class="eorzeatime3_txt">（Ice 2／February）</span></span>';}
	if(gameMonth ==  3){gameMonth = '<span class="eorzeatime3_water"	>Second Astral Moon Moon<span class="eorzeatime3_txt">（Water 1／March）</span></span>';}
	if(gameMonth ==  4){gameMonth = '<span class="eorzeatime3_water"	>Second Umbral Moon <span class="eorzeatime3_txt">（Water 2／April）</span></span>';}
	if(gameMonth ==  5){gameMonth = '<span class="eorzeatime3_wind"		>Third Astral Moon <span class="eorzeatime3_txt">（Wind 1／May）</span></span>';}
	if(gameMonth ==  6){gameMonth = '<span class="eorzeatime3_wind"		>Third Umbral Moon <span class="eorzeatime3_txt">（Wind 2／June）</span></span>';}
	if(gameMonth ==  7){gameMonth = '<span class="eorzeatime3_lightning">Fourth Astral Moon <span class="eorzeatime3_txt">（Thunder 1／July）</span></span>';}
	if(gameMonth ==  8){gameMonth = '<span class="eorzeatime3_lightning">Fourth Umbral Moon <span class="eorzeatime3_txt">（Thunder 2／August）</span></span>';}
	if(gameMonth ==  9){gameMonth = '<span class="eorzeatime3_fire"		>Fifth Astral Moon <span class="eorzeatime3_txt">（Fire 1／September）</span></span>';}
	if(gameMonth == 10){gameMonth = '<span class="eorzeatime3_fire"		>Fifth Umbral Moon <span class="eorzeatime3_txt">（Fire 2／October）</span></span>';}
	if(gameMonth == 11){gameMonth = '<span class="eorzeatime3_earth"	>Sixth Astral Moon <span class="eorzeatime3_txt">（Earth 1／November）</span></span>';}
	if(gameMonth == 12){gameMonth = '<span class="eorzeatime3_earth"	>Sixth Umbral Moon <span class="eorzeatime3_txt">（Earth 2／December）</span></span>';}

	gameYear = gameYear + ' Year  '


	var ArtmaResults = '';
	var monthArtmaValue ='';
	var dayArtmaValue ='';
	var hourArtmaValue ='';
	var Atma0 = '－';
	var Atma1 = '○'
	var Atma2 = '◎';

	ArtmaResults = 			     '<pre>　　　　              　　　　　　　　　　　　　             M D T';

	if ( monthArtma == 1 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 5 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 0 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 1){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Ice 1) Eastern Shroud "Atma of the GOAT"      　　　    ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 2 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 5 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 1 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 0){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Ice 2) Upper La Noscea "Atma of the WATER BEARER"      ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 3 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 6 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 2 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 3){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Water 1) Lower La Noscea "Atma of the FISH"　          ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 4 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 6 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 3 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 2){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Water 2)  Middle La Noscea "Atma of the RAM"           ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 5 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 1 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 4 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 5){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Wind 1) Eastern Thanalan "Atma of the BULL"　          ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 6 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 1 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 5 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 4){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Wind 2) Western Thanalan "Atma of the TWINS"           ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 7 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 2 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 6 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 7){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Thunder 1) Western La Noscea "Atma of the CRAB"        ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 8 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 2 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 7 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 6){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Thunder 2) Outer La Noscea "Atma of the LION"　        ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 9 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 3 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 8 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 9){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Fire 1) Central Shroud "Atma of the MAIDEN"            ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 10 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 3 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 7 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 9 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 8){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Fire 2) Central Thanalan "Atma of the SCALES"          ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 11 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 4 ) { if ( 0 <= hourArtma && hourArtma <= 5 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 10 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 11){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Earth 1) Southern Thanalan "Atma of the SCORPION"      ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	if ( monthArtma == 12 ) { monthArtmaValue = Atma2; } else { monthArtmaValue= Atma0; }
	if ( dayArtma == 4 ) { if ( 6 <= hourArtma && hourArtma <= 11 ) { dayArtmaValue = Atma2;} else { dayArtmaValue = Atma1;} } else { dayArtmaValue = Atma0; }
	if ( dayArtma == 8 ) { dayArtmaValue = Atma2; }
	if ( hourArtma == 11 ) { hourArtmaValue = Atma2; } else { if (hourArtma == 10){ hourArtmaValue = Atma1; } else { hourArtmaValue = Atma0; } }
	ArtmaResults = ArtmaResults + '<br>(Earth 2) North Shroud "Atma of the ARCHER"             ' + monthArtmaValue + dayArtmaValue + hourArtmaValue;

	ArtmaResults = ArtmaResults + '</pre>';

 var displayEorzeaTime1,displayEorzeaTime2,displayEorzeaTime3;
 displayEorzeaTime1 = gameMonth + gameDay + ' ' + gameHour + ':' + gameMinute;
 displayEorzeaTime2 = gameYear + gameMonth + gameDay + ' ' + gameHour + ':' + gameMinute + ':' + gameSecond;
 displayEorzeaTime3 = gameMonth + gameDay + gameHour;
return '<div id="eorzeaclock2"><span id="eorzeatime2">' + displayEorzeaTime2 + '</span><span id="eorzeatime3">' + displayEorzeaTime3 + ArtmaResults + '</span>';
}

//--------------------------------------------------------------------
function TimezoneDetect(){
 var dtDate = new Date('1/1/' + (new Date()).getUTCFullYear());
 var intOffset = 10000;
 var intMonth;
 var intHoursUtc;
 var intHours;
 var intDaysMultiplyBy;
  for(intMonth = 0; intMonth < 12; intMonth++){
  dtDate.setUTCMonth(dtDate.getUTCMonth() + 1);
   if(intOffset > (dtDate.getTimezoneOffset() * (-1))){intOffset = (dtDate.getTimezoneOffset() * (-1));}
  }
return intOffset;
}
function DstDetect(){
 var dtDstDetect = new Date();
 var dtDstStart = '';
 var dtDstEnd = '';
 var dtDstStartHold = '';
 var intYearDayCount = 732;
 var intHourOfYear = 1;
 var intDayOfYear;
 var intOffset = TimezoneDetect();
 dtDstDetect = new Date()
 dtDstDetect.setUTCFullYear(dtDstDetect.getUTCFullYear() - 1);
 dtDstDetect.setUTCHours(0,0,0,0);
  for(intDayOfYear = 1; intDayOfYear <= intYearDayCount; intDayOfYear++){
  dtDstDetect.setUTCDate(dtDstDetect.getUTCDate() + 1);
   if((dtDstDetect.getTimezoneOffset() * (-1)) != intOffset && dtDstStartHold == ''){dtDstStartHold = new Date(dtDstDetect);}
   if((dtDstDetect.getTimezoneOffset() * (-1)) == intOffset && dtDstStartHold != ''){
   dtDstStart = new Date(dtDstStartHold);
   dtDstEnd = new Date(dtDstDetect);
   dtDstStartHold = '';
   dtDstStart.setUTCHours(dtDstStart.getUTCHours() - 48);
   dtDstEnd.setUTCHours(dtDstEnd.getUTCHours() - 48);
    for(intHourOfYear = 1; intHourOfYear <= 48; intHourOfYear++){
    dtDstStart.setUTCHours(dtDstStart.getUTCHours() + 1);
     if((dtDstStart.getTimezoneOffset() * (-1)) != intOffset){break;}
    }
    for(intHourOfYear = 1; intHourOfYear <= 48; intHourOfYear++){
    dtDstEnd.setUTCHours(dtDstEnd.getUTCHours() + 1);
     if((dtDstEnd.getTimezoneOffset() * (-1)) != (intOffset + 60)){break;}
    }
    if((new Date()).getTime() >= dtDstStart.getTime() && (new Date()).getTime() <= dtDstEnd.getTime()){return new Array(dtDstStart,dtDstEnd);}
   }
  }
return new Array(dtDstStart,dtDstEnd);
}

// ▼ ------------------------- ▼ moontime - 月齢（前後/カウントダウン）

function MoonTime(){
 var curTime = new Date();
 var baseDate = new Date();
 baseDate.setUTCFullYear(2010); baseDate.setUTCMonth(6); baseDate.setUTCDate(12); baseDate.setUTCHours(16); baseDate.setUTCMinutes(0); baseDate.setUTCSeconds(0);
 var unistart = baseDate.getTime();
 var uninow = curTime.getTime();
 var diff = uninow - unistart;
 var intoNew = diff % 134400000;
 var currPhase,into;
  if(intoNew <= 16800000){currPhase = 0; into = 16800000 - intoNew;}
  if(intoNew > 16800000 && intoNew <= 33600000){currPhase = 1; into = 33600000 - intoNew;}
  if(intoNew > 33600000 && intoNew <= 50400000){currPhase = 2; into = 50400000 - intoNew;}
  if(intoNew > 50400000 && intoNew <= 67200000){currPhase = 3; into = 67200000 - intoNew;}
  if(intoNew > 67200000 && intoNew <= 84000000){currPhase = 4; into = 84000000 - intoNew;}
  if(intoNew > 84000000 && intoNew <= 100800000){currPhase = 5; into = 100800000 - intoNew;}
  if(intoNew > 100800000 && intoNew <= 117600000){currPhase = 6; into = 117600000 - intoNew;}
  if(intoNew > 117600000){currPhase = 7; into = 134400000 - intoNew;}
 var curHour = Math.floor(into / 3600000); into = into - (curHour * 3600000);
 var curMinute = Math.floor(into / 60000); into = into - (curMinute * 60000);
 var curSecond = Math.floor(into / 1000);
  if(curMinute < 10){curMinute = '0' + curMinute;}
  if(curSecond < 10){curSecond = '0' + curSecond;}
 var curTime = curHour + ':' + curMinute + ':' + curSecond;
 var displayMoonTime;
  if(currPhase == 0){displayMoonTime = '<span class="moontime_WaningCrescent moontime_txt moontime_prev">（Waning Crescent Moon）</span><span class="moontime_NewMoon">' + curTime + ' （New Moon）</span><span class="moontime_WaxingCrescent moontime_txt moontime_next">（Waxing Crescent Moon）</span>';}
  if(currPhase == 1){displayMoonTime = '<span class="moontime_NewMoon moontime_txt moontime_prev">（New Moon）</span><span class="moontime_WaxingCrescent">' + curTime + ' （Waxing Crescent Moon）</span><span class="moontime_WaxingHalfMoon moontime_txt moontime_next">（Waxing Half Moon)</span>';}
  if(currPhase == 2){displayMoonTime = '<span class="moontime_WaxingCrescent moontime_txt moontime_prev">（Waxing Crescent Moon）</span><span class="moontime_WaxingHalfMoon">' + curTime + ' （Waxing Half Moon）</span><span class="moontime_WaxingGibbous moontime_txt moontime_next">（Waxing Gibbous Moon）</span>';}
  if(currPhase == 3){displayMoonTime = '<span class="moontime_WaxingHalfMoon moontime_txt moontime_prev">（Waxing Half Moon）</span><span class="moontime_WaxingGibbous">' + curTime + ' （Waxing Gibbous Moon）</span><span class="moontime_FullMoon moontime_txt moontime_next">（Full Moon）</span>';}
  if(currPhase == 4){displayMoonTime = '<span class="moontime_WaxingGibbous moontime_txt moontime_prev">（Waxing Gibbous Moon）</span><span class="moontime_FullMoon">' + curTime + ' （Full Moon）</span><span class="moontime_WaningGibbous moontime_txt moontime_next">（Waning Gibbous Moon）</span>';}
  if(currPhase == 5){displayMoonTime = '<span class="moontime_FullMoon moontime_txt moontime_prev">（Full Moon）</span><span class="moontime_WaningGibbous">' + curTime + ' （Waning Gibbous Moon）</span><span class="moontime_WaningHalfMoon moontime_txt moontime_next">（Waning Half Moon）</span>';}
  if(currPhase == 6){displayMoonTime = '<span class="moontime_WaningGibbous moontime_txt moontime_prev">（Waning Gibbous Moon）</span><span class="moontime_WaningHalfMoon">' + curTime + ' （Waning Half Moon）</span><span class="moontime_WaningCrescent moontime_txt moontime_next">（Waning Crescent Moon）</span>';}
  if(currPhase == 7){displayMoonTime = '<span class="moontime_WaningHalfMoon moontime_txt moontime_prev">（Waning Half Moon）</span><span class="moontime_WaningCrescent">' + curTime + ' （Waning Crescent Moon）</span><span class="moontime_NewMoon moontime_txt moontime_next">（New Moon）</span>';}
return displayMoonTime;
}

// ▼ ------------------------- ▼ earthtime - 地球時間

function EarthTime(){
 var curTime = new Date();
 var curMonth = curTime.getMonth() + 1;
 var curDay = curTime.getDate();
 var curHour = curTime.getHours();
 var curMinute = curTime.getMinutes();
 var curSecond = curTime.getSeconds();
  if(curMinute < 10){curMinute = '0' + curMinute;}
  if(curSecond < 10){curSecond = '0' + curSecond;}
return curMonth + 'M '  + curDay + 'D ' + curHour + ':' + curMinute + ':' + curSecond + ' （Earth）';
}

// ▼ ------------------------- ▼ levetime - リーヴ受注権（カウントダウン）

function LeveTime(){
 var curTime = new Date();
 var baseDate = new Date();
 baseDate.setUTCFullYear(2010); baseDate.setUTCMonth(6); baseDate.setUTCDate(12); baseDate.setUTCHours(0); baseDate.setUTCMinutes(0); baseDate.setUTCSeconds(0);
 var tUTC = curTime.getTime();
 var bUTC = baseDate.getTime();
  while (bUTC < tUTC){bUTC += (43200000); baseDate.setTime(bUTC);}
 var diff = bUTC - tUTC;
 var curHour = Math.floor(diff / (3600000)); diff -= (curHour * 3600000)
 var curMinute  = Math.floor(diff / (60000)); diff -= (curMinute * 60000)
 var curSecond  = Math.floor(diff / (1000));
  if(curMinute < 10){curMinute = '0' + curMinute;}
  if(curSecond < 10){curSecond = '0' + curSecond;}
return curHour + ':' + curMinute + ':' + curSecond + ' （Next Leve）';
}

// ▼ ------------------------- ▼ AllClock - 表示

function EorzeaClock(){
 var eorzea = EorzeaTime();
 var moon = MoonTime();
 var earth = EarthTime();
 var leve = LeveTime();
document.getElementById('eorzeaclock').innerHTML = eorzea + 
	'<hr><span id="moontime">' + moon + '</span><hr><span id="earthtime">' + earth + '</span><hr><span id="levetime">' + leve + '</span>'
	+ '<hr><span id="original">Original: <a href="http://www.toyboxarts.com/XIV/atma/atmclock.html">http://www.toyboxarts.com/XIV/atma/atmclock.html</a></span>'
	+ '<br><span id="credits">Translated by some dude on <a href="http://www.reddit.com/r/ffxiv/">/r/ffxiv</a></span>'
	+'</div>';
setTimeout('EorzeaClock()',1000);
}