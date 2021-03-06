// Specific positions of some buttons, labels, and cells
const text = { create: '스케줄 만들기', inProgress: '만들기 진행 중', };
const createBtn = { row: 24, col: 2 };
const dateData = { label: { row: 23, col: 1 }, selector: { row: 23, col: 2 }, };
const partnerArea = { start: { row: 2, col: 1 }, numberOfPartners: 20, numColumns: 4, };
const leftOverSection = { row: 9, col: 1 }
const colors = { red: '#ffc3c3', green: '#cbffc3', };
const dayAbbrev = ['일', '월', '화', '수', '목', '금', '토'];
const shiftBG = { '오픈': colors.green, '미들': '#feffba', '마감': '#f2d0ff' };
const emptyDay = {};
const holidays = {
  '2019': {
    '1/1': '새해',
    '2/4': '설날',
    '2/5': '설날',
    '2/6': '설날',
    '3/1': '3·1 운동/삼일절',
    '5/5': '어린이날',
    '5/12': '부처님 오신 날',
    '6/6': '현충일',
    '8/15': '광복절',
    '9/12': '추석',
    '9/13': '추석',
    '9/14': '추석',
    '10/3': '개천절',
    '10/9': '한글날',
    '12/25': '크리스마스',
  },
  "2020": {
    "1/1": "새해",
    "1/24": "설날",
    "1/25": "설날",
    "1/26": "설날",
    "3/1": "3·1 운동/삼일절",
    "4/30": "부처님 오신 날",
    "5/5": "어린이날",
    "6/6": "현충일",
    "8/15": "광복절",
    "9/30": "추석",
    "10/1": "추석",
    "10/2": "추석",
    "10/3": "개천절",
    "10/9": "한글날",
    "12/25": "크리스마스"
  },
  "2021": {
    "1/1": "새해",
    "2/12": "설날",
    "2/13": "설날",
    "2/14": "설날",
    "3/1": "3·1 운동/삼일절",
    "5/5": "어린이날",
    "5/19": "부처님 오신 날",
    "6/6": "현충일",
    "8/15": "광복절",
    "9/20": "추석",
    "9/21": "추석",
    "9/22": "추석",
    "10/3": "개천절",
    "10/9": "한글날",
    "12/25": "크리스마스"
  }
};

