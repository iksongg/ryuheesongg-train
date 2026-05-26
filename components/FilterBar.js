(function () {

  function create(props) {
    var p = props || {};
    var soldoutActive = !!p.soldoutActive;
    var sortLabel     = p.currentSort || '정렬';

    var soldoutBtnStyle  = soldoutActive ? 'background:#3a66af;border-color:#3a66af;' : '';
    var soldoutTextStyle = soldoutActive ? 'color:white;' : 'color:#424242;';
    var checkIcon        = soldoutActive ? Icons.checkCircleActive : Icons.checkCircleInact;

    return [
      '<div class="filter-bar" id="filter-bar">',

        '<div class="filter-left">',

          /* 정렬 버튼 */
          '<button class="filter-btn" id="sort-btn" style="gap:2px;background:white;border-color:#dbdbdb;">',
            '<span style="color:#5b5b5b;font-weight:500;">' + sortLabel + '</span>',
            '<div style="transform:rotate(-90deg);width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0">',
              Icons.chevronLeft,
            '</div>',
          '</button>',

          /* 필터 버튼 */
          '<button class="filter-btn" style="gap:1px;background:white;border-color:#dbdbdb;">',
            '<span style="color:#5b5b5b;font-weight:500;">필터</span>',
            '<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0">',
              Icons.pageInfo,
            '</div>',
          '</button>',

        '</div>',

        /* 매진제외 버튼 */
        '<button class="soldout-btn" id="soldout-btn" style="gap:2px;' + soldoutBtnStyle + '">',
          '<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + checkIcon + '</div>',
          '<span style="' + soldoutTextStyle + '">매진제외</span>',
        '</button>',

      '</div>',
    ].join('');
  }

  window.FilterBar = { create: create };
})();
