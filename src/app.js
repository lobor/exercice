import Cell from 'cell';
import history from 'history';

window.app = {
	$cell: true,
	id: 'todolist',
  $components: [
    {
      $type: "input",
      type: "text",
      placeholder: "Type something and press enter",
      style: "width: 100%; outline:none; padding: 5px;",
      $init: function(e) { this.focus() },
      onkeyup: function(e) {
        if (e.keyCode === 13) {
          document.querySelector("#list")._add(this.value);
          this.value = "";
        }
      }
    },
    {
      $type: "ol",
      id: "list",
      _items: [],
      _add: function(val) { this._items.push(val) },
      _remove: function(index) { this._items.splice(index, 1); },
      $update: function() {
        this.$components = this._items.map(function(item) {
          return {
						$type: "li",
						$components: [{
							$text: item
						}]
					}
        })
      }
    }
  ]
};

Cell.plan(window);
Cell.create(window);
