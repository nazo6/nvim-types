interface highlight {
  /** 
      * Highlights the yanked text. The fields of the optional dict {opts}
        control the highlight:
          - {higroup} highlight group for yanked region (default `"IncSearch"`)
          - {timeout} time in ms before highlight is cleared (default `150`)
          - {on_macro} highlight when executing macro (default `false`)
          - {on_visual} highlight when yanking visual selection (default `true`)
          - {event} event structure (default `vim.v.event`)
      */
  on_yank: (any) => any;
  /** 
      * in buffer {bufnr} with the highlight group {higroup} using the namespace
        {ns}. Optional arguments are the type of range (characterwise, linewise,
        or blockwise, see |setreg|; default to characterwise) and whether the
        range is inclusive (default false).
      */
  range: (any) => any;
}
