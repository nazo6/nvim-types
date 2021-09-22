/** @noSelf **/
interface lsp {
  /**
   * Implements the `textDocument/did…` notifications required to
   * track a buffer for any language server.
   *
   * Without calling this, the server won't be notified of changes
   * to a buffer.
   *
   * @param bufnr - (number) Buffer handle, or 0 for current
   * @param client_id - (number) Client id
   */
  buf_attach_client: (bufnr?: any, client_id?: any) => any;
  /**
   * Gets a map of client_id:client pairs for the given buffer,
   * where each value is a |vim.lsp.client| object.
   *
   * @param bufnr - (optional, number): Buffer handle, or 0 for
   *   current
   */
  buf_get_clients: (bufnr?: any) => any;
  /**
   * Checks if a buffer is attached for a particular client.
   *
   * @param bufnr - (number) Buffer handle, or 0 for current
   * @param client_id - (number) the client id
   */
  buf_is_attached: (bufnr?: any, client_id?: any) => any;
  /**
   * Send a notification to a server
   *
   * @param bufnr - [number] (optional): The number of the buffer
   * @param method - [string]: Name of the request method
   * @param params - [string]: Arguments to send to the server
   *
   * @returns  true if any client returns true; false otherwise
   */
  buf_notify: (bufnr?: any, method?: any, params?: any) => any;
  /**
   * Sends an async request for all active clients attached to the
   * buffer.
   *
   * @param bufnr - (number) Buffer handle, or 0 for current.
   * @param method - (string) LSP method name
   * @param params - (optional, table) Parameters to send to the
   *   server
   * @param handler - (optional, function) See |lsp-handler|
   *
   * @returns  2-tuple:
   *  • Map of client-id:request-id pairs for all successful
   *  requests.
   *  • Function which can be used to cancel all the requests.
   *  You could instead iterate all clients and call their
   *  `cancel_request()` methods.
   */
  buf_request: (bufnr?: any, method?: any, params?: any, handler?: any) => any;
  /**
   * Sends an async request for all active clients attached to the
   * buffer. Executes the callback on the combined result.
   * Parameters are the same as |vim.lsp.buf_request()| but the
   * return result and callback are different.
   *
   * @param bufnr - (number) Buffer handle, or 0 for current.
   * @param method - (string) LSP method name
   * @param params - (optional, table) Parameters to send to the
   *   server
   * @param callback - (function) The callback to call when all
   *   requests are finished.
   *
   * @returns  (function) A function that will cancel all requests which
   *  is the same as the one returned from `buf_request` .
   */
  buf_request_all: (
    bufnr?: any,
    method?: any,
    params?: any,
    callback?: any
  ) => any;
  /**
   * Sends a request to all server and waits for the response of
   * all of them.
   *
   * Calls |vim.lsp.buf_request_all()| but blocks Nvim while
   * awaiting the result. Parameters are the same as
   * |vim.lsp.buf_request()| but the return result is different.
   * Wait maximum of {timeout_ms} (default 1000) ms.
   *
   * @param bufnr - (number) Buffer handle, or 0 for current.
   * @param method - (string) LSP method name
   * @param params - (optional, table) Parameters to send to the
   *   server
   * @param timeout_ms - (optional, number, default=1000) Maximum
   *   time in milliseconds to wait for a result.
   *
   * @returns  Map of client_id:request_result. On timeout, cancel or
   *  error, returns `(nil, err)` where `err` is a string
   *  describing the failure reason.
   */
  buf_request_sync: (
    bufnr?: any,
    method?: any,
    params?: any,
    timeout_ms?: any
  ) => any;
  /**
   * LSP client object. You can get an active client object via
   * |vim.lsp.get_client_by_id()| or
   * |vim.lsp.get_active_clients()|.
   *
   * • Methods:
   *   • request(method, params, [handler], bufnr) Sends a request
   *     to the server. This is a thin wrapper around
   *     {client.rpc.request} with some additional checking. If
   *     {handler} is not specified, If one is not found there,
   *     then an error will occur. Returns: {status},
   *     {[client_id]}. {status} is a boolean indicating if the
   *     notification was successful. If it is `false` , then it
   *     will always be `false` (the client has shutdown). If
   *     {status} is `true` , the function returns {request_id} as
   *     the second result. You can use this with
   *     `client.cancel_request(request_id)` to cancel the request.
   *   • request_sync(method, params, timeout_ms, bufnr) Sends a
   *     request to the server and synchronously waits for the
   *     response. This is a wrapper around {client.request}
   *     Returns: { err=err, result=result }, a dictionary, where
   *     `err` and `result` come from the |lsp-handler|. On
   *     timeout, cancel or error, returns `(nil, err)` where `err`
   *     is a string describing the failure reason. If the request
   *     was unsuccessful returns `nil` .
   *   • notify(method, params) Sends a notification to an LSP
   *     server. Returns: a boolean to indicate if the notification
   *     was successful. If it is false, then it will always be
   *     false (the client has shutdown).
   *   • cancel_request(id) Cancels a request with a given request
   *     id. Returns: same as `notify()` .
   *   • stop([force]) Stops a client, optionally with force. By
   *     default, it will just ask the server to shutdown without
   *     force. If you request to stop a client which has
   *     previously been requested to shutdown, it will
   *     automatically escalate and force shutdown.
   *   • is_stopped() Checks whether a client is stopped. Returns:
   *     true if the client is fully stopped.
   *   • on_attach(client, bufnr) Runs the on_attach function from
   *     the client's config if it was defined. Useful for
   *     buffer-local setup.
   *
   * • Members
   *   • {id} (number): The id allocated to the client.
   *   • {name} (string): If a name is specified on creation, that
   *     will be used. Otherwise it is just the client id. This is
   *     used for logs and messages.
   *   • {rpc} (table): RPC client object, for low level
   *     interaction with the client. See |vim.lsp.rpc.start()|.
   *   • {offset_encoding} (string): The encoding used for
   *     communicating with the server. You can modify this in the
   *     `config` 's `on_init` method before text is sent to the
   *     server.
   *   • {handlers} (table): The handlers used by the client as
   *     described in |lsp-handler|.
   *   • {config} (table): copy of the table that was passed by the
   *     user to |vim.lsp.start_client()|.
   *   • {server_capabilities} (table): Response from the server
   *     sent on `initialize` describing the server's capabilities.
   *   • {resolved_capabilities} (table): Normalized table of
   *     capabilities that we have detected based on the initialize
   *     response from the server in `server_capabilities` .
   */
  client: () => any;
  /**
   * Checks whether a client is stopped.
   *
   * @param client_id - (Number)
   *
   * @returns  true if client is stopped, false otherwise.
   */
  client_is_stopped: (client_id?: any) => any;
  /**
   * TODO: Documentation
   */
  flush: (client?: any) => any;
  /**
   * Gets all active clients.
   *
   * @returns  Table of |vim.lsp.client| objects
   */
  get_active_clients: () => any;
  /**
   * @param client_id - client id
   *
   * @returns  list of buffer ids
   */
  get_buffers_by_client_id: (client_id?: any) => any;
  /**
   * Gets a client by id, or nil if the id is invalid. The returned
   * client may not yet be fully initialized.
   *
   * @param client_id - client id number
   *
   * @returns  |vim.lsp.client| object, or nil
   */
  get_client_by_id: (client_id?: any) => any;
  /**
   * Gets the path of the logfile used by the LSP client.
   *
   * @returns  (String) Path to logfile.
   */
  get_log_path: () => any;
  /**
   * Implements 'omnifunc' compatible LSP completion.
   *
   * @param findstart - 0 or 1, decides behavior
   * @param base - If findstart=0, text to match against
   *
   * @returns  (number) Decided by`findstart`:
   *  • findstart=0: column where the completion starts, or -2
   *  or -3
   *  • findstart=1: list of matches (actually just calls
   *  |complete()|)
   *
   * See also: ~
   *     |complete-functions|
   *     |complete-items|
   *     |CompleteDone|
   */
  omnifunc: (findstart?: any, base?: any) => any;
  /**
   * TODO: Documentation
   */
  prepare: (
    bufnr?: any,
    firstline?: any,
    new_lastline?: any,
    changedtick?: any
  ) => any;
  /**
   * TODO: Documentation
   */
  reset: (client_id?: any) => any;
  /**
   * TODO: Documentation
   */
  reset_buf: (client?: any, bufnr?: any) => any;
  /**
   * Sets the global log level for LSP logging.
   *
   * Levels by name: "trace", "debug", "info", "warn", "error"
   * Level numbers begin with "trace" at 0
   *
   * Use `lsp.log_levels` for reverse lookup.
   *
   * @param level - [number|string] the case insensitive level name
   *   or number
   *
   * See also: ~
   *     |vim.lsp.log_levels|
   */
  set_log_level: (level?: any) => any;
  /**
   * Starts and initializes a client with the given configuration.
   *
   * Parameters `cmd` and `root_dir` are required.
   *
   * The following parameters describe fields in the {config}
   * table.
   *
   * @param root_dir - (string) Directory where the LSP
   *   server will base its rootUri on
   *   initialization.
   * @param cmd - (required, string or list treated
   *   like |jobstart()|) Base command that
   *   initiates the LSP client.
   * @param cmd_cwd - (string, default=|getcwd()|)
   *   Directory to launch the `cmd`
   *   process. Not related to `root_dir` .
   * @param cmd_env - (table) Environment flags to pass to
   *   the LSP on spawn. Can be specified
   *   using keys like a map or as a list
   *   with `k=v` pairs or both. Non-string values are
   *   coerced to string. Example: >
   *
   *  { "PRODUCTION=true"; "TEST=123"; PORT = 8080; HOST = "0.0.0.0"; }
   *
   *     {capabilities}       Map overriding the default
   *                          capabilities defined by
   *                          |vim.lsp.protocol.make_client_capabilities()|,
   *                          passed to the language server on
   *                          initialization. Hint: use
   *                          make_client_capabilities() and modify
   *                          its result.
   *                          • Note: To send an empty dictionary
   *                            use
   *                            `{[vim.type_idx]=vim.types.dictionary}`
   *                            , else it will be encoded as an
   *                            array.
   *     {handlers}           Map of language server method names
   *                          to |lsp-handler|
   *     {settings}           Map with language server specific
   *                          settings. These are returned to the
   *                          language server if requested via
   *                          `workspace/configuration` . Keys are
   *                          case-sensitive.
   *     {init_options}       Values to pass in the initialization
   *                          request as `initializationOptions` .
   *                          See `initialize` in the LSP spec.
   *     {name}               (string, default=client-id) Name in
   *                          log messages.
   *     {workspace_folders}  (table) List of workspace folders
   *                          passed to the language server.
   *                          Defaults to root_dir if not set. See
   *                          `workspaceFolders` in the LSP spec
   *     {get_language_id}    function(bufnr, filetype) -> language
   *                          ID as string. Defaults to the
   *                          filetype.
   *     {offset_encoding}    (default="utf-16") One of "utf-8",
   *                          "utf-16", or "utf-32" which is the
   *                          encoding that the LSP server expects.
   *                          Client does not verify this is
   *                          correct.
   *     {on_error}           Callback with parameters (code, ...),
   *                          invoked when the client operation
   *                          throws an error. `code` is a number
   *                          describing the error. Other arguments
   *                          may be passed depending on the error
   *                          kind. See |vim.lsp.client_errors| for
   *                          possible errors. Use
   *                          `vim.lsp.client_errors[code]` to get
   *                          human-friendly name.
   *     {before_init}        Callback with parameters
   *                          (initialize_params, config) invoked
   *                          before the LSP "initialize" phase,
   *                          where `params` contains the
   *                          parameters being sent to the server
   *                          and `config` is the config that was
   *                          passed to |vim.lsp.start_client()|.
   *                          You can use this to modify parameters
   *                          before they are sent.
   *     {on_init}            Callback (client, initialize_result)
   *                          invoked after LSP "initialize", where
   *                          `result` is a table of `capabilities`
   *                          and anything else the server may
   *                          send. For example, clangd sends
   *                          `initialize_result.offsetEncoding` if
   *                          `capabilities.offsetEncoding` was
   *                          sent to it. You can only modify the
   *                          `client.offset_encoding` here before
   *                          any notifications are sent. Most
   *                          language servers expect to be sent
   *                          client specified settings after
   *                          initialization. Neovim does not make
   *                          this assumption. A
   *                          `workspace/didChangeConfiguration`
   *                          notification should be sent to the
   *                          server during on_init.
   *     {on_exit}            Callback (code, signal, client_id)
   *                          invoked on client exit.
   *                          • code: exit code of the process
   *                          • signal: number describing the
   *                            signal used to terminate (if any)
   *                          • client_id: client handle
   *     {on_attach}          Callback (client, bufnr) invoked when
   *                          client attaches to a buffer.
   *     {trace}              "off" | "messages" | "verbose" | nil
   *                          passed directly to the language
   *                          server in the initialize request.
   *                          Invalid/empty values will default to
   *                          "off"
   *     {flags}              A table with flags for the client.
   *                          The current (experimental) flags are:
   *                          • allow_incremental_sync (bool,
   *                            default true): Allow using
   *                            incremental sync for buffer edits
   *                          • debounce_text_changes (number,
   *                            default nil): Debounce didChange
   *                            notifications to the server by the
   *                            given number in milliseconds. No
   *                            debounce occurs if nil
   *
   * @returns  Client id. |vim.lsp.get_client_by_id()| Note: client may
   *  not be fully initialized. Use `on_init` to do any actions
   *  once the client has been initialized.
   */
  start_client: (config?: any) => any;
  /**
   * Stops a client(s).
   *
   * You can also use the `stop()` function on a |vim.lsp.client|
   * object. To stop all clients:
   *
   *
   * _client(vim.lsp.get_active_clients())
   *
   *
   * By default asks the server to shutdown, unless stop was
   * requested already for this client, then force-shutdown is
   * attempted.
   *
   * @param client_id - client id or |vim.lsp.client| object, or list
   *   thereof
   * @param force - boolean (optional) shutdown forcefully
   */
  stop_client: (client_id?: any, force?: any) => any;
  /**
   * Function to manage overriding defaults for LSP handlers.
   *
   * @param handler - (function) See |lsp-handler|
   * @param override_config - (table) Table containing the keys to
   * @param handler -
   */
  with: (handler?: any, override_config?: any) => any;
  /** @noSelf **/
  buf: {
    /**
     * Add the folder at path to the workspace folders. If {path} is
     * not provided, the user will be prompted for a path using
     * |input()|.
     */
    add_workspace_folder: (workspace_folder?: any) => any;
    /**
     * Removes document highlights from current buffer.
     */
    clear_references: () => any;
    /**
     * Selects a code action from the input list that is available at
     * the current cursor position.
     *
     * @param context - (table, optional) Valid `CodeActionContext`
     *   object
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_codeAction
     */
    code_action: (context?: any) => any;
    /**
     * Retrieves the completion items at the current cursor position.
     * Can only be called in Insert mode.
     *
     * @param context - (context support not yet implemented)
     *   Additional information about the context in
     *   which a completion was triggered (how it was
     *   triggered, and by which trigger character, if
     *   applicable)
     *
     * See also: ~
     *     |vim.lsp.protocol.constants.CompletionTriggerKind|
     */
    completion: (context?: any) => any;
    /**
     * Jumps to the declaration of the symbol under the cursor.
     * Note:
     *     Many servers do not implement this method. Generally, see
     *     |vim.lsp.buf.definition()| instead.
     */
    declaration: () => any;
    /**
     * Jumps to the definition of the symbol under the cursor.
     */
    definition: () => any;
    /**
     * Send request to the server to resolve document highlights for
     * the current text document position. This request can be
     * triggered by a key mapping or by events such as `CursorHold` ,
     * eg:
     *
     * _command [[autocmd CursorHold  <buffer> lua vim.lsp.buf.document_highlight()]]
     * _command [[autocmd CursorHoldI <buffer> lua vim.lsp.buf.document_highlight()]]
     * _command [[autocmd CursorMoved <buffer> lua vim.lsp.buf.clear_references()]]
     *
     *
     * Note: Usage of |vim.lsp.buf.document_highlight()| requires the
     * following highlight groups to be defined or you won't be able
     * to see the actual highlights. |LspReferenceText|
     * |LspReferenceRead| |LspReferenceWrite|
     */
    document_highlight: () => any;
    /**
     * Lists all symbols in the current buffer in the quickfix
     * window.
     */
    document_symbol: () => any;
    /**
     * Executes an LSP server command.
     *
     * @param command - A valid `ExecuteCommandParams` object
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#workspace_executeCommand
     */
    execute_command: (command?: any) => any;
    /**
     * Formats the current buffer.
     *
     * @param options - (optional, table) Can be used to specify
     *   FormattingOptions. Some unspecified options
     *   will be automatically derived from the current
     *   Neovim options.
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specification#textDocument_formatting
     */
    formatting: (options?: any) => any;
    /**
     * Formats the current buffer by sequentially requesting
     * formatting from attached clients.
     *
     * Useful when multiple clients with formatting capability are
     * attached.
     *
     * Since it's synchronous, can be used for running on save, to
     * make sure buffer is formatted prior to being saved.
     * {timeout_ms} is passed on to the |vim.lsp.client| `request_sync` method. Example: >
     *
     *  vim.api.nvim_command[[autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_seq_sync()]]
     *
     *
     * @param options - (optional, table) `FormattingOptions`
     *   entries
     * @param timeout_ms - (optional, number) Request timeout
     * @param order - (optional, table) List of client names.
     *   Formatting is requested from clients in the
     *   following order: first all clients that are
     *   not in the `order` list, then the remaining
     *   clients in the order as they occur in the
     *   `order` list.
     */
    formatting_seq_sync: (options?: any, timeout_ms?: any, order?: any) => any;
    /**
     * Performs |vim.lsp.buf.formatting()| synchronously.
     *
     * Useful for running on save, to make sure buffer is formatted
     * prior to being saved. {timeout_ms} is passed on to
     * |vim.lsp.buf_request_sync()|. Example:
     *
     *
     * _command[[autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync()]]
     *
     *
     * @param options - Table with valid `FormattingOptions` entries
     * @param timeout_ms - (number) Request timeout
     *
     * See also: ~
     *     |vim.lsp.buf.formatting_seq_sync|
     */
    formatting_sync: (options?: any, timeout_ms?: any) => any;
    /**
     * Displays hover information about the symbol under the cursor
     * in a floating window. Calling the function twice will jump
     * into the floating window.
     */
    hover: () => any;
    /**
     * Lists all the implementations for the symbol under the cursor
     * in the quickfix window.
     */
    implementation: () => any;
    /**
     * Lists all the call sites of the symbol under the cursor in the
     * |quickfix| window. If the symbol can resolve to multiple
     * items, the user can pick one in the |inputlist|.
     */
    incoming_calls: () => any;
    /**
     * List workspace folders.
     */
    list_workspace_folders: () => any;
    /**
     * Lists all the items that are called by the symbol under the
     * cursor in the |quickfix| window. If the symbol can resolve to
     * multiple items, the user can pick one in the |inputlist|.
     */
    outgoing_calls: () => any;
    /**
     * Performs |vim.lsp.buf.code_action()| for a given range.
     *
     * @param context - (table, optional) Valid `CodeActionContext`
     *   object
     * @param start_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the start of the last
     *   visual selection.
     * @param end_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the end of the last
     *   visual selection.
     */
    range_code_action: (context?: any, start_pos?: any, end_pos?: any) => any;
    /**
     * Formats a given range.
     *
     * @param options - Table with valid `FormattingOptions` entries.
     * @param start_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the start of the last
     *   visual selection.
     * @param end_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the end of the last
     *   visual selection.
     */
    range_formatting: (options?: any, start_pos?: any, end_pos?: any) => any;
    /**
     * Lists all the references to the symbol under the cursor in the
     * quickfix window.
     *
     * @param context - (table) Context for the request
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_references
     */
    references: (context?: any) => any;
    /**
     * Remove the folder at path from the workspace folders. If
     * {path} is not provided, the user will be prompted for a path
     * using |input()|.
     */
    remove_workspace_folder: (workspace_folder?: any) => any;
    /**
     * Renames all references to the symbol under the cursor.
     *
     * @param new_name - (string) If not provided, the user will be
     *   prompted for a new name using |input()|.
     */
    rename: (new_name?: any) => any;
    /**
     * Checks whether the language servers attached to the current
     * buffer are ready.
     *
     * @returns  `true` if server responds.
     */
    server_ready: () => any;
    /**
     * Displays signature information about the symbol under the
     * cursor in a floating window.
     */
    signature_help: () => any;
    /**
     * Jumps to the definition of the type of the symbol under the
     * cursor.
     */
    type_definition: () => any;
    /**
     * Lists all symbols in the current workspace in the quickfix
     * window.
     *
     * The list is filtered against {query}; if the argument is
     * omitted from the call, the user is prompted to enter a string
     * on the command line. An empty string means no filtering is
     * done.
     *
     * @param query - (string, optional)
     */
    workspace_symbol: (query?: any) => any;
  };

