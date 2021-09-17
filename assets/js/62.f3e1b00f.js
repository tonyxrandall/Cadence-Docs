(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{446:function(t,e,a){"use strict";a.r(e);var n=a(8),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"activity-and-workflow-retries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-and-workflow-retries"}},[t._v("#")]),t._v(" Activity and workflow retries")]),t._v(" "),a("p",[a("Term",{attrs:{term:"activity",show:"Activities"}}),t._v(" and "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" can fail due to various intermediate conditions. In those cases, we want\nto retry the failed "),a("Term",{attrs:{term:"activity"}}),t._v(" or child "),a("Term",{attrs:{term:"workflow"}}),t._v(" or even the parent "),a("Term",{attrs:{term:"workflow"}}),t._v(". This can be achieved\nby supplying an optional retry policy. A retry policy looks like the following:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RetryPolicy defines the retry policy.")]),t._v("\nRetryPolicy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Backoff interval for the first retry. If coefficient is 1.0 then it is used for all retries.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required, no default value.")]),t._v("\n    InitialInterval time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Coefficient used to calculate the next retry backoff interval.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The next retry interval is previous interval multiplied by this coefficient.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Must be 1 or larger. Default is 2.0.")]),t._v("\n    BackoffCoefficient "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maximum backoff interval between retries. Exponential backoff leads to interval increase.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This value is the cap of the interval. Default is 100x of initial interval.")]),t._v("\n    MaximumInterval time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maximum time to retry. Either ExpirationInterval or MaximumAttempts is required.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When exceeded the retries stop even if maximum retries is not reached yet.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First (non-retry) attempt is unaffected by this field and is guaranteed to run ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for the entirety of the workflow timeout duration (ExecutionStartToCloseTimeoutSeconds).")]),t._v("\n    ExpirationInterval time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maximum number of attempts. When exceeded the retries stop even if not expired yet.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If not set or set to 0, it means unlimited, and relies on ExpirationInterval to stop.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Either MaximumAttempts or ExpirationInterval is required.")]),t._v("\n    MaximumAttempts "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Non-Retriable errors. This is optional. Cadence server will stop retry if error reason matches this list.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error reason for custom error is specified when your activity/workflow returns cadence.NewCustomError(reason).")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Error reason for panic error is "cadenceInternal:Panic".')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Error reason for any other error is "cadenceInternal:Generic".')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Error reason for timeouts is: "cadenceInternal:Timeout TIMEOUT_TYPE". TIMEOUT_TYPE could be START_TO_CLOSE or HEARTBEAT.')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that cancellation is not a failure, so it won't be retried.")]),t._v("\n    NonRetriableErrorReasons "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To enable retry, supply a custom retry policy to "),a("code",[t._v("ActivityOptions")]),t._v(" or "),a("code",[t._v("ChildWorkflowOptions")]),t._v("\nwhen you execute them.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("expiration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nretryPolicy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("cadence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RetryPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    InitialInterval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    BackoffCoefficient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MaximumInterval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ExpirationInterval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MaximumAttempts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nao "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActivityOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ScheduleToStartTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    StartToCloseTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HeartbeatTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    RetryPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            retryPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable retry.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithActivityOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nactivityFuture "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SampleActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("If "),a("Term",{attrs:{term:"activity"}}),t._v(" heartbeat its progress before it failed, the retry attempt will contain the progress\nso "),a("Term",{attrs:{term:"activity"}}),t._v(" implementation could resume from failed progress like:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SampleActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputArg InputParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    startIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" inputArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartIndex\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HasHeartbeatDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Recover from finished progress.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" finishedIndex "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetHeartbeatDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("finishedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            startIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start from next one.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Normal activity logic...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v("startIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("inputArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code for processing item i goes here...")]),t._v("\n        activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RecordHeartbeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Report progress.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Like retry for an "),a("Term",{attrs:{term:"activity"}}),t._v(", you need to supply a retry policy for "),a("code",[t._v("ChildWorkflowOptions")]),t._v(" to enable\nretry for a child "),a("Term",{attrs:{term:"workflow"}}),t._v(". To enable retry for a parent "),a("Term",{attrs:{term:"workflow"}}),t._v(", supply a retry policy when\nyou start a "),a("Term",{attrs:{term:"workflow"}}),t._v(" via "),a("code",[t._v("StartWorkflowOptions")]),t._v(".")],1),t._v(" "),a("p",[t._v("There are some subtle changes to "),a("Term",{attrs:{term:"workflow"}}),t._v("'s history "),a("Term",{attrs:{term:"event",show:"events"}}),t._v(" when "),a("code",[t._v("RetryPolicy")]),t._v(" is used.\nFor an "),a("Term",{attrs:{term:"activity"}}),t._v(" with "),a("code",[t._v("RetryPolicy")]),t._v(":")],1),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("ActivityTaskScheduledEvent")]),t._v(" will have extended "),a("code",[t._v("ScheduleToStartTimeout")]),t._v(" and "),a("code",[t._v("ScheduleToCloseTimeout")]),t._v(". These two timeouts\nwill be overwritten by the server to be as long as the retry policy's "),a("code",[t._v("ExpirationInterval")]),t._v(". If the "),a("code",[t._v("ExpirationInterval")]),t._v("\nis not specified, it will be overwritten to the "),a("Term",{attrs:{term:"workflow"}}),t._v("'s timeout.")],1),t._v(" "),a("li",[t._v("The "),a("code",[t._v("ActivityTaskStartedEvent")]),t._v(" will not show up in history until the "),a("Term",{attrs:{term:"activity"}}),t._v(" is completed or failed with no more retry.\nThis is to avoid recording the "),a("code",[t._v("ActivityTaskStarted")]),t._v(" "),a("Term",{attrs:{term:"event"}}),t._v(" but later it failed and retried. Using the "),a("code",[t._v("DescribeWorkflowExecution")]),t._v("\nAPI will return the "),a("code",[t._v("PendingActivityInfo")]),t._v(" and it will contain "),a("code",[t._v("attemptCount")]),t._v(" if it is retrying.")],1)]),t._v(" "),a("p",[t._v("For a "),a("Term",{attrs:{term:"workflow"}}),t._v(" with "),a("code",[t._v("RetryPolicy")]),t._v(":")],1),t._v(" "),a("ul",[a("li",[t._v("If a "),a("Term",{attrs:{term:"workflow"}}),t._v(" failed and needs to retry, the "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" will be closed with a "),a("code",[t._v("ContinueAsNew")]),t._v(" "),a("Term",{attrs:{term:"event"}}),t._v(". The "),a("Term",{attrs:{term:"event"}}),t._v("\nwill have the "),a("code",[t._v("ContinueAsNewInitiator")]),t._v(" set to "),a("code",[t._v("RetryPolicy")]),t._v(" and the new "),a("code",[t._v("RunID")]),t._v(" for the next retry attempt.")],1),t._v(" "),a("li",[t._v("The new attempt will be created immediately. But the first "),a("Term",{attrs:{term:"decision_task"}}),t._v(" won't be scheduled until the backoff duration\nwhich is also recorded in the new run's "),a("code",[t._v("WorkflowExecutionStartedEventAttributes")]),t._v(" "),a("Term",{attrs:{term:"event"}}),t._v(" as "),a("code",[t._v("firstDecisionTaskBackoffSeconds")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);