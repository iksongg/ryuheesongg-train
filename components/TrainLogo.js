(function () {
  'use strict';

  /* =====================================================
     TrainLogo.js — 열차 로고 전용 컴포넌트 (Figma 벡터 기반)
     TrainLogo.get(type)              → 일반 카드용
     TrainLogo.get(type, TrainLogo.DIM) → 매진 카드용 (회색+반투명)
  ===================================================== */

  var T = {};
  var BASE = 'assets/logos/';

  T.DIM = 'filter:grayscale(1);opacity:0.35';

  function makeSvg(w, h, pieces, style) {
    var s = '<svg width="' + w + '" height="13" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none"' +
      ' xmlns="http://www.w3.org/2000/svg"' +
      ' style="display:block;flex-shrink:0' + (style ? ';' + style : '') + '">';
    for (var i = 0; i < pieces.length; i++) {
      var p = pieces[i];
      s += '<image href="' + BASE + p[0] + '" x="' + p[1] + '" y="' + p[2] + '" width="' + p[3] + '" height="' + p[4] + '"/>';
    }
    s += '</svg>';
    return s;
  }

  /* ── KTX ─────────────────────────── */
  T.ktx = function (s) {
    return makeSvg(38, 13, [
      ['ktx-0.svg',  0,      2.262, 28.663, 10.737],
      ['ktx-1.svg',  17.317, 0,     20.683, 13    ]
    ], s);
  };

  /* ── KTX-산천 ────────────────────── */
  T.ktxSancheon = function (s) {
    return makeSvg(58, 12.889, [
      ['ktxs-0.svg', 35.722, 9.326,  8.671,  3.562 ],
      ['ktxs-1.svg', 42.566, 3.396,  4.217,  6.328 ],
      ['ktxs-2.svg', 35.815, 3.400,  6.885,  5.324 ],
      ['ktxs-3.svg', 47.490, 9.326,  8.683,  3.562 ],
      ['ktxs-4.svg', 53.986, 3.396,  4.014,  6.328 ],
      ['ktxs-5.svg', 47.572, 2.811,  7.401,  5.928 ],
      ['ktxs-6.svg', 0,      2.243, 29.452, 10.642 ],
      ['ktxs-7.svg', 17.794, 0,     21.251, 12.885 ]
    ], s);
  };

  /* ── ITX-새마을 ──────────────────── */
  T.itxSaemaeul = function (s) {
    return makeSvg(50, 12.903, [
      ['itxs-0.svg', 2.570,  0,     30.810, 4.172],
      ['itxs-1.svg', 0,      5.121,  5.895, 7.770],
      ['itxs-2.svg', 6.225,  3.454, 21.300, 9.440],
      ['itxs-3.svg', 28.350, 5.637,  7.785, 7.267],
      ['itxs-4.svg', 36.115, 5.626,  7.650, 7.267],
      ['itxs-5.svg', 42.745, 5.160,  7.255, 7.732]
    ], s);
  };

  /* ── 무궁화 ──────────────────────── */
  T.mugunghwa = function (s) {
    return makeSvg(37, 13, [
      ['mk-0.svg', 0,      0.773, 10.956, 11.602],
      ['mk-1.svg', 12.724, 0.773, 10.956, 12.226],
      ['mk-2.svg', 25.138, 0,     11.862, 12.375]
    ], s);
  };

  /* ── 새마을 ──────────────────────── */
  T.saemaeul = function (s) {
    return makeSvg(40, 13.043, [
      ['sm-0.svg', 0,      0.659, 11.756, 12.382],
      ['sm-1.svg', 14.192, 0.659, 12.588, 12.367],
      ['sm-2.svg', 28.060, 0,     11.940, 13.043]
    ], s);
  };

  /* ── ITX-청춘 ────────────────────── */
  T.itx = function (s) {
    return makeSvg(42, 13.097, [
      ['itxc-0.svg',  2.558,  0,      30.631, 4.128],
      ['itxc-1.svg',  37.346, 9.330,   1.436, 1.772],
      ['itxc-2.svg',  34.495, 11.877,  5.893, 0.896],
      ['itxc-3.svg',  34.495, 10.500,  1.588, 2.275],
      ['itxc-4.svg',  35.213, 9.043,   6.136, 0.898],
      ['itxc-5.svg',  32.621, 6.048,   2.759, 3.757],
      ['itxc-6.svg',  28.211, 5.620,   5.015, 3.815],
      ['itxc-7.svg',  35.759, 5.620,   6.241, 3.086],
      ['itxc-8.svg',  29.194, 8.992,   4.465, 4.103],
      ['itxc-9.svg',  0,      5.080,   5.863, 7.698],
      ['itxc-10.svg', 6.195,  3.420,  21.185, 9.359]
    ], s);
  };

  /* ── 누리로 ──────────────────────── */
  T.nuriro = function (s) {
    return makeSvg(51, 13.021, [
      ['nr-0.svg', 17.320, 3.925, 12.403, 6.929],
      ['nr-1.svg', 27.203, 3.540,  7.676, 9.465],
      ['nr-2.svg',  2.545, 2.777, 13.586, 4.578],
      ['nr-3.svg',  0,     8.177, 16.636, 4.843],
      ['nr-4.svg', 32.028, 3.800, 18.447, 9.205],
      ['nr-5.svg',  7.630, 0,     43.365, 4.869]
    ], s);
  };

  /* ── SRT ─────────────────────────── */
  T.srt = function (s) {
    return '<svg width="30" height="13" viewBox="0 0 30 13" style="flex-shrink:0;display:block' + (s ? ';' + s : '') + '">' +
      '<text x="0" y="12" style="font-family:Impact,sans-serif;font-size:13px;font-weight:900;fill:#d41920">SRT</text>' +
      '</svg>';
  };

  /* ── 통합 접근자 ─────────────────── */
  T.get = function (type, filter) {
    var s = filter || '';
    switch (type) {
      case 'KTX':        return T.ktx(s);
      case 'KTX-산천':   return T.ktxSancheon(s);
      case 'ITX-새마을': return T.itxSaemaeul(s);
      case '무궁화':     return T.mugunghwa(s);
      case '새마을':     return T.saemaeul(s);
      case 'ITX-청춘':   return T.itx(s);
      case '누리로':     return T.nuriro(s);
      case 'SRT':        return T.srt(s);
      default:
        return '<span style="font-size:10px;font-weight:700;color:#3a66af">' + type + '</span>';
    }
  };

  window.TrainLogo = T;
})();
