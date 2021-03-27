declare namespace vim {
  /** 
        Return a human-readable representation of the given object.
      */
  function inspect(): (any) => any;
  /** 
        TODO: Documentation
      */
  function make_meta_accessor(): (any) => any;
  /** 
        Paste handler, invoked by |nvim_paste()| when a conforming UI
                (such as the |TUI|) pastes text into the editor.
      */
  function paste(): (any) => any;
  /** 
        Defers callback `cb` until the Nvim API is safe to call.
      */
  function schedule_wrap(): (any) => any;
  /** 
        TODO: Documentation
      */
  function deep_equal(): (any) => any;
  /** 
        Returns a deep copy of the given object. Non-table objects are
                copied as in a typical Lua assignment, whereas table objects
                are copied recursively. Functions are naively copied, so
                functions in the copied table point to the same functions as
                those in the input table. Userdata and threads are not copied
                and will throw an error.
      */
  function deepcopy(): (any) => any;
  /** 
        Tests if `s` ends with `suffix` .
      */
  function endswith(): (any) => any;
  /** 
        Splits a string at each instance of a separator.
      */
  function gsplit(): (any) => any;
  /** 
        Returns true if object `f` can be called as a function.
      */
  function is_callable(): (any) => any;
  /** 
        TODO: Documentation
      */
  function is_valid(): (any) => any;
  /** 
        Extends a list-like table with the values of another list-like
                table.
      */
  function list_extend(): (any) => any;
  /** 
        Escapes magic chars in a Lua pattern.
      */
  function pesc(): (any) => any;
  /** 
        Splits a string at each instance of a separator.
      */
  function split(): (any) => any;
  /** 
        Tests if `s` starts with `prefix` .
      */
  function startswith(): (any) => any;
  /** 
        Add the reverse lookup values to an existing table. For
                example: tbl_add_reverse_lookup { A = 1 } == { [1] = 'A , A = 1 }`
      */
  function tbl_add_reverse_lookup(): (any) => any;
  /** 
        Checks if a list-like (vector) table contains `value` .
      */
  function tbl_contains(): (any) => any;
  /** 
        Counts the number of non-nil values in table `t` .
>
      */
  function tbl_count(): (any) => any;
  /** 
        Merges recursively two or more map-like tables.
      */
  function tbl_deep_extend(): (any) => any;
  /** 
        Merges two or more map-like tables.
      */
  function tbl_extend(): (any) => any;
  /** 
        Filter a table using a predicate function
      */
  function tbl_filter(): (any) => any;
  /** 
        Creates a copy of a list-like table such that any nested
                tables are "unrolled" and appended to the result.
      */
  function tbl_flatten(): (any) => any;
  /** 
        Checks if a table is empty.
      */
  function tbl_isempty(): (any) => any;
  /** 
        Tests if a Lua table can be treated as an array.
      */
  function tbl_islist(): (any) => any;
  /** 
        Return a list of all keys used in a table. However, the order
                of the return table of keys is not guaranteed.
      */
  function tbl_keys(): (any) => any;
  /** 
        Apply a function to all values of a table.
      */
  function tbl_map(): (any) => any;
  /** 
        Return a list of all values used in a table. However, the
                order of the return table of values is not guaranteed.
      */
  function tbl_values(): (any) => any;
  /** 
        Trim whitespace (Lua pattern "%s") from both sides of a
                string.
      */
  function trim(): (any) => any;
  /** 
        Validates a parameter specification (types and values).
      */
  function validate(): (any) => any;
  /** 
        Invokes |vim-function| or |user-function| {func} with arguments {...}.
        See also |vim.fn|.
        Equivalent to: >
            vim.fn[func]({...})
      */
  function call(): (any) => any;
  /** 
        Invokes an Ex command (the ":" commands, Vimscript statements).
        See also |ex-cmd-index|.
        Example: >
            vim.cmd('echo 42')
      */
  function cmd(): (any) => any;
  /** 
        Invokes |vim-function| or |user-function| {func} with arguments {...}.
        To call autoload functions, use the syntax: >
            vim.fn['some#function']({...})
<
        Unlike vim.api.|nvim_call_function| this converts directly between Vim
        objects and Lua objects. If the Vim function returns a float, it will
        be represented directly as a Lua number. Empty lists and dictionaries
        both are represented by an empty table.
      */
  function fn(): (any) => any;
  /** 
      Global (|g:|) editor variables.
        Key with no value returns `nil`.
      */
  let g: any;
  /** 
      Buffer-scoped (|b:|) variables for the current buffer.
        Invalid or unset key returns `nil`.
      */
  let b: any;
  /** 
      Window-scoped (|w:|) variables for the current window.
        Invalid or unset key returns `nil`.
      */
  let w: any;
  /** 
      Tabpage-scoped (|t:|) variables for the current tabpage.
        Invalid or unset key returns `nil`.
      */
  let t: any;
  /** 
      |v:| variables.
        Invalid or unset key returns `nil`.
      */
  let v: any;
  /** 
      Environment variables defined in the editor session.
        See |expand-env| and |:let-environment| for the Vimscript behavior.
        Invalid or unset key returns `nil`.
        Example: >
            vim.env.FOO = 'bar'
            print(vim.env.TERM)
<
      */
  let env: any;
  /** 
      Get or set editor options, like |:set|. Invalid key is an error.
        Example: >
            vim.o.cmdheight = 4
            print(vim.o.columns)
      */
  let o: any;
  /** 
      Get or set buffer-scoped |local-options|. Invalid key is an error.
        Example: >
            vim.bo.buflisted = true
            print(vim.bo.comments)
      */
  let bo: any;
  /** 
      Get or set window-scoped |local-options|. Invalid key is an error.
        Example: >
            vim.wo.cursorcolumn = true
            print(vim.wo.foldmarker)
      */
  let wo: any;
  /** 
        Get a URI from a bufnr
      */
  function uri_from_bufnr(): (any) => any;
  /** 
        Get a URI from a file path.
      */
  function uri_from_fname(): (any) => any;
  /** 
        Return or create a buffer for a uri.
      */
  function uri_to_bufnr(): (any) => any;
  /** 
        Get a filename from a URI
      */
  function uri_to_fname(): (any) => any;
  /** 
        Invokes Nvim |API| function {func} with arguments {...}.
        Example: call the "nvim_get_current_line()" API function: >
            print(tostring(vim.api.nvim_get_current_line()))
      */
  function api(): (any) => any;
  /** 
        Returns the version of the current neovim build.
      */
  function version(): (any) => any;
  /** 
        Returns true if the code is executing as part of a "fast" event
        handler, where most of the API is disabled. These are low-level events
        (e.g. |lua-loop-callbacks|) which can be invoked whenever Nvim polls
        for input.  When this is `false` most API functions are callable (but
        may be subject to other restrictions such as |textlock|).
      */
  function in_fast_event(): (any) => any;
  /** 
      Special value used to represent NIL in msgpack-rpc and |v:null| in
	vimL interaction, and similar cases. Lua `nil` cannot be used as
	part of a lua table representing a Dictionary or Array, as it
	is equivalent to a missing value: `{"foo", nil}` is the same as 
	`{"foo"}`
      */
  let NIL: any;
  /** 
        Creates a special table which will be converted to an empty
	dictionary when converting lua values to vimL or API types. The
	table is empty, and this property is marked using a metatable. An
	empty table `{}` without this metatable will default to convert to
	an array/list.
      */
  function empty_dict(): (any) => any;
  /** 
        Converts a selection specified by the buffer ({bufnr}), starting
        position ({pos1}, a zero-indexed pair `{line1,column1}`), ending
        position ({pos2}, same format as {pos1}), the type of the register
        for the selection ({type}, see |regtype|), and a boolean indicating
        whether the selection is inclusive or not, into a zero-indexed table 
        of linewise selections of the form `{linenr = {startcol, endcol}}` .
      */
  function region(): (any) => any;
  /** 
        Register a lua {fn} with an {ns_id} to be run after every keystroke.
      */
  function register_keystroke_callback(): (any) => any;
  /** 
        Sends {event} to {channel} via |RPC| and returns immediately.
	If {channel} is 0, the event is broadcast to all channels.
      */
  function rpcnotify(): (any) => any;
  /** 
        Sends a request to {channel} to invoke {method} via
	|RPC| and blocks until a response is received.
      */
  function rpcrequest(): (any) => any;
  /** 
        Compares strings case-insensitively.  Returns 0, 1 or -1 if strings
        are equal, {a} is greater than {b} or {a} is lesser than {b},
        respectively.
      */
  function stricmp(): (any) => any;
  /** 
        Convert byte index to UTF-32 and UTF-16 indicies. If {index} is not
        supplied, the length of the string is used. All indicies are zero-based.
        Returns two values: the UTF-32 and UTF-16 indicies respectively.
      */
  function str_utfindex(): (any) => any;
  /** 
        Convert UTF-32 or UTF-16 {index} to byte index. If {use_utf16} is not
        supplied, it defaults to false (use UTF-32). Returns the byte index.
      */
  function str_byteindex(): (any) => any;
  /** 
        Schedules {callback} to be invoked soon by the main event-loop. Useful
        to avoid |textlock| or other temporary restrictions.
      */
  function schedule(): (any) => any;
  /** 
        Defers calling {fn} until {timeout} ms passes.  Use to do a one-shot timer
    that calls {fn}.
      */
  function defer_fn(): (any) => any;
  /** 
        Wait for {time} in milliseconds until {callback} returns `true`.
      */
  function wait(): (any) => any;
  /** 
      Type index for use in |lua-special-tbl|.  Specifying one of the 
	values from |vim.types| allows typing the empty table (it is 
	unclear whether empty Lua table represents empty list or empty array) 
	and forcing integral numbers to be |Float|.  See |lua-special-tbl| for 
	more details.
      */
  let type_idx: any;
  /** 
      Value index for tables representing |Float|s.  A table representing 
	floating-point value 1.0 looks like this: >
            {
              [vim.type_idx] = vim.types.float,
              [vim.val_idx] = 1.0,
            }
<	See also |vim.type_idx| and |lua-special-tbl|.
      */
  let val_idx: any;
  /** 
      Table with possible values for |vim.type_idx|.  Contains two sets 
	of key-value pairs: first maps possible values for |vim.type_idx| 
	to human-readable strings, second maps human-readable type names to 
	values for |vim.type_idx|.  Currently contains pairs for `float`, 
	`array` and `dictionary` types.
      */
  let types: any;
}
