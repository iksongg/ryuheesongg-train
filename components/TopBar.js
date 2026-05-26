(function () {

  var TABS = ['전체', 'KTX', 'SRT', '새마을', '무궁화', 'ITX-청춘'];

  function create(props) {
    var p = props || {};
    var from        = p.from        || '서울';
    var to          = p.to          || '부산';
    var currentDate = p.currentDate || '04.07(화)';
    var prevDate    = p.prevDate    || '';
    var nextDate    = p.nextDate    || '';
    var activeTab   = p.activeTab   || '전체';

    var tabsHtml = TABS.map(function (t) {
      return '<div class="tab' + (t === activeTab ? ' active' : '') + '" data-tab="' + t + '">' + t + '</div>';
    }).join('');

    return [
      '<div class="top-bar" id="top-bar">',

        /* 출도착지 바 */
        '<div class="route-bar">',
          '<div class="back-btn">',
            Icons.arrowBack,
          '</div>',
          '<div class="route-center">',
            '<div class="search-icon" style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + Icons.search + '</div>',
            '<div class="route-names">',
              '<span class="station">' + from + '</span>',
              '<div class="arrow-icon">',
                '<svg width="20" height="14" viewBox="0 0 20 14" fill="none">',
                  '<path d="M13 1L19 7L13 13M1 7H19" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
                '</svg>',
              '</div>',
              '<span class="station">' + to + '</span>',
            '</div>',
          '</div>',
          '<div class="refresh-btn">',
            '<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center">' + Icons.refresh + '</div>',
          '</div>',
        '</div>',

        /* 날짜 바 */
        '<div class="date-bar">',
          '<div class="date-nav" id="date-prev" onclick="window._goPrevDate()"',
            ' style="' + (prevDate ? '' : 'visibility:hidden;pointer-events:none;') + '">',
            '<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center">' + Icons.arrowLeft + '</div>',
            '<span class="date-text">' + prevDate + '</span>',
          '</div>',
          '<div class="date-current" onclick="window._openDateSheet()" style="cursor:pointer">',
            '<div class="calendar-icon" style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:visible">' + Icons.calendar + '</div>',
            '<span class="current-date">' + currentDate + '</span>',
          '</div>',
          '<div class="date-nav" id="date-next" onclick="window._goNextDate()"',
            ' style="' + (nextDate ? '' : 'visibility:hidden;pointer-events:none;') + '">',
            '<span class="date-text">' + nextDate + '</span>',
            '<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center">' + Icons.arrowRight + '</div>',
          '</div>',
        '</div>',

        /* 열차 종류 탭 */
        '<div class="train-type-tabs" id="train-tabs">' + tabsHtml + '</div>',

      '</div>',
    ].join('');
  }

  window.TopBar = { create: create };
})();
