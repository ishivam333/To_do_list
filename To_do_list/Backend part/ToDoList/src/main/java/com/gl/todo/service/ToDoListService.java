package com.gl.todo.service;

import java.util.List;

import com.gl.todo.entity.ToDoList;

public interface ToDoListService {
	ToDoList createToDoList(ToDoList to);

	ToDoList getToDoListById(int id);

	ToDoList updateToDoListById(int id, ToDoList to);

	List<ToDoList> getAllToDoList();

	void deleteToDoListById(int id);

	ToDoList completeTask(int id);

	ToDoList inCompleteTask(int id);

}
