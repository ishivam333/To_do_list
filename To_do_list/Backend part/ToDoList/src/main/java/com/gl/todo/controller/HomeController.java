package com.gl.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todo.entity.ToDoList;
import com.gl.todo.serviceimpl.ToDoListServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todolist")
public class HomeController {
	@Autowired
	ToDoListServiceImpl ser;

	@PostMapping
	ResponseEntity<ToDoList> createToDoList(@RequestBody ToDoList to) {
		ToDoList t = ser.createToDoList(to);
		return new ResponseEntity<>(to, HttpStatus.CREATED);
	}

	@GetMapping("{id}")
	ResponseEntity<ToDoList> getToDoListById(@PathVariable("id") int id) {
		ToDoList t = ser.getToDoListById(id);
		return new ResponseEntity(t, HttpStatus.OK);
	}

	@PutMapping("{id}")
	ResponseEntity<ToDoList> updateToDoListById(@PathVariable("id") int id, @RequestBody ToDoList to) {
		ToDoList t = ser.updateToDoListById(id, to);
		return new ResponseEntity(t, HttpStatus.OK);

	}

	@GetMapping
	ResponseEntity<List<ToDoList>> getAllToDoList() {
		List<ToDoList> li = ser.getAllToDoList();
		return new ResponseEntity(li, HttpStatus.OK);

	}

	@DeleteMapping("{id}")
	ResponseEntity<ToDoList> deleteToDoListById(@PathVariable("id") int id) {
		ser.deleteToDoListById(id);
		return new ResponseEntity("To do delete successfully", HttpStatus.OK);
	}

	@PutMapping("done/{id}")
	ResponseEntity<ToDoList> completeTask(@PathVariable("id") int id) {
		ToDoList t = ser.completeTask(id);
		return new ResponseEntity(t, HttpStatus.OK);

	}

	@PutMapping("notDone/{id}")
	ResponseEntity<ToDoList> inCompleteTask(@PathVariable("id") int id) {
		ToDoList t = ser.inCompleteTask(id);
		return new ResponseEntity(t, HttpStatus.OK);

	}
}