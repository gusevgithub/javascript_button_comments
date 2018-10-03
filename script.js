// Переменная метода document.getElementById, возвращающая ссылку на id="container":
	var idContainer = document.getElementById('container');
	// Переменная метода document.querySelector, возвращающая ссылку на элемент <section>:
	var sectionSel = document.querySelector('section');
	// Распаковываем массив объектов articles[] со статьями:
	for(var i=0;i<articles.length;i++){
		// Выводим распакованные данные массива объектов статей и разделяем по свойствам, обрамляя в селекторы HTML (теги):
		sectionSel.innerHTML += '<article><span>Заголовок стати: </span><h4>'+articles[i].title+'</h4><br><span>Дата статьи: </span><i>'+articles[i].date+'</i><br><span>Текст статьи: </span><div>'+articles[i].text+'</div><br><button>Комментарии</button><br><br><p></p><hr><br></article>';
		// Переменная метода document.querySelectorAll, возвращающая ссылку на селекторы button:
		var headers=document.querySelectorAll("button"); 
		// Переменная метода document.querySelectorAll, возвращающая ссылку на селекторы p:
		var pComment=document.querySelectorAll('p');
		// Распаковываем массив селекторов - button:
		for(var j=0;j<headers.length;j++){
			// Безымянная функция с аргументом "j":
			(function(j) { 
				// Переменная массива объектов с комментариями для статей:
				var articleComment = articles[j].comments;
				// Если комментариев нет, то:
				if(articleComment != undefined){	
					// Метод регистрации обработчика события "click",
					// Второй параметр - безымянная функция:
					headers[j].addEventListener("click", function() {
					// Если кнопка иммеет имя "Комментарии", то:
					if(headers[j].innerHTML === 'Комментарии'){
						
						// кнопка изменяется на имя - "Закрыть комментарии":
						headers[j].innerHTML = 'Закрыть комментарии';
						// Распаковываем массив объектов с комментариями и разделяем по свойствам:
						for(var k=0;k<articleComment.length;k++){
							pComment[j].innerHTML += '<span>Автор: </span><b><i>'+articleComment[k].user+'</i></b><br>';
							pComment[j].innerHTML += '<span>Комментарий: </span><i>'+articleComment[k].text+'</i><br><br>';
						} 
					}
					// В случае иного имени, имя кнопки будет - "Комментарии":
					else {
						headers[j].innerHTML = 'Комментарии';
						// Комментарии не выводятся:
						pComment[j].innerHTML = '';
					}
				  })
				} 	
				// иначе все значения селектора button скрыты:
				else {
					headers[j].style.display = 'none';
					}
			})
			// Выводим полученные данные анонимной функции с аргументом "j":
			(j);
		}	
		
	}