function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    template: `
    <div class="todo">
      <form class="todo__form" ng-submit="todo.addTodo();">
        <input type="text" placeholder="Add new todo!" ng-model="todo.newTodo">
      </form>
      <ul class="todo__list">
        <li ng-repeat="item in todo.list">
          <input
            type="checkbox"
            id="todo-{{ $index }}"
            ng-model="item.completed"
            ng-change="todo.toggleState(item);">
          <label class="toggle" for="todo-{{ $index }}"></label>
          <p ng-dblclick="showEditField = true;" ng-hide="showEditField">
            {{ item.title }}
          </p>
          <div ng-show="showEditField">
            <input
              type="text"
              ng-model="item.title"
              ng-blur="todo.updateTodo(item, $index); showEditField = false;"
              todo-autofocus="showEditField">
          </div>
          <a href="" ng-click="todo.removeTodo(item, $index);">
            &#215;
          </a>
        </li>
      </ul>
      <p class="todo__remaining">
        <span ng-show="todo.getRemaining().length > 0">
          You have {{ todo.getRemaining().length }} of {{ todo.list.length }} items todo!
        </span>
        <span ng-show="todo.getRemaining().length === 0">
          You are super productive!
        </span>
      </p>
    </div>
    `
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp);
