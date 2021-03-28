/// <reference path="types/fn.d.ts" />
/// <reference path="types/api.d.ts" />
/// <reference path="types/global.d.ts" />
/// <reference path="types/highlight.d.ts" />

/** @noSelf **/
declare namespace vim {
  /**
   * Invokes vim-function or user-function.
   *
   * To call autoload functions, use the syntax:
   *   vim.fn['some#function']({...})
   */
  const fn: fn & {
    [key: string]: (args?: any) => any;
  };
  /**
   * Invokes Nvim |API| function {func} with arguments {...}.
   * Example: call the "nvim_get_current_line()" API function:
        print(tostring(vim.api.nvim_get_current_line()))
   */
  const api: api;
  /**
   * Nvim includes a function for highlighting a selection on yank (see for example https://github.com/machakann/vim-highlightedyank). To enable it, add
   *   au TextYankPost * silent! lua vim.highlight.on_yank()
   * to your `init.vim`. You can customize the highlight group and the duration of the highlight via
   *   au TextYankPost * silent! lua vim.highlight.on_yank {higroup="IncSearch", timeout=150}
   * If you want to exclude visual selections from highlighting on yank, use
   *   au TextYankPost * silent! lua vim.highlight.on_yank {on_visual=false}
   */
  const highlight: highlight;
  /** Parse the regex {re} and return a regex object. 'magic' and
   *  'ignorecase' options are ignored, lua regexes always defaults to magic
   *  and ignoring case.  The behavior can be changed with flags in
   *  the beginning of the string |/magic|. */
  function regex(re: any): any;
  /** `vim.loop` exposes all features of the Nvim event-loop.  This is a low-level
   *  API that provides functionality for networking, filesystem, and process
   *  management.  Try this command to see available functions:
   *    :lua print(vim.inspect(vim.loop))
   *
   *  Reference: https://github.com/luvit/luv/blob/master/docs.md
   *  Examples:  https://github.com/luvit/luv/tree/master/examples
   */
  const loop: any;
}
