package com.gl.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.todo.entity.ToDoList;

public interface ToDoListRepository extends JpaRepository<ToDoList, Integer>{

}