  /** @noSelf **/
  diagnostic: {
    /**
     * Get the diagnostic namespace associated with an LSP client
     * |vim.diagnostic|.
     *
     * @param client_id - number The id of the LSP client
     */
    get_namespace: (client_id?: any) => any;
    /**
     * |lsp-handler| for the method "textDocument/publishDiagnostics"
     *
     * See |vim.diagnostic.config()| for configuration options.
     * Handler-specific configuration can be set using
     * |vim.lsp.with()|: >
     *
     *  vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
     *    vim.lsp.diagnostic.on_publish_diagnostics, {
     *      -- Enable underline, use default values
     *      underline = true,
     *      -- Enable virtual text, override spacing to 4
     *      virtual_text = {
     *        spacing = 4,
     *      },
     *      -- Use a function to dynamically turn signs off
     *      -- and on, using buffer local variables
     *      signs = function(bufnr, client_id)
     *        return vim.bo[bufnr].show_signs == false
     *      end,
     *      -- Disable a feature
     *      update_in_insert = false,
     *    }
     *  )
     *
     *
     * @param config - table Configuration table (see
     *   |vim.diagnostic.config()|).
     */
    on_publish_diagnostics: (
      arg__?: any,
      result?: any,
      ctx?: any,
      config?: any
    ) => any;
  };

