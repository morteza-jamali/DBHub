ace.define(
  'ace/theme/vscodeDark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function (require, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-vscode-dark';
    exports.cssText =
      '.ace-vscode-dark .ace_gutter {\
  background: #1e1e1e;\
  color: #8F908A\
  }\
  .ace-vscode-dark .ace_print-margin {\
  width: 1px;\
  background: #555651\
  }\
  .ace-vscode-dark {\
  background-color: #272822;\
  color: #F8F8F2\
  }\
  .ace-vscode-dark .ace_cursor {\
  color: #F8F8F0\
  }\
  .ace-vscode-dark .ace_tooltip {\
  background-color: #333333 !important;\
  background-image: none !important;\
  border: 1px solid #4d4d4d !important;\
  border-radius: 0 !important;\
  box-shadow: none !important;\
  color: #cccccc !important;\
  padding: 5px 10px !important;\
  }\
  .ace-vscode-dark .ace_marker-layer .ace_selection {\
  background: rgba(0, 102, 255, 0.4);\
  }\
  .ace-vscode-dark.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px #272822;\
  }\
  .ace-vscode-dark .ace_marker-layer .ace_step {\
  background: rgb(102, 82, 0)\
  }\
  .ace-vscode-dark .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #49483E\
  }\
  .ace-vscode-dark .ace_marker-layer .ace_active-line {\
  border-top: 1px solid #4d4d4d;\
  border-bottom: 1px solid #4d4d4d;\
  }\
  .ace-vscode-dark .ace_gutter-active-line {\
  color: #ffffff;\
  }\
  .ace-vscode-dark .ace_scrollbar.ace_scrollbar-v,\
  .ace-vscode-dark .ace_scrollbar.ace_scrollbar-h {\
  transition: all 0.3s;\
  opacity: 0;\
  }\
  .ace-vscode-dark:hover .ace_scrollbar.ace_scrollbar-v,\
  .ace-vscode-dark:hover .ace_scrollbar.ace_scrollbar-h {\
  opacity: 1;\
  }\
  .ace-vscode-dark .ace_marker-layer .ace_selected-word {\
  border: 1px solid #49483E\
  }\
  .ace-vscode-dark .ace_invisible {\
  color: #52524d\
  }\
  .ace-vscode-dark .ace_scroller.ace_scroll-left {\
  box-shadow: none !important;\
  }\
  .ace-vscode-dark .ace_gutter-cell.ace_error {\
  background-image: none !important;\
  background-color: rgba(255, 0, 0, 0.4);\
  }\
  .ace-vscode-dark .ace_entity.ace_name.ace_tag,\
  .ace-vscode-dark .ace_keyword,\
  .ace-vscode-dark .ace_meta.ace_tag,\
  .ace-vscode-dark .ace_storage {\
  color: #F92672\
  }\
  .ace-vscode-dark .ace_punctuation,\
  .ace-vscode-dark .ace_punctuation.ace_tag {\
  color: #fff\
  }\
  .ace-vscode-dark .ace_constant.ace_character,\
  .ace-vscode-dark .ace_constant.ace_language,\
  .ace-vscode-dark .ace_constant.ace_numeric,\
  .ace-vscode-dark .ace_constant.ace_other {\
  color: #AE81FF\
  }\
  .ace-vscode-dark .ace_invalid {\
  color: #F8F8F0;\
  background-color: #F92672\
  }\
  .ace-vscode-dark .ace_invalid.ace_deprecated {\
  color: #F8F8F0;\
  background-color: #AE81FF\
  }\
  .ace-vscode-dark .ace_support.ace_constant,\
  .ace-vscode-dark .ace_support.ace_function {\
  color: #66D9EF\
  }\
  .ace-vscode-dark .ace_fold {\
  background-color: #A6E22E;\
  border-color: #F8F8F2\
  }\
  .ace-vscode-dark .ace_storage.ace_type,\
  .ace-vscode-dark .ace_support.ace_class,\
  .ace-vscode-dark .ace_support.ace_type {\
  font-style: italic;\
  color: #66D9EF\
  }\
  .ace-vscode-dark .ace_entity.ace_name.ace_function,\
  .ace-vscode-dark .ace_entity.ace_other,\
  .ace-vscode-dark .ace_entity.ace_other.ace_attribute-name,\
  .ace-vscode-dark .ace_variable {\
  color: #A6E22E\
  }\
  .ace-vscode-dark .ace_variable.ace_parameter {\
  font-style: italic;\
  color: #FD971F\
  }\
  .ace-vscode-dark .ace_string {\
  color: #E6DB74\
  }\
  .ace-vscode-dark .ace_comment {\
  color: #75715E\
  }\
  .ace-vscode-dark .ace_indent-guide {\
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
  }';

    var dom = require('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
(function () {
  ace.require(['ace/theme/vscodeDark'], function (m) {
    if (typeof module == 'object' && typeof exports == 'object' && module) {
      module.exports = m;
    }
  });
})();
