/*global chrome */

(function () {

    'use strict';

    var readyStateCheckInterval = window.setInterval(function () {
        if (document.readyState === 'complete') {

            window.clearInterval(readyStateCheckInterval);
            var versionEl = document.getElementById('aboutVersion');

            versionEl.innerHTML = 'The Great Suspender v' + chrome.runtime.getManifest().version;

            //listener for configureShortcuts
            /*configureShortcutsEl.onclick = function (e) {
                chrome.tabs.update({url: 'chrome://extensions/configureCommands'});
            };*/

            function hideNagForever() {
                gsUtils.setOption(gsUtils.NO_NAG, true);
            }

            document.getElementsByClassName('btnDonate').onclick = hideNagForever;
        }
    }, 50);

}());