  /** @noSelf **/
  handlers: {
    /**
     * |lsp-handler| for the method "textDocument/hover" >
     *
     *  vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(
     *    vim.lsp.handlers.hover, {
     *      -- Use a sharp border with `FloatBorder` highlights
     *      border = "single"
     *    }
     *  )
     *
     *
     * @param config - table Configuration table.
     *   • border: (default=nil)
     *   • Add borders to the floating window
     *   • See |vim.api.nvim_open_win()|
     */
    hover: (arg__?: any, result?: any, ctx?: any, config?: any) => any;
    /**
     * |lsp-handler| for the method "textDocument/signatureHelp". The
     * active parameter is highlighted with
     * |hl-LspSignatureActiveParameter|. >
     *
     *  vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(
     *    vim.lsp.handlers.signature_help, {
     *      -- Use a sharp border with `FloatBorder` highlights
     *      border = "single"
     *    }
     *  )
     *
     *
     * @param config - table Configuration table.
     *   • border: (default=nil)
     *   • Add borders to the floating window
     *   • See |vim.api.nvim_open_win()|
     */
    signature_help: (arg__?: any, result?: any, ctx?: any, config?: any) => any;
  };

  /** @noSelf **/
  log: {
    /**
     * Returns the log filename.
     *
     * @returns  (string) log filename
     */
    get_filename: () => any;
    /**
     * Sets the current log level.
     *
     * @param level - (string or number) One of `vim.lsp.log.levels`
     */
    set_level: (level?: any) => any;
    /**
     * Checks whether the level is sufficient for logging.
     *
     * @param level - number log level
     *
     * @returns  (bool) true if would log, false if not
     */
    should_log: (level?: any) => any;
  };

