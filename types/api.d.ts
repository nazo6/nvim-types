/** @noSelf **/
interface api {
  /**
   * TODO: Documentation
   */
  nvim__get_hl_defs: (ns_id?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__get_lib_dir: () => any;
  /**
   * Returns object given as argument.
   *
   * This API function is used for testing. One should not rely on
   * its presence in plugins.
   *
   * @param obj - Object to return.
   *
   * @returns  its argument.
   */
  nvim__id: (obj?: any) => any;
  /**
   * Returns array given as argument.
   *
   * This API function is used for testing. One should not rely on
   * its presence in plugins.
   *
   * @param arr - Array to return.
   *
   * @returns  its argument.
   */
  nvim__id_array: (arr?: any) => any;
  /**
   * Returns dictionary given as argument.
   *
   * This API function is used for testing. One should not rely on
   * its presence in plugins.
   *
   * @param dct - Dictionary to return.
   *
   * @returns  its argument.
   */
  nvim__id_dictionary: (dct?: any) => any;
  /**
   * Returns floating-point value given as argument.
   *
   * This API function is used for testing. One should not rely on
   * its presence in plugins.
   *
   * @param flt - Value to return.
   *
   * @returns  its argument.
   */
  nvim__id_float: (flt?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__inspect_cell: (grid?: any, row?: any, col?: any) => any;
  /**
   * TODO: Documentation
   *
   * Attributes: ~
   *     {fast}
   */
  nvim__screenshot: (path?: any) => any;
  /**
   * Set active namespace for highlights.
   *
   * NB: this function can be called from async contexts, but the
   * semantics are not yet well-defined. To start with
   * |nvim_set_decoration_provider| on_win and on_line callbacks
   * are explicitly allowed to change the namespace during a redraw
   * cycle.
   *
   * Attributes: ~
   *     {fast}
   *
   * @param ns_id - the namespace to activate
   */
  nvim__set_hl_ns: (ns_id?: any) => any;
  /**
   * Gets internal stats.
   *
   * @returns  Map of various internal stats.
   */
  nvim__stats: () => any;
  /**
   * Calls many API methods atomically.
   *
   * This has two main usages:
   * 1. To perform several requests from an async context
   *    atomically, i.e. without interleaving redraws, RPC requests
   *    from other clients, or user interactions (however API
   *    methods may trigger autocommands or event processing which
   *    have such side-effects, e.g. |:sleep| may wake timers).
   * 2. To minimize RPC overhead (roundtrips) of a sequence of many
   *    requests.
   *
   * @param calls - an array of calls, where each call is described
   *   by an array with two elements: the request name,
   *   and an array of arguments.
   *
   * @returns  Array of two elements. The first is an array of return
   *  values. The second is NIL if all calls succeeded. If a
   *  call resulted in an error, it is a three-element array
   *  with the zero-based index of the call which resulted in an
   *  error, the error type and the error message. If an error
   *  occurred, the values from all preceding calls will still
   *  be returned.
   */
  nvim_call_atomic: (calls?: any) => any;
  /**
   * Calls a VimL |Dictionary-function| with the given arguments.
   *
   * On execution error: fails with VimL error, does not update
   * v:errmsg.
   *
   * @param dict - Dictionary, or String evaluating to a VimL |self|
   *   dict
   * @param fn - Name of the function defined on the VimL dict
   * @param args - Function arguments packed in an Array
   *
   * @returns  Result of the function call
   */
  nvim_call_dict_function: (dict?: any, fn?: any, args?: any) => any;
  /**
   * Calls a VimL function with the given arguments.
   *
   * On execution error: fails with VimL error, does not update
   * v:errmsg.
   *
   * @param fn - Function to call
   * @param args - Function arguments packed in an Array
   *
   * @returns  Result of the function call
   */
  nvim_call_function: (fn?: any, args?: any) => any;
  /**
   * Send data to channel `id` . For a job, it writes it to the
   * stdin of the process. For the stdio channel |channel-stdio|,
   * it writes to Nvim's stdout. For an internal terminal instance
   * (|nvim_open_term()|) it writes directly to terimal output. See
   * |channel-bytes| for more information.
   *
   * This function writes raw data, not RPC messages. If the
   * channel was created with `rpc=true` then the channel expects
   * RPC messages, use |vim.rpcnotify()| and |vim.rpcrequest()|
   * instead.
   *
   * @param chan - id of the channel
   * @param data - data to write. 8-bit clean: can contain NUL bytes.
   */
  nvim_chan_send: (chan?: any, data?: any) => any;
  /**
   * Executes an ex-command.
   *
   * On execution error: fails with VimL error, does not update
   * v:errmsg.
   *
   * @param command - Ex-command string
   *
   * See also: ~
   *     |nvim_exec()|
   */
  nvim_command: (command?: any) => any;
  /**
   * Creates a new, empty, unnamed buffer.
   *
   * @param listed - Sets 'buflisted'
   * @param scratch - Creates a "throwaway" |scratch-buffer| for
   *   temporary work (always 'nomodified'). Also sets
   *   'nomodeline' on the buffer.
   *
   * @returns  Buffer handle, or 0 on error
   *
   * See also: ~
   *     buf_open_scratch
   */
  nvim_create_buf: (listed?: any, scratch?: any) => any;
  /**
   * Creates a new namespace, or gets an existing one.
   *
   * Namespaces are used for buffer highlights and virtual text,
   * see |nvim_buf_add_highlight()| and |nvim_buf_set_extmark()|.
   *
   * Namespaces can be named or anonymous. If `name` matches an
   * existing namespace, the associated id is returned. If `name`
   * is an empty string a new, anonymous namespace is created.
   *
   * @param name - Namespace name or empty string
   *
   * @returns  Namespace id
   */
  nvim_create_namespace: (name?: any) => any;
  /**
   * Deletes the current line.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   */
  nvim_del_current_line: () => any;
  /**
   * Unmaps a global |mapping| for the given mode.
   *
   * To unmap a buffer-local mapping, use |nvim_buf_del_keymap()|.
   *
   * See also: ~
   *     |nvim_set_keymap()|
   */
  nvim_del_keymap: (mode?: any, lhs?: any) => any;
  /**
   * Removes a global (g:) variable.
   *
   * @param name - Variable name
   */
  nvim_del_var: (name?: any) => any;
  /**
   * Echo a message.
   *
   * @param chunks - A list of [text, hl_group] arrays, each
   *   representing a text chunk with specified
   *   highlight. `hl_group` element can be omitted
   *   for no highlight.
   * @param history - if true, add to |message-history|.
   * @param opts - Optional parameters. Reserved for future use.
   */
  nvim_echo: (chunks?: any, history?: any, opts?: any) => any;
  /**
   * Writes a message to the Vim error buffer. Does not append
   * "\n", the message is buffered (won't display) until a linefeed
   * is written.
   *
   * @param str - Message
   */
  nvim_err_write: (str?: any) => any;
  /**
   * Writes a message to the Vim error buffer. Appends "\n", so the
   * buffer is flushed (and displayed).
   *
   * @param str - Message
   *
   * See also: ~
   *     nvim_err_write()
   */
  nvim_err_writeln: (str?: any) => any;
  /**
   * Evaluates a VimL |expression|. Dictionaries and Lists are
   * recursively expanded.
   *
   * On execution error: fails with VimL error, does not update
   * v:errmsg.
   *
   * @param expr - VimL expression string
   *
   * @returns  Evaluation result or expanded object
   */
  nvim_eval: (expr?: any) => any;
  /**
   * Executes Vimscript (multiline block of Ex-commands), like
   * anonymous |:source|.
   *
   * Unlike |nvim_command()| this function supports heredocs,
   * script-scope (s:), etc.
   *
   * On execution error: fails with VimL error, does not update
   * v:errmsg.
   *
   * @param src - Vimscript code
   * @param output - Capture and return all (non-error, non-shell
   *   |:!|) output
   *
   * @returns  Output (non-error, non-shell |:!|) if `output` is true,
   *  else empty string.
   *
   * See also: ~
   *     |execute()|
   *     |nvim_command()|
   */
  nvim_exec: (src?: any, output?: any) => any;
  /**
   * Execute Lua code. Parameters (if any) are available as `...`
   * inside the chunk. The chunk can return a value.
   *
   * Only statements are executed. To evaluate an expression,
   * prefix it with `return` : return my_function(...)
   *
   * @param code - Lua code to execute
   * @param args - Arguments to the code
   *
   * @returns  Return value of Lua code if present or NIL.
   */
  nvim_exec_lua: (code?: any, args?: any) => any;
  /**
   * Sends input-keys to Nvim, subject to various quirks controlled
   * by `mode` flags. This is a blocking call, unlike
   * |nvim_input()|.
   *
   * On execution error: does not fail, but updates v:errmsg.
   *
   * To input sequences like <C-o> use |nvim_replace_termcodes()|
   * (typically with escape_csi=true) to replace the keycodes. Then
   * pass the result to nvim_feedkeys().
   *
   * Example: >
   *     :let key = nvim_replace_termcodes("<C-o>", v:true, v:false, v:true)
   *     :call nvim_feedkeys(key, 'n', v:true)
   *
   *
   * @param keys - to be typed
   * @param mode - behavior flags, see |feedkeys()|
   * @param escape_csi - If true, escape K_SPECIAL/CSI bytes in
   *   `keys`
   *
   * See also: ~
   *     feedkeys()
   *     vim_strsave_escape_csi
   */
  nvim_feedkeys: (keys?: any, mode?: any, escape_csi?: any) => any;
  /**
   * Gets the option information for all options.
   *
   * The dictionary has the full option names as keys and option
   * metadata dictionaries as detailed at |nvim_get_option_info|.
   *
   * @returns  dictionary of all options
   */
  nvim_get_all_options_info: () => any;
  /**
   * Returns a 2-tuple (Array), where item 0 is the current channel
   * id and item 1 is the |api-metadata| map (Dictionary).
   *
   * @returns  2-tuple [{channel-id}, {api-metadata}]
   *
   * Attributes: ~
   *     {fast}
   */
  nvim_get_api_info: () => any;
  /**
   * Get information about a channel.
   *
   * @returns  Dictionary describing a channel, with these keys:
   *  • "stream" the stream underlying the channel
   *  • "stdio" stdin and stdout of this Nvim instance
   *  • "stderr" stderr of this Nvim instance
   *  • "socket" TCP/IP socket or named pipe
   *  • "job" job with communication over its stdio
   *
   *     • "mode" how data received on the channel is interpreted
   *       • "bytes" send and receive raw bytes
   *       • "terminal" a |terminal| instance interprets ASCII
   *         sequences
   *       • "rpc" |RPC| communication on the channel is active
   *
   *     • "pty" Name of pseudoterminal, if one is used (optional).
   *       On a POSIX system, this will be a device path like
   *       /dev/pts/1. Even if the name is unknown, the key will
   *       still be present to indicate a pty is used. This is
   *       currently the case when using winpty on windows.
   *     • "buffer" buffer with connected |terminal| instance
   *       (optional)
   *     • "client" information about the client on the other end
   *       of the RPC channel, if it has added it using
   *       |nvim_set_client_info()|. (optional)
   */
  nvim_get_chan_info: (chan?: any) => any;
  /**
   * Returns the 24-bit RGB value of a |nvim_get_color_map()| color
   * name or "#rrggbb" hexadecimal string.
   *
   * Example: >
   *     :echo nvim_get_color_by_name("Pink")
   *     :echo nvim_get_color_by_name("#cbcbcb")
   *
   *
   * @param name - Color name or "#rrggbb" string
   *
   * @returns  24-bit RGB value, or -1 for invalid argument.
   */
  nvim_get_color_by_name: (name?: any) => any;
  /**
   * Returns a map of color names and RGB values.
   *
   * Keys are color names (e.g. "Aqua") and values are 24-bit RGB
   * color values (e.g. 65535).
   *
   * @returns  Map of color names and RGB values.
   */
  nvim_get_color_map: () => any;
  /**
   * Gets a map of global (non-buffer-local) Ex commands.
   *
   * Currently only |user-commands| are supported, not builtin Ex
   * commands.
   *
   * @param opts - Optional parameters. Currently only supports
   * @param "builtin":false -
   *
   * @returns  Map of maps describing commands.
   */
  nvim_get_commands: (opts?: any) => any;
  /**
   * Gets a map of the current editor state.
   *
   * @param opts - Optional parameters.
   *   • types: List of |context-types| ("regs", "jumps",
   *   "bufs", "gvars", …) to gather, or empty for
   *   "all".
   *
   * @returns  map of global |context|.
   */
  nvim_get_context: (opts?: any) => any;
  /**
   * Gets the current buffer.
   *
   * @returns  Buffer handle
   */
  nvim_get_current_buf: () => any;
  /**
   * Gets the current line.
   *
   * @returns  Current line string
   */
  nvim_get_current_line: () => any;
  /**
   * Gets the current tabpage.
   *
   * @returns  Tabpage handle
   */
  nvim_get_current_tabpage: () => any;
  /**
   * Gets the current window.
   *
   * @returns  Window handle
   */
  nvim_get_current_win: () => any;
  /**
   * Gets a highlight definition by id. |hlID()|
   *
   * @param hl_id - Highlight id as returned by |hlID()|
   * @param rgb - Export RGB colors
   *
   * @returns  Highlight definition map
   *
   * See also: ~
   *     nvim_get_hl_by_name
   */
  nvim_get_hl_by_id: (hl_id?: any, rgb?: any) => any;
  /**
   * Gets a highlight definition by name.
   *
   * @param name - Highlight group name
   * @param rgb - Export RGB colors
   *
   * @returns  Highlight definition map
   *
   * See also: ~
   *     nvim_get_hl_by_id
   */
  nvim_get_hl_by_name: (name?: any, rgb?: any) => any;
  /**
   * Gets a highlight group by name
   *
   * similar to |hlID()|, but allocates a new ID if not present.
   */
  nvim_get_hl_id_by_name: (name?: any) => any;
  /**
   * Gets a list of global (non-buffer-local) |mapping|
   * definitions.
   *
   * @param mode - Mode short-name ("n", "i", "v", ...)
   *
   * @returns  Array of maparg()-like dictionaries describing mappings.
   *  The "buffer" key is always zero.
   */
  nvim_get_keymap: (mode?: any) => any;
  /**
   * Gets the current mode. |mode()| "blocking" is true if Nvim is
   * waiting for input.
   *
   * @returns  Dictionary { "mode": String, "blocking": Boolean }
   *
   * Attributes: ~
   *     {fast}
   */
  nvim_get_mode: () => any;
  /**
   * Gets existing, non-anonymous namespaces.
   *
   * @returns  dict that maps from names to namespace ids.
   */
  nvim_get_namespaces: () => any;
  /**
   * Gets an option value string.
   *
   * @param name - Option name
   *
   * @returns  Option value (global)
   */
  nvim_get_option: (name?: any) => any;
  /**
   * Gets the option information for one option
   *
   * Resulting dictionary has keys:
   * • name: Name of the option (like 'filetype')
   * • shortname: Shortened name of the option (like 'ft')
   * • type: type of option ("string", "number" or "boolean")
   * • default: The default value for the option
   * • was_set: Whether the option was set.
   * • last_set_sid: Last set script id (if any)
   * • last_set_linenr: line number where option was set
   * • last_set_chan: Channel where option was set (0 for local)
   * • scope: one of "global", "win", or "buf"
   * • global_local: whether win or buf option has a global value
   * • commalist: List of comma separated values
   * • flaglist: List of single char flags
   *
   * @param name - Option name
   *
   * @returns  Option Information
   */
  nvim_get_option_info: (name?: any) => any;
  /**
   * Gets info describing process `pid` .
   *
   * @returns  Map of process properties, or NIL if process not found.
   */
  nvim_get_proc: (pid?: any) => any;
  /**
   * Gets the immediate children of process `pid` .
   *
   * @returns  Array of child process ids, empty if process not found.
   */
  nvim_get_proc_children: (pid?: any) => any;
  /**
   * Find files in runtime directories
   *
   * 'name' can contain wildcards. For example
   * nvim_get_runtime_file("colors/‍*.vim", true) will return all
   * color scheme files. Always use forward slashes (/) in the
   * search pattern for subdirectories regardless of platform.
   *
   * It is not an error to not find any files. An empty array is
   * returned then.
   *
   * To find a directory, `name` must end with a forward slash,
   * like "rplugin/python/". Without the slash it would instead
   * look for an ordinary file called "rplugin/python".
   *
   * Attributes: ~
   *     {fast}
   *
   * @param name - pattern of files to search for
   * @param all - whether to return all matches or only the first
   *
   * @returns  list of absolute paths to the found files
   */
  nvim_get_runtime_file: (name?: any, all?: any) => any;
  /**
   * Gets a global (g:) variable.
   *
   * @param name - Variable name
   *
   * @returns  Variable value
   */
  nvim_get_var: (name?: any) => any;
  /**
   * Gets a v: variable.
   *
   * @param name - Variable name
   *
   * @returns  Variable value
   */
  nvim_get_vvar: (name?: any) => any;
  /**
   * Queues raw user-input. Unlike |nvim_feedkeys()|, this uses a
   * low-level input buffer and the call is non-blocking (input is
   * processed asynchronously by the eventloop).
   *
   * On execution error: does not fail, but updates v:errmsg.
   *
   * Note:
   *     |keycodes| like <CR> are translated, so "<" is special. To
   *     input a literal "<", send <LT>.
   *
   * Note:
   *     For mouse events use |nvim_input_mouse()|. The pseudokey
   *     form "<LeftMouse><col,row>" is deprecated since
   *     |api-level| 6.
   *
   * Attributes: ~
   *     {fast}
   *
   * @param keys - to be typed
   *
   * @returns  Number of bytes actually written (can be fewer than
   *  requested if the buffer becomes full).
   */
  nvim_input: (keys?: any) => any;
  /**
   * Send mouse event from GUI.
   *
   * Non-blocking: does not wait on any result, but queues the
   * event to be processed soon by the event loop.
   *
   * Note:
   *     Currently this doesn't support "scripting" multiple mouse
   *     events by calling it multiple times in a loop: the
   *     intermediate mouse positions will be ignored. It should be
   *     used to implement real-time mouse input in a GUI. The
   *     deprecated pseudokey form ("<LeftMouse><col,row>") of
   *     |nvim_input()| has the same limitation.
   *
   * Attributes: ~
   *     {fast}
   *
   * @param button - Mouse button: one of "left", "right",
   *   "middle", "wheel".
   * @param action - For ordinary buttons, one of "press", "drag",
   *   "release". For the wheel, one of "up", "down",
   *   "left", "right".
   * @param modifier - String of modifiers each represented by a
   *   single char. The same specifiers are used as
   *   for a key press, except that the "-" separator
   *   is optional, so "C-A-", "c-a" and "CA" can all
   *   be used to specify Ctrl+Alt+click.
   * @param grid - Grid number if the client uses |ui-multigrid|,
   *   else 0.
   * @param row - Mouse row-position (zero-based, like redraw
   *   events)
   * @param col - Mouse column-position (zero-based, like redraw
   *   events)
   */
  nvim_input_mouse: (
    button?: any,
    action?: any,
    modifier?: any,
    grid?: any,
    row?: any,
    col?: any
  ) => any;
  /**
   * Gets the current list of buffer handles
   *
   * Includes unlisted (unloaded/deleted) buffers, like `:ls!` .
   * Use |nvim_buf_is_loaded()| to check if a buffer is loaded.
   *
   * @returns  List of buffer handles
   */
  nvim_list_bufs: () => any;
  /**
   * Get information about all open channels.
   *
   * @returns  Array of Dictionaries, each describing a channel with the
   *  format specified at |nvim_get_chan_info()|.
   */
  nvim_list_chans: () => any;
  /**
   * Gets the paths contained in 'runtimepath'.
   *
   * @returns  List of paths
   */
  nvim_list_runtime_paths: () => any;
  /**
   * Gets the current list of tabpage handles.
   *
   * @returns  List of tabpage handles
   */
  nvim_list_tabpages: () => any;
  /**
   * Gets a list of dictionaries representing attached UIs.
   *
   * @returns  Array of UI dictionaries, each with these keys:
   *  • "height" Requested height of the UI
   *  • "width" Requested width of the UI
   *  • "rgb" true if the UI uses RGB colors (false implies
   *  |cterm-colors|)
   *  • "ext_..." Requested UI extensions, see |ui-option|
   *  • "chan" Channel id of remote UI (not present for TUI)
   */
  nvim_list_uis: () => any;
  /**
   * Gets the current list of window handles.
   *
   * @returns  List of window handles
   */
  nvim_list_wins: () => any;
  /**
   * Sets the current editor state from the given |context| map.
   *
   * @param dict - |Context| map.
   */
  nvim_load_context: (dict?: any) => any;
  /**
   * Notify the user with a message
   *
   * Relays the call to vim.notify . By default forwards your
   * message in the echo area but can be overridden to trigger
   * desktop notifications.
   *
   * @param msg - Message to display to the user
   * @param log_level - The log level
   * @param opts - Reserved for future use.
   */
  nvim_notify: (msg?: any, log_level?: any, opts?: any) => any;
  /**
   * Open a terminal instance in a buffer
   *
   * By default (and currently the only option) the terminal will
   * not be connected to an external process. Instead, input send
   * on the channel will be echoed directly by the terminal. This
   * is useful to display ANSI terminal sequences returned as part
   * of a rpc message, or similar.
   *
   * Note: to directly initiate the terminal using the right size,
   * display the buffer in a configured window before calling this.
   * For instance, for a floating display, first create an empty
   * buffer using |nvim_create_buf()|, then display it using
   * |nvim_open_win()|, and then call this function. Then
   * |nvim_chan_send()| cal be called immediately to process
   * sequences in a virtual terminal having the intended size.
   *
   * @param buffer - the buffer to use (expected to be empty)
   * @param opts - Optional parameters. Reserved for future use.
   *
   * @returns  Channel id, or 0 on error
   */
  nvim_open_term: (buffer?: any, opts?: any) => any;
  /**
   * Open a new window.
   *
   * Currently this is used to open floating and external windows.
   * Floats are windows that are drawn above the split layout, at
   * some anchor position in some other window. Floats can be drawn
   * internally or by external GUI with the |ui-multigrid|
   * extension. External windows are only supported with multigrid
   * GUIs, and are displayed as separate top-level windows.
   *
   * For a general overview of floats, see |api-floatwin|.
   *
   * Exactly one of `external` and `relative` must be specified.
   * The `width` and `height` of the new window must be specified.
   *
   * With relative=editor (row=0,col=0) refers to the top-left
   * corner of the screen-grid and (row=Lines-1,col=Columns-1)
   * refers to the bottom-right corner. Fractional values are
   * allowed, but the builtin implementation (used by non-multigrid
   * UIs) will always round down to nearest integer.
   *
   * Out-of-bounds values, and configurations that make the float
   * not fit inside the main editor, are allowed. The builtin
   * implementation truncates values so floats are fully within the
   * main screen grid. External GUIs could let floats hover outside
   * of the main window like a tooltip, but this should not be used
   * to specify arbitrary WM screen positions.
   *
   * Example (Lua): window-relative float >
   *     vim.api.nvim_open_win(0, false,
   *       {relative='win', row=3, col=3, width=12, height=3})
   *
   *
   * Example (Lua): buffer-relative float (travels as buffer is
   * scrolled) >
   *     vim.api.nvim_open_win(0, false,
   *       {relative='win', width=12, height=3, bufpos={100,10}})
   *
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param buffer - Buffer to display, or 0 for current buffer
   * @param enter - Enter the window (make it the current window)
   * @param config - Map defining the window configuration. Keys:
   *   • `relative`: Sets the window layout to "floating", placed
   *   at (row,col) coordinates relative to:
   *   • "editor" The global editor grid
   *   • "win" Window given by the `win` field, or
   *   current window.
   *   • "cursor" Cursor position in current window.
   *
   *               • `win` : |window-ID| for relative="win".
   *               • `anchor`: Decides which corner of the float to place
   *                 at (row,col):
   *                 • "NW" northwest (default)
   *                 • "NE" northeast
   *                 • "SW" southwest
   *                 • "SE" southeast
   *
   *               • `width` : Window width (in character cells).
   *                 Minimum of 1.
   *               • `height` : Window height (in character cells).
   *                 Minimum of 1.
   *               • `bufpos` : Places float relative to buffer
   *                 text (only when relative="win"). Takes a tuple
   *                 of zero-indexed [line, column]. `row` and
   *                 `col` if given are applied relative to this
   *                 position, else they default to `row=1` and
   *                 `col=0` (thus like a tooltip near the buffer
   *                 text).
   *               • `row` : Row position in units of "screen cell
   *                 height", may be fractional.
   *               • `col` : Column position in units of "screen
   *                 cell width", may be fractional.
   *               • `focusable` : Enable focus by user actions
   *                 (wincmds, mouse events). Defaults to true.
   *                 Non-focusable windows can be entered by
   *                 |nvim_set_current_win()|.
   *               • `external` : GUI should display the window as
   *                 an external top-level window. Currently
   *                 accepts no other positioning configuration
   *                 together with this.
   *               • `zindex`: Stacking order. floats with higher`zindex`go on top on floats with lower indices. Must
   *                 be larger than zero. The following screen
   *                 elements have hard-coded z-indices:
   *                 • 100: insert completion popupmenu
   *                 • 200: message scrollback
   *                 • 250: cmdline completion popupmenu (when
   *                   wildoptions+=pum) The default value for
   *                   floats are 50. In general, values below 100
   *                   are recommended, unless there is a good
   *                   reason to overshadow builtin elements.
   *
   *               • `style`: Configure the appearance of the window.
   *                 Currently only takes one non-empty value:
   *                 • "minimal" Nvim will display the window with
   *                   many UI options disabled. This is useful
   *                   when displaying a temporary float where the
   *                   text should not be edited. Disables
   *                   'number', 'relativenumber', 'cursorline',
   *                   'cursorcolumn', 'foldcolumn', 'spell' and
   *                   'list' options. 'signcolumn' is changed to
   *                   `auto` and 'colorcolumn' is cleared. The
   *                   end-of-buffer region is hidden by setting
   *                   `eob` flag of 'fillchars' to a space char,
   *                   and clearing the |EndOfBuffer| region in
   *                   'winhighlight'.
   *
   *               • `border`: Style of (optional) window border. This can
   *                 either be a string or an array. The string
   *                 values are
   *                 • "none": No border (default).
   *                 • "single": A single line box.
   *                 • "double": A double line box.
   *                 • "rounded": Like "single", but with rounded
   *                   corners ("╭" etc.).
   *                 • "solid": Adds padding by a single whitespace
   *                   cell.
   *                 • "shadow": A drop shadow effect by blending
   *                   with the background.
   *                 • If it is an array, it should have a length
   *                   of eight or any divisor of eight. The array
   *                   will specifify the eight chars building up
   *                   the border in a clockwise fashion starting
   *                   with the top-left corner. As an example, the
   *                   double box style could be specified as [
   *                   "╔", "═" ,"╗", "║", "╝", "═", "╚", "║" ]. If
   *                   the number of chars are less than eight,
   *                   they will be repeated. Thus an ASCII border
   *                   could be specified as [ "/", "-", "\\", "|"
   *                   ], or all chars the same as [ "x" ]. An
   *                   empty string can be used to turn off a
   *                   specific border, for instance, [ "", "", "",
   *                   ">", "", "", "", "<" ] will only make
   *                   vertical borders but not horizontal ones. By
   *                   default, `FloatBorder` highlight is used,
   *                   which links to `VertSplit` when not defined.
   *                   It could also be specified by character: [
   *                   {"+", "MyCorner"}, {"x", "MyBorder"} ].
   *
   *               • `noautocmd` : If true then no buffer-related
   *                 autocommand events such as |BufEnter|,
   *                 |BufLeave| or |BufWinEnter| may fire from
   *                 calling this function.
   *
   * @returns  Window handle, or 0 on error
   */
  nvim_open_win: (buffer?: any, enter?: any, config?: any) => any;
  /**
   * Writes a message to the Vim output buffer. Does not append
   * "\n", the message is buffered (won't display) until a linefeed
   * is written.
   *
   * @param str - Message
   */
  nvim_out_write: (str?: any) => any;
  /**
   * Parse a VimL expression.
   *
   * Attributes: ~
   *     {fast}
   *
   * @param expr - Expression to parse. Always treated as a
   *   single line.
   * @param flags - Flags:
   *   • "m" if multiple expressions in a row are
   *   allowed (only the first one will be
   *   parsed),
   *   • "E" if EOC tokens are not allowed
   *   (determines whether they will stop parsing
   *   process or be recognized as an
   *   operator/space, though also yielding an
   *   error).
   *   • "l" when needing to start parsing with
   *   lvalues for ":let" or ":for". Common flag
   *   sets:
   *   • "m" to parse like for ":echo".
   *   • "E" to parse like for "<C-r>=".
   *   • empty string for ":call".
   *   • "lm" to parse for ":let".
   * @param highlight - If true, return value will also include
   *   "highlight" key containing array of 4-tuples
   *   (arrays) (Integer, Integer, Integer, String),
   *   where first three numbers define the
   *   highlighted region and represent line,
   *   starting column and ending column (latter
   *   exclusive: one should highlight region
   *   [start_col, end_col)).
   *
   * @returns *
   *     • AST: top-level dictionary with these keys:
   *       • "error": Dictionary with error, present only if parser
   *         saw some error. Contains the following keys:
   *         • "message": String, error message in printf format,
   *           translated. Must contain exactly one "%.*s".
   *         • "arg": String, error message argument.
   *
   *       • "len": Amount of bytes successfully parsed. With flags
   *         equal to "" that should be equal to the length of expr
   *         string. (“Successfully parsed” here means
   *         “participated in AST creation”, not “till the first
   *         error”.)
   *       • "ast": AST, either nil or a dictionary with these
   *         keys:
   *         • "type": node type, one of the value names from
   *           ExprASTNodeType stringified without "kExprNode"
   *           prefix.
   *         • "start": a pair [line, column] describing where node
   *           is "started" where "line" is always 0 (will not be 0
   *           if you will be using nvim_parse_viml() on e.g.
   *           ":let", but that is not present yet). Both elements
   *           are Integers.
   *         • "len": “length” of the node. This and "start" are
   *           there for debugging purposes primary (debugging
   *           parser and providing debug information).
   *         • "children": a list of nodes described in top/"ast".
   *           There always is zero, one or two children, key will
   *           not be present if node has no children. Maximum
   *           number of children may be found in node_maxchildren
   *           array.
   *
   *     • Local values (present only for certain nodes):
   *       • "scope": a single Integer, specifies scope for
   *         "Option" and "PlainIdentifier" nodes. For "Option" it
   *         is one of ExprOptScope values, for "PlainIdentifier"
   *         it is one of ExprVarScope values.
   *       • "ident": identifier (without scope, if any), present
   *         for "Option", "PlainIdentifier", "PlainKey" and
   *         "Environment" nodes.
   *       • "name": Integer, register name (one character) or -1.
   *         Only present for "Register" nodes.
   *       • "cmp_type": String, comparison type, one of the value
   *         names from ExprComparisonType, stringified without
   *         "kExprCmp" prefix. Only present for "Comparison"
   *         nodes.
   *       • "ccs_strategy": String, case comparison strategy, one
   *         of the value names from ExprCaseCompareStrategy,
   *         stringified without "kCCStrategy" prefix. Only present
   *         for "Comparison" nodes.
   *       • "augmentation": String, augmentation type for
   *         "Assignment" nodes. Is either an empty string, "Add",
   *         "Subtract" or "Concat" for "=", "+=", "-=" or ".="
   *         respectively.
   *       • "invert": Boolean, true if result of comparison needs
   *         to be inverted. Only present for "Comparison" nodes.
   *       • "ivalue": Integer, integer value for "Integer" nodes.
   *       • "fvalue": Float, floating-point value for "Float"
   *         nodes.
   *       • "svalue": String, value for "SingleQuotedString" and
   *         "DoubleQuotedString" nodes.
   */
  nvim_parse_expression: (expr?: any, flags?: any, highlight?: any) => any;
  /**
   * Pastes at cursor, in any mode.
   *
   * Invokes the `vim.paste` handler, which handles each mode
   * appropriately. Sets redo/undo. Faster than |nvim_input()|.
   * Lines break at LF ("\n").
   *
   * Errors ('nomodifiable', `vim.paste()` failure, …) are
   * reflected in `err` but do not affect the return value (which
   * is strictly decided by `vim.paste()` ). On error, subsequent
   * calls are ignored ("drained") until the next paste is
   * initiated (phase 1 or -1).
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param data - Multiline input. May be binary (containing NUL
   *   bytes).
   * @param crlf - Also break lines at CR and CRLF.
   * @param phase - -1: paste in a single call (i.e. without
   *   streaming). To "stream" a paste, call `nvim_paste` sequentially with these `phase` values:
   *   • 1: starts the paste (exactly once)
   *   • 2: continues the paste (zero or more times)
   *   • 3: ends the paste (exactly once)
   *
   * @returns *
   *     • true: Client may continue pasting.
   *     • false: Client must cancel the paste.
   */
  nvim_paste: (data?: any, crlf?: any, phase?: any) => any;
  /**
   * Puts text at cursor, in any mode.
   *
   * Compare |:put| and |p| which are always linewise.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param lines - |readfile()|-style list of lines.
   *   |channel-lines|
   * @param type - Edit behavior: any |getregtype()| result, or:
   *   • "b" |blockwise-visual| mode (may include
   *   width, e.g. "b3")
   *   • "c" |charwise| mode
   *   • "l" |linewise| mode
   *   • "" guess by contents, see |setreg()|
   * @param after - If true insert after cursor (like |p|), or
   *   before (like |P|).
   * @param follow - If true place cursor at end of inserted text.
   */
  nvim_put: (lines?: any, type?: any, after?: any, follow?: any) => any;
  /**
   * Replaces terminal codes and |keycodes| (<CR>, <Esc>, ...) in a
   * string with the internal representation.
   *
   * @param str - String to be converted.
   * @param from_part - Legacy Vim parameter. Usually true.
   * @param do_lt - Also translate <lt>. Ignored if `special` is
   *   false.
   * @param special - Replace |keycodes|, e.g. <CR> becomes a "\n"
   *   char.
   *
   * See also: ~
   *     replace_termcodes
   *     cpoptions
   */
  nvim_replace_termcodes: (
    str?: any,
    from_part?: any,
    do_lt?: any,
    special?: any
  ) => any;
  /**
   * Selects an item in the completion popupmenu.
   *
   * If |ins-completion| is not active this API call is silently
   * ignored. Useful for an external UI using |ui-popupmenu| to
   * control the popupmenu with the mouse. Can also be used in a
   * mapping; use <cmd> |:map-cmd| to ensure the mapping doesn't
   * end completion mode.
   *
   * @param item - Index (zero-based) of the item to select. Value
   *   of -1 selects nothing and restores the original
   *   text.
   * @param insert - Whether the selection should be inserted in the
   *   buffer.
   * @param finish - Finish the completion and dismiss the popupmenu.
   *   Implies `insert` .
   * @param opts - Optional parameters. Reserved for future use.
   */
  nvim_select_popupmenu_item: (
    item?: any,
    insert?: any,
    finish?: any,
    opts?: any
  ) => any;
  /**
   * Self-identifies the client.
   *
   * The client/plugin/application should call this after
   * connecting, to provide hints about its identity and purpose,
   * for debugging and orchestration.
   *
   * Can be called more than once; the caller should merge old info
   * if appropriate. Example: library first identifies the channel,
   * then a plugin using that library later identifies itself.
   *
   * Note:
   *     "Something is better than nothing". You don't need to
   *     include all the fields.
   *
   * @param name - Short name for the connected client
   * @param version - Dictionary describing the version, with
   *   these (optional) keys:
   *   • "major" major version (defaults to 0 if
   *   not set, for no release yet)
   *   • "minor" minor version
   *   • "patch" patch number
   *   • "prerelease" string describing a
   *   prerelease, like "dev" or "beta1"
   *   • "commit" hash or similar identifier of
   *   commit
   * @param type - Must be one of the following values. Client
   *   libraries should default to "remote" unless
   *   overridden by the user.
   *   • "remote" remote client connected to Nvim.
   *   • "ui" gui frontend
   *   • "embedder" application using Nvim as a
   *   component (for example, IDE/editor
   *   implementing a vim mode).
   *   • "host" plugin host, typically started by
   *   nvim
   *   • "plugin" single plugin, started by nvim
   * @param methods - Builtin methods in the client. For a host,
   *   this does not include plugin methods which
   *   will be discovered later. The key should be
   *   the method name, the values are dicts with
   *   these (optional) keys (more keys may be
   *   added in future versions of Nvim, thus
   *   unknown keys are ignored. Clients must only
   *   use keys defined in this or later versions
   *   of Nvim):
   *   • "async" if true, send as a notification.
   *   If false or unspecified, use a blocking
   *   request
   *   • "nargs" Number of arguments. Could be a
   *   single integer or an array of two
   *   integers, minimum and maximum inclusive.
   * @param attributes - Arbitrary string:string map of informal
   *   client properties. Suggested keys:
   *   • "website": Client homepage URL (e.g.
   *   GitHub repository)
   *   • "license": License description ("Apache
   *   2", "GPLv3", "MIT", …)
   *   • "logo": URI or path to image, preferably
   *   small logo or icon. .png or .svg format is
   *   preferred.
   */
  nvim_set_client_info: (
    name?: any,
    version?: any,
    type?: any,
    methods?: any,
    attributes?: any
  ) => any;
  /**
   * Sets the current buffer.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param buffer - Buffer handle
   */
  nvim_set_current_buf: (buffer?: any) => any;
  /**
   * Changes the global working directory.
   *
   * @param dir - Directory path
   */
  nvim_set_current_dir: (dir?: any) => any;
  /**
   * Sets the current line.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param line - Line contents
   */
  nvim_set_current_line: (line?: any) => any;
  /**
   * Sets the current tabpage.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param tabpage - Tabpage handle
   */
  nvim_set_current_tabpage: (tabpage?: any) => any;
  /**
   * Sets the current window.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param window - Window handle
   */
  nvim_set_current_win: (window?: any) => any;
  /**
   * Set or change decoration provider for a namespace
   *
   * This is a very general purpose interface for having lua
   * callbacks being triggered during the redraw code.
   *
   * The expected usage is to set extmarks for the currently
   * redrawn buffer. |nvim_buf_set_extmark| can be called to add
   * marks on a per-window or per-lines basis. Use the `ephemeral`
   * key to only use the mark for the current screen redraw (the
   * callback will be called again for the next redraw ).
   *
   * Note: this function should not be called often. Rather, the
   * callbacks themselves can be used to throttle unneeded
   * callbacks. the `on_start` callback can return `false` to
   * disable the provider until the next redraw. Similarly, return
   * `false` in `on_win` will skip the `on_lines` calls for that
   * window (but any extmarks set in `on_win` will still be used).
   * A plugin managing multiple sources of decoration should
   * ideally only set one provider, and merge the sources
   * internally. You can use multiple `ns_id` for the extmarks
   * set/modified inside the callback anyway.
   *
   * Note: doing anything other than setting extmarks is considered
   * experimental. Doing things like changing options are not
   * expliticly forbidden, but is likely to have unexpected
   * consequences (such as 100% CPU consumption). doing
   * `vim.rpcnotify` should be OK, but `vim.rpcrequest` is quite
   * dubious for the moment.
   *
   * @param ns_id - Namespace id from |nvim_create_namespace()|
   * @param opts - Callbacks invoked during redraw:
   *   • on_start: called first on each screen redraw
   *   ["start", tick]
   *   • on_buf: called for each buffer being redrawn
   *   (before window callbacks) ["buf", bufnr, tick]
   *   • on_win: called when starting to redraw a
   *   specific window. ["win", winid, bufnr, topline,
   *   botline_guess]
   *   • on_line: called for each buffer line being
   *   redrawn. (The interation with fold lines is
   *   subject to change) ["win", winid, bufnr, row]
   *   • on_end: called at the end of a redraw cycle
   *   ["end", tick]
   */
  nvim_set_decoration_provider: (ns_id?: any, opts?: any) => any;
  /**
   * Set a highlight group.
   *
   * TODO: ns_id = 0, should modify :highlight namespace TODO val
   * should take update vs reset flag
   *
   * @param ns_id - number of namespace for this highlight
   * @param name - highlight group name, like ErrorMsg
   * @param val - highlight definition map, like
   *   |nvim_get_hl_by_name|. in addition the following
   *   keys are also recognized: `default` : don't
   *   override existing definition, like `hi default`
   *   `ctermfg` : sets foreground of cterm color
   *   `ctermbg` : sets background of cterm color
   *   `cterm` : cterm attribute map. sets attributed
   *   for cterm colors. similer to `hi cterm` Note: by
   *   default cterm attributes are same as attributes
   *   of gui color
   */
  nvim_set_hl: (ns_id?: any, name?: any, val?: any) => any;
  /**
   * Sets a global |mapping| for the given mode.
   *
   * To set a buffer-local mapping, use |nvim_buf_set_keymap()|.
   *
   * Unlike |:map|, leading/trailing whitespace is accepted as part
   * of the {lhs} or {rhs}. Empty {rhs} is |<Nop>|. |keycodes| are
   * replaced as usual.
   *
   * Example: >
   *     call nvim_set_keymap('n', ' <NL>', '', {'nowait': v:true})
   *
   *
   * is equivalent to: >
   *     nmap <nowait> <Space><NL> <Nop>
   *
   *
   * @param mode - Mode short-name (map command prefix: "n", "i",
   *   "v", "x", …) or "!" for |:map!|, or empty string
   *   for |:map|.
   * @param lhs - Left-hand-side |{lhs}| of the mapping.
   * @param rhs - Right-hand-side |{rhs}| of the mapping.
   * @param opts - Optional parameters map. Accepts all
   *   |:map-arguments| as keys excluding |<buffer>| but
   *   including |noremap|. Values are Booleans. Unknown
   *   key is an error.
   */
  nvim_set_keymap: (mode?: any, lhs?: any, rhs?: any, opts?: any) => any;
  /**
   * Sets an option value.
   *
   * @param name - Option name
   * @param value - New option value
   */
  nvim_set_option: (name?: any, value?: any) => any;
  /**
   * Sets a global (g:) variable.
   *
   * @param name - Variable name
   * @param value - Variable value
   */
  nvim_set_var: (name?: any, value?: any) => any;
  /**
   * Sets a v: variable, if it is not readonly.
   *
   * @param name - Variable name
   * @param value - Variable value
   */
  nvim_set_vvar: (name?: any, value?: any) => any;
  /**
   * Calculates the number of display cells occupied by `text` .
   * <Tab> counts as one cell.
   *
   * @param text - Some text
   *
   * @returns  Number of cells
   */
  nvim_strwidth: (text?: any) => any;
  /**
   * Subscribes to event broadcasts.
   *
   * @param event - Event type string
   */
  nvim_subscribe: (event?: any) => any;
  /**
   * Unsubscribes to event broadcasts.
   *
   * @param event - Event type string
   */
  nvim_unsubscribe: (event?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__buf_redraw_range: (buffer?: any, first?: any, last?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim__buf_stats: (buffer?: any) => any;
  /**
   * {col_end})
   * highlight to buffer.
   *
   * for plugins that dynamically generate highlights to a
   * (like a semantic highlighter or linter). The function
   * single highlight to a buffer. Unlike |matchaddpos()|
   * hts follow changes to line numbering (as lines are
   * d/removed above the highlighted line), like signs and
   * o.
   *
   * ces are used for batch deletion/updating of a set of
   * hts. To create a namespace, use
   * reate_namespace()| which returns a namespace id. Pass
   * o this function as `ns_id` to add highlights to the
   * ce. All highlights in the same namespace can then be
   *  with single call to |nvim_buf_clear_namespace()|. If
   * hlight never will be deleted by an API call, pass
   * = -1` .
   *
   * orthand, `ns_id = 0` can be used to create a new
   * ce for the highlight, the allocated id is then
   * d. If `hl_group` is the empty string no highlight is
   * but a new `ns_id` is still returned. This is supported
   * kwards compatibility, new code should use
   * reate_namespace()| to create a new empty namespace.
   *
   * ers: ~
   * ffer}     Buffer handle, or 0 for current buffer
   * _id}      namespace to use or -1 for ungrouped
   *           highlight
   * _group}   Name of the highlight group to use
   * ne}       Line to highlight (zero-indexed)
   * l_start}  Start of (byte-indexed) column range to
   *           highlight
   * l_end}    End of (byte-indexed) column range to
   *           highlight, or -1 to highlight to end of line
   *
   *  ~
   *  ns_id that was used
   */
  nvim_buf_add_highlight: () => any;
  /**
   * Activates buffer-update events on a channel, or as Lua
   * callbacks.
   *
   * Example (Lua): capture buffer updates in a global `events` variable (use "print(vim.inspect(events))" to see its
   * contents): >
   *   events = {}
   *   vim.api.nvim_buf_attach(0, false, {
   *     on_lines=function(...) table.insert(events, {...}) end})
   *
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param send_buffer - True if the initial notification should
   *   contain the whole buffer: first
   *   notification will be `nvim_buf_lines_event`
   *   . Else the first notification will be
   *   `nvim_buf_changedtick_event` . Not for Lua
   *   callbacks.
   * @param opts - Optional parameters.
   *   • on_lines: Lua callback invoked on change.
   *   Return`true`to detach. Args:
   *   • the string "lines"
   *   • buffer handle
   *   • b:changedtick
   *   • first line that changed (zero-indexed)
   *   • last line that was changed
   *   • last line in the updated range
   *   • byte count of previous contents
   *   • deleted_codepoints (if `utf_sizes` is
   *   true)
   *   • deleted_codeunits (if `utf_sizes` is
   *   true)
   *
   *                    • on_bytes: lua callback invoked on change.
   *                      This callback receives more granular
   *                      information about the change compared to
   *                      on_lines. Return`true`to detach. Args:
   *                      • the string "bytes"
   *                      • buffer handle
   *                      • b:changedtick
   *                      • start row of the changed text
   *                        (zero-indexed)
   *                      • start column of the changed text
   *                      • byte offset of the changed text (from
   *                        the start of the buffer)
   *                      • old end row of the changed text
   *                      • old end column of the changed text
   *                      • old end byte length of the changed text
   *                      • new end row of the changed text
   *                      • new end column of the changed text
   *                      • new end byte length of the changed text
   *
   *                    • on_changedtick: Lua callback invoked on
   *                      changedtick increment without text
   *                      change. Args:
   *                      • the string "changedtick"
   *                      • buffer handle
   *                      • b:changedtick
   *
   *                    • on_detach: Lua callback invoked on
   *                      detach. Args:
   *                      • the string "detach"
   *                      • buffer handle
   *
   *                    • on_reload: Lua callback invoked on
   *                      reload. The entire buffer content should
   *                      be considered changed. Args:
   *                      • the string "detach"
   *                      • buffer handle
   *
   *                    • utf_sizes: include UTF-32 and UTF-16 size
   *                      of the replaced region, as args to
   *                      `on_lines` .
   *                    • preview: also attach to command preview
   *                      (i.e. 'inccommand') events.
   *
   * @returns  False if attach failed (invalid parameter, or buffer isn't
   *  loaded); otherwise True. TODO: LUA_API_NO_EVAL
   *
   * See also: ~
   *     |nvim_buf_detach()|
   *     |api-buffer-updates-lua|
   */
  nvim_buf_attach: (buffer?: any, send_buffer?: any, opts?: any) => any;
  /**
   * call a function with buffer as temporary current buffer
   *
   * This temporarily switches current buffer to "buffer". If the
   * current window already shows "buffer", the window is not
   * switched If a window inside the current tabpage (including a
   * float) already shows the buffer One of these windows will be
   * set as current window temporarily. Otherwise a temporary
   * scratch window (calleed the "autocmd window" for historical
   * reasons) will be used.
   *
   * This is useful e.g. to call vimL functions that only work with
   * the current buffer/window currently, like |termopen()|.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param fun - Function to call inside the buffer (currently
   *   lua callable only)
   *
   * @returns  Return value of function. NB: will deepcopy lua values
   *  currently, use upvalues to send lua references in and out.
   */
  nvim_buf_call: (buffer?: any, fun?: any) => any;
  /**
   * Clears namespaced objects (highlights, extmarks, virtual text)
   * from a region.
   *
   * Lines are 0-indexed. |api-indexing| To clear the namespace in
   * the entire buffer, specify line_start=0 and line_end=-1.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param ns_id - Namespace to clear, or -1 to clear all
   *   namespaces.
   * @param line_start - Start of range of lines to clear
   * @param line_end - End of range of lines to clear (exclusive)
   *   or -1 to clear to end of buffer.
   */
  nvim_buf_clear_namespace: (
    buffer?: any,
    ns_id?: any,
    line_start?: any,
    line_end?: any
  ) => any;
  /**
   * Removes an extmark.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param ns_id - Namespace id from |nvim_create_namespace()|
   * @param id - Extmark id
   *
   * @returns  true if the extmark was found, else false
   */
  nvim_buf_del_extmark: (buffer?: any, ns_id?: any, id?: any) => any;
  /**
   * Unmaps a buffer-local |mapping| for the given mode.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * See also: ~
   *     |nvim_del_keymap()|
   */
  nvim_buf_del_keymap: (buffer?: any, mode?: any, lhs?: any) => any;
  /**
   * Removes a buffer-scoped (b:) variable
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Variable name
   */
  nvim_buf_del_var: (buffer?: any, name?: any) => any;
  /**
   * Deletes the buffer. See |:bwipeout|
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param opts - Optional parameters. Keys:
   *   • force: Force deletion and ignore unsaved
   *   changes.
   *   • unload: Unloaded only, do not delete. See
   *   |:bunload|
   */
  nvim_buf_delete: (buffer?: any, opts?: any) => any;
  /**
   * Deactivates buffer-update events on the channel.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  False if detach failed (because the buffer isn't loaded);
   *  otherwise True.
   *
   * See also: ~
   *     |nvim_buf_attach()|
   *     |api-lua-detach| for detaching Lua callbacks
   */
  nvim_buf_detach: (buffer?: any) => any;
  /**
   * Gets a changed tick of a buffer
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  `b:changedtick` value.
   */
  nvim_buf_get_changedtick: (buffer?: any) => any;
  /**
   * Gets a map of buffer-local |user-commands|.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param opts - Optional parameters. Currently not used.
   *
   * @returns  Map of maps describing commands.
   */
  nvim_buf_get_commands: (buffer?: any, opts?: any) => any;
  /**
   * Gets the position (0-indexed) of an extmark {id}.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param ns_id - Namespace id from |nvim_create_namespace()|
   * @param id - Extmark id
   * @param opts - Optional parameters. Keys:
   *   • details: Whether to include the details dict
   *
   * @returns  0-indexed (row, col) tuple or empty list () if extmark id
   *  was absent
   */
  nvim_buf_get_extmark_by_id: (
    buffer?: any,
    ns_id?: any,
    id?: any,
    opts?: any
  ) => any;
  /**
   * Gets extmarks in "traversal order" from a |charwise| region
   * defined by buffer positions (inclusive, 0-indexed
   * |api-indexing|).
   *
   * Region can be given as (row,col) tuples, or valid extmark ids
   * (whose positions define the bounds). 0 and -1 are understood
   * as (0,0) and (-1,-1) respectively, thus the following are
   * equivalent:
   *
   * _extmarks(0, my_ns, 0, -1, {})
   * _extmarks(0, my_ns, [0,0], [-1,-1], {})
   *
   *
   * If `end` is less than `start` , traversal works backwards.
   * (Useful with `limit` , to get the first marks prior to a given
   * position.)
   *
   * Example:
   *
   * vim.api
   * a.nvim_win_get_cursor(0)
   * a.nvim_create_namespace('my-plugin')
   * w extmark at line 1, column 1.
   * a.nvim_buf_set_extmark(0, ns, 0, 0, 0, {})
   * w extmark at line 3, column 1.
   * a.nvim_buf_set_extmark(0, ns, 0, 2, 0, {})
   * rks only from line 3.
   * a.nvim_buf_get_extmarks(0, ns, {2,0}, {2,0}, {})
   * arks in this buffer + namespace.
   * a.nvim_buf_get_extmarks(0, ns, 0, -1, {})
   * spect(ms))
   *
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param ns_id - Namespace id from |nvim_create_namespace()|
   * @param start - Start of range, given as 0-indexed (row, col) or
   *   valid extmark id (whose position defines the
   *   bound)
   * @param end - End of range (inclusive), given as 0-indexed
   *   (row, col) or valid extmark id (whose position
   *   defines the bound)
   * @param opts - Optional parameters. Keys:
   *   • limit: Maximum number of marks to return
   *   • details Whether to include the details dict
   *
   * @returns  List of [extmark_id, row, col] tuples in "traversal
   *  order".
   */
  nvim_buf_get_extmarks: (
    buffer?: any,
    ns_id?: any,
    start?: any,
    end?: any,
    opts?: any
  ) => any;
  /**
   * Gets a list of buffer-local |mapping| definitions.
   *
   * @param mode - Mode short-name ("n", "i", "v", ...)
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  Array of maparg()-like dictionaries describing mappings.
   *  The "buffer" key holds the associated buffer handle.
   */
  nvim_buf_get_keymap: (buffer?: any, mode?: any) => any;
  /**
   * Gets a line-range from the buffer.
   *
   * Indexing is zero-based, end-exclusive. Negative indices are
   * interpreted as length+1+index: -1 refers to the index past the
   * end. So to get the last element use start=-2 and end=-1.
   *
   * Out-of-bounds indices are clamped to the nearest valid value,
   * unless `strict_indexing` is set.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param start - First line index
   * @param end - Last line index (exclusive)
   * @param strict_indexing - Whether out-of-bounds should be an
   *   error.
   *
   * @returns  Array of lines, or empty array for unloaded buffer.
   */
  nvim_buf_get_lines: (
    buffer?: any,
    start?: any,
    end?: any,
    strict_indexing?: any
  ) => any;
  /**
   * Return a tuple (row,col) representing the position of the
   * named mark.
   *
   * Marks are (1,0)-indexed. |api-indexing|
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Mark name
   *
   * @returns  (row, col) tuple
   */
  nvim_buf_get_mark: (buffer?: any, name?: any) => any;
  /**
   * Gets the full file name for the buffer
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  Buffer name
   */
  nvim_buf_get_name: (buffer?: any) => any;
  /**
   * Returns the byte offset of a line (0-indexed). |api-indexing|
   *
   * Line 1 (index=0) has offset 0. UTF-8 bytes are counted. EOL is
   * one byte. 'fileformat' and 'fileencoding' are ignored. The
   * line index just after the last line gives the total byte-count
   * of the buffer. A final EOL byte is counted if it would be
   * written, see 'eol'.
   *
   * Unlike |line2byte()|, throws error for out-of-bounds indexing.
   * Returns -1 for unloaded buffer.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param index - Line index
   *
   * @returns  Integer byte offset, or -1 for unloaded buffer.
   */
  nvim_buf_get_offset: (buffer?: any, index?: any) => any;
  /**
   * Gets a buffer option value
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Option name
   *
   * @returns  Option value
   */
  nvim_buf_get_option: (buffer?: any, name?: any) => any;
  /**
   * Gets a buffer-scoped (b:) variable.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Variable name
   *
   * @returns  Variable value
   */
  nvim_buf_get_var: (buffer?: any, name?: any) => any;
  /**
   * Checks if a buffer is valid and loaded. See |api-buffer| for
   * more info about unloaded buffers.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  true if the buffer is valid and loaded, false otherwise.
   */
  nvim_buf_is_loaded: (buffer?: any) => any;
  /**
   * Checks if a buffer is valid.
   *
   * Note:
   *     Even if a buffer is valid it may have been unloaded. See
   *     |api-buffer| for more info about unloaded buffers.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  true if the buffer is valid, false otherwise.
   */
  nvim_buf_is_valid: (buffer?: any) => any;
  /**
   * Gets the buffer line count
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * @returns  Line count, or 0 for unloaded buffer. |api-buffer|
   */
  nvim_buf_line_count: (buffer?: any) => any;
  /**
   * Creates or updates an extmark.
   *
   * To create a new extmark, pass id=0. The extmark id will be
   * returned. To move an existing mark, pass its id.
   *
   * It is also allowed to create a new mark by passing in a
   * previously unused id, but the caller must then keep track of
   * existing and unused ids itself. (Useful over RPC, to avoid
   * waiting for the return value.)
   *
   * Using the optional arguments, it is possible to use this to
   * highlight a range of text, and also to associate virtual text
   * to the mark.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param ns_id - Namespace id from |nvim_create_namespace()|
   * @param line - Line where to place the mark, 0-based
   * @param col - Column where to place the mark, 0-based
   * @param opts - Optional parameters.
   *   • id : id of the extmark to edit.
   *   • end_line : ending line of the mark, 0-based
   *   inclusive.
   *   • end_col : ending col of the mark, 0-based
   *   exclusive.
   *   • hl_group : name of the highlight group used to
   *   highlight this mark.
   *   • virt_text : virtual text to link to this mark.
   *   A list of [text, highlight] tuples, each
   *   representing a text chunk with specified
   *   highlight. `highlight` element can either be a
   *   a single highlight group, or an array of
   *   multiple highlight groups that will be stacked
   *   (highest priority last). A highlight group can
   *   be supplied either as a string or as an
   *   integer, the latter which can be obtained
   *   using |nvim_get_hl_id_by_name|.
   *   • virt_text_pos : position of virtual text.
   *   Possible values:
   *   • "eol": right after eol character (default)
   *   • "overlay": display over the specified
   *   column, without shifting the underlying
   *   text.
   *   • "right_align": display right aligned in the
   *   window.
   *
   *               • virt_text_win_col : position the virtual text
   *                 at a fixed window column (starting from the
   *                 first text column)
   *               • virt_text_hide : hide the virtual text when
   *                 the background text is selected or hidden due
   *                 to horizontal scroll 'nowrap'
   *               • hl_mode : control how highlights are combined
   *                 with the highlights of the text. Currently
   *                 only affects virt_text highlights, but might
   *                 affect`hl_group`in later versions.
   *                 • "replace": only show the virt_text color.
   *                   This is the default
   *                 • "combine": combine with background text
   *                   color
   *                 • "blend": blend with background text color.
   *
   *               • hl_eol : when true, for a multiline highlight
   *                 covering the EOL of a line, continue the
   *                 highlight for the rest of the screen line
   *                 (just like for diff and cursorline highlight).
   *               • ephemeral : for use with
   *                 |nvim_set_decoration_provider| callbacks. The
   *                 mark will only be used for the current redraw
   *                 cycle, and not be permantently stored in the
   *                 buffer.
   *               • right_gravity : boolean that indicates the
   *                 direction the extmark will be shifted in when
   *                 new text is inserted (true for right, false
   *                 for left). defaults to true.
   *               • end_right_gravity : boolean that indicates the
   *                 direction the extmark end position (if it
   *                 exists) will be shifted in when new text is
   *                 inserted (true for right, false for left).
   *                 Defaults to false.
   *               • priority: a priority value for the highlight
   *                 group. For example treesitter highlighting
   *                 uses a value of 100.
   *
   * @returns  Id of the created/updated extmark
   */
  nvim_buf_set_extmark: (
    buffer?: any,
    ns_id?: any,
    line?: any,
    col?: any,
    opts?: any
  ) => any;
  /**
   * Sets a buffer-local |mapping| for the given mode.
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   *
   * See also: ~
   *     |nvim_set_keymap()|
   */
  nvim_buf_set_keymap: (
    buffer?: any,
    mode?: any,
    lhs?: any,
    rhs?: any,
    opts?: any
  ) => any;
  /**
   * Sets (replaces) a line-range in the buffer.
   *
   * Indexing is zero-based, end-exclusive. Negative indices are
   * interpreted as length+1+index: -1 refers to the index past the
   * end. So to change or delete the last element use start=-2 and
   * end=-1.
   *
   * To insert lines at a given index, set `start` and `end` to the
   * same index. To delete a range of lines, set `replacement` to
   * an empty array.
   *
   * Out-of-bounds indices are clamped to the nearest valid value,
   * unless `strict_indexing` is set.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param start - First line index
   * @param end - Last line index (exclusive)
   * @param strict_indexing - Whether out-of-bounds should be an
   *   error.
   * @param replacement - Array of lines to use as replacement
   */
  nvim_buf_set_lines: (
    buffer?: any,
    start?: any,
    end?: any,
    strict_indexing?: any,
    replacement?: any
  ) => any;
  /**
   * Sets the full file name for a buffer
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Buffer name
   */
  nvim_buf_set_name: (buffer?: any, name?: any) => any;
  /**
   * Sets a buffer option value. Passing 'nil' as value deletes the
   * option (only works if there's a global fallback)
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Option name
   * @param value - Option value
   */
  nvim_buf_set_option: (buffer?: any, name?: any, value?: any) => any;
  /**
   * {replacement})
   * ts (replaces) a range in the buffer
   *
   * is is recommended over nvim_buf_set_lines when only
   * difying parts of a line, as extmarks will be preserved on
   * n-modified parts of the touched lines.
   *
   * dexing is zero-based and end-exclusive.
   *
   *  insert text at a given index, set `start` and `end` ranges
   *  the same index. To delete a range, set `replacement` to an
   * ray containing an empty string, or simply an empty array.
   *
   * efer nvim_buf_set_lines when adding or deleting entire lines
   * ly.
   *
   * rameters: ~
   *   {buffer}        Buffer handle, or 0 for current buffer
   *   {start_row}     First line index
   *   {start_column}  Last column
   *   {end_row}       Last line index
   *   {end_column}    Last column
   *   {replacement}   Array of lines to use as replacement
   */
  nvim_buf_set_text: () => any;
  /**
   * Sets a buffer-scoped (b:) variable
   *
   * @param buffer - Buffer handle, or 0 for current buffer
   * @param name - Variable name
   * @param value - Variable value
   */
  nvim_buf_set_var: (buffer?: any, name?: any, value?: any) => any;
  /**
   * Removes a tab-scoped (t:) variable
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   * @param name - Variable name
   */
  nvim_tabpage_del_var: (tabpage?: any, name?: any) => any;
  /**
   * Gets the tabpage number
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   *
   * @returns  Tabpage number
   */
  nvim_tabpage_get_number: (tabpage?: any) => any;
  /**
   * Gets a tab-scoped (t:) variable
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   * @param name - Variable name
   *
   * @returns  Variable value
   */
  nvim_tabpage_get_var: (tabpage?: any, name?: any) => any;
  /**
   * Gets the current window in a tabpage
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   *
   * @returns  Window handle
   */
  nvim_tabpage_get_win: (tabpage?: any) => any;
  /**
   * Checks if a tabpage is valid
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   *
   * @returns  true if the tabpage is valid, false otherwise
   */
  nvim_tabpage_is_valid: (tabpage?: any) => any;
  /**
   * Gets the windows in a tabpage
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   *
   * @returns  List of windows in `tabpage`
   */
  nvim_tabpage_list_wins: (tabpage?: any) => any;
  /**
   * Sets a tab-scoped (t:) variable
   *
   * @param tabpage - Tabpage handle, or 0 for current tabpage
   * @param name - Variable name
   * @param value - Variable value
   */
  nvim_tabpage_set_var: (tabpage?: any, name?: any, value?: any) => any;
  /**
   * Activates UI events on the channel.
   *
   * Entry point of all UI clients. Allows |--embed| to continue
   * startup. Implies that the client is ready to show the UI. Adds
   * the client to the list of UIs. |nvim_list_uis()|
   *
   * Note:
   *     If multiple UI clients are attached, the global screen
   *     dimensions degrade to the smallest client. E.g. if client
   *     A requests 80x40 but client B requests 200x100, the global
   *     screen has size 80x40.
   *
   * @param width - Requested screen columns
   * @param height - Requested screen rows
   * @param options - |ui-option| map
   */
  nvim_ui_attach: (width?: any, height?: any, options?: any) => any;
  /**
   * Deactivates UI events on the channel.
   *
   * Removes the client from the list of UIs. |nvim_list_uis()|
   */
  nvim_ui_detach: () => any;
  /**
   * Tells Nvim the geometry of the popumenu, to align floating
   * windows with an external popup menu.
   *
   * Note that this method is not to be confused with
   * |nvim_ui_pum_set_height()|, which sets the number of visible
   * items in the popup menu, while this function sets the bounding
   * box of the popup menu, including visual elements such as
   * borders and sliders. Floats need not use the same font size,
   * nor be anchored to exact grid corners, so one can set
   * floating-point numbers to the popup menu geometry.
   *
   * @param width - Popupmenu width.
   * @param height - Popupmenu height.
   * @param row - Popupmenu row.
   * @param col - Popupmenu height.
   */
  nvim_ui_pum_set_bounds: (
    width?: any,
    height?: any,
    row?: any,
    col?: any
  ) => any;
  /**
   * Tells Nvim the number of elements displaying in the popumenu,
   * to decide <PageUp> and <PageDown> movement.
   *
   * @param height - Popupmenu height, must be greater than zero.
   */
  nvim_ui_pum_set_height: (height?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim_ui_set_option: (name?: any, value?: any) => any;
  /**
   * TODO: Documentation
   */
  nvim_ui_try_resize: (width?: any, height?: any) => any;
  /**
   * Tell Nvim to resize a grid. Triggers a grid_resize event with
   * the requested grid size or the maximum size if it exceeds size
   * limits.
   *
   * On invalid grid handle, fails with error.
   *
   * @param grid - The handle of the grid to be changed.
   * @param width - The new requested width.
   * @param height - The new requested height.
   *
   * ft=help:norl:
   */
  nvim_ui_try_resize_grid: (grid?: any, width?: any, height?: any) => any;
  /**
   * Calls a function with window as temporary current window.
   *
   * @param window - Window handle, or 0 for current window
   * @param fun - Function to call inside the window (currently
   *   lua callable only)
   *
   * @returns  Return value of function. NB: will deepcopy lua values
   *  currently, use upvalues to send lua references in and out.
   *
   * See also: ~
   *     |win_execute()|
   *     |nvim_buf_call()|
   */
  nvim_win_call: (window?: any, fun?: any) => any;
  /**
   * Closes the window (like |:close| with a |window-ID|).
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param window - Window handle, or 0 for current window
   * @param force - Behave like `:close!` The last window of a
   *   buffer with unwritten changes can be closed. The
   *   buffer will become hidden, even if 'hidden' is
   *   not set.
   */
  nvim_win_close: (window?: any, force?: any) => any;
  /**
   * Removes a window-scoped (w:) variable
   *
   * @param window - Window handle, or 0 for current window
   * @param name - Variable name
   */
  nvim_win_del_var: (window?: any, name?: any) => any;
  /**
   * Gets the current buffer in a window
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Buffer handle
   */
  nvim_win_get_buf: (window?: any) => any;
  /**
   * Gets window configuration.
   *
   * The returned value may be given to |nvim_open_win()|.
   *
   * `relative` is empty for normal windows.
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Map defining the window configuration, see
   *  |nvim_open_win()|
   */
  nvim_win_get_config: (window?: any) => any;
  /**
   * Gets the (1,0)-indexed cursor position in the window.
   * |api-indexing|
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  (row, col) tuple
   */
  nvim_win_get_cursor: (window?: any) => any;
  /**
   * Gets the window height
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Height as a count of rows
   */
  nvim_win_get_height: (window?: any) => any;
  /**
   * Gets the window number
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Window number
   */
  nvim_win_get_number: (window?: any) => any;
  /**
   * Gets a window option value
   *
   * @param window - Window handle, or 0 for current window
   * @param name - Option name
   *
   * @returns  Option value
   */
  nvim_win_get_option: (window?: any, name?: any) => any;
  /**
   * Gets the window position in display cells. First position is
   * zero.
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  (row, col) tuple with the window position
   */
  nvim_win_get_position: (window?: any) => any;
  /**
   * Gets the window tabpage
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Tabpage that contains the window
   */
  nvim_win_get_tabpage: (window?: any) => any;
  /**
   * Gets a window-scoped (w:) variable
   *
   * @param window - Window handle, or 0 for current window
   * @param name - Variable name
   *
   * @returns  Variable value
   */
  nvim_win_get_var: (window?: any, name?: any) => any;
  /**
   * Gets the window width
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  Width as a count of columns
   */
  nvim_win_get_width: (window?: any) => any;
  /**
   * Closes the window and hide the buffer it contains (like
   * |:hide| with a |window-ID|).
   *
   * Like |:hide| the buffer becomes hidden unless another window
   * is editing it, or 'bufhidden' is `unload` , `delete` or `wipe`
   * as opposed to |:close| or |nvim_win_close|, which will close
   * the buffer.
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param window - Window handle, or 0 for current window
   */
  nvim_win_hide: (window?: any) => any;
  /**
   * Checks if a window is valid
   *
   * @param window - Window handle, or 0 for current window
   *
   * @returns  true if the window is valid, false otherwise
   */
  nvim_win_is_valid: (window?: any) => any;
  /**
   * Sets the current buffer in a window, without side-effects
   *
   * Attributes: ~
   *     not allowed when |textlock| is active
   *
   * @param window - Window handle, or 0 for current window
   * @param buffer - Buffer handle
   */
  nvim_win_set_buf: (window?: any, buffer?: any) => any;
  /**
   * Configures window layout. Currently only for floating and
   * external windows (including changing a split window to those
   * layouts).
   *
   * When reconfiguring a floating window, absent option keys will
   * not be changed. `row` / `col` and `relative` must be
   * reconfigured together.
   *
   * @param window - Window handle, or 0 for current window
   * @param config - Map defining the window configuration, see
   *   |nvim_open_win()|
   *
   * See also: ~
   *     |nvim_open_win()|
   */
  nvim_win_set_config: (window?: any, config?: any) => any;
  /**
   * Sets the (1,0)-indexed cursor position in the window.
   * |api-indexing|
   *
   * @param window - Window handle, or 0 for current window
   * @param pos - (row, col) tuple representing the new position
   */
  nvim_win_set_cursor: (window?: any, pos?: any) => any;
  /**
   * Sets the window height. This will only succeed if the screen
   * is split horizontally.
   *
   * @param window - Window handle, or 0 for current window
   * @param height - Height as a count of rows
   */
  nvim_win_set_height: (window?: any, height?: any) => any;
  /**
   * Sets a window option value. Passing 'nil' as value deletes the
   * option(only works if there's a global fallback)
   *
   * @param window - Window handle, or 0 for current window
   * @param name - Option name
   * @param value - Option value
   */
  nvim_win_set_option: (window?: any, name?: any, value?: any) => any;
  /**
   * Sets a window-scoped (w:) variable
   *
   * @param window - Window handle, or 0 for current window
   * @param name - Variable name
   * @param value - Variable value
   */
  nvim_win_set_var: (window?: any, name?: any, value?: any) => any;
  /**
   * Sets the window width. This will only succeed if the screen is
   * split vertically.
   *
   * @param window - Window handle, or 0 for current window
   * @param width - Width as a count of columns
   */
  nvim_win_set_width: (window?: any, width?: any) => any;
}
