
    //선택자
    var tForm = document.querySelector('.tForm'),
        tInput = tForm.querySelector('input'),
        ul = document.querySelector('.todoList');

    var TODO_LS = 'todos'; 

    var toDos = []; 

    //선택자///////////////////////////////////////////////////////////////////////////////

    var saveTodo = function(){      
        localStorage.setItem(TODO_LS,JSON.stringify(toDos));
    };//func. saveTodo 


    var deleteTodo = function(e){
        var btn = e.target;
        var li = btn.parentNode;
        ul.removeChild(li); 
        var clearTodos = toDos.filter(function(todo){
            return todo.id !== parseInt(li.id);
        });//filter

        toDos = clearTodos;
        
        saveTodo();
    };//func.deleteTodo


    var printTodo = function(text){
        var li = document.createElement('li'), 
            del = document.createElement('button'), 
            span = document.createElement('span'); 

            var newId = toDos.length+1; 

            del.innerText = 'X'; 
            span.innerText = text; 
            li.appendChild(del); 
            li.appendChild(span);
            ul.appendChild(li);

            del.addEventListener('click',deleteTodo); 

            li.id = newId; 
            var toDo_Obj = {
                text : text,
                id : newId
            }; 

            toDos.push(toDo_Obj);

            saveTodo();
    };//func.prinTodo 


    var todoSubmit = function(e){
        e.preventDefault(); 
        var todoValue = tInput.value;
                    
        printTodo(todoValue);
        tInput.value = '';
    };//func.todoSubmit 


    var loadTodo = function(){
        var load_todo = localStorage.getItem(TODO_LS);
        if(load_todo !== null){
                                
            var parseTodo = JSON.parse(load_todo);

            parseTodo.forEach(function(t){
                printTodo(t.text);
            });//forEach

        };//if
    };//func.laodTodo

    loadTodo();

    tForm.addEventListener('submit',todoSubmit);

