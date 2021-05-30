/** @noSelf **/
interface fn {
  /**
   * Return the absolute value of {expr}.  When {expr} evaluates to
   * a |Float| abs() returns a |Float|.  When {expr} can be
   * converted to a |Number| abs() returns a |Number|.  Otherwise
   * abs() gives an error message and returns -1.
   * Examples: >
   *   echo abs(1.456)
   *    1.456  >
   *   echo abs(-5.456)
   *    5.456  >
   *   echo abs(-4)
   *    4
   */
  abs: (expr: any) => any;
  /**
   * Return the arc cosine of {expr} measured in radians, as a
   * |Float| in the range of [0, pi].
   * {expr} must evaluate to a |Float| or a |Number| in the range
   * [-1, 1].
   * Examples: >
   *   :echo acos(0)
   *    1.570796 >
   *   :echo acos(-0.5)
   *    2.094395
   */
  acos: (expr: any) => any;
  /**
   * Append the item {expr} to |List| {list}.  Returns the
   * resulting |List|.  Examples: >
   *   :let alist = add([1, 2, 3], item)
   *   :call add(mylist, "woodstock")
   *  Note that when {expr} is a |List| it is appended as a single
   * item.  Use |extend()| to concatenate |Lists|.
   * Use |insert()| to add an item at another position.
   */
  add: (list: any, expr: any) => any;
  /**
   * Bitwise AND on the two arguments.  The arguments are converted
   * to a number.  A List, Dict or Float argument causes an error.
   * Example: >
   *   :let flag = and(bits, 0x80)
   */
  and: (expr1: any, expr2: any) => any;
  /**
   * Returns Dictionary of |api-metadata|.
   *
   * View it in a nice human-readable format: >
   *        :lua print(vim.inspect(vim.fn.api_info()))
   */
  api_info: () => any;
  /**
   * When {text} is a |List|: Append each item of the |List| as a
   * text line below line {lnum} in the current buffer.
   * Otherwise append {text} as one text line below line {lnum} in
   * the current buffer.
   * {lnum} can be zero to insert a line before the first one.
   * Returns 1 for failure ({lnum} out of range or out of memory),
   * 0 for success.  Example: >
   *   :let failed = append(line('$'), "# THE END")
   *   :let failed = append(0, ["Chapter 1", "the beginning"])
   */
  append: (lnum: any, text: any) => any;
  /**
   * Like |append()| but append the text in buffer {expr}.
   *
   * For the use of {expr}, see |bufname()|.
   *
   * {lnum} is used like with |append()|.  Note that using |line()|
   * would use the current buffer, not the one appending to.
   * Use "$" to append at the end of the buffer.
   *
   * On success 0 is returned, on failure 1 is returned.
   *
   * If {expr} is not a valid buffer or {lnum} is not valid, an
   * error message is given. Example: >
   *   :let failed = appendbufline(13, 0, "# THE START")
   *
   */
  appendbufline: (expr: any, lnum: any, text: any) => any;
  /**
   * The result is the number of files in the argument list.  See
   * |arglist|.
   * If {winid} is not supplied, the argument list of the current
   * window is used.
   * If {winid} is -1, the global argument list is used.
   * Otherwise {winid} specifies the window of which the argument
   * list is used: either the window number or the window ID.
   * Returns -1 if the {winid} argument is invalid.
   */
  argc: (winid?: any) => any;
  /**
   * The result is the current index in the argument list.  0 is
   *     the first file.  argc() - 1 is the last one.  See |arglist|.
   */
  argidx: () => any;
  /**
   * Return the argument list ID.  This is a number which
   * identifies the argument list being used.  Zero is used for the
   * global argument list.  See |arglist|.
   * Returns -1 if the arguments are invalid.
   *
   * Without arguments use the current window.
   * With {winnr} only use this window in the current tab page.
   * With {winnr} and {tabnr} use the window in the specified tab
   * page.
   * {winnr} can be the window number or the |window-ID|.
   */
  arglistid: (winnr?: any, tabnr?: any) => any;
  /**
   * The result is the {nr}th file in the argument list.  See
   * |arglist|.  "argv(0)" is the first one.  Example: >
   * et i = 0
   * hile i < argc()
   *  let f = escape(fnameescape(argv(i)), '.')
   *  exe 'amenu Arg.' . f . ' :e ' . f . '<CR>'
   *  let i = i + 1
   * ndwhile
   *  Without the {nr} argument, or when {nr} is -1, a |List| with
   * the whole |arglist| is returned.
   *
   * The {winid} argument specifies the window ID, see |argc()|.
   * For the Vim command line arguments see |v:argv|.
   */
  argv: (nr?: any, winid?: any) => any;
  /**
   * Run {cmd} and add an error message to |v:errors| if it does
   * NOT produce a beep or visual bell.
   * Also see |assert_fails()| and |assert-return|.
   */
  assert_beeps: (cmd: any) => any;
  /**
   * When {expected} and {actual} are not equal an error message is
   * added to |v:errors| and 1 is returned.  Otherwise zero is
   * returned |assert-return|.
   * There is no automatic conversion, the String "4" is different
   * from the Number 4.  And the number 4 is different from the
   * Float 4.0.  The value of 'ignorecase' is not used here, case
   * always matters.
   * When {msg} is omitted an error in the form "Expected
   * {expected} but got {actual}" is produced.
   * Example: >
   * sert_equal('foo', 'bar')
   *  Will result in a string to be added to |v:errors|:
   * st.vim line 12: Expected 'foo' but got 'bar' ~
   */
  assert_equal: (expected: any, actual: any, msg?: any) => any;
  /**
   * When the files {fname-one} and {fname-two} do not contain
   * exactly the same text an error message is added to |v:errors|.
   * Also see |assert-return|.
   * When {fname-one} or {fname-two} does not exist the error will
   * mention that.
   */
  assert_equalfile: (fname_one: any, fname_two: any, msg?: any) => any;
  /**
   * When v:exception does not contain the string {error} an error
   * message is added to |v:errors|.  Also see |assert-return|.
   * This can be used to assert that a command throws an exception.
   * Using the error number, followed by a colon, avoids problems
   * with translations: >
   *   try
   *     commandthatfails
   *     call assert_false(1, 'command should have failed')
   *   catch
   *     call assert_exception('E492:')
   *   endtry
   */
  assert_exception: (error: any, msg?: any) => any;
  /**
   * Run {cmd} and add an error message to |v:errors| if it does
   * NOT produce an error.  Also see |assert-return|.
   * When {error} is given it must match in |v:errmsg|.
   * Note that beeping is not considered an error, and some failing
   * commands only beep.  Use |assert_beeps()| for those.
   */
  assert_fails: (cmd: any, error?: any, msg?: any) => any;
  /**
   * When {actual} is not false an error message is added to
   * |v:errors|, like with |assert_equal()|.
   * Also see |assert-return|.
   * A value is false when it is zero or |v:false|. When "{actual}"
   * is not a number or |v:false| the assert fails.
   * When {msg} is omitted an error in the form
   * "Expected False but got {actual}" is produced.
   */
  assert_false: (actual: any, msg?: any) => any;
  /**
   * This asserts number and |Float| values.  When {actual}  is lower
   * than {lower} or higher than {upper} an error message is added
   * to |v:errors|.  Also see |assert-return|.
   * When {msg} is omitted an error in the form
   * "Expected range {lower} - {upper}, but got {actual}" is
   * produced.
   */
  assert_inrange: (lower: any, upper: any, actual: any, msg?: any) => any;
  /**
   * When {pattern} does not match {actual} an error message is
   * added to |v:errors|.  Also see |assert-return|.
   *
   * {pattern} is used as with |=~|: The matching is always done
   * like 'magic' was set and 'cpoptions' is empty, no matter what
   * the actual value of 'magic' or 'cpoptions' is.
   *
   * {actual} is used as a string, automatic conversion applies.
   * Use "^" and "$" to match with the start and end of the text.
   * Use both to match the whole text.
   *
   * When {msg} is omitted an error in the form
   * "Pattern {pattern} does not match {actual}" is produced.
   * Example: >
   * sert_match('^f.*o$', 'foobar')
   *  Will result in a string to be added to |v:errors|:
   * st.vim line 12: Pattern '^f.*o$' does not match 'foobar' ~
   */
  assert_match: (pattern: any, actual: any, msg?: any) => any;
  /**
   * The opposite of `assert_equal()`: add an error message to
   * |v:errors| when {expected} and {actual} are equal.
   * Also see |assert-return|.
   */
  assert_notequal: (expected: any, actual: any, msg?: any) => any;
  /**
   * The opposite of `assert_match()`: add an error message to
   * |v:errors| when {pattern} matches {actual}.
   * Also see |assert-return|.
   */
  assert_notmatch: (pattern: any, actual: any, msg?: any) => any;
  /**
   * Report a test failure directly, using {msg}.
   * Always returns one.
   */
  assert_report: (msg: any) => any;
  /**
   * When {actual} is not true an error message is added to
   * |v:errors|, like with |assert_equal()|.
   * Also see |assert-return|.
   * A value is |TRUE| when it is a non-zero number or |v:true|.
   * When {actual} is not a number or |v:true| the assert fails.
   * When {msg} is omitted an error in the form "Expected True but
   * got {actual}" is produced.
   */
  assert_true: (actual: any, msg?: any) => any;
  /**
   * Return the arc sine of {expr} measured in radians, as a |Float|
   * in the range of [-pi/2, pi/2].
   * {expr} must evaluate to a |Float| or a |Number| in the range
   * [-1, 1].
   * Examples: >
   *   :echo asin(0.8)
   *    0.927295 >
   *   :echo asin(-0.5)
   *    -0.523599
   */
  asin: (expr: any) => any;
  /**
   * Return the principal value of the arc tangent of {expr}, in
   * the range [-pi/2, +pi/2] radians, as a |Float|.
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo atan(100)
   *    1.560797 >
   *   :echo atan(-4.01)
   *    -1.326405
   */
  atan: (expr: any) => any;
  /**
   * Return the arc tangent of {expr1} / {expr2}, measured in
   * radians, as a |Float| in the range [-pi, pi].
   * {expr1} and {expr2} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo atan2(-1, 1)
   *    -0.785398 >
   *   :echo atan2(1, -1)
   *    2.356194
   */
  atan2: (expr1: any, expr2: any) => any;
  /**
   * Put up a file requester.  This only works when "has("browse")"
   * returns |TRUE| (only in some GUI versions).
   * The input fields are:
   *     {save}  when |TRUE|, select file to write
   *     {title}  title for the requester
   *     {initdir}  directory to start browsing in
   *     {default}  default file name
   * When the "Cancel" button is hit, something went wrong, or
   * browsing is not possible, an empty string is returned.
   */
  browse: (save: any, title: any, initdir: any, arg_default: any) => any;
  /**
   * Put up a directory requester.  This only works when
   * "has("browse")" returns |TRUE| (only in some GUI versions).
   * On systems where a directory browser is not supported a file
   * browser is used.  In that case: select a file in the directory
   * to be used.
   * The input fields are:
   *     {title}  title for the requester
   *     {initdir}  directory to start browsing in
   * When the "Cancel" button is hit, something went wrong, or
   * browsing is not possible, an empty string is returned.
   */
  browsedir: (title: any, initdir: any) => any;
  /**
   * Add a buffer to the buffer list with {name}.
   * If a buffer for file {name} already exists, return that buffer
   * number.  Otherwise return the buffer number of the newly
   * created buffer.  When {name} is an empty string then a new
   * buffer is always created.
   * The buffer will not have' 'buflisted' set.
   */
  bufadd: (name: any) => any;
  /**
   * The result is a Number, which is |TRUE| if a buffer called
   * {expr} exists.
   * If the {expr} argument is a number, buffer numbers are used.
   * Number zero is the alternate buffer for the current window.
   *
   * If the {expr} argument is a string it must match a buffer name
   * exactly.  The name can be:
   * - Relative to the current directory.
   * - A full path.
   * - The name of a buffer with 'buftype' set to "nofile".
   * - A URL name.
   * Unlisted buffers will be found.
   * Note that help files are listed by their short name in the
   * output of |:buffers|, but bufexists() requires using their
   * long name to be able to find them.
   * bufexists() may report a buffer exists, but to use the name
   * with a |:buffer| command you may need to use |expand()|.  Esp
   * for MS-Windows 8.3 names in the form "c:\DOCUME~1"
   * Use "bufexists(0)" to test for the existence of an alternate
   * file name.
   */
  bufexists: (expr: any) => any;
  /**
   * The result is a Number, which is |TRUE| if a buffer called
   * {expr} exists and is listed (has the 'buflisted' option set).
   * The {expr} argument is used like with |bufexists()|.
   */
  buflisted: (expr: any) => any;
  /**
   * Ensure the buffer {expr} is loaded.  When the buffer name
   * refers to an existing file then the file is read.  Otherwise
   * the buffer will be empty.  If the buffer was already loaded
   * then there is no change.
   * If there is an existing swap file for the file of the buffer,
   * there will be no dialog, the buffer will be loaded anyway.
   * The {expr} argument is used like with |bufexists()|.
   */
  bufload: (expr: any) => any;
  /**
   * The result is a Number, which is |TRUE| if a buffer called
   * {expr} exists and is loaded (shown in a window or hidden).
   * The {expr} argument is used like with |bufexists()|.
   */
  bufloaded: (expr: any) => any;
  /**
   * The result is the name of a buffer, as it is displayed by the
   * ":ls" command.
   *  If {expr} is omitted the current buffer is used.
   * If {expr} is a Number, that buffer number's name is given.
   * Number zero is the alternate buffer for the current window.
   * If {expr} is a String, it is used as a |file-pattern| to match
   * with the buffer names.  This is always done like 'magic' is
   * set and 'cpoptions' is empty.  When there is more than one
   * match an empty string is returned.
   * "" or "%" can be used for the current buffer, "#" for the
   * alternate buffer.
   * A full match is preferred, otherwise a match at the start, end
   * or middle of the buffer name is accepted.  If you only want a
   * full match then put "^" at the start and "$" at the end of the
   * pattern.
   * Listed buffers are found first.  If there is a single match
   * with a listed buffer, that one is returned.  Next unlisted
   * buffers are searched for.
   * If the {expr} is a String, but you want to use it as a buffer
   * number, force it to be a Number by adding zero to it: >
   *   :echo bufname("3" + 0)
   *  If the buffer doesn't exist, or doesn't have a name, an empty
   * string is returned. >
   * fname("#")    alternate buffer name
   * fname(3)    name of buffer 3
   * fname("%")    name of current buffer
   * fname("file2")  name of buffer where "file2" matches.
   */
  bufname: (expr?: any) => any;
  /**
   * The result is the number of a buffer, as it is displayed by
   * the ":ls" command.  For the use of {expr}, see |bufname()|
   * above.
   * If the buffer doesn't exist, -1 is returned.  Or, if the
   * {create} argument is present and not zero, a new, unlisted,
   * buffer is created and its number is returned.
   * bufnr("$") is the last buffer: >
   *   :let last_buffer = bufnr("$")
   *  The result is a Number, which is the highest buffer number
   * of existing buffers.  Note that not all buffers with a smaller
   * number necessarily exist, because ":bwipeout" may have removed
   * them.  Use bufexists() to test for the existence of a buffer.
   */
  bufnr: (expr?: any, create?: any) => any;
  /**
   * The result is a Number, which is the |window-ID| of the first
   * window associated with buffer {expr}.  For the use of {expr},
   * see |bufname()| above.  If buffer {expr} doesn't exist or
   * there is no such window, -1 is returned.  Example: >
   *
   * ho "A window containing buffer 1 is " . (bufwinid(1))
   *
   * Only deals with the current tab page.
   */
  bufwinid: (expr: any) => any;
  /**
   * The result is a Number, which is the number of the first
   * window associated with buffer {expr}.  For the use of {expr},
   * see |bufname()| above.  If buffer {expr} doesn't exist or
   * there is no such window, -1 is returned.  Example: >
   *
   * ho "A window containing buffer 1 is " . (bufwinnr(1))
   *
   *  The number can be used with |CTRL-W_w| and ":wincmd w"
   * |:wincmd|.
   * Only deals with the current tab page.
   */
  bufwinnr: (expr: any) => any;
  /**
   * Return the line number that contains the character at byte
   * count {byte} in the current buffer.  This includes the
   * end-of-line character, depending on the 'fileformat' option
   * for the current buffer.  The first character has byte count
   * one.
   * Also see |line2byte()|, |go| and |:goto|.
   */
  byte2line: (byte: any) => any;
  /**
   * Return byte index of the {nr}'th character in the string
   * {expr}.  Use zero for the first character, it then returns
   * zero.
   * This function is only useful when there are multibyte
   * characters, otherwise the returned value is equal to {nr}.
   * Composing characters are not counted separately, their byte
   * length is added to the preceding base character.  See
   * |byteidxcomp()| below for counting composing characters
   * separately.
   * Example : >
   *   echo matchstr(str, ".", byteidx(str, 3))
   *  will display the fourth character.  Another way to do the
   * same: >
   *   let s = strpart(str, byteidx(str, 3))
   *   echo strpart(s, 0, byteidx(s, 1))
   *  Also see |strgetchar()| and |strcharpart()|.
   *
   * If there are less than {nr} characters -1 is returned.
   * If there are exactly {nr} characters the length of the string
   * in bytes is returned.
   */
  byteidx: (expr: any, nr: any) => any;
  /**
   * Like byteidx(), except that a composing character is counted
   * as a separate character.  Example: >
   *   let s = 'e' . nr2char(0x301)
   *   echo byteidx(s, 1)
   *   echo byteidxcomp(s, 1)
   *   echo byteidxcomp(s, 2)
   *  The first and third echo result in 3 ('e' plus composing
   * character is 3 bytes), the second echo results in 1 ('e' is
   * one byte).
   */
  byteidxcomp: (expr: any, nr: any) => any;
  /**
   * Call function {func} with the items in |List| {arglist} as
   * arguments.
   * {func} can either be a |Funcref| or the name of a function.
   * a:firstline and a:lastline are set to the cursor line.
   * Returns the return value of the called function.
   * {dict} is for functions with the "dict" attribute.  It will be
   * used to set the local variable "self". |Dictionary-function|
   */
  call: (func: any, arglist: any, dict?: any) => any;
  /**
   * Return the smallest integral value greater than or equal to
   * {expr} as a |Float| (round up).
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   echo ceil(1.456)
   *    2.0  >
   *   echo ceil(-5.456)
   *    -5.0  >
   *   echo ceil(4.0)
   *    4.0
   */
  ceil: (expr: any) => any;
  /**
   * Return the number of the most recent change.  This is the same
   * number as what is displayed with |:undolist| and can be used
   * with the |:undo| command.
   * When a change was made it is the number of that change.  After
   * redo it is the number of the redone change.  After undo it is
   * one less than the number of the undone change.
   */
  changenr: () => any;
  /**
   * Close a channel or a specific stream associated with it.
   * For a job, {stream} can be one of "stdin", "stdout",
   * "stderr" or "rpc" (closes stdin/stdout for a job started
   * with `"rpc":v:true`) If {stream} is omitted, all streams
   * are closed. If the channel is a pty, this will then close the
   * pty master, sending SIGHUP to the job process.
   * For a socket, there is only one stream, and {stream} should be
   * ommited.
   */
  chanclose: (id: any, stream?: any) => any;
  /**
   * Send data to channel {id}. For a job, it writes it to the
   * stdin of the process. For the stdio channel |channel-stdio|,
   * it writes to Nvim's stdout.  Returns the number of bytes
   * written if the write succeeded, 0 otherwise.
   * See |channel-bytes| for more information.
   *
   * {data} may be a string, string convertible, or a list.  If
   * {data} is a list, the items will be joined by newlines; any
   * newlines in an item will be sent as NUL. To send a final
   * newline, include a final empty string. Example: >
   *   :call chansend(id, ["abc", "123\n456", ""])
   *   will send "abc<NL>123<NUL>456<NL>".
   *
   * chansend() writes raw data, not RPC messages.  If the channel
   * was created with `"rpc":v:true` then the channel expects RPC
   * messages, use |rpcnotify()| and |rpcrequest()| instead.
   */
  chansend: (id: any, data: any) => any;
  /**
   * Return number value of the first char in {expr}.  Examples: >
   *   char2nr(" ")    returns 32
   *   char2nr("ABC")    returns 65
   *   char2nr("á")    returns 225
   *   char2nr("á"[0])    returns 195
   *   char2nr("\<M-x>")  returns 128
   *  Non-ASCII characters are always treated as UTF-8 characters.
   * {utf8} is ignored, it exists only for backwards-compatibility.
   * A combining character is a separate character.
   * |nr2char()| does the opposite.
   */
  char2nr: (expr: any, utf8?: any) => any;
  /**
   * Return the character index of the byte at {idx} in {string}.
   * The index of the first character is zero.
   * If there are no multibyte characters the returned value is
   * equal to {idx}.
   * When {countcc} is omitted or zero, then composing characters
   * are not counted separately, their byte length is added to the
   * preceding base character.
   * When {countcc} is set to 1, then composing characters are
   * counted as separate characters.
   * Returns -1 if the arguments are invalid or if {idx} is greater
   * than the index of the last byte in {string}.  An error is
   * given if the first argument is not a string, the second
   * argument is not a number or when the third argument is present
   * and is not zero or one.
   * See |byteidx()| and |byteidxcomp()| for getting the byte index
   * from the character index.
   * Examples: >
   *   echo charidx('áb́ć', 3)    returns 1
   *   echo charidx('áb́ć', 6, 1)  returns 4
   *   echo charidx('áb́ć', 16)    returns -1
   */
  charidx: (string: any, idx: any, countcc?: any) => any;
  /**
   * Get the amount of indent for line {lnum} according the C
   * indenting rules, as with 'cindent'.
   * The indent is counted in spaces, the value of 'tabstop' is
   * relevant.  {lnum} is used just like in |getline()|.
   * When {lnum} is invalid -1 is returned.
   * See |C-indenting|.
   */
  cindent: (lnum: any) => any;
  /**
   * Clears all matches previously defined for the current window
   * by |matchadd()| and the |:match| commands.
   * f {win} is specified, use the window with this number or
   * indow ID instead of the current window.
   */
  clearmatches: (win?: any) => any;
  /**
   * The result is a Number, which is the byte index of the column
   *     position given with {expr}.  The accepted positions are:
   *         .      the cursor position
   *         $      the end of the cursor line (the result is the
   *           number of bytes in the cursor line plus one)
   *         'x      position of mark x (if the mark is not set, 0 is
   *           returned)
   *         v       In Visual mode: the start of the Visual area (the
   *           cursor is the end).  When not in Visual mode
   *           returns the cursor position.  Differs from |'<| in
   *           that it's updated right away.
   *     Additionally {expr} can be [lnum, col]: a |List| with the line
   *     and column number. Most useful when the column is "$", to get
   *     the last column of a specific line.  When "lnum" or "col" is
   *     out of range then col() returns zero.
   *     To get the line number use |line()|.  To get both use
   *     |getpos()|.
   *     For the screen column position use |virtcol()|.
   *     Note that only marks in the current file can be used.
   *     Examples: >
   *       col(".")    column of cursor
   *       col("$")    length of cursor line plus one
   *       col("'t")    column of mark t
   *       col("'" . markname)  column of mark markname
   * <    The first column is 1.  0 is returned for an error.
   *     For an uppercase mark the column may actually be in another
   *     buffer.
   *     For the cursor position, when 'virtualedit' is active, the
   *     column is one higher if the cursor is after the end of the
   *     line.  This can be used to obtain the column in Insert mode: >
   *       :imap <F2> <C-O>:let save_ve = &ve<CR>
   *         \<C-O>:set ve=all<CR>
   *         \<C-O>:echo col(".") . "\n" <Bar>
   *         \let &ve = save_ve<CR>
   * <
   */
  col: (expr: any) => any;
  /**
   * Set the matches for Insert mode completion.
   * Can only be used in Insert mode.  You need to use a mapping
   * with CTRL-R = (see |i_CTRL-R|).  It does not work after CTRL-O
   * or with an expression mapping.
   * {startcol} is the byte offset in the line where the completed
   * text start.  The text up to the cursor is the original text
   * that will be replaced by the matches.  Use col('.') for an
   * empty string.  "col('.') - 1" will replace one character by a
   * match.
   * {matches} must be a |List|.  Each |List| item is one match.
   * See |complete-items| for the kind of items that are possible.
   * Note that the after calling this function you need to avoid
   * inserting anything that would cause completion to stop.
   * The match can be selected with CTRL-N and CTRL-P as usual with
   * Insert mode completion.  The popup menu will appear if
   * specified, see |ins-completion-menu|.
   * Example: >
   * oremap <F5> <C-R>=ListMonths()<CR>
   *
   * nc! ListMonths()
   * call complete(col('.'), ['January', 'February', 'March',
   * \ 'April', 'May', 'June', 'July', 'August', 'September',
   * \ 'October', 'November', 'December'])
   * return ''
   * dfunc
   *  This isn't very useful, but it shows how it works.  Note that
   * an empty string is returned to avoid a zero being inserted.
   */
  complete: (startcol: any, matches: any) => any;
  /**
   * Add {expr} to the list of matches.  Only to be used by the
   * function specified with the 'completefunc' option.
   * Returns 0 for failure (empty string or out of memory),
   * 1 when the match was added, 2 when the match was already in
   * the list.
   * See |complete-functions| for an explanation of {expr}.  It is
   * the same as one item in the list that 'omnifunc' would return.
   */
  complete_add: (expr: any) => any;
  /**
   * Check for a key typed while looking for completion matches.
   * This is to be used when looking for matches takes some time.
   * Returns |TRUE| when searching for matches is to be aborted,
   * zero otherwise.
   * Only to be used by the function specified with the
   * 'completefunc' option.
   */
  complete_check: () => any;
  /**
   * Returns a Dictionary with information about Insert mode
   * completion.  See |ins-completion|.
   * The items are:
   *    mode    Current completion mode name string.
   *     See |complete_info_mode| for the values.
   *    pum_visible  |TRUE| if popup menu is visible.
   *     See |pumvisible()|.
   *    items  List of completion matches.  Each item is a
   *     dictionary containing the entries "word",
   *     "abbr", "menu", "kind", "info" and "user_data".
   *     See |complete-items|.
   *    selected  Selected item index.  First index is zero.
   *     Index is -1 if no item is selected (showing
   *     typed text only)
   *    inserted  Inserted string. [NOT IMPLEMENT YET]
   */
  complete_info: (what?: any) => any;
  /**
   * mode values are:
   *        ""         Not in completion mode
   *        "keyword"       Keyword completion |i_CTRL-X_CTRL-N|
   *        "ctrl_x"       Just pressed CTRL-X |i_CTRL-X|
   *        "whole_line"       Whole lines |i_CTRL-X_CTRL-L|
   *        "files"       File names |i_CTRL-X_CTRL-F|
   *        "tags"       Tags |i_CTRL-X_CTRL-]|
   *        "path_defines"    Definition completion |i_CTRL-X_CTRL-D|
   *        "path_patterns"   Include completion |i_CTRL-X_CTRL-I|
   *        "dictionary"       Dictionary |i_CTRL-X_CTRL-K|
   *        "thesaurus"       Thesaurus |i_CTRL-X_CTRL-T|
   *        "cmdline"       Vim Command line |i_CTRL-X_CTRL-V|
   *        "function"       User defined completion |i_CTRL-X_CTRL-U|
   *        "omni"       Omni completion |i_CTRL-X_CTRL-O|
   *        "spell"       Spelling suggestions |i_CTRL-X_s|
   *        "eval"            |complete()| completion
   *        "unknown"       Other internal modes
   *
   *     If the optional {what} list argument is supplied, then only
   *     the items listed in {what} are returned.  Unsupported items in
   *     {what} are silently ignored.
   *
   *     To get the position and size of the popup menu, see
   *     |pum_getpos()|. It's also available in |v:event| during the
   *     |CompleteChanged| event.
   *
   *     Examples: >
   *       " Get all items
   *       call complete_info()
   *       " Get only 'mode'
   *       call complete_info(['mode'])
   *       " Get only 'mode' and 'pum_visible'
   *       call complete_info(['mode', 'pum_visible'])
   * <
   */
  complete_info_mode: any;
  /**
   * Confirm() offers the user a dialog, from which a choice can be
   * made.  It returns the number of the choice.  For the first
   * choice this is 1.
   *
   * {msg} is displayed in a dialog with {choices} as the
   * alternatives.  When {choices} is missing or empty, "&OK" is
   * used (and translated).
   * {msg} is a String, use '\n' to include a newline.  Only on
   * some systems the string is wrapped when it doesn't fit.
   *
   * {choices} is a String, with the individual choices separated
   * by '\n', e.g. >
   *   confirm("Save changes?", "&Yes\n&No\n&Cancel")
   *  The letter after the '&' is the shortcut key for that choice.
   * Thus you can type 'c' to select "Cancel".  The shortcut does
   * not need to be the first letter: >
   *   confirm("file has been modified", "&Save\nSave &All")
   *  For the console, the first letter of each choice is used as
   * the default shortcut key.
   *
   * The optional {default} argument is the number of the choice
   * that is made if the user hits <CR>.  Use 1 to make the first
   * choice the default one.  Use 0 to not set a default.  If
   * {default} is omitted, 1 is used.
   *
   * The optional {type} argument gives the type of dialog.  This
   * is only used for the icon of the Win32 GUI.  It can be one of
   * these values: "Error", "Question", "Info", "Warning" or
   * "Generic".  Only the first character is relevant.
   * When {type} is omitted, "Generic" is used.
   *
   * If the user aborts the dialog by pressing <Esc>, CTRL-C,
   * or another valid interrupt key, confirm() returns 0.
   *
   * An example: >
   * let choice = confirm("What do you want?", "&Apples\n&Oranges\n&Bananas", 2)
   * if choice == 0
   *   echo "make up your mind!"
   * elseif choice == 3
   *   echo "tasteful"
   * else
   *   echo "I prefer bananas myself."
   * endif
   *  In a GUI dialog, buttons are used.  The layout of the buttons
   * depends on the 'v' flag in 'guioptions'.  If it is included,
   * the buttons are always put vertically.  Otherwise,  confirm()
   * tries to put the buttons in one horizontal line.  If they
   * don't fit, a vertical layout is used anyway.  For some systems
   * the horizontal layout is always used.
   */
  confirm: (msg: any, choices?: any, arg_default?: any, type?: any) => any;
  /**
   * Make a copy of {expr}.  For Numbers and Strings this isn't
   *     different from using {expr} directly.
   *     When {expr} is a |List| a shallow copy is created.  This means
   *     that the original |List| can be changed without changing the
   *     copy, and vice versa.  But the items are identical, thus
   *     changing an item changes the contents of both |Lists|.
   *     A |Dictionary| is copied in a similar way as a |List|.
   *     Also see |deepcopy()|.
   */
  copy: (expr: any) => any;
  /**
   * Return the cosine of {expr}, measured in radians, as a |Float|.
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo cos(100)
   *    0.862319 >
   *   :echo cos(-4.01)
   *    -0.646043
   */
  cos: (expr: any) => any;
  /**
   * Return the hyperbolic cosine of {expr} as a |Float| in the range
   * [1, inf].
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo cosh(0.5)
   *    1.127626 >
   *   :echo cosh(-0.5)
   *    -1.127626
   */
  cosh: (expr: any) => any;
  /**
   * Return the number of times an item with value {expr} appears
   * in |String|, |List| or |Dictionary| {comp}.
   *
   * If {start} is given then start with the item with this index.
   * {start} can only be used with a |List|.
   *
   * When {ic} is given and it's |TRUE| then case is ignored.
   *
   * When {comp} is a string then the number of not overlapping
   * occurrences of {expr} is returned. Zero is returned when
   * {expr} is an empty string.
   */
  count: (comp: any, expr: any, ic?: any, start?: any) => any;
  /**
   * Checks for the existence of a |cscope| connection.  If no
   * parameters are specified, then the function returns:
   *   0, if cscope was not available (not compiled in), or
   *      if there are no cscope connections;
   *   1, if there is at least one cscope connection.
   *
   * If parameters are specified, then the value of {num}
   * determines how existence of a cscope connection is checked:
   *
   * {num}  Description of existence check
   * -----  ------------------------------
   * 0  Same as no parameters (e.g., "cscope_connection()").
   * 1  Ignore {prepend}, and use partial string matches for
   *   {dbpath}.
   * 2  Ignore {prepend}, and use exact string matches for
   *   {dbpath}.
   * 3  Use {prepend}, use partial string matches for both
   *   {dbpath} and {prepend}.
   * 4  Use {prepend}, use exact string matches for both
   *   {dbpath} and {prepend}.
   *
   * Note: All string comparisons are case sensitive!
   *
   * Examples.  Suppose we had the following (from ":cs show"): >
   *
   * pid    database name      prepend path
   * 27664  cscope.out        /usr/local
   *
   * Invocation          Return Val ~
   * ----------          ---------- >
   * cscope_connection()          1
   * cscope_connection(1, "out")        1
   * cscope_connection(2, "out")        0
   * cscope_connection(3, "out")        0
   * cscope_connection(3, "out", "local")      1
   * cscope_connection(4, "out")        0
   * cscope_connection(4, "out", "local")      0
   * cscope_connection(4, "cscope.out", "/usr/local")  1
   *
   */
  cscope_connection: (num?: any, dbpath?: any, prepend?: any) => any;
  /**
   * Returns a |Dictionary| representing the |context| at {index}
   * from the top of the |context-stack| (see |context-dict|).
   * If {index} is not given, it is assumed to be 0 (i.e.: top).
   */
  ctxget: (index?: any) => any;
  /**
   * Pops and restores the |context| at the top of the
   * |context-stack|.
   */
  ctxpop: () => any;
  /**
   * Pushes the current editor state (|context|) on the
   * |context-stack|.
   * If {types} is given and is a |List| of |String|s, it specifies
   * which |context-types| to include in the pushed context.
   * Otherwise, all context types are included.
   */
  ctxpush: (types?: any) => any;
  /**
   * Sets the |context| at {index} from the top of the
   * |context-stack| to that represented by {context}.
   * {context} is a Dictionary with context data (|context-dict|).
   * If {index} is not given, it is assumed to be 0 (i.e.: top).
   */
  ctxset: (context: any, index?: any) => any;
  /**
   * Returns the size of the |context-stack|.
   */
  ctxsize: () => any;
  /**
   * cursor({list})
   *     Positions the cursor at the column (byte count) {col} in the
   *     line {lnum}.  The first column is one.
   *
   *     When there is one argument {list} this is used as a |List|
   *     with two, three or four item:
   *       [{lnum}, {col}]
   *       [{lnum}, {col}, {off}]
   *       [{lnum}, {col}, {off}, {curswant}]
   *     This is like the return value of |getpos()| or |getcurpos()|,
   *     but without the first item.
   *
   *     Does not change the jumplist.
   *     If {lnum} is greater than the number of lines in the buffer,
   *     the cursor will be positioned at the last line in the buffer.
   *     If {lnum} is zero, the cursor will stay in the current line.
   *     If {col} is greater than the number of bytes in the line,
   *     the cursor will be positioned at the last character in the
   *     line.
   *     If {col} is zero, the cursor will stay in the current column.
   *     If {curswant} is given it is used to set the preferred column
   *     for vertical movement.  Otherwise {col} is used.
   *
   *     When 'virtualedit' is used {off} specifies the offset in
   *     screen columns from the start of the character.  E.g., a
   *     position within a <Tab> or after the last character.
   *     Returns 0 when the position could be set, -1 otherwise.
   */
  cursor: (lnum: any, col: any, off?: any) => any;
  /**
   * Make a copy of {expr}.  For Numbers and Strings this isn't
   * different from using {expr} directly.
   * When {expr} is a |List| a full copy is created.  This means
   * that the original |List| can be changed without changing the
   * copy, and vice versa.  When an item is a |List|, a copy for it
   * is made, recursively.  Thus changing an item in the copy does
   * not change the contents of the original |List|.
   * When {noref} is omitted or zero a contained |List| or
   * |Dictionary| is only copied once.  All references point to
   * this single copy.  With {noref} set to 1 every occurrence of a
   * |List| or |Dictionary| results in a new copy.  This also means
   * that a cyclic reference causes deepcopy() to fail.
   */
  deepcopy: (expr: any, noref?: any) => any;
  /**
   * Nesting is possible up to 100 levels.  When there is an item
   *     that refers back to a higher level making a deep copy with
   *     {noref} set to 1 will fail.
   *     Also see |copy()|.
   */
  E724: any;
  /**
   * Without {flags} or with {flags} empty: Deletes the file by the
   * name {fname}.  This also works when {fname} is a symbolic link.
   * A symbolic link itself is deleted, not what it points to.
   *
   * When {flags} is "d": Deletes the directory by the name
   * {fname}.  This fails when directory {fname} is not empty.
   *
   * When {flags} is "rf": Deletes the directory by the name
   * {fname} and everything in it, recursively.  BE CAREFUL!
   * Note: on MS-Windows it is not possible to delete a directory
   * that is being used.
   *
   * The result is a Number, which is 0 if the delete operation was
   * successful and -1 when the deletion failed or partly failed.
   */
  delete: (fname: any, flags?: any) => any;
  /**
   * Delete lines {first} to {last} (inclusive) from buffer {expr}.
   * If {last} is omitted then delete line {first} only.
   * On success 0 is returned, on failure 1 is returned.
   *
   * For the use of {expr}, see |bufname()| above.
   *
   * {first} and {last} are used like with |setline()|. Note that
   * when using |line()| this refers to the current buffer. Use "$"
   * to refer to the last line in buffer {expr}.
   */
  deletebufline: (expr: any, first: any, last?: any) => any;
  /**
   * Adds a watcher to a dictionary. A dictionary watcher is
   * identified by three components:
   *
   * - A dictionary({dict});
   * - A key pattern({pattern}).
   * - A function({callback}).
   *
   * After this is called, every change on {dict} and on keys
   * matching {pattern} will result in {callback} being invoked.
   *
   * For example, to watch all global variables: >
   *   silent! call dictwatcherdel(g:, '*', 'OnDictChanged')
   *   function! OnDictChanged(d,k,z)
   *     echomsg string(a:k) string(a:z)
   *   endfunction
   *   call dictwatcheradd(g:, '*', 'OnDictChanged')
   *
   * For now {pattern} only accepts very simple patterns that can
   * contain a '*' at the end of the string, in which case it will
   * match every key that begins with the substring before the '*'.
   * That means if '*' is not the last character of {pattern}, only
   * keys that are exactly equal as {pattern} will be matched.
   *
   * The {callback} receives three arguments:
   *
   * - The dictionary being watched.
   * - The key which changed.
   * - A dictionary containing the new and old values for the key.
   *
   * The type of change can be determined by examining the keys
   * present on the third argument:
   *
   * - If contains both `old` and `new`, the key was updated.
   * - If it contains only `new`, the key was added.
   * - If it contains only `old`, the key was deleted.
   *
   * This function can be used by plugins to implement options with
   * validation and parsing logic.
   */
  dictwatcheradd: (dict: any, pattern: any, callback: any) => any;
  /**
   * Removes a watcher added  with |dictwatcheradd()|. All three
   * arguments must match the ones passed to |dictwatcheradd()| in
   * order for the watcher to be successfully deleted.
   */
  dictwatcherdel: (dict: any, pattern: any, callback: any) => any;
  /**
   * Returns |TRUE| when autocommands are being executed and the
   *     FileType event has been triggered at least once.  Can be used
   *     to avoid triggering the FileType event again in the scripts
   *     that detect the file type. |FileType|
   *     Returns |FALSE| when `:setf FALLBACK` was used.
   *     When editing another file, the counter is reset, thus this
   *     really checks if the FileType event has been triggered for the
   *     current buffer.  This allows an autocommand that starts
   *     editing another buffer to set 'filetype' and load a syntax
   *     file.
   */
  did_filetype: () => any;
  /**
   * Returns the number of filler lines above line {lnum}.
   * These are the lines that were inserted at this point in
   * another diff'ed window.  These filler lines are shown in the
   * display but don't exist in the buffer.
   * {lnum} is used like with |getline()|.  Thus "." is the current
   * line, "'m" mark m, etc.
   * Returns 0 if the current window is not in diff mode.
   */
  diff_filler: (lnum: any) => any;
  /**
   * Returns the highlight ID for diff mode at line {lnum} column
   * {col} (byte index).  When the current line does not have a
   * diff change zero is returned.
   * {lnum} is used like with |getline()|.  Thus "." is the current
   * line, "'m" mark m, etc.
   * {col} is 1 for the leftmost column, {lnum} is 1 for the first
   * line.
   * The highlight ID can be used with |synIDattr()| to obtain
   * syntax information about the highlighting.
   */
  diff_hlID: (lnum: any, col: any) => any;
  /**
   * Return all of environment variables as dictionary. You can
   * check if an environment variable exists like this: >
   *   :echo has_key(environ(), 'HOME')
   *  Note that the variable name may be CamelCase; to ignore case
   * use this: >
   *   :echo index(keys(environ()), 'HOME', 0, 1) != -1
   */
  environ: () => any;
  /**
   * Return the Number 1 if {expr} is empty, zero otherwise.
   * A |List| or |Dictionary| is empty when it does not have any
   * items.  A Number is empty when its value is zero.  Special
   * variable is empty when it is |v:false| or |v:null|.
   */
  empty: (expr: any) => any;
  /**
   * Escape the characters in {chars} that occur in {string} with a
   * backslash.  Example: >
   *   :echo escape('c:\program files\vim', ' \')
   *  results in: >
   *   c:\\program\ files\\vim
   *  Also see |shellescape()| and |fnameescape()|.
   */
  escape: (string: any, chars: any) => any;
  /**
   * Evaluate {string} and return the result.  Especially useful to
   *     turn the result of |string()| back into the original value.
   *     This works for Numbers, Floats, Strings and composites of
   *     them.  Also works for |Funcref|s that refer to existing
   *     functions.
   */
  eval: (string: any) => any;
  /**
   * Returns 1 when inside an event handler.  That is that Vim got
   * interrupted while waiting for the user to type a character,
   * e.g., when dropping a file on Vim.  This means interactive
   * commands cannot be used.  Otherwise zero is returned.
   */
  eventhandler: () => any;
  /**
   * This function checks if an executable with the name {expr}
   * exists.  {expr} must be the name of the program without any
   * arguments.
   * executable() uses the value of $PATH and/or the normal
   */
  executable: (expr: any) => any;
  /**
   * On Windows the ".exe", ".bat", etc. can
   * optionally be included.  Then the extensions in $PATHEXT are
   * tried.  Thus if "foo.exe" does not exist, "foo.exe.bat" can be
   * found.  If $PATHEXT is not set then ".exe;.com;.bat;.cmd" is
   * used.  A dot by itself can be used in $PATHEXT to try using
   * the name without an extension.  When 'shell' looks like a
   * Unix shell, then the name is also tried without adding an
   * extension.
   * On Windows it only checks if the file exists and
   * is not a directory, not if it's really executable.
   * On Windows an executable in the same directory as Vim is
   * always found (it is added to $PATH at |startup|).
   * The result is a Number:
   *   1  exists
   *   0  does not exist
   *   -1  not implemented on this system
   * |exepath()| can be used to get the full path of an executable.
   */
  PATHEXT: any;
  /**
   * Execute {command} and capture its output.
   * If {command} is a |String|, returns {command} output.
   * If {command} is a |List|, returns concatenated outputs.
   * Examples: >
   *   echo execute('echon "foo"')
   *    foo >
   *   echo execute(['echon "foo"', 'echon "bar"'])
   *    foobar
   *
   * The optional {silent} argument can have these values:
   *   ""    no `:silent` used
   *   "silent"  `:silent` used
   *   "silent!"  `:silent!` used
   * The default is "silent".  Note that with "silent!", unlike
   * `:redir`, error messages are dropped.
   *
   * To get a list of lines use |split()| on the result: >
   *   split(execute('args'), "\n")
   *
   *  This function is not available in the |sandbox|.
   * Note: If nested, an outer execute() will not observe output of
   * the inner calls.
   * Note: Text attributes (highlights) are not captured.
   */
  execute: (command: any, silent?: any) => any;
  /**
   * Returns the full path of {expr} if it is an executable and
   * given as a (partial or full) path or is found in $PATH.
   * Returns empty string otherwise.
   * If {expr} starts with "./" the |current-directory| is used.
   */
  exepath: (expr: any) => any;
  /**
   * The result is a Number, which is |TRUE| if {expr} is
   *     defined, zero otherwise.
   *
   *     For checking for a supported feature use |has()|.
   *     For checking if a file exists use |filereadable()|.
   *
   *     The {expr} argument is a string, which contains one of these:
   *       &option-name  Vim option (only checks if it exists,
   *           not if it really works)
   *       +option-name  Vim option that works.
   *       $ENVNAME  environment variable (could also be
   *           done by comparing with an empty
   *           string)
   *       *funcname  built-in function (see |functions|)
   *           or user defined function (see
   *           |user-function|). Also works for a
   *           variable that is a Funcref.
   *       varname    internal variable (see
   *           |internal-variables|).  Also works
   *           for |curly-braces-names|, |Dictionary|
   *           entries, |List| items, etc.  Beware
   *           that evaluating an index may cause an
   *           error message for an invalid
   *           expression.  E.g.: >
   *              :let l = [1, 2, 3]
   *              :echo exists("l[5]")
   * <             0 >
   *              :echo exists("l[xx]")
   * <             E121: Undefined variable: xx
   *              0
   *       :cmdname  Ex command: built-in command, user
   *           command or command modifier |:command|.
   *           Returns:
   *           1  for match with start of a command
   *           2  full match with a command
   *           3  matches several user commands
   *           To check for a supported command
   *           always check the return value to be 2.
   *       :2match    The |:2match| command.
   *       :3match    The |:3match| command.
   *       #event    autocommand defined for this event
   *       #event#pattern  autocommand defined for this event and
   *           pattern (the pattern is taken
   *           literally and compared to the
   *           autocommand patterns character by
   *           character)
   *       #group    autocommand group exists
   *       #group#event  autocommand defined for this group and
   *           event.
   *       #group#event#pattern
   *           autocommand defined for this group,
   *           event and pattern.
   *       ##event    autocommand for this event is
   *           supported.
   *
   *     Examples: >
   *       exists("&mouse")
   *       exists("$HOSTNAME")
   *       exists("*strftime")
   *       exists("*s:MyFunc")
   *       exists("bufcount")
   *       exists(":Make")
   *       exists("#CursorHold")
   *       exists("#BufReadPre#*.gz")
   *       exists("#filetypeindent")
   *       exists("#filetypeindent#FileType")
   *       exists("#filetypeindent#FileType#*")
   *       exists("##ColorScheme")
   * <    There must be no space between the symbol (&/$/‍*‍/#) and the
   *     name.
   *     There must be no extra characters after the name, although in
   *     a few cases this is ignored.  That may become more strict in
   *     the future, thus don't count on it!
   *     Working example: >
   *       exists(":make")
   * <    NOT working example: >
   *       exists(":make install")
   *
   * <    Note that the argument must be a string, not the name of the
   *     variable itself.  For example: >
   *       exists(bufcount)
   * <    This doesn't check for existence of the "bufcount" variable,
   *     but gets the value of "bufcount", and checks if that exists.
   */
  exists: (expr: any) => any;
  /**
   * Return the exponential of {expr} as a |Float| in the range
   * [0, inf].
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo exp(2)
   *    7.389056 >
   *   :echo exp(-1)
   *    0.367879
   */
  exp: (expr: any) => any;
  /**
   * Specifically used to interrupt a program being debugged.  It
   * will cause process {pid} to get a SIGTRAP.  Behavior for other
   * processes is undefined. See |terminal-debugger|.
   * {Sends a SIGINT to a process {pid} other than MS-Windows}
   */
  debugbreak: (pid: any) => any;
  /**
   * Expand wildcards and the following special keywords in {expr}.
   * 'wildignorecase' applies.
   *
   * If {list} is given and it is |TRUE|, a List will be returned.
   * Otherwise the result is a String and when there are several
   * matches, they are separated by <NL> characters.
   *
   * If the expansion fails, the result is an empty string.  A name
   * for a non-existing file is not included, unless {expr} does
   * not start with '%', '#' or '<', see below.
   *
   * When {expr} starts with '%', '#' or '<', the expansion is done
   * like for the |cmdline-special| variables with their associated
   * modifiers.  Here is a short overview:
   *
   *   %    current file name
   *   #    alternate file name
   *   #n    alternate file name n
   *   <cfile>    file name under the cursor
   *   <afile>    autocmd file name
   *   <abuf>    autocmd buffer number (as a String!)
   *   <amatch>  autocmd matched name
   *   <sfile>    sourced script file or function name
   *   <slnum>    sourced script line number or function
   *       line number
   *   <sflnum>  script file line number, also when in
   *       a function
   *   <cword>    word under the cursor
   *   <cWORD>    WORD under the cursor
   *   <client>  the {clientid} of the last received
   *       message |server2client()|
   * Modifiers:
   *   :p    expand to full path
   *   :h    head (last path component removed)
   *   :t    tail (last path component only)
   *   :r    root (one extension removed)
   *   :e    extension only
   *
   * Example: >
   *   :let &tags = expand("%:p:h") . "/tags"
   *  Note that when expanding a string that starts with '%', '#' or
   * '<', any following text is ignored.  This does NOT work: >
   *   :let doesntwork = expand("%:h.bak")
   *  Use this: >
   *   :let doeswork = expand("%:h") . ".bak"
   *  Also note that expanding "<cfile>" and others only returns the
   * referenced file name without further expansion.  If "<cfile>"
   * is "~/.cshrc", you need to do another expand() to have the
   * "~/" expanded into the path of the home directory: >
   *   :echo expand(expand("<cfile>"))
   *
   * There cannot be white space between the variables and the
   * following modifier.  The |fnamemodify()| function can be used
   * to modify normal file names.
   *
   * When using '%' or '#', and the current or alternate file name
   * is not defined, an empty string is used.  Using "%:p" in a
   * buffer with no name, results in the current directory, with a
   * '/' added.
   *
   * When {expr} does not start with '%', '#' or '<', it is
   * expanded like a file name is expanded on the command line.
   * 'suffixes' and 'wildignore' are used, unless the optional
   * {nosuf} argument is given and it is |TRUE|.
   * Names for non-existing files are included.  The "**" item can
   * be used to search in a directory tree.  For example, to find
   * all "README" files in the current directory and below: >
   *   :echo expand("**‍/README")
   *
   * expand() can also be used to expand variables and environment
   * variables that are only known in a shell.  But this can be
   * slow, because a shell may be used to do the expansion.  See
   * |expr-env-expand|.
   * The expanded variable is still handled like a list of file
   * names.  When an environment variable cannot be expanded, it is
   * left unchanged.  Thus ":echo expand('$FOOBAR')" results in
   * "$FOOBAR".
   *
   * See |glob()| for finding existing files.  See |system()| for
   * getting the raw output of an external command.
   */
  expand: (expr: any, nosuf?: any, list?: any) => any;
  /**
   * Expand special items in {expr} like what is done for an Ex
   * command such as `:edit`.  This expands special keywords, like
   * with |expand()|, and environment variables, anywhere in
   * {expr}.  Returns the expanded string.
   * Example: >
   *   :echo expandcmd('make %<.o')
   *
   */
  expandcmd: (expr: any) => any;
  /**
   * {expr1} and {expr2} must be both |Lists| or both
   * |Dictionaries|.
   *
   * If they are |Lists|: Append {expr2} to {expr1}.
   * If {expr3} is given insert the items of {expr2} before item
   * {expr3} in {expr1}.  When {expr3} is zero insert before the
   * first item.  When {expr3} is equal to len({expr1}) then
   * {expr2} is appended.
   * Examples: >
   *   :echo sort(extend(mylist, [7, 5]))
   *   :call extend(mylist, [2, 3], 1)
   *  When {expr1} is the same List as {expr2} then the number of
   * items copied is equal to the original length of the List.
   * E.g., when {expr3} is 1 you get N new copies of the first item
   * (where N is the original length of the List).
   * Use |add()| to concatenate one item to a list.  To concatenate
   * two lists into a new list use the + operator: >
   *   :let newlist = [1, 2, 3] + [4, 5]
   *
   * If they are |Dictionaries|:
   * Add all entries from {expr2} to {expr1}.
   * If a key exists in both {expr1} and {expr2} then {expr3} is
   * used to decide what to do:
   * {expr3} = "keep": keep the value of {expr1}
   * {expr3} = "force": use the value of {expr2}
   */
  extend: (expr1: any, expr2: any, expr3?: any) => any;
  /**
   * When {expr3} is omitted then "force" is assumed.
   *
   * {expr1} is changed when {expr2} is not empty.  If necessary
   * make a copy of {expr1} first.
   * {expr2} remains unchanged.
   * When {expr1} is locked and {expr2} is not empty the operation
   * fails.
   * Returns {expr1}.
   */
  E737: any;
  /**
   * Characters in {string} are queued for processing as if they
   * come from a mapping or were typed by the user.
   *
   * By default the string is added to the end of the typeahead
   * buffer, thus if a mapping is still being executed the
   * characters come after them.  Use the 'i' flag to insert before
   * other characters, they will be executed next, before any
   * characters from a mapping.
   *
   * The function does not wait for processing of keys contained in
   * {string}.
   *
   * To include special keys into {string}, use double-quotes
   * and "\..." notation |expr-quote|. For example,
   * feedkeys("\<CR>") simulates pressing of the <Enter> key. But
   * feedkeys('\<CR>') pushes 5 characters.
   * The |<Ignore>| keycode may be used to exit the
   * wait-for-character without doing anything.
   *
   * {mode} is a String, which can contain these character flags:
   * 'm'  Remap keys. This is default.  If {mode} is absent,
   *   keys are remapped.
   * 'n'  Do not remap keys.
   * 't'  Handle keys as if typed; otherwise they are handled as
   *   if coming from a mapping.  This matters for undo,
   *   opening folds, etc.
   * 'i'  Insert the string instead of appending (see above).
   * 'x'  Execute commands until typeahead is empty.  This is
   *   similar to using ":normal!".  You can call feedkeys()
   *   several times without 'x' and then one time with 'x'
   *   (possibly with an empty {string}) to execute all the
   *   typeahead.  Note that when Vim ends in Insert mode it
   *   will behave as if <Esc> is typed, to avoid getting
   *   stuck, waiting for a character to be typed before the
   *   script continues.
   *   Note that if you manage to call feedkeys() while
   *   executing commands, thus calling it recursively, then
   *   all typehead will be consumed by the last call.
   * '!'  When used with 'x' will not end Insert mode. Can be
   *   used in a test when a timer is set to exit Insert mode
   *   a little later.  Useful for testing CursorHoldI.
   *
   * Return value is always 0.
   */
  feedkeys: (string: any, mode?: any) => any;
  /**
   * The result is a Number, which is |TRUE| when a file with the
   * name {file} exists, and can be read.  If {file} doesn't exist,
   * or is a directory, the result is |FALSE|.  {file} is any
   * expression, which is used as a String.
   * If you don't care about the file being readable you can use
   * |glob()|.
   */
  filereadable: (file: any) => any;
  /**
   * The result is a Number, which is 1 when a file with the
   * name {file} exists, and can be written.  If {file} doesn't
   * exist, or is not writable, the result is 0.  If {file} is a
   * directory, and we can write to it, the result is 2.
   */
  filewritable: (file: any) => any;
  /**
   * {expr1} must be a |List| or a |Dictionary|.
   * For each item in {expr1} evaluate {expr2} and when the result
   * is zero remove the item from the |List| or |Dictionary|.
   * {expr2} must be a |string| or |Funcref|.
   *
   * If {expr2} is a |string|, inside {expr2} |v:val| has the value
   * of the current item.  For a |Dictionary| |v:key| has the key
   * of the current item and for a |List| |v:key| has the index of
   * the current item.
   * For a |Dictionary| |v:key| has the key of the current item.
   * Examples: >
   *   call filter(mylist, 'v:val !~ "OLD"')
   *  Removes the items where "OLD" appears. >
   *   call filter(mydict, 'v:key >= 8')
   *  Removes the items with a key below 8. >
   *   call filter(var, 0)
   *  Removes all the items, thus clears the |List| or |Dictionary|.
   *
   * Note that {expr2} is the result of expression and is then
   * used as an expression again.  Often it is good to use a
   * |literal-string| to avoid having to double backslashes.
   *
   * If {expr2} is a |Funcref| it must take two arguments:
   *   1. the key or the index of the current item.
   *   2. the value of the current item.
   * The function must return |TRUE| if the item should be kept.
   * Example that keeps the odd items of a list: >
   *   func Odd(idx, val)
   *     return a:idx % 2 == 1
   *   endfunc
   *   call filter(mylist, function('Odd'))
   *  It is shorter when using a |lambda|: >
   *   call filter(myList, {idx, val -> idx * val <= 42})
   *  If you do not use "val" you can leave it out: >
   *   call filter(myList, {idx -> idx % 2 == 1})
   *
   * The operation is done in-place.  If you want a |List| or
   * |Dictionary| to remain unmodified make a copy first: >
   *   :let l = filter(copy(mylist), 'v:val =~ "KEEP"')
   *
   *  Returns {expr1}, the |List| or |Dictionary| that was filtered.
   * When an error is encountered while evaluating {expr2} no
   * further items in {expr1} are processed. When {expr2} is a
   * Funcref errors inside a function are ignored, unless it was
   * defined with the "abort" flag.
   */
  filter: (expr1: any, expr2: any) => any;
  /**
   * Find directory {name} in {path}.  Supports both downwards and
   * upwards recursive directory searches.  See |file-searching|
   * for the syntax of {path}.
   * Returns the path of the first found match.  When the found
   * directory is below the current directory a relative path is
   * returned.  Otherwise a full path is returned.
   * If {path} is omitted or empty then 'path' is used.
   * If the optional {count} is given, find {count}'s occurrence of
   * {name} in {path} instead of the first one.
   * When {count} is negative return all the matches in a |List|.
   * This is quite similar to the ex-command |:find|.
   */
  finddir: (name: any, path?: any, count?: any) => any;
  /**
   * Just like |finddir()|, but find a file instead of a directory.
   * Uses 'suffixesadd'.
   * Example: >
   *   :echo findfile("tags.vim", ".;")
   *  Searches from the directory of the current file upwards until
   * it finds the file "tags.vim".
   */
  findfile: (name: any, path?: any, count?: any) => any;
  /**
   * Flatten {list} up to {maxdepth} levels.  Without {maxdepth}
   * the result is a |List| without nesting, as if {maxdepth} is
   * a very large number.
   * The {list} is changed in place, make a copy first if you do
   * not want that.
   */
  flatten: (list: any, maxdepth?: any) => any;
  /**
   * {maxdepth} means how deep in nested lists changes are made.
   *     {list} is not modified when {maxdepth} is 0.
   *     {maxdepth} must be positive number.
   *
   *     If there is an error the number zero is returned.
   *
   *     Example: >
   *       :echo flatten([1, [2, [3, 4]], 5])
   * <      [1, 2, 3, 4, 5] >
   *       :echo flatten([1, [2, [3, 4]], 5], 1)
   * <      [1, 2, [3, 4], 5]
   */
  E964: any;
  /**
   * Convert {expr} to a Number by omitting the part after the
   * decimal point.
   * {expr} must evaluate to a |Float| or a Number.
   * When the value of {expr} is out of range for a |Number| the
   * result is truncated to 0x7fffffff or -0x7fffffff (or when
   * 64-bit Number support is enabled, 0x7fffffffffffffff or
   * -0x7fffffffffffffff).  NaN results in -0x80000000 (or when
   * 64-bit Number support is enabled, -0x8000000000000000).
   * Examples: >
   *   echo float2nr(3.95)
   *    3  >
   *   echo float2nr(-23.45)
   *    -23  >
   *   echo float2nr(1.0e100)
   *    2147483647  (or 9223372036854775807) >
   *   echo float2nr(-1.0e150)
   *    -2147483647 (or -9223372036854775807) >
   *   echo float2nr(1.0e-100)
   *    0
   */
  float2nr: (expr: any) => any;
  /**
   * Return the largest integral value less than or equal to
   * {expr} as a |Float| (round down).
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   echo floor(1.856)
   *    1.0  >
   *   echo floor(-5.456)
   *    -6.0  >
   *   echo floor(4.0)
   *    4.0
   */
  floor: (expr: any) => any;
  /**
   * Return the remainder of {expr1} / {expr2}, even if the
   * division is not representable.  Returns {expr1} - i * {expr2}
   * for some integer i such that if {expr2} is non-zero, the
   * result has the same sign as {expr1} and magnitude less than
   * the magnitude of {expr2}.  If {expr2} is zero, the value
   * returned is zero.  The value returned is a |Float|.
   * {expr1} and {expr2} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo fmod(12.33, 1.22)
   *    0.13 >
   *   :echo fmod(-12.33, 1.22)
   *    -0.13
   */
  fmod: (expr1: any, expr2: any) => any;
  /**
   * Escape {string} for use as file name command argument.  All
   * characters that have a special meaning, such as '%' and '|'
   * are escaped with a backslash.
   * For most systems the characters escaped are
   * " \t\n*?[{`$\\%#'\"|!<".  For systems where a backslash
   * appears in a filename, it depends on the value of 'isfname'.
   * A leading '+' and '>' is also escaped (special after |:edit|
   * and |:write|).  And a "-" by itself (special after |:cd|).
   * Example: >
   *   :let fname = '+some str%nge|name'
   *   :exe "edit " . fnameescape(fname)
   *  results in executing: >
   *   edit \+some\ str\%nge\|name
   */
  fnameescape: (string: any) => any;
  /**
   * Modify file name {fname} according to {mods}.  {mods} is a
   * string of characters like it is used for file names on the
   * command line.  See |filename-modifiers|.
   * Example: >
   *   :echo fnamemodify("main.c", ":p:h")
   *  results in: >
   *   /home/mool/vim/vim/src
   *  Note: Environment variables don't work in {fname}, use
   * |expand()| first then.
   */
  fnamemodify: (fname: any, mods: any) => any;
  /**
   * The result is a Number.  If the line {lnum} is in a closed
   * fold, the result is the number of the first line in that fold.
   * If the line {lnum} is not in a closed fold, -1 is returned.
   */
  foldclosed: (lnum: any) => any;
  /**
   * The result is a Number.  If the line {lnum} is in a closed
   * fold, the result is the number of the last line in that fold.
   * If the line {lnum} is not in a closed fold, -1 is returned.
   */
  foldclosedend: (lnum: any) => any;
  /**
   * The result is a Number, which is the foldlevel of line {lnum}
   * in the current buffer.  For nested folds the deepest level is
   * returned.  If there is no fold at line {lnum}, zero is
   * returned.  It doesn't matter if the folds are open or closed.
   * When used while updating folds (from 'foldexpr') -1 is
   * returned for lines where folds are still to be updated and the
   * foldlevel is unknown.  As a special case the level of the
   * previous line is usually available.
   */
  foldlevel: (lnum: any) => any;
  /**
   * Returns a String, to be displayed for a closed fold.  This is
   *     the default function used for the 'foldtext' option and should
   *     only be called from evaluating 'foldtext'.  It uses the
   *     |v:foldstart|, |v:foldend| and |v:folddashes| variables.
   *     The returned string looks like this: >
   *       +-- 45 lines: abcdef
   * <    The number of leading dashes depends on the foldlevel.  The
   *     "45" is the number of lines in the fold.  "abcdef" is the text
   *     in the first non-blank line of the fold.  Leading white space,
   *     "//" or "/‍*" and the text from the 'foldmarker' and
   *     'commentstring' options is removed.
   *     When used to draw the actual foldtext, the rest of the line
   *     will be filled with the fold char from the 'fillchars'
   *     setting.
   */
  foldtext: () => any;
  /**
   * Returns the text that is displayed for the closed fold at line
   * {lnum}.  Evaluates 'foldtext' in the appropriate context.
   * When there is no closed fold at {lnum} an empty string is
   * returned.
   * {lnum} is used like with |getline()|.  Thus "." is the current
   * line, "'m" mark m, etc.
   * Useful when exporting folded text, e.g., to HTML.
   */
  foldtextresult: (lnum: any) => any;
  /**
   * Move the Vim window to the foreground.  Useful when sent from
   *     a client to a Vim server. |remote_send()|
   *     On Win32 systems this might not work, the OS does not always
   *     allow a window to bring itself to the foreground.  Use
   *     |remote_foreground()| instead.
   *     {only in the Win32 GUI and console version}
   */
  foreground: () => any;
  /**
   * Just like |function()|, but the returned Funcref will lookup
   * the function by reference, not by name.  This matters when the
   * function {name} is redefined later.
   *
   * Unlike |function()|, {name} must be an existing user function.
   * Also for autoloaded functions. {name} cannot be a builtin
   * function.
   */
  funcref: (name: any, arglist?: any, dict?: any) => any;
  /**
   * Return a |Funcref| variable that refers to function {name}.
   * {name} can be a user defined function or an internal function.
   *
   * {name} can also be a Funcref or a partial. When it is a
   * partial the dict stored in it will be used and the {dict}
   * argument is not allowed. E.g.: >
   *   let FuncWithArg = function(dict.Func, [arg])
   *   let Broken = function(dict.Func, [arg], dict)
   *
   * When using the Funcref the function will be found by {name},
   * also when it was redefined later. Use |funcref()| to keep the
   * same function.
   *
   * When {arglist} or {dict} is present this creates a partial.
   * That means the argument list and/or the dictionary is stored in
   * the Funcref and will be used when the Funcref is called.
   *
   * The arguments are passed to the function in front of other
   * arguments, but after any argument from |method|.  Example: >
   *   func Callback(arg1, arg2, name)
   *   ...
   *   let Partial = function('Callback', ['one', 'two'])
   *   ...
   *   call Partial('name')
   *  Invokes the function as with: >
   *   call Callback('one', 'two', 'name')
   *
   *  The Dictionary is only useful when calling a "dict" function.
   * In that case the {dict} is passed in as "self". Example: >
   *   function Callback() dict
   *      echo "called for " . self.name
   *   endfunction
   *   ...
   *   let context = {"name": "example"}
   *   let Func = function('Callback', context)
   *   ...
   *   call Func()  " will echo: called for example
   *
   *  The argument list and the Dictionary can be combined: >
   *   function Callback(arg1, count) dict
   *   ...
   *   let context = {"name": "example"}
   *   let Func = function('Callback', ['one'], context)
   *   ...
   *   call Func(500)
   *  Invokes the function as with: >
   *   call context.Callback('one', 500)
   */
  function: (name: any, arglist?: any, dict?: any) => any;
  /**
   * Cleanup unused |Lists| and |Dictionaries| that have circular
   * references.
   *
   * There is hardly ever a need to invoke this function, as it is
   * automatically done when Vim runs out of memory or is waiting
   * for the user to press a key after 'updatetime'.  Items without
   * circular references are always freed when they become unused.
   * This is useful if you have deleted a very big |List| and/or
   * |Dictionary| with circular references in a script that runs
   * for a long time.
   *
   * When the optional {atexit} argument is one, garbage
   * collection will also be done when exiting Vim, if it wasn't
   * done before.  This is useful when checking for memory leaks.
   *
   * The garbage collection is not done immediately but only when
   * it's safe to perform.  This is when waiting for the user to
   * type a character.
   */
  garbagecollect: (atexit?: any) => any;
  /**
   * Get item {idx} from |List| {list}.  When this item is not
   * available return {default}.  Return zero when {default} is
   * omitted.
   * {dict}, {key} [, {default}])
   * Get item with key {key} from |Dictionary| {dict}.  When this
   * item is not available return {default}.  Return zero when
   * {default} is omitted.  Useful example: >
   *   let val = get(g:, 'var_name', 'default')
   *  This gets the value of g:var_name if it exists, and uses
   * 'default' when it does not exist.
   * {func}, {what})
   * Get item {what} from Funcref {func}.  Possible values for
   * {what} are:
   *   "name"  The function name
   *   "func"  The function
   *   "dict"  The dictionary
   *   "args"  The list with arguments
   */
  get: (list: any, idx: any, arg_default?: any) => any;
  /**
   * getbufinfo([{dict}])
   *     Get information about buffers as a List of Dictionaries.
   *
   *     Without an argument information about all the buffers is
   *     returned.
   *
   *     When the argument is a Dictionary only the buffers matching
   *     the specified criteria are returned.  The following keys can
   *     be specified in {dict}:
   *       buflisted  include only listed buffers.
   *       bufloaded  include only loaded buffers.
   *       bufmodified  include only modified buffers.
   *
   *     Otherwise, {expr} specifies a particular buffer to return
   *     information for.  For the use of {expr}, see |bufname()|
   *     above.  If the buffer is found the returned List has one item.
   *     Otherwise the result is an empty list.
   *
   *     Each returned List item is a dictionary with the following
   *     entries:
   *       bufnr    buffer number.
   *       changed    TRUE if the buffer is modified.
   *       changedtick  number of changes made to the buffer.
   *       hidden    TRUE if the buffer is hidden.
   *       lastused  timestamp in seconds, like
   *           |localtime()|, when the buffer was
   *           last used.
   *       listed    TRUE if the buffer is listed.
   *       lnum    current line number in buffer.
   *       linecount  number of lines in the buffer (only
   *           valid when loaded)
   *       loaded    TRUE if the buffer is loaded.
   *       name    full path to the file in the buffer.
   *       signs    list of signs placed in the buffer.
   *           Each list item is a dictionary with
   *           the following fields:
   *               id    sign identifier
   *               lnum  line number
   *               name  sign name
   *       variables  a reference to the dictionary with
   *           buffer-local variables.
   *       windows    list of |window-ID|s that display this
   *           buffer
   *
   *     Examples: >
   *       for buf in getbufinfo()
   *           echo buf.name
   *       endfor
   *       for buf in getbufinfo({'buflisted':1})
   *           if buf.changed
   *         ....
   *           endif
   *       endfor
   * <
   *     To get buffer-local options use: >
   *       getbufvar({bufnr}, '&option_name')
   *
   * <
   */
  getbufinfo: (expr?: any) => any;
  /**
   * Return a |List| with the lines starting from {lnum} to {end}
   * (inclusive) in the buffer {expr}.  If {end} is omitted, a
   * |List| with only the line {lnum} is returned.
   *
   * For the use of {expr}, see |bufname()| above.
   *
   * For {lnum} and {end} "$" can be used for the last line of the
   * buffer.  Otherwise a number must be used.
   *
   * When {lnum} is smaller than 1 or bigger than the number of
   * lines in the buffer, an empty |List| is returned.
   *
   * When {end} is greater than the number of lines in the buffer,
   * it is treated as {end} is set to the number of lines in the
   * buffer.  When {end} is before {lnum} an empty |List| is
   * returned.
   *
   * This function works only for loaded buffers.  For unloaded and
   * non-existing buffers, an empty |List| is returned.
   *
   * Example: >
   *   :let lines = getbufline(bufnr("myfile"), 1, "$")
   */
  getbufline: (expr: any, lnum: any, end?: any) => any;
  /**
   * The result is the value of option or local buffer variable
   * {varname} in buffer {expr}.  Note that the name without "b:"
   * must be used.
   * When {varname} is empty returns a dictionary with all the
   * buffer-local variables.
   * When {varname} is equal to "&" returns a dictionary with all
   * the buffer-local options.
   * Otherwise, when {varname} starts with "&" returns the value of
   * a buffer-local option.
   * This also works for a global or buffer-local option, but it
   * doesn't work for a global variable, window-local variable or
   * window-local option.
   * For the use of {expr}, see |bufname()| above.
   * When the buffer or variable doesn't exist {def} or an empty
   * string is returned, there is no error message.
   * Examples: >
   *   :let bufmodified = getbufvar(1, "&mod")
   *   :echo "todo myvar = " . getbufvar("todo", "myvar")
   *
   */
  getbufvar: (expr: any, varname: any, def?: any) => any;
  /**
   * Returns the |changelist| for the buffer {expr}. For the use
   * of {expr}, see |bufname()| above. If buffer {expr} doesn't
   * exist, an empty list is returned.
   *
   * The returned list contains two entries: a list with the change
   * locations and the current position in the list.  Each
   * entry in the change list is a dictionary with the following
   * entries:
   *   col    column number
   *   coladd    column offset for 'virtualedit'
   *   lnum    line number
   * If buffer {expr} is the current buffer, then the current
   * position refers to the position in the list. For other
   * buffers, it is set to the length of the list.
   */
  getchangelist: (expr: any) => any;
  /**
   * Get a single character from the user or input stream.
   * If [expr] is omitted, wait until a character is available.
   * If [expr] is 0, only get a character when one is available.
   *   Return zero otherwise.
   * If [expr] is 1, only check if a character is available, it is
   *   not consumed.  Return zero if no character available.
   *
   * Without [expr] and when [expr] is 0 a whole character or
   * special key is returned.  If it is a single character, the
   * result is a number.  Use nr2char() to convert it to a String.
   * Otherwise a String is returned with the encoded character.
   * For a special key it's a String with a sequence of bytes
   * starting with 0x80 (decimal: 128).  This is the same value as
   * the String "\<Key>", e.g., "\<Left>".  The returned value is
   * also a String when a modifier (shift, control, alt) was used
   * that is not included in the character.
   *
   * When [expr] is 0 and Esc is typed, there will be a short delay
   * while Vim waits to see if this is the start of an escape
   * sequence.
   *
   * When [expr] is 1 only the first byte is returned.  For a
   * one-byte character it is the character itself as a number.
   * Use nr2char() to convert it to a String.
   *
   * Use getcharmod() to obtain any additional modifiers.
   *
   * When the user clicks a mouse button, the mouse event will be
   * returned.  The position can then be found in |v:mouse_col|,
   * |v:mouse_lnum|, |v:mouse_winid| and |v:mouse_win|.  This
   * example positions the mouse as it would normally happen: >
   *   let c = getchar()
   *   if c == "\<LeftMouse>" && v:mouse_win > 0
   *     exe v:mouse_win . "wincmd w"
   *     exe v:mouse_lnum
   *     exe "normal " . v:mouse_col . "|"
   *   endif
   *
   * There is no prompt, you will somehow have to make clear to the
   * user that a character has to be typed.
   * There is no mapping for the character.
   * Key codes are replaced, thus when the user presses the <Del>
   * key you get the code for the <Del> key, not the raw character
   * sequence.  Examples: >
   *   getchar() == "\<Del>"
   *   getchar() == "\<S-Left>"
   *  This example redefines "f" to ignore case: >
   *   :nmap f :call FindChar()<CR>
   *   :function FindChar()
   *   :  let c = nr2char(getchar())
   *   :  while col('.') < col('$') - 1
   *   :    normal l
   *   :    if getline('.')[col('.') - 1] ==? c
   *   :      break
   *   :    endif
   *   :  endwhile
   *   :endfunction
   *
   */
  getchar: (expr?: any) => any;
  /**
   * The result is a Number which is the state of the modifiers for
   * the last obtained character with getchar() or in another way.
   * These values are added together:
   *   2  shift
   *   4  control
   *   8  alt (meta)
   *   16  meta (when it's different from ALT)
   *   32  mouse double click
   *   64  mouse triple click
   *   96  mouse quadruple click (== 32 + 64)
   *   128  command (Macintosh only)
   * Only the modifiers that have not been included in the
   * character itself are obtained.  Thus Shift-a results in "A"
   * without a modifier.
   */
  getcharmod: () => any;
  /**
   * Return the current character search information as a {dict}
   * with the following entries:
   *
   *     char  character previously used for a character
   *     search (|t|, |f|, |T|, or |F|); empty string
   *     if no character search has been performed
   *     forward  direction of character search; 1 for forward,
   *     0 for backward
   *     until  type of character search; 1 for a |t| or |T|
   *     character search, 0 for an |f| or |F|
   *     character search
   *
   * This can be useful to always have |;| and |,| search
   * forward/backward regardless of the direction of the previous
   * character search: >
   *   :nnoremap <expr> ; getcharsearch().forward ? ';' : ','
   *   :nnoremap <expr> , getcharsearch().forward ? ',' : ';'
   *  Also see |setcharsearch()|.
   */
  getcharsearch: () => any;
  /**
   * Return the current command-line.  Only works when the command
   * line is being edited, thus requires use of |c_CTRL-\_e| or
   * |c_CTRL-R_=|.
   * Example: >
   *   :cmap <F7> <C-\>eescape(getcmdline(), ' \')<CR>
   *  Also see |getcmdtype()|, |getcmdpos()| and |setcmdpos()|.
   * Returns an empty string when entering a password or using
   * |inputsecret()|.
   */
  getcmdline: () => any;
  /**
   * Return the position of the cursor in the command line as a
   * byte count.  The first column is 1.
   * Only works when editing the command line, thus requires use of
   * |c_CTRL-\_e| or |c_CTRL-R_=| or an expression mapping.
   * Returns 0 otherwise.
   * Also see |getcmdtype()|, |setcmdpos()| and |getcmdline()|.
   */
  getcmdpos: () => any;
  /**
   * Return the current command-line type. Possible return values
   * are:
   *     :  normal Ex command
   *     >  debug mode command |debug-mode|
   *     /  forward search command
   *     ?  backward search command
   *     @  |input()| command
   *     -  |:insert| or |:append| command
   *     =  |i_CTRL-R_=|
   * Only works when editing the command line, thus requires use of
   * |c_CTRL-\_e| or |c_CTRL-R_=| or an expression mapping.
   * Returns an empty string otherwise.
   * Also see |getcmdpos()|, |setcmdpos()| and |getcmdline()|.
   */
  getcmdtype: () => any;
  /**
   * Return the current |command-line-window| type. Possible return
   * values are the same as |getcmdtype()|. Returns an empty string
   * when not in the command-line window.
   */
  getcmdwintype: () => any;
  /**
   * Return a list of command-line completion matches. {type}
   * specifies what for.  The following completion types are
   * supported:
   *
   * arglist    file names in argument list
   * augroup    autocmd groups
   * buffer    buffer names
   * behave    :behave suboptions
   * cmdline    |cmdline-completion| result
   * color    color schemes
   * command    Ex command (and arguments)
   * compiler  compilers
   * cscope    |:cscope| suboptions
   * diff_buffer     |:diffget| and |:diffput| completion
   * dir    directory names
   * environment  environment variable names
   * event    autocommand events
   * expression  Vim expression
   * file    file and directory names
   * file_in_path  file and directory names in |'path'|
   * filetype  filetype names |'filetype'|
   * function  function name
   * help    help subjects
   * highlight  highlight groups
   * history    :history suboptions
   * locale    locale names (as output of locale -a)
   * mapclear        buffer argument
   * mapping    mapping name
   * menu    menus
   * messages  |:messages| suboptions
   * option    options
   * packadd    optional package |pack-add| names
   * shellcmd  Shell command
   * sign    |:sign| suboptions
   * syntax    syntax file names |'syntax'|
   * syntime    |:syntime| suboptions
   * tag    tags
   * tag_listfiles  tags, file names
   * user    user names
   * var    user variables
   *
   * If {pat} is an empty string, then all the matches are
   * returned.  Otherwise only items matching {pat} are returned.
   * See |wildcards| for the use of special characters in {pat}.
   *
   * If the optional {filtered} flag is set to 1, then 'wildignore'
   * is applied to filter the results.  Otherwise all the matches
   * are returned. The 'wildignorecase' option always applies.
   *
   * If {type} is "cmdline", then the |cmdline-completion| result is
   * returned.  For example, to complete the possible values after
   * a ":call" command: >
   *   echo getcompletion('call ', 'cmdline')
   *
   * If there are no matches, an empty list is returned.  An
   * invalid value for {type} produces an error.
   */
  getcompletion: (pat: any, type: any, filtered?: any) => any;
  /**
   * Get the position of the cursor.  This is like getpos('.'), but
   *     includes an extra item in the list:
   *         [bufnum, lnum, col, off, curswant] ~
   *      The "curswant" number is the preferred column when moving the
   *     cursor vertically.  Also see |getpos()|.
   *
   *      This can be used to save and restore the cursor position: >
   *        let save_cursor = getcurpos()
   *        MoveTheCursorAround
   *        call setpos('.', save_cursor)
   * <    Note that this only works within the window.  See
   *     |winrestview()| for restoring more state.
   */
  getcurpos: () => any;
  /**
   * With no arguments the result is a String, which is the name of
   * the current effective working directory. With {winnr} or
   * {tabnr} the working directory of that scope is returned.
   * Tabs and windows are identified by their respective numbers,
   * 0 means current tab or window. Missing argument implies 0.
   * Thus the following are equivalent: >
   *   getcwd()
   *   getcwd(0)
   *   getcwd(0, 0)
   *  If {winnr} is -1 it is ignored, only the tab is resolved.
   * {winnr} can be the window number or the |window-ID|.
   */
  getcwd: (winnr?: any, tabnr?: any) => any;
  /**
   * Return the value of environment variable {name}.
   * When the variable does not exist |v:null| is returned.  That
   * is different from a variable set to an empty string.
   * See also |expr-env|.
   */
  getenv: (name: any) => any;
  /**
   * Without an argument returns the name of the normal font being
   * used.  Like what is used for the Normal highlight group
   * |hl-Normal|.
   * With an argument a check is done whether {name} is a valid
   * font name.  If not then an empty string is returned.
   * Otherwise the actual font name is returned, or {name} if the
   * GUI does not support obtaining the real name.
   * Only works when the GUI is running, thus not in your vimrc or
   * gvimrc file.  Use the |GUIEnter| autocommand to use this
   * function just after the GUI has started.
   */
  getfontname: (name?: any) => any;
  /**
   * The result is a String, which is the read, write, and execute
   * permissions of the given file {fname}.
   * If {fname} does not exist or its directory cannot be read, an
   * empty string is returned.
   * The result is of the form "rwxrwxrwx", where each group of
   * "rwx" flags represent, in turn, the permissions of the owner
   * of the file, the group the file belongs to, and other users.
   * If a user does not have a given permission the flag for this
   * is replaced with the string "-".  Examples: >
   *   :echo getfperm("/etc/passwd")
   *   :echo getfperm(expand("~/.config/nvim/init.vim"))
   *  This will hopefully (from a security point of view) display
   * the string "rw-r--r--" or even "rw-------".
   *
   * For setting permissions use |setfperm()|.
   */
  getfperm: (fname: any) => any;
  /**
   * The result is a Number, which is the size in bytes of the
   * given file {fname}.
   * If {fname} is a directory, 0 is returned.
   * If the file {fname} can't be found, -1 is returned.
   * If the size of {fname} is too big to fit in a Number then -2
   * is returned.
   */
  getfsize: (fname: any) => any;
  /**
   * The result is a Number, which is the last modification time of
   * the given file {fname}.  The value is measured as seconds
   * since 1st Jan 1970, and may be passed to strftime().  See also
   * |localtime()| and |strftime()|.
   * If the file {fname} can't be found -1 is returned.
   */
  getftime: (fname: any) => any;
  /**
   * The result is a String, which is a description of the kind of
   * file of the given file {fname}.
   * If {fname} does not exist an empty string is returned.
   * Here is a table over different kinds of files and their
   * results:
   *   Normal file    "file"
   *   Directory    "dir"
   *   Symbolic link    "link"
   *   Block device    "bdev"
   *   Character device  "cdev"
   *   Socket      "socket"
   *   FIFO      "fifo"
   *   All other    "other"
   * Example: >
   *   getftype("/home")
   *  Note that a type such as "link" will only be returned on
   * systems that support it.  On some systems only "dir" and
   * "file" are returned.
   */
  getftype: (fname: any) => any;
  /**
   * Returns the |jumplist| for the specified window.
   *
   * Without arguments use the current window.
   * With {winnr} only use this window in the current tab page.
   * {winnr} can also be a |window-ID|.
   * With {winnr} and {tabnr} use the window in the specified tab
   * page.
   *
   * The returned list contains two entries: a list with the jump
   * locations and the last used jump position number in the list.
   * Each entry in the jump location list is a dictionary with
   * the following entries:
   *   bufnr    buffer number
   *   col    column number
   *   coladd    column offset for 'virtualedit'
   *   filename  filename if available
   *   lnum    line number
   */
  getjumplist: (winnr?: any, tabnr?: any) => any;
  /**
   * Without {end} the result is a String, which is line {lnum}
   * from the current buffer.  Example: >
   *   getline(1)
   *  When {lnum} is a String that doesn't start with a
   * digit, |line()| is called to translate the String into a Number.
   * To get the line under the cursor: >
   *   getline(".")
   *  When {lnum} is smaller than 1 or bigger than the number of
   * lines in the buffer, an empty string is returned.
   *
   * When {end} is given the result is a |List| where each item is
   * a line from the current buffer in the range {lnum} to {end},
   * including line {end}.
   * {end} is used in the same way as {lnum}.
   * Non-existing lines are silently omitted.
   * When {end} is before {lnum} an empty |List| is returned.
   * Example: >
   *   :let start = line('.')
   *   :let end = search("^$") - 1
   *   :let lines = getline(start, end)
   *
   *  To get lines from another buffer see |getbufline()|
   */
  getline: (lnum: any, end?: any) => any;
  /**
   * Returns a list with all the entries in the location list for
   * window {nr}.  {nr} can be the window number or the |window-ID|.
   * When {nr} is zero the current window is used.
   *
   * For a location list window, the displayed location list is
   * returned.  For an invalid window number {nr}, an empty list is
   * returned. Otherwise, same as |getqflist()|.
   *
   * If the optional {what} dictionary argument is supplied, then
   * returns the items listed in {what} as a dictionary. Refer to
   * |getqflist()| for the supported items in {what}.
   * If {what} contains 'filewinid', then returns the id of the
   * window used to display files from the location list. This
   * field is applicable only when called from a location list
   * window. See |location-list-file-window| for more details.
   */
  getloclist: (nr: any, what?: any) => any;
  /**
   * Without the {expr} argument returns a |List| with information
   * about all the global marks. |mark|
   *
   * If the optional {expr} argument is specified, returns the
   * local marks defined in buffer {expr}.  For the use of {expr},
   * see |bufname()|.
   *
   * Each item in the retuned List is a |Dict| with the following:
   *     name - name of the mark prefixed by "'"
   *     pos - a |List| with the position of the mark:
   *     [bufnum, lnum, col, off]
   *     Refer to |getpos()| for more information.
   *     file - file name
   *
   * Refer to |getpos()| for getting information about a specific
   * mark.
   */
  getmarklist: () => any;
  /**
   * Returns a |List| with all matches previously defined for the
   * current window by |matchadd()| and the |:match| commands.
   * |getmatches()| is useful in combination with |setmatches()|,
   * as |setmatches()| can restore a list of matches saved by
   * |getmatches()|.
   * Example: >
   *   :echo getmatches()
   *    [{'group': 'MyGroup1', 'pattern': 'TODO',
   *   'priority': 10, 'id': 1}, {'group': 'MyGroup2',
   *   'pattern': 'FIXME', 'priority': 10, 'id': 2}] >
   *   :let m = getmatches()
   *   :call clearmatches()
   *   :echo getmatches()
   *    [] >
   *   :call setmatches(m)
   *   :echo getmatches()
   *    [{'group': 'MyGroup1', 'pattern': 'TODO',
   *   'priority': 10, 'id': 1}, {'group': 'MyGroup2',
   *   'pattern': 'FIXME', 'priority': 10, 'id': 2}] >
   *   :unlet m
   *
   */
  getmatches: (win?: any) => any;
  /**
   * Return a Number which is the process ID of the Vim process.
   *     This is a unique number, until Vim exits.
   */
  getpid: () => any;
  /**
   * Get the position for {expr}.  For possible values of {expr}
   *     see |line()|.  For getting the cursor position see
   *     |getcurpos()|.
   *     The result is a |List| with four numbers:
   *         [bufnum, lnum, col, off]
   *     "bufnum" is zero, unless a mark like '0 or 'A is used, then it
   *     is the buffer number of the mark.
   *     "lnum" and "col" are the position in the buffer.  The first
   *     column is 1.
   *     The "off" number is zero, unless 'virtualedit' is used.  Then
   *     it is the offset in screen columns from the start of the
   *     character.  E.g., a position within a <Tab> or after the last
   *     character.
   *     Note that for '< and '> Visual mode matters: when it is "V"
   *     (visual line mode) the column of '< is zero and the column of
   *     '> is a large number.
   *     This can be used to save and restore the position of a mark: >
   *       let save_a_mark = getpos("'a")
   *       ...
   *       call setpos("'a", save_a_mark)
   * <    Also see |getcurpos()| and |setpos()|.
   */
  getpos: (expr: any) => any;
  /**
   * Returns a list with all the current quickfix errors.  Each
   * list item is a dictionary with these entries:
   *   bufnr  number of buffer that has the file name, use
   *     bufname() to get the name
   *   module  module name
   *   lnum  line number in the buffer (first line is 1)
   *   col  column number (first column is 1)
   *   vcol  |TRUE|: "col" is visual column
   *     |FALSE|: "col" is byte index
   *   nr  error number
   *   pattern  search pattern used to locate the error
   *   text  description of the error
   *   type  type of the error, 'E', '1', etc.
   *   valid  |TRUE|: recognized error message
   *
   * When there is no error list or it's empty, an empty list is
   * returned. Quickfix list entries with non-existing buffer
   * number are returned with "bufnr" set to zero.
   *
   * Useful application: Find pattern matches in multiple files and
   * do something with them: >
   *   :vimgrep /theword/jg *.c
   *   :for d in getqflist()
   *   :   echo bufname(d.bufnr) ':' d.lnum '=' d.text
   *   :endfor
   *
   * If the optional {what} dictionary argument is supplied, then
   * returns only the items listed in {what} as a dictionary. The
   * following string items are supported in {what}:
   *   changedtick  get the total number of changes made
   *       to the list |quickfix-changedtick|
   *   context  get the |quickfix-context|
   *   efm  errorformat to use when parsing "lines". If
   *     not present, then the 'errorformat' option
   *     value is used.
   *   id  get information for the quickfix list with
   *     |quickfix-ID|; zero means the id for the
   *     current list or the list specified by "nr"
   *   idx  index of the current entry in the quickfix
   *     list specified by 'id' or 'nr'.
   *     See |quickfix-index|
   *   items  quickfix list entries
   *   lines  parse a list of lines using 'efm' and return
   *     the resulting entries.  Only a |List| type is
   *     accepted.  The current quickfix list is not
   *     modified. See |quickfix-parse|.
   *   nr  get information for this quickfix list; zero
   *     means the current quickfix list and "$" means
   *     the last quickfix list
   *   size  number of entries in the quickfix list
   *   title  get the list title |quickfix-title|
   *   winid  get the quickfix |window-ID|
   *   all  all of the above quickfix properties
   * Non-string items in {what} are ignored. To get the value of a
   * particular item, set it to zero.
   * If "nr" is not present then the current quickfix list is used.
   * If both "nr" and a non-zero "id" are specified, then the list
   * specified by "id" is used.
   * To get the number of lists in the quickfix stack, set "nr" to
   * "$" in {what}. The "nr" value in the returned dictionary
   * contains the quickfix stack size.
   * When "lines" is specified, all the other items except "efm"
   * are ignored.  The returned dictionary contains the entry
   * "items" with the list of entries.
   *
   * The returned dictionary contains the following entries:
   *   changedtick  total number of changes made to the
   *       list |quickfix-changedtick|
   *   context  quickfix list context. See |quickfix-context|
   *     If not present, set to "".
   *   id  quickfix list ID |quickfix-ID|. If not
   *     present, set to 0.
   *   idx  index of the current entry in the list. If not
   *     present, set to 0.
   *   items  quickfix list entries. If not present, set to
   *     an empty list.
   *   nr  quickfix list number. If not present, set to 0
   *   size  number of entries in the quickfix list. If not
   *     present, set to 0.
   *   title  quickfix list title text. If not present, set
   *     to "".
   *   winid  quickfix |window-ID|. If not present, set to 0
   *
   * Examples (See also |getqflist-examples|): >
   *   :echo getqflist({'all': 1})
   *   :echo getqflist({'nr': 2, 'title': 1})
   *   :echo getqflist({'lines' : ["F1:10:L10"]})
   *
   */
  getqflist: (what?: any) => any;
  /**
   * The result is a String, which is the contents of register
   * {regname}.  Example: >
   *   :let cliptext = getreg('*')
   *  When {regname} was not set the result is an empty string.
   *
   * getreg('=') returns the last evaluated value of the expression
   * register.  (For use in maps.)
   * getreg('=', 1) returns the expression itself, so that it can
   * be restored with |setreg()|.  For other registers the extra
   * argument is ignored, thus you can always give it.
   *
   * If {list} is present and |TRUE|, the result type is changed
   * to |List|. Each list item is one text line. Use it if you care
   * about zero bytes possibly present inside register: without
   * third argument both NLs and zero bytes are represented as NLs
   * (see |NL-used-for-Nul|).
   * When the register was not set an empty list is returned.
   *
   * If {regname} is not specified, |v:register| is used.
   */
  getreg: (regname?: any, arg_1?: any, list?: any) => any;
  /**
   * The result is a String, which is type of register {regname}.
   * The value will be one of:
   *     "v"      for |charwise| text
   *     "V"      for |linewise| text
   *     "<CTRL-V>{width}"  for |blockwise-visual| text
   *     ""      for an empty or unknown register
   * <CTRL-V> is one character with value 0x16.
   * If {regname} is not specified, |v:register| is used.
   */
  getregtype: (regname?: any) => any;
  /**
   * If {arg} is not specified, then information about all the tab
   * pages is returned as a List. Each List item is a Dictionary.
   * Otherwise, {arg} specifies the tab page number and information
   * about that one is returned.  If the tab page does not exist an
   * empty List is returned.
   *
   * Each List item is a Dictionary with the following entries:
   *   tabnr    tab page number.
   *   variables  a reference to the dictionary with
   *       tabpage-local variables
   *   windows    List of |window-ID|s in the tab page.
   */
  gettabinfo: (arg?: any) => any;
  /**
   * Get the value of a tab-local variable {varname} in tab page
   * {tabnr}. |t:var|
   * Tabs are numbered starting with one.
   * When {varname} is empty a dictionary with all tab-local
   * variables is returned.
   * Note that the name without "t:" must be used.
   * When the tab or variable doesn't exist {def} or an empty
   * string is returned, there is no error message.
   */
  gettabvar: (tabnr: any, varname: any, def?: any) => any;
  /**
   * Get the value of window-local variable {varname} in window
   * {winnr} in tab page {tabnr}.
   * When {varname} is empty a dictionary with all window-local
   * variables is returned.
   * When {varname} is equal to "&" get the values of all
   * window-local options in a Dictionary.
   * Otherwise, when {varname} starts with "&" get the value of a
   * window-local option.
   * Note that {varname} must be the name without "w:".
   * Tabs are numbered starting with one.  For the current tabpage
   * use |getwinvar()|.
   * {winnr} can be the window number or the |window-ID|.
   * When {winnr} is zero the current window is used.
   * This also works for a global option, buffer-local option and
   * window-local option, but it doesn't work for a global variable
   * or buffer-local variable.
   * When the tab, window or variable doesn't exist {def} or an
   * empty string is returned, there is no error message.
   * Examples: >
   *   :let list_is_on = gettabwinvar(1, 2, '&list')
   *   :echo "myvar = " . gettabwinvar(3, 1, 'myvar')
   *
   * To obtain all window-local variables use: >
   *   gettabwinvar({tabnr}, {winnr}, '&')
   */
  gettabwinvar: (tabnr: any, winnr: any, varname: any, def?: any) => any;
  /**
   * The result is a Dict, which is the tag stack of window {nr}.
   * {nr} can be the window number or the |window-ID|.
   * When {nr} is not specified, the current window is used.
   * When window {nr} doesn't exist, an empty Dict is returned.
   *
   * The returned dictionary contains the following entries:
   *   curidx    Current index in the stack. When at
   *       top of the stack, set to (length + 1).
   *       Index of bottom of the stack is 1.
   *   items    List of items in the stack. Each item
   *       is a dictionary containing the
   *       entries described below.
   *   length    Number of entries in the stack.
   *
   * Each item in the stack is a dictionary with the following
   * entries:
   *   bufnr    buffer number of the current jump
   *   from    cursor position before the tag jump.
   *       See |getpos()| for the format of the
   *       returned list.
   *   matchnr    current matching tag number. Used when
   *       multiple matching tags are found for a
   *       name.
   *   tagname    name of the tag
   *
   * See |tagstack| for more information about the tag stack.
   */
  gettagstack: (nr?: any) => any;
  /**
   * Returns information about windows as a List with Dictionaries.
   *
   * If {winid} is given Information about the window with that ID
   * is returned.  If the window does not exist the result is an
   * empty list.
   *
   * Without {winid} information about all the windows in all the
   * tab pages is returned.
   *
   * Each List item is a Dictionary with the following entries:
   *   botline    last displayed buffer line
   *   bufnr    number of buffer in the window
   *   height    window height (excluding winbar)
   *   loclist    1 if showing a location list
   *   quickfix  1 if quickfix or location list window
   *   terminal  1 if a terminal window
   *   tabnr    tab page number
   *   topline    first displayed buffer line
   *   variables  a reference to the dictionary with
   *       window-local variables
   *   width    window width
   *   winbar    1 if the window has a toolbar, 0
   *       otherwise
   *   wincol    leftmost screen column of the window
   *   winid    |window-ID|
   *   winnr    window number
   *   winrow    topmost screen column of the window
   */
  getwininfo: (winid?: any) => any;
  /**
   * The result is a list with two numbers, the result of
   * getwinposx() and getwinposy() combined:
   *   [x-pos, y-pos]
   * {timeout} can be used to specify how long to wait in msec for
   * a response from the terminal.  When omitted 100 msec is used.
   *
   * Use a longer time for a remote terminal.
   * When using a value less than 10 and no response is received
   * within that time, a previously reported position is returned,
   * if available.  This can be used to poll for the position and
   * do some work in the meantime: >
   *   while 1
   *     let res = getwinpos(1)
   *     if res[0] >= 0
   *       break
   *     endif
   *     " Do some work here
   *   endwhile
   *
   */
  getwinpos: (timeout?: any) => any;
  /**
   * The result is a Number, which is the X coordinate in pixels of
   *     the left hand side of the GUI Vim window.  The result will be
   *     -1 if the information is not available.
   *     The value can be used with `:winpos`.
   */
  getwinposx: () => any;
  /**
   * The result is a Number, which is the Y coordinate in pixels of
   *     the top of the GUI Vim window.  The result will be -1 if the
   *     information is not available.
   *     The value can be used with `:winpos`.
   */
  getwinposy: () => any;
  /**
   * Like |gettabwinvar()| for the current tabpage.
   * Examples: >
   *   :let list_is_on = getwinvar(2, '&list')
   *   :echo "myvar = " . getwinvar(1, 'myvar')
   *
   */
  getwinvar: (winnr: any, varname: any, def?: any) => any;
  /**
   * Expand the file wildcards in {expr}.  See |wildcards| for the
   * use of special characters.
   *
   * Unless the optional {nosuf} argument is given and is |TRUE|,
   * the 'suffixes' and 'wildignore' options apply: Names matching
   * one of the patterns in 'wildignore' will be skipped and
   * 'suffixes' affect the ordering of matches.
   * 'wildignorecase' always applies.
   *
   * When {list} is present and it is |TRUE| the result is a List
   * with all matching files. The advantage of using a List is,
   * you also get filenames containing newlines correctly.
   * Otherwise the result is a String and when there are several
   * matches, they are separated by <NL> characters.
   *
   * If the expansion fails, the result is an empty String or List.
   *
   * You can also use |readdir()| if you need to do complicated
   * things, such as limiting the number of matches.
   *
   * A name for a non-existing file is not included.  A symbolic
   * link is only included if it points to an existing file.
   * However, when the {alllinks} argument is present and it is
   * |TRUE| then all symbolic links are included.
   *
   * For most systems backticks can be used to get files names from
   * any external command.  Example: >
   *   :let tagfiles = glob("`find . -name tags -print`")
   *   :let &tags = substitute(tagfiles, "\n", ",", "g")
   *  The result of the program inside the backticks should be one
   * item per line.  Spaces inside an item are allowed.
   *
   * See |expand()| for expanding special Vim variables.  See
   * |system()| for getting the raw output of an external command.
   */
  glob: (expr: any, nosuf?: any, list?: any, alllinks?: any) => any;
  /**
   * Convert a file pattern, as used by glob(), into a search
   * pattern.  The result can be used to match with a string that
   * is a file name.  E.g. >
   *   if filename =~ glob2regpat('Make*.mak')
   *  This is equivalent to: >
   *   if filename =~ '^Make.*\.mak$'
   *  When {expr} is an empty string the result is "^$", match an
   * empty string.
   * Note that the result depends on the system.  On MS-Windows
   * a backslash usually means a path separator.
   */
  glob2regpat: (expr: any) => any;
  /**
   * Perform glob() on all directories in {path} and concatenate
   * the results.  Example: >
   *   :echo globpath(&rtp, "syntax/c.vim")
   *
   * {path} is a comma-separated list of directory names.  Each
   * directory name is prepended to {expr} and expanded like with
   * |glob()|.  A path separator is inserted when needed.
   * To add a comma inside a directory name escape it with a
   * backslash.  Note that on MS-Windows a directory may have a
   * trailing backslash, remove it if you put a comma after it.
   * If the expansion fails for one of the directories, there is no
   * error message.
   *
   * Unless the optional {nosuf} argument is given and is |TRUE|,
   * the 'suffixes' and 'wildignore' options apply: Names matching
   * one of the patterns in 'wildignore' will be skipped and
   * 'suffixes' affect the ordering of matches.
   *
   * When {list} is present and it is |TRUE| the result is a List
   * with all matching files. The advantage of using a List is, you
   * also get filenames containing newlines correctly. Otherwise
   * the result is a String and when there are several matches,
   * they are separated by <NL> characters.  Example: >
   *   :echo globpath(&rtp, "syntax/c.vim", 0, 1)
   *
   * {allinks} is used as with |glob()|.
   *
   * The "**" item can be used to search in a directory tree.
   * For example, to find all "README.txt" files in the directories
   * in 'runtimepath' and below: >
   *   :echo globpath(&rtp, "**‍/README.txt")
   *  Upwards search and limiting the depth of "**" is not
   * supported, thus using 'path' will not always work properly.
   */
  globpath: (
    path: any,
    expr: any,
    nosuf?: any,
    list?: any,
    allinks?: any
  ) => any;
  /**
   * Returns 1 if {feature} is supported, 0 otherwise.  The
   *     {feature} argument is a feature name like "nvim-0.2.1" or
   *     "win32", see below.  See also |exists()|.
   *
   *     Vim's compile-time feature-names (prefixed with "+") are not
   *     recognized because Nvim is always compiled with all possible
   *     features. |feature-compile|
   *
   *     Feature names can be:
   *     1.  Nvim version. For example the "nvim-0.2.1" feature means
   *         that Nvim is version 0.2.1 or later: >
   *       :if has("nvim-0.2.1")
   *
   * <    2.  Runtime condition or other pseudo-feature. For example the
   *         "win32" feature checks if the current system is Windows: >
   *       :if has("win32")
   */
  has: (feature: any) => any;
  /**
   * The result is a Number, which is 1 if |Dictionary| {dict} has
   * an entry with key {key}.  Zero otherwise.
   */
  has_key: (dict: any, key: any) => any;
  /**
   * The result is a Number, which is 1 when the tabpage or window
   * has set a local path via |:tcd| or |:lcd|, otherwise 0.
   *
   * Tabs and windows are identified by their respective numbers,
   * 0 means current tab or window. Missing argument implies 0.
   * Thus the following are equivalent: >
   *   haslocaldir()
   *   haslocaldir(0)
   *   haslocaldir(0, 0)
   *  With {winnr} use that window in the current tabpage.
   * With {winnr} and {tabnr} use the window in that tabpage.
   * {winnr} can be the window number or the |window-ID|.
   * If {winnr} is -1 it is ignored, only the tab is resolved.
   */
  haslocaldir: (winnr?: any, tabnr?: any) => any;
  /**
   * The result is a Number, which is 1 if there is a mapping that
   * contains {what} in somewhere in the rhs (what it is mapped to)
   * and this mapping exists in one of the modes indicated by
   * {mode}.
   * When {abbr} is there and it is |TRUE| use abbreviations
   * instead of mappings.  Don't forget to specify Insert and/or
   * Command-line mode.
   * Both the global mappings and the mappings local to the current
   * buffer are checked for a match.
   * If no matching mapping is found 0 is returned.
   * The following characters are recognized in {mode}:
   *   n  Normal mode
   *   v  Visual mode
   *   o  Operator-pending mode
   *   i  Insert mode
   *   l  Language-Argument ("r", "f", "t", etc.)
   *   c  Command-line mode
   * When {mode} is omitted, "nvo" is used.
   *
   * This function is useful to check if a mapping already exists
   * to a function in a Vim script.  Example: >
   *   :if !hasmapto('\ABCdoit')
   *   :   map <Leader>d \ABCdoit
   *   :endif
   *  This installs the mapping to "\ABCdoit" only if there isn't
   * already a mapping to "\ABCdoit".
   */
  hasmapto: (what: any, mode?: any, abbr?: any) => any;
  /**
   * Add the String {item} to the history {history} which can be
   */
  histadd: (history: any, item: any) => any;
  /**
   * Clear {history}, i.e. delete all its entries.  See |hist-names|
   * for the possible values of {history}.
   *
   * If the parameter {item} evaluates to a String, it is used as a
   * regular expression.  All entries matching that expression will
   * be removed from the history (if there are any).
   * Upper/lowercase must match, unless "\c" is used |/\c|.
   * If {item} evaluates to a Number, it will be interpreted as
   * an index, see |:history-indexing|.  The respective entry will
   * be removed if it exists.
   *
   * The result is a Number: 1 for a successful operation,
   * otherwise 0 is returned.
   *
   * Examples:
   * Clear expression register history: >
   *   :call histdel("expr")
   *
   * Remove all entries starting with "*" from the search history: >
   *   :call histdel("/", '^\*')
   *
   * The following three are equivalent: >
   *   :call histdel("search", histnr("search"))
   *   :call histdel("search", -1)
   *   :call histdel("search", '^'.histget("search", -1).'$')
   *
   * To delete the last search pattern and use the last-but-one for
   * the "n" command and 'hlsearch': >
   *   :call histdel("search", -1)
   *   :let @/ = histget("search", -1)
   */
  histdel: (history: any, item?: any) => any;
  /**
   * The result is a String, the entry with Number {index} from
   * {history}.  See |hist-names| for the possible values of
   * {history}, and |:history-indexing| for {index}.  If there is
   * no such entry, an empty String is returned.  When {index} is
   * omitted, the most recent item from the history is used.
   *
   * Examples:
   * Redo the second last search from history. >
   *   :execute '/' . histget("search", -2)
   *
   *  Define an Ex command ":H {num}" that supports re-execution of
   * the {num}th entry from the output of |:history|. >
   *   :command -nargs=1 H execute histget("cmd", 0+<args>)
   *
   */
  histget: (history: any, index?: any) => any;
  /**
   * The result is the Number of the current entry in {history}.
   * See |hist-names| for the possible values of {history}.
   * If an error occurred, -1 is returned.
   *
   * Example: >
   *   :let inp_index = histnr("expr")
   *
   */
  histnr: (history: any) => any;
  /**
   * The result is a Number, which is non-zero if a highlight group
   * called {name} exists.  This is when the group has been
   * defined in some way.  Not necessarily when highlighting has
   * been defined for it, it may also have been used for a syntax
   * item.
   */
  hlexists: (name: any) => any;
  /**
   * The result is a Number, which is the ID of the highlight group
   *     with name {name}.  When the highlight group doesn't exist,
   *     zero is returned.
   *     This can be used to retrieve information about the highlight
   *     group.  For example, to get the background color of the
   *     "Comment" group: >
   *   :echo synIDattr(synIDtrans(hlID("Comment")), "bg")
   */
  hlID: (name: any) => any;
  /**
   * The result is a String, which is the name of the machine on
   * which Vim is currently running.  Machine names greater than
   * 256 characters long are truncated.
   */
  hostname: () => any;
  /**
   * The result is a String, which is the text {expr} converted
   * from encoding {from} to encoding {to}.
   * When the conversion completely fails an empty string is
   * returned.  When some characters could not be converted they
   * are replaced with "?".
   * The encoding names are whatever the iconv() library function
   * can accept, see ":!man 3 iconv".
   * Most conversions require Vim to be compiled with the |+iconv|
   * feature.  Otherwise only UTF-8 to latin1 conversion and back
   * can be done.
   * Note that Vim uses UTF-8 for all Unicode encodings, conversion
   * from/to UCS-2 is automatically changed to use UTF-8.  You
   * cannot use UCS-2 in a string anyway, because of the NUL bytes.
   */
  iconv: (expr: any, from: any, to: any) => any;
  /**
   * The result is a Number, which is indent of line {lnum} in the
   *     current buffer.  The indent is counted in spaces, the value
   *     of 'tabstop' is relevant.  {lnum} is used just like in
   *     |getline()|.
   *     When {lnum} is invalid -1 is returned.
   */
  indent: (lnum: any) => any;
  /**
   * Return the lowest index in |List| {list} where the item has a
   * value equal to {expr}.  There is no automatic conversion, so
   * the String "4" is different from the Number 4.  And the number
   * 4 is different from the Float 4.0.  The value of 'ignorecase'
   * is not used here, case always matters.
   * If {start} is given then start looking at the item with index
   * {start} (may be negative for an item relative to the end).
   * When {ic} is given and it is |TRUE|, ignore case.  Otherwise
   * case must match.
   * -1 is returned when {expr} is not found in {list}.
   * Example: >
   *   :let idx = index(words, "the")
   *   :if index(numbers, 123) >= 0
   */
  index: (list: any, expr: any, start?: any, ic?: any) => any;
  /**
   * input({opts})
   *     The result is a String, which is whatever the user typed on
   *     the command-line.  The {prompt} argument is either a prompt
   *     string, or a blank string (for no prompt).  A '\n' can be used
   *     in the prompt to start a new line.
   *
   *     In the second form it accepts a single dictionary with the
   *     following keys, any of which may be omitted:
   *
   *     Key           Default  Description ~
   *     prompt        ""       Same as {prompt} in the first form.
   *     default       ""       Same as {text} in the first form.
   *     completion    nothing  Same as {completion} in the first form.
   *     cancelreturn  ""       Same as {cancelreturn} from
   *                            |inputdialog()|. Also works with
   *                            input().
   *     highlight     nothing  Highlight handler: |Funcref|.
   *
   *     The highlighting set with |:echohl| is used for the prompt.
   *     The input is entered just like a command-line, with the same
   *     editing commands and mappings.  There is a separate history
   *     for lines typed for input().
   *     Example: >
   *       :if input("Coffee or beer? ") == "beer"
   *       :  echo "Cheers!"
   *       :endif
   * <
   *     If the optional {text} argument is present and not empty, this
   *     is used for the default reply, as if the user typed this.
   *     Example: >
   *       :let color = input("Color? ", "white")
   *
   * <    The optional {completion} argument specifies the type of
   *     completion supported for the input.  Without it completion is
   *     not performed.  The supported completion types are the same as
   *     that can be supplied to a user-defined command using the
   *     "-complete=" argument.  Refer to |:command-completion| for
   *     more information.  Example: >
   *       let fname = input("File: ", "", "file")
   */
  input: (prompt: any, text?: any, completion?: any) => any;
  /**
   * {textlist} must be a |List| of strings.  This |List| is
   * displayed, one string per line.  The user will be prompted to
   * enter a number, which is returned.
   * The user can also select an item by clicking on it with the
   * mouse.  For the first string 0 is returned.  When clicking
   * above the first item a negative number is returned.  When
   * clicking on the prompt one more than the length of {textlist}
   * is returned.
   * Make sure {textlist} has less than 'lines' entries, otherwise
   * it won't work.  It's a good idea to put the entry number at
   * the start of the string.  And put a prompt in the first item.
   * Example: >
   *   let color = inputlist(['Select color:', '1. red',
   *     \ '2. green', '3. blue'])
   */
  inputlist: (textlist: any) => any;
  /**
   * Restore typeahead that was saved with a previous |inputsave()|.
   * Should be called the same number of times inputsave() is
   * called.  Calling it more often is harmless though.
   * Returns 1 when there is nothing to restore, 0 otherwise.
   */
  inputrestore: () => any;
  /**
   * Preserve typeahead (also from mappings) and clear it, so that
   * a following prompt gets input from the user.  Should be
   * followed by a matching inputrestore() after the prompt.  Can
   * be used several times, in which case there must be just as
   * many inputrestore() calls.
   * Returns 1 when out of memory, 0 otherwise.
   */
  inputsave: () => any;
  /**
   * This function acts much like the |input()| function with but
   * two exceptions:
   * a) the user's response will be displayed as a sequence of
   * asterisks ("*") thereby keeping the entry secret, and
   * b) the user's response will not be recorded on the input
   * |history| stack.
   * The result is a String, which is whatever the user actually
   * typed on the command-line in response to the issued prompt.
   * NOTE: Command-line completion is not supported.
   */
  inputsecret: (prompt: any, text?: any) => any;
  /**
   * Insert {item} at the start of |List| {list}.
   * If {idx} is specified insert {item} before the item with index
   * {idx}.  If {idx} is zero it goes before the first item, just
   * like omitting {idx}.  A negative {idx} is also possible, see
   * |list-index|.  -1 inserts just before the last item.
   * Returns the resulting |List|.  Examples: >
   *   :let mylist = insert([2, 3, 5], 1)
   *   :call insert(mylist, 4, -1)
   *   :call insert(mylist, 6, len(mylist))
   *  The last example can be done simpler with |add()|.
   * Note that when {item} is a |List| it is inserted as a single
   * item.  Use |extend()| to concatenate |Lists|.
   */
  insert: (list: any, item: any, idx?: any) => any;
  /**
   * Interrupt script execution.  It works more or less like the
   * user typing CTRL-C, most commands won't execute and control
   * returns to the user.  This is useful to abort execution
   * from lower down, e.g. in an autocommand.  Example: >
   * :function s:check_typoname(file)
   * :   if fnamemodify(a:file, ':t') == '['
   * :       echomsg 'Maybe typo'
   * :       call interrupt()
   * :   endif
   * :endfunction
   * :au BufWritePre * call s:check_typoname(expand('<amatch>'))
   */
  interrupt: () => any;
  /**
   * Bitwise invert.  The argument is converted to a number.  A
   * List, Dict or Float argument causes an error.  Example: >
   *   :let bits = invert(bits)
   */
  invert: (expr: any) => any;
  /**
   * The result is a Number, which is |TRUE| when a directory
   * with the name {directory} exists.  If {directory} doesn't
   * exist, or isn't a directory, the result is |FALSE|.  {directory}
   * is any expression, which is used as a String.
   */
  isdirectory: (directory: any) => any;
  /**
   * Return 1 if {expr} is a positive infinity, or -1 a negative
   * infinity, otherwise 0. >
   *   :echo isinf(1.0 / 0.0)
   *    1 >
   *   :echo isinf(-1.0 / 0.0)
   *    -1
   */
  isinf: (expr: any) => any;
  /**
   * The result is a Number, which is |TRUE| when {expr} is the
   * name of a locked variable.
   * {expr} must be the name of a variable, |List| item or
   * |Dictionary| entry, not the variable itself!  Example: >
   *   :let alist = [0, ['a', 'b'], 2, 3]
   *   :lockvar 1 alist
   *   :echo islocked('alist')    " 1
   *   :echo islocked('alist[1]')  " 0
   *
   *  When {expr} is a variable that does not exist you get an error
   * message.  Use |exists()| to check for existence.
   */
  islocked: (expr: any) => any;
  /**
   * Returns a |String| which is a unique identifier of the
   * container type (|List|, |Dict| and |Partial|). It is
   * guaranteed that for the mentioned types `id(v1) ==# id(v2)`
   * returns true iff `type(v1) == type(v2) && v1 is v2` (note:
   * |v:_null_list| and |v:_null_dict| have the same `id()` with
   * different types because they are internally represented as
   * a NULL pointers). Currently `id()` returns a hexadecimal
   * representanion of the pointers to the containers (i.e. like
   * `0x994a40`), same as `printf("%p", {expr})`, but it is advised
   * against counting on exact format of return value.
   *
   * It is not guaranteed that `id(no_longer_existing_container)`
   * will not be equal to some other `id()`: new containers may
   * reuse identifiers of the garbage-collected ones.
   */
  id: (expr: any) => any;
  /**
   * Return a |List| with all the key-value pairs of {dict}.  Each
   * |List| item is a list with two items: the key of a {dict}
   * entry and the value of this entry.  The |List| is in arbitrary
   * order.
   */
  items: (dict: any) => any;
  /**
   * Return |TRUE| if {expr} is a float with value NaN. >
   *   echo isnan(0.0 / 0.0)
   *    1
   */
  isnan: (expr: any) => any;
  /**
   * Return the PID (process id) of |job-id| {job}.
   */
  jobpid: (job: any) => any;
  /**
   * Resize the pseudo terminal window of |job-id| {job} to {width}
   * columns and {height} rows.
   * Fails if the job was not started with `"pty":v:true`.
   */
  jobresize: (job: any, width: any, height: any) => any;
  /**
   * Spawns {cmd} as a job.
   * If {cmd} is a List it runs directly (no 'shell').
   * If {cmd} is a String it runs in the 'shell', like this: >
   *   :call jobstart(split(&shell) + split(&shellcmdflag) + ['{cmd}'])
   *  (See |shell-unquoting| for details.)
   *
   * Example: >
   *   :call jobstart('nvim -h', {'on_stdout':{j,d,e->append(line('.'),d)}})
   *
   * Returns |job-id| on success, 0 on invalid arguments (or job
   * table is full), -1 if {cmd}[0] or 'shell' is not executable.
   * The returned job-id is a valid |channel-id| representing the
   * job's stdio streams. Use |chansend()| (or |rpcnotify()| and
   * |rpcrequest()| if "rpc" was enabled) to send data to stdin and
   * |chanclose()| to close the streams without stopping the job.
   *
   * See |job-control| and |RPC|.
   *
   * NOTE: on Windows if {cmd} is a List:
   *   - cmd[0] must be an executable (not a "built-in"). If it is
   *     in $PATH it can be called by name, without an extension: >
   *       :call jobstart(['ping', 'neovim.io'])
   *      If it is a full or partial path, extension is required: >
   *       :call jobstart(['System32\ping.exe', 'neovim.io'])
   *    - {cmd} is collapsed to a string of quoted args as expected
   *     by CommandLineToArgvW https://msdn.microsoft.com/bb776391
   *     unless cmd[0] is some form of "cmd.exe".
   */
  jobstart: (cmd: any, opts?: any) => any;
  /**
   * Stop |job-id| {id} by sending SIGTERM to the job process. If
   * the process does not terminate after a timeout then SIGKILL
   * will be sent. When the job terminates its |on_exit| handler
   * (if any) will be invoked.
   * See |job-control|.
   *
   * Returns 1 for valid job id, 0 for invalid id, including jobs have
   * exited or stopped.
   */
  jobstop: (id: any) => any;
  /**
   * Waits for jobs and their |on_exit| handlers to complete.
   *
   * {jobs} is a List of |job-id|s to wait for.
   * {timeout} is the maximum waiting time in milliseconds, -1
   * means forever.
   *
   * Timeout of 0 can be used to check the status of a job: >
   *   let running = jobwait([{job-id}], 0)[0] == -1
   *
   * During jobwait() callbacks for jobs not in the {jobs} list may
   * be invoked. The screen will not redraw unless |:redraw| is
   * invoked by a callback.
   *
   * Returns a list of len({jobs}) integers, where each integer is
   * the status of the corresponding job:
   *   Exit-code, if the job exited
   *   -1 if the timeout was exceeded
   *   -2 if the job was interrupted (by |CTRL-C|)
   *   -3 if the job-id is invalid
   */
  jobwait: (jobs: any, timeout?: any) => any;
  /**
   * Join the items in {list} together into one String.
   * When {sep} is specified it is put in between the items.  If
   * {sep} is omitted a single space is used.
   * Note that {sep} is not added at the end.  You might want to
   * add it there too: >
   *   let lines = join(mylist, "\n") . "\n"
   *  String items are used as-is.  |Lists| and |Dictionaries| are
   * converted into a string like with |string()|.
   * The opposite function is |split()|.
   */
  join: (list: any, sep?: any) => any;
  /**
   * Convert {expr} from JSON object.  Accepts |readfile()|-style
   * list as the input, as well as regular string.  May output any
   * Vim value. In the following cases it will output
   * |msgpack-special-dict|:
   * 1. Dictionary contains duplicate key.
   * 2. Dictionary contains empty key.
   * 3. String contains NUL byte.  Two special dictionaries: for
   *    dictionary and for string will be emitted in case string
   *    with NUL byte was a dictionary key.
   *
   * Note: function treats its input as UTF-8 always.  The JSON
   * standard allows only a few encodings, of which UTF-8 is
   * recommended and the only one required to be supported.
   * Non-UTF-8 characters are an error.
   */
  json_decode: (expr: any) => any;
  /**
   * Convert {expr} into a JSON string.  Accepts
   * |msgpack-special-dict| as the input.  Will not convert
   * |Funcref|s, mappings with non-string keys (can be created as
   * |msgpack-special-dict|), values with self-referencing
   * containers, strings which contain non-UTF-8 characters,
   * pseudo-UTF-8 strings which contain codepoints reserved for
   * surrogate pairs (such strings are not valid UTF-8 strings).
   * Non-printable characters are converted into "\u1234" escapes
   * or special escapes like "\t", other are dumped as-is.
   */
  json_encode: (expr: any) => any;
  /**
   * Return a |List| with all the keys of {dict}.  The |List| is in
   * arbitrary order.
   */
  keys: (dict: any) => any;
  /**
   * The result is a Number, which is the length of the argument.
   *     When {expr} is a String or a Number the length in bytes is
   *     used, as with |strlen()|.
   *     When {expr} is a |List| the number of items in the |List| is
   *     returned.
   *     When {expr} is a |Blob| the number of bytes is returned.
   *     When {expr} is a |Dictionary| the number of entries in the
   *     |Dictionary| is returned.
   *     Otherwise an error is given.
   */
  len: (expr: any) => any;
  /**
   * Call function {funcname} in the run-time library {libname}
   * with single argument {argument}.
   * This is useful to call functions in a library that you
   * especially made to be used with Vim.  Since only one argument
   * is possible, calling standard library functions is rather
   * limited.
   * The result is the String returned by the function.  If the
   * function returns NULL, this will appear as an empty string ""
   * to Vim.
   * If the function returns a number, use libcallnr()!
   * If {argument} is a number, it is passed to the function as an
   * int; if {argument} is a string, it is passed as a
   * null-terminated string.
   *
   * libcall() allows you to write your own 'plug-in' extensions to
   * Vim without having to recompile the program.  It is NOT a
   * means to call system functions!  If you try to do so Vim will
   * very probably crash.
   *
   * For Win32, the functions you write must be placed in a DLL
   * and use the normal C calling convention (NOT Pascal which is
   * used in Windows System DLLs).  The function must take exactly
   * one parameter, either a character pointer or a long integer,
   * and must return a character pointer or NULL.  The character
   * pointer returned must point to memory that will remain valid
   * after the function has returned (e.g. in static data in the
   * DLL).  If it points to allocated memory, that memory will
   * leak away.  Using a static buffer in the function should work,
   * it's then freed when the DLL is unloaded.
   *
   * WARNING: If the function returns a non-valid pointer, Vim may
   * crash!  This also happens if the function returns a number,
   * because Vim thinks it's a pointer.
   * For Win32 systems, {libname} should be the filename of the DLL
   * without the ".DLL" suffix.  A full path is only required if
   * the DLL is not in the usual places.
   * For Unix: When compiling your own plugins, remember that the
   * object code must be compiled as position-independent ('PIC').
   * Examples: >
   *   :echo libcall("libc.so", "getenv", "HOME")
   *
   */
  libcall: (libname: any, funcname: any, argument: any) => any;
  /**
   * Just like |libcall()|, but used for a function that returns an
   * int instead of a string.
   * Examples: >
   *   :echo libcallnr("/usr/lib/libc.so", "getpid", "")
   *   :call libcallnr("libc.so", "printf", "Hello World!\n")
   *   :call libcallnr("libc.so", "sleep", 10)
   *
   */
  libcallnr: (libname: any, funcname: any, argument: any) => any;
  /**
   * The result is a Number, which is the line number of the file
   *     position given with {expr}.  The accepted positions are:
   *         .      the cursor position
   *         $      the last line in the current buffer
   *         'x      position of mark x (if the mark is not set, 0 is
   *           returned)
   *         w0      first line visible in current window (one if the
   *           display isn't updated, e.g. in silent Ex mode)
   *         w$      last line visible in current window (this is one
   *           less than "w0" if no lines are visible)
   *         v      In Visual mode: the start of the Visual area (the
   *           cursor is the end).  When not in Visual mode
   *           returns the cursor position.  Differs from |'<| in
   *           that it's updated right away.
   *     Note that a mark in another file can be used.  The line number
   *     then applies to another buffer.
   *     To get the column number use |col()|.  To get both use
   *     |getpos()|.
   *     Examples: >
   *       line(".")    line number of the cursor
   *       line("'t")    line number of mark t
   *       line("'" . marker)  line number of mark marker
   */
  line: (expr: any) => any;
  /**
   * Return the byte count from the start of the buffer for line
   * {lnum}.  This includes the end-of-line character, depending on
   * the 'fileformat' option for the current buffer.  The first
   * line returns 1. UTF-8 encoding is used, 'fileencoding' is
   * ignored.  This can also be used to get the byte count for the
   * line just below the last line: >
   *   line2byte(line("$") + 1)
   *  This is the buffer size plus one.  If 'fileencoding' is empty
   * it is the file size plus one.
   * When {lnum} is invalid -1 is returned.
   * Also see |byte2line()|, |go| and |:goto|.
   */
  line2byte: (lnum: any) => any;
  /**
   * Get the amount of indent for line {lnum} according the lisp
   * indenting rules, as with 'lisp'.
   * The indent is counted in spaces, the value of 'tabstop' is
   * relevant.  {lnum} is used just like in |getline()|.
   * When {lnum} is invalid or Vim was not compiled the
   * |+lispindent| feature, -1 is returned.
   */
  lispindent: (lnum: any) => any;
  /**
   * Convert each number in {list} to a character string can
   * concatenate them all.  Examples: >
   *   list2str([32])    returns " "
   *   list2str([65, 66, 67])  returns "ABC"
   *  The same can be done (slowly) with: >
   *   join(map(list, {nr, val -> nr2char(val)}), '')
   *  |str2list()| does the opposite.
   *
   * When {utf8} is omitted or zero, the current 'encoding' is used.
   * With {utf8} is 1, always return utf-8 characters.
   * With utf-8 composing characters work as expected: >
   *   list2str([97, 769])  returns "á"
   *
   */
  list2str: (list: any, utf8?: any) => any;
  /**
   * Return the current time, measured as seconds since 1st Jan
   * 1970.  See also |strftime()| and |getftime()|.
   */
  localtime: () => any;
  /**
   * Return the natural logarithm (base e) of {expr} as a |Float|.
   * {expr} must evaluate to a |Float| or a |Number| in the range
   * (0, inf].
   * Examples: >
   *   :echo log(10)
   *    2.302585 >
   *   :echo log(exp(5))
   *    5.0
   */
  log: (expr: any) => any;
  /**
   * Return the logarithm of Float {expr} to base 10 as a |Float|.
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo log10(1000)
   *    3.0 >
   *   :echo log10(0.01)
   *    -2.0
   *
   * val({expr}[, {expr}])
   * Evaluate Lua expression {expr} and return its result converted
   * to Vim data structures. See |lua-eval| for more details.
   */
  log10: (expr: any) => any;
  /**
   * {expr1} must be a |List| or a |Dictionary|.
   * Replace each item in {expr1} with the result of evaluating
   * {expr2}. {expr2} must be a |string| or |Funcref|.
   *
   * If {expr2} is a |string|, inside {expr2} |v:val| has the value
   * of the current item. For a |Dictionary| |v:key| has the key
   * of the current item and for a |List| |v:key| has the index of
   * the current item.
   * Example: >
   *   :call map(mylist, '"> " . v:val . " <"')
   *  This puts "> " before and " <" after each item in "mylist".
   *
   * Note that {expr2} is the result of an expression and is then
   * used as an expression again.  Often it is good to use a
   * |literal-string| to avoid having to double backslashes.  You
   * still have to double ' quotes
   *
   * If {expr2} is a |Funcref| it is called with two arguments:
   *   1. The key or the index of the current item.
   *   2. the value of the current item.
   * The function must return the new value of the item. Example
   * that changes each value by "key-value": >
   *   func KeyValue(key, val)
   *     return a:key . '-' . a:val
   *   endfunc
   *   call map(myDict, function('KeyValue'))
   *  It is shorter when using a |lambda|: >
   *   call map(myDict, {key, val -> key . '-' . val})
   *  If you do not use "val" you can leave it out: >
   *   call map(myDict, {key -> 'item: ' . key})
   *  If you do not use "key" you can use a short name: >
   *   call map(myDict, {_, val -> 'item: ' . val})
   *
   * The operation is done in-place.  If you want a |List| or
   * |Dictionary| to remain unmodified make a copy first: >
   *   :let tlist = map(copy(mylist), ' v:val . "\t"')
   *
   *  Returns {expr1}, the |List| or |Dictionary| that was filtered.
   * When an error is encountered while evaluating {expr2} no
   * further items in {expr1} are processed. When {expr2} is a
   * Funcref errors inside a function are ignored, unless it was
   * defined with the "abort" flag.
   */
  map: (expr1: any, expr2: any) => any;
  /**
   * When {dict} is omitted or zero: Return the rhs of mapping
   * {name} in mode {mode}.  The returned String has special
   * characters translated like in the output of the ":map" command
   * listing.
   *
   * When there is no mapping for {name}, an empty String is
   * returned.  When the mapping for {name} is empty, then "<Nop>"
   * is returned.
   *
   * The {name} can have special key names, like in the ":map"
   * command.
   *
   * {mode} can be one of these strings:
   *   "n"  Normal
   *   "v"  Visual (including Select)
   *   "o"  Operator-pending
   *   "i"  Insert
   *   "c"  Cmd-line
   *   "s"  Select
   *   "x"  Visual
   *   "l"  langmap |language-mapping|
   *   "t"  Terminal
   *   ""  Normal, Visual and Operator-pending
   * When {mode} is omitted, the modes for "" are used.
   *
   * When {abbr} is there and it is |TRUE| use abbreviations
   * instead of mappings.
   *
   * When {dict} is there and it is |TRUE| return a dictionary
   * containing all the information of the mapping with the
   * following items:
   *   "lhs"       The {lhs} of the mapping.
   *   "rhs"       The {rhs} of the mapping as typed.
   *   "silent"   1 for a |:map-silent| mapping, else 0.
   *   "noremap"  1 if the {rhs} of the mapping is not remappable.
   *   "script"   1 if mapping was defined with <script>.
   *   "expr"     1 for an expression mapping (|:map-<expr>|).
   *   "buffer"   1 for a buffer local mapping (|:map-local|).
   *   "mode"     Modes for which the mapping is defined. In
   *        addition to the modes mentioned above, these
   *        characters will be used:
   *        " "     Normal, Visual and Operator-pending
   *        "!"     Insert and Commandline mode
   *          (|mapmode-ic|)
   *   "sid"       The script local ID, used for <sid> mappings
   *        (|<SID>|).
   *   "lnum"     The line number in "sid", zero if unknown.
   *   "nowait"   Do not wait for other, longer mappings.
   *        (|:map-<nowait>|).
   *
   * The mappings local to the current buffer are checked first,
   * then the global mappings.
   * This function can be used to map a key even when it's already
   * mapped, and have it do the original mapping too.  Sketch: >
   *   exe 'nnoremap <Tab> ==' . maparg('<Tab>', 'n')
   */
  maparg: (name: any, mode?: any, abbr?: any, dict?: any) => any;
  /**
   * Check if there is a mapping that matches with {name} in mode
   * {mode}.  See |maparg()| for {mode} and special names in
   * {name}.
   * When {abbr} is there and it is non-zero use abbreviations
   * instead of mappings.
   * A match happens with a mapping that starts with {name} and
   * with a mapping which is equal to the start of {name}.
   *
   *   matches mapping "a"  "ab"  "abc" ~
   *    mapcheck("a")  yes  yes   yes
   *    mapcheck("abc")  yes  yes   yes
   *    mapcheck("ax")  yes  no   no
   *    mapcheck("b")  no  no   no
   *
   * The difference with maparg() is that mapcheck() finds a
   * mapping that matches with {name}, while maparg() only finds a
   * mapping for {name} exactly.
   * When there is no mapping that starts with {name}, an empty
   * String is returned.  If there is one, the RHS of that mapping
   * is returned.  If there are several mappings that start with
   * {name}, the RHS of one of them is returned.  This will be
   * "<Nop>" if the RHS is empty.
   * The mappings local to the current buffer are checked first,
   * then the global mappings.
   * This function can be used to check if a mapping can be added
   * without being ambiguous.  Example: >
   * f mapcheck("_vv") == ""
   *   map _vv :set guifont=7x13<CR>
   * ndif
   *  This avoids adding the "_vv" mapping when there already is a
   * mapping for "_v" or for "_vvv".
   */
  mapcheck: (name: any, mode?: any, abbr?: any) => any;
  /**
   * When {expr} is a |List| then this returns the index of the
   * first item where {pat} matches.  Each item is used as a
   * String, |Lists| and |Dictionaries| are used as echoed.
   *
   * Otherwise, {expr} is used as a String.  The result is a
   * Number, which gives the index (byte offset) in {expr} where
   * {pat} matches.
   *
   * A match at the first character or |List| item returns zero.
   * If there is no match -1 is returned.
   *
   * For getting submatches see |matchlist()|.
   * Example: >
   *   :echo match("testing", "ing")  " results in 4
   *   :echo match([1, 'x'], '\a')  " results in 1
   *  See |string-match| for how {pat} is used.
   */
  match: (expr: any, pat: any, start?: any, count?: any) => any;
  /**
   * Vim doesn't have a strpbrk() function.  But you can do: >
   *       :let sepidx = match(line, '[.,;: \t]')
   */
  strpbrk: () => any;
  /**
   * Vim doesn't have a strcasestr() function.  But you can add
   * "\c" to the pattern to ignore case: >
   *   :let idx = match(haystack, '\cneedle')
   *
   * If {start} is given, the search starts from byte index
   * {start} in a String or item {start} in a |List|.
   * The result, however, is still the index counted from the
   * first character/item.  Example: >
   *   :echo match("testing", "ing", 2)
   *  result is again "4". >
   *   :echo match("testing", "ing", 4)
   *  result is again "4". >
   *   :echo match("testing", "t", 2)
   *  result is "3".
   * For a String, if {start} > 0 then it is like the string starts
   * {start} bytes later, thus "^" will match at {start}.  Except
   * when {count} is given, then it's like matches before the
   * {start} byte are ignored (this is a bit complicated to keep it
   * backwards compatible).
   * For a String, if {start} < 0, it will be set to 0.  For a list
   * the index is counted from the end.
   * If {start} is out of range ({start} > strlen({expr}) for a
   * String or {start} > len({expr}) for a |List|) -1 is returned.
   *
   * When {count} is given use the {count}'th match.  When a match
   * is found in a String the search for the next one starts one
   * character further.  Thus this example results in 1: >
   *   echo match("testing", "..", 0, 2)
   *  In a |List| the search continues in the next item.
   * Note that when {count} is added the way {start} works changes,
   * see above.
   *
   * See |pattern| for the patterns that are accepted.
   * The 'ignorecase' option is used to set the ignore-caseness of
   * the pattern.  'smartcase' is NOT used.  The matching is always
   * done like 'magic' is set and 'cpoptions' is empty.
   */
  strcasestr: () => any;
  /**
   * Defines a pattern to be highlighted in the current window (a
   * "match").  It will be highlighted with {group}.  Returns an
   * identification number (ID), which can be used to delete the
   * match using |matchdelete()|.  The ID is bound to the window.
   * Matching is case sensitive and magic, unless case sensitivity
   * or magicness are explicitly overridden in {pattern}.  The
   * 'magic', 'smartcase' and 'ignorecase' options are not used.
   * The "Conceal" value is special, it causes the match to be
   * concealed.
   *
   * The optional {priority} argument assigns a priority to the
   * match.  A match with a high priority will have its
   * highlighting overrule that of a match with a lower priority.
   * A priority is specified as an integer (negative numbers are no
   * exception).  If the {priority} argument is not specified, the
   * default priority is 10.  The priority of 'hlsearch' is zero,
   * hence all matches with a priority greater than zero will
   * overrule it.  Syntax highlighting (see 'syntax') is a separate
   * mechanism, and regardless of the chosen priority a match will
   * always overrule syntax highlighting.
   *
   * The optional {id} argument allows the request for a specific
   * match ID.  If a specified ID is already taken, an error
   * message will appear and the match will not be added.  An ID
   * is specified as a positive integer (zero excluded).  IDs 1, 2
   * and 3 are reserved for |:match|, |:2match| and |:3match|,
   * respectively.  If the {id} argument is not specified or -1,
   * |matchadd()| automatically chooses a free ID.
   *
   * The optional {dict} argument allows for further custom
   * values. Currently this is used to specify a match specific
   * conceal character that will be shown for |hl-Conceal|
   * highlighted matches. The dict can have the following members:
   *
   *   conceal      Special character to show instead of the
   *         match (only for |hl-Conceal| highlighed
   *         matches, see |:syn-cchar|)
   *   window      Instead of the current window use the
   *         window with this number or window ID.
   *
   * The number of matches is not limited, as it is the case with
   * the |:match| commands.
   *
   * Example: >
   *   :highlight MyGroup ctermbg=green guibg=green
   *   :let m = matchadd("MyGroup", "TODO")
   *  Deletion of the pattern: >
   *   :call matchdelete(m)
   *
   *  A list of matches defined by |matchadd()| and |:match| are
   * available from |getmatches()|.  All matches can be deleted in
   * one operation by |clearmatches()|.
   */
  matchadd: (
    group: any,
    pattern: any,
    priority?: any,
    id?: any,
    dict?: any
  ) => any;
  /**
   * Same as |matchadd()|, but requires a list of positions {pos}
   * instead of a pattern. This command is faster than |matchadd()|
   * because it does not require to handle regular expressions and
   * sets buffer line boundaries to redraw screen. It is supposed
   * to be used when fast match additions and deletions are
   * required, for example to highlight matching parentheses.
   */
  matchaddpos: (
    group: any,
    pos: any,
    priority?: any,
    id?: any,
    dict?: any
  ) => any;
  /**
   * Selects the {nr} match item, as set with a |:match|,
   * |:2match| or |:3match| command.
   * Return a |List| with two elements:
   *   The name of the highlight group used
   *   The pattern used.
   * When {nr} is not 1, 2 or 3 returns an empty |List|.
   * When there is no match item set returns ['', ''].
   * This is useful to save and restore a |:match|.
   * Highlighting matches using the |:match| commands are limited
   * to three matches. |matchadd()| does not have this limitation.
   */
  matcharg: (nr: any) => any;
  /**
   * Deletes a match with ID {id} previously defined by |matchadd()|
   * or one of the |:match| commands.  Returns 0 if successful,
   * otherwise -1.  See example for |matchadd()|.  All matches can
   * be deleted in one operation by |clearmatches()|.
   * If {win} is specified, use the window with this number or
   * window ID instead of the current window.
   */
  matchdelete: (id: any, win?: any) => any;
  /**
   * Same as |match()|, but return the index of first character
   * after the match.  Example: >
   *   :echo matchend("testing", "ing")
   *  results in "7".
   */
  matchend: (expr: any, pat: any, start?: any, count?: any) => any;
  /**
   * Same as |match()|, but return a |List|.  The first item in the
   * list is the matched string, same as what matchstr() would
   * return.  Following items are submatches, like "\1", "\2", etc.
   * in |:substitute|.  When an optional submatch didn't match an
   * empty string is used.  Example: >
   *   echo matchlist('acd', '\(a\)\?\(b\)\?\(c\)\?\(.*\)')
   *  Results in: ['acd', 'a', '', 'c', 'd', '', '', '', '', '']
   * When there is no match an empty list is returned.
   */
  matchlist: (expr: any, pat: any, start?: any, count?: any) => any;
  /**
   * Same as |match()|, but return the matched string.  Example: >
   *   :echo matchstr("testing", "ing")
   *  results in "ing".
   * When there is no match "" is returned.
   * The {start}, if given, has the same meaning as for |match()|. >
   *   :echo matchstr("testing", "ing", 2)
   *  results in "ing". >
   *   :echo matchstr("testing", "ing", 5)
   *  result is "".
   * When {expr} is a |List| then the matching item is returned.
   * The type isn't changed, it's not necessarily a String.
   */
  matchstr: (expr: any, pat: any, start?: any, count?: any) => any;
  /**
   * Same as |matchstr()|, but return the matched string, the start
   * position and the end position of the match.  Example: >
   *   :echo matchstrpos("testing", "ing")
   *  results in ["ing", 4, 7].
   * When there is no match ["", -1, -1] is returned.
   * The {start}, if given, has the same meaning as for |match()|. >
   *   :echo matchstrpos("testing", "ing", 2)
   *  results in ["ing", 4, 7]. >
   *   :echo matchstrpos("testing", "ing", 5)
   *  result is ["", -1, -1].
   * When {expr} is a |List| then the matching item, the index
   * of first item where {pat} matches, the start position and the
   * end position of the match are returned. >
   *   :echo matchstrpos([1, '__x'], '\a')
   *  result is ["x", 1, 2, 3].
   * The type isn't changed, it's not necessarily a String.
   */
  matchstrpos: (expr: any, pat: any, start?: any, count?: any) => any;
  /**
   * Return the maximum value of all items in {expr}.
   *     {expr} can be a list or a dictionary.  For a dictionary,
   *     it returns the maximum of all values in the dictionary.
   *     If {expr} is neither a list nor a dictionary, or one of the
   *     items in {expr} cannot be used as a Number this results in
   *                 an error.  An empty |List| or |Dictionary| results in zero.
   */
  max: (expr: any) => any;
  /**
   * Returns a |List| of |Dictionaries| describing |menus| (defined
   * by |:menu|, |:amenu|, …), including |hidden-menus|.
   *
   * {path} matches a menu by name, or all menus if {path} is an
   * empty string.  Example: >
   *   :echo menu_get('File','')
   *   :echo menu_get('')
   *
   * {modes} is a string of zero or more modes (see |maparg()| or
   * |creating-menus| for the list of modes). "a" means "all".
   *
   * Example: >
   *   nnoremenu &Test.Test inormal
   *   inoremenu Test.Test insert
   *   vnoremenu Test.Test x
   *   echo menu_get("")
   *
   *  returns something like this: >
   *
   *   [ {
   *     "hidden": 0,
   *     "name": "Test",
   *     "priority": 500,
   *     "shortcut": 84,
   *     "submenus": [ {
   *       "hidden": 0,
   *       "mappings": {
   *         i": {
   *     "enabled": 1,
   *     "noremap": 1,
   *     "rhs": "insert",
   *     "sid": 1,
   *     "silent": 0
   *         },
   *         n": { ... },
   *         s": { ... },
   *         v": { ... }
   *       },
   *       "name": "Test",
   *       "priority": 500,
   *       "shortcut": 0
   *     } ]
   *   } ]
   *
   */
  menu_get: (path: any, modes: any) => any;
  /**
   * Return the minimum value of all items in {expr}.
   *     {expr} can be a list or a dictionary.  For a dictionary,
   *     it returns the minimum of all values in the dictionary.
   *     If {expr} is neither a list nor a dictionary, or one of the
   *     items in {expr} cannot be used as a Number this results in
   *     an error.  An empty |List| or |Dictionary| results in zero.
   */
  min: (expr: any) => any;
  /**
   * Create directory {name}.
   * If {path} is "p" then intermediate directories are created as
   * necessary.  Otherwise it must be "".
   * If {prot} is given it is used to set the protection bits of
   * the new directory.  The default is 0755 (rwxr-xr-x: r/w for
   * the user readable for others).  Use 0700 to make it unreadable
   * for others.
   *
   * {prot} is applied for all parts of {name}.  Thus if you create
   * /tmp/foo/bar then /tmp/foo will be created with 0700. Example: >
   *   :call mkdir($HOME . "/tmp/foo/bar", "p", 0700)
   *  This function is not available in the |sandbox|.
   *
   * If you try to create an existing directory with {path} set to
   * "p" mkdir() will silently exit.
   */
  mkdir: (name: any, path?: any, prot?: any) => any;
  /**
   * Return a string that indicates the current mode.
   *     If [expr] is supplied and it evaluates to a non-zero Number or
   *     a non-empty String (|non-zero-arg|), then the full mode is
   *     returned, otherwise only the first letter is returned.
   *
   *        n      Normal
   *        no      Operator-pending
   *        nov      Operator-pending (forced charwise |o_v|)
   *        noV      Operator-pending (forced linewise |o_V|)
   *        noCTRL-V Operator-pending (forced blockwise |o_CTRL-V|)
   *         CTRL-V is one character
   *        niI      Normal using |i_CTRL-O| in |Insert-mode|
   *        niR      Normal using |i_CTRL-O| in |Replace-mode|
   *        niV      Normal using |i_CTRL-O| in |Virtual-Replace-mode|
   *        v      Visual by character
   *        V      Visual by line
   *        CTRL-V   Visual blockwise
   *        s      Select by character
   *        S      Select by line
   *        CTRL-S   Select blockwise
   *        i      Insert
   *        ic      Insert mode completion |compl-generic|
   *        ix      Insert mode |i_CTRL-X| completion
   *        R      Replace |R|
   *        Rc      Replace mode completion |compl-generic|
   *        Rv      Virtual Replace |gR|
   *        Rx      Replace mode |i_CTRL-X| completion
   *        c      Command-line editing
   *        cv      Vim Ex mode |gQ|
   *        ce      Normal Ex mode |Q|
   *        r      Hit-enter prompt
   *        rm      The -- more -- prompt
   *        r?      |:confirm| query of some sort
   *        !      Shell or external command is executing
   *        t      Terminal mode: keys go to the job
   *     This is useful in the 'statusline' option or when used
   *     with |remote_expr()| In most other places it always returns
   *     "c" or "n".
   *     Note that in the future more modes and more specific modes may
   *     be added. It's better not to compare the whole string but only
   *     the leading character(s).
   *     Also see |visualmode()|.
   */
  mode: (expr?: any) => any;
  /**
   * Convert a list of VimL objects to msgpack. Returned value is
   * |readfile()|-style list. Example: >
   *   call writefile(msgpackdump([{}]), 'fname.mpack', 'b')
   *  This will write the single 0x80 byte to `fname.mpack` file
   * (dictionary with zero items is represented by 0x80 byte in
   * messagepack).
   */
  msgpackdump: (list: any) => any;
  /**
   * Convert a |readfile()|-style list to a list of VimL objects.
   * Example: >
   *   let fname = expand('~/.config/nvim/shada/main.shada')
   *   let mpack = readfile(fname, 'b')
   *   let shada_objects = msgpackparse(mpack)
   *  This will read ~/.config/nvim/shada/main.shada file to
   * `shada_objects` list.
   *
   * Limitations:
   * 1. Mapping ordering is not preserved unless messagepack
   *    mapping is dumped using generic  mapping
   *    (|msgpack-special-map|).
   * 2. Since the parser aims to preserve all data untouched
   *    (except for 1.) some strings are parsed to
   *    |msgpack-special-dict| format which is not convenient to
   *    use.
   */
  msgpackparse: (list: any) => any;
  /**
   * Return the line number of the first line at or below {lnum}
   * that is not blank.  Example: >
   *   if getline(nextnonblank(1)) =~ "Java"
   *  When {lnum} is invalid or there is no non-blank line at or
   * below it, zero is returned.
   * See also |prevnonblank()|.
   */
  nextnonblank: (lnum: any) => any;
  /**
   * Return a string with a single character, which has the number
   * value {expr}.  Examples: >
   *   nr2char(64)    returns "@"
   *   nr2char(32)    returns " "
   *  Example for "utf-8": >
   *   nr2char(300)    returns I with bow character
   *  UTF-8 encoding is always used, {utf8} option has no effect,
   * and exists only for backwards-compatibility.
   * Note that a NUL character in the file is specified with
   * nr2char(10), because NULs are represented with newline
   * characters.  nr2char(0) is a real NUL and terminates the
   * string, thus results in an empty string.
   */
  nr2char: (expr: any, utf8?: any) => any;
  /**
   * Bitwise OR on the two arguments.  The arguments are converted
   * to a number.  A List, Dict or Float argument causes an error.
   * Example: >
   *   :let bits = or(bits, 0x80)
   */
  or: (expr1: any, expr2: any) => any;
  /**
   * Shorten directory names in the path {expr} and return the
   * result.  The tail, the file name, is kept as-is.  The other
   * components in the path are reduced to single letters.  Leading
   * '~' and '.' characters are kept.  Example: >
   *   :echo pathshorten('~/.config/nvim/autoload/file1.vim')
   *    ~/.c/n/a/file1.vim ~
   * It doesn't matter if the path exists or not.
   */
  pathshorten: (expr: any) => any;
  /**
   * Evaluate |perl| expression {expr} and return its result
   * converted to Vim data structures.
   * Numbers and strings are returned as they are (strings are
   * copied though).
   * Lists are represented as Vim |List| type.
   * Dictionaries are represented as Vim |Dictionary| type,
   * non-string keys result in error.
   *
   * Note: If you want an array or hash, {expr} must return a
   * reference to it.
   * Example: >
   *   :echo perleval('[1 .. 4]')
   *    [1, 2, 3, 4]
   */
  perleval: (expr: any) => any;
  /**
   * Return the power of {x} to the exponent {y} as a |Float|.
   * {x} and {y} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo pow(3, 3)
   *    27.0 >
   *   :echo pow(2, 16)
   *    65536.0 >
   *   :echo pow(32, 0.20)
   *    2.0
   */
  pow: (x: any, y: any) => any;
  /**
   * Return the line number of the first line at or above {lnum}
   * that is not blank.  Example: >
   *   let ind = indent(prevnonblank(v:lnum - 1))
   *  When {lnum} is invalid or there is no non-blank line at or
   * above it, zero is returned.
   * Also see |nextnonblank()|.
   */
  prevnonblank: (lnum: any) => any;
  /**
   * Return a String with {fmt}, where "%" items are replaced by
   * the formatted form of their respective arguments.  Example: >
   *   printf("%4d: E%d %.30s", lnum, errno, msg)
   *  May result in:
   *   "  99: E42 asdfasdfasdfasdfasdfasdfasdfas" ~
   *
   * Often used items are:
   *   %s  string
   *   %6S  string right-aligned in 6 display cells
   *   %6s  string right-aligned in 6 bytes
   *   %.9s  string truncated to 9 bytes
   *   %c  single byte
   *   %d  decimal number
   *   %5d  decimal number padded with spaces to 5 characters
   *   %b  binary number
   *   %08b  binary number padded with zeros to at least 8 characters
   *   %B  binary number using upper case letters
   *   %x  hex number
   *   %04x  hex number padded with zeros to at least 4 characters
   *   %X  hex number using upper case letters
   *   %o  octal number
   *   %f  floating point number as 12.23, inf, -inf or nan
   *   %F  floating point number as 12.23, INF, -INF or NAN
   *   %e  floating point number as 1.23e3, inf, -inf or nan
   *   %E  floating point number as 1.23E3, INF, -INF or NAN
   *   %g  floating point number, as %f or %e depending on value
   *   %G  floating point number, as %F or %E depending on value
   *   %%  the % character itself
   *   %p  representation of the pointer to the container
   *
   * Conversion specifications start with '%' and end with the
   * conversion type.  All other characters are copied unchanged to
   * the result.
   *
   * The "%" starts a conversion specification.  The following
   * arguments appear in sequence:
   *
   *   %  [flags]  [field-width]  [.precision]  type
   *
   * flags
   *   Zero or more of the following flags:
   *
   *     #        The value should be converted to an "alternate
   *         form".  For c, d, and s conversions, this option
   *         has no effect.  For o conversions, the precision
   *         of the number is increased to force the first
   *         character of the output string to a zero (except
   *         if a zero value is printed with an explicit
   *         precision of zero).
   *         For x and X conversions, a non-zero result has
   *         the string "0x" (or "0X" for X conversions)
   *         prepended to it.
   *
   *     0 (zero)  Zero padding.  For all conversions the converted
   *         value is padded on the left with zeros rather
   *         than blanks.  If a precision is given with a
   *         numeric conversion (d, o, x, and X), the 0 flag
   *         is ignored.
   *
   *     -        A negative field width flag; the converted value
   *         is to be left adjusted on the field boundary.
   *         The converted value is padded on the right with
   *         blanks, rather than on the left with blanks or
   *         zeros.  A - overrides a 0 if both are given.
   *
   *     ' ' (space)  A blank should be left before a positive
   *         number produced by a signed conversion (d).
   *
   *     +        A sign must always be placed before a number
   *         produced by a signed conversion.  A + overrides
   *         a space if both are used.
   *
   * field-width
   *   An optional decimal digit string specifying a minimum
   *   field width.  If the converted value has fewer bytes
   *   than the field width, it will be padded with spaces on
   *   the left (or right, if the left-adjustment flag has
   *   been given) to fill out the field width.
   *
   * .precision
   *   An optional precision, in the form of a period '.'
   *   followed by an optional digit string.  If the digit
   *   string is omitted, the precision is taken as zero.
   *   This gives the minimum number of digits to appear for
   *   d, o, x, and X conversions, or the maximum number of
   *   bytes to be printed from a string for s conversions.
   *   For floating point it is the number of digits after
   *   the decimal point.
   *
   * type
   *   A character that specifies the type of conversion to
   *   be applied, see below.
   *
   * A field width or precision, or both, may be indicated by an
   * asterisk '*' instead of a digit string.  In this case, a
   * Number argument supplies the field width or precision.  A
   * negative field width is treated as a left adjustment flag
   * followed by a positive field width; a negative precision is
   * treated as though it were missing.  Example: >
   *   :echo printf("%d: %.*s", nr, width, line)
   *  This limits the length of the text used from "line" to
   * "width" bytes.
   *
   * The conversion specifiers and their meanings are:
   */
  printf: (fmt: any, ...arguments: any[]) => any;
  /**
   * Set prompt callback for buffer {buf} to {expr}.  When {expr}
   * is an empty string the callback is removed.  This has only
   * effect if {buf} has 'buftype' set to "prompt".
   *
   * The callback is invoked when pressing Enter.  The current
   * buffer will always be the prompt buffer.  A new line for a
   * prompt is added before invoking the callback, thus the prompt
   * for which the callback was invoked will be in the last but one
   * line.
   * If the callback wants to add text to the buffer, it must
   * insert it above the last line, since that is where the current
   * prompt is.  This can also be done asynchronously.
   * The callback is invoked with one argument, which is the text
   * that was entered at the prompt.  This can be an empty string
   * if the user only typed Enter.
   * Example: >
   *    call prompt_setcallback(bufnr(''), function('s:TextEntered'))
   *    func s:TextEntered(text)
   *      if a:text == 'exit' || a:text == 'quit'
   *        stopinsert
   *        close
   *      else
   *        call append(line('$') - 1, 'Entered: "' . a:text . '"')
   *        " Reset 'modified' to allow the buffer to be closed.
   *        set nomodified
   *      endif
   *    endfunc
   */
  prompt_setcallback: (buf: any, expr: any) => any;
  /**
   * Set a callback for buffer {buf} to {expr}.  When {expr} is an
   * empty string the callback is removed.  This has only effect if
   * {buf} has 'buftype' set to "prompt".
   *
   * This callback will be invoked when pressing CTRL-C in Insert
   * mode.  Without setting a callback Vim will exit Insert mode,
   * as in any buffer.
   */
  prompt_setinterrupt: (buf: any, expr: any) => any;
  /**
   * Set prompt for buffer {buf} to {text}.  You most likely want
   * {text} to end in a space.
   * The result is only visible if {buf} has 'buftype' set to
   * "prompt".  Example: >
   *   call prompt_setprompt(bufnr(''), 'command: ')
   */
  prompt_setprompt: (buf: any, text: any) => any;
  /**
   * If the popup menu (see |ins-completion-menu|) is not visible,
   * returns an empty |Dictionary|, otherwise, returns a
   * |Dictionary| with the following keys:
   *   height    nr of items visible
   *   width    screen cells
   *   row    top screen row (0 first row)
   *   col    leftmost screen column (0 first col)
   *   size    total nr of items
   *   scrollbar  |TRUE| if visible
   *
   *  The values are the same as in |v:event| during |CompleteChanged|.
   */
  pum_getpos: () => any;
  /**
   * Returns non-zero when the popup menu is visible, zero
   * otherwise.  See |ins-completion-menu|.
   * This can be used to avoid some things that would remove the
   * popup menu.
   */
  pumvisible: () => any;
  /**
   * Evaluate Python expression {expr} and return its result
   * converted to Vim data structures.
   * Numbers and strings are returned as they are (strings are
   * copied though, Unicode strings are additionally converted to
   * UTF-8).
   * Lists are represented as Vim |List| type.
   * Dictionaries are represented as Vim |Dictionary| type with
   * keys converted to strings.
   */
  py3eval: (expr: any) => any;
  /**
   * *pyeval()*
   *     Evaluate Python expression {expr} and return its result
   *     converted to Vim data structures.
   *     Numbers and strings are returned as they are (strings are
   *     copied though).
   *     Lists are represented as Vim |List| type.
   *     Dictionaries are represented as Vim |Dictionary| type,
   *     non-string keys result in error.
   */
  pyeval: (expr: any) => any;
  /**
   * Evaluate Python expression {expr} and return its result
   * converted to Vim data structures.
   * Uses Python 2 or 3, see |python_x| and 'pyxversion'.
   * See also: |pyeval()|, |py3eval()|
   */
  pyxeval: (expr: any) => any;
  /**
   * *range()*
   *     Returns a |List| with Numbers:
   *     - If only {expr} is specified: [0, 1, ..., {expr} - 1]
   *     - If {max} is specified: [{expr}, {expr} + 1, ..., {max}]
   *     - If {stride} is specified: [{expr}, {expr} + {stride}, ...,
   *       {max}] (increasing {expr} with {stride} each time, not
   *       producing a value past {max}).
   *     When the maximum is one before the start the result is an
   *     empty list.  When the maximum is more than one before the
   *     start this is an error.
   *     Examples: >
   *       range(4)    " [0, 1, 2, 3]
   *       range(2, 4)    " [2, 3, 4]
   *       range(2, 9, 3)    " [2, 5, 8]
   *       range(2, -2, -1)  " [2, 1, 0, -1, -2]
   *       range(0)    " []
   *       range(2, 0)    " error!
   * <
   */
  range: (expr: any, max?: any, stride?: any) => any;
  /**
   * Return a list with file and directory names in {directory}.
   *
   * When {expr} is omitted all entries are included.
   * When {expr} is given, it is evaluated to check what to do:
   *   If {expr} results in -1 then no further entries will
   *   be handled.
   *   If {expr} results in 0 then this entry will not be
   *   added to the list.
   *   If {expr} results in 1 then this entry will be added
   *   to the list.
   * Each time {expr} is evaluated |v:val| is set to the entry name.
   * When {expr} is a function the name is passed as the argument.
   * For example, to get a list of files ending in ".txt": >
   *   readdir(dirname, {n -> n =~ '.txt$'})
   *  To skip hidden and backup files: >
   *   readdir(dirname, {n -> n !~ '^\.\|\~$'})
   *
   *  If you want to get a directory tree: >
   *               function! s:tree(dir)
   *                   return {a:dir : map(readdir(a:dir),
   *       \ {_, x -> isdirectory(x) ?
   *       \          {x : s:tree(a:dir . '/' . x)} : x})}
   *               endfunction
   *               echo s:tree(".")
   *
   */
  readdir: (directory: any, expr?: any) => any;
  /**
   * Read file {fname} and return a |List|, each line of the file
   * as an item.  Lines are broken at NL characters.  Macintosh
   * files separated with CR will result in a single long line
   * (unless a NL appears somewhere).
   * All NUL characters are replaced with a NL character.
   * When {binary} contains "b" binary mode is used:
   * - When the last line ends in a NL an extra empty list item is
   *   added.
   * - No CR characters are removed.
   * Otherwise:
   * - CR characters that appear before a NL are removed.
   * - Whether the last line ends in a NL or not does not matter.
   * - Any UTF-8 byte order mark is removed from the text.
   * When {max} is given this specifies the maximum number of lines
   * to be read.  Useful if you only want to check the first ten
   * lines of a file: >
   *   :for line in readfile(fname, '', 10)
   *   :  if line =~ 'Date' | echo line | endif
   *   :endfor
   *  When {max} is negative -{max} lines from the end of the file
   * are returned, or as many as there are.
   * When {max} is zero the result is an empty list.
   * Note that without {max} the whole file is read into memory.
   * Also note that there is no recognition of encoding.  Read a
   * file into a buffer if you need to.
   * When the file can't be opened an error message is given and
   * the result is an empty list.
   * Also see |writefile()|.
   */
  readfile: (fname: any, binary?: any, max?: any) => any;
  /**
   * Returns the single letter name of the register being executed.
   * Returns an empty string when no register is being executed.
   * See |@|.
   */
  reg_executing: () => any;
  /**
   * Returns the single letter name of the register being recorded.
   * Returns an empty string string when not recording.  See |q|.
   */
  reg_recording: () => any;
  /**
   * Return an item that represents a time value.  The format of
   * the item depends on the system.  It can be passed to
   * |reltimestr()| to convert it to a string or |reltimefloat()|
   * to convert to a float.
   *
   * Without an argument it returns the current "relative time", an
   * implementation-defined value meaningful only when used as an
   * argument to |reltime()|, |reltimestr()| and |reltimefloat()|.
   *
   * With one argument it returns the time passed since the time
   * specified in the argument.
   * With two arguments it returns the time passed between {start}
   * and {end}.
   * The {start} and {end} arguments must be values returned by
   * reltime().
   *
   * Note: |localtime()| returns the current (non-relative) time.
   */
  reltime: (start?: any, end?: any) => any;
  /**
   * Return a Float that represents the time value of {time}.
   * Unit of time is seconds.
   * Example:
   *   let start = reltime()
   *   call MyFunction()
   *   let seconds = reltimefloat(reltime(start))
   * See the note of reltimestr() about overhead.
   *  Also see |profiling|.
   */
  reltimefloat: (time: any) => any;
  /**
   * Return a String that represents the time value of {time}.
   * This is the number of seconds, a dot and the number of
   * microseconds.  Example: >
   *   let start = reltime()
   *   call MyFunction()
   *   echo reltimestr(reltime(start))
   *  Note that overhead for the commands will be added to the time.
   * Leading spaces are used to make the string align nicely.  You
   * can use split() to remove it. >
   *   echo split(reltimestr(reltime(start)))[0]
   *  Also see |profiling|.
   */
  reltimestr: (time: any) => any;
  /**
   * Send the {string} to {server}.  The string is sent as an
   * expression and the result is returned after evaluation.
   * The result must be a String or a |List|.  A |List| is turned
   * into a String by joining the items with a line break in
   * between (not at the end), like with join(expr, "\n").
   * If {idvar} is present and not empty, it is taken as the name
   * of a variable and a {serverid} for later use with
   * |remote_read()| is stored there.
   * If {timeout} is given the read times out after this many
   * seconds.  Otherwise a timeout of 600 seconds is used.
   * See also |clientserver| |RemoteReply|.
   * This function is not available in the |sandbox|.
   * Note: Any errors will cause a local error message to be issued
   * and the result will be the empty string.
   *
   * Variables will be evaluated in the global namespace,
   * independent of a function currently being active.  Except
   * when in debug mode, then local function variables and
   * arguments can be evaluated.
   *
   * Examples: >
   *   :echo remote_expr("gvim", "2+2")
   *   :echo remote_expr("gvim1", "b:current_syntax")
   *
   */
  remote_expr: (server: any, string: any, idvar?: any, timeout?: any) => any;
  /**
   * Move the Vim server with the name {server} to the foreground.
   * This works like: >
   *   remote_expr({server}, "foreground()")
   *  Except that on Win32 systems the client does the work, to work
   * around the problem that the OS doesn't always allow the server
   * to bring itself to the foreground.
   * Note: This does not restore the window if it was minimized,
   * like foreground() does.
   * This function is not available in the |sandbox|.
   * {only in the Win32 GUI and the Win32 console version}
   */
  remote_foreground: (server: any) => any;
  /**
   * Returns a positive number if there are available strings
   * from {serverid}.  Copies any reply string into the variable
   * {retvar} if specified.  {retvar} must be a string with the
   * name of a variable.
   * Returns zero if none are available.
   * Returns -1 if something is wrong.
   * See also |clientserver|.
   * This function is not available in the |sandbox|.
   * Examples: >
   *   :let repl = ""
   *   :echo "PEEK: ".remote_peek(id, "repl").": ".repl
   */
  remote_peek: (serverid: any, retvar?: any) => any;
  /**
   * Return the oldest available reply from {serverid} and consume
   * it.  Unless a {timeout} in seconds is given, it blocks until a
   * reply is available.
   * See also |clientserver|.
   * This function is not available in the |sandbox|.
   * Example: >
   *   :echo remote_read(id)
   *
   */
  remote_read: (serverid: any, timeout?: any) => any;
  /**
   * Send the {string} to {server}.  The string is sent as input
   * keys and the function returns immediately.  At the Vim server
   * the keys are not mapped |:map|.
   * If {idvar} is present, it is taken as the name of a variable
   * and a {serverid} for later use with remote_read() is stored
   * there.
   * See also |clientserver| |RemoteReply|.
   * This function is not available in the |sandbox|.
   *
   * Note: Any errors will be reported in the server and may mess
   * up the display.
   * Examples: >
   * :echo remote_send("gvim", ":DropAndReply ".file, "serverid").
   *  \ remote_read(serverid)
   *
   * :autocmd NONE RemoteReply *
   *  \ echo remote_read(expand("<amatch>"))
   * :echo remote_send("gvim", ":sleep 10 | echo ".
   *  \ 'server2client(expand("<client>"), "HELLO")<CR>')
   *
   */
  remote_send: (server: any, string: any, idvar?: any) => any;
  /**
   * Become the server {name}.  This fails if already running as a
   * server, when |v:servername| is not empty.
   */
  remote_startserver: (name: any) => any;
  /**
   * Without {end}: Remove the item at {idx} from |List| {list} and
   * return the item.
   * With {end}: Remove items from {idx} to {end} (inclusive) and
   * return a List with these items.  When {idx} points to the same
   * item as {end} a list with one item is returned.  When {end}
   * points to an item before {idx} this is an error.
   * See |list-index| for possible values of {idx} and {end}.
   * Example: >
   *   :echo "last item: " . remove(mylist, -1)
   *   :call remove(mylist, 0, 9)
   * ve({dict}, {key})
   * Remove the entry from {dict} with key {key} and return it.
   * Example: >
   *   :echo "removed " . remove(dict, "one")
   *  If there is no {key} in {dict} this is an error.
   *
   * Use |delete()| to remove a file.
   */
  remove: (list: any, idx: any, end?: any) => any;
  /**
   * Rename the file by the name {from} to the name {to}.  This
   * should also work to move files across file systems.  The
   * result is a Number, which is 0 if the file was renamed
   * successfully, and non-zero when the renaming failed.
   * NOTE: If {to} exists it is overwritten without warning.
   * This function is not available in the |sandbox|.
   */
  rename: (from: any, to: any) => any;
  /**
   * Repeat {expr} {count} times and return the concatenated
   * result.  Example: >
   *   :let separator = repeat('-', 80)
   *  When {count} is zero or negative the result is empty.
   * When {expr} is a |List| the result is {expr} concatenated
   * {count} times.  Example: >
   *   :let longlist = repeat(['a', 'b'], 3)
   *  Results in ['a', 'b', 'a', 'b', 'a', 'b'].
   */
  repeat: (expr: any, count: any) => any;
  /**
   * On MS-Windows, when {filename} is a shortcut (a .lnk file),
   * returns the path the shortcut points to in a simplified form.
   * On Unix, repeat resolving symbolic links in all path
   * components of {filename} and return the simplified result.
   * To cope with link cycles, resolving of symbolic links is
   * stopped after 100 iterations.
   * On other systems, return the simplified {filename}.
   * The simplification step is done as by |simplify()|.
   * resolve() keeps a leading path component specifying the
   * current directory (provided the result is still a relative
   * path name) and also keeps a trailing path separator.
   */
  resolve: (filename: any) => any;
  /**
   * Reverse the order of items in {list} in-place.  Returns
   *     {list}.
   *     If you want a list to remain unmodified make a copy first: >
   *       :let revlist = reverse(copy(mylist))
   */
  reverse: (list: any) => any;
  /**
   * Round off {expr} to the nearest integral value and return it
   * as a |Float|.  If {expr} lies halfway between two integral
   * values, then use the larger one (away from zero).
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   echo round(0.456)
   *    0.0  >
   *   echo round(4.5)
   *    5.0 >
   *   echo round(-4.5)
   *    -5.0
   */
  round: (expr: any) => any;
  /**
   * Sends {event} to {channel} via |RPC| and returns immediately.
   * If {channel} is 0, the event is broadcast to all channels.
   * Example: >
   *   :au VimLeave call rpcnotify(0, "leaving")
   */
  rpcnotify: (channel: any, event: any, ...arguments: any[]) => any;
  /**
   * Sends a request to {channel} to invoke {method} via
   * |RPC| and blocks until a response is received.
   * Example: >
   *   :let result = rpcrequest(rpc_chan, "func", 1, 2, 3)
   */
  rpcrequest: (channel: any, method: any, ...arguments: any[]) => any;
  /**
   * Deprecated. Replace  >
   *   :let id = rpcstart('prog', ['arg1', 'arg2'])
   *  with >
   *   :let id = jobstart(['prog', 'arg1', 'arg2'], {'rpc': v:true})
   */
  rpcstart: (prog: any, argv?: any) => any;
  /**
   * Evaluate Ruby expression {expr} and return its result
   * converted to Vim data structures.
   * Numbers, floats and strings are returned as they are (strings
   * are copied though).
   * Arrays are represented as Vim |List| type.
   * Hashes are represented as Vim |Dictionary| type.
   * Other objects are represented as strings resulted from their
   * "Object#to_s" method.
   * {only available when compiled with the |+ruby| feature}
   */
  rubyeval: (expr: any) => any;
  /**
   * Like |screenchar()|, but return the attribute.  This is a rather
   * arbitrary number that can only be used to compare to the
   * attribute at other positions.
   */
  screenattr: (row: any, col: any) => any;
  /**
   * The result is a Number, which is the character at position
   * [row, col] on the screen.  This works for every possible
   * screen position, also status lines, window separators and the
   * command line.  The top left position is row one, column one
   * The character excludes composing characters.  For double-byte
   * encodings it may only be the first byte.
   * This is mainly to be used for testing.
   * Returns -1 when row or col is out of range.
   */
  screenchar: (row: any, col: any) => any;
  /**
   * The result is a Number, which is the current screen column of
   * the cursor. The leftmost column has number 1.
   * This function is mainly used for testing.
   *
   * Note: Always returns the current screen column, thus if used
   * in a command (e.g. ":echo screencol()") it will return the
   * column inside the command line, which is 1 when the command is
   * executed. To get the cursor position in the file use one of
   * the following mappings: >
   *   nnoremap <expr> GG ":echom ".screencol()."\n"
   *   nnoremap <silent> GG :echom screencol()<CR>
   *   noremap GG <Cmd>echom screencol()<Cr>
   *
   */
  screencol: () => any;
  /**
   * The result is a Dict with the screen position of the text
   * character in window {winid} at buffer line {lnum} and column
   * {col}.  {col} is a one-based byte index.
   * The Dict has these members:
   *   row  screen row
   *   col  first screen column
   *   endcol  last screen column
   *   curscol  cursor screen column
   * If the specified position is not visible, all values are zero.
   * The "endcol" value differs from "col" when the character
   * occupies more than one screen cell.  E.g. for a Tab "col" can
   * be 1 and "endcol" can be 8.
   * The "curscol" value is where the cursor would be placed.  For
   * a Tab it would be the same as "endcol", while for a double
   * width character it would be the same as "col".
   */
  screenpos: (winid: any, lnum: any, col: any) => any;
  /**
   * The result is a Number, which is the current screen row of the
   * cursor.  The top line has number one.
   * This function is mainly used for testing.
   * Alternatively you can use |winline()|.
   *
   * Note: Same restrictions as with |screencol()|.
   */
  screenrow: () => any;
  /**
   * Search for regexp pattern {pattern}.  The search starts at the
   * cursor position (you can use |cursor()| to set it).
   *
   * When a match has been found its line number is returned.
   * If there is no match a 0 is returned and the cursor doesn't
   * move.  No error message is given.
   *
   * {flags} is a String, which can contain these character flags:
   * 'b'  search Backward instead of forward
   * 'c'  accept a match at the Cursor position
   * 'e'  move to the End of the match
   * 'n'  do Not move the cursor
   * 'p'  return number of matching sub-Pattern (see below)
   * 's'  Set the ' mark at the previous location of the cursor
   * 'w'  Wrap around the end of the file
   * 'W'  don't Wrap around the end of the file
   * 'z'  start searching at the cursor column instead of Zero
   * If neither 'w' or 'W' is given, the 'wrapscan' option applies.
   *
   * If the 's' flag is supplied, the ' mark is set, only if the
   * cursor is moved. The 's' flag cannot be combined with the 'n'
   * flag.
   *
   * 'ignorecase', 'smartcase' and 'magic' are used.
   *
   * When the 'z' flag is not given, searching always starts in
   * column zero and then matches before the cursor are skipped.
   * When the 'c' flag is present in 'cpo' the next search starts
   * after the match.  Without the 'c' flag the next search starts
   * one column further.
   *
   * When the {stopline} argument is given then the search stops
   * after searching this line.  This is useful to restrict the
   * search to a range of lines.  Examples: >
   *   let match = search('(', 'b', line("w0"))
   *   let end = search('END', '', line("w$"))
   *  When {stopline} is used and it is not zero this also implies
   * that the search does not wrap around the end of the file.
   * A zero value is equal to not giving the argument.
   *
   * When the {timeout} argument is given the search stops when
   * more than this many milliseconds have passed.  Thus when
   * {timeout} is 500 the search stops after half a second.
   * The value must not be negative.  A zero value is like not
   * giving the argument.
   */
  search: (pattern: any, flags?: any, stopline?: any, timeout?: any) => any;
  /**
   * Search for the declaration of {name}.
   *
   * With a non-zero {global} argument it works like |gD|, find
   * first match in the file.  Otherwise it works like |gd|, find
   * first match in the function.
   *
   * With a non-zero {thisblock} argument matches in a {} block
   * that ends before the cursor position are ignored.  Avoids
   * finding variable declarations only valid in another scope.
   *
   * Moves the cursor to the found match.
   * Returns zero for success, non-zero for failure.
   * Example: >
   *   if searchdecl('myvar') == 0
   *      echo getline('.')
   *   endif
   *
   */
  searchdecl: (name: any, global?: any, thisblock?: any) => any;
  /**
   * [, {stopline} [, {timeout}]]]])
   * ch for the match of a nested start-end pair.  This can be
   *  to find the "endif" that matches an "if", while other
   * ndif pairs in between are ignored.
   * search starts at the cursor.  The default is to search
   * ard, include 'b' in {flags} to search backward.
   *  match is found, the cursor is positioned at it and the
   *  number is returned.  If no match is found 0 or -1 is
   * rned and the cursor doesn't move.  No error message is
   * n.
   *
   * rt}, {middle} and {end} are patterns, see |pattern|.  They
   *  not contain \( \) pairs.  Use of \%( \) is allowed.  When
   * dle} is not empty, it is found when searching from either
   * ction, but only when not in a nested start-end pair.  A
   * cal use is: >
   * archpair('\<if\>', '\<else\>', '\<endif\>')
   * leaving {middle} empty the "else" is skipped.
   *
   * gs} 'b', 'c', 'n', 's', 'w' and 'W' are used like with
   * rch()|.  Additionally:
   *  Repeat until no more matches found; will find the
   * ter pair.  Implies the 'W' flag.
   *  Return number of matches instead of line number with
   * e match; will be > 1 when 'r' is used.
   * : it's nearly always a good idea to use the 'W' flag, to
   * d wrapping around the end of the file.
   *
   *  a match for {start}, {middle} or {end} is found, the
   * p} expression is evaluated with the cursor positioned on
   * start of the match.  It should return non-zero if this
   * h is to be skipped.  E.g., because it is inside a comment
   *  string.
   *  {skip} is omitted or empty, every match is accepted.
   *  evaluating {skip} causes an error the search is aborted
   * -1 returned.
   * ip} can be a string, a lambda, a funcref or a partial.
   * hing else makes the function fail.
   *
   * {stopline} and {timeout} see |search()|.
   *
   * value of 'ignorecase' is used.  'magic' is ignored, the
   * erns are used like it's on.
   *
   * search starts exactly at the cursor.  A match with
   * rt}, {middle} or {end} at the next character, in the
   * ction of searching, is the first one found.  Example: >
   *  1
   * if 2
   * endif 2
   * dif 1
   * n starting at the "if 2", with the cursor on the "i", and
   * ching forwards, the "endif 2" is found.  When starting on
   * character just before the "if 2", the "endif 1" will be
   * d.  That's because the "if 2" will be found first, and
   *  this is considered to be a nested if/endif from "if 2" to
   * if 2".
   *  searching backwards and {end} is more than one character,
   * ay be useful to put "\zs" at the end of the pattern, so
   *  when the cursor is inside a match with the end it finds
   * matching start.
   *
   * ple, to find the "endif" command in a Vim script: >
   *
   * searchpair('\<if\>', '\<el\%[seif]\>', '\<en\%[dif]\>', 'W',
   * 'getline(".") =~ "^\\s*\""')
   *
   *  cursor must be at or after the "if" for which a match is
   * e found.  Note that single-quote strings are used to avoid
   * ng to double the backslashes.  The skip expression only
   * hes comments at the start of a line, not after a command.
   * , a word "en" or "if" halfway through a line is considered
   * tch.
   * her example, to search for the matching "{" of a "}": >
   *
   * searchpair('{', '', '}', 'bW')
   *
   * s works when the cursor is at or before the "}" for which a
   * h is to be found.  To reject matches that syntax
   * lighting recognized as strings: >
   *
   * searchpair('{', '', '}', 'bW',
   *  'synIDattr(synID(line("."), col("."), 0), "name") =~? "string"')
   *
   */
  searchpair: () => any;
  /**
   * [, {stopline} [, {timeout}]]]])
   *  as |searchpair()|, but returns a |List| with the line and
   * mn position of the match. The first element of the |List|
   * he line number and the second element is the byte index of
   * column position of the match.  If no match is found,
   * rns [0, 0]. >
   *
   * et [lnum,col] = searchpairpos('{', '', '}', 'n')
   *
   * |match-parens| for a bigger and more useful example.
   */
  searchpairpos: () => any;
  /**
   * Same as |search()|, but returns a |List| with the line and
   * column position of the match. The first element of the |List|
   * is the line number and the second element is the byte index of
   * the column position of the match. If no match is found,
   * returns [0, 0].
   * Example: >
   * et [lnum, col] = searchpos('mypattern', 'n')
   *
   *  When the 'p' flag is given then there is an extra item with
   * the sub-pattern match number |search()-sub-match|.  Example: >
   * et [lnum, col, submatch] = searchpos('\(\l\)\|\(\u\)', 'np')
   *  In this example "submatch" is 2 when a lowercase letter is
   * found |/\l|, 3 when an uppercase letter is found |/\u|.
   */
  searchpos: (pattern: any, flags?: any, stopline?: any, timeout?: any) => any;
  /**
   * Send a reply string to {clientid}.  The most recent {clientid}
   * that sent a string can be retrieved with expand("<client>").
   * Note:
   * This id has to be stored before the next command can be
   * received.  I.e. before returning from the received command and
   * before calling any commands that waits for input.
   * See also |clientserver|.
   * Example: >
   *   :echo server2client(expand("<client>"), "HELLO")
   *
   */
  server2client: (clientid: any, string: any) => any;
  /**
   * Returns a list of server addresses, or empty if all servers
   * were stopped. |serverstart()| |serverstop()|
   * Example: >
   *   :echo serverlist()
   */
  serverlist: () => any;
  /**
   * Opens a socket or named pipe at {address} and listens for
   * |RPC| messages. Clients can send |API| commands to the address
   * to control Nvim. Returns the address string.
   *
   * If {address} does not contain a colon ":" it is interpreted as
   * a named pipe or Unix domain socket path.
   *
   * Example: >
   *   if has('win32')
   *     call serverstart('\\.\pipe\nvim-pipe-1234')
   *   else
   *     call serverstart('nvim.sock')
   *   endif
   *
   * If {address} contains a colon ":" it is interpreted as a TCP
   * address where the last ":" separates the host and port.
   * Assigns a random port if it is empty or 0. Supports IPv4/IPv6.
   *
   * Example: >
   *   :call serverstart('::1:12345')
   *
   * If no address is given, it is equivalent to: >
   *   :call serverstart(tempname())
   *
   *   |$NVIM_LISTEN_ADDRESS| is set to {address} if not already set.
   */
  serverstart: (address?: any) => any;
  /**
   * Closes the pipe or socket at {address}.
   * Returns TRUE if {address} is valid, else FALSE.
   * If |$NVIM_LISTEN_ADDRESS| is stopped it is unset.
   * If |v:servername| is stopped it is set to the next available
   * address returned by |serverlist()|.
   */
  serverstop: (address: any) => any;
  /**
   * Set line {lnum} to {text} in buffer {expr}.  To insert
   * lines use |append()|.
   *
   * For the use of {expr}, see |bufname()| above.
   *
   * {lnum} is used like with |setline()|.
   * This works like |setline()| for the specified buffer.
   * On success 0 is returned, on failure 1 is returned.
   *
   * If {expr} is not a valid buffer or {lnum} is not valid, an
   * error message is given.
   */
  setbufline: (expr: any, lnum: any, text: any) => any;
  /**
   * Set option or local variable {varname} in buffer {expr} to
   * {val}.
   * This also works for a global or local window option, but it
   * doesn't work for a global or local window variable.
   * For a local window option the global value is unchanged.
   * For the use of {expr}, see |bufname()| above.
   * Note that the variable name without "b:" must be used.
   * Examples: >
   *   :call setbufvar(1, "&mod", 1)
   *   :call setbufvar("todo", "myvar", "foobar")
   *  This function is not available in the |sandbox|.
   */
  setbufvar: (expr: any, varname: any, val: any) => any;
  /**
   * Set the current character search information to {dict},
   * which contains one or more of the following entries:
   *
   *     char  character which will be used for a subsequent
   *     |,| or |;| command; an empty string clears the
   *     character search
   *     forward  direction of character search; 1 for forward,
   *     0 for backward
   *     until  type of character search; 1 for a |t| or |T|
   *     character search, 0 for an |f| or |F|
   *     character search
   *
   * This can be useful to save/restore a user's character search
   * from a script: >
   *   :let prevsearch = getcharsearch()
   *   :" Perform a command which clobbers user's search
   *   :call setcharsearch(prevsearch)
   *  Also see |getcharsearch()|.
   */
  setcharsearch: (dict: any) => any;
  /**
   * Set the cursor position in the command line to byte position
   * {pos}.  The first position is 1.
   * Use |getcmdpos()| to obtain the current position.
   * Only works while editing the command line, thus you must use
   * |c_CTRL-\_e|, |c_CTRL-R_=| or |c_CTRL-R_CTRL-R| with '='.  For
   * |c_CTRL-\_e| and |c_CTRL-R_CTRL-R| with '=' the position is
   * set after the command line is set to the expression.  For
   * |c_CTRL-R_=| it is set after evaluating the expression but
   * before inserting the resulting text.
   * When the number is too big the cursor is put at the end of the
   * line.  A number smaller than one has undefined results.
   * Returns 0 when successful, 1 when not editing the command
   * line.
   */
  setcmdpos: (pos: any) => any;
  /**
   * Set environment variable {name} to {val}.
   * When {val} is |v:null| the environment variable is deleted.
   * See also |expr-env|.
   */
  setenv: (name: any, val: any) => any;
  /**
   * Set the file permissions for {fname} to {mode}.
   * {mode} must be a string with 9 characters.  It is of the form
   * "rwxrwxrwx", where each group of "rwx" flags represent, in
   * turn, the permissions of the owner of the file, the group the
   * file belongs to, and other users.  A '-' character means the
   * permission is off, any other character means on.  Multi-byte
   * characters are not supported.
   *
   * For example "rw-r-----" means read-write for the user,
   * readable by the group, not accessible by others.  "xx-x-----"
   * would do the same thing.
   *
   * Returns non-zero for success, zero for failure.
   *
   * To read permissions see |getfperm()|.
   */
  setfperm: (fname: any, mode: any) => any;
  /**
   * Set line {lnum} of the current buffer to {text}.  To insert
   * lines use |append()|. To set lines in another buffer use
   * |setbufline()|.
   *
   * {lnum} is used like with |getline()|.
   * When {lnum} is just below the last line the {text} will be
   * added as a new line.
   *
   * If this succeeds, 0 is returned.  If this fails (most likely
   * because {lnum} is invalid) 1 is returned.
   *
   * Example: >
   *   :call setline(5, strftime("%c"))
   *
   *  When {text} is a |List| then line {lnum} and following lines
   * will be set to the items in the list.  Example: >
   *   :call setline(5, ['aaa', 'bbb', 'ccc'])
   *  This is equivalent to: >
   *   :for [n, l] in [[5, 'aaa'], [6, 'bbb'], [7, 'ccc']]
   *   :  call setline(n, l)
   *   :endfor
   *
   *  Note: The '[ and '] marks are not set.
   */
  setline: (lnum: any, text: any) => any;
  /**
   * Create or replace or add to the location list for window {nr}.
   * {nr} can be the window number or the |window-ID|.
   * When {nr} is zero the current window is used.
   *
   * For a location list window, the displayed location list is
   * modified.  For an invalid window number {nr}, -1 is returned.
   * Otherwise, same as |setqflist()|.
   * Also see |location-list|.
   *
   * If the optional {what} dictionary argument is supplied, then
   * only the items listed in {what} are set. Refer to |setqflist()|
   * for the list of supported keys in {what}.
   */
  setloclist: (nr: any, list: any, action?: any, what?: any) => any;
  /**
   * Restores a list of matches saved by |getmatches() for the
   * current window|.  Returns 0 if successful, otherwise -1.  All
   * current matches are cleared before the list is restored.  See
   * example for |getmatches()|.
   * If {win} is specified, use the window with this number or
   * window ID instead of the current window.
   */
  setmatches: (list: any, win?: any) => any;
  /**
   * Set the position for {expr}.  Possible values:
   *   .  the cursor
   *   'x  mark x
   *
   * {list} must be a |List| with four or five numbers:
   *     [bufnum, lnum, col, off]
   *     [bufnum, lnum, col, off, curswant]
   *
   * "bufnum" is the buffer number.  Zero can be used for the
   * current buffer.  When setting an uppercase mark "bufnum" is
   * used for the mark position.  For other marks it specifies the
   * buffer to set the mark in.  You can use the |bufnr()| function
   * to turn a file name into a buffer number.
   * For setting the cursor and the ' mark "bufnum" is ignored,
   * since these are associated with a window, not a buffer.
   * Does not change the jumplist.
   *
   * "lnum" and "col" are the position in the buffer.  The first
   * column is 1.  Use a zero "lnum" to delete a mark.  If "col" is
   * smaller than 1 then 1 is used.
   *
   * The "off" number is only used when 'virtualedit' is set. Then
   * it is the offset in screen columns from the start of the
   * character.  E.g., a position within a <Tab> or after the last
   * character.
   *
   * The "curswant" number is only used when setting the cursor
   * position.  It sets the preferred column for when moving the
   * cursor vertically.  When the "curswant" number is missing the
   * preferred column is not set.  When it is present and setting a
   * mark position it is not used.
   *
   * Note that for '< and '> changing the line number may result in
   * the marks to be effectively be swapped, so that '< is always
   * before '>.
   *
   * Returns 0 when the position could be set, -1 otherwise.
   * An error message is given if {expr} is invalid.
   *
   * Also see |getpos()| and |getcurpos()|.
   *
   * This does not restore the preferred column for moving
   * vertically; if you set the cursor position with this, |j| and
   * |k| motions will jump to previous columns!  Use |cursor()| to
   * also set the preferred column.  Also see the "curswant" key in
   * |winrestview()|.
   */
  setpos: (expr: any, list: any) => any;
  /**
   * Create or replace or add to the quickfix list.
   *
   * When {what} is not present, use the items in {list}.  Each
   * item must be a dictionary.  Non-dictionary items in {list} are
   * ignored.  Each dictionary item can contain the following
   * entries:
   *
   *     bufnr  buffer number; must be the number of a valid
   *     buffer
   *     filename  name of a file; only used when "bufnr" is not
   *     present or it is invalid.
   *     module  name of a module; if given it will be used in
   *     quickfix error window instead of the filename
   *     lnum  line number in the file
   *     pattern  search pattern used to locate the error
   *     col    column number
   *     vcol  when non-zero: "col" is visual column
   *     when zero: "col" is byte index
   *     nr    error number
   *     text  description of the error
   *     type  single-character error type, 'E', 'W', etc.
   *     valid  recognized error message
   *
   * The "col", "vcol", "nr", "type" and "text" entries are
   * optional.  Either "lnum" or "pattern" entry can be used to
   * locate a matching error line.
   * If the "filename" and "bufnr" entries are not present or
   * neither the "lnum" or "pattern" entries are present, then the
   * item will not be handled as an error line.
   * If both "pattern" and "lnum" are present then "pattern" will
   * be used.
   * If the "valid" entry is not supplied, then the valid flag is
   * set when "bufnr" is a valid buffer or "filename" exists.
   * If you supply an empty {list}, the quickfix list will be
   * cleared.
   * Note that the list is not exactly the same as what
   * |getqflist()| returns.
   */
  setqflist: (list: any, action?: any, what?: any) => any;
  /**
   * 'a'  The items from {list} are added to the existing
   *   quickfix list. If there is no existing list, then a
   *   new list is created.
   *
   * 'r'  The items from the current quickfix list are replaced
   *   with the items from {list}.  This can also be used to
   *   clear the list: >
   *     :call setqflist([], 'r')
   *
   * 'f'  All the quickfix lists in the quickfix stack are
   *   freed.
   *
   * If {action} is not present or is set to ' ', then a new list
   * is created. The new quickfix list is added after the current
   * quickfix list in the stack and all the following lists are
   * freed. To add a new quickfix list at the end of the stack,
   * set "nr" in {what} to "$".
   *
   * If the optional {what} dictionary argument is supplied, then
   * only the items listed in {what} are set. The first {list}
   * argument is ignored.  The following items can be specified in
   * {what}:
   *     context  quickfix list context. See |quickfix-context|
   *     efm    errorformat to use when parsing text from
   *     "lines". If this is not present, then the
   *     'errorformat' option value is used.
   *     See |quickfix-parse|
   *     id    quickfix list identifier |quickfix-ID|
   *     idx    index of the current entry in the quickfix
   *     list specified by 'id' or 'nr'. If set to '$',
   *     then the last entry in the list is set as the
   *     current entry.  See |quickfix-index|
   *     items  list of quickfix entries. Same as the {list}
   *     argument.
   *     lines  use 'errorformat' to parse a list of lines and
   *     add the resulting entries to the quickfix list
   *     {nr} or {id}.  Only a |List| value is supported.
   *     See |quickfix-parse|
   *     nr    list number in the quickfix stack; zero
   *     means the current quickfix list and "$" means
   *     the last quickfix list.
   *     title  quickfix list title text. See |quickfix-title|
   * Unsupported keys in {what} are ignored.
   * If the "nr" item is not present, then the current quickfix list
   * is modified. When creating a new quickfix list, "nr" can be
   * set to a value one greater than the quickfix stack size.
   * When modifying a quickfix list, to guarantee that the correct
   * list is modified, "id" should be used instead of "nr" to
   * specify the list.
   *
   * Examples (See also |setqflist-examples|): >
   *    :call setqflist([], 'r', {'title': 'My search'})
   *    :call setqflist([], 'r', {'nr': 2, 'title': 'Errors'})
   *    :call setqflist([], 'a', {'id':qfid, 'lines':["F1:10:L10"]})
   *
   * Returns zero for success, -1 for failure.
   *
   * This function can be used to create a quickfix list
   * independent of the 'errorformat' setting.  Use a command like
   * `:cc 1` to jump to the first position.
   */
  E927: any;
  /**
   * Set the register {regname} to {value}.
   * {value} may be any value returned by |getreg()|, including
   * a |List|.
   * If {options} contains "a" or {regname} is upper case,
   * then the value is appended.
   * {options} can also contain a register type specification:
   *     "c" or "v"        |charwise| mode
   *     "l" or "V"        |linewise| mode
   *     "b" or "<CTRL-V>" |blockwise-visual| mode
   * If a number immediately follows "b" or "<CTRL-V>" then this is
   * used as the width of the selection - if it is not specified
   * then the width of the block is set to the number of characters
   * in the longest line (counting a <Tab> as 1 character).
   * If {options} contains "u" or '"', then the unnamed register is
   * set to point to register {regname}.
   *
   * If {options} contains no register settings, then the default
   * is to use character mode unless {value} ends in a <NL> for
   * string {value} and linewise mode for list {value}. Blockwise
   * mode is never selected automatically.
   * Returns zero for success, non-zero for failure.
   */
  setreg: (regname: any, value: any, options?: any) => any;
  /**
   * Note: you may not use |List| containing more than one item to
   *           set search and expression registers. Lists containing no
   *           items act like empty strings.
   *
   *     Examples: >
   *       :call setreg(v:register, @*)
   *       :call setreg('*', @%, 'ac')
   *       :call setreg('a', "1\n2\n3", 'b5')
   *
   * <    This example shows using the functions to save and restore a
   *     register: >
   *       :let var_a = getreg('a', 1, 1)
   *       :let var_amode = getregtype('a')
   *           ....
   *       :call setreg('a', var_a, var_amode)
   * <    Note: you may not reliably restore register value
   *     without using the third argument to |getreg()| as without it
   *     newlines are represented as newlines AND Nul bytes are
   *     represented as newlines as well, see |NL-used-for-Nul|.
   *
   *     You can also change the type of a register by appending
   *     nothing: >
   *       :call setreg('a', '', 'al')
   */
  E883: any;
  /**
   * Set tab-local variable {varname} to {val} in tab page {tabnr}.
   * |t:var|
   * Note that the variable name without "t:" must be used.
   * Tabs are numbered starting with one.
   * This function is not available in the |sandbox|.
   */
  settabvar: (tabnr: any, varname: any, val: any) => any;
  /**
   * Set option or local variable {varname} in window {winnr} to
   * {val}.
   * Tabs are numbered starting with one.  For the current tabpage
   * use |setwinvar()|.
   * {winnr} can be the window number or the |window-ID|.
   * When {winnr} is zero the current window is used.
   * This also works for a global or local buffer option, but it
   * doesn't work for a global or local buffer variable.
   * For a local buffer option the global value is unchanged.
   * Note that the variable name without "w:" must be used.
   * Examples: >
   *   :call settabwinvar(1, 1, "&list", 0)
   *   :call settabwinvar(3, 2, "myvar", "foobar")
   *  This function is not available in the |sandbox|.
   */
  settabwinvar: (tabnr: any, winnr: any, varname: any, val: any) => any;
  /**
   * Modify the tag stack of the window {nr} using {dict}.
   * {nr} can be the window number or the |window-ID|.
   *
   * For a list of supported items in {dict}, refer to
   * |gettagstack()|. "curidx" takes effect before changing the tag
   * stack.
   */
  settagstack: (nr: any, dict: any, action?: any) => any;
  /**
   * How the tag stack is modified depends on the {action}
   *     argument:
   *     - If {action} is not present or is set to 'r', then the tag
   *       stack is replaced.
   *     - If {action} is set to 'a', then new entries from {dict} are
   *       pushed (added) onto the tag stack.
   *     - If {action} is set to 't', then all the entries from the
   *       current entry in the tag stack or "curidx" in {dict} are
   *       removed and then new entries are pushed to the stack.
   *
   *     The current index is set to one after the length of the tag
   *     stack after the modification.
   *
   *     Returns zero for success, -1 for failure.
   *
   *     Examples:
   *         Set current index of the tag stack to 4: >
   *       call settagstack(1005, {'curidx' : 4})
   *
   * <        Empty the tag stack of window 3: >
   *       call settagstack(3, {'items' : []})
   *
   * <        Push a new item onto the tag stack: >
   *       let pos = [bufnr('myfile.txt'), 10, 1, 0]
   *       let newtag = [{'tagname' : 'mytag', 'from' : pos}]
   *       call settagstack(2, {'items' : newtag}, 'a')
   *
   * <        Save and restore the tag stack: >
   *       let stack = gettagstack(1003)
   *       " do something else
   *       call settagstack(1003, stack)
   *       unlet stack
   * <
   */
  E962: any;
  /**
   * Like |settabwinvar()| for the current tab page.
   * Examples: >
   *   :call setwinvar(1, "&list", 0)
   *   :call setwinvar(2, "myvar", "foobar")
   */
  setwinvar: (nr: any, varname: any, val: any) => any;
  /**
   * Returns a String with 64 hex characters, which is the SHA256
   * checksum of {string}.
   */
  sha256: (string: any) => any;
  /**
   * Escape {string} for use as a shell command argument.
   *
   * On Windows when 'shellslash' is not set, encloses {string} in
   * double-quotes and doubles all double-quotes within {string}.
   * Otherwise encloses {string} in single-quotes and replaces all
   * "'" with "'\''".
   *
   * If {special} is a ||non-zero-arg|:
   * - Special items such as "!", "%", "#" and "<cword>" will be
   *   preceded by a backslash. The backslash will be removed again
   *   by the |:!| command.
   * - The <NL> character is escaped.
   *
   * If 'shell' contains "csh" in the tail:
   * - The "!" character will be escaped. This is because csh and
   *   tcsh use "!" for history replacement even in single-quotes.
   * - The <NL> character is escaped (twice if {special} is
   *   a ||non-zero-arg|).
   *
   * Example of use with a |:!| command: >
   *     :exe '!dir ' . shellescape(expand('<cfile>'), 1)
   *  This results in a directory listing for the file under the
   * cursor.  Example of use with |system()|: >
   *     :call system("chmod +w -- " . shellescape(expand("%")))
   *  See also |::S|.
   */
  shellescape: (string: any, special?: any) => any;
  /**
   * Returns the effective value of 'shiftwidth'. This is the
   * 'shiftwidth' value unless it is zero, in which case it is the
   * 'tabstop' value.  To be backwards compatible in indent
   * plugins, use this: >
   *   if exists('*shiftwidth')
   *     func s:sw()
   *       return shiftwidth()
   *     endfunc
   *   else
   *     func s:sw()
   *       return &sw
   *     endfunc
   *   endif
   *  And then use s:sw() instead of &sw.
   */
  shiftwidth: () => any;
  /**
   * Define a new sign named {name} or modify the attributes of an
   * existing sign.  This is similar to the |:sign-define| command.
   *
   * Prefix {name} with a unique text to avoid name collisions.
   * There is no {group} like with placing signs.
   *
   * The {name} can be a String or a Number.  The optional {dict}
   * argument specifies the sign attributes.  The following values
   * are supported:
   *     icon  full path to the bitmap file for the sign.
   *     linehl  highlight group used for the whole line the
   *     sign is placed in.
   *     text  text that is displayed when there is no icon
   *     or the GUI is not being used.
   *     texthl  highlight group used for the text item
   *     numhl  highlight group used for 'number' column at the
   *     associated line. Overrides |hl-LineNr|,
   *     |hl-CursorLineNr|.
   *
   * If the sign named {name} already exists, then the attributes
   * of the sign are updated.
   *
   * Returns 0 on success and -1 on failure.
   *
   * Examples: >
   *   call sign_define("mySign", {"text" : "=>", "texthl" :
   *       \ "Error", "linehl" : "Search"})
   *
   */
  sign_define: (name: any, dict?: any) => any;
  /**
   * Get a list of defined signs and their attributes.
   * This is similar to the |:sign-list| command.
   *
   * If the {name} is not supplied, then a list of all the defined
   * signs is returned. Otherwise the attribute of the specified
   * sign is returned.
   *
   * Each list item in the returned value is a dictionary with the
   * following entries:
   *   icon  full path to the bitmap file of the sign
   *   linehl  highlight group used for the whole line the
   *     sign is placed in.
   *   name  name of the sign
   *   text  text that is displayed when there is no icon
   *     or the GUI is not being used.
   *   texthl  highlight group used for the text item
   *   numhl  highlight group used for 'number' column at the
   *     associated line. Overrides |hl-LineNr|,
   *     |hl-CursorLineNr|.
   *
   * Returns an empty List if there are no signs and when {name} is
   * not found.
   *
   * Examples: >
   *   " Get a list of all the defined signs
   *   echo sign_getdefined()
   *
   *   " Get the attribute of the sign named mySign
   *   echo sign_getdefined("mySign")
   *
   */
  sign_getdefined: (name?: any) => any;
  /**
   * Return a list of signs placed in a buffer or all the buffers.
   * This is similar to the |:sign-place-list| command.
   *
   * If the optional buffer name {expr} is specified, then only the
   * list of signs placed in that buffer is returned.  For the use
   * of {expr}, see |bufname()|. The optional {dict} can contain
   * the following entries:
   *    group  select only signs in this group
   *    id    select sign with this identifier
   *    lnum    select signs placed in this line. For the use
   *     of {lnum}, see |line()|.
   * If {group} is '*', then signs in all the groups including the
   * global group are returned. If {group} is not supplied or is an
   * empty string, then only signs in the global group are
   * returned.  If no arguments are supplied, then signs in the
   * global group placed in all the buffers are returned.
   * See |sign-group|.
   *
   * Each list item in the returned value is a dictionary with the
   * following entries:
   *   bufnr  number of the buffer with the sign
   *   signs  list of signs placed in {bufnr}. Each list
   *     item is a dictionary with the below listed
   *     entries
   *
   * The dictionary for each sign contains the following entries:
   *   group  sign group. Set to '' for the global group.
   *   id  identifier of the sign
   *   lnum  line number where the sign is placed
   *   name  name of the defined sign
   *   priority  sign priority
   *
   * The returned signs in a buffer are ordered by their line
   * number and priority.
   *
   * Returns an empty list on failure or if there are no placed
   * signs.
   *
   * Examples: >
   *   " Get a List of signs placed in eval.c in the
   *   " global group
   *   echo sign_getplaced("eval.c")
   *
   *   " Get a List of signs in group 'g1' placed in eval.c
   *   echo sign_getplaced("eval.c", {'group' : 'g1'})
   *
   *   " Get a List of signs placed at line 10 in eval.c
   *   echo sign_getplaced("eval.c", {'lnum' : 10})
   *
   *   " Get sign with identifier 10 placed in a.py
   *   echo sign_getplaced("a.py", {'id' : 10})
   *
   *   " Get sign with id 20 in group 'g1' placed in a.py
   *   echo sign_getplaced("a.py", {'group' : 'g1',
   *           \  'id' : 20})
   *
   *   " Get a List of all the placed signs
   *   echo sign_getplaced()
   *
   */
  sign_getplaced: (expr?: any, dict?: any) => any;
  /**
   * Open the buffer {expr} or jump to the window that contains
   * {expr} and position the cursor at sign {id} in group {group}.
   * This is similar to the |:sign-jump| command.
   *
   * For the use of {expr}, see |bufname()|.
   *
   * Returns the line number of the sign. Returns -1 if the
   * arguments are invalid.
   *
   * Example: >
   *   " Jump to sign 10 in the current buffer
   *   call sign_jump(10, '', '')
   *
   */
  sign_jump: (id: any, group: any, expr: any) => any;
  /**
   * Place the sign defined as {name} at line {lnum} in file {expr}
   * and assign {id} and {group} to sign.  This is similar to the
   * |:sign-place| command.
   *
   * If the sign identifier {id} is zero, then a new identifier is
   * allocated.  Otherwise the specified number is used. {group} is
   * the sign group name. To use the global sign group, use an
   * empty string.  {group} functions as a namespace for {id}, thus
   * two groups can use the same IDs. Refer to |sign-identifier|
   * for more information.
   *
   * {name} refers to a defined sign.
   * {expr} refers to a buffer name or number. For the accepted
   * values, see |bufname()|.
   *
   * The optional {dict} argument supports the following entries:
   *   lnum    line number in the buffer {expr} where
   *       the sign is to be placed. For the
   *       accepted values, see |line()|.
   *   priority  priority of the sign. See
   *       |sign-priority| for more information.
   *
   * If the optional {dict} is not specified, then it modifies the
   * placed sign {id} in group {group} to use the defined sign
   * {name}.
   *
   * Returns the sign identifier on success and -1 on failure.
   *
   * Examples: >
   *   " Place a sign named sign1 with id 5 at line 20 in
   *   " buffer json.c
   *   call sign_place(5, '', 'sign1', 'json.c',
   *           \ {'lnum' : 20})
   *
   *   " Updates sign 5 in buffer json.c to use sign2
   *   call sign_place(5, '', 'sign2', 'json.c')
   *
   *   " Place a sign named sign3 at line 30 in
   *   " buffer json.c with a new identifier
   *   let id = sign_place(0, '', 'sign3', 'json.c',
   *           \ {'lnum' : 30})
   *
   *   " Place a sign named sign4 with id 10 in group 'g3'
   *   " at line 40 in buffer json.c with priority 90
   *   call sign_place(10, 'g3', 'sign4', 'json.c',
   *       \ {'lnum' : 40, 'priority' : 90})
   *
   */
  sign_place: (id: any, group: any, name: any, expr: any, dict?: any) => any;
  /**
   * Deletes a previously defined sign {name}. This is similar to
   * the |:sign-undefine| command. If {name} is not supplied, then
   * deletes all the defined signs.
   *
   * Returns 0 on success and -1 on failure.
   *
   * Examples: >
   *   " Delete a sign named mySign
   *   call sign_undefine("mySign")
   *
   *   " Delete all the signs
   *   call sign_undefine()
   *
   */
  sign_undefine: (name?: any) => any;
  /**
   * Remove a previously placed sign in one or more buffers.  This
   * is similar to the |:sign-unplace| command.
   *
   * {group} is the sign group name. To use the global sign group,
   * use an empty string.  If {group} is set to '*', then all the
   * groups including the global group are used.
   * The signs in {group} are selected based on the entries in
   * {dict}.  The following optional entries in {dict} are
   * supported:
   *   buffer  buffer name or number. See |bufname()|.
   *   id  sign identifier
   * If {dict} is not supplied, then all the signs in {group} are
   * removed.
   *
   * Returns 0 on success and -1 on failure.
   *
   * Examples: >
   *   " Remove sign 10 from buffer a.vim
   *   call sign_unplace('', {'buffer' : "a.vim", 'id' : 10})
   *
   *   " Remove sign 20 in group 'g1' from buffer 3
   *   call sign_unplace('g1', {'buffer' : 3, 'id' : 20})
   *
   *   " Remove all the signs in group 'g2' from buffer 10
   *   call sign_unplace('g2', {'buffer' : 10})
   *
   *   " Remove sign 30 in group 'g3' from all the buffers
   *   call sign_unplace('g3', {'id' : 30})
   *
   *   " Remove all the signs placed in buffer 5
   *   call sign_unplace('*', {'buffer' : 5})
   *
   *   " Remove the signs in group 'g4' from all the buffers
   *   call sign_unplace('g4')
   *
   *   " Remove sign 40 from all the buffers
   *   call sign_unplace('*', {'id' : 40})
   *
   *   " Remove all the placed signs from all the buffers
   *   call sign_unplace('*')
   *
   */
  sign_unplace: (group: any, dict?: any) => any;
  /**
   * Simplify the file name as much as possible without changing
   * the meaning.  Shortcuts (on MS-Windows) or symbolic links (on
   * Unix) are not resolved.  If the first path component in
   * {filename} designates the current directory, this will be
   * valid for the result as well.  A trailing path separator is
   * not removed either.
   * Example: >
   *   simplify("./dir/.././/file/") == "./file/"
   *  Note: The combination "dir/.." is only removed if "dir" is
   * a searchable directory or does not exist.  On Unix, it is also
   * removed when "dir" is a symbolic link within the same
   * directory.  In order to resolve all the involved symbolic
   * links before simplifying the path name, use |resolve()|.
   */
  simplify: (filename: any) => any;
  /**
   * Return the sine of {expr}, measured in radians, as a |Float|.
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo sin(100)
   *    -0.506366 >
   *   :echo sin(-4.01)
   *    0.763301
   */
  sin: (expr: any) => any;
  /**
   * Return the hyperbolic sine of {expr} as a |Float| in the range
   * [-inf, inf].
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo sinh(0.5)
   *    0.521095 >
   *   :echo sinh(-0.9)
   *    -1.026517
   */
  sinh: (expr: any) => any;
  /**
   * Connect a socket to an address. If {mode} is "pipe" then
   * {address} should be the path of a named pipe. If {mode} is
   * "tcp" then {address} should be of the form "host:port" where
   * the host should be an ip adderess or host name, and port the
   * port number.
   *
   * Returns a |channel| ID. Close the socket with |chanclose()|.
   * Use |chansend()| to send data over a bytes socket, and
   * |rpcrequest()| and |rpcnotify()| to communicate with a RPC
   * socket.
   *
   * {opts} is a dictionary with these keys:
   *   |on_data| : callback invoked when data was read from socket
   *   data_buffered : read socket data in |channel-buffered| mode.
   *   rpc     : If set, |msgpack-rpc| will be used to communicate
   *       over the socket.
   * Returns:
   *   - The channel ID on success (greater than zero)
   *   - 0 on invalid arguments or connection failure.
   */
  sockconnect: (mode: any, address: any, opts: any) => any;
  /**
   * Sort the items in {list} in-place.  Returns {list}.
   *
   * If you want a list to remain unmodified make a copy first: >
   *   :let sortedlist = sort(copy(mylist))
   *
   *  When {func} is omitted, is empty or zero, then sort() uses the
   * string representation of each item to sort on.  Numbers sort
   * after Strings, |Lists| after Numbers.  For sorting text in the
   * current buffer use |:sort|.
   *
   * When {func} is given and it is '1' or 'i' then case is
   * ignored.
   *
   * When {func} is given and it is 'n' then all items will be
   * sorted numerical (Implementation detail: This uses the
   * strtod() function to parse numbers, Strings, Lists, Dicts and
   * Funcrefs will be considered as being 0).
   *
   * When {func} is given and it is 'N' then all items will be
   * sorted numerical. This is like 'n' but a string containing
   * digits will be used as the number they represent.
   *
   * When {func} is given and it is 'f' then all items will be
   * sorted numerical. All values must be a Number or a Float.
   *
   * When {func} is a |Funcref| or a function name, this function
   * is called to compare items.  The function is invoked with two
   * items as argument and must return zero if they are equal, 1 or
   * bigger if the first one sorts after the second one, -1 or
   * smaller if the first one sorts before the second one.
   *
   * {dict} is for functions with the "dict" attribute.  It will be
   * used to set the local variable "self". |Dictionary-function|
   *
   * The sort is stable, items which compare equal (as number or as
   * string) will keep their relative position. E.g., when sorting
   * on numbers, text strings will sort next to each other, in the
   * same order as they were originally.
   *
   * Also see |uniq()|.
   *
   * Example: >
   *   func MyCompare(i1, i2)
   *      return a:i1 == a:i2 ? 0 : a:i1 > a:i2 ? 1 : -1
   *   endfunc
   *   let sortedlist = sort(mylist, "MyCompare")
   *  A shorter compare version for this specific simple case, which
   * ignores overflow: >
   *   func MyCompare(i1, i2)
   *      return a:i1 - a:i2
   *   endfunc
   *
   */
  sort: (list: any, func?: any, dict?: any) => any;
  /**
   * Return the sound-folded equivalent of {word}.  Uses the first
   * language in 'spelllang' for the current window that supports
   * soundfolding.  'spell' must be set.  When no sound folding is
   * possible the {word} is returned unmodified.
   * This can be used for making spelling suggestions.  Note that
   * the method can be quite slow.
   */
  soundfold: (word: any) => any;
  /**
   * Without argument: The result is the badly spelled word under
   * or after the cursor.  The cursor is moved to the start of the
   * bad word.  When no bad word is found in the cursor line the
   * result is an empty string and the cursor doesn't move.
   *
   * With argument: The result is the first word in {sentence} that
   * is badly spelled.  If there are no spelling mistakes the
   * result is an empty string.
   *
   * The return value is a list with two items:
   * - The badly spelled word or an empty string.
   * - The type of the spelling error:
   *   "bad"    spelling mistake
   *   "rare"    rare word
   *   "local"    word only valid in another region
   *   "caps"    word should start with Capital
   * Example: >
   *   echo spellbadword("the quik brown fox")
   *    ['quik', 'bad'] ~
   *
   * The spelling information for the current window is used.  The
   * 'spell' option must be set and the value of 'spelllang' is
   * used.
   */
  spellbadword: (sentence?: any) => any;
  /**
   * Return a |List| with spelling suggestions to replace {word}.
   * When {max} is given up to this number of suggestions are
   * returned.  Otherwise up to 25 suggestions are returned.
   *
   * When the {capital} argument is given and it's non-zero only
   * suggestions with a leading capital will be given.  Use this
   * after a match with 'spellcapcheck'.
   *
   * {word} can be a badly spelled word followed by other text.
   * This allows for joining two words that were split.  The
   * suggestions also include the following text, thus you can
   * replace a line.
   *
   * {word} may also be a good word.  Similar words will then be
   * returned.  {word} itself is not included in the suggestions,
   * although it may appear capitalized.
   *
   * The spelling information for the current window is used.  The
   * 'spell' option must be set and the values of 'spelllang' and
   * 'spellsuggest' are used.
   */
  spellsuggest: (word: any, max?: any, capital?: any) => any;
  /**
   * Make a |List| out of {expr}.  When {pattern} is omitted or
   * empty each white-separated sequence of characters becomes an
   * item.
   * Otherwise the string is split where {pattern} matches,
   * removing the matched characters. 'ignorecase' is not used
   * here, add \c to ignore case. |/\c|
   * When the first or last item is empty it is omitted, unless the
   * {keepempty} argument is given and it's non-zero.
   * Other empty items are kept when {pattern} matches at least one
   * character or when {keepempty} is non-zero.
   * Example: >
   *   :let words = split(getline('.'), '\W\+')
   *  To split a string in individual characters: >
   *   :for c in split(mystring, '\zs')
   *  If you want to keep the separator you can also use '\zs' at
   * the end of the pattern: >
   *   :echo split('abc:def:ghi', ':\zs')
   *    ['abc:', 'def:', 'ghi'] ~
   * Splitting a table where the first element can be empty: >
   *   :let items = split(line, ':', 1)
   *  The opposite function is |join()|.
   */
  split: (expr: any, pattern?: any, keepempty?: any) => any;
  /**
   * Return the non-negative square root of Float {expr} as a
   * |Float|.
   * {expr} must evaluate to a |Float| or a |Number|.  When {expr}
   * is negative the result is NaN (Not a Number).
   * Examples: >
   *   :echo sqrt(100)
   *    10.0 >
   *   :echo sqrt(-4.01)
   *    nan
   * "nan" may be different, it depends on system libraries.
   */
  sqrt: (expr: any) => any;
  /**
   * With |--headless| this opens stdin and stdout as a |channel|.
   * May be called only once. See |channel-stdio|. stderr is not
   * handled by this function, see |v:stderr|.
   *
   * Close the stdio handles with |chanclose()|. Use |chansend()|
   * to send data to stdout, and |rpcrequest()| and |rpcnotify()|
   * to communicate over RPC.
   *
   * {opts} is a dictionary with these keys:
   *   |on_stdin| : callback invoked when stdin is written to.
   *   stdin_buffered : read stdin in |channel-buffered| mode.
   *   rpc      : If set, |msgpack-rpc| will be used to communicate
   *        over stdio
   * Returns:
   *   - |channel-id| on success (value is always 1)
   *   - 0 on invalid arguments
   */
  stdioopen: (opts: any) => any;
  /**
   * Returns |standard-path| locations of various default files and
   * directories.
   *
   * {what}       Type    Description ~
   * cache        String  Cache directory. Arbitrary temporary
   *                      storage for plugins, etc.
   * config       String  User configuration directory. The
   *                      |init.vim| is stored here.
   * config_dirs  List    Additional configuration directories.
   * data         String  User data directory. The |shada-file|
   *                      is stored here.
   * data_dirs    List    Additional data directories.
   *
   * Example: >
   *   :echo stdpath("config")
   */
  stdpath: (what: any) => any;
  /**
   * Convert String {expr} to a Float.  This mostly works the same
   * as when using a floating point number in an expression, see
   * |floating-point-format|.  But it's a bit more permissive.
   * E.g., "1e40" is accepted, while in an expression you need to
   * write "1.0e40".  The hexadecimal form "0x123" is also
   * accepted, but not others, like binary or octal.
   * Text after the number is silently ignored.
   * The decimal point is always '.', no matter what the locale is
   * set to.  A comma ends the number: "12,345.67" is converted to
   * 12.0.  You can strip out thousands separators with
   * |substitute()|: >
   *   let f = str2float(substitute(text, ',', '', 'g'))
   */
  str2float: (expr: any) => any;
  /**
   * Return a list containing the number values which represent
   * each character in String {expr}.  Examples: >
   *   str2list(" ")    returns [32]
   *   str2list("ABC")    returns [65, 66, 67]
   *  |list2str()| does the opposite.
   *
   * When {utf8} is omitted or zero, the current 'encoding' is used.
   * With {utf8} set to 1, always treat the String as utf-8
   * characters.  With utf-8 composing characters are handled
   * properly: >
   *   str2list("á")    returns [97, 769]
   */
  str2list: (expr: any, utf8?: any) => any;
  /**
   * Convert string {expr} to a number.
   * {base} is the conversion base, it can be 2, 8, 10 or 16.
   * When {base} is omitted base 10 is used.  This also means that
   * a leading zero doesn't cause octal conversion to be used, as
   * with the default String to Number conversion.
   * When {base} is 16 a leading "0x" or "0X" is ignored.  With a
   * different base the result will be zero. Similarly, when {base}
   * is 8 a leading "0" is ignored, and when {base} is 2 a leading
   * "0b" or "0B" is ignored.
   * Text after the number is silently ignored.
   */
  str2nr: (expr: any, base?: any) => any;
  /**
   * The result is a Number, which is the number of characters
   * in String {expr}.
   * When {skipcc} is omitted or zero, composing characters are
   * counted separately.
   * When {skipcc} set to 1, Composing characters are ignored.
   * Also see |strlen()|, |strdisplaywidth()| and |strwidth()|.
   *
   * {skipcc} is only available after 7.4.755.  For backward
   * compatibility, you can define a wrapper function: >
   *     if has("patch-7.4.755")
   *       function s:strchars(str, skipcc)
   *   return strchars(a:str, a:skipcc)
   *       endfunction
   *     else
   *       function s:strchars(str, skipcc)
   *   if a:skipcc
   *     return strlen(substitute(a:str, ".", "x", "g"))
   *   else
   *     return strchars(a:str)
   *   endif
   *       endfunction
   *     endif
   *
   */
  strchars: (expr: any, skipcc?: any) => any;
  /**
   * Like |strpart()| but using character index and length instead
   * of byte index and length.
   * When a character index is used where a character does not
   * exist it is assumed to be one character.  For example: >
   *   strcharpart('abc', -1, 2)
   *  results in 'a'.
   */
  strcharpart: (src: any, start: any, len?: any) => any;
  /**
   * The result is a Number, which is the number of display cells
   * String {expr} occupies on the screen when it starts at {col}
   * (first column is zero).  When {col} is omitted zero is used.
   * Otherwise it is the screen column where to start.  This
   * matters for Tab characters.
   * The option settings of the current window are used.  This
   * matters for anything that's displayed differently, such as
   * 'tabstop' and 'display'.
   * When {expr} contains characters with East Asian Width Class
   * Ambiguous, this function's return value depends on 'ambiwidth'.
   * Also see |strlen()|, |strwidth()| and |strchars()|.
   */
  strdisplaywidth: (expr: any, col?: any) => any;
  /**
   * The result is a String, which is a formatted date and time, as
   * specified by the {format} string.  The given {time} is used,
   * or the current time if no time is given.  The accepted
   * {format} depends on your system, thus this is not portable!
   * See the manual page of the C function strftime() for the
   * format.  The maximum length of the result is 80 characters.
   * See also |localtime()| and |getftime()|.
   * The language can be changed with the |:language| command.
   * Examples: >
   *   :echo strftime("%c")       Sun Apr 27 11:49:23 1997
   *   :echo strftime("%Y %b %d %X")     1997 Apr 27 11:53:25
   *   :echo strftime("%y%m%d %T")     970427 11:53:55
   *   :echo strftime("%H:%M")     11:55
   *   :echo strftime("%c", getftime("file.c"))
   *            Show mod time of file.c.
   */
  strftime: (format: any, time?: any) => any;
  /**
   * Get character {index} from {str}.  This uses a character
   * index, not a byte index.  Composing characters are considered
   * separate characters here.
   * Also see |strcharpart()| and |strchars()|.
   */
  strgetchar: (str: any, index: any) => any;
  /**
   * The result is a Number, which gives the byte index in
   * {haystack} of the first occurrence of the String {needle}.
   * If {start} is specified, the search starts at index {start}.
   * This can be used to find a second match: >
   *   :let colon1 = stridx(line, ":")
   *   :let colon2 = stridx(line, ":", colon1 + 1)
   *  The search is done case-sensitive.
   * For pattern searches use |match()|.
   * -1 is returned if the {needle} does not occur in {haystack}.
   * See also |strridx()|.
   * Examples: >
   *   :echo stridx("An Example", "Example")       3
   *   :echo stridx("Starting point", "Start")    0
   *   :echo stridx("Starting point", "start")   -1
   */
  stridx: (haystack: any, needle: any, start?: any) => any;
  /**
   * Return {expr} converted to a String.  If {expr} is a Number,
   *     Float, String or a composition of them, then the result can be
   *     parsed back with |eval()|.
   *       {expr} type  result ~
   *       String    'string'
   *       Number    123
   *       Float    123.123456 or 1.123456e8 or
   *           `str2float('inf')`
   *       Funcref    `function('name')`
   *       List    [item, item]
   *       Dictionary  {key: value, key: value}
   *     Note that in String values the ' character is doubled.
   *     Also see |strtrans()|.
   *     Note 2: Output format is mostly compatible with YAML, except
   *     for infinite and NaN floating-point values representations
   *     which use |str2float()|.  Strings are also dumped literally,
   *     only single quote is escaped, which does not allow using YAML
   *     for parsing back binary strings.  |eval()| should always work for
   *     strings and floats though and this is the only official
   *     method, use |msgpackdump()| or |json_encode()| if you need to
   *     share data with other application.
   */
  string: (expr: any) => any;
  /**
   * The result is a Number, which is the length of the String
   *     {expr} in bytes.
   *     If the argument is a Number it is first converted to a String.
   *     For other types an error is given.
   *     If you want to count the number of multibyte characters use
   *     |strchars()|.
   *     Also see |len()|, |strdisplaywidth()| and |strwidth()|.
   */
  strlen: (expr: any) => any;
  /**
   * The result is a String, which is part of {src}, starting from
   * byte {start}, with the byte length {len}.
   * When {chars} is present and TRUE then {len} is the number of
   * characters positions (composing characters are not counted
   * separately, thus "1" means one base character and any
   * following composing characters).
   * To count {start} as characters instead of bytes use
   * |strcharpart()|.
   *
   * When bytes are selected which do not exist, this doesn't
   * result in an error, the bytes are simply omitted.
   * If {len} is missing, the copy continues from {start} till the
   * end of the {src}. >
   *   strpart("abcdefg", 3, 2)    == "de"
   *   strpart("abcdefg", -2, 4)   == "ab"
   *   strpart("abcdefg", 5, 4)    == "fg"
   *   strpart("abcdefg", 3)      == "defg"
   *
   *  Note: To get the first character, {start} must be 0.  For
   * example, to get the character under the cursor: >
   *   strpart(getline("."), col(".") - 1, 1, v:true)
   *
   */
  strpart: (src: any, start: any, len?: any, chars?: any) => any;
  /**
   * The result is a Number, which gives the byte index in
   * {haystack} of the last occurrence of the String {needle}.
   * When {start} is specified, matches beyond this index are
   * ignored.  This can be used to find a match before a previous
   * match: >
   *   :let lastcomma = strridx(line, ",")
   *   :let comma2 = strridx(line, ",", lastcomma - 1)
   *  The search is done case-sensitive.
   * For pattern searches use |match()|.
   * -1 is returned if the {needle} does not occur in {haystack}.
   * If the {needle} is empty the length of {haystack} is returned.
   * See also |stridx()|.  Examples: >
   *   :echo strridx("an angry armadillo", "an")       3
   */
  strridx: (haystack: any, needle: any, start?: any) => any;
  /**
   * When used with a single character it works similar to the C
   * function strrchr().
   */
  strrchr: () => any;
  /**
   * The result is a String, which is {expr} with all unprintable
   * characters translated into printable characters |'isprint'|.
   * Like they are shown in a window.  Example: >
   *   echo strtrans(@a)
   *  This displays a newline in register a as "^@" instead of
   * starting a new line.
   */
  strtrans: (expr: any) => any;
  /**
   * The result is a Number, which is the number of display cells
   * String {expr} occupies.  A Tab character is counted as one
   * cell, alternatively use |strdisplaywidth()|.
   * When {expr} contains characters with East Asian Width Class
   * Ambiguous, this function's return value depends on 'ambiwidth'.
   * Also see |strlen()|, |strdisplaywidth()| and |strchars()|.
   */
  strwidth: (expr: any) => any;
  /**
   * Only for an expression in a |:substitute| command or
   * substitute() function.
   * Returns the {nr}'th submatch of the matched text.  When {nr}
   * is 0 the whole matched text is returned.
   * Note that a NL in the string can stand for a line break of a
   * multi-line match or a NUL character in the text.
   * Also see |sub-replace-expression|.
   *
   * If {list} is present and non-zero then submatch() returns
   * a list of strings, similar to |getline()| with two arguments.
   * NL characters in the text represent NUL characters in the
   * text.
   * Only returns more than one item for |:substitute|, inside
   * |substitute()| this list will always contain one or zero
   * items, since there are no real line breaks.
   *
   * When substitute() is used recursively only the submatches in
   * the current (deepest) call can be obtained.
   *
   * Examples: >
   *   :s/\d\+/\=submatch(0) + 1/
   *   :echo substitute(text, '\d\+', '\=submatch(0) + 1', '')
   *  This finds the first number in the line and adds one to it.
   * A line break is included as a newline character.
   */
  submatch: (nr: any, list?: any) => any;
  /**
   * The result is a String, which is a copy of {expr}, in which
   * the first match of {pat} is replaced with {sub}.
   * When {flags} is "g", all matches of {pat} in {expr} are
   * replaced.  Otherwise {flags} should be "".
   *
   * This works like the ":substitute" command (without any flags).
   * But the matching with {pat} is always done like the 'magic'
   * option is set and 'cpoptions' is empty (to make scripts
   * portable).  'ignorecase' is still relevant, use |/\c| or |/\C|
   * if you want to ignore or match case and ignore 'ignorecase'.
   * 'smartcase' is not used.  See |string-match| for how {pat} is
   * used.
   *
   * A "~" in {sub} is not replaced with the previous {sub}.
   * Note that some codes in {sub} have a special meaning
   * |sub-replace-special|.  For example, to replace something with
   * "\n" (two characters), use "\\\\n" or '\\n'.
   *
   * When {pat} does not match in {expr}, {expr} is returned
   * unmodified.
   *
   * Example: >
   *   :let &path = substitute(&path, ",\\=[^,]*$", "", "")
   *  This removes the last component of the 'path' option. >
   *   :echo substitute("testing", ".*", "\\U\\0", "")
   *  results in "TESTING".
   *
   * When {sub} starts with "\=", the remainder is interpreted as
   * an expression. See |sub-replace-expression|.  Example: >
   *   :echo substitute(s, '%\(\x\x\)',
   *      \ '\=nr2char("0x" . submatch(1))', 'g')
   *
   *  When {sub} is a Funcref that function is called, with one
   * optional argument.  Example: >
   *    :echo substitute(s, '%\(\x\x\)', SubNr, 'g')
   *  The optional argument is a list which contains the whole
   * matched string and up to nine submatches, like what
   * |submatch()| returns.  Example: >
   *    :echo substitute(s, '%\(\x\x\)', {m -> '0x' . m[1]}, 'g')
   */
  substitute: (expr: any, pat: any, sub: any, flags: any) => any;
  /**
   * The result is a dictionary, which holds information about the
   * swapfile {fname}. The available fields are:
   *   version VIM version
   *   user  user name
   *   host  host name
   *   fname  original file name
   *   pid  PID of the VIM process that created the swap
   *     file
   *   mtime  last modification time in seconds
   *   inode  Optional: INODE number of the file
   *   dirty  1 if file was modified, 0 if not
   * In case of failure an "error" item is added with the reason:
   *   Cannot open file: file not found or in accessible
   *   Cannot read file: cannot read first block
   *   Not a swap file: does not contain correct block ID
   *   Magic number mismatch: Info in first block is invalid
   */
  swapinfo: (fname: any) => any;
  /**
   * The result is the swap file path of the buffer {expr}.
   * For the use of {expr}, see |bufname()| above.
   * If buffer {expr} is the current buffer, the result is equal to
   * |:swapname| (unless no swap file).
   * If buffer {expr} has no swap file, returns an empty string.
   */
  swapname: (expr: any) => any;
  /**
   * The result is a Number, which is the syntax ID at the position
   * {lnum} and {col} in the current window.
   * The syntax ID can be used with |synIDattr()| and
   * |synIDtrans()| to obtain syntax information about text.
   *
   * {col} is 1 for the leftmost column, {lnum} is 1 for the first
   * line.  'synmaxcol' applies, in a longer line zero is returned.
   * Note that when the position is after the last character,
   * that's where the cursor can be in Insert mode, synID() returns
   * zero.
   *
   * When {trans} is |TRUE|, transparent items are reduced to the
   * item that they reveal.  This is useful when wanting to know
   * the effective color.  When {trans} is |FALSE|, the transparent
   * item is returned.  This is useful when wanting to know which
   * syntax item is effective (e.g. inside parens).
   * Warning: This function can be very slow.  Best speed is
   * obtained by going through the file in forward direction.
   *
   * Example (echoes the name of the syntax item under the cursor): >
   *   :echo synIDattr(synID(line("."), col("."), 1), "name")
   *
   */
  synID: (lnum: any, col: any, trans: any) => any;
  /**
   * The result is a String, which is the {what} attribute of
   * syntax ID {synID}.  This can be used to obtain information
   * about a syntax item.
   * {mode} can be "gui", "cterm" or "term", to get the attributes
   * for that mode.  When {mode} is omitted, or an invalid value is
   * used, the attributes for the currently active highlighting are
   * used (GUI, cterm or term).
   * Use synIDtrans() to follow linked highlight groups.
   * {what}    result
   * "name"    the name of the syntax item
   * "fg"    foreground color (GUI: color name used to set
   *     the color, cterm: color number as a string,
   *     term: empty string)
   * "bg"    background color (as with "fg")
   * "font"    font name (only available in the GUI)
   *     |highlight-font|
   * "sp"    special color (as with "fg") |highlight-guisp|
   * "fg#"    like "fg", but for the GUI and the GUI is
   *     running the name in "#RRGGBB" form
   * "bg#"    like "fg#" for "bg"
   * "sp#"    like "fg#" for "sp"
   * "bold"    "1" if bold
   * "italic"  "1" if italic
   * "reverse"  "1" if reverse
   * "inverse"  "1" if inverse (= reverse)
   * "standout"  "1" if standout
   * "underline"  "1" if underlined
   * "undercurl"  "1" if undercurled
   * "strikethrough"  "1" if struckthrough
   *
   * Example (echoes the color of the syntax item under the
   * cursor): >
   * cho synIDattr(synIDtrans(synID(line("."), col("."), 1)), "fg")
   *
   */
  synIDattr: (synID: any, what: any, mode?: any) => any;
  /**
   * The result is a Number, which is the translated syntax ID of
   * {synID}.  This is the syntax group ID of what is being used to
   * highlight the character.  Highlight links given with
   * ":highlight link" are followed.
   */
  synIDtrans: (synID: any) => any;
  /**
   * The result is a List with currently three items:
   * 1. The first item in the list is 0 if the character at the
   *    position {lnum} and {col} is not part of a concealable
   *    region, 1 if it is.
   * 2. The second item in the list is a string. If the first item
   *    is 1, the second item contains the text which will be
   *    displayed in place of the concealed text, depending on the
   *    current setting of 'conceallevel' and 'listchars'.
   * 3. The third and final item in the list is a number
   *    representing the specific syntax region matched in the
   *    line. When the character is not concealed the value is
   *    zero. This allows detection of the beginning of a new
   *    concealable region if there are two consecutive regions
   *    with the same replacement character.  For an example, if
   *    the text is "123456" and both "23" and "45" are concealed
   *    and replaced by the character "X", then:
   *   call      returns ~
   *      synconcealed(lnum, 1)   [0, '', 0]
   *      synconcealed(lnum, 2)   [1, 'X', 1]
   *      synconcealed(lnum, 3)   [1, 'X', 1]
   *      synconcealed(lnum, 4)   [1, 'X', 2]
   *      synconcealed(lnum, 5)   [1, 'X', 2]
   *      synconcealed(lnum, 6)   [0, '', 0]
   */
  synconcealed: (lnum: any, col: any) => any;
  /**
   * Return a |List|, which is the stack of syntax items at the
   * position {lnum} and {col} in the current window.  Each item in
   * the List is an ID like what |synID()| returns.
   * The first item in the List is the outer region, following are
   * items contained in that one.  The last one is what |synID()|
   * returns, unless not the whole item is highlighted or it is a
   * transparent item.
   * This function is useful for debugging a syntax file.
   * Example that shows the syntax stack under the cursor: >
   *   for id in synstack(line("."), col("."))
   *      echo synIDattr(id, "name")
   *   endfor
   *  When the position specified with {lnum} and {col} is invalid
   * nothing is returned.  The position just after the last
   * character in a line and the first column in an empty line are
   * valid positions.
   */
  synstack: (lnum: any, col: any) => any;
  /**
   * Get the output of {cmd} as a |string| (use |systemlist()| to
   * get a |List|). {cmd} is treated exactly as in |jobstart()|.
   * Not to be used for interactive commands.
   *
   * If {input} is a string it is written to a pipe and passed as
   * stdin to the command.  The string is written as-is, line
   * separators are not changed.
   * If {input} is a |List| it is written to the pipe as
   * |writefile()| does with {binary} set to "b" (i.e. with
   * a newline between each list item, and newlines inside list
   * items converted to NULs).
   * When {input} is given and is a valid buffer id, the content of
   * the buffer is written to the file line by line, each line
   * terminated by NL (and NUL where the text has NL).
   */
  system: (cmd: any, input?: any) => any;
  /**
   * Note: system() cannot write to or read from backgrounded ("&")
   *     shell commands, e.g.: >
   *         :echo system("cat - &", "foo"))
   * <    which is equivalent to: >
   *         $ echo foo | bash -c 'cat - &'
   * <    The pipes are disconnected (unless overridden by shell
   *     redirection syntax) before input can reach it. Use
   *     |jobstart()| instead.
   *
   *     Note: Use |shellescape()| or |::S| with |expand()| or
   *     |fnamemodify()| to escape special characters in a command
   *     argument.  Newlines in {cmd} may cause the command to fail.
   *     The characters in 'shellquote' and 'shellxquote' may also
   *     cause trouble.
   *
   *     Result is a String.  Example: >
   *         :let files = system("ls " .  shellescape(expand('%:h')))
   *         :let files = system('ls ' . expand('%:h:S'))
   *
   * <    To make the result more system-independent, the shell output
   *     is filtered to replace <CR> with <NL> for Macintosh, and
   *     <CR><NL> with <NL> for DOS-like systems.
   *     To avoid the string being truncated at a NUL, all NUL
   *     characters are replaced with SOH (0x01).
   *
   *     The command executed is constructed using several options when
   *     {cmd} is a string: 'shell' 'shellcmdflag' {cmd}
   *
   *     The resulting error code can be found in |v:shell_error|.
   *
   *     Note that any wrong value in the options mentioned above may
   *     make the function fail.  It has also been reported to fail
   *     when using a security agent application.
   *     Unlike ":!cmd" there is no automatic check for changed files.
   *     Use |:checktime| to force a check.
   */
  E5677: any;
  /**
   * Same as |system()|, but returns a |List| with lines (parts of
   * output separated by NL) with NULs transformed into NLs. Output
   * is the same as |readfile()| will output with {binary} argument
   * set to "b", except that a final newline is not preserved,
   * unless {keepempty} is non-zero.
   * Note that on MS-Windows you may get trailing CR characters.
   *
   * Returns an empty string on error.
   */
  systemlist: (cmd: any, input?: any, keepempty?: any) => any;
  /**
   * The result is a |List|, where each item is the number of the
   * buffer associated with each window in the current tab page.
   * {arg} specifies the number of the tab page to be used. When
   * omitted the current tab page is used.
   * When {arg} is invalid the number zero is returned.
   * To get a list of all buffers in all tabs use this: >
   *   let buflist = []
   *   for i in range(tabpagenr('$'))
   *      call extend(buflist, tabpagebuflist(i + 1))
   *   endfor
   *  Note that a buffer may appear in more than one window.
   */
  tabpagebuflist: (arg?: any) => any;
  /**
   * The result is a Number, which is the number of the current
   * tab page.  The first tab page has number 1.
   * The optional argument {arg} supports the following values:
   *   $  the number of the last tab page (the tab page
   *     count).
   *   #  the number of the last accessed tab page (where
   *     |g<Tab>| goes to).  If there is no previous
   *     tab page, 0 is returned.
   * The number can be used with the |:tab| command.
   */
  tabpagenr: (arg?: any) => any;
  /**
   * Like |winnr()| but for tab page {tabarg}.
   * {tabarg} specifies the number of tab page to be used.
   * {arg} is used like with |winnr()|:
   * - When omitted the current window number is returned.  This is
   *   the window which will be used when going to this tab page.
   * - When "$" the number of windows is returned.
   * - When "#" the previous window nr is returned.
   * Useful examples: >
   *     tabpagewinnr(1)      " current window of tab page 1
   *     tabpagewinnr(4, '$')    " number of windows in tab page 4
   *  When {tabarg} is invalid zero is returned.
   */
  tabpagewinnr: (tabarg: any, arg?: any) => any;
  /**
   * Returns a |List| with the file names used to search for tags
   *     for the current buffer.  This is the 'tags' option expanded.
   */
  tagfiles: () => any;
  /**
   * Returns a list of tags matching the regular expression {expr}.
   *
   * If {filename} is passed it is used to prioritize the results
   * in the same way that |:tselect| does. See |tag-priority|.
   * {filename} should be the full path of the file.
   *
   * Each list item is a dictionary with at least the following
   * entries:
   *   name    Name of the tag.
   *   filename  Name of the file where the tag is
   *       defined.  It is either relative to the
   *       current directory or a full path.
   *   cmd    Ex command used to locate the tag in
   *       the file.
   *   kind    Type of the tag.  The value for this
   *       entry depends on the language specific
   *       kind values.  Only available when
   *       using a tags file generated by
   *       Exuberant ctags or hdrtag.
   *   static    A file specific tag.  Refer to
   *       |static-tag| for more information.
   * More entries may be present, depending on the content of the
   * tags file: access, implementation, inherits and signature.
   * Refer to the ctags documentation for information about these
   * fields.  For C code the fields "struct", "class" and "enum"
   * may appear, they give the name of the entity the tag is
   * contained in.
   *
   * The ex-command "cmd" can be either an ex search pattern, a
   * line number or a line number followed by a byte number.
   *
   * If there are no matching tags, then an empty list is returned.
   *
   * To get an exact tag match, the anchors '^' and '$' should be
   * used in {expr}.  This also make the function work faster.
   * Refer to |tag-regexp| for more information about the tag
   * search regular expression pattern.
   *
   * Refer to |'tags'| for information about how the tags file is
   * located by Vim. Refer to |tags-file-format| for the format of
   * the tags file generated by the different ctags tools.
   */
  taglist: (expr: any, filename?: any) => any;
  /**
   * The result is a String, which is the name of a file that
   * doesn't exist.  It can be used for a temporary file.  Example: >
   *   :let tmpfile = tempname()
   *   :exe "redir > " . tmpfile
   *  For Unix, the file will be in a private directory |tempfile|.
   * For MS-Windows forward slashes are used when the 'shellslash'
   * option is set or when 'shellcmdflag' starts with '-'.
   */
  tempname: () => any;
  /**
   * Spawns {cmd} in a new pseudo-terminal session connected
   * to the current buffer.  {cmd} is the same as the one passed to
   * |jobstart()|.  This function fails if the current buffer is
   * modified (all buffer contents are destroyed).
   *
   * The {opts} dict is similar to the one passed to |jobstart()|,
   * but the `pty`, `width`, `height`, and `TERM` fields are
   * ignored: `height`/`width` are taken from the current window
   * and `$TERM` is set to "xterm-256color".
   * Returns the same values as |jobstart()|.
   *
   * See |terminal| for more information.
   */
  termopen: (cmd: any, opts?: any) => any;
  /**
   * Like |garbagecollect()|, but executed right away.  This must
   * only be called directly to avoid any structure to exist
   * internally, and |v:testing| must have been set before calling
   * any function.
   */
  test_garbagecollect_now: () => any;
  /**
   * Return the tangent of {expr}, measured in radians, as a |Float|
   * in the range [-inf, inf].
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo tan(10)
   *    0.648361 >
   *   :echo tan(-4.01)
   *    -1.181502
   */
  tan: (expr: any) => any;
  /**
   * Return the hyperbolic tangent of {expr} as a |Float| in the
   * range [-1, 1].
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   :echo tanh(0.5)
   *    0.462117 >
   *   :echo tanh(-1)
   *    -0.761594
   */
  tanh: (expr: any) => any;
  /**
   * Return a list with information about timers.
   * When {id} is given only information about this timer is
   * returned.  When timer {id} does not exist an empty list is
   * returned.
   * When {id} is omitted information about all timers is returned.
   *
   * For each timer the information is stored in a Dictionary with
   * these items:
   *     "id"      the timer ID
   *     "time"      time the timer was started with
   *     "repeat"      number of times the timer will still fire;
   *         -1 means forever
   *     "callback"      the callback
   */
  timer_info: (id?: any) => any;
  /**
   * Pause or unpause a timer.  A paused timer does not invoke its
   * callback when its time expires.  Unpausing a timer may cause
   * the callback to be invoked almost immediately if enough time
   * has passed.
   *
   * Pausing a timer is useful to avoid the callback to be called
   * for a short time.
   *
   * If {paused} evaluates to a non-zero Number or a non-empty
   * String, then the timer is paused, otherwise it is unpaused.
   * See |non-zero-arg|.
   */
  timer_pause: (timer: any, paused: any) => any;
  /**
   * Create a timer and return the timer ID.
   *
   * {time} is the waiting time in milliseconds. This is the
   * minimum time before invoking the callback.  When the system is
   * busy or Vim is not waiting for input the time will be longer.
   *
   * {callback} is the function to call.  It can be the name of a
   * function or a |Funcref|.  It is called with one argument, which
   * is the timer ID.  The callback is only invoked when Vim is
   * waiting for input.
   *
   * {options} is a dictionary.  Supported entries:
   *    "repeat"  Number of times to repeat the callback.
   *     -1 means forever.  Default is 1.
   *     If the timer causes an error three times in a
   *     row the repeat is cancelled.
   *
   * Example: >
   *   func MyHandler(timer)
   *     echo 'Handler called'
   *   endfunc
   *   let timer = timer_start(500, 'MyHandler',
   *     \ {'repeat': 3})
   *  This invokes MyHandler() three times at 500 msec intervals.
   */
  timer_start: (time: any, callback: any, options?: any) => any;
  /**
   * Stop a timer.  The timer callback will no longer be invoked.
   * {timer} is an ID returned by timer_start(), thus it must be a
   * Number.  If {timer} does not exist there is no error.
   */
  timer_stop: (timer: any) => any;
  /**
   * Stop all timers.  The timer callbacks will no longer be
   * invoked.  Useful if some timers is misbehaving.  If there are
   * no timers there is no error.
   */
  timer_stopall: () => any;
  /**
   * The result is a copy of the String given, with all uppercase
   * characters turned into lowercase (just like applying |gu| to
   * the string).
   */
  tolower: (expr: any) => any;
  /**
   * The result is a copy of the String given, with all lowercase
   * characters turned into uppercase (just like applying |gU| to
   * the string).
   */
  toupper: (expr: any) => any;
  /**
   * The result is a copy of the {src} string with all characters
   * which appear in {fromstr} replaced by the character in that
   * position in the {tostr} string.  Thus the first character in
   * {fromstr} is translated into the first character in {tostr}
   * and so on.  Exactly like the unix "tr" command.
   * This code also deals with multibyte characters properly.
   *
   * Examples: >
   *   echo tr("hello there", "ht", "HT")
   *  returns "Hello THere" >
   *   echo tr("<blob>", "<>", "{}")
   *  returns "{blob}"
   */
  tr: (src: any, fromstr: any, tostr: any) => any;
  /**
   * Return {text} as a String where any character in {mask} is
   * removed from the beginning and/or end of {text}.
   * If {mask} is not given, {mask} is all characters up to 0x20,
   * which includes Tab, space, NL and CR, plus the non-breaking
   * space character 0xa0.
   * The optional {dir} argument specifies where to remove the
   * characters:
   *   0  remove from the beginning and end of {text}
   *   1  remove only at the beginning of {text}
   *   2  remove only at the end of {text}
   * When omitted both ends are trimmed.
   * This function deals with multibyte characters properly.
   * Examples: >
   *   echo trim("   some text ")
   *  returns "some text" >
   *   echo trim("  \r\t\t\r RESERVE \t\n\x0B\xA0") . "_TAIL"
   *  returns "RESERVE_TAIL" >
   *   echo trim("rm<Xrm<>X>rrm", "rm<>")
   *  returns "Xrm<>X" (characters in the middle are not removed) >
   *   echo trim("  vim  ", " ", 2)
   *  returns "  vim"
   */
  trim: (text: any, mask?: any, dir?: any) => any;
  /**
   * Return the largest integral value with magnitude less than or
   * equal to {expr} as a |Float| (truncate towards zero).
   * {expr} must evaluate to a |Float| or a |Number|.
   * Examples: >
   *   echo trunc(1.456)
   *    1.0  >
   *   echo trunc(-5.456)
   *    -5.0  >
   *   echo trunc(4.0)
   *    4.0
   */
  trunc: (expr: any) => any;
  /**
   * The result is a Number representing the type of {expr}.
   * Instead of using the number directly, it is better to use the
   * v:t_ variable that has the value:
   *         Number:     0 (|v:t_number|)
   *   String:     1 (|v:t_string|)
   *   Funcref:    2 (|v:t_func|)
   *   List:       3 (|v:t_list|)
   *   Dictionary: 4 (|v:t_dict|)
   *   Float:      5 (|v:t_float|)
   *   Boolean:    6 (|v:true| and |v:false|)
   *   Null:       7 (|v:null|)
   * For backward compatibility, this method can be used: >
   *   :if type(myvar) == type(0)
   *   :if type(myvar) == type("")
   *   :if type(myvar) == type(function("tr"))
   *   :if type(myvar) == type([])
   *   :if type(myvar) == type({})
   *   :if type(myvar) == type(0.0)
   *   :if type(myvar) == type(v:true)
   *  In place of checking for |v:null| type it is better to check
   * for |v:null| directly as it is the only value of this type: >
   *   :if myvar is v:null
   *             To check if the v:t_ variables exist use this: >
   *                     :if exists('v:t_number')
   */
  type: (expr: any) => any;
  /**
   * Return the name of the undo file that would be used for a file
   * with name {name} when writing.  This uses the 'undodir'
   * option, finding directories that exist.  It does not check if
   * the undo file exists.
   * {name} is always expanded to the full path, since that is what
   * is used internally.
   * If {name} is empty undofile() returns an empty string, since a
   * buffer without a file name will not write an undo file.
   * Useful in combination with |:wundo| and |:rundo|.
   * When compiled without the |+persistent_undo| option this always
   * returns an empty string.
   */
  undofile: (name: any) => any;
  /**
   * Return the current state of the undo tree in a dictionary with
   * the following items:
   *   "seq_last"  The highest undo sequence number used.
   *   "seq_cur"  The sequence number of the current position in
   *     the undo tree.  This differs from "seq_last"
   *     when some changes were undone.
   *   "time_cur"  Time last used for |:earlier| and related
   *     commands.  Use |strftime()| to convert to
   *     something readable.
   *   "save_last"  Number of the last file write.  Zero when no
   *     write yet.
   *   "save_cur"  Number of the current position in the undo
   *     tree.
   *   "synced"  Non-zero when the last undo block was synced.
   *     This happens when waiting from input from the
   *     user.  See |undo-blocks|.
   *   "entries"  A list of dictionaries with information about
   *     undo blocks.
   *
   * The first item in the "entries" list is the oldest undo item.
   * Each List item is a Dictionary with these items:
   *   "seq"    Undo sequence number.  Same as what appears in
   *     |:undolist|.
   *   "time"  Timestamp when the change happened.  Use
   *     |strftime()| to convert to something readable.
   *   "newhead"  Only appears in the item that is the last one
   *     that was added.  This marks the last change
   *     and where further changes will be added.
   *   "curhead"  Only appears in the item that is the last one
   *     that was undone.  This marks the current
   *     position in the undo tree, the block that will
   *     be used by a redo command.  When nothing was
   *     undone after the last change this item will
   *     not appear anywhere.
   *   "save"  Only appears on the last block before a file
   *     write.  The number is the write count.  The
   *     first write has number 1, the last one the
   *     "save_last" mentioned above.
   *   "alt"    Alternate entry.  This is again a List of undo
   *     blocks.  Each item may again have an "alt"
   *     item.
   */
  undotree: () => any;
  /**
   * Remove second and succeeding copies of repeated adjacent
   * {list} items in-place.  Returns {list}.  If you want a list
   * to remain unmodified make a copy first: >
   *   :let newlist = uniq(copy(mylist))
   *  The default compare function uses the string representation of
   * each item.  For the use of {func} and {dict} see |sort()|.
   */
  uniq: (list: any, func?: any, dict?: any) => any;
  /**
   * Return a |List| with all the values of {dict}.  The |List| is
   * in arbitrary order.
   */
  values: (dict: any) => any;
  /**
   * The result is a Number, which is the screen column of the file
   * position given with {expr}.  That is, the last screen position
   * occupied by the character at that position, when the screen
   * would be of unlimited width.  When there is a <Tab> at the
   * position, the returned Number will be the column at the end of
   * the <Tab>.  For example, for a <Tab> in column 1, with 'ts'
   * set to 8, it returns 8. |conceal| is ignored.
   * For the byte position use |col()|.
   * For the use of {expr} see |col()|.
   * When 'virtualedit' is used {expr} can be [lnum, col, off], where
   * "off" is the offset in screen columns from the start of the
   * character.  E.g., a position within a <Tab> or after the last
   * character.  When "off" is omitted zero is used.
   * When Virtual editing is active in the current mode, a position
   * beyond the end of the line can be returned. |'virtualedit'|
   * The accepted positions are:
   *     .      the cursor position
   *     $      the end of the cursor line (the result is the
   *       number of displayed characters in the cursor line
   *       plus one)
   *     'x      position of mark x (if the mark is not set, 0 is
   *       returned)
   *     v       In Visual mode: the start of the Visual area (the
   *       cursor is the end).  When not in Visual mode
   *       returns the cursor position.  Differs from |'<| in
   *       that it's updated right away.
   * Note that only marks in the current file can be used.
   * Examples: >
   * rtcol(".")     with text "foo^Lbar", with cursor on the "^L", returns 5
   * rtcol("$")     with text "foo^Lbar", returns 9
   * rtcol("'t")    with text "    there", with 't at 'h', returns 6
   *  The first column is 1.  0 is returned for an error.
   * A more advanced example that echoes the maximum length of
   * all lines: >
   *     echo max(map(range(1, line('$')), "virtcol([v:val, '$'])"))
   */
  virtcol: (expr: any) => any;
  /**
   * The result is a String, which describes the last Visual mode
   * used in the current buffer.  Initially it returns an empty
   * string, but once Visual mode has been used, it returns "v",
   * "V", or "<CTRL-V>" (a single CTRL-V character) for
   * character-wise, line-wise, or block-wise Visual mode
   * respectively.
   * Example: >
   *   :exe "normal " . visualmode()
   *  This enters the same Visual mode as before.  It is also useful
   * in scripts if you wish to act differently depending on the
   * Visual mode that was used.
   * If Visual mode is active, use |mode()| to get the Visual mode
   * (e.g., in a |:vmap|).
   * If [expr] is supplied and it evaluates to a non-zero Number or
   * a non-empty String, then the Visual mode will be cleared and
   * the old value is returned.  See |non-zero-arg|.
   */
  visualmode: (expr?: any) => any;
  /**
   * Waits until {condition} evaluates to |TRUE|, where {condition}
   * is a |Funcref| or |string| containing an expression.
   *
   * {timeout} is the maximum waiting time in milliseconds, -1
   * means forever.
   *
   * Condition is evaluated on user events, internal events, and
   * every {interval} milliseconds (default: 200).
   *
   * Returns a status integer:
   *   0 if the condition was satisfied before timeout
   *   -1 if the timeout was exceeded
   *   -2 if the function was interrupted (by |CTRL-C|)
   *   -3 if an error occurred
   */
  wait: (timeout: any, condition: any, interval?: any) => any;
  /**
   * Returns |TRUE| when the wildmenu is active and |FALSE|
   * otherwise.  See 'wildmenu' and 'wildmode'.
   * This can be used in mappings to handle the 'wildcharm' option
   * gracefully. (Makes only sense with |mapmode-c| mappings).
   *
   * For example to make <c-j> work like <down> in wildmode, use: >
   * :cnoremap <expr> <C-j> wildmenumode() ? "\<Down>\<Tab>" : "\<c-j>"
   *
   * (Note, this needs the 'wildcharm' option set appropriately).
   */
  wildmenumode: () => any;
  /**
   * Returns a list with |window-ID|s for windows that contain
   * buffer {bufnr}.  When there is none the list is empty.
   */
  win_findbuf: (bufnr: any) => any;
  /**
   * Get the |window-ID| for the specified window.
   * When {win} is missing use the current window.
   * With {win} this is the window number.  The top window has
   * number 1.
   * Without {tab} use the current tab, otherwise the tab with
   * number {tab}.  The first tab has number one.
   * Return zero if the window cannot be found.
   */
  win_getid: (win?: any, tab?: any) => any;
  /**
   * Return the type of the window:
   *   "autocmd"  autocommand window. Temporary window
   *       used to execute autocommands.
   *   "popup"    popup window |popup|
   *   "preview"  preview window |preview-window|
   *   "command"  command-line window |cmdwin|
   *   (empty)    normal window
   *   "unknown"  window {nr} not found
   *
   * When {nr} is omitted return the type of the current window.
   * When {nr} is given return the type of this window by number or
   * |window-ID|.
   *
   * Also see the 'buftype' option.  When running a terminal in a
   * popup window then 'buftype' is "terminal" and win_gettype()
   * returns "popup".
   */
  win_gettype: (nr?: any) => any;
  /**
   * Go to window with ID {expr}.  This may also change the current
   * tabpage.
   * Return 1 if successful, 0 if the window cannot be found.
   */
  win_gotoid: (expr: any) => any;
  /**
   * Return a list with the tab number and window number of window
   * with ID {expr}: [tabnr, winnr].
   * Return [0, 0] if the window cannot be found.
   */
  win_id2tabwin: () => any;
  /**
   * Return the window number of window with ID {expr}.
   * Return 0 if the window cannot be found in the current tabpage.
   */
  win_id2win: (expr: any) => any;
  /**
   * Return the screen position of window {nr} as a list with two
   * numbers: [row, col].  The first window always has position
   * [1, 1], unless there is a tabline, then it is [2, 1].
   * {nr} can be the window number or the |window-ID|.
   * Return [0, 0] if the window cannot be found in the current
   * tabpage.
   */
  win_screenpos: (nr: any) => any;
  /**
   * The result is a Number, which is the number of the buffer
   *     associated with window {nr}.  {nr} can be the window number or
   *     the |window-ID|.
   *     When {nr} is zero, the number of the buffer in the current
   *     window is returned.
   *     When window {nr} doesn't exist, -1 is returned.
   *     Example: >
   *   :echo "The file in the current window is " . bufname(winbufnr(0))
   * <
   */
  winbufnr: (nr: any) => any;
  /**
   * The result is a Number, which is the virtual column of the
   *     cursor in the window.  This is counting screen cells from the
   *     left side of the window.  The leftmost column is one.
   */
  wincol: () => any;
  /**
   * The result is a String.  For MS-Windows it indicates the OS
   * version.  E.g, Windows 10 is "10.0", Windows 8 is "6.2",
   * Windows XP is "5.1".  For non-MS-Windows systems the result is
   * an empty string.
   */
  windowsversion: () => any;
  /**
   * The result is a Number, which is the height of window {nr}.
   * {nr} can be the window number or the |window-ID|.
   * When {nr} is zero, the height of the current window is
   * returned.  When window {nr} doesn't exist, -1 is returned.
   * An existing window always has a height of zero or more.
   * This excludes any window toolbar line.
   * Examples: >
   * cho "The current window has " . winheight(0) . " lines."
   *
   */
  winheight: (nr: any) => any;
  /**
   * The result is a nested List containing the layout of windows
   * in a tabpage.
   *
   * Without {tabnr} use the current tabpage, otherwise the tabpage
   * with number {tabnr}. If the tabpage {tabnr} is not found,
   * returns an empty list.
   *
   * For a leaf window, it returns:
   *   ['leaf', {winid}]
   * For horizontally split windows, which form a column, it
   * returns:
   *   ['col', [{nested list of windows}]]
   * For vertically split windows, which form a row, it returns:
   *   ['row', [{nested list of windows}]]
   *
   * Example: >
   *   " Only one window in the tab page
   *   :echo winlayout()
   *   ['leaf', 1000]
   *   " Two horizontally split windows
   *   :echo winlayout()
   *   ['col', [['leaf', 1000], ['leaf', 1001]]]
   *   " Three horizontally split windows, with two
   *   " vertically split windows in the middle window
   *   :echo winlayout(2)
   *   ['col', [['leaf', 1002], ['row', ['leaf', 1003],
   *            ['leaf', 1001]]], ['leaf', 1000]]
   *
   */
  winlayout: (tabnr?: any) => any;
  /**
   * The result is a Number, which is the screen line of the cursor
   *     in the window.  This is counting screen lines from the top of
   *     the window.  The first line is one.
   *     If the cursor was moved the view on the file will be updated
   *     first, this may cause a scroll.
   */
  winline: () => any;
  /**
   * The result is a Number, which is the number of the current
   *     window.  The top window has number 1.
   *
   *     The optional argument {arg} supports the following values:
   *       $  the number of the last window (the window
   *         count).
   *       #  the number of the last accessed window (where
   *         |CTRL-W_p| goes to).  If there is no previous
   *         window or it is in another tab page 0 is
   *         returned.
   *       {N}j  the number of the Nth window below the
   *         current window (where |CTRL-W_j| goes to).
   *       {N}k  the number of the Nth window above the current
   *         window (where |CTRL-W_k| goes to).
   *       {N}h  the number of the Nth window left of the
   *         current window (where |CTRL-W_h| goes to).
   *       {N}l  the number of the Nth window right of the
   *         current window (where |CTRL-W_l| goes to).
   *     The number can be used with |CTRL-W_w| and ":wincmd w"
   *     |:wincmd|.
   *     Also see |tabpagewinnr()| and |win_getid()|.
   *     Examples: >
   *       let window_count = winnr('$')
   *       let prev_window = winnr('#')
   *       let wnum = winnr('3k')
   * <
   */
  winnr: (arg?: any) => any;
  /**
   * Returns a sequence of |:resize| commands that should restore
   *     the current window sizes.  Only works properly when no windows
   *     are opened or closed and the current window and tab page is
   *     unchanged.
   *     Example: >
   *       :let cmd = winrestcmd()
   *       :call MessWithWindowSizes()
   *       :exe cmd
   * <
   */
  winrestcmd: () => any;
  /**
   * Uses the |Dictionary| returned by |winsaveview()| to restore
   * the view of the current window.
   * Note: The {dict} does not have to contain all values, that are
   * returned by |winsaveview()|. If values are missing, those
   * settings won't be restored. So you can use: >
   *     :call winrestview({'curswant': 4})
   *
   * This will only set the curswant value (the column the cursor
   * wants to move on vertical movements) of the cursor to column 5
   * (yes, that is 5), while all other settings will remain the
   * same. This is useful, if you set the cursor position manually.
   *
   * If you have changed the values the result is unpredictable.
   * If the window size changed the result won't be the same.
   */
  winrestview: (dict: any) => any;
  /**
   * Returns a |Dictionary| that contains information to restore
   *     the view of the current window.  Use |winrestview()| to
   *     restore the view.
   *     This is useful if you have a mapping that jumps around in the
   *     buffer and you want to go back to the original view.
   *     This does not save fold information.  Use the 'foldenable'
   *     option to temporarily switch off folding, so that folds are
   *     not opened when moving around. This may have side effects.
   *     The return value includes:
   *       lnum    cursor line number
   *       col    cursor column (Note: the first column
   *           zero, as opposed to what getpos()
   *           returns)
   *       coladd    cursor column offset for 'virtualedit'
   *       curswant  column for vertical movement
   *       topline    first line in the window
   *       topfill    filler lines, only in diff mode
   *       leftcol    first column displayed
   *       skipcol    columns skipped
   *     Note that no option values are saved.
   */
  winsaveview: () => any;
  /**
   * The result is a Number, which is the width of window {nr}.
   * {nr} can be the window number or the |window-ID|.
   * When {nr} is zero, the width of the current window is
   * returned.  When window {nr} doesn't exist, -1 is returned.
   * An existing window always has a width of zero or more.
   * Examples: >
   * cho "The current window has " . winwidth(0) . " columns."
   * f winwidth(0) <= 50
   *  50 wincmd |
   * ndif
   *  For getting the terminal or screen size, see the 'columns'
   * option.
   */
  winwidth: (nr: any) => any;
  /**
   * The result is a dictionary of byte/chars/word statistics for
   * the current buffer.  This is the same info as provided by
   * |g_CTRL-G|
   * The return value includes:
   *   bytes    Number of bytes in the buffer
   *   chars    Number of chars in the buffer
   *   words    Number of words in the buffer
   *   cursor_bytes    Number of bytes before cursor position
   *       (not in Visual mode)
   *   cursor_chars    Number of chars before cursor position
   *       (not in Visual mode)
   *   cursor_words    Number of words before cursor position
   *       (not in Visual mode)
   *   visual_bytes    Number of bytes visually selected
   *       (only in Visual mode)
   *   visual_chars    Number of chars visually selected
   *       (only in Visual mode)
   *   visual_words    Number of words visually selected
   *       (only in Visual mode)
   */
  wordcount: () => any;
  /**
   * Write |List| {list} to file {fname}.  Each list item is
   * separated with a NL.  Each list item must be a String or
   * Number.
   * When {flags} contains "b" then binary mode is used: There will
   * not be a NL after the last list item.  An empty item at the
   * end does cause the last line in the file to end in a NL.
   *
   * When {flags} contains "a" then append mode is used, lines are
   * appended to the file: >
   *   :call writefile(["foo"], "event.log", "a")
   *   :call writefile(["bar"], "event.log", "a")
   *
   * When {flags} contains "S" fsync() call is not used, with "s"
   * it is used, 'fsync' option applies by default. No fsync()
   * means that writefile() will finish faster, but writes may be
   * left in OS buffers and not yet written to disk. Such changes
   * will disappear if system crashes before OS does writing.
   *
   * All NL characters are replaced with a NUL character.
   * Inserting CR characters needs to be done before passing {list}
   * to writefile().
   * An existing file is overwritten, if possible.
   * When the write fails -1 is returned, otherwise 0.  There is an
   * error message if the file can't be created or when writing
   * fails.
   * Also see |readfile()|.
   * To copy a file byte for byte: >
   *   :let fl = readfile("foo", "b")
   *   :call writefile(fl, "foocopy", "b")
   */
  writefile: (list: any, fname: any, flags?: any) => any;
  /**
   * Bitwise XOR on the two arguments.  The arguments are converted
   * to a number.  A List, Dict or Float argument causes an error.
   * Example: >
   *   :let bits = xor(bits, 0x80)
   *
   */
  xor: (expr1: any, expr2: any) => any;
}
