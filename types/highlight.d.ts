/** @noSelf **/
interface highlight {
  /** 
      Highlights the yanked text. The fields of the optional dict {opts}
        control the highlight:
          - {higroup} highlight group for yanked region (default `"IncSearch"`)
          - {timeout} time in ms before highlight is cleared (default `150`)
          - {on_macro} highlight when executing macro (default `false`)
          - {on_visual} highlight when yanking visual selection (default `true`)
          - {event} event structure (default `vim.v.event`)

vim.highlight.range({bufnr}, {ns}, {higroup}, {start}, {finish}, {rtype}, {inclusive})
      */
  on_yank: (opts: any) => any;
}
