interface api {
  /**
   * TODO: Documentation
   */
  nvim__get_hl_defs: (ns_id: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__get_lib_dir: () => any;
  /**
   * Returns object given as argument.
   */
  nvim__id: (obj: any) => any;
  /**
   * Returns array given as argument.
   */
  nvim__id_array: (arr: any) => any;
  /**
   * Returns dictionary given as argument.
   */
  nvim__id_dictionary: (dct: any) => any;
  /**
   * Returns floating-point value given as argument.
   */
  nvim__id_float: (flt: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__inspect_cell: (grid: any, row: any, col: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__screenshot: (path: any) => any;
  /**
   * Gets internal stats.
   */
  nvim__stats: () => any;
  /**
   * Calls many API methods atomically.
   */
  nvim_call_atomic: (calls: any) => any;
  /**
   * Calls a VimL |Dictionary-function| with the given arguments.
   */
  nvim_call_dict_function: (dict: any, fn: any, args: any) => any;
  /**
   * Calls a VimL function with the given arguments.
   */
  nvim_call_function: (fn: any, args: any) => any;
  /**
   * Executes an ex-command.
   */
  nvim_command: (command: any) => any;
  /**
   * Creates a new, empty, unnamed buffer.
   */
  nvim_create_buf: (listed: any, scratch: any) => any;
  /**
   * Creates a new namespace, or gets an existing one.
   */
  nvim_create_namespace: (name: any) => any;
  /**
   * Deletes the current line.
   */
  nvim_del_current_line: () => any;
  /**
   * Unmaps a global |mapping| for the given mode.
   */
  nvim_del_keymap: (mode: any, lhs: any) => any;
  /**
   * Removes a global (g:) variable.
   */
  nvim_del_var: (name: any) => any;
  /**
   * Echo a message.
   */
  nvim_echo: (chunks: any, history: any, opts: any) => any;
  /** 
      * Writes a message to the Vim error buffer. Does not append
                "\n", the message is buffered (won't display) until a linefeed
                is written.
      */
  nvim_err_write: (str: any) => any;
  /** 
      * Writes a message to the Vim error buffer. Appends "\n", so the
                buffer is flushed (and displayed).
      */
  nvim_err_writeln: (str: any) => any;
  /** 
      * Evaluates a VimL |expression|. Dictionaries and Lists are
                recursively expanded.
      */
  nvim_eval: (expr: any) => any;
  /** 
      * Executes Vimscript (multiline block of Ex-commands), like
                anonymous |:source|.
      */
  nvim_exec: (src: any, output: any) => any;
  /** 
      * Execute Lua code. Parameters (if any) are available as `...`
                inside the chunk. The chunk can return a value.
      */
  nvim_exec_lua: (code: any, args: any) => any;
  /** 
      * Sends input-keys to Nvim, subject to various quirks controlled
                by `mode` flags. This is a blocking call, unlike
                |nvim_input()|.
      */
  nvim_feedkeys: (keys: any, mode: any, escape_csi: any) => any;
  /**
   * Gets the option information for all options.
   */
  nvim_get_all_options_info: () => any;
  /** 
      * Returns a 2-tuple (Array), where item 0 is the current channel
                id and item 1 is the |api-metadata| map (Dictionary).
      */
  nvim_get_api_info: () => any;
  /**
   * Get information about a channel.
   */
  nvim_get_chan_info: (chan: any) => any;
  /** 
      * Returns the 24-bit RGB value of a |nvim_get_color_map()| color
                name or "#rrggbb" hexadecimal string.
      */
  nvim_get_color_by_name: (name: any) => any;
  /**
   * Returns a map of color names and RGB values.
   */
  nvim_get_color_map: () => any;
  /**
   * Gets a map of global (non-buffer-local) Ex commands.
   */
  nvim_get_commands: (opts: any) => any;
  /**
   * Gets a map of the current editor state.
   */
  nvim_get_context: (opts: any) => any;
  /**
   * Gets the current buffer.
   */
  nvim_get_current_buf: () => any;
  /**
   * Gets the current line.
   */
  nvim_get_current_line: () => any;
  /**
   * Gets the current tabpage.
   */
  nvim_get_current_tabpage: () => any;
  /**
   * Gets the current window.
   */
  nvim_get_current_win: () => any;
  /**
   * Gets a highlight definition by id. |hlID()|
   */
  nvim_get_hl_by_id: (hl_id: any, rgb: any) => any;
  /**
   * Gets a highlight definition by name.
   */
  nvim_get_hl_by_name: (name: any, rgb: any) => any;
  /**
   * Gets a highlight group by name
   */
  nvim_get_hl_id_by_name: (name: any) => any;
  /** 
      * Gets a list of global (non-buffer-local) |mapping|
                definitions.
      */
  nvim_get_keymap: (mode: any) => any;
  /** 
      * Gets the current mode. |mode()| "blocking" is true if Nvim is
                waiting for input.
      */
  nvim_get_mode: () => any;
  /**
   * Gets existing, non-anonymous namespaces.
   */
  nvim_get_namespaces: () => any;
  /**
   * Gets an option value string.
   */
  nvim_get_option: (name: any) => any;
  /**
   * Gets the option information for one option
   */
  nvim_get_option_info: (name: any) => any;
  /**
   * Gets info describing process `pid` .
   */
  nvim_get_proc: (pid: any) => any;
  /**
   * Gets the immediate children of process `pid` .
   */
  nvim_get_proc_children: (pid: any) => any;
  /**
   * Find files in runtime directories
   */
  nvim_get_runtime_file: (name: any, all: any) => any;
  /**
   * Gets a global (g:) variable.
   */
  nvim_get_var: (name: any) => any;
  /**
   * Gets a v: variable.
   */
  nvim_get_vvar: (name: any) => any;
  /** 
      * Queues raw user-input. Unlike |nvim_feedkeys()|, this uses a
                low-level input buffer and the call is non-blocking (input is
                processed asynchronously by the eventloop).
      */
  nvim_input: (keys: any) => any;
  /**
   * Send mouse event from GUI.
   */
  nvim_input_mouse: (
    button: any,
    action: any,
    modifier: any,
    grid: any,
    row: any,
    col: any
  ) => any;
  /**
   * Gets the current list of buffer handles
   */
  nvim_list_bufs: () => any;
  /**
   * Get information about all open channels.
   */
  nvim_list_chans: () => any;
  /**
   * Gets the paths contained in 'runtimepath'.
   */
  nvim_list_runtime_paths: () => any;
  /**
   * Gets the current list of tabpage handles.
   */
  nvim_list_tabpages: () => any;
  /**
   * Gets a list of dictionaries representing attached UIs.
   */
  nvim_list_uis: () => any;
  /**
   * Gets the current list of window handles.
   */
  nvim_list_wins: () => any;
  /**
   * Sets the current editor state from the given |context| map.
   */
  nvim_load_context: (dict: any) => any;
  /**
   * Notify the user with a message
   */
  nvim_notify: (msg: any, log_level: any, opts: any) => any;
  /**
   * Open a new window.
   */
  nvim_open_win: (buffer: any, enter: any, config: any) => any;
  /** 
      * Writes a message to the Vim output buffer. Does not append
                "\n", the message is buffered (won't display) until a linefeed
                is written.
      */
  nvim_out_write: (str: any) => any;
  /**
   * Parse a VimL expression.
   */
  nvim_parse_expression: (expr: any, flags: any, highlight: any) => any;
  /**
   * Pastes at cursor, in any mode.
   */
  nvim_paste: (data: any, crlf: any, phase: any) => any;
  /**
   * Puts text at cursor, in any mode.
   */
  nvim_put: (lines: any, type: any, after: any, follow: any) => any;
  /** 
      * Replaces terminal codes and |keycodes| (<CR>, <Esc>, ...) in a
                string with the internal representation.
      */
  nvim_replace_termcodes: (
    str: any,
    from_part: any,
    do_lt: any,
    special: any
  ) => any;
  /**
   * Selects an item in the completion popupmenu.
   */
  nvim_select_popupmenu_item: (
    item: any,
    insert: any,
    finish: any,
    opts: any
  ) => any;
  /**
   * Self-identifies the client.
   */
  nvim_set_client_info: (
    name: any,
    version: any,
    type: any,
    methods: any,
    attributes: any
  ) => any;
  /**
   * Sets the current buffer.
   */
  nvim_set_current_buf: (buffer: any) => any;
  /**
   * Changes the global working directory.
   */
  nvim_set_current_dir: (dir: any) => any;
  /**
   * Sets the current line.
   */
  nvim_set_current_line: (line: any) => any;
  /**
   * Sets the current tabpage.
   */
  nvim_set_current_tabpage: (tabpage: any) => any;
  /**
   * Sets the current window.
   */
  nvim_set_current_win: (window: any) => any;
  /**
   * Set or change decoration provider for a namespace
   */
  nvim_set_decoration_provider: (ns_id: any, opts: any) => any;
  /**
   * Set a highlight group.
   */
  nvim_set_hl: (ns_id: any, name: any, val: any) => any;
  /**
   * Set active namespace for highlights.
   */
  nvim_set_hl_ns: (ns_id: any) => any;
  /**
   * Sets a global |mapping| for the given mode.
   */
  nvim_set_keymap: (mode: any, lhs: any, rhs: any, opts: any) => any;
  /**
   * Sets an option value.
   */
  nvim_set_option: (name: any, value: any) => any;
  /**
   * Sets a global (g:) variable.
   */
  nvim_set_var: (name: any, value: any) => any;
  /**
   * Sets a v: variable, if it is not readonly.
   */
  nvim_set_vvar: (name: any, value: any) => any;
  /** 
      * Calculates the number of display cells occupied by `text` .
                <Tab> counts as one cell.
      */
  nvim_strwidth: (text: any) => any;
  /**
   * Subscribes to event broadcasts.
   */
  nvim_subscribe: (event: any) => any;
  /**
   * Unsubscribes to event broadcasts.
   */
  nvim_unsubscribe: (event: any) => any;
}
