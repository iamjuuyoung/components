import 'babel-polyfill';
window.addEventListener("unhandledrejection", function (event) {
  console.warn("WARNING: Unhandled promise rejection. Reason: " + event.reason, event);
});

import KTable from "./KTable/KTable.vue";
import KTableRow from "./KTableRow/KTableRow.vue";
import Task from "./Task/Task.vue";
export { KTable, KTableRow, Task };