enum Day {
  None = -1,
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

const TextToDay = {
  '없슴': Day.None,
  '일요일': Day.Sunday,
  '월요일': Day.Monday,
  '화요일': Day.Tuesday,
  '수요일': Day.Wednesday,
  '목요일': Day.Thursday,
  '금요일': Day.Friday,
  '토요일': Day.Saturday,
};

enum SBPosition {
  Ignore = 0,
  Trainee = 1,
  Barista = 2,
  Supervisor = 3,
  SupervisorA = 4,
  AssistantStoreManager = 5,
  StoreManager = 6,
}

interface Partner {
  name: string;
  position: SBPosition;
  columnNumber: number;
  RestDay1: Day;
  RestDay2: Day;
  id: number;
}

const TextToPosition = {
  '무시': SBPosition.Ignore,
  '트레이니': SBPosition.Trainee,
  '바리스타': SBPosition.Barista,
  '슈퍼바이저': SBPosition.Supervisor,
  '슈퍼바이저-A': SBPosition.SupervisorA,
  '부점장': SBPosition.AssistantStoreManager,
  '점장': SBPosition.StoreManager,
};

const ShortPositions = {
  '무시': '무',
  '트레이니': '트',
  '바리스타': '바',
  '슈퍼바이저': '슈',
  '슈퍼바이저-A': '슈A',
  '부점장': '부',
  '점장': '점',
};

const Colors = [
  '#3ca1ff',
  '#0d552d',
  '#1e5b9f',
  '#d64b4b',
  '#1e5b9f',
  '#11237a',
  '#000000',
];

const ShiftNames = ['오픈', '미들', '마감'];

ShiftNames.forEach(s => emptyDay[s] = []);

const addDays = (date: number, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const dupObj = (obj: Object): Object => JSON.parse(JSON.stringify(obj));

const shuffle = (array: Array<any>): Array<any> => {
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const to2 = [0, 1];
const to5 = [0, 1, 2, 3, 4];
const to7 = [0, 1, 2, 3, 4, 5, 6];
const to1000 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999,];

const jsDateToGoogle = (JSdate: Date): number => {
  const D = new Date(JSdate);
  const Null = new Date(Date.UTC(1899, 11, 30, 0, 0, 0, 0)); // the starting value for Google
  return ((D.getTime() - Null.getTime()) / 60000 - D.getTimezoneOffset()) / 1440;
};

const setShiftCell = (cell: GoogleAppsScript.Spreadsheet.Range, shiftName: string) => {
  cell.setValue(shiftName);
  cell.setBackground(shiftBG[shiftName]);
  cell.setFontWeight('bold');
  cell.setVerticalAlignment('center');
  cell.setHorizontalAlignment('center');
  cell.setBorder(true, true, true, true, true, true);
};

// Activated whenever the spreadsheet is opened
function onOpen(_) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Partners');
  const dateCell = sheet.getRange(dateData.selector.row, dateData.selector.col);
  dateCell.setValue(jsDateToGoogle(new Date()));
  dateCell.setFontWeight('bold');
  dateCell.setFontColor('#ffffff');
  dateCell.setBackground('#0f0e6e');
  dateCell.setVerticalAlignment('center');
  dateCell.setHorizontalAlignment('center');

  // there is no need for the user to edit this sheet manually
  const sheetPositions = ss.getSheetByName('Positions');
  if (!sheetPositions.isSheetHidden()) sheetPositions.hideSheet();
  sheetPositions.protect();

  // this is the main way for a user to create/save a schedule
  SpreadsheetApp.getUi()
    .createMenu('운영')
    .addItem('새 일정 만들기', 'makeSchedule')
    .addItem('현재 일정 저장하기', 'saveSchedule')
    .addItem('현재 일정 공유하기', 'shareSchedule')
    .addItem('누군가에게 일정을 이메일로 보내기', 'emailSchedule')
    .addToUi();
}

function saveSchedule() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const d = new Date();
  const newSheet = ss.insertSheet()
  newSheet.setName(`${d.getMonth() + 1}/${d.getDate()} (${Math.floor(Date.now() / 1000)})`);
  const sheetSchedule = ss.getSheetByName('Schedule');
  const lastRow = sheetSchedule.getLastRow();
  const lastCol = sheetSchedule.getLastColumn();
  const data = sheetSchedule.getRange(1, 1, lastRow, lastCol);
  const dest = newSheet.getRange(1, 1, lastRow, lastCol);
  data.copyTo(dest);
  newSheet.autoResizeColumns(1, lastCol);
}

const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function shareSchedule() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('이메일로 공유', '이메일 주소를 입력하십시오.', ui.ButtonSet.YES_NO)
  if (response.getSelectedButton() == ui.Button.NO) return;
  const email = response.getResponseText();
  if (!email || !validateEmail(email)) return ui.alert('올바른 이메일 주소를 입력하십시오.');
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const d = new Date();
  const name = `${d.getMonth() + 1}/${d.getDate()} (${Math.floor(Date.now() / 1000)})`;
  const newSS = SpreadsheetApp.create(name);
  const newSheet = newSS.insertSheet();
  const sheetSchedule = ss.getSheetByName('Schedule');
  newSheet.setName(name);
  const lastRow = sheetSchedule.getLastRow();
  const lastCol = sheetSchedule.getLastColumn();
  const data = sheetSchedule.getRange(1, 1, lastRow, lastCol).getValues();
  const dest = newSheet.getRange(1, 1, lastRow, lastCol);
  dest.setValues(data);
  newSheet.autoResizeColumns(1, lastCol);
  newSS.addViewer(email);
  const sheet1 = newSS.getSheetByName('Sheet1');
  if (sheet1) newSS.deleteSheet(sheet1);
  ui.alert('일정이 성공적으로 공유되었습니다.');
}

