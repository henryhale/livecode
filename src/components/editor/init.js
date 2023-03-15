import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete';
import {
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  foldKeymap,
  indentOnInput,
  syntaxHighlighting,
} from '@codemirror/language';
import { lintKeymap } from '@codemirror/lint';
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { Compartment, EditorState } from '@codemirror/state';
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { ref } from 'vue';

export default function createEditor(target) {
  let doc = ref('');
  const state = EditorState.create({
    doc: '',
    extensions: [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap,
        indentWithTab,
      ]),
      EditorView.updateListener.of((e) => {
        doc.value = e.state.doc.toString();
      }),
    ],
  });
  const view = new EditorView({
    state,
    parent: target,
  });
  const langConf = new Compartment();
  function setLanguage(lang) {
    let plug;
    switch (('' + lang).toLowerCase()) {
      case 'html':
        plug = html();
        break;
      case 'css':
        plug = css();
        break;
      case 'javascript':
        plug = javascript();
        break;
      default:
        break;
    }
    if (!plug) return;
    view.dispatch({
      effects: langConf.reconfigure(plug),
    });
  }
  function setDoc(d) {
    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: d + '\n' },
    });
  }
  return {
    doc,
    setDoc,
    setLanguage,
  };
}
