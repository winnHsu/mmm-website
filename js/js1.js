"use strict"; (self.webpackChunksolanum = self.webpackChunksolanum || []).push([[954], { 954: (e, t, a) => { a.d(t, { default: () => r }); class r { static hoverEnabled() { return window.matchMedia("(hover: hover)").matches } static motionEnabled() { return window.matchMedia("(hover: hover)").matches } static getFocusableElements(e) { return Array.from(e.querySelectorAll(':where(a, button, input:not([type="hidden"]), select, textarea, iframe, [tabindex], [contentEditable="true"])')).filter(e => e.offsetParent && !e.disabled && !e.inert && !e.closest("[inert]")) } } } }]);

//below are self-defined functions
$(document).ready(function () {

  // 1. Close tooltips when clicking anywhere on the page
  $(document).on('click', function () {
    $('.points-of-interest-image-tooltip').removeClass('showCard');
  });

  // 2. Toggle tooltip when clicking a POI button
  $('.points-of-interest-image-info').on(
    'click',
    '.points-of-interest-image-item button.points-of-interest-image-toggle',
    function (e) {
      e.preventDefault();
      e.stopPropagation(); // <-- critical

      var $tooltip = $(this).siblings('.points-of-interest-image-tooltip');
      var isOpen = $tooltip.hasClass('showCard');

      $('.points-of-interest-image-tooltip').removeClass('showCard');

      if (!isOpen) {
        $tooltip.addClass('showCard');
      }
    }
  );
});
