/** @noSelf **/
declare namespace vim {
  /** 
          Return a human-readable representation of the given object.

                See also: ~
                    https://github.com/kikito/inspect.lua
                    https://github.com/mpeterv/vinspect}
      */
  function inspect(): (object: any, options: any) => any;
  /** 
          TODO: Documentation}
      */
  function make_meta_accessor(): (get: any, set: any, del: any) => any;
  /** 
          Paste handler, invoked by |nvim_paste()| when a conforming UI
                (such as the |TUI|) pastes text into the editor.

                Example: To remove ANSI color codes when pasting: >

                 vim.paste = (function(overridden)
                   return function(lines, phase)
                     for i,line in ipairs(lines) do
                       -- Scrub ANSI color codes from paste input.
                       lines[i] = line:gsub('\27%[[0-9;mK]+', '')
                     end
                     overridden(lines, phase)
                   end
                 end)(vim.paste)
<

                Parameters: ~
                    {lines}  |readfile()|-style list of lines to paste.
                             |channel-lines|
                    {phase}  -1: "non-streaming" paste: the call contains all
                             lines. If paste is "streamed", `phase` indicates the stream state:
                             • 1: starts the paste (exactly once)
                             • 2: continues the paste (zero or more times)
                             • 3: ends the paste (exactly once)

                Return: ~
                    false if client should cancel the paste.

                See also: ~
                    |paste|}
      */
  function paste(): (lines: any, phase: any) => any;
  /** 
          Defers callback `cb` until the Nvim API is safe to call.

                See also: ~
                    |lua-loop-callbacks|
                    |vim.schedule()|
                    |vim.in_fast_event()|}
      */
  function schedule_wrap(): (cb: any) => any;
  /** 
          TODO: Documentation}
      */
  function deep_equal(): (a: any, b: any) => any;
  /** 
          Returns a deep copy of the given object. Non-table objects are
                copied as in a typical Lua assignment, whereas table objects
                are copied recursively. Functions are naively copied, so
                functions in the copied table point to the same functions as
                those in the input table. Userdata and threads are not copied
                and will throw an error.

                Parameters: ~
                    {orig}  Table to copy

                Return: ~
                    New table of copied keys and (nested) values.}
      */
  function deepcopy(): (orig: any) => any;
  /** 
          Tests if `s` ends with `suffix` .

                Parameters: ~
                    {s}       (string) a string
                    {suffix}  (string) a suffix

                Return: ~
                    (boolean) true if `suffix` is a suffix of s}
      */
  function endswith(): (s: any, suffix: any) => any;
  /** 
          Splits a string at each instance of a separator.

                Parameters: ~
                    {s}      String to split
                    {sep}    Separator string or pattern
                    {plain}  If `true` use `sep` literally (passed to
                             String.find)

                Return: ~
                    Iterator over the split components

                See also: ~
                    |vim.split()|
                    https://www.lua.org/pil/20.2.html
                    http://lua-users.org/wiki/StringLibraryTutorial}
      */
  function gsplit(): (s: any, sep: any, plain: any) => any;
  /** 
          Returns true if object `f` can be called as a function.

                Parameters: ~
                    {f}  Any object

                Return: ~
                    true if `f` is callable, else false}
      */
  function is_callable(): (f: any) => any;
  /** 
          TODO: Documentation}
      */
  function is_valid(): (opt: any) => any;
  /** 
          Extends a list-like table with the values of another list-like
                table.

                NOTE: This mutates dst!

                Parameters: ~
                    {dst}     list which will be modified and appended to.
                    {src}     list from which values will be inserted.
                    {start}   Start index on src. defaults to 1
                    {finish}  Final index on src. defaults to #src

                Return: ~
                    dst

                See also: ~
                    |vim.tbl_extend()|}
      */
  function list_extend(): (dst: any, src: any, start: any, finish: any) => any;
  /** 
          Escapes magic chars in a Lua pattern.

                Parameters: ~
                    {s}  String to escape

                Return: ~
                    %-escaped pattern string

                See also: ~
                    https://github.com/rxi/lume}
      */
  function pesc(): (s: any) => any;
  /** 
          Splits a string at each instance of a separator.

                Examples: >
                 split(":aa::b:", ":")     --> {'','aa','','b',''}
                 split("axaby", "ab?")     --> {'','x','y'}
                 split(x*yz*o, "*", true)  --> {'x','yz','o'}
<

                Parameters: ~
                    {s}      String to split
                    {sep}    Separator string or pattern
                    {plain}  If `true` use `sep` literally (passed to
                             String.find)

                Return: ~
                    List-like table of the split components.

                See also: ~
                    |vim.gsplit()|}
      */
  function split(): (s: any, sep: any, plain: any) => any;
  /** 
          Tests if `s` starts with `prefix` .

                Parameters: ~
                    {s}       (string) a string
                    {prefix}  (string) a prefix

                Return: ~
                    (boolean) true if `prefix` is a prefix of s}
      */
  function startswith(): (s: any, prefix: any) => any;
  /** 
          Add the reverse lookup values to an existing table. For
                example: tbl_add_reverse_lookup { A = 1 } == { [1] = 'A , A = 1 }`

                Parameters: ~
                    {o}  table The table to add the reverse to.}
      */
  function tbl_add_reverse_lookup(): (o: any) => any;
  /** 
          Checks if a list-like (vector) table contains `value` .

                Parameters: ~
                    {t}      Table to check
                    {value}  Value to compare

                Return: ~
                    true if `t` contains `value`}
      */
  function tbl_contains(): (t: any, value: any) => any;
  /** 
          Counts the number of non-nil values in table `t` .
>

    vim.tbl_count({ a=1, b=2 }) => 2
    vim.tbl_count({ 1, 2 }) => 2
<

                Parameters: ~
                    {t}  Table

                Return: ~
                    Number that is the number of the value in table

                See also: ~
                    https://github.com/Tieske/Penlight/blob/master/lua/pl/tablex.lua}
      */
  function tbl_count(): (t: any) => any;
  /** 
          Merges recursively two or more map-like tables.

                Parameters: ~
                    {behavior}  Decides what to do if a key is found in more
                                than one map:
                                • "error": raise an error
                                • "keep": use value from the leftmost map
                                • "force": use value from the rightmost map
                    {...}       Two or more map-like tables.

                See also: ~
                    |tbl_extend()|}
      */
  function tbl_deep_extend(): (behavior: any, arguments: any[]) => any;
  /** 
          Merges two or more map-like tables.

                Parameters: ~
                    {behavior}  Decides what to do if a key is found in more
                                than one map:
                                • "error": raise an error
                                • "keep": use value from the leftmost map
                                • "force": use value from the rightmost map
                    {...}       Two or more map-like tables.

                See also: ~
                    |extend()|}
      */
  function tbl_extend(): (behavior: any, arguments: any[]) => any;
  /** 
          Filter a table using a predicate function

                Parameters: ~
                    {func}  function or callable table
                    {t}     table}
      */
  function tbl_filter(): (func: any, t: any) => any;
  /** 
          Creates a copy of a list-like table such that any nested
                tables are "unrolled" and appended to the result.

                Parameters: ~
                    {t}  List-like table

                Return: ~
                    Flattened copy of the given list-like table.

                See also: ~
                    Fromhttps://github.com/premake/premake-core/blob/master/src/base/table.lua}
      */
  function tbl_flatten(): (t: any) => any;
  /** 
          Checks if a table is empty.

                Parameters: ~
                    {t}  Table to check

                See also: ~
                    https://github.com/premake/premake-core/blob/master/src/base/table.lua}
      */
  function tbl_isempty(): (t: any) => any;
  /** 
          Tests if a Lua table can be treated as an array.

                Empty table `{}` is assumed to be an array, unless it was
                created by |vim.empty_dict()| or returned as a dict-like |API|
                or Vimscript result, for example from |rpcrequest()| or
                |vim.fn|.

                Parameters: ~
                    {t}  Table

                Return: ~
                    `true` if array-like table, else `false` .}
      */
  function tbl_islist(): (t: any) => any;
  /** 
          Return a list of all keys used in a table. However, the order
                of the return table of keys is not guaranteed.

                Parameters: ~
                    {t}  Table

                Return: ~
                    list of keys

                See also: ~
                    Fromhttps://github.com/premake/premake-core/blob/master/src/base/table.lua}
      */
  function tbl_keys(): (t: any) => any;
  /** 
          Apply a function to all values of a table.

                Parameters: ~
                    {func}  function or callable table
                    {t}     table}
      */
  function tbl_map(): (func: any, t: any) => any;
  /** 
          Return a list of all values used in a table. However, the
                order of the return table of values is not guaranteed.

                Parameters: ~
                    {t}  Table

                Return: ~
                    list of values}
      */
  function tbl_values(): (t: any) => any;
  /** 
          Trim whitespace (Lua pattern "%s") from both sides of a
                string.

                Parameters: ~
                    {s}  String to trim

                Return: ~
                    String with whitespace removed from its beginning and end

                See also: ~
                    https://www.lua.org/pil/20.2.html}
      */
  function trim(): (s: any) => any;
  /** 
          Validates a parameter specification (types and values).

                Usage example: >

                  function user.new(name, age, hobbies)
                    vim.validate{
                      name={name, 'string'},
                      age={age, 'number'},
                      hobbies={hobbies, 'table'},
                    }
                    ...
                  end
<

                Examples with explicit argument values (can be run directly): >

                  vim.validate{arg1={{'foo'}, 'table'}, arg2={'foo', 'string'}}
                     => NOP (success)

                  vim.validate{arg1={1, 'table'}}
                     => error('arg1: expected table, got number')

                  vim.validate{arg1={3, function(a) return (a % 2) == 0 end, 'even number'}}
                     => error('arg1: expected even number, got 3')
<

                Parameters: ~
                    {opt}  Map of parameter names to validations. Each key is
                           a parameter name; each value is a tuple in one of
                           these forms:
                           1. (arg_value, type_name, optional)
                              • arg_value: argument value
                              • type_name: string type name, one of: ("table",
                                "t", "string", "s", "number", "n", "boolean",
                                "b", "function", "f", "nil", "thread",
                                "userdata")
                              • optional: (optional) boolean, if true, `nil`
                                is valid

                           2. (arg_value, fn, msg)
                              • arg_value: argument value
                              • fn: any function accepting one argument,
                                returns true if and only if the argument is
                                valid. Can optionally return an additional
                                informative error message as the second
                                returned value.
                              • msg: (optional) error string if validation
                                fails}
      */
  function validate(): (opt: any) => any;
  /** 
          Invokes |vim-function| or |user-function| {func} with arguments {...}.
        See also |vim.fn|.
        Equivalent to: >
            vim.fn[func]({...})}
      */
  function call(): (func: any, arguments: any[]) => any;
  /** 
          Invokes an Ex command (the ":" commands, Vimscript statements).
        See also |ex-cmd-index|.
        Example: >
            vim.cmd('echo 42')}
      */
  function cmd(): (cmd: any) => any;
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
          Get a URI from a bufnr