const generateTableHTML = (data: Array<Array<any>>): string => {
  return '<table style="width:100%; border: 1px solid black; text-align: center;">' + data.map(row => '<tr style="border: 1px solid black; text-align: center;">' + row.map(cell => `<td style="border: 1px solid black; text-align: center;">${cell}</td>`).join('') + '</tr>').join('') + '</table>';
}

function emailSchedule() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('이메일로 공유', '이메일 주소를 입력하십시오.', ui.ButtonSet.YES_NO)
  if (response.getSelectedButton() == ui.Button.NO) return;
  const email = response.getResponseText();
  if (!email || !validateEmail(email)) return ui.alert('올바른 이메일 주소를 입력하십시오.');
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetSchedule = ss.getSheetByName('Schedule');
  const lastRow = sheetSchedule.getLastRow();
  const lastCol = sheetSchedule.getLastColumn();
  const data = sheetSchedule.getRange(1, 1, lastRow, lastCol).getValues();
  MailApp.sendEmail({
    to: email,
    subject: '스타벅스 스케줄',
    htmlBody: generateTableHTML(data),
  });
}

const shiftAllowed = (selectedShift: Partner, day: number, ids: Array<number>): boolean => {
  return (
    selectedShift.position !== SBPosition.Trainee &&
    day !== selectedShift.RestDay1 &&
    day !== selectedShift.RestDay2 &&
    ids.indexOf(selectedShift.id) === -1
  );
};

