const vscode = require("vscode");

function activate(context) {
  const config = vscode.workspace.getConfiguration("scrollWithCursor");
  const moveLinesUp = config.get("moveLinesUp", 1);
  const moveLinesDown = config.get("moveLinesDown", 1);

  const moveUpArgs = {
    to: "up",
    by: "line",
    value: moveLinesUp
  };

  const moveDownArgs = {
    to: "down",
    by: "line",
    value: moveLinesDown
  };

  const disposableScrollWithCursorUp = vscode.commands.registerCommand(
    "extension.scrollWithCursorUp",
    function() {
      vscode.commands.executeCommand("cursorMove", moveUpArgs);
      vscode.commands.executeCommand("editorScroll", moveUpArgs);
    }
  );
  const disposableScrollWithCursorDown = vscode.commands.registerCommand(
    "extension.scrollWithCursorDown",
    function() {
      vscode.commands.executeCommand("cursorMove", moveDownArgs);
      vscode.commands.executeCommand("editorScroll", moveDownArgs);
    }
  );
  context.subscriptions = [
    disposableScrollWithCursorUp,
    disposableScrollWithCursorDown
  ];
}

exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;