                Parameters: ~
                    {bufnr}  (number): Buffer number

                Return: ~
                    URI}
      */
  function uri_from_bufnr(): (bufnr: any) => any;
  /** 
          Get a URI from a file path.

                Parameters: ~
                    {path}  (string): Path to file

                Return: ~
                    URI}
      */
  function uri_from_fname(): (path: any) => any;
  /** 
          Return or create a buffer for a uri.

                Parameters: ~
                    {uri}  (string): The URI

                Return: ~
                    bufnr.

                Note:
                    Creates buffer but does not load it}
      */
  function uri_to_bufnr(): (uri: any) => any;
  /** 
          Get a filename from a URI

                Parameters: ~
                    {uri}  (string): The URI

                Return: ~
                    Filename

 vim:tw=78:ts=8:ft=help:norl:}
      */
  function uri_to_fname(): (uri: any) => any;
  /** 
          Returns the version of the current neovim build.}
      */
  function version(): () => any;
  /** 
          Returns true if the code is executing as part of a "fast" event
        handler, where most of the API is disabled. These are low-level events
        (e.g. |lua-loop-callbacks|) which can be invoked whenever Nvim polls
        for input.  When this is `false` most API functions are callable (but
        may be subject to other restrictions such as |textlock|).}
      */
  function in_fast_event(): () => any;
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

	Note: if numeric keys are added to the table, the metatable will be
	ignored and the dict converted to a list/array anyway.}
      */
  function empty_dict(): () => any;
  /** 
          Converts a selection specified by the buffer ({bufnr}), starting
        position ({pos1}, a zero-indexed pair `{line1,column1}`), ending
        position ({pos2}, same format as {pos1}), the type of the register
        for the selection ({type}, see |regtype|), and a boolean indicating
        whether the selection is inclusive or not, into a zero-indexed table 
        of linewise selections of the form `{linenr = {startcol, endcol}}` .}
      */
  function region(): (
    bufnr: any,
    pos1: any,
    pos2: any,
    type: any,
    inclusive: any
  ) => any;
  /** 
          Register a lua {fn} with an {ns_id} to be run after every keystroke.

        Parameters: ~
            {fn}: (function): Function to call on keystroke.
                    It should take one argument, which is a string.
                    The string will contain the literal keys typed.
                    See |i_CTRL-V|

                    If {fn} is `nil`, it removes the callback for the
                    associated {ns_id}.

            {ns_id}: (number)  Namespace ID. If not passed or 0, will generate
                     and return a new namespace ID from |nvim_create_namespace()|

        Return: ~
            (number) Namespace ID associated with {fn}

        NOTE: {fn} will be automatically removed if an error occurs while
        calling. This is to prevent the annoying situation of every keystroke
        erroring while trying to remove a broken callback.

        NOTE: {fn} will receive the keystrokes after mappings have been
        evaluated

        NOTE: {fn} will *NOT* be cleared from |nvim_buf_clear_namespace()|}
      */
  function register_keystroke_callback(): (fn: any, ns_id: any) => any;
  /** 
          Sends {event} to {channel} via |RPC| and returns immediately.
	If {channel} is 0, the event is broadcast to all channels.

	This function also works in a fast callback |lua-loop-callbacks|.}
      */
  function rpcnotify(): (channel: any, method: any, arguments?: any[]) => any;
  /** 
          Sends a request to {channel} to invoke {method} via
	|RPC| and blocks until a response is received.

	Note: NIL values as part of the return value is represented as
	|vim.NIL| special value}
      */
  function rpcrequest(): (channel: any, method: any, arguments?: any[]) => any;
  /** 
          Compares strings case-insensitively.  Returns 0, 1 or -1 if strings
        are equal, {a} is greater than {b} or {a} is lesser than {b},
        respectively.}
      */
  function stricmp(): (a: any, b: any) => any;
  /** 
          Convert byte index to UTF-32 and UTF-16 indicies. If {index} is not
        supplied, the length of the string is used. All indicies are zero-based.
        Returns two values: the UTF-32 and UTF-16 indicies respectively.

        Embedded NUL bytes are treated as terminating the string. Invalid
        UTF-8 bytes, and embedded surrogates are counted as one code
        point each. An {index} in the middle of a UTF-8 sequence is rounded
        upwards to the end of that sequence.}
      */
  function str_utfindex(): (str: any, index?: any) => any;
  /** 
          Convert UTF-32 or UTF-16 {index} to byte index. If {use_utf16} is not
        supplied, it defaults to false (use UTF-32). Returns the byte index.

        Invalid UTF-8 and NUL is treated like by |vim.str_byteindex()|. An {index}
        in the middle of a UTF-16 sequence is rounded upwards to the end of that
        sequence.}
      */
  function str_byteindex(): (str: any, index: any, use_utf16?: any) => any;
  /** 
          Schedules {callback} to be invoked soon by the main event-loop. Useful
        to avoid |textlock| or other temporary restrictions.}
      */
  function schedule(): (callback: any) => any;
  /** 
          Defers calling {fn} until {timeout} ms passes.  Use to do a one-shot timer
    that calls {fn}.

    Note: The {fn} is |schedule_wrap|ped automatically, so API functions are
    safe to call.

    Parameters: ~
        {fn}        Callback to call once {timeout} expires
        {timeout}   Time in ms to wait before calling {fn}

    Returns: ~
        |vim.loop|.new_timer() object}
      */
  function defer_fn(): (fn: any, timeout: any) => any;
  /** 
          Wait for {time} in milliseconds until {callback} returns `true`.

        Executes {callback} immediately and at approximately {interval}
        milliseconds (default 200). Nvim still processes other events during
        this time.

    Parameters: ~
        {time}      Number of milliseconds to wait
        {callback}  Optional callback. Waits until {callback} returns true
        {interval}  (Approximate) number of milliseconds to wait between polls
        {fast_only} If true, only |api-fast| events will be processed.
                        If called from while in an |api-fast| event, will
                        automatically be set to `true`.

    Returns: ~
        If {callback} returns `true` during the {time}:
            `true, nil`

        If {callback} never returns `true` during the {time}:
            `false, -1`

        If {callback} is interrupted during the {time}:
            `false, -2`

        If {callback} errors, the error is raised.

        Examples: >

    ---
    -- Wait for 100 ms, allowing other events to process
    vim.wait(100, function() end)

    ---
    -- Wait for 100 ms or until global variable set.
    vim.wait(100, function() return vim.g.waiting_for_var end)

    ---
    -- Wait for 1 second or until global variable set, checking every ~500 ms
    vim.wait(1000, function() return vim.g.waiting_for_var end, 500)

    ---
    -- Schedule a function to set a value in 100ms
    vim.defer_fn(function() vim.g.timer_result = true end, 100)

    -- Would wait ten seconds if results blocked. Actually only waits  100 ms
    if vim.wait(10000, function() return vim.g.timer_result end) then
      print('Only waiting a little bit of time!')
    end
<}
      */
  function wait(): (
    time: any,
    callback?: any,
    interval?: any,
    fast_only?: any
  ) => any;
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
}
