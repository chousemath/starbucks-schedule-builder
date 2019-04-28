enum SBPosition {
  Ignore = 0,
  Trainee = 1,
  Barista = 2,
  Supervisor = 3,
  SupervisorA = 4,
  AssistantStoreManager = 5,
  StoreManager = 6,
}

const TextToSBPosition = {
  '무시': SBPosition.Ignore,
  '트레이니': SBPosition.Trainee,
  '바리스타': SBPosition.Barista,
  '슈퍼바이저': SBPosition.Supervisor,
  '슈퍼바이저-A': SBPosition.SupervisorA,
  '부점장': SBPosition.AssistantStoreManager,
  '점장': SBPosition.StoreManager,
};

interface Partner {
  name: string;
  position: SBPosition;
}

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const jsDateToGoogle = (JSdate: Date): number => {
  var D = new Date(JSdate);
  var Null = new Date(Date.UTC(1899, 11, 30, 0, 0, 0, 0)); // the starting value for Google
  return ((D.getTime() - Null.getTime()) / 60000 - D.getTimezoneOffset()) / 1440;
};

function onOpen(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Partners');
  sheet.getRange('B23').setValue(jsDateToGoogle(new Date()));
}

function makeSchedule() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = spreadsheet.getSheetByName('Partners');
  const schedule = spreadsheet.getSheetByName('Schedule');
  schedule.clearContents();

  const startDate = Date.parse(sheet.getRange('B23').getValue() as string);
  const daysToAdd = [0, 1, 2, 3, 4, 5, 6];
  const dates = daysToAdd.map(n => addDays(startDate, n));
  daysToAdd.forEach(n => schedule.getRange(n + 2, 1).setValue(dates[n]));

  const partnerData = sheet.getRange('A2:B21');
  const partnerValues = partnerData.getValues();
  const partnersAll: Array<Partner> = partnerValues.map(v => {
    return {
      name: v[0] as string || '???',
      position: TextToSBPosition[v[1] as string || '무시'],
    };
  });
  const partnersValid: Array<Partner> = partnersAll.filter(p => p.position !== SBPosition.Ignore);

  for (let i = 0; i < partnersValid.length; i++) {
    schedule.getRange(1, i + 2).setValue(partnersValid[i].name);
  }

  Logger.log(partnersValid);
}