  /** @noSelf **/
  protocol: {
    /**
     * Gets a new ClientCapabilities object describing the LSP client
     * capabilities.
     */
    make_client_capabilities: () => any;
    /**
     * `*` to match one or more characters in a path segment `?` to
     * match on one character in a path segment `**` to match any
     * number of path segments, including none `{}` to group
     * conditions (e.g. `**​/‍*.{ts,js}` matches all TypeScript and
     * JavaScript files) `[]` to declare a range of characters to
     * match in a path segment (e.g., `example.[0-9]` to match on
     * `example.0` , `example.1` , …) `[!...]` to negate a range of
     * characters to match in a path segment (e.g., `example.[!0-9]`
     * to match on `example.a` , `example.b` , but not `example.0` )
     *
     * ft=help:norl:
     */
    resolve_capabilities: (server_capabilities?: any) => any;
  };

  /** @noSelf **/
  rpc: {
    /**
     * Constructs an error message from an LSP error object.
     *
     * @param err - (table) The error object
     *
     * @returns  (string) The formatted error message
     */
    format_rpc_error: (err?: any) => any;
    /**
     * Sends a notification to the LSP server.
     *
     * @param method - (string) The invoked LSP method
     * @param params - (table): Parameters for the invoked LSP method
     *
     * @returns  (bool) `true` if notification could be sent, `false` if
     *  not
     */
    notify: (method?: any, params?: any) => any;
    /**
     * Sends a request to the LSP server and runs {callback} upon
     * response.
     *
     * @param method - (string) The invoked LSP method
     * @param params - (table) Parameters for the invoked LSP method
     * @param callback - (function) Callback to invoke
     *
     * @returns  (bool, number) `(true, message_id)` if request could be
     *  sent, `false` if not
     */
    request: (method?: any, params?: any, callback?: any) => any;
    /**
     * Creates an RPC response object/table.
     *
     * @param code - RPC error code defined in
     *   `vim.lsp.protocol.ErrorCodes`
     * @param message - (optional) arbitrary message to send to server
     * @param data - (optional) arbitrary data to send to server
     */
    rpc_response_error: (code?: any, message?: any, data?: any) => any;
    /**
     * Starts an LSP server process and create an LSP RPC client
     * object to interact with it.
     *
     * @param cmd - (string) Command to start the LSP
     *   server.
     * @param cmd_args - (table) List of additional string
     * @param cmd - .
     * @param dispatchers - (table, optional) Dispatchers for
     *   LSP message types. Valid dispatcher
     *   names are:
     *   • `"notification"`
     *   • `"server_request"`
     *   • `"on_error"`
     *   • `"on_exit"`
     * @param extra_spawn_params - (table, optional) Additional context
     *   for the LSP server process. May
     *   contain:
     * @param cwd - (string) Working directory
     *   for the LSP server process
     * @param env - (table) Additional
     *   environment variables for LSP
     *   server process
     *
     * @returns  Client RPC object.
     *  Methods:
     *  • `notify()` |vim.lsp.rpc.notify()|
     *  • `request()` |vim.lsp.rpc.request()|
     *
     *     Members:
     *     • {pid} (number) The LSP server's PID.
     *     • {handle} A handle for low-level interaction with the LSP
     *       server process |vim.loop|.
     */
    start: (
      cmd?: any,
      cmd_args?: any,
      dispatchers?: any,
      extra_spawn_params?: any
    ) => any;
  };