function makeSchedule() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheetPartners = ss.getSheetByName('Partners');
  const sheetSchedule = ss.getSheetByName('Schedule');

  sheetSchedule.clear();
  for (let ch of sheetSchedule.getCharts()) sheetSchedule.removeChart(ch);

  const startDate = Date.parse(sheetPartners.getRange(dateData.selector.row, dateData.selector.col).getValue() as string);
  const dates = to7.map(n => addDays(startDate, n));

  const partnerData = sheetPartners.getRange(
    partnerArea.start.row,
    partnerArea.start.col,
    partnerArea.numberOfPartners,
    partnerArea.numColumns
  );
  const partnerValues = partnerData.getValues();
  const partnersAll: Array<Partner> = partnerValues.map(v => {
    const posText = (v[1] as string).trim() || '무시';
    const shortPos = ShortPositions[posText];
    return {
      name: `${(v[0] as string).trim()} (${shortPos})`,
      position: TextToPosition[posText],
      RestDay1: TextToDay[(v[2] as string).trim()],
      RestDay2: TextToDay[(v[3] as string).trim()],
      id: Math.floor(Math.random() * 10000000),
      columnNumber: 0,
    };
  });
  partnersAll.sort((a, b) => (a.position > b.position) ? 1 : -1);

  const partnersValid: Array<Partner> = partnersAll.filter(p => p.name && p.position !== SBPosition.Ignore);
  for (let i = 0; i < partnersValid.length; i++) {
    const columnNumber = i + 2;
    const cell = sheetSchedule.getRange(1, columnNumber);
    cell.setValue(partnersValid[i].name);
    cell.setFontWeight('bold');
    cell.setVerticalAlignment('center');
    cell.setHorizontalAlignment('center');
    cell.setBorder(true, true, true, true, true, true);
    cell.setFontColor('#ffffff');
    cell.setBackground(Colors[partnersValid[i].position]);
    partnersValid[i].columnNumber = columnNumber;
  }

  // set default background color to red
  const shiftCells = sheetSchedule.getRange(2, 2, 7, partnersValid.length);
  shiftCells.setBackground(colors.red);

  const schedule = {};
  to7.forEach(d => schedule[d] = dupObj(emptyDay));
  let shifts: Array<Partner> = [];
  partnersValid.forEach((p: Partner) => to5.forEach(_ => shifts.push(dupObj(p) as Partner)));
  shifts = shuffle(shifts);

  const exitCond = (): boolean => shifts.length === 0 || shifts.every(sh => sh.position === SBPosition.Trainee);

  // assign shifts for each day
  to7.some(d => {
    const positionsInShift: Array<SBPosition> = [];
    ShiftNames.some(s => {
      to2.some(_ => {
        // const ids: Array<number> = schedule[d][s].map((shift: Partner) => shift.id);
        const ids: Array<number> = [].concat.apply([], ShiftNames.map((sn: string) => {
          return schedule[d][sn].map((sh: Partner) => sh.id);
        }));
        to1000.some(_ => {
          // make sure that this partner does not already have a shift on this day on this shift
          const selectedShift: Partner = shifts[shifts.length - 1];
          if (shiftAllowed(selectedShift, dates[d].getDay(), ids) &&
            // two baristas cannot open
            !(s === '오픈' &&
              positionsInShift.indexOf(SBPosition.Barista) > -1 &&
              selectedShift.position === SBPosition.Barista)) {

            const shift: Partner = shifts.pop();
            schedule[d][s].push(shift);
            positionsInShift.push(shift.position);
            const cell = sheetSchedule.getRange(d + 2, shift.columnNumber);
            cell.setValue(s);
            cell.setBackground(shiftBG[s]);
            cell.setFontWeight('bold');
            cell.setVerticalAlignment('center');
            cell.setHorizontalAlignment('center');
            cell.setBorder(true, true, true, true, true, true);

            return true;
          }
          shifts = shuffle(shifts);
        });
        return exitCond();
      });
      return exitCond();
    });
    return exitCond();
  });

  // redo the process for all remaining shifts on closing shifts
  if (shifts.length > 0) {
    to7.some(d => {
      const positionsInShift: Array<SBPosition> = [];
      const s = '마감';
      // const ids: Array<number> = schedule[d][s].map((shift: Partner) => shift.id);
      const ids: Array<number> = [].concat.apply([], ShiftNames.map((sn: string) => {
        return schedule[d][sn].map((sh: Partner) => sh.id);
      }));
      to1000.some(_ => {
        // make sure that this partner does not already have a shift on this day on this shift
        const selectedShift: Partner = shifts[shifts.length - 1];
        if (shiftAllowed(selectedShift, dates[d].getDay(), ids)) {
          const shift: Partner = shifts.pop();
          schedule[d][s].push(shift);
          positionsInShift.push(shift.position);
          setShiftCell(sheetSchedule.getRange(d + 2, shift.columnNumber), s);
          return true;
        }
        shifts = shuffle(shifts);
      });
      return exitCond();
    });
  }

  // redo the process for all remaining shifts on the closing shift
  // on Saturday
  if (shifts.length > 0) {
    to7.some(d => {
      if (dates[d].getDay() !== 6) return false;
      const positionsInShift: Array<SBPosition> = [];
      const s = '마감';
      // const ids: Array<number> = schedule[d][s].map((shift: Partner) => shift.id);
      const ids: Array<number> = [].concat.apply([], ShiftNames.map((sn: string) => {
        return schedule[d][sn].map((sh: Partner) => sh.id);
      }));
      to1000.some(_ => {
        // make sure that this partner does not already have a shift on this day on this shift
        const selectedShift: Partner = shifts[shifts.length - 1];
        if (shiftAllowed(selectedShift, dates[d].getDay(), ids)) {
          const shift: Partner = shifts.pop();
          schedule[d][s].push(shift);
          positionsInShift.push(shift.position);
          setShiftCell(sheetSchedule.getRange(d + 2, shift.columnNumber), s);
          return true;
        }
        shifts = shuffle(shifts);
      });
      return exitCond();
    });
  }

  // redo the process for all remaining shifts on the middle shift
  // on Sunday
  if (shifts.length > 0) {
    to7.some(d => {
      if (dates[d].getDay() !== 0) return false;
      const positionsInShift: Array<SBPosition> = [];
      const s = '마감';
      // const ids: Array<number> = schedule[d][s].map((shift: Partner) => shift.id);
      const ids: Array<number> = [].concat.apply([], ShiftNames.map((sn: string) => {
        return schedule[d][sn].map((sh: Partner) => sh.id);
      }));
      to1000.some(_ => {
        // make sure that this partner does not already have a shift on this day on this shift
        const selectedShift: Partner = shifts[shifts.length - 1];
        if (shiftAllowed(selectedShift, dates[d].getDay(), ids)) {
          const shift: Partner = shifts.pop();
          schedule[d][s].push(shift);
          positionsInShift.push(shift.position);
          setShiftCell(sheetSchedule.getRange(d + 2, shift.columnNumber), s);
          return true;
        }
        shifts = shuffle(shifts);
      });
      return exitCond();
    });
  }

  // redo the process for all remaining shifts on closing shifts
  if (shifts.length > 0) {
    to7.some(d => {
      const positionsInShift: Array<SBPosition> = [];
      const s = '마감';
      // const ids: Array<number> = schedule[d][s].map((shift: Partner) => shift.id);
      const ids: Array<number> = [].concat.apply([], ShiftNames.map((sn: string) => {
        return schedule[d][sn].map((sh: Partner) => sh.id);
      }));
      to1000.some(_ => {
        // make sure that this partner does not already have a shift on this day on this shift
        const selectedShift: Partner = shifts[shifts.length - 1];
        if (shiftAllowed(selectedShift, dates[d].getDay(), ids)) {
          const shift: Partner = shifts.pop();
          schedule[d][s].push(shift);
          positionsInShift.push(shift.position);
          setShiftCell(sheetSchedule.getRange(d + 2, shift.columnNumber), s);
          return true;
        }
        shifts = shuffle(shifts);
      });
      return exitCond();
    });
  }

  // create a label for leftover shifts that the manager must handle manually
  formatDayRange(sheetSchedule
    .getRange(leftOverSection.row, leftOverSection.col)
    .setValue('나머지'));

  // let the user know how many shifts are left over for each partner
  partnersValid.forEach((p: Partner) => {
    formatDayRange(sheetSchedule
      .getRange(leftOverSection.row, p.columnNumber)
      .setValue(shifts.filter((s: Partner) => s.id === p.id).length));
  });

  const dayLabels: Array<Array<string | number>> = [];
  const lastCol = sheetSchedule.getLastColumn() + 1;
  to7.forEach(n => {
    const cell = sheetSchedule.getRange(n + 2, 1);
    const day = schedule[n];
    const date = dates[n];
    const d = date.getDate();
    const dayName = `${date.getMonth() + 1}/${d}`;

    const dayLabel = `${dayName} (${dayAbbrev[date.getDay()]})`;
    dayLabels.push([dayLabel]);
    cell.setValue(dayLabel);

    formatDayRange(cell);
    const year = date.getFullYear();
    if (holidays[year] && holidays[year][dayName]) {
      cell.setBackground('#cc092f');
      cell.setFontColor('#ffffff');
      cell.setNote(holidays[year][dayName]);
    }
    formatDayRange(sheetSchedule.getRange(n + 2, lastCol, 1, 3).setValues([[
      day['오픈'].length,
      day['미들'].length,
      day['마감'].length,
    ]]));
    dayLabels[n].push(day['오픈'].length + day['미들'].length + day['마감'].length);
  });
  formatDayRange(sheetSchedule.getRange(1, lastCol, 1, 3).setValues([['(오)', '(미)', '(마)']]));
  sheetSchedule.autoResizeColumns(1, partnersValid.length + 4);

  const sheetPositions = ss.getSheetByName('Positions');
  const rangeDayLabels = sheetPositions.getRange(1, 4, 7, 2);
  rangeDayLabels.setValues(dayLabels);

  sheetSchedule.insertChart(sheetSchedule
    .newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(rangeDayLabels)
    .setPosition(11, 1, 0, 0)
    .setOption('title', 'Shifts by Day')
    .setOption('animation.duration', 1000)
    .build());

}

const formatDayRange = (dayRange: GoogleAppsScript.Spreadsheet.Range) => {
  dayRange.setFontWeight('bold');
  dayRange.setVerticalAlignment('center');
  dayRange.setHorizontalAlignment('center');
  dayRange.setBorder(true, true, true, true, true, true);
};