interface fn {
  /** 
      * Return the absolute value of {expr}.  When {expr} evaluates to
		a |Float| abs() returns a |Float|.  When {expr} can be
		converted to a |Number| abs() returns a |Number|.  Otherwise
		abs() gives an error message and returns -1.
		Examples: >
			echo abs(1.456)
<			1.456  >
			echo abs(-5.456)
<			5.456  >
			echo abs(-4)
<			4
      */
  abs: (any) => any;
  /** 
      * Return the arc cosine of {expr} measured in radians, as a
		|Float| in the range of [0, pi].
		{expr} must evaluate to a |Float| or a |Number| in the range
		[-1, 1].
		Examples: >
			:echo acos(0)
<			1.570796 >
			:echo acos(-0.5)
<			2.094395
      */
  acos: (any) => any;
  /** 
      * Append the item {expr} to |List| {list}.  Returns the
		resulting |List|.  Examples: >
			:let alist = add([1, 2, 3], item)
			:call add(mylist, "woodstock")
<		Note that when {expr} is a |List| it is appended as a single
		item.  Use |extend()| to concatenate |Lists|.
		Use |insert()| to add an item at another position.
      */
  add: (any) => any;
  /** 
      * Bitwise AND on the two arguments.  The arguments are converted
		to a number.  A List, Dict or Float argument causes an error.
		Example: >
			:let flag = and(bits, 0x80)
      */
  and: (any) => any;
  /**
   * Returns Dictionary of |api-metadata|.
   */
  api_info: (any) => any;
  /** 
      * When {text} is a |List|: Append each item of the |List| as a
		text line below line {lnum} in the current buffer.
		Otherwise append {text} as one text line below line {lnum} in
		the current buffer.
		{lnum} can be zero to insert a line before the first one.
		Returns 1 for failure ({lnum} out of range or out of memory),
		0 for success.  Example: >
			:let failed = append(line('$'), "# THE END")
			:let failed = append(0, ["Chapter 1", "the beginning"])
      */
  append: (any) => any;
  /**
   * Like |append()| but append the text in buffer {expr}.
   */
  appendbufline: (any) => any;
  /** 
      * The result is the number of files in the argument list.  See
		|arglist|.
		If {winid} is not supplied, the argument list of the current
		window is used.
		If {winid} is -1, the global argument list is used.
		Otherwise {winid} specifies the window of which the argument
		list is used: either the window number or the window ID.
		Returns -1 if the {winid} argument is invalid.
      */
  argc: (any) => any;
  /** 
      * The result is the current index in the argument list.  0 is
		the first file.  argc() - 1 is the last one.  See |arglist|.
      */
  argidx: (any) => any;
  /** 
      * Return the argument list ID.  This is a number which
		identifies the argument list being used.  Zero is used for the
		global argument list.  See |arglist|.
		Returns -1 if the arguments are invalid.
      */
  arglistid: (any) => any;
  /** 
      * The result is the {nr}th file in the argument list.  See
		|arglist|.  "argv(0)" is the first one.  Example: >
	:let i = 0
	:while i < argc()
	:  let f = escape(fnameescape(argv(i)), '.')
	:  exe 'amenu Arg.' . f . ' :e ' . f . '<CR>'
	:  let i = i + 1
	:endwhile
<		Without the {nr} argument, or when {nr} is -1, a |List| with
		the whole |arglist| is returned.
      */
  argv: (any) => any;
  /** 
      * Run {cmd} and add an error message to |v:errors| if it does
		NOT produce a beep or visual bell.
		Also see |assert_fails()| and |assert-return|.
      */
  assert_beeps: (any) => any;
  /** 
      * When {expected} and {actual} are not equal an error message is
		added to |v:errors| and 1 is returned.  Otherwise zero is
		returned |assert-return|.
		There is no automatic conversion, the String "4" is different
		from the Number 4.  And the number 4 is different from the
		Float 4.0.  The value of 'ignorecase' is not used here, case
		always matters.
		When {msg} is omitted an error in the form "Expected
		{expected} but got {actual}" is produced.
		Example: >
	assert_equal('foo', 'bar')
<		Will result in a string to be added to |v:errors|:
	test.vim line 12: Expected 'foo' but got 'bar' ~
      */
  assert_equal: (any) => any;
  /** 
      * When the files {fname-one} and {fname-two} do not contain
		exactly the same text an error message is added to |v:errors|.
		Also see |assert-return|.
		When {fname-one} or {fname-two} does not exist the error will
		mention that.
      */
  assert_equalfile: (any) => any;
  /** 
      * When v:exception does not contain the string {error} an error
		message is added to |v:errors|.  Also see |assert-return|.
		This can be used to assert that a command throws an exception.
		Using the error number, followed by a colon, avoids problems
		with translations: >
			try
			  commandthatfails
			  call assert_false(1, 'command should have failed')
			catch
			  call assert_exception('E492:')
			endtry
      */
  assert_exception: (any) => any;
  /** 
      * Run {cmd} and add an error message to |v:errors| if it does
		NOT produce an error.  Also see |assert-return|.
		When {error} is given it must match in |v:errmsg|.
		Note that beeping is not considered an error, and some failing
		commands only beep.  Use |assert_beeps()| for those.
      */
  assert_fails: (any) => any;
  /** 
      * When {actual} is not false an error message is added to
		|v:errors|, like with |assert_equal()|.
		Also see |assert-return|.
		A value is false when it is zero or |v:false|. When "{actual}"
		is not a number or |v:false| the assert fails.
		When {msg} is omitted an error in the form
		"Expected False but got {actual}" is produced.
      */
  assert_false: (any) => any;
  /** 
      * This asserts number and |Float| values.  When {actual}  is lower
		than {lower} or higher than {upper} an error message is added
		to |v:errors|.  Also see |assert-return|.
		When {msg} is omitted an error in the form
		"Expected range {lower} - {upper}, but got {actual}" is
		produced.
      */
  assert_inrange: (any) => any;
  /** 
      * When {pattern} does not match {actual} an error message is
		added to |v:errors|.  Also see |assert-return|.
      */
  assert_match: (any) => any;
  /** 
      * The opposite of `assert_equal()`: add an error message to
		|v:errors| when {expected} and {actual} are equal.
		Also see |assert-return|.
      */
  assert_notequal: (any) => any;
  /** 
      * The opposite of `assert_match()`: add an error message to
		|v:errors| when {pattern} matches {actual}.
		Also see |assert-return|.
      */
  assert_notmatch: (any) => any;
  /** 
      * Report a test failure directly, using {msg}.
		Always returns one.
      */
  assert_report: (any) => any;
  /** 
      * When {actual} is not true an error message is added to
		|v:errors|, like with |assert_equal()|.
		Also see |assert-return|.
		A value is |TRUE| when it is a non-zero number or |v:true|.
		When {actual} is not a number or |v:true| the assert fails.
		When {msg} is omitted an error in the form "Expected True but
		got {actual}" is produced.
      */
  assert_true: (any) => any;
  /** 
      * Return the arc sine of {expr} measured in radians, as a |Float|
		in the range of [-pi/2, pi/2].
		{expr} must evaluate to a |Float| or a |Number| in the range
		[-1, 1].
		Examples: >
			:echo asin(0.8)
<			0.927295 >
			:echo asin(-0.5)
<			-0.523599
      */
  asin: (any) => any;
  /** 
      * Return the principal value of the arc tangent of {expr}, in
		the range [-pi/2, +pi/2] radians, as a |Float|.
		{expr} must evaluate to a |Float| or a |Number|.
		Examples: >
			:echo atan(100)
<			1.560797 >
			:echo atan(-4.01)
<			-1.326405
      */
  atan: (any) => any;
  /** 
      * Return the arc tangent of {expr1} / {expr2}, measured in
		radians, as a |Float| in the range [-pi, pi].
		{expr1} and {expr2} must evaluate to a |Float| or a |Number|.
		Examples: >
			:echo atan2(-1, 1)
<			-0.785398 >
			:echo atan2(1, -1)
<			2.356194
      */
  atan2: (any) => any;
  /** 
      * Put up a file requester.  This only works when "has("browse")"
		returns |TRUE| (only in some GUI versions).
		The input fields are:
		    {save}	when |TRUE|, select file to write
		    {title}	title for the requester
		    {initdir}	directory to start browsing in
		    {default}	default file name
		When the "Cancel" button is hit, something went wrong, or
		browsing is not possible, an empty string is returned.
      */
  browse: (any) => any;
  /** 
      * Put up a directory requester.  This only works when
		"has("browse")" returns |TRUE| (only in some GUI versions).
		On systems where a directory browser is not supported a file
		browser is used.  In that case: select a file in the directory
		to be used.
		The input fields are:
		    {title}	title for the requester
		    {initdir}	directory to start browsing in
		When the "Cancel" button is hit, something went wrong, or
		browsing is not possible, an empty string is returned.
      */
  browsedir: (any) => any;
  /** 
      * Add a buffer to the buffer list with {name}.
		If a buffer for file {name} already exists, return that buffer
		number.  Otherwise return the buffer number of the newly
		created buffer.  When {name} is an empty string then a new
		buffer is always created.
		The buffer will not have' 'buflisted' set.
      */
  bufadd: (any) => any;
  /** 
      * The result is a Number, which is |TRUE| if a buffer called
		{expr} exists.
		If the {expr} argument is a number, buffer numbers are used.
		Number zero is the alternate buffer for the current window.
      */
  bufexists: (any) => any;
  /** 
      * The result is a Number, which is |TRUE| if a buffer called
		{expr} exists and is listed (has the 'buflisted' option set).
		The {expr} argument is used like with |bufexists()|.
      */
  buflisted: (any) => any;
  /** 
      * Ensure the buffer {expr} is loaded.  When the buffer name
		refers to an existing file then the file is read.  Otherwise
		the buffer will be empty.  If the buffer was already loaded
		then there is no change.
		If there is an existing swap file for the file of the buffer,
		there will be no dialog, the buffer will be loaded anyway.
		The {expr} argument is used like with |bufexists()|.
      */
  bufload: (any) => any;
  /** 
      * The result is a Number, which is |TRUE| if a buffer called
		{expr} exists and is loaded (shown in a window or hidden).
		The {expr} argument is used like with |bufexists()|.
      */
  bufloaded: (any) => any;
  /** 
      * The result is the name of a buffer, as it is displayed by the
		":ls" command.
+		If {expr} is omitted the current buffer is used.
		If {expr} is a Number, that buffer number's name is given.
		Number zero is the alternate buffer for the current window.
		If {expr} is a String, it is used as a |file-pattern| to match
		with the buffer names.  This is always done like 'magic' is
		set and 'cpoptions' is empty.  When there is more than one
		match an empty string is returned.
		"" or "%" can be used for the current buffer, "#" for the
		alternate buffer.
		A full match is preferred, otherwise a match at the start, end
		or middle of the buffer name is accepted.  If you only want a
		full match then put "^" at the start and "$" at the end of the
		pattern.
		Listed buffers are found first.  If there is a single match
		with a listed buffer, that one is returned.  Next unlisted
		buffers are searched for.
		If the {expr} is a String, but you want to use it as a buffer
		number, force it to be a Number by adding zero to it: >
			:echo bufname("3" + 0)
<		If the buffer doesn't exist, or doesn't have a name, an empty
		string is returned. >
	bufname("#")		alternate buffer name
	bufname(3)		name of buffer 3
	bufname("%")		name of current buffer
	bufname("file2")	name of buffer where "file2" matches.
      */
  bufname: (any) => any;
  /** 
      * The result is the number of a buffer, as it is displayed by
		the ":ls" command.  For the use of {expr}, see |bufname()|
		above.
		If the buffer doesn't exist, -1 is returned.  Or, if the
		{create} argument is present and not zero, a new, unlisted,
		buffer is created and its number is returned.
		bufnr("$") is the last buffer: >
			:let last_buffer = bufnr("$")
<		The result is a Number, which is the highest buffer number
		of existing buffers.  Note that not all buffers with a smaller
		number necessarily exist, because ":bwipeout" may have removed
		them.  Use bufexists() to test for the existence of a buffer.
      */
  bufnr: (any) => any;
  /** 
      * The result is a Number, which is the |window-ID| of the first
		window associated with buffer {expr}.  For the use of {expr},
		see |bufname()| above.  If buffer {expr} doesn't exist or
		there is no such window, -1 is returned.  Example: >
      */
  bufwinid: (any) => any;
  /** 
      * The result is a Number, which is the number of the first
		window associated with buffer {expr}.  For the use of {expr},
		see |bufname()| above.  If buffer {expr} doesn't exist or
		there is no such window, -1 is returned.  Example: >
      */
  bufwinnr: (any) => any;
  /** 
      * Return the line number that contains the character at byte
		count {byte} in the current buffer.  This includes the
		end-of-line character, depending on the 'fileformat' option
		for the current buffer.  The first character has byte count
		one.
		Also see |line2byte()|, |go| and |:goto|.
      */
  byte2line: (any) => any;
  /** 
      * Return byte index of the {nr}'th character in the string
		{expr}.  Use zero for the first character, it then returns
		zero.
		This function is only useful when there are multibyte
		characters, otherwise the returned value is equal to {nr}.
		Composing characters are not counted separately, their byte
		length is added to the preceding base character.  See
		|byteidxcomp()| below for counting composing characters
		separately.
		Example : >
			echo matchstr(str, ".", byteidx(str, 3))
<		will display the fourth character.  Another way to do the
		same: >
			let s = strpart(str, byteidx(str, 3))
			echo strpart(s, 0, byteidx(s, 1))
<		Also see |strgetchar()| and |strcharpart()|.
      */
  byteidx: (any) => any;
  /** 
      * Like byteidx(), except that a composing character is counted
		as a separate character.  Example: >
			let s = 'e' . nr2char(0x301)
			echo byteidx(s, 1)
			echo byteidxcomp(s, 1)
			echo byteidxcomp(s, 2)
<		The first and third echo result in 3 ('e' plus composing
		character is 3 bytes), the second echo results in 1 ('e' is
		one byte).
      */
  byteidxcomp: (any) => any;
  /** 
      * Return the smallest integral value greater than or equal to
		{expr} as a |Float| (round up).
		{expr} must evaluate to a |Float| or a |Number|.
		Examples: >
			echo ceil(1.456)
<			2.0  >
			echo ceil(-5.456)
<			-5.0  >
			echo ceil(4.0)
<			4.0
      */
  ceil: (any) => any;
  /** 
      * Return the number of the most recent change.  This is the same
		number as what is displayed with |:undolist| and can be used
		with the |:undo| command.
		When a change was made it is the number of that change.  After
		redo it is the number of the redone change.  After undo it is
		one less than the number of the undone change.
      */
  changenr: (any) => any;
  /** 
      * Close a channel or a specific stream associated with it.
		For a job, {stream} can be one of "stdin", "stdout",
		"stderr" or "rpc" (closes stdin/stdout for a job started
		with `"rpc":v:true`) If {stream} is omitted, all streams
		are closed. If the channel is a pty, this will then close the
		pty master, sending SIGHUP to the job process.
		For a socket, there is only one stream, and {stream} should be
		ommited.
      */
  chanclose: (any) => any;
  /** 
      * Send data to channel {id}. For a job, it writes it to the
		stdin of the process. For the stdio channel |channel-stdio|,
		it writes to Nvim's stdout.  Returns the number of bytes
		written if the write succeeded, 0 otherwise.
		See |channel-bytes| for more information.
      */
  chansend: (any) => any;
  /** 
      * Return number value of the first char in {expr}.  Examples: >
			char2nr(" ")		returns 32
			char2nr("ABC")		returns 65
			char2nr("á")		returns 225
			char2nr("á"[0])		returns 195
			char2nr("\<M-x>")	returns 128
<		Non-ASCII characters are always treated as UTF-8 characters.
		{utf8} is ignored, it exists only for backwards-compatibility.
		A combining character is a separate character.
		|nr2char()| does the opposite.
      */
  char2nr: (any) => any;
  /** 
      * Return the character index of the byte at {idx} in {string}.
		The index of the first character is zero.
		If there are no multibyte characters the returned value is
		equal to {idx}.
		When {countcc} is omitted or zero, then composing characters
		are not counted separately, their byte length is added to the
		preceding base character.
		When {countcc} is set to 1, then composing characters are
		counted as separate characters.
		Returns -1 if the arguments are invalid or if {idx} is greater
		than the index of the last byte in {string}.  An error is
		given if the first argument is not a string, the second
		argument is not a number or when the third argument is present
		and is not zero or one.
		See |byteidx()| and |byteidxcomp()| for getting the byte index
		from the character index.
		Examples: >
			echo charidx('áb́ć', 3)		returns 1
			echo charidx('áb́ć', 6, 1)	returns 4
			echo charidx('áb́ć', 16)		returns -1
      */
  charidx: (any) => any;
  /** 
      * Get the amount of indent for line {lnum} according the C
		indenting rules, as with 'cindent'.
		The indent is counted in spaces, the value of 'tabstop' is
		relevant.  {lnum} is used just like in |getline()|.
		When {lnum} is invalid -1 is returned.
		See |C-indenting|.
      */
  cindent: (any) => any;
  /** 
      * Clears all matches previously defined for the current window
 		by |matchadd()| and the |:match| commands.
		If {win} is specified, use the window with this number or
		window ID instead of the current window.
      */
  clearmatches: (any) => any;
  /** 
      * The result is a Number, which is the byte index of the column
		position given with {expr}.  The accepted positions are:
		    .	    the cursor position
		    $	    the end of the cursor line (the result is the
			    number of bytes in the cursor line plus one)
		    'x	    position of mark x (if the mark is not set, 0 is
			    returned)
		    v       In Visual mode: the start of the Visual area (the
			    cursor is the end).  When not in Visual mode
			    returns the cursor position.  Differs from |'<| in
			    that it's updated right away.
		Additionally {expr} can be [lnum, col]: a |List| with the line
		and column number. Most useful when the column is "$", to get
		the last column of a specific line.  When "lnum" or "col" is
		out of range then col() returns zero.
		To get the line number use |line()|.  To get both use
		|getpos()|.
		For the screen column position use |virtcol()|.
		Note that only marks in the current file can be used.
		Examples: >
			col(".")		column of cursor
			col("$")		length of cursor line plus one
			col("'t")		column of mark t
			col("'" . markname)	column of mark markname
<		The first column is 1.  0 is returned for an error.
		For an uppercase mark the column may actually be in another
		buffer.
		For the cursor position, when 'virtualedit' is active, the
		column is one higher if the cursor is after the end of the
		line.  This can be used to obtain the column in Insert mode: >
			:imap <F2> <C-O>:let save_ve = &ve<CR>
				\<C-O>:set ve=all<CR>
				\<C-O>:echo col(".") . "\n" <Bar>
				\let &ve = save_ve<CR>
<
      */
  col: (any) => any;
  /** 
      * Add {expr} to the list of matches.  Only to be used by the
		function specified with the 'completefunc' option.
		Returns 0 for failure (empty string or out of memory),
		1 when the match was added, 2 when the match was already in
		the list.
		See |complete-functions| for an explanation of {expr}.  It is
		the same as one item in the list that 'omnifunc' would return.
      */
  complete_add: (any) => any;
  /** 
      * Check for a key typed while looking for completion matches.
		This is to be used when looking for matches takes some time.
		Returns |TRUE| when searching for matches is to be aborted,
		zero otherwise.
		Only to be used by the function specified with the
		'completefunc' option.
      */
  complete_check: (any) => any;
  /** 
      * Returns a Dictionary with information about Insert mode
		completion.  See |ins-completion|.
		The items are:
		   mode		Current completion mode name string.
				See |complete_info_mode| for the values.
		   pum_visible	|TRUE| if popup menu is visible.
				See |pumvisible()|.
		   items	List of completion matches.  Each item is a
				dictionary containing the entries "word",
				"abbr", "menu", "kind", "info" and "user_data".
				See |complete-items|.
		   selected	Selected item index.  First index is zero.
				Index is -1 if no item is selected (showing
				typed text only)
		   inserted	Inserted string. [NOT IMPLEMENT YET]
      */
  complete_info: (any) => any;
  /** 
      * mode values are:
		   ""		     Not in completion mode
		   "keyword"	     Keyword completion |i_CTRL-X_CTRL-N|
		   "ctrl_x"	     Just pressed CTRL-X |i_CTRL-X|
		   "whole_line"	     Whole lines |i_CTRL-X_CTRL-L|
		   "files"	     File names |i_CTRL-X_CTRL-F|
		   "tags"	     Tags |i_CTRL-X_CTRL-]|
		   "path_defines"    Definition completion |i_CTRL-X_CTRL-D|
		   "path_patterns"   Include completion |i_CTRL-X_CTRL-I|
		   "dictionary"	     Dictionary |i_CTRL-X_CTRL-K|
		   "thesaurus"	     Thesaurus |i_CTRL-X_CTRL-T|
		   "cmdline"	     Vim Command line |i_CTRL-X_CTRL-V|
		   "function"	     User defined completion |i_CTRL-X_CTRL-U|
		   "omni"	     Omni completion |i_CTRL-X_CTRL-O|
		   "spell"	     Spelling suggestions |i_CTRL-X_s|
		   "eval"            |complete()| completion
		   "unknown"	     Other internal modes
      */
  complete_info_mode: any;
  /** 
      * Confirm() offers the user a dialog, from which a choice can be
		made.  It returns the number of the choice.  For the first
		choice this is 1.
      */
  confirm: (any) => any;
  /** 
      * Make a copy of {expr}.  For Numbers and Strings this isn't
		different from using {expr} directly.
		When {expr} is a |List| a shallow copy is created.  This means
		that the original |List| can be changed without changing the
		copy, and vice versa.  But the items are identical, thus
		changing an item changes the contents of both |Lists|.
		A |Dictionary| is copied in a similar way as a |List|.
		Also see |deepcopy()|.
      */
  copy: (any) => any;
  /** 
      * Return the cosine of {expr}, measured in radians, as a |Float|.
		{expr} must evaluate to a |Float| or a |Number|.
		Examples: >
			:echo cos(100)
<			0.862319 >
			:echo cos(-4.01)
<			-0.646043
      */
  cos: (any) => any;
  /** 
      * Return the hyperbolic cosine of {expr} as a |Float| in the range
		[1, inf].
		{expr} must evaluate to a |Float| or a |Number|.
		Examples: >
			:echo cosh(0.5)
<			1.127626 >
			:echo cosh(-0.5)
<			-1.127626
      */
  cosh: (any) => any;
  /** 
      * Return the number of times an item with value {expr} appears
		in |String|, |List| or |Dictionary| {comp}.
      */
  count: (any) => any;
  /** 
      * Checks for the existence of a |cscope| connection.  If no
		parameters are specified, then the function returns:
			0, if cscope was not available (not compiled in), or
			   if there are no cscope connections;
			1, if there is at least one cscope connection.
      */
  cscope_connection: (any) => any;
}