  /** @noSelf **/
  util: {
    /**
     * Applies a `TextDocumentEdit` , which is a list of changes to a
     * single document.
     *
     * @param text_document_edit - table: a `TextDocumentEdit` object
     * @param index - number: Optional index of the edit,
     *   if from a list of edits (or nil, if
     *   not from a list)
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentEdit
     */
    apply_text_document_edit: (text_document_edit?: any, index?: any) => any;
    /**
     * Applies a list of text edits to a buffer.
     *
     * @param text_edits - (table) list of `TextEdit` objects
     * @param buf_nr - (number) Buffer id
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textEdit
     */
    apply_text_edits: (text_edits?: any, bufnr?: any) => any;
    /**
     * Applies a `WorkspaceEdit` .
     *
     * @param workspace_edit - (table) `WorkspaceEdit`
     */
    apply_workspace_edit: (workspace_edit?: any) => any;
    /**
     * Removes document highlights from a buffer.
     *
     * @param bufnr - buffer id
     */
    buf_clear_references: (bufnr?: any) => any;
    /**
     * Shows a list of document highlights for a certain buffer.
     *
     * @param bufnr - buffer id
     * @param references - List of `DocumentHighlight` objects to
     *   highlight
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#documentHighlight
     */
    buf_highlight_references: (bufnr?: any, references?: any) => any;
    /**
     * TODO: Documentation
     */
    buf_lines: (bufnr?: any) => any;
    /**
     * Returns the UTF-32 and UTF-16 offsets for a position in a
     * certain buffer.
     *
     * @param buf - buffer id (0 for current)
     * @param row - 0-indexed line
     * @param col - 0-indexed byte offset in line
     *
     * @returns  (number, number) UTF-32 and UTF-16 index of the character
     *  in line {row} column {col} in buffer {buf}
     */
    character_offset: (bufnr?: any, row?: any, col?: any) => any;
    /**
     * Creates autocommands to close a preview window when events
     * happen.
     *
     * @param events - (table) list of events
     * @param winnr - (number) window id of preview window
     *
     * See also: ~
     *     |autocmd-events|
     */
    close_preview_autocmd: (events?: any, winnr?: any) => any;
    /**
     * {offset_encoding})
     *    Returns the range table for the difference between old and new
     *    lines
     *
     *    Parameters: ~
     *        {old_lines}        table list of lines
     *        {new_lines}        table list of lines
     *        {start_line_idx}   int line to begin search for first
     *                           difference
     *        {end_line_idx}     int line to begin search for last
     *                           difference
     *        {offset_encoding}  string encoding requested by language
     *                           server
     *
     *    Return: ~
     *        table start_line_idx and start_col_idx of range
     */
    compute_diff: () => any;
    /**
     * Converts any of `MarkedString` | `MarkedString[]` |
     * `MarkupContent` into a list of lines containing valid
     * markdown. Useful to populate the hover window for
     * `textDocument/hover` , for parsing the result of
     * `textDocument/signatureHelp` , and potentially others.
     *
     * @param input - ( `MarkedString` | `MarkedString[]` |
     *   `MarkupContent` )
     * @param contents - (table, optional, default `{}` ) List of
     *   strings to extend with converted lines
     *
     * @returns  {contents}, extended with lines of converted markdown.
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_hover
     */
    convert_input_to_markdown_lines: (input?: any, contents?: any) => any;
    /**
     * Converts `textDocument/SignatureHelp` response to markdown
     * lines.
     *
     * @param signature_help - Response of `textDocument/SignatureHelp`
     * @param ft - optional filetype that will be use as
     *   the `lang` for the label markdown code
     *   block
     * @param triggers - optional list of trigger characters from
     *   the lsp server. used to better determine
     *   parameter offsets
     *
     * @returns  list of lines of converted markdown.
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_signatureHelp
     */
    convert_signature_help_to_markdown_lines: (
      signature_help?: any,
      ft?: any,
      triggers?: any
    ) => any;
    /**
     * TODO: Documentation
     */
    create_file: (change?: any) => any;
    /**
     * TODO: Documentation
     */
    delete_file: (change?: any) => any;
    /**
     * Can be used to extract the completion items from a `textDocument/completion` request, which may return one of `CompletionItem[]` , `CompletionList` or null.
     *
     * @param result - (table) The result of a
     *   `textDocument/completion` request
     *
     * @returns  (table) List of completion items
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specification#textDocument_completion
     */
    extract_completion_items: (result?: any) => any;
    /**
     * Returns visual width of tabstop.
     *
     * @param bufnr - (optional, number): Buffer handle, defaults to
     *   current
     *
     * @returns  (number) tabstop visual width
     *
     * See also: ~
     *     |softtabstop|
     */
    get_effective_tabstop: (bufnr?: any) => any;
    /**
     * Gets the zero-indexed line from the given uri.
     *
     * @param uri - string uri of the resource to get the line from
     * @param row - number zero-indexed line number
     *
     * @returns  string the line at row in filename
     */
    get_line: (uri?: any, row?: any) => any;
    /**
     * Gets the zero-indexed lines from the given uri.
     *
     * @param uri - string uri of the resource to get the lines from
     * @param rows - number[] zero-indexed line numbers
     *
     * @returns  table<number string> a table mapping rows to lines
     */
    get_lines: (uri?: any, rows?: any) => any;
    /**
     * TODO: Documentation
     */
    get_progress_messages: () => any;
    /**
     * Jumps to a location.
     *
     * @param location - ( `Location` | `LocationLink` )
     *
     * @returns  `true` if the jump succeeded
     */
    jump_to_location: (location?: any) => any;
    /**
     * Returns the items with the byte position calculated correctly
     * and in sorted order, for display in quickfix and location
     * lists.
     *
     * The result can be passed to the {list} argument of
     * |setqflist()| or |setloclist()|.
     *
     * @param locations - (table) list of `Location` s or
     *   `LocationLink` s
     *
     * @returns  (table) list of items
     */
    locations_to_items: (locations?: any) => any;
    /**
     * Helper function to return nested values in language server
     * settings
     *
     * @param settings - a table of language server settings
     * @param section - a string indicating the field of the settings
     *   table
     *
     * @returns  (table or string) The value of settings accessed via
     *  section
     */
    lookup_section: (settings?: any, section?: any) => any;
    /**
     * Creates a table with sensible default options for a floating
     * window. The table can be passed to |nvim_open_win()|.
     *
     * @param width - (number) window width (in character cells)
     * @param height - (number) window height (in character cells)
     * @param opts - (table, optional)
     *
     * @returns  (table) Options
     */
    make_floating_popup_options: (width?: any, height?: any, opts?: any) => any;
    /**
     * Creates a `DocumentFormattingParams` object for the current
     * buffer and cursor position.
     *
     * @param options - Table with valid `FormattingOptions` entries
     *
     * @returns  `DocumentFormattingParams` object
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_formatting
     */
    make_formatting_params: (options?: any) => any;
    /**
     * Using the given range in the current buffer, creates an object
     * that is similar to |vim.lsp.util.make_range_params()|.
     *
     * @param start_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the start of the last
     *   visual selection.
     * @param end_pos - ({number, number}, optional) mark-indexed
     *   position. Defaults to the end of the last
     *   visual selection.
     *
     * @returns  { textDocument = { uri = `current_file_uri` }, range = {
     *  start = `start_position` , end = `end_position` } }
     */
    make_given_range_params: (start_pos?: any, end_pos?: any) => any;
    /**
     * Creates a `TextDocumentPositionParams` object for the current
     * buffer and cursor position.
     *
     * @returns  `TextDocumentPositionParams` object
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentPositionParams
     */
    make_position_params: () => any;
    /**
     * Using the current position in the current buffer, creates an
     * object that can be used as a building block for several LSP
     * requests, such as `textDocument/codeAction` ,
     * `textDocument/colorPresentation` ,
     * `textDocument/rangeFormatting` .
     *
     * @returns  { textDocument = { uri = `current_file_uri` }, range = {
     *  start = `current_position` , end = `current_position` } }
     */
    make_range_params: () => any;
    /**
     * Creates a `TextDocumentIdentifier` object for the current
     * buffer.
     *
     * @returns  `TextDocumentIdentifier`
     *
     * See also: ~
     *     https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentIdentifier
     */
    make_text_document_params: () => any;
    /**
     * Create the workspace params
     *
     * @param added -
     * @param removed -
     */
    make_workspace_params: (added?: any, removed?: any) => any;
    /**
     * Shows contents in a floating window.
     *
     * @param contents - table of lines to show in window
     * @param syntax - string of syntax to set for opened buffer
     * @param opts - dictionary with optional fields
     *   • height of floating window
     *   • width of floating window
     *   • wrap boolean enable wrapping of long lines
     *   (defaults to true)
     *   • wrap_at character to wrap at for computing
     *   height when wrap is enabled
     *   • max_width maximal width of floating window
     *   • max_height maximal height of floating window
     *   • pad_left number of columns to pad contents
     *   at left
     *   • pad_right number of columns to pad contents
     *   at right
     *   • pad_top number of lines to pad contents at
     *   top
     *   • pad_bottom number of lines to pad contents
     *   at bottom
     *   • focus_id if a popup with this id is opened,
     *   then focus it
     *   • close_events list of events that closes the
     *   floating window
     *   • focusable (boolean, default true): Make
     *   float focusable
     *
     * @returns  bufnr,winnr buffer and window number of the newly created
     *  floating preview window
     */
    open_floating_preview: (contents?: any, syntax?: any, opts?: any) => any;
    /**
     * Parses snippets in a completion entry.
     *
     * @param input - (string) unparsed snippet
     *
     * @returns  (string) parsed snippet
     */
    parse_snippet: (input?: any) => any;
    /**
     * Previews a location in a floating window
     *
     * behavior depends on type of location:
     * • for Location, range is shown (e.g., function definition)
     * • for LocationLink, targetRange is shown (e.g., body of
     *   function definition)
     *
     * @param location - a single `Location` or `LocationLink`
     *
     * @returns  (bufnr,winnr) buffer and window number of floating window
     *  or nil
     */
    preview_location: (location?: any, opts?: any) => any;
    /**
     * Rename old_fname to new_fname
     *
     * @param opts - (table)
     */
    rename: (old_fname?: any, new_fname?: any, opts?: any) => any;
    /**
     * Replaces text in a range with new text.
     *
     * CAUTION: Changes in-place!
     *
     * @param lines - (table) Original list of strings
     * @param A - (table) Start position; a 2-tuple of {line,
     *   col} numbers
     * @param B - (table) End position; a 2-tuple of {line,
     *   col} numbers
     * @param new_lines - A list of strings to replace the original
     *
     * @returns  (table) The modified {lines} object
     */
    set_lines: (lines?: any, A?: any, B?: any, new_lines?: any) => any;
    /**
     * Converts markdown into syntax highlighted regions by stripping
     * the code blocks and converting them into highlighted code.
     * This will by default insert a blank line separator after those
     * code block regions to improve readability.
     *
     * This method configures the given buffer and returns the lines
     * to set.
     *
     * If you want to open a popup with fancy markdown, use
     * `open_floating_preview` instead
     *
     * @param contents - table of lines to show in window
     * @param opts - dictionary with optional fields
     *   • height of floating window
     *   • width of floating window
     *   • wrap_at character to wrap at for computing
     *   height
     *   • max_width maximal width of floating window
     *   • max_height maximal height of floating window
     *   • pad_left number of columns to pad contents
     *   at left
     *   • pad_right number of columns to pad contents
     *   at right
     *   • pad_top number of lines to pad contents at
     *   top
     *   • pad_bottom number of lines to pad contents
     *   at bottom
     *   • separator insert separator after code block
     *
     * @returns  width,height size of float
     */
    stylize_markdown: (bufnr?: any, contents?: any, opts?: any) => any;
    /**
     * Converts symbols to quickfix list items.
     *
     * @param symbols - DocumentSymbol[] or SymbolInformation[]
     */
    symbols_to_items: (symbols?: any, bufnr?: any) => any;
    /**
     * Turns the result of a `textDocument/completion` request into
     * vim-compatible |complete-items|.
     *
     * @param result - The result of a `textDocument/completion` call,
     *   e.g. from |vim.lsp.buf.completion()|, which may
     *   be one of `CompletionItem[]` , `CompletionList`
     *   or `null`
     * @param prefix - (string) the prefix to filter the completion
     *   items
     *
     * @returns  { matches = complete-items table, incomplete = bool }
     *
     * See also: ~
     *     |complete-items|
     */
    text_document_completion_list_to_complete_items: (
      result?: any,
      prefix?: any
    ) => any;
    /**
     * Removes empty lines from the beginning and end.
     *
     * @param lines - (table) list of lines to trim
     *
     * @returns  (table) trimmed list of lines
     */
    trim_empty_lines: (lines?: any) => any;
    /**
     * Accepts markdown lines and tries to reduce them to a filetype
     * if they comprise just a single code block.
     *
     * CAUTION: Modifies the input in-place!
     *
     * @param lines - (table) list of lines
     *
     * @returns  (string) filetype or 'markdown' if it was unchanged.
     */
    try_trim_markdown_code_blocks: (lines?: any) => any;
  };
}
