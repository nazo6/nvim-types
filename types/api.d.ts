interface api {
  /** 
      TODO: Documentation}
      */
  nvim__get_hl_defs: (ns_id: any) => any;
  /** 
      TODO: Documentation}
      */
  nvim__get_lib_dir: () => any;
  /** 
      Returns object given as argument.

                This API function is used for testing. One should not rely on
                its presence in plugins.

                Parameters: ~
                    {obj}  Object to return.

                Return: ~
                    its argument.}
      */
  nvim__id: (obj: any) => any;
  /** 
      Returns array given as argument.

                This API function is used for testing. One should not rely on
                its presence in plugins.

                Parameters: ~
                    {arr}  Array to return.

                Return: ~
                    its argument.}
      */
  nvim__id_array: (arr: any) => any;
  /** 
      Returns dictionary given as argument.

                This API function is used for testing. One should not rely on
                its presence in plugins.

                Parameters: ~
                    {dct}  Dictionary to return.

                Return: ~
                    its argument.}
      */
  nvim__id_dictionary: (dct: any) => any;
  /** 
      Returns floating-point value given as argument.

                This API function is used for testing. One should not rely on
                its presence in plugins.

                Parameters: ~
                    {flt}  Value to return.

                Return: ~
                    its argument.}
      */
  nvim__id_float: (flt: any) => any;
  /** 
      TODO: Documentation}
      */
  nvim__inspect_cell: (grid: any, row: any, col: any) => any;
  /** 
      TODO: Documentation

                Attributes: ~
                    {fast}}
      */
  nvim__screenshot: (path: any) => any;
  /** 
      Gets internal stats.

                Return: ~
                    Map of various internal stats.}
      */
  nvim__stats: () => any;
  /** 
      Calls many API methods atomically.

                This has two main usages:
                1. To perform several requests from an async context
                   atomically, i.e. without interleaving redraws, RPC requests
                   from other clients, or user interactions (however API
                   methods may trigger autocommands or event processing which
                   have such side-effects, e.g. |:sleep| may wake timers).
                2. To minimize RPC overhead (roundtrips) of a sequence of many
                   requests.

                Parameters: ~
                    {calls}  an array of calls, where each call is described
                             by an array with two elements: the request name,
                             and an array of arguments.

                Return: ~
                    Array of two elements. The first is an array of return
                    values. The second is NIL if all calls succeeded. If a
                    call resulted in an error, it is a three-element array
                    with the zero-based index of the call which resulted in an
                    error, the error type and the error message. If an error
                    occurred, the values from all preceding calls will still
                    be returned.}
      */
  nvim_call_atomic: (calls: any) => any;
  /** 
      Calls a VimL |Dictionary-function| with the given arguments.

                On execution error: fails with VimL error, does not update
                v:errmsg.

                Parameters: ~
                    {dict}  Dictionary, or String evaluating to a VimL |self|
                            dict
                    {fn}    Name of the function defined on the VimL dict
                    {args}  Function arguments packed in an Array

                Return: ~
                    Result of the function call}
      */
  nvim_call_dict_function: (dict: any, fn: any, args: any) => any;
  /** 
      Calls a VimL function with the given arguments.

                On execution error: fails with VimL error, does not update
                v:errmsg.

                Parameters: ~
                    {fn}    Function to call
                    {args}  Function arguments packed in an Array

                Return: ~
                    Result of the function call}
      */
  nvim_call_function: (fn: any, args: any) => any;
  /** 
      Executes an ex-command.

                On execution error: fails with VimL error, does not update
                v:errmsg.

                Parameters: ~
                    {command}  Ex-command string

                See also: ~
                    |nvim_exec()|}
      */
  nvim_command: (command: any) => any;
  /** 
      Creates a new, empty, unnamed buffer.

                Parameters: ~
                    {listed}   Sets 'buflisted'
                    {scratch}  Creates a "throwaway" |scratch-buffer| for
                               temporary work (always 'nomodified'). Also sets
                               'nomodeline' on the buffer.

                Return: ~
                    Buffer handle, or 0 on error

                See also: ~
                    buf_open_scratch}
      */
  nvim_create_buf: (listed: any, scratch: any) => any;
  /** 
      Creates a new namespace, or gets an existing one.

                Namespaces are used for buffer highlights and virtual text,
                see |nvim_buf_add_highlight()| and
                |nvim_buf_set_virtual_text()|.

                Namespaces can be named or anonymous. If `name` matches an
                existing namespace, the associated id is returned. If `name`
                is an empty string a new, anonymous namespace is created.

                Parameters: ~
                    {name}  Namespace name or empty string

                Return: ~
                    Namespace id}
      */
  nvim_create_namespace: (name: any) => any;
  /** 
      Deletes the current line.

                Attributes: ~
                    not allowed when |textlock| is active}
      */
  nvim_del_current_line: () => any;
  /** 
      Unmaps a global |mapping| for the given mode.

                To unmap a buffer-local mapping, use |nvim_buf_del_keymap()|.

                See also: ~
                    |nvim_set_keymap()|}
      */
  nvim_del_keymap: (mode: any, lhs: any) => any;
  /** 
      Removes a global (g:) variable.

                Parameters: ~
                    {name}  Variable name}
      */
  nvim_del_var: (name: any) => any;
  /** 
      Echo a message.

                Parameters: ~
                    {chunks}   A list of [text, hl_group] arrays, each
                               representing a text chunk with specified
                               highlight. `hl_group` element can be omitted
                               for no highlight.
                    {history}  if true, add to |message-history|.
                    {opts}     Optional parameters. Reserved for future use.}
      */
  nvim_echo: (chunks: any, history: any, opts: any) => any;
  /** 
      Writes a message to the Vim error buffer. Does not append
                "\n", the message is buffered (won't display) until a linefeed
                is written.

                Parameters: ~
                    {str}  Message}
      */
  nvim_err_write: (str: any) => any;
  /** 
      Writes a message to the Vim error buffer. Appends "\n", so the
                buffer is flushed (and displayed).

                Parameters: ~
                    {str}  Message

                See also: ~
                    nvim_err_write()}
      */
  nvim_err_writeln: (str: any) => any;
  /** 
      Evaluates a VimL |expression|. Dictionaries and Lists are
                recursively expanded.

                On execution error: fails with VimL error, does not update
                v:errmsg.

                Parameters: ~
                    {expr}  VimL expression string

                Return: ~
                    Evaluation result or expanded object}
      */
  nvim_eval: (expr: any) => any;
  /** 
      Executes Vimscript (multiline block of Ex-commands), like
                anonymous |:source|.

                Unlike |nvim_command()| this function supports heredocs,
                script-scope (s:), etc.

                On execution error: fails with VimL error, does not update
                v:errmsg.

                Parameters: ~
                    {src}     Vimscript code
                    {output}  Capture and return all (non-error, non-shell
                              |:!|) output

                Return: ~
                    Output (non-error, non-shell |:!|) if `output` is true,
                    else empty string.

                See also: ~
                    |execute()|
                    |nvim_command()|}
      */
  nvim_exec: (src: any, output: any) => any;
  /** 
      Execute Lua code. Parameters (if any) are available as `...`
                inside the chunk. The chunk can return a value.

                Only statements are executed. To evaluate an expression,
                prefix it with `return` : return my_function(...)

                Parameters: ~
                    {code}  Lua code to execute
                    {args}  Arguments to the code

                Return: ~
                    Return value of Lua code if present or NIL.}
      */
  nvim_exec_lua: (code: any, args: any) => any;
  /** 
      Sends input-keys to Nvim, subject to various quirks controlled
                by `mode` flags. This is a blocking call, unlike
                |nvim_input()|.

                On execution error: does not fail, but updates v:errmsg.

                If you need to input sequences like <C-o> use
                |nvim_replace_termcodes| to replace the termcodes and then
                pass the resulting string to nvim_feedkeys. You'll also want
                to enable escape_csi.

                Example: >
                    :let key = nvim_replace_termcodes("<C-o>", v:true, v:false, v:true)
                    :call nvim_feedkeys(key, 'n', v:true)
<

                Parameters: ~
                    {keys}        to be typed
                    {mode}        behavior flags, see |feedkeys()|
                    {escape_csi}  If true, escape K_SPECIAL/CSI bytes in
                                  `keys`

                See also: ~
                    feedkeys()
                    vim_strsave_escape_csi}
      */
  nvim_feedkeys: (keys: any, mode: any, escape_csi: any) => any;
  /** 
      Gets the option information for all options.

                The dictionary has the full option names as keys and option
                metadata dictionaries as detailed at |nvim_get_option_info|.

                Return: ~
                    dictionary of all options}
      */
  nvim_get_all_options_info: () => any;
  /** 
      Returns a 2-tuple (Array), where item 0 is the current channel
                id and item 1 is the |api-metadata| map (Dictionary).

                Return: ~
                    2-tuple [{channel-id}, {api-metadata}]

                Attributes: ~
                    {fast}}
      */
  nvim_get_api_info: () => any;
  /** 
      Get information about a channel.

                Return: ~
                    Dictionary describing a channel, with these keys:
                    • "stream" the stream underlying the channel
                      • "stdio" stdin and stdout of this Nvim instance
                      • "stderr" stderr of this Nvim instance
                      • "socket" TCP/IP socket or named pipe
                      • "job" job with communication over its stdio

                    • "mode" how data received on the channel is interpreted
                      • "bytes" send and receive raw bytes
                      • "terminal" a |terminal| instance interprets ASCII
                        sequences
                      • "rpc" |RPC| communication on the channel is active

                    • "pty" Name of pseudoterminal, if one is used (optional).
                      On a POSIX system, this will be a device path like
                      /dev/pts/1. Even if the name is unknown, the key will
                      still be present to indicate a pty is used. This is
                      currently the case when using winpty on windows.
                    • "buffer" buffer with connected |terminal| instance
                      (optional)
                    • "client" information about the client on the other end
                      of the RPC channel, if it has added it using
                      |nvim_set_client_info()|. (optional)}
      */
  nvim_get_chan_info: (chan: any) => any;
  /** 
      Returns the 24-bit RGB value of a |nvim_get_color_map()| color
                name or "#rrggbb" hexadecimal string.

                Example: >
                    :echo nvim_get_color_by_name("Pink")
                    :echo nvim_get_color_by_name("#cbcbcb")
<

                Parameters: ~
                    {name}  Color name or "#rrggbb" string

                Return: ~
                    24-bit RGB value, or -1 for invalid argument.}
      */
  nvim_get_color_by_name: (name: any) => any;
  /** 
      Returns a map of color names and RGB values.

                Keys are color names (e.g. "Aqua") and values are 24-bit RGB
                color values (e.g. 65535).

                Return: ~
                    Map of color names and RGB values.}
      */
  nvim_get_color_map: () => any;
  /** 
      Gets a map of global (non-buffer-local) Ex commands.

                Currently only |user-commands| are supported, not builtin Ex
                commands.

                Parameters: ~
                    {opts}  Optional parameters. Currently only supports
                            {"builtin":false}

                Return: ~
                    Map of maps describing commands.}
      */
  nvim_get_commands: (opts: any) => any;
  /** 
      Gets a map of the current editor state.

                Parameters: ~
                    {opts}  Optional parameters.
                            • types: List of |context-types| ("regs", "jumps",
                              "bufs", "gvars", …) to gather, or empty for
                              "all".

                Return: ~
                    map of global |context|.}
      */
  nvim_get_context: (opts: any) => any;
  /** 
      Gets the current buffer.

                Return: ~
                    Buffer handle}
      */
  nvim_get_current_buf: () => any;
  /** 
      Gets the current line.

                Return: ~
                    Current line string}
      */
  nvim_get_current_line: () => any;
  /** 
      Gets the current tabpage.

                Return: ~
                    Tabpage handle}
      */
  nvim_get_current_tabpage: () => any;
  /** 
      Gets the current window.

                Return: ~
                    Window handle}
      */
  nvim_get_current_win: () => any;
  /** 
      Gets a highlight definition by id. |hlID()|

                Parameters: ~
                    {hl_id}  Highlight id as returned by |hlID()|
                    {rgb}    Export RGB colors

                Return: ~
                    Highlight definition map

                See also: ~
                    nvim_get_hl_by_name}
      */
  nvim_get_hl_by_id: (hl_id: any, rgb: any) => any;
  /** 
      Gets a highlight definition by name.

                Parameters: ~
                    {name}  Highlight group name
                    {rgb}   Export RGB colors

                Return: ~
                    Highlight definition map

                See also: ~
                    nvim_get_hl_by_id}
      */
  nvim_get_hl_by_name: (name: any, rgb: any) => any;
  /** 
      Gets a highlight group by name

                similar to |hlID()|, but allocates a new ID if not present.}
      */
  nvim_get_hl_id_by_name: (name: any) => any;
  /** 
      Gets a list of global (non-buffer-local) |mapping|
                definitions.

                Parameters: ~
                    {mode}  Mode short-name ("n", "i", "v", ...)

                Return: ~
                    Array of maparg()-like dictionaries describing mappings.
                    The "buffer" key is always zero.}
      */
  nvim_get_keymap: (mode: any) => any;
  /** 
      Gets the current mode. |mode()| "blocking" is true if Nvim is
                waiting for input.

                Return: ~
                    Dictionary { "mode": String, "blocking": Boolean }

                Attributes: ~
                    {fast}}
      */
  nvim_get_mode: () => any;
  /** 
      Gets existing, non-anonymous namespaces.

                Return: ~
                    dict that maps from names to namespace ids.}
      */
  nvim_get_namespaces: () => any;
  /** 
      Gets an option value string.

                Parameters: ~
                    {name}  Option name

                Return: ~
                    Option value (global)}
      */
  nvim_get_option: (name: any) => any;
  /** 
      Gets the option information for one option

                Resulting dictionary has keys:
                • name: Name of the option (like 'filetype')
                • shortname: Shortened name of the option (like 'ft')
                • type: type of option ("string", "integer" or "boolean")
                • default: The default value for the option
                • was_set: Whether the option was set.
                • last_set_sid: Last set script id (if any)
                • last_set_linenr: line number where option was set
                • last_set_chan: Channel where option was set (0 for local)
                • scope: one of "global", "win", or "buf"
                • global_local: whether win or buf option has a global value
                • commalist: List of comma separated values
                • flaglist: List of single char flags

                Parameters: ~
                    {name}  Option name

                Return: ~
                    Option Information}
      */
  nvim_get_option_info: (name: any) => any;
  /** 
      Gets info describing process `pid` .

                Return: ~
                    Map of process properties, or NIL if process not found.}
      */
  nvim_get_proc: (pid: any) => any;
  /** 
      Gets the immediate children of process `pid` .

                Return: ~
                    Array of child process ids, empty if process not found.}
      */
  nvim_get_proc_children: (pid: any) => any;
  /** 
      Find files in runtime directories

                'name' can contain wildcards. For example
                nvim_get_runtime_file("colors/‍*.vim", true) will return all
                color scheme files. Always use forward slashes (/) in the
                search pattern for subdirectories regardless of platform.

                It is not an error to not find any files. An empty array is
                returned then.

                To find a directory, `name` must end with a forward slash,
                like "rplugin/python/". Without the slash it would instead
                look for an ordinary file called "rplugin/python".

                Attributes: ~
                    {fast}

                Parameters: ~
                    {name}  pattern of files to search for
                    {all}   whether to return all matches or only the first

                Return: ~
                    list of absolute paths to the found files}
      */
  nvim_get_runtime_file: (name: any, all: any) => any;
  /** 
      Gets a global (g:) variable.

                Parameters: ~
                    {name}  Variable name

                Return: ~
                    Variable value}
      */
  nvim_get_var: (name: any) => any;
  /** 
      Gets a v: variable.

                Parameters: ~
                    {name}  Variable name

                Return: ~
                    Variable value}
      */
  nvim_get_vvar: (name: any) => any;
  /** 
      Queues raw user-input. Unlike |nvim_feedkeys()|, this uses a
                low-level input buffer and the call is non-blocking (input is
                processed asynchronously by the eventloop).

                On execution error: does not fail, but updates v:errmsg.

                Note:
                    |keycodes| like <CR> are translated, so "<" is special. To
                    input a literal "<", send <LT>.

                Note:
                    For mouse events use |nvim_input_mouse()|. The pseudokey
                    form "<LeftMouse><col,row>" is deprecated since
                    |api-level| 6.

                Attributes: ~
                    {fast}

                Parameters: ~
                    {keys}  to be typed

                Return: ~
                    Number of bytes actually written (can be fewer than
                    requested if the buffer becomes full).}
      */
  nvim_input: (keys: any) => any;
  /** 
      Send mouse event from GUI.

                Non-blocking: does not wait on any result, but queues the
                event to be processed soon by the event loop.

                Note:
                    Currently this doesn't support "scripting" multiple mouse
                    events by calling it multiple times in a loop: the
                    intermediate mouse positions will be ignored. It should be
                    used to implement real-time mouse input in a GUI. The
                    deprecated pseudokey form ("<LeftMouse><col,row>") of
                    |nvim_input()| has the same limitiation.

                Attributes: ~
                    {fast}

                Parameters: ~
                    {button}    Mouse button: one of "left", "right",
                                "middle", "wheel".
                    {action}    For ordinary buttons, one of "press", "drag",
                                "release". For the wheel, one of "up", "down",
                                "left", "right".
                    {modifier}  String of modifiers each represented by a
                                single char. The same specifiers are used as
                                for a key press, except that the "-" separator
                                is optional, so "C-A-", "c-a" and "CA" can all
                                be used to specify Ctrl+Alt+click.
                    {grid}      Grid number if the client uses |ui-multigrid|,
                                else 0.
                    {row}       Mouse row-position (zero-based, like redraw
                                events)
                    {col}       Mouse column-position (zero-based, like redraw
                                events)}
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
      Gets the current list of buffer handles

                Includes unlisted (unloaded/deleted) buffers, like `:ls!` .
                Use |nvim_buf_is_loaded()| to check if a buffer is loaded.

                Return: ~
                    List of buffer handles}
      */
  nvim_list_bufs: () => any;
  /** 
      Get information about all open channels.

                Return: ~
                    Array of Dictionaries, each describing a channel with the
                    format specified at |nvim_get_chan_info()|.}
      */
  nvim_list_chans: () => any;
  /** 
      Gets the paths contained in 'runtimepath'.

                Return: ~
                    List of paths}
      */
  nvim_list_runtime_paths: () => any;
  /** 
      Gets the current list of tabpage handles.

                Return: ~
                    List of tabpage handles}
      */
  nvim_list_tabpages: () => any;
  /** 
      Gets a list of dictionaries representing attached UIs.

                Return: ~
                    Array of UI dictionaries, each with these keys:
                    • "height" Requested height of the UI
                    • "width" Requested width of the UI
                    • "rgb" true if the UI uses RGB colors (false implies
                      |cterm-colors|)
                    • "ext_..." Requested UI extensions, see |ui-option|
                    • "chan" Channel id of remote UI (not present for TUI)}
      */
  nvim_list_uis: () => any;
  /** 
      Gets the current list of window handles.

                Return: ~
                    List of window handles}
      */
  nvim_list_wins: () => any;
  /** 
      Sets the current editor state from the given |context| map.

                Parameters: ~
                    {dict}  |Context| map.}
      */
  nvim_load_context: (dict: any) => any;
  /** 
      Notify the user with a message

                Relays the call to vim.notify . By default forwards your
                message in the echo area but can be overriden to trigger
                desktop notifications.

                Parameters: ~
                    {msg}        Message to display to the user
                    {log_level}  The log level
                    {opts}       Reserved for future use.}
      */
  nvim_notify: (msg: any, log_level: any, opts: any) => any;
  /** 
      Open a new window.

                Currently this is used to open floating and external windows.
                Floats are windows that are drawn above the split layout, at
                some anchor position in some other window. Floats can be drawn
                internally or by external GUI with the |ui-multigrid|
                extension. External windows are only supported with multigrid
                GUIs, and are displayed as separate top-level windows.

                For a general overview of floats, see |api-floatwin|.

                Exactly one of `external` and `relative` must be specified.
                The `width` and `height` of the new window must be specified.

                With relative=editor (row=0,col=0) refers to the top-left
                corner of the screen-grid and (row=Lines-1,col=Columns-1)
                refers to the bottom-right corner. Fractional values are
                allowed, but the builtin implementation (used by non-multigrid
                UIs) will always round down to nearest integer.

                Out-of-bounds values, and configurations that make the float
                not fit inside the main editor, are allowed. The builtin
                implementation truncates values so floats are fully within the
                main screen grid. External GUIs could let floats hover outside
                of the main window like a tooltip, but this should not be used
                to specify arbitrary WM screen positions.

                Example (Lua): window-relative float >
                    vim.api.nvim_open_win(0, false,
                      {relative='win', row=3, col=3, width=12, height=3})
<

                Example (Lua): buffer-relative float (travels as buffer is
                scrolled) >
                    vim.api.nvim_open_win(0, false,
                      {relative='win', width=12, height=3, bufpos={100,10}})
<

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {buffer}  Buffer to display, or 0 for current buffer
                    {enter}   Enter the window (make it the current window)
                    {config}  Map defining the window configuration. Keys:
                              • `relative`: Sets the window layout to "floating", placed
                                at (row,col) coordinates relative to:
                                • "editor" The global editor grid
                                • "win" Window given by the `win` field, or
                                  current window.
                                • "cursor" Cursor position in current window.

                              • `win` : |window-ID| for relative="win".
                              • `anchor`: Decides which corner of the float to place
                                at (row,col):
                                • "NW" northwest (default)
                                • "NE" northeast
                                • "SW" southwest
                                • "SE" southeast

                              • `width` : Window width (in character cells).
                                Minimum of 1.
                              • `height` : Window height (in character cells).
                                Minimum of 1.
                              • `bufpos` : Places float relative to buffer
                                text (only when relative="win"). Takes a tuple
                                of zero-indexed [line, column]. `row` and
                                `col` if given are applied relative to this
                                position, else they default to `row=1` and
                                `col=0` (thus like a tooltip near the buffer
                                text).
                              • `row` : Row position in units of "screen cell
                                height", may be fractional.
                              • `col` : Column position in units of "screen
                                cell width", may be fractional.
                              • `focusable` : Enable focus by user actions
                                (wincmds, mouse events). Defaults to true.
                                Non-focusable windows can be entered by
                                |nvim_set_current_win()|.
                              • `external` : GUI should display the window as
                                an external top-level window. Currently
                                accepts no other positioning configuration
                                together with this.
                              • `style`: Configure the appearance of the window.
                                Currently only takes one non-empty value:
                                • "minimal" Nvim will display the window with
                                  many UI options disabled. This is useful
                                  when displaying a temporary float where the
                                  text should not be edited. Disables
                                  'number', 'relativenumber', 'cursorline',
                                  'cursorcolumn', 'foldcolumn', 'spell' and
                                  'list' options. 'signcolumn' is changed to
                                  `auto` and 'colorcolumn' is cleared. The
                                  end-of-buffer region is hidden by setting
                                  `eob` flag of 'fillchars' to a space char,
                                  and clearing the |EndOfBuffer| region in
                                  'winhighlight'.

                Return: ~
                    Window handle, or 0 on error}
      */
  nvim_open_win: (buffer: any, enter: any, config: any) => any;
  /** 
      Writes a message to the Vim output buffer. Does not append
                "\n", the message is buffered (won't display) until a linefeed
                is written.

                Parameters: ~
                    {str}  Message}
      */
  nvim_out_write: (str: any) => any;
  /** 
      Parse a VimL expression.

                Attributes: ~
                    {fast}

                Parameters: ~
                    {expr}       Expression to parse. Always treated as a
                                 single line.
                    {flags}      Flags:
                                 • "m" if multiple expressions in a row are
                                   allowed (only the first one will be
                                   parsed),
                                 • "E" if EOC tokens are not allowed
                                   (determines whether they will stop parsing
                                   process or be recognized as an
                                   operator/space, though also yielding an
                                   error).
                                 • "l" when needing to start parsing with
                                   lvalues for ":let" or ":for". Common flag
                                   sets:
                                 • "m" to parse like for ":echo".
                                 • "E" to parse like for "<C-r>=".
                                 • empty string for ":call".
                                 • "lm" to parse for ":let".
                    {highlight}  If true, return value will also include
                                 "highlight" key containing array of 4-tuples
                                 (arrays) (Integer, Integer, Integer, String),
                                 where first three numbers define the
                                 highlighted region and represent line,
                                 starting column and ending column (latter
                                 exclusive: one should highlight region
                                 [start_col, end_col)).

                Return: ~

                    • AST: top-level dictionary with these keys:
                      • "error": Dictionary with error, present only if parser
                        saw some error. Contains the following keys:
                        • "message": String, error message in printf format,
                          translated. Must contain exactly one "%.*s".
                        • "arg": String, error message argument.

                      • "len": Amount of bytes successfully parsed. With flags
                        equal to "" that should be equal to the length of expr
                        string. (“Sucessfully parsed” here means “participated
                        in AST creation”, not “till the first error”.)
                      • "ast": AST, either nil or a dictionary with these
                        keys:
                        • "type": node type, one of the value names from
                          ExprASTNodeType stringified without "kExprNode"
                          prefix.
                        • "start": a pair [line, column] describing where node
                          is "started" where "line" is always 0 (will not be 0
                          if you will be using nvim_parse_viml() on e.g.
                          ":let", but that is not present yet). Both elements
                          are Integers.
                        • "len": “length” of the node. This and "start" are
                          there for debugging purposes primary (debugging
                          parser and providing debug information).
                        • "children": a list of nodes described in top/"ast".
                          There always is zero, one or two children, key will
                          not be present if node has no children. Maximum
                          number of children may be found in node_maxchildren
                          array.

                    • Local values (present only for certain nodes):
                      • "scope": a single Integer, specifies scope for
                        "Option" and "PlainIdentifier" nodes. For "Option" it
                        is one of ExprOptScope values, for "PlainIdentifier"
                        it is one of ExprVarScope values.
                      • "ident": identifier (without scope, if any), present
                        for "Option", "PlainIdentifier", "PlainKey" and
                        "Environment" nodes.
                      • "name": Integer, register name (one character) or -1.
                        Only present for "Register" nodes.
                      • "cmp_type": String, comparison type, one of the value
                        names from ExprComparisonType, stringified without
                        "kExprCmp" prefix. Only present for "Comparison"
                        nodes.
                      • "ccs_strategy": String, case comparison strategy, one
                        of the value names from ExprCaseCompareStrategy,
                        stringified without "kCCStrategy" prefix. Only present
                        for "Comparison" nodes.
                      • "augmentation": String, augmentation type for
                        "Assignment" nodes. Is either an empty string, "Add",
                        "Subtract" or "Concat" for "=", "+=", "-=" or ".="
                        respectively.
                      • "invert": Boolean, true if result of comparison needs
                        to be inverted. Only present for "Comparison" nodes.
                      • "ivalue": Integer, integer value for "Integer" nodes.
                      • "fvalue": Float, floating-point value for "Float"
                        nodes.
                      • "svalue": String, value for "SingleQuotedString" and
                        "DoubleQuotedString" nodes.}
      */
  nvim_parse_expression: (expr: any, flags: any, highlight: any) => any;
  /** 
      Pastes at cursor, in any mode.

                Invokes the `vim.paste` handler, which handles each mode
                appropriately. Sets redo/undo. Faster than |nvim_input()|.
                Lines break at LF ("\n").

                Errors ('nomodifiable', `vim.paste()` failure, …) are
                reflected in `err` but do not affect the return value (which
                is strictly decided by `vim.paste()` ). On error, subsequent
                calls are ignored ("drained") until the next paste is
                initiated (phase 1 or -1).

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {data}   Multiline input. May be binary (containing NUL
                             bytes).
                    {crlf}   Also break lines at CR and CRLF.
                    {phase}  -1: paste in a single call (i.e. without
                             streaming). To "stream" a paste, call `nvim_paste` sequentially with these `phase` values:
                             • 1: starts the paste (exactly once)
                             • 2: continues the paste (zero or more times)
                             • 3: ends the paste (exactly once)

                Return: ~

                    • true: Client may continue pasting.
                    • false: Client must cancel the paste.}
      */
  nvim_paste: (data: any, crlf: any, phase: any) => any;
  /** 
      Puts text at cursor, in any mode.

                Compare |:put| and |p| which are always linewise.

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {lines}   |readfile()|-style list of lines.
                              |channel-lines|
                    {type}    Edit behavior: any |getregtype()| result, or:
                              • "b" |blockwise-visual| mode (may include
                                width, e.g. "b3")
                              • "c" |charwise| mode
                              • "l" |linewise| mode
                              • "" guess by contents, see |setreg()|
                    {after}   If true insert after cursor (like |p|), or before (like
                              |P|).
                    {follow}  If true place cursor at end of inserted text.}
      */
  nvim_put: (lines: any, type: any, after: any, follow: any) => any;
  /** 
      Replaces terminal codes and |keycodes| (<CR>, <Esc>, ...) in a
                string with the internal representation.

                Parameters: ~
                    {str}        String to be converted.
                    {from_part}  Legacy Vim parameter. Usually true.
                    {do_lt}      Also translate <lt>. Ignored if `special` is
                                 false.
                    {special}    Replace |keycodes|, e.g. <CR> becomes a "\n"
                                 char.

                See also: ~
                    replace_termcodes
                    cpoptions}
      */
  nvim_replace_termcodes: (
    str: any,
    from_part: any,
    do_lt: any,
    special: any
  ) => any;
  /** 
      Selects an item in the completion popupmenu.

                If |ins-completion| is not active this API call is silently
                ignored. Useful for an external UI using |ui-popupmenu| to
                control the popupmenu with the mouse. Can also be used in a
                mapping; use <cmd> |:map-cmd| to ensure the mapping doesn't
                end completion mode.

                Parameters: ~
                    {item}    Index (zero-based) of the item to select. Value
                              of -1 selects nothing and restores the original
                              text.
                    {insert}  Whether the selection should be inserted in the
                              buffer.
                    {finish}  Finish the completion and dismiss the popupmenu.
                              Implies `insert` .
                    {opts}    Optional parameters. Reserved for future use.}
      */
  nvim_select_popupmenu_item: (
    item: any,
    insert: any,
    finish: any,
    opts: any
  ) => any;
  /** 
      Self-identifies the client.

                The client/plugin/application should call this after
                connecting, to provide hints about its identity and purpose,
                for debugging and orchestration.

                Can be called more than once; the caller should merge old info
                if appropriate. Example: library first identifies the channel,
                then a plugin using that library later identifies itself.

                Note:
                    "Something is better than nothing". You don't need to
                    include all the fields.

                Parameters: ~
                    {name}        Short name for the connected client
                    {version}     Dictionary describing the version, with
                                  these (optional) keys:
                                  • "major" major version (defaults to 0 if
                                    not set, for no release yet)
                                  • "minor" minor version
                                  • "patch" patch number
                                  • "prerelease" string describing a
                                    prerelease, like "dev" or "beta1"
                                  • "commit" hash or similar identifier of
                                    commit
                    {type}        Must be one of the following values. Client
                                  libraries should default to "remote" unless
                                  overridden by the user.
                                  • "remote" remote client connected to Nvim.
                                  • "ui" gui frontend
                                  • "embedder" application using Nvim as a
                                    component (for example, IDE/editor
                                    implementing a vim mode).
                                  • "host" plugin host, typically started by
                                    nvim
                                  • "plugin" single plugin, started by nvim
                    {methods}     Builtin methods in the client. For a host,
                                  this does not include plugin methods which
                                  will be discovered later. The key should be
                                  the method name, the values are dicts with
                                  these (optional) keys (more keys may be
                                  added in future versions of Nvim, thus
                                  unknown keys are ignored. Clients must only
                                  use keys defined in this or later versions
                                  of Nvim):
                                  • "async" if true, send as a notification.
                                    If false or unspecified, use a blocking
                                    request
                                  • "nargs" Number of arguments. Could be a
                                    single integer or an array of two
                                    integers, minimum and maximum inclusive.
                    {attributes}  Arbitrary string:string map of informal
                                  client properties. Suggested keys:
                                  • "website": Client homepage URL (e.g.
                                    GitHub repository)
                                  • "license": License description ("Apache
                                    2", "GPLv3", "MIT", …)
                                  • "logo": URI or path to image, preferably
                                    small logo or icon. .png or .svg format is
                                    preferred.}
      */
  nvim_set_client_info: (
    name: any,
    version: any,
    type: any,
    methods: any,
    attributes: any
  ) => any;
  /** 
      Sets the current buffer.

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {buffer}  Buffer handle}
      */
  nvim_set_current_buf: (buffer: any) => any;
  /** 
      Changes the global working directory.

                Parameters: ~
                    {dir}  Directory path}
      */
  nvim_set_current_dir: (dir: any) => any;
  /** 
      Sets the current line.

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {line}  Line contents}
      */
  nvim_set_current_line: (line: any) => any;
  /** 
      Sets the current tabpage.

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {tabpage}  Tabpage handle}
      */
  nvim_set_current_tabpage: (tabpage: any) => any;
  /** 
      Sets the current window.

                Attributes: ~
                    not allowed when |textlock| is active

                Parameters: ~
                    {window}  Window handle}
      */
  nvim_set_current_win: (window: any) => any;
  /** 
      Set or change decoration provider for a namespace

                This is a very general purpose interface for having lua
                callbacks being triggered during the redraw code.

                The expected usage is to set extmarks for the currently
                redrawn buffer. |nvim_buf_set_extmark| can be called to add
                marks on a per-window or per-lines basis. Use the `ephemeral`
                key to only use the mark for the current screen redraw (the
                callback will be called again for the next redraw ).

                Note: this function should not be called often. Rather, the
                callbacks themselves can be used to throttle unneeded
                callbacks. the `on_start` callback can return `false` to
                disable the provider until the next redraw. Similarily, return
                `false` in `on_win` will skip the `on_lines` calls for that
                window (but any extmarks set in `on_win` will still be used).
                A plugin managing multiple sources of decoration should
                ideally only set one provider, and merge the sources
                internally. You can use multiple `ns_id` for the extmarks
                set/modified inside the callback anyway.

                Note: doing anything other than setting extmarks is considered
                experimental. Doing things like changing options are not
                expliticly forbidden, but is likely to have unexpected
                consequences (such as 100% CPU consumption). doing
                `vim.rpcnotify` should be OK, but `vim.rpcrequest` is quite
                dubious for the moment.

                Parameters: ~
                    {ns_id}  Namespace id from |nvim_create_namespace()|
                    {opts}   Callbacks invoked during redraw:
                             • on_start: called first on each screen redraw
                               ["start", tick]
                             • on_buf: called for each buffer being redrawn
                               (before window callbacks) ["buf", bufnr, tick]
                             • on_win: called when starting to redraw a
                               specific window. ["win", winid, bufnr, topline,
                               botline_guess]
                             • on_line: called for each buffer line being
                               redrawn. (The interation with fold lines is
                               subject to change) ["win", winid, bufnr, row]
                             • on_end: called at the end of a redraw cycle
                               ["end", tick]}
      */
  nvim_set_decoration_provider: (ns_id: any, opts: any) => any;
  /** 
      Set a highlight group.

                TODO: ns_id = 0, should modify :highlight namespace TODO val
                should take update vs reset flag

                Parameters: ~
                    {ns_id}  number of namespace for this highlight
                    {name}   highlight group name, like ErrorMsg
                    {val}    highlight definiton map, like
                             |nvim_get_hl_by_name|. in addition the following
                             keys are also recognized: `default` : don't
                             override existing definition, like `hi default`}
      */
  nvim_set_hl: (ns_id: any, name: any, val: any) => any;
  /** 
      Set active namespace for highlights.

                NB: this function can be called from async contexts, but the
                semantics are not yet well-defined. To start with
                |nvim_set_decoration_provider| on_win and on_line callbacks
                are explicitly allowed to change the namespace during a redraw
                cycle.

                Attributes: ~
                    {fast}

                Parameters: ~
                    {ns_id}  the namespace to activate}
      */
  nvim_set_hl_ns: (ns_id: any) => any;
  /** 
      Sets a global |mapping| for the given mode.

                To set a buffer-local mapping, use |nvim_buf_set_keymap()|.

                Unlike |:map|, leading/trailing whitespace is accepted as part
                of the {lhs} or {rhs}. Empty {rhs} is |<Nop>|. |keycodes| are
                replaced as usual.

                Example: >
                    call nvim_set_keymap('n', ' <NL>', '', {'nowait': v:true})
<

                is equivalent to: >
                    nmap <nowait> <Space><NL> <Nop>
<

                Parameters: ~
                    {mode}  Mode short-name (map command prefix: "n", "i",
                            "v", "x", …) or "!" for |:map!|, or empty string
                            for |:map|.
                    {lhs}   Left-hand-side |{lhs}| of the mapping.
                    {rhs}   Right-hand-side |{rhs}| of the mapping.
                    {opts}  Optional parameters map. Accepts all
                            |:map-arguments| as keys excluding |<buffer>| but
                            including |noremap|. Values are Booleans. Unknown
                            key is an error.}
      */
  nvim_set_keymap: (mode: any, lhs: any, rhs: any, opts: any) => any;
  /** 
      Sets an option value.

                Parameters: ~
                    {name}   Option name
                    {value}  New option value}
      */
  nvim_set_option: (name: any, value: any) => any;
  /** 
      Sets a global (g:) variable.

                Parameters: ~
                    {name}   Variable name
                    {value}  Variable value}
      */
  nvim_set_var: (name: any, value: any) => any;
  /** 
      Sets a v: variable, if it is not readonly.

                Parameters: ~
                    {name}   Variable name
                    {value}  Variable value}
      */
  nvim_set_vvar: (name: any, value: any) => any;
  /** 
      Calculates the number of display cells occupied by `text` .
                <Tab> counts as one cell.

                Parameters: ~
                    {text}  Some text

                Return: ~
                    Number of cells}
      */
  nvim_strwidth: (text: any) => any;
  /** 
      Subscribes to event broadcasts.

                Parameters: ~
                    {event}  Event type string}
      */
  nvim_subscribe: (event: any) => any;
  /** 
      Unsubscribes to event broadcasts.

                Parameters: ~
                    {event}  Event type string}
      */
  nvim_unsubscribe: (event: any) => any;
}
