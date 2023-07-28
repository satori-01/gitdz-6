// // 

// let array = [1, 2, 3, 4, 5];
// let newArray = array.join();
// console.log(newArray);


// function pushJoin(array, separator) {
//     let result = '';
//     for (let i = 0; i < array.length; i++) {
//       result += array[i];
//       if (i !== array.length - 1) {
//         result += separator;
//       }
//     }
//     return result;
//   }
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Пожалуйста, введите задачу");
    } else {
        var taskName = document.querySelector('#newtask input').value;
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${taskName}
                </span>
                <button class="edit">
                    <i class="fas fa-pencil-alt"> edit</i>
                </button>
                <button class="delete">
                    <i class="far fa-trash-alt"> delite</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var current_edits = document.querySelectorAll(".edit");
        for(var i=0; i<current_edits.length; i++){
            current_edits[i].onclick = function(){
                var taskDiv = this.parentNode;
                var taskNameSpan = taskDiv.querySelector('.taskname');
                var currentTaskName = taskNameSpan.textContent;
                var newTaskName = prompt("Редактировать задачу:", currentTaskName);
                if (newTaskName !== null) {
                    taskNameSpan.textContent = newTaskName;
                }
            }
        }
    }
}
